//make a router class that enables client side routing
export default class Router {
    //constructor
    constructor() {
        //initialize the page url
        this.pageUrl = ree.pageUrl;
        //initialize the request object
        this.req = ree.req;
        //initialize the hash
        this.hash = ree.hash;
        this.loadRoutes();
        logger("ReeBlaze Initialized", "🚦");
        if (window?.history) {
            $$("a").forEach(a => { a.addEventListener('click', (e) => this.onClick(e)) });
            window.addEventListener('popstate', (e) => this.onPop(e));
            this.enabled = true;
        } else {
            logger("ReeBlaze Failed To Start Due To `window.history` API not available.", "🚦");
            this.enabled = false;
        }
    }
    async loadRoutes() {
        let radix = await Import("https://esm.sh/radix3");
        this.router = radix.createRouter();
        //initialize the routes array
        this.routes = ree.routes;
        this.routes.forEach(route => {
            this.router.insert(route.path, { payload: route.file });
        });
    }
    async lookup(url) {
        if(!this.router) await this.loadRoutes();
        return this.router.lookup(url);
    }
    onClick(e) {
        this.reconstructDOM(this.handleLinkClick(e));
    }
    onPop(e) {
        this.reconstructDOM(this.handlePopState(e));
    }
    getRoute(){
        return this.route;
    }
    async reconstructDOM(c) {
        if (!this.router) await this.loadRoutes();
        let foundRoute = this.router.lookup(c.next.replace(location.origin, ""));
        if (!foundRoute) foundRoute = this.router.lookup(c.next.replace(location.origin, "").slice(0, -1));
        if (foundRoute) {

            let page = await Import(foundRoute.payload);
            let lastPage = await Import(ree.pageUrl);
            let shouldDWTW = (!$("head style[data-twind]") && (page.config?.twindCSR || page.config?.twindSSR || ree.opts?.twindSSR));
            if (shouldDWTW) {
                logger("Starting TWIND", "DEBUG");
                ree.twind = await Import("@twind/cdn");
            }
            if(page?.config?.body && (lastPage?.config?.body!=page?.config?.body)) {
                let vbody = document.createElement("body");
                ree.reeact.render(ree.html`<${page.config.body} />`, vbody);
                ree.vbody = vbody;
                document.body.outerHTML = vbody.outerHTML;
            }
            if(!page?.config?.body){
                //make default body
                document.body.outerHTML = `<body><div id="app"></div></body>`;
            }
            ree.pageUrl = foundRoute.payload;
            $("html").setAttribute("hidden","");
            $("#app").innerHTML="";
            try{
            ree.reeact.render(ree.html`<${page.default} />`, $("#app"));
            }catch(e){
                console.log(e);
                location.reload(); // the error if there, tells us that render is not defined, reload the page
            }
            if(shouldDWTW){
                ree.twind.setup();
            }
            [...$$("head")].filter(e=>e.outerHTML=="<head></head>").forEach(e=>e.remove())
            $("head style#old-twind")?.remove();
            $("html").removeAttribute("hidden");
            if(page?.config?.runAfterInit) await page?.config?.runAfterInit();
            $$("a").forEach(a => { a.addEventListener('click', (e) => this.onClick(e)) });
            if(page.head){
                let newHead = document.createElement("head");
                let currentHead = document.head;
                ree.reeact.render(ree.html`<${page.head} />`, newHead);
                const old = Array.from(currentHead.children);
                const next = Array.from(newHead.children);
                const freshNodes = next.filter(
                  (newNode) => !old.find((oldNode) => oldNode.isEqualNode(newNode))
                );
                freshNodes.forEach((node) => {
                    //if the node with same element name exists, replace it
                    if(currentHead.querySelector(node.tagName)){
                        currentHead.querySelector(node.tagName).replaceWith(node);
                    }
                    else{
			    logger(node,"node");
			    if(node.tagName=="REEJS-SCRIPT"){
				    let script = document.createElement("script");
				    script.src = s.attributes.src.value;
				    document.head.appendChild(script);
			    }
			    else{
                  currentHead.appendChild(node);
			    }
                    }
                });
            }
            $$("reejs-script").forEach(s => {
                let script = document.createElement("script");
                script.src = s.attributes.src.value;
                document.head.appendChild(script);
                s.remove();
            })
            $$("script").forEach(s => s.remove());
            $$("head link[rel='preload']").forEach(s => s.remove());
            this.currentPage = page;
        }
        else {
            logger(`No Route Found For ${c.next}`, "🚦");
        }
    }

    handleLinkClick(e, pop) {
        let anchor;
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
            return { type: 'disqualified' };
        }

        // Find element containing href
        for (
            var n = e.target;
            n.parentNode;
            n = n.parentNode
        ) {
            if (n.nodeName === 'A') {
                anchor = n;
                break;
            }
        }

        // External links
        if (anchor && anchor.host !== location.host) {
            anchor.target = '_blank';
            return { type: 'external' };
        }

        // User opt-out
        if (anchor && 'cold' in anchor?.dataset) {
            return { type: 'disqualified' };
        }

        // Link qualified
        if (anchor?.hasAttribute('href')) {
            const ahref = anchor.getAttribute('href');
            const url = new URL(ahref, location.href);

            // Start router takeover
            e.preventDefault();

            // If anchor, scroll,
            if (ahref?.startsWith('#')) {
                scrollToAnchor(ahref);
                return { type: 'scrolled' };
            } else {
                const next = this.fullURL(url.href);
                const prev = this.fullURL();

                logger(`Link Clicked For ${next}`, "🚦");
                this.addToHistory(next);
                //TODO: add state when reejs itself supports them omai gawd...
                return { type: 'link', next, prev };
            }
        }
        else if (pop) {
            const next = this.fullURL(document.location);
            const prev = this.fullURL();
            return { type: "popstate", next, prev };
        }
        else {
            return { type: 'noop' };
        }
    }

    handlePopState(e) {
        e.preventDefault();
        return this.handleLinkClick(e, true);
    }
    addToHistory(url, state = {}) {
        window.history.pushState(state, "", url);
    }
    fullURL(url) {
        const href = new URL(url || window.location.href).href;
        return href;
    }
    async startPrefetchLinksInViewport() {
        //use intersection observer to prefetch links in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(async entry => {
                if (entry.isIntersecting) {
                    const link = entry.target;
                    const url = new URL(link.href, location.href);
                    const next = this.fullURL(url.href);
                    if (next !== location.href) {
                        if (!this.router) {
                            await this.loadRoutes();
                        }
                        let foundRoute = this.router.lookup(next.replace(location.origin, ""));
                        if (!foundRoute) foundRoute = this.router.lookup(next.replace(location.origin, "").slice(0, -1));
                        if (foundRoute) {
                            Import(foundRoute.payload);
                        }
                    }
                }
            });
        });
        const links = $$('a[href]');
        links.forEach(link => {
            observer.observe(link);
        });
    }
    load(url){
        this.addToHistory(url);
        this.reconstructDOM({next: url});
    }
}

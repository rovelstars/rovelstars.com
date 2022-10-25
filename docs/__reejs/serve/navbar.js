(() => {
  let fn = (e, el) => {
    e.stopPropagation();
    let body = $("body");
    body.classList.toggle("dark");
    //change the theme button emoji
    let emoji = theme.innerHTML;
    if (emoji == "🌙") {
      $$(".theme-button").forEach(ell => ell.innerHTML = "☀️");
      localStorage.setItem("theme", "dark");
    }
    else {
      $$(".theme-button").forEach(ell => ell.innerHTML = "🌙");
      localStorage.setItem("theme", "light");
    }
  };
  let navbar = $("#navbar");
  navbar.addEventListener("click", (e) => {
    //add a new div to the body that hover over the whole page
    let overlay = $("#overlay");
    if (overlay) {
      overlay.classList.remove("hidden");
    }
    else {
      overlay = document.createElement("div");
      overlay.id = "overlay";
      overlay.classList.add("bg-black/50 backdrop-blur-xl fixed top-0 left-0 w-full h-full z-50".split(" "));
      overlay.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full">
      <div class="flex flex-col items-center justify-center p-8 bg-black/30 rounded-xl">
        <a href="/" class="px-2 dark:text-slate-300 text-lg font-bold">Home</a>
        <a href="/about" class="px-2 dark:text-slate-300 text-lg font-bold">About</a>
        <a href="/contact" class="px-2 dark:text-slate-300 text-lg font-bold">Contact</a>
        <button class="bg-slate-600 dark:bg-yellow-200 border border-slate-400 dark:border-slate-700 rounded rounded-md p-2 theme-button">🌙</button>
      </div>
    </div>
    `;
      document.body.appendChild(overlay);
      $$(".theme-button")[1].addEventListener("click", e => { fn(e, $$(".theme-button")[1]) });
      //if user clicks in overlay parent div, hide it
      let overlayParent = $("#overlay > div");
      overlayParent.addEventListener("click", (e) => {
        e.stopPropagation();
        overlay.classList.add("hidden");
      });
    }
  });
  let theme = $(".theme-button");
  theme.addEventListener("click", (e) => { fn(e, theme) });
})();
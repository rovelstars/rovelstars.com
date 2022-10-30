let Container = await Import("src/components/container.jsx");
export default function () {
  return React.createElement(Container, null
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}
      , React.createElement('span', { className: "bg-clip-text text-transparent bg-gradient-to-b from-emerald-600 to-blue-600"    ,}, "Building a better place on"
            ), " 🌏"
    )
    , React.createElement('p', { className: "text-2xl lg:text-4xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200"        ,}, "Focused on building better products that \""

      , React.createElement('span', { className: "bg-clip-text text-transparent bg-gradient-to-b from-amber-600 to-pink-500 dark:from-amber-400 dark:to-pink-500"      ,}, "Just works."

      ), "\""
    )
     /* show 3 boxes that are clickable, which sends to one of our products */ 
     /* first product is discord.rovelstars.com */ 
    , React.createElement('div', { className: "flex flex-col lg:flex-row justify-center items-center text-center font-bold mx-8"       ,}
      , React.createElement('div', { className: "flex flex-col justify-center items-center text-center font-bold mx-8 my-8 p-4 bg-slate-600 dark:bg-slate-900 rounded-md"           ,}
        , React.createElement('a', { href: "https://discord.rovelstars.com",}
          , React.createElement('img', { src: "https://discord.rovelstars.com/assets/img/bot/logo.svg", className: "w-32 h-32" ,} )
        )
        , React.createElement('h1', { className: "text-2xl lg:text-4xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200"        ,}
          , React.createElement('span', { className: "bg-clip-text text-transparent bg-gradient-to-b from-emerald-600 to-blue-600"    ,}, "Rovel Discord List"

          )
        )
        , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200"        ,}
          , React.createElement('span', { className: "bg-clip-text text-transparent bg-gradient-to-b from-amber-600 to-pink-500 dark:from-amber-400 dark:to-pink-500"      ,}, "A Discord List that is focused on building a better place on Discord."

          )
        )
      )
       /* second product is ree.js.org */ 
      , React.createElement('div', { className: "flex flex-col justify-center items-center text-center font-bold mx-8 my-8 p-4 bg-slate-600 dark:bg-slate-900 rounded-md"           ,}
        , React.createElement('a', { href: "https://ree.js.org",}
          , React.createElement('h1', { className: "w-48 h-32 bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-pink-600 text-4xl lg:text-6xl align-middle"         ,}, "Ree.js")
        )
        , React.createElement('h1', { className: "text-2xl lg:text-4xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200"        ,}
          , React.createElement('span', { className: "bg-clip-text text-transparent bg-gradient-to-b from-emerald-600 to-blue-600"    ,}, "Ree.js - A Reeact Framework"

          )
        )
        , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200"        ,}
          , React.createElement('span', { className: "bg-clip-text text-transparent bg-gradient-to-b from-amber-600 to-pink-500 dark:from-amber-400 dark:to-pink-500"      ,}, "A No Build Required React Framework that is focused on building a better place on the web."

          )
        )
      )
      )
  );
}
export function head() {
  return React.createElement(React.Fragment, null
    , React.createElement('title', null, "Rovel Stars" )
    , React.createElement('script', { src: "/__reejs/serve/navbar.js",})
  );
}

export let config = Container.config;

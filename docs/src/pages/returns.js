let Container = await Import("src/components/container.jsx");
export default function () {
  return React.createElement(Container, null
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8 text-emerald-600"        ,}, "Return Policy" )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "Last Updated: 25-10-2022"  )
     /* create a line below*/ 
    , React.createElement('hr', { className: "my-8 rounded-md border-2 border-slate-400 dark:border-slate-800 mx-16"     ,} )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "Refunds are not possible in following cases:"      )
    , React.createElement('ul', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}
      , React.createElement('li', null, "Refunds are not possible if you have:"
        , React.createElement('ul', null
          , React.createElement('li', null, "Used a paid service for more than 6 hours from the time of activation."             )
          , React.createElement('li', null, "Redeemed a paid product, like virtual money."      )
          , React.createElement('li', null, "Used a paid product for more than 24 hours from the time of activation."             )
          , React.createElement('li', null, "Provided Money as Donation, since those money are automatically redeemed to our server hosting costs."              )
        )
      )
      )
    )
}
export function head() {
  return React.createElement(React.Fragment, null
    , React.createElement('title', null, "Rovel Stars - Return Policy"    )
    , React.createElement('script', { src: "/__reejs/serve/navbar.js",})
  );
}
export let config = Container.config;

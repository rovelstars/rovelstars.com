let Container = await Import("src/components/container.jsx");
export default function () {
  return React.createElement(Container, null
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "404")
  );
}
export function head() {
  return React.createElement(React.Fragment, null
    , React.createElement('title', null, "Rovel Stars - 404"   )
    , React.createElement('reejs-script', { src: "/__reejs/serve/navbar.js",})
  );
}

export let config = Container.config;
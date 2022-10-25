let Container = await Import("src/components/container.jsx");
export default function () {
  return <Container>
    <h1 className="text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8">404</h1>
  </Container>;
}
export function head() {
  return <>
    <title>Rovel Stars - 404</title>
    <reejs-script src="/__reejs/serve/navbar.js"></reejs-script>
  </>;
}

export let config = Container.config;
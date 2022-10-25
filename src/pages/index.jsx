let Container = await Import("src/components/container.jsx");
export default function () {
  return <Container>
    <h1 className="text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8">
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-600 to-blue-600">
        Building a better place on</span> 🌏
    </h1>
    <p className="text-2xl lg:text-4xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200">
      Focused on building better products that
      "<span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-600 to-pink-500 dark:from-amber-400 dark:to-pink-500">
        Just works.
      </span>"
    </p>
    { /* show 3 boxes that are clickable, which sends to one of our products */ }
    { /* first product is discord.rovelstars.com */ }
    <div className="flex flex-col lg:flex-row justify-center items-center text-center font-bold mx-8">
      <div className="flex flex-col justify-center items-center text-center font-bold mx-8 my-8 p-4 bg-slate-600 dark:bg-slate-900 rounded-md">
        <a href="https://discord.rovelstars.com">
          <img src="https://discord.rovelstars.com/assets/img/bot/logo.svg" className="w-32 h-32" />
        </a>
        <h1 className="text-2xl lg:text-4xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-600 to-blue-600">
            Rovel Discord List
          </span>
        </h1>
        <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-600 to-pink-500 dark:from-amber-400 dark:to-pink-500">
            A Discord List that is focused on building a better place on Discord.
          </span>
        </p>
      </div>
      { /* second product is ree.js.org */ }
      <div className="flex flex-col justify-center items-center text-center font-bold mx-8 my-8 p-4 bg-slate-600 dark:bg-slate-900 rounded-md">
        <a href="https://ree.js.org">
          <h1 className="w-48 h-32 bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-pink-600 text-4xl lg:text-6xl align-middle" >Ree.js</h1>
        </a>
        <h1 className="text-2xl lg:text-4xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-600 to-blue-600">
            Ree.js - A Reeact Framework
          </span>
        </h1>
        <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8 dark:text-slate-200">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-600 to-pink-500 dark:from-amber-400 dark:to-pink-500">
            A No Build Required React Framework that is focused on building a better place on the web.
          </span>
        </p>
      </div>
      </div>
  </Container>;
}
export function head() {
  return <>
    <title>Rovel Stars</title>
    <reejs-script src="/__reejs/serve/navbar.js"></reejs-script>
  </>;
}

export let config = Container.config;
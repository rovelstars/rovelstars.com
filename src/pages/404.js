import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Head>
        <title>404 | Rovel Stars</title>
      </Head>
      <h1 className="text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8">
        404
      </h1>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        Page Not Found
      </p>
      <Footer />
    </>
  );
}

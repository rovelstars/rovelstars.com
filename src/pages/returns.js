import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Returns() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Terms of Service | Rovel Stars</title>
      </Head>
      <h1 className="text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8 text-emerald-600">
        Return Policy
      </h1>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        Last Updated: 25-10-2022
      </p>
      {/* create a line below*/}
      <hr className="my-8 rounded-md border-2 border-slate-400 dark:border-slate-800 mx-16" />
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        Refunds are not possible in following cases:
      </p>
      <ul className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        <li>
          Refunds are not possible if you have:
          <ul>
            <li>
              Used a paid service for more than 6 hours from the time of
              activation.
            </li>
            <li>Redeemed a paid product, like virtual money.</li>
            <li>
              Used a paid product for more than 24 hours from the time of
              activation.
            </li>
            <li>
              Provided Money as Donation, since those money are automatically
              redeemed to our server hosting costs.
            </li>
          </ul>
        </li>
      </ul>
      <Footer />
    </>
  );
}

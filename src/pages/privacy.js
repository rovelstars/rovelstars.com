import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Privacy Policy | Rovel Stars</title>
      </Head>
      <h1 className="text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8">
        Privacy Policy
      </h1>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        Last Updated: 25-10-2022
      </p>
      {/* create a line below*/}
      <hr className="my-8 rounded-md border-2 border-slate-400 dark:border-slate-800 mx-16" />
      {/* notify the user that we collect basic information*/}
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We collect basic information about you, like your IP address, and your
        browser information.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We store your user data like Username, Bio and other account information
        when you sign up to any of our services.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We use this information to provide you with a better experience, and to
        monitor & improve our services.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        Third Party Products Like Google Analytics, Cloudflare and other
        services that we use has their own Privacy Policy, please read them too.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We do not "sell" your information to any third party. Your information
        will be shared only with the third party applications/services that you
        authorize to. Their respected privacy policy governs their use of your
        information.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We do not share your information with any third party, unless we are
        required to do so by law.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We store the information that you provide to us, like your email
        address, username, password, etc. IP address, Location are temporarily
        stored (not identificable though) on our logs, and they are removed
        periodically everyday.
      </p>
      <p className="text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8">
        We do not store any payment information, like your credit card number,
        or your bank account number.
      </p>
      <Footer />
    </>
  );
}

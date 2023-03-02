import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  useState(() => {}, []);
  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-normalize font-black">
        Let's make a better place for everyone!
      </h1>
      <p className="text-2xl text-center text-normalize font-semibold my-4">
        Focused on building better products that{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
          help people
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:to-indigo-400">
          makes a difference
        </span>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-4 my-2 gap-4 overflow-x-scroll w-auto">
        <div className="flex flex-col justify-center items-center rounded-lg bg-slate-100/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-900 px-10 py-4 w-full h-64">
          <Image
            src="//discord.rovelstars.com/assets/img/logo.svg"
            width="100"
            height="100"
          />
          <Link
            href="https://discord.rovelstars.com"
            className="text-2xl text-center text-normalize font-semibold my-4 text-blue-600 dark:text-blue-300"
          >
            Rovel Discord List
          </Link>
          <p className="text-normalize text-center">
            Imagine a place, where you can find everything about Discord
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg bg-slate-100/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-900 px-10 py-4 w-full h-64">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-4xl text-center text-normalize font-semibold my-4 mb-auto">
            Ree.js
          </p>
          <p className="text-normalize text-center mt-auto">
            A No-build Required Web Framework
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg bg-slate-100/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-900 px-10 py-4 w-full h-64">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-4xl text-center text-normalize font-semibold my-auto">
            More Coming Soon...
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

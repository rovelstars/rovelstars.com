import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="!block min-h-screen bg-gray-100 dark:bg-black dark:text-white"
        style={{
          display: "none!",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

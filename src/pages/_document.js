import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:image" content="/logo.svg" />
        <meta name="twitter:card" content="summary_small_image" />
        <meta name="twitter:image" content="/logo.svg" />
        <meta name="twitter:site" content="@rovelstars" />
        <meta name="favicon" href="/logo.svg" />
      </Head>
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

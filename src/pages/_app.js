import "@/styles/style.css";
import { install } from "@twind/core";
import config from "../../twind.config";

install(config);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

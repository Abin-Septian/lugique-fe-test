import MainLayouts from "@/layouts/main";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayouts>
      <Component {...pageProps} />
    </MainLayouts>
  );
}


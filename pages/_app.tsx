import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <SessionProvider>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;

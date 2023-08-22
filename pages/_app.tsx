import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ContextProvider from "../context/ContextProvider";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <SessionProvider>
        <ContextProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;

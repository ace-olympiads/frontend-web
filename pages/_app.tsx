import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import ContextProvider from "../context/ContextProvider";
import Footersec from "../components/Footersec";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Toaster />
      <ContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Footersec />
      </ContextProvider>
    </main>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { StudentProvider } from "../StudentContext";
import { useRouter } from "next/router";
import Loader from "@/components/loader/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = (url: string) => {
      if (url === router.asPath) {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath]);

  return (
    <StudentProvider>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </StudentProvider>
  );
}

export default MyApp;

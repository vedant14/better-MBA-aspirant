import { useState, useEffect } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import UserProvider from "../context/UserProvider";
import { useRouter } from "next/router";
import * as gtag from "../services/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <UserProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;

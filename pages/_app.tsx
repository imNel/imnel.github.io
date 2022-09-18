import "../styles/global.scss";
import "normalize.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollY } = useScroll();
  const [y, setY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setY(latest);
    });
  }, []);

  return (
    <>
      <div
        className="background"
        style={{ transform: `translateY(${y * 0.5}px)` }} // Experimental Parallaxing
      ></div>
      <Header />
      <Component {...pageProps} y={y} />
    </>
  );
}

export default MyApp;

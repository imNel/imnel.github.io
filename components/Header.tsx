import Link from "next/link";
import { useEffect, useState } from "react";
import style from "../styles/Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeDelayed, setActiveDelayed] = useState(false);

  const button = {
    duration: 0.5,
    top: {
      open: { y: [0, 7.5], rotate: [0, 0, -45, -45] },
      close: { y: [7.5, 0], rotate: [-45, -45, 0, 0] },
    },
    middle: {
      open: { scaleX: [1, 0, 0, 0] },
      close: { scaleX: [0, 0, 0, 1] },
    },
    bottom: {
      open: { y: [0, -7.5], rotate: [0, 0, 45, 45] },
      close: { y: [-7.5, 0, 0], rotate: [45, 45, 0, 0] },
    },
  };

  // Gonna just update this accordingly, just be glad its not a magic number :)
  const numberOfNavElements = 3;

  const menuChildrenStagger = 0.2;
  const menu = {
    duration: 0.3,
    nav: {
      open: {
        width: "100%",
        transition: {
          when: "beforeChildren",
          staggerChildren: menuChildrenStagger,
        },
      },
      close: {
        width: "0%",
        transition: {
          when: "afterChildren",
          ease: "linear",
          staggerChildren: menuChildrenStagger,
          staggerDirection: -1,
        },
      },
    },
    item: {
      open: { opacity: 1 },
      close: { opacity: 0 },
    },
  };

  // Delayed state to apply CSS after animation
  useEffect(() => {
    active && setActiveDelayed(true);
    const delay = setTimeout(() => {
      !active && setActiveDelayed(false);
    }, (menu.duration + menuChildrenStagger * numberOfNavElements) * 1000);
    return () => clearTimeout(delay);
  }, [active]);

  return (
    <div className={style.header}>
      <div className={style.btn} onClick={() => setActive(!active)}>
        <motion.span
          initial={false}
          variants={button.top}
          animate={active ? "open" : "close"}
          transition={{ duration: button.duration }}
        ></motion.span>
        <motion.span
          initial={false}
          variants={button.middle}
          animate={active ? "open" : "close"}
          transition={{ duration: button.duration }}
        ></motion.span>
        <motion.span
          initial={false}
          variants={button.bottom}
          animate={active ? "open" : "close"}
          transition={{ duration: button.duration }}
        ></motion.span>
      </div>
      <motion.div
        className={`${style.main_outer} ${
          activeDelayed ? style.main_outer_active : ""
        }`}
        variants={menu.nav}
        animate={active ? "open" : "close"}
        transition={{ duration: menu.duration }}
      >
        <div className={style.main}>
          <Link href="/">
            <motion.a variants={menu.item}>Home</motion.a>
          </Link>
          <Link href="projects">
            <motion.a variants={menu.item}>Projects</motion.a>
          </Link>
          <Link href="blog">
            <motion.a variants={menu.item}>Blog</motion.a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

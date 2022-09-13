import Link from "next/link";
import { useState } from "react";
import style from "../styles/Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState(false);
  const menu = {
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

  const menuOpen = {
    open: { width: "100%" },
    close: { width: "0" },
  };

  const animDur = 0.5;

  return (
    <div className={style.header}>
      <div className={style.btn} onClick={() => setActive(!active)}>
        <motion.span
          initial={false}
          variants={menu.top}
          animate={active ? "open" : "close"}
          transition={{ duration: animDur }}
        ></motion.span>
        <motion.span
          initial={false}
          variants={menu.middle}
          animate={active ? "open" : "close"}
          transition={{ duration: animDur }}
        ></motion.span>
        <motion.span
          initial={false}
          variants={menu.bottom}
          animate={active ? "open" : "close"}
          transition={{ duration: animDur }}
        ></motion.span>
      </div>
      <motion.nav
        variants={menuOpen}
        animate={active ? "open" : "close"}
        className={`${style.main}`}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="projects">
          <a>Projects</a>
        </Link>
        <Link href="blog">
          <a>Blog</a>
        </Link>
      </motion.nav>
    </div>
  );
};

export default Header;

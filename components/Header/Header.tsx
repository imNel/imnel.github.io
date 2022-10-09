import { useEffect, useState } from "react";
import style from "../../styles/Header.module.scss";
import { motion } from "framer-motion";
import { menu, menuChildrenStagger } from "./variants";
import HeaderLink from "./HeaderLink";
import HeaderButton from "./HeaderButton";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeDelayed, setActiveDelayed] = useState(false);

  // Gonna just update this accordingly, just be glad its not a magic number :)
  const numberOfNavElements = 2;

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
      <HeaderButton active={active} setActive={setActive} />
      <motion.div
        className={`${style.main_outer} ${
          activeDelayed ? style.main_outer_active : ""
        }`}
        variants={menu.nav}
        initial={false}
        animate={active ? "open" : "close"}
        transition={{ duration: menu.duration }}
      >
        <div className={style.main}>
          <HeaderLink href="/" display="Home" />
          {/* <HeaderLink href="/projects" display="Projects" /> */}
          <HeaderLink href="/blog" display="Blog" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

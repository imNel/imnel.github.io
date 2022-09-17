import style from "../../styles/Header.module.scss";
import { motion } from "framer-motion";
import { button } from "./variants";
import { Dispatch, SetStateAction } from "react";

const HeaderButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => (
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
);

export default HeaderButton;

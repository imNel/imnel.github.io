import Link from "next/link";
import { motion } from "framer-motion";
import style from '../../styles/Button.module.scss'

const Button = ({text}:{text: string}) => (
  <Link href="/projects">
    <motion.button
      whileHover={{ x: 10 }}
      whileTap={{ x: 5 }}
      className={style.btn}
    >
      {text}
    </motion.button>
  </Link>
);

export default Button;

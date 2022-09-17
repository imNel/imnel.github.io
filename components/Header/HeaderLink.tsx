import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../../styles/Header.module.scss";
import { menu } from "./variants";

const HeaderLink = ({ href, display }: any) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <motion.a variants={menu.item}>
        {display}
        {router.pathname === href && (
          <motion.div layoutId="menu_underline" className={style.highlight} />
        )}
      </motion.a>
    </Link>
  );
};

export default HeaderLink;

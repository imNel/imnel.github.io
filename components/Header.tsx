import Link from "next/link";
import style from "../styles/Header.module.scss";

const Header = () => {
  return (
    <nav className={style.main}>
      <div className={style.btn}>
        <svg>
          <line x1="0" y1="0%" x2="100%" y2="0%" strokeWidth="2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="1" />
          <line x1="0" y1="100%" x2="100%" y2="100%" strokeWidth="2" />
        </svg>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="projects">
        <a>Projects</a>
      </Link>
      <Link href="blog">
        <a>Blog</a>
      </Link>
    </nav>
  );
};

export default Header;

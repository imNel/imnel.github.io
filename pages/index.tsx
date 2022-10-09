import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const featureList = {
  parent: {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  child: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

const Home: NextPage = ({ y }: any) => {
  return (
    <div className={style.container}>
      <section className={style.feature}>
        <motion.ul
          variants={featureList.parent}
          initial="hidden"
          animate="visible"
          className={style.feature_list}
        >
          <motion.li variants={featureList.child}>
            Hey! This site is still in dev, bear with me while I work on it in
            my free time :)
          </motion.li>
          <motion.li variants={featureList.child}>
            With that aside, uhh this is me
          </motion.li>
          <motion.li variants={featureList.child}>
            I’m a Frontend Dev & UI/UX Designer.
          </motion.li>
          <motion.li variants={featureList.child}>
            I have passionate interests in Linux and FOSS, and I’m looking to
            contribute more in my free time.
          </motion.li>
          <motion.li variants={featureList.child}>
            While you’re here, check out my <Link href="/blog"><a>blog!</a></Link>
          </motion.li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 0.3 }}
        >
          <div className={style.feature_image}>
            <div>
              <img src="me.png" alt="Selfie of me" />
            </div>
            <div
              style={{ transform: `translateY(${y * -0.05}px)` }}
              className={style.feature_image_bg}
            >
              <div></div>
            </div>
          </div>
          <div className={style.feature_image_caption}>
            Me and <a href="/roxy">Roxy!</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

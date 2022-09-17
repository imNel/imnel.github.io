import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className={style.container}>
      <ul className={style.feature_list}>
        <li>test</li>
        <li>test</li>
      </ul>
      <div className={style.feature_image}>
        <div>
          <img src="me.png" />
        </div>
        <div className={style.feature_image_bg}>
          <div></div>
        </div>
      </div>
      <div>
        posts
        {posts.map((post: any, index: any) => (
          <h2 key={"post_" + index}>{post.frontmatter.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // Getting files from posts dir
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

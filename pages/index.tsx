import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <div className={styles.container}>
        {posts.map((post: any, index: any) => (
          <h2 key={"post_" + index}>{post.frontmatter.title}</h2>
        ))}
      </div>
    </>
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

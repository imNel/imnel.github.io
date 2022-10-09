import type { NextPage } from "next";
import style from "../../styles/Blog.module.scss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import { motion } from "framer-motion";

const Blog: NextPage = ({ posts, y }: any) => {
  return (
    <div className={style.container}>
      <h1>Recent posts</h1>
      {posts.map((post: any, index: any) => (
        <div key={"post_" + index}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.excerpt}</p>
          <img src={post.frontmatter.image} />
        </div>
      ))}
    </div>
  );
};

export default Blog;

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

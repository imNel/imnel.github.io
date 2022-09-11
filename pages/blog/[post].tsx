import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { marked } from "marked";

const BlogPost = ({ frontmatter, post, content }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>;
};

export default BlogPost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      post: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", post + ".md"),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      post,
      content,
    },
  };
}

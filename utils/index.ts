export const sortByDate = (a: any, b: any) => {
  return (
    new Date(b.frontmatter.date).getDate() -
    new Date(a.frontmatter.date).getDate()
  );
};

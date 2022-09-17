export const menuChildrenStagger = 0.2;

export const menu = {
  duration: 0.3,
  nav: {
    open: {
      width: "100%",
      transition: {
        when: "beforeChildren",
        ease: "linear",
        staggerChildren: menuChildrenStagger,
      },
    },
    close: {
      width: "0%",
      transition: {
        when: "afterChildren",
        ease: "linear",
        staggerChildren: menuChildrenStagger,
        staggerDirection: -1,
      },
    },
  },
  item: {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: -15 },
  },
};

export const button = {
  duration: 0.5,
  top: {
    open: { y: [0, 12], rotate: [0, 0, -45, -45] },
    close: { y: [12, 0], rotate: [-45, -45, 0, 0] },
  },
  middle: {
    open: { scaleX: [1, 0, 0, 0] },
    close: { scaleX: [0, 0, 0, 1] },
  },
  bottom: {
    open: { y: [0, -12], rotate: [0, 0, 45, 45] },
    close: { y: [-12, 0], rotate: [45, 45, 0, 0] },
  },
};

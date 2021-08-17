const aboutAnimation = {
  x: 0,
  transition: {
    type: "spring",
    duration: 2.5,
    bounce: 0,
  },
};

const dissapearLeft = {
  x: "-20%",
};

const experienceAnimation = {
  scale: 1,
  x: 0,
  transition: {
    duration: 1.5,
  },
};

const dissapearScale = {
  scale: 0.8,
};

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export {
  aboutAnimation,
  dissapearLeft,
  experienceAnimation,
  dissapearScale,
  container,
  item,
};

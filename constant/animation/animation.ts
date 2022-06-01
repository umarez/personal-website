export const ABOUT_ANIMATION = {
  x: 0,
  transition: {
    type: "spring",
    duration: 2.5,
    bounce: 0,
  },
};

export const DISSAPEAR_LEFT = {
  x: "-20%",
};

export const EXPERIENCE_ANIMATION = {
  scale: 1,
  x: 0,
  transition: {
    duration: 1.5,
  },
};

export const DISSAPEAR_SCALE = {
  scale: 0.8,
};

export const CONTAINER = {
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

export const ITEM = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring", // Change the transition type to "spring" for a jumping motion
        damping: 8, // Adjust the damping to control the bounciness
        stiffness: 100, // Adjust the stiffness to control the speed of the jump
        delay: delay,
      },
    },
  };
};

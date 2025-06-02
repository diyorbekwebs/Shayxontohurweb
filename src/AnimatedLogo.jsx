import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const svgPathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 2, ease: "easeInOut" } 
  },
};

export default function AnimatedLogo() {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      setHasVisited(true);
    } else {
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 100 100"
      fill="none"
      stroke="#55a630"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        initial="hidden"
        animate={hasVisited ? "visible" : "hidden"}
        variants={svgPathVariants}
      />
      {!hasVisited && (
        <motion.path
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          variants={svgPathVariants}
          initial="hidden"
          animate="visible"
        />
      )}
    </motion.svg>
  );
}

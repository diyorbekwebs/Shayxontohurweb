import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const seen = localStorage.getItem("hasSeenIntro");
    if (!seen) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        localStorage.setItem("hasSeenIntro", "true");
      }, 3000); // 3 seconds
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-white z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-green-700"
          >
            Xush kelibsiz!
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;

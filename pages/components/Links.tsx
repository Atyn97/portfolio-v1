import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  const variants = {
    open: {
      transition: {
        delay: 1000,
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = ["home", "about", "portfolio", "contact", "resume"];

  return (
    <motion.div
      className="absolute left-0 w-full h-full flex flex-col items-center justify-center gap-10"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          className="text-white text-4xl sm:text-5xl font-bold capitalize"
          variants={itemsVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

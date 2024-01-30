import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Portfolio = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="relative flex flex-col h-full justify-center gap-5 mt-[200px] "
    >
      <div className="font-bold text-2xl md:text-4xl">Projects</div>
      <motion.div
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-1 gap-10 mt-2 w-full"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;

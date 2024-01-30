import React from "react";
import { motion } from "framer-motion";

import { HiOutlineChevronDown } from "react-icons/hi2";
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";

const Hero = () => {
  const textVariants = {
    initial: {
      y: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="relative flex h-screen flex-col justify-center">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-2"
      >
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
          Fatin Nooraina
        </h2>
        <h2 className="text-[28px] md:text-4xl">Full-stack Web Developer</h2>
        <p className="text-[16px] md:text-xl w-[100%] md:w-[80%] lg:w-[60%] leading-6 lg:leading-8">
          I am passionate about building excellent software that improves the
          lives of those around me.
        </p>
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col md:flex-row mt-4 md:mt-10 gap-4 md:gap-10s"
      >
        <a
          className="group flex gap-2 items-center hover:text-teal-300"
          href="#portfolio"
        >
          See my projects{" "}
          <div className="group-hover:translate-y-1 transition">
            <MdArrowDownward size={18} />
          </div>
        </a>

        <a
          className="group flex gap-2 items-center hover:text-teal-300"
          href="#contact"
        >
          Connect with me
          <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition">
            <MdArrowOutward size={18} />
          </div>
        </a>
        <a
          className="group flex gap-2 items-center hover:text-teal-300"
          href=""
        >
          Resume
          <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition">
            <MdArrowOutward size={18} />
          </div>
        </a>
        <div></div>
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="absolute flex items-center justify-center inset-x-0 bottom-20 cursor-pointer"
      >
        <a href="#about">
          <div className="p-3 border-2 rounded-full transition hover:text-neutral-500 hover:border-neutral-500">
            <HiOutlineChevronDown size={20} />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

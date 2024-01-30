import React from "react";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { SiMongodb, SiPrisma } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

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

const About = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="flex flex-col md:grid md:grid-cols-2 h-screen items-center justify-center gap-10 mt-[200px] md:mt-0"
    >
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl md:text-4xl">About</h2>
        <p className="text-[14px] md:text-md lg:text-lg">
          Hello! My name is Fatin and I enjoy creating things that live on the
          internet. My journey toward becoming a full-stack developer begins
          during my bachelor degree. I was studying to become an engineer
          because I love to solve problems and develop things. Over the course
          of four years in mechatronics engineering, I have attained significant
          experience coding with a variety of programming languages and
          accomplished challenging projects with programming and that is where I
          developed my interest in coding. <br />
          <br />
          Post-graduation, I started learning web development on various online
          platforms, including Udemy, Freecodecamp, Codeacademy, and Youtube.
          While I have been changing my career from Engineering to Tech, my
          passion and goal of solving problems stay the same. Through code, I
          can bring my ideas to life, crafting unique digital experiences that
          reflect my personality and vision. <br />
          <br />
          Here are a few technologies I have been working with recently:
        </p>
        <div className="grid grid-cols-5 gap-4">
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <FaHtml5
              className="hover:text-teal-300 transition cursor-pointer"
              size={35}
            />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <FaCss3Alt
              className="hover:text-teal-300 transition cursor-pointer"
              size={35}
            />
          </motion.div>

          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <FaReact className="hover:text-teal-300 transition" size={35} />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <FaSass className="hover:text-teal-300 transition" size={35} />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <BiLogoTailwindCss
              className="hover:text-teal-300 transition"
              size={35}
            />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <BiLogoTypescript
              className="hover:text-teal-300 transition"
              size={35}
            />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <RiJavascriptFill
              className="hover:text-teal-300 transition"
              size={35}
            />
          </motion.div>

          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <SiMongodb className="hover:text-teal-300 transition" size={35} />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <FaGitAlt className="hover:text-teal-300 transition" size={35} />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <SiPrisma className="hover:text-teal-300 transition" size={35} />
          </motion.div>
        </div>
      </div>
      <div className="relative flex w-full cursor-pointer h-42 items-center bg-black rounded-md border-4 border-slate-500 hover:border-slate-300">
        <motion.img
          className="z-20 flex w-full h-42 object-fit rounded-md"
          src="./images/fatin-modified.jpg"
          alt=""
          whileHover={{
            opacity: 0,
            transition: {
              duration: 2,
            },
          }}
        />
        <img
          className="absolute flex w-full h-42 object-fit rounded-md"
          src="./images/fatin.jpg"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default About;

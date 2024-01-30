import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex items-center justify-center text-sm mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-18 p-4 md:p-8">
        <div className="flex gap-10 items-center justify-center text-slate-400 ">
          <motion.a
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
            href="https://www.linkedin.com/in/fatinnooraina/"
            target="_blank"
          >
            <FaLinkedin
              className="hover:text-teal-300 transition cursor-pointer"
              size={30}
            />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
            href="https://github.com/Atyn97"
            target="_blank"
          >
            <FaGithub
              className="hover:text-teal-300 transition cursor-pointer"
              size={30}
            />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
              x: 0,
              transition: {
                duration: 0.2,
              },
            }}
            href="mailto:fatinnooraina@gmail.com"
            target="_blank"
          >
            <MdEmail
              className="hover:text-teal-300 transition cursor-pointer"
              size={30}
            />
          </motion.a>
        </div>
        <p className="text-sm md:text-md ">
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            className="hover:text-teal-300 transition cursor-pointer font-bold"
          >
            Visual Studio Code
          </a>{" "}
          by{" "}
          <a
            href=""
            target="_blank"
            className="hover:text-teal-300 transition cursor-pointer font-bold"
          >
            Fatin Nooraina
          </a>{" "}
          . Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="hover:text-teal-300 transition cursor-pointer font-bold"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="hover:text-teal-300 transition cursor-pointer font-bold"
          >
            Tailwind CSS
          </a>{" "}
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            className="hover:text-teal-300 transition cursor-pointer font-bold"
          >
            Vercel
          </a>{" "}
          . All text is set in the{" "}
          <a
            href="https://rsms.me/inter/"
            target="_blank"
            className="hover:text-teal-300 transition cursor-pointer font-bold"
          >
            Inter
          </a>{" "}
          typeface.
        </p>
      </div>
    </div>
  );
};

export default Footer;

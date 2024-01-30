import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkVariants = {
    initial: {
      y: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full flex max-w-[280px] sm:max-w-[475px] md:max-w-[540px] lg:max-w-[768px] xl:max-w-[1024px] justify-center">
      <div className="z-20 flex md:hidden">
        <Sidebar />
      </div>
      <div
        className={`z-50 hidden md:flex fixed item-center mt-4 py-1 px-20 justify-center 
      ${
        showBackground
          ? "mt-4 transition py-1 bg-blue-100/10 border-t-2 border-blue-100/20 rounded-full"
          : ""
      }`}
      >
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          className=" hidden md:flex gap-10 text-md"
        >
          <a className="hover:bg-blue-100/10 py-2 px-4 rounded-md" href="#home">
            Home
          </a>
          <a
            className="hover:bg-blue-100/10 py-2 px-4 rounded-md"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:bg-blue-100/10 py-2 px-4 rounded-md"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            className="hover:bg-blue-100/10 py-2 px-4 rounded-md"
            href="#contact"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

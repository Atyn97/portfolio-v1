import React from "react";
import Input from "./Input";
import Footer from "./Footer";
import { HiChevronUp } from "react-icons/hi2";
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

const Contact = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="relative flex flex-col h-screen gap-2 md:gap-10 justify-center mt-[200px] md:mt-[100px]"
    >
      <h2 className="font-bold text-2xl md:text-4xl px-4 md:px-8">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-10 ">
        <div className="flex flex-col gap-4">
          <Input label="Name" type="string" />
          <Input label="Email" type="string" />
          <Input label="Message" type="textarea" />
          <button className="bg-blue-100/40 border-t-2 border-blue-100/50 hover:bg-blue-100/20 hover:text-teal-300 transition py-2 px-4 rounded-md text-[14px] md:text-md lg:text-lg">
            Submit
          </button>
        </div>
        <div className="grid grid-cols-1 items-center">
          <p className="text-[14px] md:text-md lg:text-lg">
            Feel free to contact me if your have any questions, or want to
            change some ideas. <br />
            <br /> I am open to Job opportunities where I can contribute, learn
            and grow. If you have a good opportunity that matches my skills and
            experience then do not hesitate to contact me <br />
            <br />
            Get in touch or shoot me an email directly on
            <a
              className="font-bold hover:text-teal-300 transition"
              href="mailto:fatinnooraina@gmail.com"
            >
              {" "}
              fatinnooraina@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
      <a href="#home">
        <div className="absolute hidden md:flex left-[48%] bottom-1 items-center justify-center my-8 p-3 border-2 rounded-full transition hover:text-neutral-500 hover:border-neutral-500 cursor-pointer">
          <HiChevronUp size={20} />
        </div>
      </a>
    </motion.div>
  );
};

export default Contact;

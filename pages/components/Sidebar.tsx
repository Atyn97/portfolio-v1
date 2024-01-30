import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed right-8 top-8 flex flex-col items-center justify-center"
      animate={open ? "open" : "closed"}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-teal-700/90 text-white p-10"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                <Links />
              </motion.div>
              <div className="flex z-50 gap-10 items-center justify-center text-white ">
                <a
                  href="https://www.linkedin.com/in/fatinnooraina/"
                  target="_blank"
                >
                  <FaLinkedin
                    className="hover:text-teal-300 transition cursor-pointer"
                    size={30}
                  />
                </a>
                <a href="https://github.com/Atyn97" target="_blank">
                  <FaGithub
                    className="hover:text-teal-300 transition cursor-pointer"
                    size={30}
                  />
                </a>
                <a href="mailto:fatinnooraina@gmail.com" target="_blank">
                  <MdEmail
                    className="hover:text-teal-300 transition cursor-pointer"
                    size={30}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex z-50">
        <ToggleButton setOpen={setOpen} />
      </div>
    </motion.div>
  );
};

export default Sidebar;

import React from "react";
import { MdArrowOutward } from "react-icons/md";

import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";

const ProjectCard = () => {
  return (
    <div className="group hover:bg-blue-100/5 hover:border-t-2 hover:border-blue-100/20 h-42 col-span relative rounded-md flex flex-col md:flex-row items-center gap-10 p-3 md:p-6 cursor-pointer">
      <div className="flex w-54 h-42 bg-black rounded-md border-2 border-slate-500 group-hover:border-slate-300">
        <img
          className="flex w-54 h-42 object-cover rounded-md"
          src="./images/moonflix-main.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <a href="https://moonflix-six.vercel.app/" target="_blank">
          <h1 className="flex items-center font-bold text-md text-neutral-300 group-hover:text-teal-300 transition">
            Moonflix
            <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition">
              <MdArrowOutward size={20} />
            </div>
          </h1>
        </a>
        <p className="text-[13px] md:text-[16px]">
          The Moonflix app is a stream service application that uses ReactJS,
          NextJS 14, TypeScript, MongoDB, Prisma, NextAuthJS, and Tailwind CSS.
          It allows users to stream movies online. The app also has
          authentication and authorization features using Next Auth and custom
          hooks.
        </p>
        <ul className="text-[12px] grid grid-cols-4 sm:flex gap-2 mt-2">
          <li className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full">
            React
          </li>
          <li className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full">
            Node.js
          </li>
          <li className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full">
            Next.js
          </li>
          <li className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full">
            Tailwind
          </li>
          <li className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full">
            Prisma
          </li>
        </ul>
        <div className="flex gap-4 mt-2 justify-end text-slate-500">
          <a href="https://github.com/Atyn97/moonflix" target="_blank">
            <RiGithubLine className="hover:text-teal-300" size={25} />
          </a>
          <a href="https://moonflix-six.vercel.app/" target="_blank">
            <RiShareBoxLine className="hover:text-teal-300" size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

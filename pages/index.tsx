import Image from "next/image";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      className="group/main relative w-[100%] bg-black"
    >
      <div
        className={`flex flex-col max-w-[280px] sm:max-w-[475px] md:max-w-[540px] lg:max-w-[768px] xl:max-w-[1024px] m-auto ${inter.className} `}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/main:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(54, 243, 218, 0.205),
              transparent 80%
              )
          `,
          }}
        />
        <section id="home" className="">
          <Navbar />
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

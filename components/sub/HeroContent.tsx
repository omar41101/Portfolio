"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AboutMe from "./AboutMe"; // Import the new AboutMe component

const HeroContent = () => {
  return (
    <>
      {/* Add the AboutMe component here */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row p-10  justify-center px-20 mt-10 w-full z-[20]"
      >
        <AboutMe />
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">About Me ! </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Meet Omar Ajimi, a 22-year-old dreamer from Tunisia who thrives on
            adventure—especially when it’s in the form of epic gaming quests
            that pull him right into the action! A skilled ethical hacker, he’s
            now turning his talents toward web development, ready to craft
            digital worlds as immersive as the games he loves. With his hacker’s
            mindset and a gamer’s heart, Omar is on a mission to conquer the
            web, one code at a time. As if that’s not enough, he’s also diving
            headfirst into the future, mastering blockchain, smart contracts,
            and Web3 dApps, determined to be part of the next big digital
            revolution!
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;

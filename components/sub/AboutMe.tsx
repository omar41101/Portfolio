"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const AboutMe = () => {
  return (
    <section
    id="about-me">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className="flex flex-col items-center justify-center px-20 mt-10"
    >
      <Image
        src="/pdp.jpeg" // Replace with the path to your picture
        alt="Omar Ajimi "
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
        className="rounded-full" // Optional: makes the image circular
      />
      <h2 className="text-4xl font-bold text-white mt-5">Omar Ajimi</h2>
      <p className="text-lg text-gray-400 text-center mt-2">
        I'm actualy a computer science student and junior Backend developer .I have a passion for coding and am always eager to learn new technologies. 
        Check out my work below!
      </p>
    </motion.div>
    </section>
  );
};

export default AboutMe;

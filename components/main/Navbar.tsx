import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-gradient-to-r from-[#030014] to-[#0f1b2d] backdrop-blur-md z-50 px-10 flex items-center justify-between">
      <div className="flex flex-row items-center">
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Porfolio
        </span>
      </div>

      <div className="flex flex-row items-center justify-between w-[500px]">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer hover:text-[#b49bff] transition duration-300">
            About Me
          </a>
          <a href="#skills" className="cursor-pointer hover:text-[#b49bff] transition duration-300">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer hover:text-[#b49bff] transition duration-300">
            Projects
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="transition duration-300 transform hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

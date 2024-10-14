'use client';
import { useEffect } from "react";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Insert SmartSupp Live Chat script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.smartsuppchat.com/loader.js?";

    // This is where you set the SmartSupp key
    script.onload = () => {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = '3a8701419bf9b21ac784afbe5454d52450cc29f5';
      window.smartsupp = function () {
        window._smartsupp._.push(arguments);
      };
      window._smartsupp._ = [];
    };

    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

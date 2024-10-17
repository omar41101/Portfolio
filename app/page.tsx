'use client'
import { useEffect } from "react";
 import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";  
 
export default function Home() {
  useEffect(() => {
    // Insert SmartSupp Live Chat script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
     script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '3a8701419bf9b21ac784afbe5454d52450cc29f5';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
          c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);

       })(document);
    `;
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

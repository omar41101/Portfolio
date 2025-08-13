// @/components/Projects.tsx
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import React from "react";
import GlitchVault from "@/components/glitchvault";
 
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Decentralized Voting DApp",
    description:
      "A secure, blockchain-based voting application ensuring transparency and immutability. Built with a modern web interface and smart contracts.",
    tech: ["ReactJs", "Solidity", "Web3", "TypeScript", "Tailwind"],
    image: "/projects/voting-dapp.webp",
    github: "https://github.com/omarajimi/voting-dapp",
    live: "https://voting-dapp.example.com",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration, built using the MARN stack.",
    tech: ["MongoDb", "Expressjs", "ReactJs", "Nodejs", "Docker"],
    image: "/projects/ecommerce.webp",
    github: "https://github.com/omarajimi/ecommerce",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A dynamic portfolio showcasing my skills and projects with interactive animations and a responsive design.",
    tech: ["ReactJs", "Next.js", "Tailwind", "TypeScript", "Git"],
    image: "/projects/portfolio.webp",
    github: "https://github.com/omarajimi/portfolio",
    live: "https://omarajimi.example.com",
  },
  {
    id: "4",
    title: "Banking Application",
    description:
      "A secure online banking platform with features like account management, transactions, and real-time balance updates, built with a focus on user security.",
    tech: ["ReactJs", "Nodejs", "Expressjs", "MongoDb", "TypeScript"],
    image: "/projects/banking-app.webp",
    github: "https://github.com/omarajimi/banking-app",
    live: "https://banking-app.example.com",
  },
  {
    id: "5",
    title: "Chat Application",
    description:
      "A real-time chat application supporting group chats, private messaging, and notifications, built with a scalable backend and modern UI.",
    tech: ["ReactJs", "Nodejs", "Expressjs", "MongoDb", "WebSocket"],
    image: "/projects/chat-app.webp",
    github: "https://github.com/omarajimi/chat-app",
  },
  {
    id: "6",
    title: "Crowdfunding Platform",
    description:
      "A decentralized crowdfunding platform leveraging blockchain for transparent fundraising, smart contract-based fund distribution, and user trust.",
    tech: ["ReactJs", "Solidity", "Web3", "Nodejs", "Tailwind"],
    image: "/projects/crowdfunding.webp",
    github: "https://github.com/omarajimi/crowdfunding",
    live: "https://crowdfunding.example.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      aria-label="Project section"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        My{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <GlitchVault
            key={project.id}
            className={cn(
              "animate-fade-in-up w-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10 relative z-10",
              "hover:scale-105 hover:shadow-cyan-500/25 transition-all duration-500",
              "flex flex-col"
            )}
            glitchColor="#0AF0F0"
            glitchRadius={120}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="p-6 relative flex flex-col flex-grow">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-2xl" />
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover rounded-t-2xl border border-white/20 dark:border-white/10"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-slate-800 via-slate-700 to-cyan-700 dark:from-white dark:via-slate-100 dark:to-cyan-300 bg-clip-text text-transparent mb-2 tracking-wide relative z-10">
                {project.title}
              </h3>
              <p className="text-slate-600/80 dark:text-slate-300/80 text-sm sm:text-base mb-6 flex-grow relative z-10">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="animate-typing inline-block px-2 py-1 text-xs sm:text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-300 rounded-full border border-cyan-400/30"
                    style={{ animationDelay: `${techIndex * 150}ms` }}
                    aria-label={`Technology: ${tech}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 relative z-10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </GlitchVault>
        ))}
      </div>
    </section>
  );
};

export default Projects;
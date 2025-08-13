"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LoadingButton from "./loading-button";
import LoadingScreen from "./loading-screen";
import { ModeToggle } from "./mode-toogle";
// Self-contained SVG icon for the "Welcome" badge
const DotIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gray-900/80 dark:bg-white/10 backdrop-blur-sm border border-gray-700 dark:border-gray-600 rounded-full px-4 sm:px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">OA</span>
              </div>
              <span className="text-gray-200 dark:text-gray-300 font-semibold text-lg hidden sm:block">
                Omar Ajimi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-800 dark:hover:bg-white/20 rounded-full transition-all duration-300 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ModeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-800 dark:hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-700 dark:border-gray-600">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-800 dark:hover:bg-white/20 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// The data for the code snippet
const coderData = {
  name: "Omar Ajimi",
  role: "Full-Stack Developer",
  seniority: "Mid-Level",
  location: "Tunisia",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "Blockchain",
    "Web3",
  ],
};

// The styled code window component
const CoderProfileCard = () => {
  return (
    // Main container with gradient, border, and shadow - theme-aware
    <div className="w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg">
      {/* Top gradient border element */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window Header */}
      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-[#000000]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">
          coder.js
        </div>
      </div>

      {/* Code Content Area */}
      <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
        {/* Background blur effects */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          {/* Line Numbers */}
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Snippet with theme-aware colors */}
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500 dark:text-pink-400">
                const
              </span>
              <span className="mr-2 text-violet-500 dark:text-violet-400">
                coder
              </span>
              <span className="mr-2 text-pink-500 dark:text-pink-400">=</span>
              <span className="text-zinc-600 dark:text-gray-400">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">name:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.name}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">role:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.role}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">seniority:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.seniority}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">location:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.location}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">skills:</span>
              <span className="text-zinc-600 dark:text-gray-400">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-zinc-600 dark:text-gray-400">
                      &#39;
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      {skill}
                    </span>
                    <span className="text-zinc-600 dark:text-gray-400">
                      &#39;
                    </span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-zinc-600 dark:text-gray-400">
                        ,{" "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-zinc-600 dark:text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-gray-400">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      {/* Window Footer */}
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-xs text-zinc-600 dark:text-gray-500 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};

// Main component
const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to allow loading screen to fade out before showing content
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Loading Screen */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Portfolio Content */}
        <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8 pt-24">
          {/* Light mode Azure Depths */}
          <div
            className="absolute inset-0 z-0 dark:hidden"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
            }}
          />

          {/* Dark mode Azure Depths */}
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
            }}
          />

          {/* Main Content Container */}
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
                  <DotIcon />
                  Welcome to my universe
                </div>

                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                    Hello <br />
                    I&apos;m{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Omar Ajimi
                    </span>
                  </h1>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                    Learning MARN Stack
                  </span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                    Clean Code
                  </span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                    Innovation
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
                  JavaScript lover 🖋️ | Blockchain enthusiast ⚡ | Crafting
                  frameworks and coding the future ✨
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
                  <LoadingButton
                    variant="primary"
                    onClick={async () => {
                      // Simulate API call
                      await new Promise((resolve) => setTimeout(resolve, 2000));
                      console.log("Learn More clicked!");
                    }}
                    loadingText="Loading..."
                  >
                    Learn More
                  </LoadingButton>
                  <LoadingButton
                    variant="secondary"
                    onClick={async () => {
                      // Simulate loading state
                      await new Promise((resolve) => setTimeout(resolve, 1500));
                      // Trigger download of resume from public folder
                      const link = document.createElement("a");
                      link.href = "/Omar_Ajimi_Resume.pdf"; // Path to file in public folder
                      link.download = "resume.pdf"; // Name for downloaded file
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      console.log("Resume downloaded!");
                    }}
                    loadingText="Downloading..."
                  >
                    Get Resume
                  </LoadingButton>
                </div>
              </div>

              {/* Right Column: Code Editor */}
              <div className="order-1 lg:order-2 animate-fade-in-up">
                <CoderProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// Add custom CSS for animations
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
  .hover\\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

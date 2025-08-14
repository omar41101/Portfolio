import Portfolio from './comps/hero';
import OrbitingSkills from './comps/orbiting';
import Divider from '@/components/ui/divider';
import Projects from './comps/projects';
import { Navigation } from 'lucide-react';
import {GridBackground} from './comps/movinv-grid'

const coderData = {
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'ReactJs',
    'MongoDb',
    'Nodejs',
    'Expressjs',
    'Tailwind',
    'TypeScript',
    'Git',
    'GitHub',
    'Docker',
    'Solidity',
    'Web3',
    'WebSocket',
  ],
};

const Skills = () => (
  <section
    id="skills"
    className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10"
    aria-label="Skills section"
  >
    <h2 className="animate-fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
      My{' '}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Skills
      </span>
    </h2>
    <div className="min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
      <OrbitingSkills   />
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10"
    aria-label="Contact section"
  >
    <h2 className="animate-fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
      Get in{' '}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Touch
      </span>
    </h2>
    <p
      className="animate-fade-in-up text-slate-600/80 dark:text-slate-300/80 text-base sm:text-lg max-w-2xl mx-auto text-center"
      style={{ animationDelay: '200ms' }}
    >
      Reach out to me via email at{' '}
      <a
        href="mailto:omar.ajimi@example.com"
        className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200"
      >
        ajimiomar.oa@gmail.com
      </a>{' '}
      or connect on{' '}
      <a
        href="https://www.linkedin.com/in/omar-ajimi-7a5341118/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200"
      >
        LinkedIn
      </a>
      .
    </p>
  </section>
);

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <GridBackground/>
      <Navigation />
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: 'radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)',
        }}
      />
      <div className="relative z-10">
        <div id="home" className="pt-16">
          <Portfolio />
        </div>
        <Divider variant="solid" className="my-8 z-10" />
        <div id="projects">
          <Projects />
        </div>
        <Divider variant="solid" className="my-8 z-10" />
        <Skills />
        <Divider variant="solid" className="my-8 z-10" />
        <Contact />
      </div>
    </div>
  );
}

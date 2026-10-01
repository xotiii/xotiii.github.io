import { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Mail,
  Smartphone,
  Monitor,
  Layers,

} from 'lucide-react';


// --- Data ---
const SKILLS = [
  {
    category: "Native Android",
    icon: <Smartphone className="w-6 h-6 mb-4 text-blue-600 dark:text-blue-400" />,
    technologies: "Kotlin, Jetpack Compose, Coroutines, Flow, Room"
  },
  {
    category: "Cross-Platform",
    icon: <Layers className="w-6 h-6 mb-4 text-blue-600 dark:text-blue-400" />,
    technologies: "Kotlin Multiplatform (KMP), Compose Multiplatform"
  },
  {
    category: "Frontend Web",
    icon: <Monitor className="w-6 h-6 mb-4 text-blue-600 dark:text-blue-400" />,
    technologies: "React, TypeScript, Tailwind CSS, Next.js"
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Swiss Bank Mobile App",
    description: "Contributing to a secure, high-performance native Android application built with clean architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Coroutines", "Clean Architecture", "SOLID Principles"],
    type: "mobile"
  },
  {
    id: 2,
    title: "Point of Sales Mobile App",
    description: "White label POS mobile app with complex inventory and product registration for seemless audit.",
    tags: ["Kotlin", "Jetpack Compose", "Coroutines", "Clean Architecture", "SOLID Principles"],
    type: "mobile"
  },
  {
    id: 3,
    title: "Loan Management Web Admin System",
    description: "Web Admin System with automated payment schedule, payment trails, role based responsibilities for a Cooperative Lending Company.",
    tags: ["React", "TypeScript", "Material UI", "Axios"],
    type: "web"
  },
  {
    id: 4,
    title: "Chowis Skin Analyzer",
    description: "AI-powered diagnostic application. The app interfaces with external multi-spectral optical hardware to capture high-resolution imagery and deliver real-time, clinic-grade skin health evaluations.",
    tags: ["Kotlin", "In-House SDK", "SQLite", "Coroutines"],
    type: "mobile"
  },
  {
    id: 5,
    title: "PouchNATION",
    description: "Cashless Point of Sales App designed exclusively for hotels, hostels and events, using NFC/RFID and QR code",
    tags: ["Kotlin", "Clean Architecture", "MVVM Framework", "SQLite"],
    type: "mobile"
  },
  {
    id: 6,
    title: "PouchPASS",
    description: "Health monitoring app using BLE integrating hardware weareable for continuous temperature monitoring",
    tags: ["Kotlin", "Clean Architecture", "MVVM Framework", "SQLite"],
    type: "mobile"
  },
  {
    id: 7,
    title: "Wrappy Messenger",
    description: "Secured instant-messaging app for a Japanese Company",
    tags: ["Java", "MVVM Framework", "SQLite", "XMPP"],
    type: "mobile"
  },
];


export default function App() {
  // Theme state management
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on system preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isSystemDark);
    }
  }, []);

  // Apply theme class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#121212] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">

      {/* --- Header / Navigation --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <span className="font-bold text-3xl tracking-tight">Dan Chua</span>
            <span className="p-4 text-m  text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Software Engineer
            </span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-zinc-100" /> : <Moon className="w-5 h-5 text-zinc-900" />}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* --- Hero Section --- */}
        <section className="py-20 md:py-32 flex flex-col justify-center min-h-[60vh]">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Connecting to your deeper <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Mobile apps</span> and web platforms.
          </h1>
          <p className="mt-8 text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Frontend developer specializing in Kotlin, KMP, and React. Crafting seamless, high-performance user experiences across mobile and web since 2018.
          </p>
          <div className="mt-12 flex items-center gap-6">
            <a href="#projects" className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium rounded-full hover:scale-105 transition-transform duration-200">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Get in touch
            </a>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-12">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skill, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white dark:bg-[#1E1E1E] shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors duration-300 hover:-translate-y-1">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {skill.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* CSS Mockup Container */}
                <div className="w-full aspect-[4/3] mb-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-8 overflow-hidden relative border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 z-10" />

                  {project.type === 'mobile' ? (
                    // Mobile Phone Mockup
                    <div className="w-48 h-full max-h-[400px] border-[6px] border-zinc-800 dark:border-zinc-300 rounded-[2.5rem] bg-white dark:bg-[#121212] relative shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute top-0 inset-x-0 h-6 flex justify-center pt-2">
                        <div className="w-16 h-4 bg-zinc-800 dark:bg-zinc-300 rounded-full"></div>
                      </div>
                      {/* Fake App Content */}
                      <div className="mt-10 px-4 flex flex-col gap-3 opacity-30 dark:opacity-20">
                        <div className="h-20 bg-zinc-300 dark:bg-zinc-600 rounded-xl w-full"></div>
                        <div className="h-8 bg-zinc-300 dark:bg-zinc-600 rounded-lg w-2/3"></div>
                        <div className="h-8 bg-zinc-300 dark:bg-zinc-600 rounded-lg w-full"></div>
                        <div className="h-8 bg-zinc-300 dark:bg-zinc-600 rounded-lg w-4/5"></div>
                      </div>
                    </div>
                  ) : (
                    // Web Browser Mockup
                    <div className="w-full h-full max-h-[300px] max-w-[500px] border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-[#121212] flex flex-col shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                      <div className="h-8 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-3 gap-1.5 bg-zinc-50 dark:bg-zinc-900/50 rounded-t-xl">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      {/* Fake Web Content */}
                      <div className="p-4 flex-1 flex flex-col gap-4 opacity-30 dark:opacity-20">
                        <div className="flex gap-4">
                          <div className="h-24 bg-zinc-300 dark:bg-zinc-600 rounded-lg flex-1"></div>
                          <div className="h-24 bg-zinc-300 dark:bg-zinc-600 rounded-lg w-1/3"></div>
                        </div>
                        <div className="h-32 bg-zinc-300 dark:bg-zinc-600 rounded-lg w-full"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-4 max-w-md">
                      {project.description}
                    </p>
                  </div>
                  {/**<ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" /> */}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- Footer / Contact --- */}
      <footer id="contact" className="bg-white dark:bg-[#1E1E1E] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build together.</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            Currently open for new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            xoti.chua@gmail.com
          </a>

          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Dan Chua. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors aria-label='GitHub'">

              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors aria-label='LinkedIn'">

              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import React from "react";
// Mock Link component for single-file use
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- C2 Topics Data ---
const c2Topics = [
  {
    title: "Rhetorik & Stilistik",
    subtitle: "Rhetoric & Stylistic Mastery",
    description: "Analyzing and reproducing different formal and informal writing/speaking styles (e.g., satire).",
    icon: "🎭",
    path: "/c2/rhetoric",
    color: "bg-fuchsia-800",
  },
  {
    title: "Akzent- und Dialektologie",
    subtitle: "Accent & Dialect Study",
    description: "Understanding and distinguishing a wide range of regional and social language varieties.",
    icon: "🗣️",
    path: "/c2/dialects",
    color: "bg-violet-800",
  },
  {
    title: "Kreatives Schreiben",
    subtitle: "Producing Complex Literature",
    description: "Creating sophisticated, error-free texts—from poetry to academic policy briefs.",
    icon: "✍️",
    path: "/c2/creative",
    color: "bg-rose-800",
  },
  {
    title: "Sprachreflexion",
    subtitle: "Linguistic Self-Correction",
    description: "Discussing the history and structure of the German language with academic accuracy.",
    icon: "🌐",
    path: "/c2/linguistics",
    color: "bg-cyan-800",
  },
  {
    title: "Hochspezialisierte Fachsprache",
    subtitle: "Expert Domain Language",
    description: "Practicing the vocabulary and syntax of highly specialized fields (e.g., advanced engineering).",
    icon: "⚙️",
    path: "/c2/domain",
    color: "bg-amber-800",
  },
  {
    title: "Vollständige Fehlerfreiheit",
    subtitle: "Error-Free Performance",
    description: "Targeted practice on the rarest and most complex grammatical exceptions.",
    icon: "✅",
    path: "/c2/perfection",
    color: "bg-emerald-800",
  },
];

const TopicCard = ({ title, subtitle, description, icon, path, color }) => (
  <Link
    href={path}
    className={`
      group flex flex-col p-6 w-full h-full min-h-[200px]
      rounded-2xl shadow-lg transition transform hover:scale-[1.02] duration-300
      bg-white border-b-4 border-l-2 border-transparent
      hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-75
      relative overflow-hidden cursor-pointer text-left
      ${color} text-white
    `}
    style={{ borderColor: color.replace('bg-', 'border-') }}
  >
    <div className="text-6xl mb-3 transition-all group-hover:rotate-6 duration-300">
        {icon}
    </div>
    <h2 className="text-2xl font-bold tracking-tight mt-1">{title}</h2>
    <h3 className="text-sm font-medium uppercase opacity-80 mb-2">{subtitle}</h3>
    <p className="mt-2 text-sm opacity-90">
      {description}
    </p>
    <div className="mt-auto pt-3 text-sm font-semibold flex items-center">
        Generate Content 
        <span className="ml-2 transition-transform group-hover:translate-x-1 duration-300">→</span>
    </div>
  </Link>
);


const C2TopicsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-16 bg-gray-100">
      
      <div className="w-full max-w-7xl mb-8">
        <Link 
          href="/" 
          className="text-indigo-600 hover:text-indigo-800 transition duration-150 font-medium flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Levels
        </Link>
      </div>

      <h1 className="bg-gradient-to-r from-fuchsia-800 to-amber-800 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl text-center">
        C2: Mastery Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Achieve near-native fluency. Focus on fine-tuning language for specialized, professional, and literary contexts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {c2Topics.map((topic) => (
          <TopicCard key={topic.title} {...topic} />
        ))}
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent
      </footer>
    </main>
  );
};

export default C2TopicsPage;

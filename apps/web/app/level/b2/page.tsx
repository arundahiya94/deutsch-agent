"use client";

import React from "react";
// Mock Link component for single-file use
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- B2 Topics Data ---
const b2Topics = [
  {
    title: "Abstrakte Themen",
    subtitle: "Abstract Concepts",
    description: "Discussing philosophical, ethical, and cultural concepts in detail.",
    icon: "🧠",
    path: "/b2/abstract",
    color: "bg-indigo-700",
  },
  {
    title: "Medienanalyse",
    subtitle: "Media Analysis",
    description: "Evaluating arguments in articles, understanding political commentary, and satire.",
    icon: "📰",
    path: "/b2/analysis",
    color: "bg-pink-700",
  },
  {
    title: "Wissenschaft & Forschung",
    subtitle: "Science & Research",
    description: "Explaining complex processes, summarising research, and using technical language.",
    icon: "🔬",
    path: "/b2/science",
    color: "bg-emerald-700",
  },
  {
    title: "Verhandlungen",
    subtitle: "Negotiation & Persuasion",
    description: "Formally negotiating terms, persuading others, and dealing with counter-arguments.",
    icon: "🤝",
    path: "/b2/negotiation",
    color: "bg-yellow-700",
  },
  {
    title: "Redewendungen",
    subtitle: "Idioms & Colloquialisms",
    description: "Understanding and using complex German expressions and figurative language.",
    icon: "💬",
    path: "/b2/idioms",
    color: "bg-red-700",
  },
  {
    title: "Hypothesen",
    subtitle: "Hypotheses & Conditions",
    description: "Mastering the Konjunktiv II (subjunctive) for polite requests and hypothetical scenarios.",
    icon: "💭",
    path: "/b2/konjunktiv",
    color: "bg-purple-700",
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


const B2TopicsPage = () => {
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

      <h1 className="bg-gradient-to-r from-indigo-700 to-yellow-700 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl text-center">
        B2: Upper Intermediate Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Become fluent and flexible. Focus on nuanced discussion, complex text comprehension, and professional communication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {b2Topics.map((topic) => (
          <TopicCard key={topic.title} {...topic} />
        ))}
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent
      </footer>
    </main>
  );
};

export default B2TopicsPage;

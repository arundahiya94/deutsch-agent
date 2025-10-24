"use client";

import React from "react";
// Mock Link component for single-file use
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- A2 Topics Data ---
const a2Topics = [
  {
    title: "Vergangenheit",
    subtitle: "Past Tense & Narrative",
    description: "Telling short stories, describing past events using the Perfekt and Präteritum.",
    icon: "🕰️",
    path: "/a2/past",
    color: "bg-indigo-600",
  },
  {
    title: "Kleidung & Einkaufen",
    subtitle: "Clothes & Shopping",
    description: "Discussing outfits, trying on clothes, and handling simple customer interactions.",
    icon: "🛍️",
    path: "/a2/shopping",
    color: "bg-teal-600",
  },
  {
    title: "Körper & Gesundheit",
    subtitle: "Body & Health",
    description: "Talking about pain, visiting the doctor, and giving simple advice.",
    icon: "🩹",
    path: "/a2/health",
    color: "bg-orange-600",
  },
  {
    title: "Medien & Technik",
    subtitle: "Media & Technology",
    description: "Discussing movies, books, and using basic terms for computers/phones.",
    icon: "💻",
    path: "/a2/media",
    color: "bg-blue-600",
  },
  {
    title: "Verkehr & Wegbeschreibung",
    subtitle: "Transport & Directions",
    description: "Understanding public transport, giving detailed directions, and asking for travel info.",
    icon: "🚇",
    path: "/a2/transport",
    color: "bg-purple-600",
  },
  {
    title: "Pläne & Wünsche",
    subtitle: "Future Plans & Wishes",
    description: "Expressing intentions, planning holidays, and using modal verbs correctly.",
    icon: "🔮",
    path: "/a2/plans",
    color: "bg-pink-600",
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


const A2TopicsPage = () => {
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

      <h1 className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl text-center">
        A2: Elementary Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Build on the basics. Focus on more complex past tense usage and common social situations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {a2Topics.map((topic) => (
          <TopicCard key={topic.title} {...topic} />
        ))}
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent
      </footer>
    </main>
  );
};

export default A2TopicsPage;

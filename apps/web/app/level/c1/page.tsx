"use client";

import React from "react";

// Mock Link component for single-file use to avoid 'next/link' import error
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- C1 Topics Data with Sequential Learning Order ---
const c1Topics = [
  {
    number: 1,
    title: "Modalpartikeln & Nuance",
    subtitle: "Mastering Subtlety (ja, doch, wohl)",
    description: "Achieving native-like expression by correctly using modal particles to convey tone and attitude.",
    icon: "✨ 🗣️", // Sparkle and Speaking Head
    path: "/c1/modals",
    color: "bg-purple-700", 
  },
  {
    number: 2,
    title: "Passiv Ersatzformen",
    subtitle: "Complex Passive Alternatives",
    description: "Using fixed expressions (z.B. infrage kommen) and verbal nouns to avoid overusing the Passive voice.",
    icon: "🔄 📑", // Clockwise Arrows and Document
    path: "/c1/passive_alternatives",
    color: "bg-red-600", 
  },
  {
    number: 3,
    title: "Abstrakte Nominalisierung",
    subtitle: "High-Level Noun Forms",
    description: "Mastering the academic style of converting complex actions into abstract noun phrases.",
    icon: "🧠 🔗", // Brain and Link
    path: "/c1/abstract_nouns",
    color: "bg-cyan-700", 
  },
  {
    number: 4,
    title: "Wissenschaftliches Schreiben",
    subtitle: "Academic & Research Reports",
    description: "Structuring scientific papers, using formal tone, handling citation and bibliography.",
    icon: "🔬 🎓", // Microscope and Graduation Cap
    path: "/c1/academic_writing",
    color: "bg-teal-600", 
  },
  {
    number: 5,
    title: "Kultur & Gesellschaftskritik",
    subtitle: "Complex Cultural Analysis",
    description: "Discussing stereotypes, social integration, forming highly nuanced opinions on cultural identity.",
    icon: "🎭 👤", // Theatre Masks and Silhouette
    path: "/c1/culture_critique",
    color: "bg-fuchsia-700", 
  },
  {
    number: 6,
    title: "Politische Rhetorik",
    subtitle: "Analyzing Political Discourse",
    description: "Critically evaluating political speeches, understanding biases, and participating in formal political debate.",
    icon: "📢 🏛️", // Megaphone and Classical Building
    path: "/c1/rhetoric",
    color: "bg-lime-600", 
  },
  {
    number: 7,
    title: "Medienethik & Digitalisierung",
    subtitle: "Digital Ethics & Data Privacy",
    description: "Discussing the societal impact of AI, data security, the ethics of modern technology.",
    icon: "💻 🛡️", // Laptop and Shield
    path: "/c1/digital_ethics",
    color: "bg-amber-600", 
  },
  {
    number: 8,
    title: "Philosophische Konzepte",
    subtitle: "Discussing Abstract Ideas",
    description: "Debating concepts like freedom, justice, morality with precise and abstract vocabulary.",
    icon: "🤔 💡", // Thinking Face and Light Bulb
    path: "/c1/philosophy",
    color: "bg-rose-500", 
  },
  {
    number: 9,
    title: "Linguistische Register",
    subtitle: "Formal vs. Informal Style",
    description: "Recognizing and appropriately switching between highly formal, standard, colloquial German.",
    icon: "🗣️ 🎩", // Speaking Head and Top Hat
    path: "/c1/register",
    color: "bg-gray-800", 
  },
  {
    number: 10,
    title: "Finanzmärkte & Ökonomie",
    subtitle: "Complex Finance and Economy",
    description: "Understanding financial reports, discussing investment strategies, explaining economic theories.",
    icon: "📊 🏦", // Bar Chart and Bank
    path: "/c1/finance",
    color: "bg-indigo-700", 
  },
];

const TopicCard = ({ number, title, subtitle, description, icon, path, color, backgroundImage }) => {
  const isImageBackground = !!backgroundImage; 

  return (
    <Link
      href={path}
      className={`
        group flex flex-col p-6 w-full h-full min-h-[200px]
        rounded-2xl shadow-lg transition transform hover:scale-[1.02] duration-300
        relative overflow-hidden cursor-pointer text-left
        text-white
        ${isImageBackground ? 'bg-gray-800' : color} 
      `}
      style={{ 
        backgroundImage: isImageBackground ? `url(${backgroundImage})` : 'none',
        backgroundSize: isImageBackground ? 'cover' : 'auto',
        backgroundPosition: isImageBackground ? 'center' : 'auto',
      }}
    >
      {/* Overlay for text readability on image backgrounds */}
      {isImageBackground && (
        <div className={`absolute inset-0 ${color} opacity-70 group-hover:opacity-80 transition duration-300 rounded-2xl`}></div>
      )}

      {/* Content wrapper to ensure text is above the background/overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Number and Icon */}
        <div className="flex items-center mb-3">
          <span className="text-3xl font-extrabold mr-3">{number}.</span>
          <div className="text-7xl transition-all group-hover:rotate-3 duration-300 leading-none"> 
              {icon}
          </div>
        </div>
        
        {/* Titles */}
        <h2 className="text-2xl font-bold tracking-tight mt-1">{title}</h2>
        <h3 className="text-sm font-medium uppercase opacity-80 mb-2">{subtitle}</h3>
        
        {/* Description */}
        <p className="mt-2 text-sm opacity-90">
          {description}
        </p>

        {/* CTA Arrow */}
        <div className="mt-auto pt-3 text-sm font-semibold flex items-center">
            Generate Content 
            <span className="ml-2 transition-transform group-hover:translate-x-1 duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};


const C1TopicsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-16 bg-gray-100">
      
      {/* Header and Back Button */}
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

      {/* Title Section */}
      <h1 className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl text-center">
        C1: Advanced Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Achieve high-level proficiency! Master nuanced language use, complex grammar, and engage in sophisticated academic and professional discourse.
      </p>

      {/* Topics Grid (2 columns on small/medium, 3 on large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {c1Topics.map((topic) => (
          <TopicCard key={topic.number} {...topic} />
        ))}
      </div>

      {/* Footer (simple) */}
      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent
      </footer>
    </main>
  );
};

export default C1TopicsPage;

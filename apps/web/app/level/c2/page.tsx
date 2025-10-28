"use client";

import React from "react";

// Mock Link component for single-file use to avoid 'next/link' import error
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- C2 Topics Data with Sequential Learning Order ---
const c2Topics = [
  {
    number: 1,
    title: "Stilistik & Redewendungen",
    subtitle: "Idioms, Proverbs, & Sophisticated Style",
    description: "Effortlessly using native-like idioms, proverbs, nuanced rhetorical figures for impact.",
    icon: "🖋️ 💡", // Fountain Pen and Lightbulb
    path: "/c2/stylistics",
    color: "bg-gray-800", 
  },
  {
    number: 2,
    title: "Seltene Grammatikformen",
    subtitle: "Advanced/Obscure Grammar",
    description: "Mastering subtle and complex grammatical forms like advanced Genitiv usage and outdated verb patterns.",
    icon: "💎 ⚙️", // Diamond and Gear
    path: "/c2/rare_grammar",
    color: "bg-fuchsia-600", 
  },
  {
    number: 3,
    title: "Textzusammenfassung & Synthese",
    subtitle: "Synthesizing Complex Sources",
    description: "Summarizing information from multiple complex, specialized sources, synthesizing them into a coherent argument.",
    icon: "📚 ✂️", // Books and Scissors
    path: "/c2/synthesis",
    color: "bg-teal-700", 
  },
  {
    number: 4,
    title: "Kontroverse Debatten",
    subtitle: "Leading Expert-Level Debates",
    description: "Structuring and leading complex, high-stakes arguments across a range of highly specialized topics.",
    icon: "⚔️ 🧐", // Crossed Swords and Monocle
    path: "/c2/master_debate",
    color: "bg-indigo-700", 
  },
  {
    number: 5,
    title: "Interdisziplinäre Themen",
    subtitle: "Linking Science, Arts, & History",
    description: "Discussing connections between seemingly unrelated fields (e.g., philosophy and physics).",
    icon: "🔬 🖼️", // Microscope and Picture Frame
    path: "/c2/interdisciplinary",
    color: "bg-lime-600", 
  },
  {
    number: 6,
    title: "Kreatives & Literarisches Schreiben",
    subtitle: "Creative Expression and Literature",
    description: "Producing original, high-quality texts, including short stories, poetry, and literary analysis.",
    icon: "✍️ 📖", // Writing Hand and Open Book
    path: "/c2/creative_writing",
    color: "bg-rose-600", 
  },
  {
    number: 7,
    title: "Sprachliche Varietäten",
    subtitle: "Dialects, Jargon, & Slang",
    description: "Understanding and differentiating between regional dialects, specialized professional jargon, sociolects.",
    icon: "👂 🗺️", // Ear and Map
    path: "/c2/varieties",
    color: "bg-cyan-600", 
  },
  {
    number: 8,
    title: "Rhetorik & Überzeugung",
    subtitle: "Advanced Persuasion Techniques",
    description: "Analyzing and utilizing complex rhetorical devices (e.g., anaphora, irony) for highly persuasive speech.",
    icon: "👑 🎤", // Crown and Microphone
    path: "/c2/rhetoric_mastery",
    color: "bg-amber-600", 
  },
  {
    number: 9,
    title: "Historische Texte",
    subtitle: "Reading Older/Dated Language",
    description: "Comprehending texts with older vocabulary, complex sentence structures, and historical context.",
    icon: "⏳ 📜", // Hourglass and Scroll
    path: "/c2/historical_texts",
    color: "bg-green-700", 
  },
  {
    number: 10,
    title: "Globales Krisenmanagement",
    subtitle: "Diplomacy & International Relations",
    description: "Discussing complex international crises, foreign policy, diplomatic strategies with expert vocabulary.",
    icon: "🌍 🚨", // Globe and Siren
    path: "/c2/crisis_management",
    color: "bg-pink-700", 
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


const C2TopicsPage = () => {
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
        C2: Mastery Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Achieve native-like competence! Focus on complex style, nuance, literary analysis, and effortless command of the entire language.
      </p>

      {/* Topics Grid (2 columns on small/medium, 3 on large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {c2Topics.map((topic) => (
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

export default C2TopicsPage;

"use client";

import React from "react";

// Mock Link component for single-file use to avoid 'next/link' import error
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- B2 Topics Data with Sequential Learning Order ---
const b2Topics = [
  {
    number: 1,
    title: "Der erweiterte Infinitiv",
    subtitle: "Complex Infinitives (zu + um/ohne/statt)",
    description: "Structuring complex sentences to express purpose, contradiction, and alternative actions.",
    icon: "➕ ➡️", // Plus and Right Arrow
    path: "/b2/infinitives",
    color: "bg-indigo-600", 
  },
  {
    number: 2,
    title: "N-Deklination",
    subtitle: "Mastering N-Declension Nouns",
    description: "Identifying and correctly declining the small group of 'N-nouns' (like der Mensch, der Name).",
    icon: "🏷️ 📏", // Tag/Label and Ruler
    path: "/b2/n-declension",
    color: "bg-fuchsia-700", 
  },
  {
    number: 3,
    title: "Nominalisierung & Verb-Nomen",
    subtitle: "Action into Nouns (z.B. zur Diskussion stehen)",
    description: "Converting verbs into nouns and using fixed Verb-Nomen combinations for formal style.",
    icon: "↔️ 📝", // Double Arrow and Pencil/Note
    path: "/b2/nominalization",
    color: "bg-teal-600", 
  },
  {
    number: 4,
    title: "Konjunktiv I (Indirekte Rede)",
    subtitle: "Reporting Speech Formally",
    description: "Using Konjunktiv I to report statements neutrally and formally in media and academic contexts.",
    icon: "💬 🗞️", // Speech Bubble and Newspaper
    path: "/b2/konjunktiv1",
    color: "bg-amber-600", 
  },
  {
    number: 5,
    title: "Textstruktur & Kohärenz",
    subtitle: "Structuring Advanced Texts",
    description: "Using cohesive devices (Konjunktionen, Adverbien) to create clear, logically structured essays/reports.",
    icon: "🏗️ 🧱", // Building Structure and Brick
    path: "/b2/cohesion",
    color: "bg-red-700", 
  },
  {
    number: 6,
    title: "Debatten & Kontroversen",
    subtitle: "Formal Argumentation & Debate",
    description: "Developing and defending complex arguments on controversial topics with nuanced language.",
    icon: "🗣️ 🥊", // Speaking Head and Boxing Gloves
    path: "/b2/debate",
    color: "bg-green-700", 
  },
  {
    number: 7,
    title: "Wirtschaft & Globalisierung",
    subtitle: "Economy & Global Issues",
    description: "Discussing economic trends, globalization, and labor market challenges.",
    icon: "💸 🌐", // Money with Wings and Globe
    path: "/b2/economy",
    color: "bg-cyan-700", 
  },
  {
    number: 8,
    title: "Wissenschaft & Forschung",
    subtitle: "Science, Research, & Technology",
    description: "Understanding technical reports, discussing scientific advancements, and commenting on innovation.",
    icon: "🔬 🚀", // Microscope and Rocket
    path: "/b2/science",
    color: "bg-purple-700", 
  },
  {
    number: 9,
    title: "Politik & Gesellschaft",
    subtitle: "Political Systems & Social Ethics",
    description: "Analyzing political debates, discussing ethical dilemmas, and commenting on public policy.",
    icon: "🏛️ ⚖️", // Government Building and Scale of Justice
    path: "/b2/politics",
    color: "bg-lime-600", 
  },
  {
    number: 10,
    title: "Kulturkritik & Literatur",
    subtitle: "Analyzing Art, Film, & Books",
    description: "Expressing sophisticated opinions on art, media, and engaging in literary analysis.",
    icon: "🎨 🎬", // Palette and Clapperboard
    path: "/b2/culture_critique",
    color: "bg-gray-800", 
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


const B2TopicsPage = () => {
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
        B2: Upper Intermediate Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Achieve true fluency! Focus on mastering complex grammatical structures and engaging in detailed, professional, and abstract discussions.
      </p>

      {/* Topics Grid (2 columns on small/medium, 3 on large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {b2Topics.map((topic) => (
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

export default B2TopicsPage;

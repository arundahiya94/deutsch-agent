"use client";

import React from "react";

// Mock Link component for single-file use to avoid 'next/link' import error
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- B1 Topics Data with Sequential Learning Order ---
const b1Topics = [
  {
    number: 1,
    title: "Vergangenheit (Präteritum)",
    subtitle: "Narrating Stories & History",
    description: "Mastering the simple past tense (Präteritum) for formal writing and historical narration.",
    icon: "📜 🏰", // Scroll and Castle
    path: "/b1/narration",
    color: "bg-orange-500", 
  },
  {
    number: 2,
    title: "Konjunktiv II",
    subtitle: "Hypotheticals & Wishes",
    description: "Expressing desires, giving polite advice, formulating hypothetical scenarios.",
    icon: "💭 🙏", // Thought Bubble and Praying Hands
    path: "/b1/hypotheticals",
    color: "bg-fuchsia-600", 
  },
  {
    number: 3,
    title: "Relativsätze",
    subtitle: "Complex Description",
    description: "Using relative clauses (der, die, das) to combine sentences and provide detailed descriptions.",
    icon: "🔗 🧩", // Link and Puzzle Piece
    path: "/b1/relative",
    color: "bg-indigo-600", 
  },
  {
    number: 4,
    title: "Passive Formen",
    subtitle: "Focusing on the Action",
    description: "Understanding and using the passive voice (Vorgangspassiv) in official contexts and news.",
    icon: "🚧 🗣️", // Construction Barrier and Speaking Head
    path: "/b1/passive",
    color: "bg-teal-600", 
  },
  {
    number: 5,
    title: "Berufliche Kommunikation",
    subtitle: "Workplace Independence",
    description: "Conducting simple job interviews, writing applications, handling professional emails.",
    icon: "🤝 📈", // Handshake and Stock Chart
    path: "/b1/workplace",
    color: "bg-red-500", 
  },
  {
    number: 6,
    title: "Umwelt & Nachhaltigkeit",
    subtitle: "Environment & Sustainability",
    description: "Discussing environmental issues, conservation, making eco-friendly suggestions.",
    icon: "🌳 ♻️", // Tree and Recycling Symbol
    path: "/b1/environment",
    color: "bg-green-600", 
  },
  {
    number: 7,
    title: "Interkulturelle Themen",
    subtitle: "Culture, Tradition, & Habits",
    description: "Comparing cultures, discussing traditions, understanding differences in social behavior.",
    icon: "🌍 🎭", // Globe and Theatre Masks
    path: "/b1/culture",
    color: "bg-yellow-600", 
  },
  {
    number: 8,
    title: "Medizin & Soziales",
    subtitle: "Social Systems & Health Care",
    description: "Navigating the health care system, discussing insurance, understanding social services.",
    icon: "🏥 👨‍⚕️", // Hospital and Doctor
    path: "/b1/social",
    color: "bg-cyan-700", 
  },
  {
    number: 9,
    title: "Urlaubsplanung & Reisen",
    subtitle: "Detailed Travel Planning",
    description: "Planning complex itineraries, discussing travel logistics, handling travel problems.",
    icon: "🗺️ 🧳", // Map and Luggage
    path: "/b1/travel_planning",
    color: "bg-purple-700", 
  },
  {
    number: 10,
    title: "Medienanalyse & Kritik",
    subtitle: "Analyzing News & Media",
    description: "Understanding complex newspaper articles, giving balanced critiques, discussing media bias.",
    icon: "📰 🧐", // Newspaper and Magnifying Glass
    path: "/b1/media_analysis",
    color: "bg-gray-700", 
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


const B1TopicsPage = () => {
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
        B1: Independent Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Become an independent user! Master complex grammar (clauses, tenses) and navigate most everyday situations confidently.
      </p>

      {/* Topics Grid (2 columns on small/medium, 3 on large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {b1Topics.map((topic) => (
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

export default B1TopicsPage;

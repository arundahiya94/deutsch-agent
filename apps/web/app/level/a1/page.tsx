"use client";

import React from "react";

// Mock Link component for single-file use to avoid 'next/link' import error
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// Note: Icons are now simple strings (emojis) defined directly in the a1Topics array.

// --- A1 Topics Data with Sequential Learning Order ---
const a1Topics = [
  {
    number: 1,
    title: "Grüßen & Vorstellen",
    subtitle: "Greetings & Introductions",
    description: "Names, origin, languages, and essential polite phrases (Hallo, Tschüss).",
    icon: "🤝 🙋‍♀️", // Namaste/Folded Hands
    path: "/a1/greetings",
    color: "bg-indigo-500", 
  },
  {
    number: 2,
    title: "Zahlen & Zeit",
    subtitle: "Numbers, Dates, & Time",
    description: "Counting 0-1000, telling time, and setting appointments and dates.",
    icon: "#️⃣ ⏰", // Number symbol and Clock
    path: "/a1/numbers",
    color: "bg-pink-500", 
  },
  {
    number: 3,
    title: "Familie & Wohnen",
    subtitle: "Family & Housing",
    description: "Describing people, family members, rooms, and simple furniture.",
    icon: "👨‍👨‍👧‍👦 🏠", // Family and House
    path: "/a1/housing",
    color: "bg-emerald-500", 
  },
  {
    number: 4,
    title: "Alltag & Beruf",
    subtitle: "Daily Routine & Work",
    description: "Talking about your day, simple job roles, and expressing basic skills.",
    icon: "🗓️ 💼", // Calendar and Briefcase (for Routine/Work)
    path: "/a1/routine",
    color: "bg-yellow-500", 
  },
  {
    number: 5,
    title: "Essen & Trinken",
    subtitle: "Food, Drink, & Shopping",
    description: "Ordering in a cafe, talking about preferences, and buying groceries.",
    icon: "🍔 ☕", // Burger and Coffee
    path: "/a1/food",
    color: "bg-red-500", 
  },
  {
    number: 6,
    title: "Körper & Gesundheit",
    subtitle: "Body & Health",
    description: "Naming body parts, describing simple ailments, and visiting the doctor.",
    icon: "💪 ❤️", // Muscle and Heart
    path: "/a1/body",
    color: "bg-cyan-600", 
  },
  {
    number: 7,
    title: "Kleidung & Farben",
    subtitle: "Clothes & Colors",
    description: "Describing what you wear, colors, and discussing simple clothing needs.",
    icon: "👗 👕", // Dress and T-Shirt
    path: "/a1/clothes",
    color: "bg-orange-500", 
  },
  {
    number: 8,
    title: "Wetter & Jahreszeiten",
    subtitle: "Weather & Seasons",
    description: "Describing basic weather conditions and talking about the four seasons.",
    icon: "🌤️ 🍁", // SSun, Autumn
    path: "/a1/weather",
    color: "bg-green-500", 
  },
  {
    number: 9,
    title: "Ferien & Urlaub",
    subtitle: "Holidays & Vacation",
    description: "Talking about holiday plans, destinations, and travel activities.",
    icon: "✈️ 🎡", // Plane and Ferris Wheel
    path: "/a1/travel",
    color: "bg-purple-500", 
  },
  {
    number: 10,
    title: "Wegbeschreibung",
    subtitle: "Giving Directions",
    description: "Asking for and giving basic directions in a city (links, rechts, geradeaus).",
    icon: "⬅️ ➡️", // Left and Right Arrows
    path: "/a1/directions",
    color: "bg-blue-600", 
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
          {/* ICON SIZE REDUCED FROM text-8xl TO text-7xl */}
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


const A1TopicsPage = () => {
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
        A1: Absolute Beginner Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        We've organized the core A1 curriculum into 10 essential learning packs. Select one to get started!
      </p>

      {/* Topics Grid (2 columns on small/medium, 3 on large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {a1Topics.map((topic) => (
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

export default A1TopicsPage;

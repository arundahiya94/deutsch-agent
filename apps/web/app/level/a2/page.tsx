"use client";

import React from "react";

// Mock Link component for single-file use to avoid 'next/link' import error
const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// --- A2 Topics Data with Sequential Learning Order ---
const a2Topics = [
  {
    number: 1,
    title: "Vergangenheit (Perfekt)",
    subtitle: "Talking about the Past",
    description: "Mastering the Perfect Tense for daily and past events.",
    icon: "⏳", // Hourglass
    path: "/a2/past",
    color: "bg-fuchsia-600", 
  },
  {
    number: 2,
    title: "Kommunikation & Medien",
    subtitle: "Letters, Emails, & Calls",
    description: "Writing formal and informal messages, making phone arrangements.",
    icon: "📧 📱", // Email and Phone
    path: "/a2/communication",
    color: "bg-amber-500", 
  },
  {
    number: 3,
    title: "Ämter & Behörden",
    subtitle: "Bureaucracy & Official Forms",
    description: "Dealing with city offices, making appointments, filling out forms.",
    icon: "🏢 📝", // Office building and Form
    path: "/a2/bureaucracy",
    color: "bg-teal-600", 
  },
  {
    number: 4,
    title: "Meinungen & Argumente",
    subtitle: "Expressing Views",
    description: "Agreeing, disagreeing, justifying your opinions with more complex sentence structures.",
    icon: "🤔 💬", // Thinking face and Speech bubbles
    path: "/a2/opinions",
    color: "bg-rose-500", 
  },
  {
  number: 5,
    title: "Gefühle & Wünsche",
    subtitle: "Feelings & Hypotheticals",
    description: "Expressing emotions, giving advice, simple use of Konjunktiv II (wishes).",
    icon: "😢 😄", // Crying and Smiling face
    path: "/a2/feelings",
    color: "bg-violet-600", 
  },
  {
    number: 6,
    title: "Gesundheit & Notfälle",
    subtitle: "Detailed Health & Emergencies",
    description: "Describing symptoms in detail, understanding medical advice, reporting an emergency.",
    icon: "🩹 🚨", // Bandage and Siren
    path: "/a2/health",
    color: "bg-indigo-700", 
  },
  {
    number: 7,
    title: "Medien & Technik",
    subtitle: "Technology & Digital World",
    description: "Discussing TV, internet usage, giving simple instructions for technical devices.",
    icon: "💻 📺", // Laptop and TV
    path: "/a2/media",
    color: "bg-cyan-500", 
  },
  {
    number: 8,
    title: "Einkaufen & Dienstleistungen",
    subtitle: "Advanced Shopping & Services",
    description: "Discussing purchases, returning items, using postal or banking services.",
    icon: "🛒 💳", // Shopping Cart and Credit Card
    path: "/a2/shopping",
    color: "bg-lime-600", 
  },
  {
    number: 9,
    title: "Zukunft & Pläne",
    subtitle: "Future Intentions",
    description: "Talking about definite future plans and predictions using Future I (werden).",
    icon: "🔮 ✨", // Crystal Ball and Sparkles
    path: "/a2/future",
    color: "bg-purple-700", 
  },
  {
    number: 10,
    title: "Bildung & Karriere",
    subtitle: "Education & Job Search",
    description: "Discussing school, university, training, simple job application topics.",
    icon: "🎓 👔", // Graduation Cap and Tie
    path: "/a2/career",
    color: "bg-red-700", 
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


const A2TopicsPage = () => {
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
        A2: Foundation Topics
      </h1>
      
      <p className="mt-4 max-w-3xl text-gray-600 text-lg text-center mb-12">
        Move beyond survival German. Master compound sentences, express opinions, and handle more complex social situations.
      </p>

      {/* Topics Grid (2 columns on small/medium, 3 on large) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-4">
        {a2Topics.map((topic) => (
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

export default A2TopicsPage;

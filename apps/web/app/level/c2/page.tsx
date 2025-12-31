"use client";

import React, { useState } from "react";

// Mock Link component for single-file use (required since we cannot import next/link)
const Link = ({ href, className, children }) => (
  <a href={href} className={className} onClick={(e) => {
    // Prevent navigation for demonstration purposes
    e.preventDefault();
    console.log(`Navigating to: ${href}`);
  }}>
    {children}
  </a>
);

// --- Emoji Icon Definitions (Consistent 7xl size) ---

// 1. Literarische Analyse & Stilistik (Literary Analysis & Stylistics)
const IconLiterary = () => <span className="text-7xl">🖋️ 🎭</span>;
// 2. Redundanz & Präzision (Redundancy & Precision)
const IconPrecision = () => <span className="text-7xl">🎯 ✂️</span>;
// 3. Wissenschafts- und Fachjargon (Scientific & Technical Jargon)
const IconJargon = () => <span className="text-7xl">🧪 ⚙️</span>;
// 4. Historische Texte & Dialekte (Historical Texts & Dialects)
const IconHistory = () => <span className="text-7xl">📜 🗣️</span>;
// 5. Interkulturelle Kompetenz (Intercultural Competence)
const IconIntercultural = () => <span className="text-7xl">🧠 🌍</span>;
// 6. Fehlermanagement & Korrektur (Error Management & Correction)
const IconError = () => <span className="text-7xl">❌ ✅</span>;
// 7. Sprachphilosophie (Philosophy of Language)
const IconPhilosophy = () => <span className="text-7xl">🌌 💬</span>;
// 8. Komplexe Textsorten (Complex Text Genres - e.g., legal, bureaucratic)
const IconComplexText = () => <span className="text-7xl">📄 📑</span>;
// 9. Zitate & Quellen (Citations & Sources)
const IconCitations = () => <span className="text-7xl">"" 📚</span>;
// 10. Kreatives Schreiben & Humor (Creative Writing & Humor/Irony)
const IconCreative = () => <span className="text-7xl">✨ 😂</span>;


// --- Topic Data (C2) ---

const c2Topics = [
  {
    number: 1,
    title: "Literarische Analyse & Stilistik",
    description: "Deep analysis of literary devices, style, and subtext in advanced texts.",
    icon: <IconLiterary />,
    color: "bg-red-800", 
    path: "literary-analysis",
  },
  {
    number: 2,
    title: "Redundanz & Präzision",
    description: "Eliminating filler words and achieving maximum expressive precision.",
    icon: <IconPrecision />,
    color: "bg-pink-800",
    path: "precision-redundancy",
  },
  {
    number: 3,
    title: "Wissenschafts- und Fachjargon",
    description: "Mastering highly specialized vocabulary and professional terminology.",
    icon: <IconJargon />,
    color: "bg-purple-800",
    path: "jargon-technical",
  },
  {
    number: 4,
    title: "Historische Texte & Dialekte",
    description: "Comprehending older German texts and understanding dialect variations.",
    icon: <IconHistory />,
    color: "bg-indigo-800",
    path: "history-dialects",
  },
  {
    number: 5,
    title: "Interkulturelle Kompetenz",
    description: "Fluent understanding of cultural subtleties, nuance, and implication.",
    icon: <IconIntercultural />,
    color: "bg-blue-800",
    path: "intercultural-competence",
  },
  {
    number: 6,
    title: "Fehlermanagement & Korrektur",
    description: "Self-correction strategies and advanced editing of complex documents.",
    icon: <IconError />,
    color: "bg-cyan-800",
    path: "error-management",
  },
  {
    number: 7,
    title: "Sprachphilosophie",
    description: "Debating linguistic theory, meaning, and the structure of thought.",
    icon: <IconPhilosophy />,
    color: "bg-teal-800",
    path: "language-philosophy",
  },
  {
    number: 8,
    title: "Komplexe Textsorten",
    description: "Analyzing and writing specialized genres (legal, contracts, official notices).",
    icon: <IconComplexText />,
    color: "bg-green-800",
    path: "complex-genres",
  },
  {
    number: 9,
    title: "Zitate & Quellen",
    description: "Properly integrating quotes, citing sources, and academic integrity.",
    icon: <IconCitations />,
    color: "bg-lime-800",
    path: "citations-sources",
  },
  {
    number: 10,
    title: "Kreatives Schreiben & Humor",
    description: "Mastering irony, sarcasm, and generating sophisticated creative texts.",
    icon: <IconCreative />,
    color: "bg-gray-800",
    path: "creative-humor",
  },
];


// --- Sub-Components (Reused from A1/B1) ---

const ActionLink = ({ href, children, color, icon }) => (
  <Link
    href={href}
    className={`flex flex-col items-center justify-center p-3 rounded-lg text-center shadow-md transition hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 ${color} text-white`}
    style={{ minHeight: '80px' }}
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-sm font-semibold mt-1">{children}</span>
  </Link>
);

const TopicCard = ({ number, title, description, icon, color, levelPath }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the action buttons array
  const actions = [
    { name: "Learn", route: `${levelPath}/learn`, color: "bg-indigo-600", icon: "🧠" },
    { name: "Practice", route: `${levelPath}/practice`, color: "bg-teal-600", icon: "📝" },
    { name: "Read", route: `${levelPath}/read`, color: "bg-yellow-600", icon: "📚" },
    { name: "See", route: `${levelPath}/see`, color: "bg-red-600", icon: "📺" },
  ];

  return (
    <div className="rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden bg-white border-4 border-white">
      
      {/* Main Card Header (Clickable Area) */}
      <div 
        className={`p-6 cursor-pointer ${color} text-white transition duration-300 ease-in-out`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
      >
        <div className="flex items-center justify-center space-x-4 w-full">
            <span className="text-4xl font-extrabold opacity-70">
                {number}.
            </span>
            <div className="text-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm opacity-90 mt-1">{description}</p>
            </div>
        </div>
        <div className="mt-2 text-center">
            {icon}
        </div>
      </div>

      {/* Action Bar (Expanded Content) */}
      <div 
        className={`p-4 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gray-50`}
      >
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <ActionLink
              key={index}
              href={action.route}
              color={action.color}
              icon={action.icon}
            >
              {action.name}
            </ActionLink>
          ))}
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
             <span className="font-semibold">Click the card header again to close.</span>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---

const C2TopicsPage = () => {
  const level = "C2";
  const levelDescription = "You can understand with ease virtually everything heard or read. You can summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation.";

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-16 bg-gray-50">
      <div className="w-full max-w-6xl">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
          Deutsch Agent: <span className="text-indigo-600">{level} Topics</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg text-center mb-12">
          {levelDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c2Topics.map((topic) => (
            <TopicCard
              key={topic.number}
              number={topic.number}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              color={topic.color}
              levelPath={`/level/${level.toLowerCase()}/${topic.path}`}
            />
          ))}
        </div>
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent
      </footer>
    </main>
  );
};

export default C2TopicsPage;

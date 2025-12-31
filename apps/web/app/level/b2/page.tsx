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

// 1. Argumentation & Debatte (Argumentation & Debate)
const IconDebate = () => <span className="text-7xl">⚖️ 🗣️</span>;
// 2. Komplexe Syntax (Complex Syntax)
const IconSyntax = () => <span className="text-7xl">🧩 🔗</span>;
// 3. Wissenschaft & Forschung (Science & Research)
const IconScience = () => <span className="text-7xl">🔬 💡</span>;
// 4. Globalisierung & Gesellschaft (Globalization & Society)
const IconGlobal = () => <span className="text-7xl">🌎 🧑‍🤝‍🧑</span>;
// 5. Bewerbung & Berufsalltag (Job Applications & Work Life)
const IconApplication = () => <span className="text-7xl">🖋️ 🤝</span>;
// 6. Abstraktes Denken (Abstract Thinking)
const IconAbstract = () => <span className="text-7xl">💭 🤔</span>;
// 7. Zukunft & Prognosen (Future & Prognoses)
const IconFuture = () => <span className="text-7xl">🔮 🚀</span>;
// 8. Kulturelle Analyse (Cultural Analysis)
const IconAnalysis = () => <span className="text-7xl">🎭 🔍</span>;
// 9. Redewendungen & Idiome (Phrases & Idioms)
const IconIdioms = () => <span className="text-7xl">💬 🌀</span>;
// 10. Medienkritik & Quellen (Media Criticism & Sources)
const IconCriticism = () => <span className="text-7xl">📰 🛡️</span>;


// --- Topic Data (B2) ---

const b2Topics = [
  {
    number: 1,
    title: "Argumentation & Debatte",
    description: "Structuring complex arguments and defending viewpoints logically.",
    icon: <IconDebate />,
    color: "bg-fuchsia-600", 
    path: "debate-argumentation",
  },
  {
    number: 2,
    title: "Komplexe Syntax",
    description: "Mastering advanced noun constructions and lengthy sentences.",
    icon: <IconSyntax />,
    color: "bg-sky-600",
    path: "complex-syntax",
  },
  {
    number: 3,
    title: "Wissenschaft & Forschung",
    description: "Understanding and discussing academic articles and research topics.",
    icon: <IconScience />,
    color: "bg-emerald-600",
    path: "science-research",
  },
  {
    number: 4,
    title: "Globalisierung & Gesellschaft",
    description: "Debating the effects of global trends and social change.",
    icon: <IconGlobal />,
    color: "bg-amber-600",
    path: "globalization-society",
  },
  {
    number: 5,
    title: "Bewerbung & Berufsalltag",
    description: "Formal correspondence, interviews, and navigating professional German.",
    icon: <IconApplication />,
    color: "bg-rose-600",
    path: "job-professional",
  },
  {
    number: 6,
    title: "Abstraktes Denken",
    description: "Discussing philosophical, ethical, and theoretical concepts.",
    icon: <IconAbstract />,
    color: "bg-purple-600",
    path: "abstract-thinking",
  },
  {
    number: 7,
    title: "Zukunft & Prognosen",
    description: "Formulating predictions, possibilities, and hypotheses.",
    icon: <IconFuture />,
    color: "bg-teal-600",
    path: "future-prognoses",
  },
  {
    number: 8,
    title: "Kulturelle Analyse",
    description: "Analyzing art, music, literature, and media critically.",
    icon: <IconAnalysis />,
    color: "bg-cyan-600",
    path: "cultural-analysis",
  },
  {
    number: 9,
    title: "Redewendungen & Idiome",
    description: "Using complex, figurative phrases for native-like expression.",
    icon: <IconIdioms />,
    color: "bg-orange-600",
    path: "idioms-phrases",
  },
  {
    number: 10,
    title: "Medienkritik & Quellen",
    description: "Evaluating news sources and discussing bias and reliability.",
    icon: <IconCriticism />,
    color: "bg-slate-600",
    path: "media-criticism",
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

const B2TopicsPage = () => {
  const level = "B2";
  const levelDescription = "You can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in your field of specialisation.";

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
          {b2Topics.map((topic) => (
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

export default B2TopicsPage;

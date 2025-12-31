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

// 1. Nominalisierung & Redewendungen (Nominalization & Phrases)
const IconNominal = () => <span className="text-7xl">🔄 💡</span>;
// 2. Rhetorik & Argumentstruktur (Rhetoric & Argument Structure)
const IconRhetoric = () => <span className="text-7xl">🏛️ 🗣️</span>;
// 3. Akademisches Schreiben (Academic Writing)
const IconAcademic = () => <span className="text-7xl">🖋️ 📜</span>;
// 4. Feinanalyse von Texten (Fine Text Analysis)
const IconAnalysis = () => <span className="text-7xl">🧐 🔎</span>;
// 5. Ethik & Moralfragen (Ethics & Moral Questions)
const IconEthics = () => <span className="text-7xl">😇 😈</span>;
// 6. Politik & Verwaltung (Politics & Administration)
const IconPolitics = () => <span className="text-7xl">🗳️ 🏢</span>;
// 7. Sprachliche Varietäten (Linguistic Varieties)
const IconVarieties = () => <span className="text-7xl">🇩🇪 🇦🇹 🇨🇭</span>;
// 8. Kulturelles Erbe (Cultural Heritage)
const IconHeritage = () => <span className="text-7xl">🏛️ 🖼️</span>;
// 9. Bedingungssätze (Conditional Clauses)
const IconConditional = () => <span className="text-7xl">❓ ➡️</span>;
// 10. Sprachstil & Register (Language Style & Register)
const IconRegister = () => <span className="text-7xl">🤵 🗣️</span>;


// --- Topic Data (C1) ---

const c1Topics = [
  {
    number: 1,
    title: "Nominalisierung & Redewendungen",
    description: "Converting verbs to nouns and mastering complex German phrases.",
    icon: <IconNominal />,
    color: "bg-indigo-700", 
    path: "nominal-phrases",
  },
  {
    number: 2,
    title: "Rhetorik & Argumentstruktur",
    description: "Using advanced rhetorical devices to construct compelling arguments.",
    icon: <IconRhetoric />,
    color: "bg-fuchsia-700",
    path: "rhetoric-structure",
  },
  {
    number: 3,
    title: "Akademisches Schreiben",
    description: "Drafting papers, reports, and summaries with formal German syntax.",
    icon: <IconAcademic />,
    color: "bg-teal-700",
    path: "academic-writing",
  },
  {
    number: 4,
    title: "Feinanalyse von Texten",
    description: "Analyzing subtext, tone, and author intention in literary/complex texts.",
    icon: <IconAnalysis />,
    color: "bg-orange-700",
    path: "text-analysis",
  },
  {
    number: 5,
    title: "Ethik & Moralfragen",
    description: "Discussing complex ethical dilemmas and moral philosophy.",
    icon: <IconEthics />,
    color: "bg-red-700",
    path: "ethics-moral",
  },
  {
    number: 6,
    title: "Politik & Verwaltung",
    description: "Understanding German political discourse and administrative processes.",
    icon: <IconPolitics />,
    color: "bg-cyan-700",
    path: "politics-admin",
  },
  {
    number: 7,
    title: "Sprachliche Varietäten",
    description: "Identifying and adapting to regional dialects (Mundarten) and standards.",
    icon: <IconVarieties />,
    color: "bg-green-700",
    path: "language-varieties",
  },
  {
    number: 8,
    title: "Kulturelles Erbe",
    description: "Discussing key figures, historical periods, and cultural contributions.",
    icon: <IconHeritage />,
    color: "bg-purple-700",
    path: "cultural-heritage",
  },
  {
    number: 9,
    title: "Bedingungssätze (Konjunktiv II)",
    description: "Mastering advanced hypothetical and conditional statements.",
    icon: <IconConditional />,
    color: "bg-yellow-700",
    path: "conditional-clauses",
  },
  {
    number: 10,
    title: "Sprachstil & Register",
    description: "Adjusting language use for formal, informal, or technical audiences.",
    icon: <IconRegister />,
    color: "bg-gray-700",
    path: "style-register",
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

const C1TopicsPage = () => {
  const level = "C1";
  const levelDescription = "You can express yourself fluently and spontaneously, and use language flexibly and effectively for social, academic and professional purposes.";

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
          {c1Topics.map((topic) => (
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

export default C1TopicsPage;

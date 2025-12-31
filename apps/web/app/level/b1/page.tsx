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

// 1. Meinungen & Standpunkte (Opinions & Viewpoints)
const IconOpinions = () => <span className="text-7xl">🗣️ 🧐</span>;
// 2. Medien & Digitales (Media & Digital World)
const IconDigital = () => <span className="text-7xl">💻 🌐</span>;
// 3. Wichtige Entscheidungen (Important Decisions)
const IconDecisions = () => <span className="text-7xl">🤔 🎯</span>;
// 4. Beruf & Karriere (Job & Career)
const IconCareer = () => <span className="text-7xl">👔 📈</span>;
// 5. Erzählzeit (Narrative Tenses)
const IconNarrate = () => <span className="text-7xl">📝 📖</span>;
// 6. Genitiv & Passiv (Genitive & Passive Voice)
const IconGrammar = () => <span className="text-7xl">👑 ⚙️</span>;
// 7. Konsum & Werbung (Consumption & Advertising)
const IconShopping = () => <span className="text-7xl">🛍️ 📢</span>;
// 8. Kulturelle Unterschiede (Cultural Differences)
const IconCulture = () => <span className="text-7xl">🌍 🤝</span>;
// 9. Bildung & Schule (Education & School)
const IconEducation = () => <span className="text-7xl">🎓 🏫</span>;
// 10. Konflikte & Lösungen (Conflicts & Solutions)
const IconConflicts = () => <span className="text-7xl">😡 🤝</span>;


// --- Topic Data (B1) ---

const b1Topics = [
  {
    number: 1,
    title: "Meinungen & Standpunkte",
    description: "Expressing opinions, agreement, and disagreement clearly.",
    icon: <IconOpinions />,
    color: "bg-orange-500", 
    path: "opinions",
  },
  {
    number: 2,
    title: "Medien & Digitales",
    description: "Talking about news, social media, and digital life.",
    icon: <IconDigital />,
    color: "bg-cyan-500",
    path: "media-digital",
  },
  {
    number: 3,
    title: "Wichtige Entscheidungen",
    description: "Discussing planning, hopes, and life-changing choices.",
    icon: <IconDecisions />,
    color: "bg-indigo-500",
    path: "decisions",
  },
  {
    number: 4,
    title: "Beruf & Karriere",
    description: "Writing applications, resumes, and discussing work history.",
    icon: <IconCareer />,
    color: "bg-purple-500",
    path: "career",
  },
  {
    number: 5,
    title: "Erzählzeit (Präteritum)",
    description: "Telling stories and reporting past events accurately.",
    icon: <IconNarrate />,
    color: "bg-red-500",
    path: "narrative-tenses",
  },
  {
    number: 6,
    title: "Genitiv & Passiv",
    description: "Using formal grammar (Genitive/Passive) in written form.",
    icon: <IconGrammar />,
    color: "bg-pink-500",
    path: "genitiv-passiv",
  },
  {
    number: 7,
    title: "Konsum & Werbung",
    description: "Analyzing ads, discussing buying habits, and consumerism.",
    icon: <IconShopping />,
    color: "bg-green-500",
    path: "consumption",
  },
  {
    number: 8,
    title: "Kulturelle Unterschiede",
    description: "Comparing cultures, customs, and etiquette.",
    icon: <IconCulture />,
    color: "bg-teal-500",
    path: "culture",
  },
  {
    number: 9,
    title: "Bildung & Schule",
    description: "Discussing the school system, education path, and learning.",
    icon: <IconEducation />,
    color: "bg-yellow-500",
    path: "education",
  },
  {
    number: 10,
    title: "Konflikte & Lösungen",
    description: "Describing problems, negotiating, and finding compromises.",
    icon: <IconConflicts />,
    color: "bg-gray-500",
    path: "conflicts",
  },
];


// --- Sub-Components ---

const ActionLink = ({ href, children, color, icon }) => (
  <Link
    href={href}
    className={`flex flex-col items-center justify-center p-3 rounded-lg text-center shadow-md transition hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 ${color}`}
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
            <Link
              key={index}
              href={action.route}
              className={`
                flex flex-col items-center justify-center p-3 rounded-lg text-center
                ${action.color} text-white shadow-md transition hover:scale-[1.03] 
                hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50
              `}
              style={{ minHeight: '80px' }}
            >
              <span className={`text-2xl`}>{action.icon}</span>
              <span className="text-sm font-semibold mt-1">{action.name}</span>
            </Link>
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

const B1TopicsPage = () => {
  const level = "B1";
  const levelDescription = "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc.";

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
          {b1Topics.map((topic) => (
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

export default B1TopicsPage;

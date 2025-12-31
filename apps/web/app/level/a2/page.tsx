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

// 1. Vergangenheit & Perfekt (Past Tense)
const IconPastTense = () => <span className="text-7xl">🔙 🕰️</span>;
// 2. Dativ: Freunde & Orte (Dative Case)
const IconDative = () => <span className="text-7xl">🎁 📍</span>;
// 3. Nebensätze: Weil & Dass (Subordinate Clauses)
const IconSubClauses = () => <span className="text-7xl">🔗 ➡️</span>;
// 4. Gesundheit & Termine (Health & Appointments)
const IconHealth = () => <span className="text-7xl">⚕️ 📅</span>;
// 5. Kommunikation & Medien (Communication & Media)
const IconMedia = () => <span className="text-7xl">📱 📰</span>;
// 6. Wohnungssuche & Umzug (Housing & Moving)
const IconHousing = () => <span className="text-7xl">🏘️ 📦</span>;
// 7. Vergleiche & Steigerungen (Comparisons)
const IconComparisons = () => <span className="text-7xl">⚖️ 📈</span>;
// 8. Öffentliche Verkehrsmittel (Public Transport)
const IconTransport = () => <span className="text-7xl">🚌 🚆</span>;
// 9. Wünsche & Irreales (Wishes & Hypothetical)
const IconWishes = () => <span className="text-7xl">✨ 🙏</span>;
// 10. Kleinanzeigen & Reklamation (Ads & Complaints)
const IconComplaints = () => <span className="text-7xl">🏷️ 😡</span>;


// --- Topic Data (A2) ---

const a2Topics = [
  {
    number: 1,
    title: "Vergangenheit & Perfekt",
    description: "Narrating the past and structuring events.",
    icon: <IconPastTense />,
    color: "bg-purple-500", 
    path: "past-tense",
  },
  {
    number: 2,
    title: "Dativ: Freunde & Orte",
    description: "Mastering the tricky Dative case and its prepositions.",
    icon: <IconDative />,
    color: "bg-teal-500",
    path: "dative-case",
  },
  {
    number: 3,
    title: "Nebensätze: Weil & Dass",
    description: "Connecting ideas with subordinate clauses.",
    icon: <IconSubClauses />,
    color: "bg-indigo-500",
    path: "subordinate-clauses",
  },
  {
    number: 4,
    title: "Gesundheit & Termine",
    description: "Making appointments and describing symptoms.",
    icon: <IconHealth />,
    color: "bg-red-500",
    path: "health-appointments",
  },
  {
    number: 5,
    title: "Kommunikation & Medien",
    description: "Discussing news, using phone, and internet.",
    icon: <IconMedia />,
    color: "bg-yellow-500",
    path: "media-communication",
  },
  {
    number: 6,
    title: "Wohnungssuche & Umzug",
    description: "Finding a flat, describing rooms, and moving.",
    icon: <IconHousing />,
    color: "bg-pink-500",
    path: "housing-moving",
  },
  {
    number: 7,
    title: "Vergleiche & Steigerungen",
    description: "Comparing things and people (comparative/superlative).",
    icon: <IconComparisons />,
    color: "bg-green-500",
    path: "comparisons",
  },
  {
    number: 8,
    title: "Öffentliche Verkehrsmittel",
    description: "Using trains, buses, and understanding schedules.",
    icon: <IconTransport />,
    color: "bg-cyan-500",
    path: "public-transport",
  },
  {
    number: 9,
    title: "Wünsche & Irreales (Konjunktiv)",
    description: "Expressing desires, wishes, and hypothetical situations.",
    icon: <IconWishes />,
    color: "bg-orange-500",
    path: "wishes-hypothetical",
  },
  {
    number: 10,
    title: "Kleinanzeigen & Reklamation",
    description: "Understanding classified ads and handling complaints.",
    icon: <IconComplaints />,
    color: "bg-gray-500",
    path: "ads-complaints",
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

const A2TopicsPage = () => {
  const level = "A2";
  const levelDescription = "Master the past tense, Dative case, and complex sentences to communicate confidently.";

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
          {a2Topics.map((topic) => (
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

export default A2TopicsPage;

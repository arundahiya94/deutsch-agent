"use client";

import React from "react";
// Since we are limited to a single file, we will use basic HTML elements and
// Tailwind CSS classes to create the component structure. We assume Next.js
// and Tailwind are correctly configured in the external environment.

// In a real project, Link would be imported from 'next/link'.
// For this single-file demonstration, we will use standard <a> tags for navigation
// to simulate the behavior, but using a custom component to represent Link.

const Link = ({ href, className, children }) => (
  // In a real Next.js app, this would use the next/link component.
  // Using <a> for demonstration purposes only.
  <a href={href} className={className}>
    {children}
  </a>
);

// Data structure for the CEFR level groups
const levelGroups = [
  {
    levels: "A1",
    title: "Absolute Beginner",
    icon: "👶",
    path: "/level/a1",
    gradient: "from-green-300 to-emerald-400",
  },
  {
    levels: "A2",
    title: "Elementary",
    icon: "🌱",
    path: "/level/a2",
    gradient: "from-green-400 to-blue-500",
  },
  {
    levels: "B1",
    title: "Intermediate",
    icon: "🌳",
    path: "/level/b1",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    levels: "B2",
    title: "Upper Intermediate",
    icon: "🌟",
    path: "/level/b2",
    gradient: "from-orange-500 to-red-600",
  },
  {
    levels: "C1",
    title: "Advanced",
    icon: "🎓",
    path: "/level/c1",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    levels: "C2",
    title: "Mastery",
    icon: "👑",
    path: "/level/c2",
    gradient: "from-pink-500 to-fuchsia-600",
  },
];

const LevelCard = ({ levels, title, icon, path, gradient }) => (
  <Link
    href={path}
    className={`
      group flex flex-col items-center justify-center p-4 w-full h-44
      rounded-xl shadow-lg transition transform hover:scale-[1.03] duration-300
      bg-white border-b-4 border-l-2
      hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-75
      bg-gradient-to-br ${gradient} text-white cursor-pointer
    `}
  >
    <div className="text-4xl mb-1 transition-all group-hover:rotate-6">
      {icon}
    </div>
    <div className="text-xl font-extrabold tracking-tight mt-1">{levels}</div>
    <div className="text-sm font-semibold uppercase opacity-90">{title}</div>
    <p className="mt-1 text-center text-xs opacity-80 line-clamp-2 px-1">
    </p>
  </Link>
);


export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4 py-16 bg-gray-50">
      
      {/* Title Section */}
      <h1 className="bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-500 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl">
        DeutschAgent
      </h1>
      
      <p className="mt-6 text-xl text-gray-800 font-medium sm:text-2xl">
        Build <span className="font-extrabold text-indigo-700">topic-based learning packs</span>
      </p>

      <p className="mt-3 max-w-2xl text-gray-500 text-base sm:text-lg mb-12">
        Select your specific **CEFR proficiency level** (A1–C2) to generate custom vocabulary, examples, Q&A, and dialogues.
      </p>

      {/* Level Selection Grid (6 columns on large screens, 3 on medium, 2 on small) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-7xl p-4">
        {levelGroups.map((group) => (
          <LevelCard key={group.levels} {...group} />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent — Learn Smarter, Not Harder
      </footer>
    </main>
  );
}

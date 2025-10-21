"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <h1 className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
        DeutschAgent
      </h1>
      <br></br>
      <p className="mt-4 text-lg text-gray-700 sm:text-xl">
        Build <span className="font-semibold text-indigo-600">topic-based learning packs</span>
      </p>

      <p className="mt-2 max-w-xl text-gray-500">
        Pick a topic, generate vocab, examples, Q&A, and a short dialogue — all CEFR-friendly (A1–B1).
      </p>

      <Link
        href="/topics"
        className="mt-8 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        🚀 Browse Topics →
      </Link>

      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent — Learn Smarter, Not Harder
      </footer>
    </main>
  );
}

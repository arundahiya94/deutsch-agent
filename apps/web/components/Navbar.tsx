"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500" />
          <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 bg-clip-text text-xl font-extrabold text-transparent">
            DeutschAgent
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="hover:underline" href="/topics">Topics</Link>
          <Link className="hover:underline" href="/practice">Practice</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

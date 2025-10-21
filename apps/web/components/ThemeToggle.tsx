"use client";

import { useEffect, useState } from "react";
import { logger } from "@lib/logger";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  // Initialize from localStorage / system
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved ? saved === "dark" : prefers;
      setDark(initial);
      document.documentElement.classList.toggle("dark", initial);
      logger.info("Theme init", { initial });
    } catch (e) {
      logger.warn("Theme init failed", { e: String(e) });
    }
  }, []);

  const toggle = () => {
    try {
      const next = !dark;
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      logger.info("Theme toggled", { dark: next });
    } catch (e) {
      logger.error("Theme toggle failed", { e: String(e) });
    }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-xl border px-3 py-1 text-sm backdrop-blur bg-white/60 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20"
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      {dark ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}

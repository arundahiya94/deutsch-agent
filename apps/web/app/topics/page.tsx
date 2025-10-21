"use client";

import { useEffect, useMemo, useState } from "react";
import { api } from "@lib/apiClient";
import { logger } from "@lib/logger";
import { TopicCard } from "@components/TopicCard";

const HUES = [
  "from-indigo-500 to-pink-500",
  "from-emerald-500 to-lime-500",
  "from-sky-500 to-cyan-400",
  "from-orange-500 to-rose-500",
  "from-fuchsia-500 to-violet-500"
];

const EMOJIS = ["🍽️","🏠","🍎","🧭","🛒","🚆","🏥","🎒","💼","🎉"];

export default function Topics() {
  const [topics, setTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get<{ topics: string[] }>("/topics/sample");
        setTopics(res.data.topics || []);
        logger.info("Loaded topics", { count: res.data.topics?.length ?? 0 });
      } catch (e: any) {
        const msg = e?.message ?? "Failed to load topics";
        setErr(msg);
        logger.error("Load topics failed", { msg });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(
    () => topics.filter(t => t.toLowerCase().includes(q.toLowerCase())),
    [topics, q]
  );

  return (
    <main className="space-y-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent">
          Choose a Topic
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          Explore curated themes and build a complete A1–B1 learning pack.
        </p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search topics…"
          className="w-full max-w-md rounded-xl border bg-white/80 dark:bg-slate-900/60 px-4 py-2 text-sm shadow-sm outline-none focus:ring-4 focus:ring-indigo-300"
        />
      </div>

      {err && (
        <div className="rounded border border-red-200 bg-red-50 p-4 text-sm dark:border-red-900/40 dark:bg-red-900/20">
          {err}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-white/60 dark:bg-white/10" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((t, i) => (
            <TopicCard
              key={t}
              title={t}
              emoji={EMOJIS[i % EMOJIS.length]}
              hue={HUES[i % HUES.length]}
            />
          ))}
          {filtered.length === 0 && (
            <div className="rounded-2xl border bg-white/70 dark:bg-white/5 p-6 text-center text-sm text-gray-500">
              No topics match “{q}”.
            </div>
          )}
        </div>
      )}
    </main>
  );
}

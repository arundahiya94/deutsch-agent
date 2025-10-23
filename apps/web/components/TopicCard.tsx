import Link from "next/link";

export function TopicCard({ title, emoji = "📚", hue = "from-indigo-500 to-pink-500" }: { title: string; emoji?: string; hue?: string }) {
  return (
    <Link
      href={`/topics/${encodeURIComponent(title)}`}
      className={`group relative block overflow-hidden rounded-2xl border bg-white/70 dark:bg-white/5 backdrop-blur p-[2px] transition hover:shadow-lg`}
    >
      <div className={`absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40 bg-gradient-to-r ${hue}`} />
      <div className="rounded-2xl border bg-white/80 dark:bg-slate-900/60 p-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{emoji}</span>
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Generate a learning pack →</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

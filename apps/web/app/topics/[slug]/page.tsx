"use client";

import { useMemo } from "react";
import { usePackGeneration } from "@lib/hooks/usePackGeneration";
import Loader from "@components/Loader";
import { Flashcard } from "@components/Flashcard";

export default function TopicDetail({ params }: { params: { slug: string } }) {
  const topic = useMemo(() => decodeURIComponent(params.slug), [params.slug]);
  const { loading, pack, error, generate, downloadCsv } = usePackGeneration(topic);

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">{topic}</h2>
        <div className="flex gap-2">
          <button
            onClick={generate}
            className="rounded bg-black px-3 py-2 text-white"
          >
            Generate Pack
          </button>
          <button
            onClick={downloadCsv}
            className="rounded border px-3 py-2"
          >
            Export CSV
          </button>
        </div>
      </div>

      {loading && <Loader label="Generating pack..." />}

      {error && (
        <div className="rounded border border-red-200 bg-red-50 p-4 text-sm">
          {error}
        </div>
      )}

      {pack && (
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Top Terms</h3>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {pack.terms?.map((t) => (
                <li key={t.lemma} className="rounded border bg-white p-3">
                  <div className="font-medium">
                    {t.lemma} <span className="text-xs text-gray-500">({t.pos})</span>
                  </div>
                  <div className="text-sm text-gray-600">{t.meaning}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Sample Flashcards</h3>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {pack.terms?.slice(0, 4).map((t) => (
                <Flashcard
                  key={t.lemma}
                  front={t.lemma}
                  back={`${t.meaning}${t.article ? ` | ${t.article}` : ""}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Dialogue</h3>
            <ul className="space-y-2">
              {pack.dialogue?.map(([speaker, line], idx) => (
                <li key={idx} className="rounded border bg-white p-3">
                  <strong>{speaker}:</strong> {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

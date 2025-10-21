"use client";

import { useState } from "react";

export function Flashcard({
  front,
  back
}: {
  front: string;
  back: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((v) => !v)}
      className="w-full rounded-xl border bg-white p-4 text-left shadow-sm transition hover:shadow"
      aria-label="Toggle flashcard"
    >
      <div className="text-sm text-gray-500">{flipped ? "Back" : "Front"}</div>
      <div className="mt-1 text-base font-medium">{flipped ? back : front}</div>
    </button>
  );
}

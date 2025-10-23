export type Term = {
  lemma: string;
  pos: "noun" | "verb" | "adj" | string;
  meaning: string;
  article?: "der" | "die" | "das" | "";
  plural?: string;
  conjugation?: Record<string, unknown>;
};

export type Example = { de: string; en: string };

export type Pack = {
  topic: string;
  terms: Term[];
  examples: Example[];
  qa: [string, string][];
  dialogue: [string, string][];
  assets?: Record<string, unknown>;
};

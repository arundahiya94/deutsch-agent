"use client";

import { useCallback, useState } from "react";
import { api } from "@lib/apiClient";
import { logger } from "@lib/logger";
import type { Pack } from "@lib/types";

export function usePackGeneration(topic: string) {
  const [loading, setLoading] = useState(false);
  const [pack, setPack] = useState<Pack | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      logger.info("Generating pack", { topic });
      const res = await api.post<Pack>("/packs/generate", null, { params: { topic } });
      setPack(res.data);
      logger.info("Pack generated", { topic, terms: res.data?.terms?.length ?? 0 });
    } catch (e: any) {
      const msg = e?.message ?? "Failed to generate pack";
      setError(msg);
      logger.error("Pack generation failed", { topic, msg });
    } finally {
      setLoading(false);
    }
  }, [topic]);

  const downloadCsv = useCallback(async () => {
    try {
      logger.info("Downloading CSV", { topic });
      const res = await api.post("/packs/export/csv", null, {
        params: { topic },
        responseType: "blob"
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${topic.replace(/\s+/g, "_")}.csv`;
      a.click();
      logger.info("CSV downloaded", { topic });
    } catch (e: any) {
      const msg = e?.message ?? "Failed to download CSV";
      setError(msg);
      logger.error("CSV download failed", { topic, msg });
    }
  }, [topic]);

  return { loading, pack, error, generate, downloadCsv };
}

import { logger } from "./logger";

export const config = (() => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    logger.warn("NEXT_PUBLIC_API_URL is not set. Falling back to http://localhost:8000");
  }
  return {
    API_URL: apiUrl ?? "http://localhost:8000"
  };
})();

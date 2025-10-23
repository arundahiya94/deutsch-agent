// Simple, safe client-side logger with levels + context.
// Avoids crashing SSR and adds timestamps for debugging.
type Level = "debug" | "info" | "warn" | "error";

function log(level: Level, msg: string, ctx?: Record<string, unknown>) {
  const payload = {
    level,
    msg,
    ts: new Date().toISOString(),
    ...(ctx || {})
  };
  try {
    // eslint-disable-next-line no-console
    console[level === "debug" ? "log" : level](payload);
  } catch {
    // Fallback to console.log if level not supported
    // eslint-disable-next-line no-console
    console.log(payload);
  }
}

export const logger = {
  debug: (msg: string, ctx?: Record<string, unknown>) => log("debug", msg, ctx),
  info: (msg: string, ctx?: Record<string, unknown>) => log("info", msg, ctx),
  warn: (msg: string, ctx?: Record<string, unknown>) => log("warn", msg, ctx),
  error: (msg: string, ctx?: Record<string, unknown>) => log("error", msg, ctx)
};

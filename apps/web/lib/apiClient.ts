"use client";

import axios from "axios";
import { config } from "./config";
import { logger } from "./logger";

export const api = axios.create({
  baseURL: config.API_URL,
  timeout: 15000
});

// Request interceptor with safe logging
api.interceptors.request.use(
  (req) => {
    logger.debug("HTTP request", { method: req.method, url: req.url });
    return req;
  },
  (err) => {
    logger.error("HTTP request error", { err: String(err) });
    return Promise.reject(err);
  }
);

// Response interceptor with error normalization
api.interceptors.response.use(
  (res) => {
    logger.debug("HTTP response", { url: res.config?.url, status: res.status });
    return res;
  },
  (err) => {
    const status = err?.response?.status ?? 0;
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Unknown network error";
    logger.error("HTTP response error", { status, message });
    return Promise.reject(new Error(message));
  }
);

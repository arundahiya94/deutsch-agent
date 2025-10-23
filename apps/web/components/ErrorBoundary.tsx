"use client";

import React from "react";
import { logger } from "@lib/logger";

type Props = { children: React.ReactNode; fallback?: React.ReactNode };

type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    logger.error("UI ErrorBoundary caught", { error: String(error), errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="rounded border border-red-200 bg-red-50 p-4 text-sm">
          Something went wrong. Please try again.
        </div>
      );
    }
    return this.props.children;
  }
}

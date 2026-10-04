"use client";

import * as React from "react";
import { listPublishedPrograms, type Program } from "@/lib/programs";

let cache: Promise<Program[]> | null = null;

export function invalidatePrograms() {
  cache = null;
}

export type ProgramsState =
  | { status: "loading"; programs: Program[] }
  | { status: "ready"; programs: Program[] }
  | { status: "error"; programs: Program[] };

export function usePublishedPrograms(): ProgramsState {
  const [state, setState] = React.useState<ProgramsState>({ status: "loading", programs: [] });

  React.useEffect(() => {
    let alive = true;
    cache ??= listPublishedPrograms();
    cache.then(
      (programs) => alive && setState({ status: "ready", programs }),
      () => {
        cache = null;
        if (alive) setState({ status: "error", programs: [] });
      }
    );
    return () => {
      alive = false;
    };
  }, []);

  return state;
}

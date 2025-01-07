"use client";

export function useSystemColorScheme(): null | "light" | "dark" {
    if (typeof window === "undefined") return null;

    const isLight: boolean =
        window.matchMedia("(prefers-color-scheme: light)").matches;

    if (isLight) return "light";

    return "dark";
}

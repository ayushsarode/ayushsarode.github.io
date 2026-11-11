"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    const btn = buttonRef.current;
    if (!btn || !document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the maximum radius needed to cover the entire viewport
    const maxRadius = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          pseudoElement: isDark ? "::view-transition-new(root)" : "::view-transition-old(root)",
        }
      );
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="page-tool relative"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="theme-sun" />
      <Moon className="theme-moon" />
    </button>
  );
}

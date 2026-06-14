"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const handleToggle = () => {
    const btn = buttonRef.current;
    if (!btn) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      return;
    }

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the maximum radius needed to cover the entire viewport
    const maxRadius = Math.ceil(
      Math.sqrt(
        Math.max(x, window.innerWidth - x) ** 2 +
        Math.max(y, window.innerHeight - y) ** 2
      )
    );

    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const newBg = newTheme === "dark" ? "#000000" : "#F4F0EB";

    // Create the expanding circle overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99998;
      pointer-events: none;
      background: ${newBg};
      clip-path: circle(0px at ${x}px ${y}px);
      transition: clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1);
    `;
    document.body.appendChild(overlay);

    // Trigger the expansion
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
    });

    // Switch the actual theme midway through the animation
    setTimeout(() => {
      setTheme(newTheme);
    }, 350);

    // Remove the overlay after animation completes
    setTimeout(() => {
      overlay.remove();
    }, 750);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-background text-foreground hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}

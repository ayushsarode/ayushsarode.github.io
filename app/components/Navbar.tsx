"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          AS<span className="text-foreground/50 dark:text-foreground/30">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 dark:text-foreground/50 hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="mailto:ayushsarode777@gmail.com"
              className="text-sm px-5 py-2 rounded-full border border-foreground/15 dark:border-foreground/10 text-foreground/80 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-foreground/10 dark:border-foreground/5 bg-background/95 backdrop-blur-md">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-foreground/70 dark:text-foreground/50 hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

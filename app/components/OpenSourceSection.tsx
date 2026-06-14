"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-14">
            Contributions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="card-glass p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-foreground/8 dark:bg-foreground/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-foreground/60 dark:text-foreground/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Orion</h3>
                <p className="text-sm text-foreground/65 dark:text-foreground/40 leading-relaxed">
                  A Linux desktop download manager built with Wails (Go framework),
                  Svelte, and Aria2c. Contributed UI improvements, download progress
                  tracking, pause/resume and cancel features, auto-start
                  functionality, and project setup documentation.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Go", "Wails", "Svelte", "Aria2c", "Linux"].map((t) => (
                    <span key={t} className="tag text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function EducationSection() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-14">
            Academic Background
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="card-glass p-7">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  BTech in Electronics and Telecommunications
                </h3>
                <p className="text-foreground/65 dark:text-foreground/40 text-sm mt-1">
                  G.H. Raisoni College of Engineering and Management
                </p>
                <p className="text-foreground/50 dark:text-foreground/25 text-xs mt-1">
                  Nagpur, Maharashtra, India
                </p>
              </div>
              <span className="text-xs text-foreground/55 dark:text-foreground/30 tracking-wide whitespace-nowrap mt-1 sm:mt-0">
                2023 — 2027
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

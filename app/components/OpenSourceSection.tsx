"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";
import GitHubContributions from "./GitHubContributions";

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
          <GitHubContributions />
        </ScrollReveal>


      </div>
    </section>
  );
}

"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Writings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-12">
            Blogs
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="p-8 rounded-2xl border border-foreground/[0.08] dark:border-foreground/[0.04] bg-foreground/[0.02] dark:bg-foreground/[0.01] flex items-center justify-center min-h-[200px] hover:border-foreground/15 dark:hover:border-foreground/10 transition-colors duration-300">
            <p className="text-foreground/60 dark:text-foreground/40 text-lg font-medium tracking-wide">
              Coming Soon...
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

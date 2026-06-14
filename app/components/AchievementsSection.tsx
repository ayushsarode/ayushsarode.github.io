"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-14">
            Recognition
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          <ScrollReveal delay={100}>
            <div className="card-glass p-7 h-full">
              <div className="w-10 h-10 rounded-xl bg-foreground/8 dark:bg-foreground/5 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-amber-400/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Hackathon Winner
              </h3>
              <p className="text-sm text-foreground/65 dark:text-foreground/40 leading-relaxed">
                Secured 1st Prize in CodeHunt for developing an AI-powered job
                platform leveraging a PDF parser with LangChain for ATS analysis,
                enabling role matching and feedback based on job descriptions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="card-glass p-7 h-full">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-blue-400/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Web Dev — GDSC GHRIETN
              </h3>
              <p className="text-sm text-foreground/65 dark:text-foreground/40 leading-relaxed">
                Contributed as a Web Developer at GDSC, submitting 6 PRs to enhance
                UI, responsiveness, and key sections like About and Footer.
                Collaborated with the community to improve the platform&apos;s user
                experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

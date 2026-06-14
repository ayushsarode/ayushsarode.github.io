"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-14">
            Work History
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative pl-8 border-l border-foreground/15 dark:border-foreground/8">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-foreground/60 -translate-x-[4.5px]" />

            <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Software Developer Intern
                </h3>
                <p className="text-foreground/65 dark:text-foreground/40 text-sm mt-0.5">
                  Exiroai · New Delhi (Remote)
                </p>
              </div>
              <span className="text-xs text-foreground/55 dark:text-foreground/30 tracking-wide whitespace-nowrap">
                Oct 2025 — Present
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "Integrated third-party Speech-to-Text and Text-to-Speech services (Sarvam AI and Google) enabling real-time voice transcription and audio generation for the platform.",
                "Implemented an audit logging system to capture critical system events and user actions, improving traceability, monitoring, and debugging capabilities.",
                "Developed a CI/CD pipeline to automatically build services, push container images to GitHub Container Registry (GHCR), and deploy application updates to AWS EC2.",
                "Provisioned and managed AWS infrastructure using Terraform, enabling infrastructure-as-code with automated plan, apply, and destroy workflows through the deployment pipeline.",
                "Designed and implemented black-box integration tests to validate service behavior across APIs and external integrations, ensuring end-to-end reliability of core workflows.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-foreground/70 dark:text-foreground/45 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 dark:bg-foreground/20 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

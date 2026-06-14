"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Python"],
  },
  {
    title: "Technologies & Frameworks",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "Gin",
      "Fiber",
      "REST API",
      "gRPC",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud",
      "Docker",
      "CI/CD",
      "Terraform",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "TailwindCSS", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-14">
            Tech Stack
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100}>
              <div>
                <h3 className="text-sm font-medium text-foreground/65 dark:text-foreground/40 mb-4 tracking-wide">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

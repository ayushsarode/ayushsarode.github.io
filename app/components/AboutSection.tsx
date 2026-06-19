"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const techs = [
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-12">
            Who I am
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-foreground/70 dark:text-foreground/50 text-lg leading-relaxed max-w-3xl">
            Software Engineer building scalable backend systems and microservices. Experienced with cloud infrastructure, containers, and automation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-14">
            <p className="text-xs tracking-[0.15em] uppercase text-foreground/50 dark:text-foreground/20 mb-6">
              Technologies I work with
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-foreground/[0.08] dark:border-foreground/[0.04] bg-foreground/[0.03] dark:bg-foreground/[0.015] hover:border-foreground/15 dark:hover:border-foreground/10 hover:bg-foreground/[0.06] dark:hover:bg-foreground/[0.04] transition-all duration-300"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <span className="text-[10px] text-foreground/70 dark:text-foreground/50 group-hover:text-foreground/100 dark:group-hover:text-foreground/90 transition-colors duration-300 tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

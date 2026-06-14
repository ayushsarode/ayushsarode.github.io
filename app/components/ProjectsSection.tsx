"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "VaultDocs",
    description:
      "Cloud Storage Platform with Go/Gin backend and Next.js frontend. Google OAuth, file uploads to GCS (50MB), folder management, JWT auth, file deduplication, and 2GB storage quotas with MongoDB.",
    tags: ["Go", "Gin", "Next.js", "Google Cloud Storage", "MongoDB", "OAuth"],
    link: "https://github.com/ayushsarode/VaultDocs",
  },
  {
    title: "orb",
    description:
      "A lightweight Git-inspired version control system with commit history, branching, diff management, and local repository handling.",
    tags: ["Go", "CLI", "Version Control", "File System"],
    link: "https://github.com/ayushsarode/orb",
  },
  {
    title: "minurl",
    description:
      "Full-stack URL shortener with React (Zustand + TypeScript) and Golang. QR code generation, click analytics, graphical trend representations. Containerized with Docker, deployed via Cloud Build to Cloud Run.",
    tags: ["Go", "React", "TypeScript", "Docker", "Cloud Run", "Zustand"],
    link: "https://github.com/ayushsarode/minurl",
  },
  {
    title: "Zenith",
    description:
      "Terminal-based chat application built in Go using gRPC, featuring real-time messaging and chat rooms through a command-line interface.",
    tags: ["Go", "gRPC", "CLI", "Real-time"],
    link: "https://github.com/ayushsarode/Zenith",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/30 mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground section-heading mb-14">
            Featured Work
          </h2>
        </ScrollReveal>

        <div className="grid gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-${project.title.toLowerCase()}`}
                className="block card-glass p-7 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-foreground/40 dark:text-foreground/20 group-hover:text-foreground/70 dark:group-hover:text-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
                <p className="text-sm text-foreground/65 dark:text-foreground/40 leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

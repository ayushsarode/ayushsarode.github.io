"use client";

import { useState } from "react";
import {
  CalendarClock,
  ChevronDown,
  Download,
  GitBranch,
  HardDrive,
  Link2,
  Terminal,
} from "lucide-react";
import type { Project, ProjectIcon } from "@/lib/content";

const icons: Record<ProjectIcon, typeof Terminal> = {
  scheduler: CalendarClock,
  storage: HardDrive,
  terminal: Terminal,
  git: GitBranch,
  link: Link2,
  download: Download,
};

export function ProjectList({
  items,
  expandable = false,
}: {
  items: Project[];
  expandable?: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ol className={expandable ? "rows tight" : "rows"}>
      {items.map((project) => {
        const Icon = icons[project.icon];
        const open = !expandable || openId === project.id;

        return (
          <li key={project.id} id={project.id} className="project">
            <div className="row row-center">
              <span className="tile" aria-hidden="true">
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <p className="what">
                <a
                  className="title"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                {expandable ? (
                  <button
                    type="button"
                    className="chev"
                    aria-expanded={open}
                    aria-label={`Details: ${project.name}`}
                    onClick={() =>
                      setOpenId((current) =>
                        current === project.id ? null : project.id
                      )
                    }
                  >
                    <ChevronDown size={16} strokeWidth={1.5} />
                  </button>
                ) : null}
              </p>
              <p className="when meta">{project.meta}</p>
            </div>
            {open ? <p className="note project-note">{project.summary}</p> : null}
          </li>
        );
      })}
    </ol>
  );
}

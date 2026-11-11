"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/content";

const logos: Record<string, { src: string; word?: boolean }> = {
  stackguard: { src: "/logos/stackguard.png" },
  exiroai: { src: "/logos/exiro.png", word: true },
};

export function ExperienceList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ol className="rows tight">
      {experience.map((job) => {
        const open = openId === job.id;
        const logo = logos[job.id];

        return (
          <li key={job.id} id={job.id} className="project">
            <div className="row">
              {logo ? (
                <span className="tile logo brand" aria-hidden="true">
                  <img
                    src={logo.src}
                    alt=""
                    width={28}
                    height={28}
                    className={logo.word ? "word" : undefined}
                  />
                </span>
              ) : (
                <span className="tile mark" aria-hidden="true">
                  {job.mark}
                </span>
              )}
              <div>
                <p className="what">
                  <button
                    type="button"
                    className="exp-hit"
                    aria-expanded={open}
                    aria-controls={`${job.id}-points`}
                    onClick={() =>
                      setOpenId((current) => (current === job.id ? null : job.id))
                    }
                  >
                    {job.company} <span>· {job.role}</span>
                    <ChevronDown className="chev keep" size={16} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </p>
                <p className="note">{job.place}</p>
              </div>
              <p className="when date">{job.dates}</p>
            </div>
            {open ? (
              <ul className="points exp-points" id={`${job.id}-points`}>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

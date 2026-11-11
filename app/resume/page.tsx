import type { Metadata } from "next";
import {
  achievement,
  experience,
  openSource,
  profile,
  projects,
  skills,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Ayush Sarodey, a Go engineer for infra and distributed system.",
};

export default function ResumePage() {
  return (
    <article className="resume">
      <header>
        <h1 className="home-name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lede">
          <a className="ilink" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {" · "}
          <a className="ilink" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a className="ilink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a className="ilink" href={profile.x} target="_blank" rel="noopener noreferrer">
            X
          </a>
          {" · "}
          {profile.location}
        </p>
      </header>

      <section className="block">
        <h2 className="home-h">
          <span>~/</span>summary
        </h2>
        <p className="note flush">{profile.summary}</p>
      </section>

      <section className="block">
        <h2 className="home-h">
          <span>~/</span>experience
        </h2>
        <div className="stack">
          {experience.map((job) => (
            <article key={job.id}>
              <div className="resume-head">
                <h3>
                  {job.company} <span>· {job.role}</span>
                </h3>
                <p className="when date">{job.dates}</p>
              </div>
              <p className="where">{job.place}</p>
              <ul className="points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="home-h">
          <span>~/</span>open-source
        </h2>
        <div className="stack">
          {openSource.map((item) => (
            <article key={item.id}>
              <div className="resume-head">
                <h3>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>{" "}
                  <span>· {item.area}</span>
                </h3>
                <p className="when meta">{item.merged} merged</p>
              </div>
              <p className="note">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="home-h">
          <span>~/</span>projects
        </h2>
        <div className="stack">
          {projects.map((project) => (
            <article key={project.id}>
              <div className="resume-head">
                <h3>
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p className="when meta">{project.meta}</p>
              </div>
              <p className="note">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="home-h">
          <span>~/</span>achievement
        </h2>
        <h3 className="what">
          {achievement.title} <span>· {achievement.detail}</span>
        </h3>
        <p className="note">{achievement.summary}</p>
      </section>

      <section className="block">
        <h2 className="home-h">
          <span>~/</span>skills
        </h2>
        <ul className="skill-lines">
          {skills.map((skill) => (
            <li key={skill.label}>
              <span>{skill.label}</span>
              {skill.value}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

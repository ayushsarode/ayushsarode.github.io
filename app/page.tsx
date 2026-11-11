import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { CopyButton } from "./components/CopyButton";
import { ExperienceList } from "./components/ExperienceList";
import { OssList } from "./components/OssList";
import { ProjectList } from "./components/ProjectList";
import { achievement, profile, projects } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="home">
      <header className="identity">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={64}
          height={64}
          priority
          className="portrait"
        />
        <div>
          <h1 className="home-name">{profile.name}</h1>
          <p className="role">{profile.role}</p>
        </div>
      </header>

      <p className="lede">{profile.summary}</p>

      <p className="lede">
        <a className="ilink" href={`mailto:${profile.email}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email me
        </a>
        <CopyButton value={profile.email} label="Copy email address" />
        , or find me on{" "}
        <a className="ilink" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        ,{" "}
        <a className="ilink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        and{" "}
        <a className="ilink" href={profile.x} target="_blank" rel="noopener noreferrer">
          X
        </a>
        . My{" "}
        <a className="ilink" href={profile.resume} target="_blank" rel="noopener noreferrer">
          résumé
        </a>{" "}
        has the rest.
      </p>

      <p className="lede">
        Elsewhere here: <Link href="/projects" className="ilink">projects</Link> and{" "}
        <Link href="/blogs" className="ilink">writing</Link>.
      </p>

      <div className="actions">
        <a className="cta" href={`mailto:${profile.email}`}>
          Email me
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
        <p className="status">
          <span className="dot" aria-hidden="true" />
          Open to work · {profile.location}
        </p>
      </div>

      <section className="block" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="home-h">
          <span>~/</span>experience
        </h2>
        <ExperienceList />
      </section>

      <section className="block" aria-labelledby="oss-heading">
        <h2 id="oss-heading" className="home-h">
          <span>~/</span>open-source
        </h2>
        <OssList />
      </section>

      <section className="block" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="home-h">
          <span>~/</span>projects
        </h2>
        <ProjectList items={featured} expandable />
        <Link href="/projects" className="more">
          All projects <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="block" aria-labelledby="recognition-heading">
        <h2 id="recognition-heading" className="home-h">
          <span>~/</span>recognition
        </h2>
        <ol className="rows">
          <li id={achievement.id} className="row">
            <span className="tile" aria-hidden="true">
              <Trophy size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="what">
                {achievement.title} <span>· {achievement.detail}</span>
              </p>
              <p className="note">{achievement.summary}</p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}

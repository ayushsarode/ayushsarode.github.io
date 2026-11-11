import type { Metadata } from "next";
import { ProjectList } from "../components/ProjectList";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Ayush Sarodey: schedulers, storage, chat and small tools, mostly in Go.",
};

export default function ProjectsPage() {
  return (
    <article>
      <h1 className="home-h">
        <span>~/</span>projects
      </h1>
      <p className="lede flush">
        Things I built to learn how a system actually behaves once it has to stay up.
      </p>
      <div className="follow">
        <ProjectList items={projects} />
      </div>
    </article>
  );
}

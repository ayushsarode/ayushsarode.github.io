import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { writings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes by Ayush Sarodey on deploying Go, system architecture, and JavaScript.",
};

export default function WritingPage() {
  return (
    <article>
      <h1 className="home-h">
        <span>~/</span>writing
      </h1>
      <ol className="rows">
        {writings.map((post) => (
          <li key={post.id} id={post.id}>
            <a
              className="row row-center oss writing"
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tile" aria-hidden="true">
                <FileText size={18} strokeWidth={1.5} />
              </span>
              <p className="what">
                {post.title} <span>· {post.venue}</span>
              </p>
              <span className="oss-end">
                <span className="when date">{post.date}</span>
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.75} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </article>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const home = pathname === "/";

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const meta = event.metaKey || event.ctrlKey;
      if (meta && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }
      if (event.key === "/" && !isTypingTarget(event.target)) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="page-bar">
        {home ? null : (
          <Link href="/" className="page-home">
            ← {profile.name}
          </Link>
        )}
        <div className="page-tools">
          <button
            type="button"
            className="page-tool"
            aria-label="Search"
            title="Search  ⌘K"
            onClick={() => setSearchOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main id="main" tabIndex={-1} className="sheet">
        {children}
      </main>

      <footer className="foot">
        <div className="foot-inner">
          <div className="foot-grid">
            <div>
              <p className="foot-name">{profile.name}</p>
              <p className="foot-blurb">
                {profile.role}, based in {profile.location}. Open to work.
              </p>
            </div>
            <nav className="foot-links" aria-label="Footer">
              <Link href="/projects">Projects</Link>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <Link href="/blogs">Writing</Link>
              <a href={profile.x} target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                Résumé
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </nav>
          </div>
          <p className="foot-meta">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>

      {searchOpen ? <SearchDialog onClose={() => setSearchOpen(false)} /> : null}
    </>
  );
}

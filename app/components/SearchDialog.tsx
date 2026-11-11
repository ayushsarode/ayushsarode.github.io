"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchEntries, type SearchEntry } from "@/lib/content";

export function SearchDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    const all = searchEntries();
    if (!q) return all;
    return all.filter((item) =>
      `${item.title} ${item.hint} ${item.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    document.getElementById(`search-item-${active}`)?.scrollIntoView({
      block: "nearest",
    });
  }, [active, entries.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const go = (item: SearchEntry) => {
    onClose();
    if (item.href.startsWith("/")) {
      router.push(item.href);
      return;
    }
    window.location.assign(item.href);
  };

  const groups: { name: string; items: { item: SearchEntry; index: number }[] }[] = [];
  entries.forEach((item, index) => {
    const last = groups[groups.length - 1];
    if (!last || last.name !== item.group) {
      groups.push({ name: item.group, items: [{ item, index }] });
    } else {
      last.items.push({ item, index });
    }
  });

  return (
    <div className="cmdk-backdrop" onMouseDown={onClose}>
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="cmdk-input-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActive((index) => Math.min(index + 1, Math.max(entries.length - 1, 0)));
              } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setActive((index) => Math.max(index - 1, 0));
              } else if (event.key === "Enter" && entries[active]) {
                event.preventDefault();
                go(entries[active]);
              }
            }}
            placeholder="Search projects, work, pages"
            aria-label="Search"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd>esc</kbd>
        </div>
        <div className="cmdk-list" role="listbox" aria-label="Results">
          {entries.length === 0 ? (
            <p className="cmdk-empty">Nothing matches.</p>
          ) : (
            groups.map((group) => (
              <div key={group.name}>
                <p className="cmdk-group">{group.name}</p>
                {group.items.map(({ item, index }) => (
                  <button
                    key={`${item.group}-${item.title}`}
                    id={`search-item-${index}`}
                    type="button"
                    role="option"
                    aria-selected={index === active}
                    className={index === active ? "cmdk-item is-active" : "cmdk-item"}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(item)}
                  >
                    <span>{item.title}</span>
                    <span>{item.hint}</span>
                  </button>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

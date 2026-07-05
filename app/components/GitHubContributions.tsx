"use client";
import React, { useEffect, useState, useMemo } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

const USERNAME = "ayushsarode";
const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const COLORS_LIGHT = [
  "rgba(5,5,5,0.06)",
  "rgba(22,163,74,0.25)",
  "rgba(22,163,74,0.45)",
  "rgba(22,163,74,0.65)",
  "rgba(22,163,74,0.9)",
];
const COLORS_DARK = [
  "rgba(255,255,255,0.04)",
  "rgba(74,222,128,0.15)",
  "rgba(74,222,128,0.35)",
  "rgba(74,222,128,0.55)",
  "rgba(74,222,128,0.8)",
];

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [hovered, setHovered] = useState<{
    day: ContributionDay;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: ContributionData) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const { weeks, monthLabels, total } = useMemo(() => {
    if (!data?.contributions?.length)
      return { weeks: [] as (ContributionDay | null)[][], monthLabels: [] as { label: string; col: number }[], total: 0 };

    const sorted = [...data.contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const weeks: (ContributionDay | null)[][] = [];
    const pad = new Date(sorted[0].date).getDay();
    let week: (ContributionDay | null)[] = Array(pad).fill(null);

    for (const day of sorted) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }

    const monthLabels: { label: string; col: number }[] = [];
    let last = -1;
    weeks.forEach((w, i) => {
      const d = w.find((x) => x !== null);
      if (d) {
        const m = new Date(d.date).getMonth();
        if (m !== last) {
          monthLabels.push({ label: MONTHS[m], col: i });
          last = m;
        }
      }
    });

    const total = data.total?.lastYear ?? Object.values(data.total).reduce((a, b) => a + b, 0);
    return { weeks, monthLabels, total };
  }, [data]);

  const colors = isDark ? COLORS_DARK : COLORS_LIGHT;
  const textColor = isDark ? "rgba(255,255,255,0.2)" : "rgba(5,5,5,0.35)";
  const DAY_LABELS_W = 28;

  if (loading) {
    return (
      <div className="card-glass p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-5 h-5 rounded bg-foreground/8 animate-pulse" />
          <div className="h-4 w-52 rounded bg-foreground/8 animate-pulse" />
        </div>
        <div className="h-[130px] rounded-lg bg-foreground/[0.03] animate-pulse" />
      </div>
    );
  }

  if (!data || !weeks.length) return null;

  const svgW = DAY_LABELS_W + weeks.length * STEP;
  const svgH = 7 * STEP + 18;

  return (
    <div className="card-glass p-7 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <svg
            className="w-[18px] h-[18px] text-foreground/50 dark:text-foreground/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-sm text-foreground/70 dark:text-foreground/45">
            <strong className="text-foreground/90 dark:text-foreground/70 font-semibold">
              {total.toLocaleString()}
            </strong>{" "}
            contributions in the last year
          </span>
        </div>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground/40 dark:text-foreground/20 hover:text-foreground/70 dark:hover:text-foreground/50 transition-colors duration-300"
        >
          @{USERNAME}
        </a>
      </div>

      {/* Graph */}
      <div className="overflow-x-auto pb-2">
        <svg width={svgW} height={svgH} className="block">
          {/* Month labels */}
          {monthLabels.map((m, i) => (
            <text
              key={i}
              x={DAY_LABELS_W + m.col * STEP}
              y={10}
              fontSize={10}
              fill={textColor}
            >
              {m.label}
            </text>
          ))}

          {/* Day labels */}
          {["Mon", "Wed", "Fri"].map((d, i) => (
            <text
              key={d}
              x={0}
              y={18 + (1 + i * 2) * STEP + CELL * 0.75}
              fontSize={10}
              fill={textColor}
            >
              {d}
            </text>
          ))}

          {/* Cells */}
          {weeks.map((week, wi) =>
            week.map((day, di) => {
              if (!day) return null;
              const x = DAY_LABELS_W + wi * STEP;
              const y = 18 + di * STEP;
              return (
                <rect
                  key={`${wi}-${di}`}
                  x={x}
                  y={y}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={colors[day.level]}
                  className="transition-opacity duration-150"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    const r = (e.target as SVGRectElement).getBoundingClientRect();
                    setHovered({ day, x: r.left + r.width / 2, y: r.top });
                  }}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })
          )}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-[10px] text-foreground/35 dark:text-foreground/15 mr-1">Less</span>
        {[0, 1, 2, 3, 4].map((lvl) => (
          <div
            key={lvl}
            className="rounded-[2px]"
            style={{ width: CELL, height: CELL, backgroundColor: colors[lvl] }}
          />
        ))}
        <span className="text-[10px] text-foreground/35 dark:text-foreground/15 ml-1">More</span>
      </div>

      {/* Tooltip */}
      {hovered && (
        <div
          className="fixed z-50 px-3 py-1.5 rounded-md bg-foreground text-background text-[11px] font-medium pointer-events-none whitespace-nowrap"
          style={{
            left: hovered.x,
            top: hovered.y - 10,
            transform: "translate(-50%, -100%)",
          }}
        >
          {hovered.day.count} contribution{hovered.day.count !== 1 ? "s" : ""} on{" "}
          {new Date(hovered.day.date + "T00:00:00").toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ── Kanji rain column ── */
const kanjiChars = "改善技術開発設計創造革新未来成長進化構築学習向上最適前進挑戦展開発見探求実装機能解析統合運用管理基盤制御変換生成処理応用研究";

interface ColumnData {
  x: number;
  speed: number;
  delay: number;
  opacity: number;
  chars: string[];
}

function KanjiColumn({ data }: { data: ColumnData }) {
  return (
    <motion.div
      className="absolute top-0 flex flex-col gap-1 pointer-events-none select-none font-mono"
      style={{ left: `${data.x}%`, fontSize: "14px" }}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "120vh", opacity: [0, data.opacity, data.opacity, 0] }}
      transition={{
        duration: data.speed,
        delay: data.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {data.chars.map((char, i) => (
        <span
          key={i}
          className="text-foreground/[0.07] dark:text-foreground/[0.05]"
          style={{
            opacity: i === data.chars.length - 1 ? 1 : 0.3 + (i / data.chars.length) * 0.7,
          }}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
}

/* ── Floating orb ── */
function FloatingOrb({ size, x, y, delay, color, duration }: { size: number; x: string; y: string; delay: number; color: string; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${size * 0.6}px)`,
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Animated counter ── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(timer);
  }, [target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ── Main Page ── */
export default function BlogsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [columns, setColumns] = useState<ColumnData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Generate all random data on mount only (client-side) */
  useEffect(() => {
    const cols: ColumnData[] = Array.from({ length: 18 }, (_, i) => ({
      x: (i / 18) * 100 + Math.random() * 4,
      speed: 10 + Math.random() * 15,
      delay: Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.25,
      chars: Array.from(
        { length: 12 + Math.floor(Math.random() * 8) },
        () => kanjiChars[Math.floor(Math.random() * kanjiChars.length)]
      ),
    }));
    setColumns(cols);
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="noise-bg relative z-10 min-h-screen flex flex-col" ref={containerRef}>
      <Navbar />

      {/* ── Background layer (only rendered client-side) ── */}
      {mounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {/* Floating ambient orbs */}
          <FloatingOrb size={300} x="10%" y="20%" delay={0} duration={15} color="rgba(120, 100, 80, 0.04)" />
          <FloatingOrb size={200} x="70%" y="60%" delay={2} duration={17} color="rgba(80, 100, 120, 0.03)" />
          <FloatingOrb size={250} x="50%" y="10%" delay={4} duration={14} color="rgba(100, 80, 100, 0.03)" />
          <FloatingOrb size={180} x="85%" y="35%" delay={1} duration={16} color="rgba(100, 120, 80, 0.03)" />

          {/* Kanji rain */}
          {columns.map((col, i) => (
            <KanjiColumn key={i} data={col} />
          ))}

          {/* Radial glow that follows mouse */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full transition-all duration-700 ease-out"
            style={{
              left: `calc(50% + ${mousePos.x * 200}px - 300px)`,
              top: `calc(50% + ${mousePos.y * 200}px - 300px)`,
              background: "radial-gradient(circle, rgba(120,100,80,0.06) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 relative">
        {/* Top label */}
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-foreground/40 dark:text-foreground/25 mb-8 block font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ブログ &nbsp;/&nbsp; Blog
        </motion.span>

        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight text-center"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Articles are
          <br />
          <span className="relative inline-block">
            on the way
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-foreground/50 dark:text-foreground/35 text-lg md:text-xl max-w-lg text-center mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Deep dives into backend systems, cloud infrastructure, and the art of building software that scales.
        </motion.p>

        {/* ── Stats row ── */}
        <motion.div
          className="flex items-center gap-8 sm:gap-12 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: "Articles planned", value: 12, suffix: "+" },
            { label: "Topics covered", value: 5, suffix: "" },
            { label: "Coming", value: 2026, suffix: "" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-foreground/40 dark:text-foreground/25 tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Topic pills ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {[
            "Go Internals",
            "System Design",
            "Docker & K8s",
            "CI/CD Pipelines",
            "Distributed Systems",
            "Cloud Architecture",
            "Performance",
            "Open Source",
          ].map((topic, i) => (
            <motion.span
              key={topic}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wide border border-foreground/[0.08] dark:border-foreground/[0.05] bg-foreground/[0.02] dark:bg-foreground/[0.01] text-foreground/50 dark:text-foreground/30 hover:border-foreground/20 dark:hover:border-foreground/10 hover:text-foreground/70 dark:hover:text-foreground/50 hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.03] transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.07 }}
              whileHover={{ scale: 1.05 }}
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>

        {/* ── CTA / Notify ── */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="mailto:ayushsarode777@gmail.com?subject=Notify me about new blog posts"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 dark:border-foreground/10 text-foreground/80 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get notified when I publish
            </span>
          </a>

          <span className="text-[10px] text-foreground/30 dark:text-foreground/15 tracking-widest uppercase">
            No spam — only articles
          </span>
        </motion.div>

        {/* ── Japanese decorative text ── */}
        <motion.div
          className="absolute bottom-8 right-8 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          <p className="text-foreground/[0.06] dark:text-foreground/[0.03] text-7xl font-bold tracking-tight select-none"
            style={{ writingMode: "vertical-rl" }}
          >
            記事準備中
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-8 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.8 }}
        >
          <p className="text-foreground/[0.06] dark:text-foreground/[0.03] text-7xl font-bold tracking-tight select-none"
            style={{ writingMode: "vertical-rl" }}
          >
            近日公開
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

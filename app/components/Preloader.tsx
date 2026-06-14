"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const targetText = "改善";
const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン開発設計創造革新未来技術成長進化構築学習向上最適前進挑戦展開発見探求実装";

export default function Preloader() {
  const [text, setText] = useState(targetText);
  const [phase, setPhase] = useState<"scramble" | "splitText" | "splitScreen" | "hide">("scramble");

  useEffect(() => {
    if (phase !== "hide") {
      document.body.style.overflow = "hidden";
    }
    
    if (phase === "scramble") {
      let iterations = 0;
      const maxIterations = 40; // 40 * 40ms = ~1.6 seconds of scramble
      
      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setText(targetText);
          setTimeout(() => setPhase("splitText"), 600);
        } else {
          // Generate random characters of the same length
          setText(
            targetText
              .split("")
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join("")
          );
          iterations++;
        }
      }, 40); // Ultra-fast paced letter scramble
      
      return () => clearInterval(interval);
    } else if (phase === "splitText") {
      setTimeout(() => setPhase("splitScreen"), 1500);
    } else if (phase === "splitScreen") {
      setTimeout(() => {
        setPhase("hide");
        document.body.style.overflow = "";
      }, 1000);
    }
  }, [phase]);

  if (phase === "hide") return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden">
      {/* Background - Circular Reveal */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ clipPath: "circle(150% at 50% 50%)" }}
        animate={{ 
          clipPath: phase === "splitScreen" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)"
        }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Scale/Zoom Container (No layout prop to avoid conflicts) */}
      <motion.div 
        className="relative z-10"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: phase === "splitScreen" ? [1, 1.1, 0] : 1,
          opacity: phase === "splitScreen" ? [1, 1, 0] : 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut", times: [0, 0.3, 1] }}
      >
        {/* Layout Shift Container */}
        <motion.div layout className="flex flex-col items-center justify-center font-mono">
          <motion.div layout className="h-20 flex items-center justify-center">
            <motion.span
              layout
              animate={{ opacity: phase === "splitScreen" ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-foreground text-4xl md:text-6xl tracking-[0.2em] font-bold whitespace-nowrap"
            >
              {text}
            </motion.span>
          </motion.div>

          {/* English Subtext */}
          {(phase === "splitText" || phase === "splitScreen") && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: phase === "splitScreen" ? 0 : 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="mt-4 text-foreground/50 text-sm md:text-base tracking-[0.3em] uppercase font-medium whitespace-nowrap"
            >
              Build <span className="mx-3 text-foreground/30">•</span> Learn <span className="mx-3 text-foreground/30">•</span> Improve
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";
import React, { useEffect, useRef } from "react";

interface SparklesProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
}

export default function SparklesBackground({
  className = "",
  particleCount = 80,
  particleColor = "#ffffff",
  minSize = 0.5,
  maxSize = 1.5,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    interface Particle {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      drift: number;
      fadeDir: number;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.15 + 0.02,
      drift: (Math.random() - 0.5) * 0.3,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        p.opacity += 0.003 * p.fadeDir;
        if (p.opacity <= 0.05 || p.opacity >= 0.7) p.fadeDir *= -1;
        if (p.y < -5) {
          p.y = h() + 5;
          p.x = Math.random() * w();
        }
        if (p.x < -5) p.x = w() + 5;
        if (p.x > w() + 5) p.x = -5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [particleCount, particleColor, minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background: "transparent" }}
    />
  );
}

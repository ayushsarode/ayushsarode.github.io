"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const listenersRef = useRef<{
    onMove?: (e: MouseEvent) => void;
    onDown?: (e: MouseEvent) => void;
    onUp?: (e: MouseEvent) => void;
  }>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDark = resolvedTheme === "dark";

    // Clean up previous listeners
    const prev = listenersRef.current;
    if (prev.onMove) window.removeEventListener("mousemove", prev.onMove);
    if (prev.onDown) window.removeEventListener("mousedown", prev.onDown);
    if (prev.onUp) window.removeEventListener("mouseup", prev.onUp);

    import("webgl-fluid").then((mod) => {
      const WebGLFluid = mod.default;

      WebGLFluid(canvas, {
        TRIGGER: "hover",
        IMMEDIATE: true,
        AUTO: false,
        SPLAT_COLOR: isDark
          ? { r: 0.1, g: 0.1, b: 0.2 } // Dark blue/indigo to contrast with white text
          : { r: 0.25, g: 0.2, b: 0.14 },
        COLORFUL: false,
        SPLAT_RADIUS: 0.3,
        SPLAT_FORCE: 6000,
        SPLAT_COUNT: 5,
        DENSITY_DISSIPATION: 6,
        VELOCITY_DISSIPATION: 2,
        PRESSURE: 0.6,
        CURL: 20,
        BACK_COLOR: isDark
          ? { r: 0, g: 0, b: 0 }
          : { r: 244, g: 240, b: 235 },
        TRANSPARENT: false,
        BLOOM: false,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.4,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_WEIGHT: 0.5,
        SHADING: false,
      });

      const forward = (type: string) => (e: MouseEvent) => {
        const synth = new MouseEvent(type, {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: false,
        });
        canvas.dispatchEvent(synth);
      };

      const onMove = forward("mousemove");
      const onDown = forward("mousedown");
      const onUp = forward("mouseup");

      listenersRef.current = { onMove, onDown, onUp };

      window.addEventListener("mousemove", onMove);
      window.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);
    });

    return () => {
      const cur = listenersRef.current;
      if (cur.onMove) window.removeEventListener("mousemove", cur.onMove);
      if (cur.onDown) window.removeEventListener("mousedown", cur.onDown);
      if (cur.onUp) window.removeEventListener("mouseup", cur.onUp);
    };
  }, [mounted, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}

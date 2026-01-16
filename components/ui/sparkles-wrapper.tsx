"use client";

import React from "react";
import { SparklesCore } from "./sparkles";

interface SparklesWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesWrapper: React.FC<SparklesWrapperProps> = ({
  children,
  className = "",
  background = "transparent",
  particleSize = 2,
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 100,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <SparklesCore
        background={background}
        minSize={minSize}
        maxSize={maxSize}
        speed={speed}
        particleColor={particleColor}
        particleDensity={particleDensity}
        className="absolute inset-0 w-full h-full"
        {...props}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

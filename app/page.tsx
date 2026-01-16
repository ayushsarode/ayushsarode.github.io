"use client";
import React, { useEffect, useRef } from 'react';

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

const SparklesCore: React.FC<SparklesCoreProps> = ({ 
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  className = "",
  particleColor = "#FFFFFF"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / canvas.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / canvas.height - 0.5) * 2
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    interface ParticleType {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      fadeDirection: number;
      parallaxFactor: number;
      update: () => void;
      draw: () => void;
    }

    const particles: ParticleType[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / particleDensity);

    const createParticle = (): ParticleType => {
      const baseX = Math.random() * canvas.width;
      const baseY = Math.random() * canvas.height;
      
      const particle = {
        x: baseX,
        y: baseY,
        baseX: baseX,
        baseY: baseY,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random(),
        fadeSpeed: Math.random() * 0.02 + 0.005,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
        parallaxFactor: Math.random() * 30 + 10,

        update() {
          this.baseX += this.speedX;
          this.baseY += this.speedY;

          if (this.baseX > canvas.width) this.baseX = 0;
          if (this.baseX < 0) this.baseX = canvas.width;
          if (this.baseY > canvas.height) this.baseY = 0;
          if (this.baseY < 0) this.baseY = canvas.height;

          // Apply parallax effect
          this.x = this.baseX + mouseRef.current.x * this.parallaxFactor;
          this.y = this.baseY + mouseRef.current.y * this.parallaxFactor;

          this.opacity += this.fadeSpeed * this.fadeDirection;
          if (this.opacity <= 0 || this.opacity >= 1) {
            this.fadeDirection *= -1;
          }
        },

        draw() {
          if (!ctx) return;
          ctx.fillStyle = particleColor;
          ctx.globalAlpha = this.opacity;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      return particle;
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background }}
    />
  );
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Ayush Sarodey
        </h1>
        
        <div className="relative w-full max-w-3xl mx-auto mb-6">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent absolute top-0" />
          <div className="h-[5px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm absolute top-0 left-1/4" />
          <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent absolute top-0 left-1/4" />
        </div>
        
        <p className="text-lg md:text-xl text-gray-400">
          Something amazing is on the way
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full bg-black pointer-events-none" style={{
        maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 70%)'
      }} />
    </div>
  );
}
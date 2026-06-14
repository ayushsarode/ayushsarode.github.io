"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Subtle top-right glow */}
      <div
        suppressHydrationWarning
        className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #fff 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Status */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-foreground/15 dark:border-foreground/8 bg-foreground/[0.04] dark:bg-foreground/[0.02] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            <span className="text-[11px] text-foreground/60 dark:text-foreground/40 tracking-[0.15em] uppercase font-medium">
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
            Ayush Sarodey
          </h1>

          {/* Role */}
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-foreground/40 tracking-wide font-medium">
            Software Engineer
          </p>

          {/* Divider */}
          <div className="my-8 mx-auto md:mx-0 w-12 h-px bg-foreground/20 dark:bg-foreground/10" />

          {/* Description */}
          <p className="text-sm sm:text-base text-foreground/70 dark:text-foreground/50 leading-relaxed max-w-lg mx-auto md:mx-0">
            Software Engineer building scalable backend systems and microservices. Experienced with cloud infrastructure, containers, and automation.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="mailto:ayushsarode777@gmail.com"
              className="px-6 py-2.5 rounded-full border border-foreground/20 dark:border-foreground/10 text-foreground/80 dark:text-foreground/60 text-sm hover:border-foreground/30 dark:hover:border-foreground/20 hover:text-foreground/90 transition-all duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="mt-12 flex justify-center md:justify-start gap-5">
            {[
              { label: "GitHub", href: "https://github.com/ayushsarode", d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
              { label: "LinkedIn", href: "https://linkedin.com/in/ayushsarodey", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { label: "X", href: "https://x.com/ayushsarode07", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group p-2.5 rounded-full border border-foreground/15 dark:border-foreground/10 hover:border-foreground/30 dark:hover:border-foreground/20 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-foreground/60 dark:text-foreground/40 group-hover:text-foreground/90 dark:group-hover:text-foreground/80 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-shrink-0 relative group">
          {/* Soft outer glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-emerald-400/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
          
          {/* Border wrapper with glass effect */}
          <div className="relative w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border border-foreground/10 dark:border-foreground/10 p-2 overflow-hidden backdrop-blur-xl bg-foreground/[0.03] dark:bg-foreground/[0.03] shadow-2xl transition-all duration-700 group-hover:border-foreground/20 dark:group-hover:border-foreground/20">
            {/* Inner mask */}
            <div className="w-full h-full rounded-full overflow-hidden relative bg-transparent">
              <Image
                src="/image5.png"
                alt="Ayush Sarodey"
                fill
                className="object-cover object-[center_top] scale-110 transition-transform duration-700 group-hover:scale-125"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-foreground/50 dark:from-foreground/40 to-transparent" />
      </div>
    </section>
  );
}

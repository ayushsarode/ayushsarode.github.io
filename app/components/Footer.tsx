import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-foreground/10 dark:border-foreground/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground opacity-70 dark:opacity-60">
          © {new Date().getFullYear()} Ayush Sarodey. All rights reserved.
        </p>
        <p className="text-sm text-foreground opacity-70 dark:opacity-60">
          Built with purpose by Ayush
        </p>
      </div>
    </footer>
  );
}

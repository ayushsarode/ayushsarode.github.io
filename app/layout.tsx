import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Sarodey",
  description:
    "Software developer experienced in building scalable web services and developer tools. Hands-on experience with cloud infrastructure, CI/CD pipelines, containerization, and infrastructure as code.",
  keywords: [
    "Ayush Sarodey",
    "Software Engineer",
    "Backend Engineer",
    "Go",
    "TypeScript",
    "Full Stack Developer",
    "Cloud",
    "DevOps",
  ],
  authors: [{ name: "Ayush Sarodey" }],
  openGraph: {
    title: "Ayush Sarodey",
    description:
      "Software developer experienced in building scalable web services and developer tools.",
    type: "website",
  },
};

import FluidCursor from "./components/FluidCursor";
import Preloader from "./components/Preloader";
import { ThemeProvider } from "./components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <FluidCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

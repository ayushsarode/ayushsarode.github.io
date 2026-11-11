import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { SiteShell } from "./components/SiteShell";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ayush Sarodey",
    template: "%s · Ayush Sarodey",
  },
  description:
    "Go engineer for infra and distributed system. Identity sync, notification pipelines, and infrastructure on AWS.",
  keywords: [
    "Ayush Sarodey",
    "Software Engineer",
    "Go",
    "Backend",
    "Distributed Systems",
    "AWS",
  ],
  authors: [{ name: "Ayush Sarodey" }],
  openGraph: {
    title: "Ayush Sarodey",
    description: "Go engineer for infra and distributed system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

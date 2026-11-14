export const profile = {
  name: "Ayush Sarodey",
  role: "Go engineer for infra and distributed system",
  email: "ayushsarode777@gmail.com",
  github: "https://github.com/ayushsarode",
  githubLabel: "github.com/ayushsarode",
  linkedin: "https://www.linkedin.com/in/ayushsarodey",
  linkedinLabel: "linkedin.com/in/ayushsarodey",
  x: "https://x.com/ayushsarode07",
  xLabel: "x.com/ayushsarode07",
  location: "India",
  photo: "/image2.png",
  resume:
    "https://drive.google.com/file/d/1AyK18eJLRO40fwnDvxqkALymHXUWY60M/view?usp=sharing",
  summary:
    "I write Go for backends and the infrastructure around them. I enjoy building APIs, working with distributed systems, and contributing to open source projects.",
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  place: string;
  mark: string;
  summary: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    id: "stackguard",
    company: "Stackguard",
    role: "Backend Engineer Intern",
    dates: "May 2026 – Jun 2026",
    place: "Singapore, remote",
    mark: "S",
    summary:
      "Employee directories in Go across Google Workspace, Microsoft 365, Okta and Zoho, with batched Postgres writes, departure detection, and alerts on email, Slack and Teams.",
    points: [
      "Built a multi-provider employee directory in Go for Google Workspace, Microsoft 365, Okta and Zoho, with paginated sync, batch PostgreSQL upserts and cron polling.",
      "Designed departure detection that finds offboarded and disabled accounts, sends alerts on email, Slack, Teams and in the app, and reassigns findings to the reporting manager.",
      "Built a multi-channel notification engine with per-organization preferences, delivery tracking and retries.",
    ],
  },
  {
    id: "exiroai",
    company: "Exiroai",
    role: "Software Developer Intern",
    dates: "Oct 2025 – Apr 2026",
    place: "Bengaluru, remote",
    mark: "E",
    summary:
      "Speech models from Sarvam and Google, audit logs, and a deploy path that builds images, pushes them to GHCR, and applies Terraform on AWS.",
    points: [
      "Integrated Sarvam AI and Google speech-to-text and text-to-speech for live voice on the platform.",
      "Added audit logs for critical system events and user actions.",
      "Built a CI/CD pipeline that builds services, pushes images to GitHub Container Registry and deploys them to AWS EC2.",
      "Provisioned AWS with Terraform, including plan, apply and destroy in the deploy pipeline.",
    ],
  },
];

export type OpenSource = {
  id: string;
  name: string;
  area: string;
  mark: string;
  merged: number;
  href: string;
  summary: string;
};

export const openSource: OpenSource[] = [
  {
    id: "temporal",
    name: "Temporal",
    area: "temporal-server · visibility",
    mark: "T",
    merged: 1,
    href: "https://github.com/temporalio/temporal/pulls?q=is%3Apr+state%3Aclosed+author%3Aayushsarode",
    summary:
      "A workflow engine. Application code runs as durable workflows, and a failed step continues from the last one that finished.",
  },
  {
    id: "antrea",
    name: "Antrea",
    area: "Kubernetes networking · agent",
    mark: "A",
    merged: 2,
    href: "https://github.com/antrea-io/antrea/pulls?q=is%3Apr+state%3Aclosed+author%3Aayushsarode",
    summary:
      "Kubernetes networking for pods. Traffic moves through Open vSwitch, and network policy is enforced on the node.",
  },
  {
    id: "pipecd",
    name: "PipeCD",
    area: "GitOps · datastore",
    mark: "P",
    merged: 1,
    href: "https://github.com/pipe-cd/pipecd/pulls?q=is%3Apr+state%3Aclosed+author%3Aayushsarode",
    summary:
      "GitOps continuous delivery. It watches Git and rolls out Kubernetes, Terraform, Cloud Run and other workloads.",
  },
];

export type ProjectIcon = "scheduler" | "storage" | "terminal" | "git" | "link" | "download";

export type Project = {
  id: string;
  name: string;
  meta: string;
  href: string;
  summary: string;
  icon: ProjectIcon;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "ai-inference-gateway",
    name: "Distributed AI inference gateway",
    meta: "Go · Distributed systems · AI",
    href: "https://github.com/ayushsarode/ai-inference-gateway",
    summary:
      "An OpenAI-compatible gateway that routes requests across vLLM and Ollama workers with load balancing, rate limiting, caching, batching, retries, circuit breakers and observability.",
    icon: "scheduler",
    featured: true,
  },
  {
    id: "scheduler",
    name: "Distributed job scheduler",
    meta: "Go · Distributed",
    href: "https://github.com/ayushsarode/distributed-job-scheduler",
    summary:
      "Job scheduling in Go on PostgreSQL, Redis, Kafka and gRPC, with leader election, worker heartbeats, retries, rate limits and event-driven execution.",
    icon: "scheduler",
    featured: true,
  },
  {
    id: "vaultdocs",
    name: "VaultDocs",
    meta: "Go · Storage",
    href: "https://github.com/ayushsarode/VaultDocs",
    summary:
      "Cloud storage with a Go/Gin API and a Next.js app. Google sign-in, uploads to Cloud Storage, deduplicated files and a 2GB quota in MongoDB.",
    icon: "storage",
    featured: true,
  },
  {
    id: "torrent-client",
    name: "torrent-client",
    meta: "Go · BitTorrent",
    href: "https://github.com/ayushsarode/torrent-client",
    summary:
      "A BitTorrent client in Go. It reads a .torrent file, asks the tracker for peers, and downloads pieces over the peer protocol.",
    icon: "download",
    featured: true,
  },
  {
    id: "orb",
    name: "orb",
    meta: "Go · CLI",
    href: "https://github.com/ayushsarode/orb",
    summary:
      "A small version-control tool in Go: commits, branches, diffs and a local repository.",
    icon: "git",
    featured: false,
  },
  {
    id: "minurl",
    name: "minurl",
    meta: "Go · Web",
    href: "https://github.com/ayushsarode/minurl-backend",
    summary:
      "URL shortener with a React client, QR codes and click charts. The API is Go, packaged with Docker and deployed to Cloud Run.",
    icon: "link",
    featured: false,
  },
];

export const achievement = {
  id: "codehunt",
  title: "CodeHunt",
  detail: "1st prize",
  summary:
    "Won 1st prize for an AI job platform that parsed resumes and matched them to a job description with LangChain.",
};

export type Writing = {
  id: string;
  title: string;
  venue: string;
  date: string;
  href: string;
};

export const writings: Writing[] = [
  {
    id: "gke",
    title: "Deploy Your Go App to GKE in 15 Minutes: A Developer's Guide",
    venue: "Medium",
    date: "Sep 2025",
    href: "https://medium.com/@ayushsarode777/deploy-your-go-app-to-gke-in-15-minutes-a-developers-guide-2ad8b0a023f2",
  },
  {
    id: "architecture",
    title: "Understanding Monolithic and Microservices Architecture",
    venue: "Medium",
    date: "Jul 2024",
    href: "https://medium.com/@ayushsarode777/understanding-monolithic-and-microservices-architecture-5470d04ce12f",
  },
  {
    id: "callbacks",
    title: "JavaScript Callback Functions Explained: A Beginner's Guide",
    venue: "DEV",
    date: "Oct 2023",
    href: "https://dev.to/ayushsarode/javascript-callback-functions-explained-a-beginners-guide-9ao",
  },
];

export const skills = [
  { label: "Languages", value: "Go, TypeScript, JavaScript" },
  {
    label: "Tools",
    value: "Next.js, React, Node.js, Express, Gin, Fiber, REST, gRPC, PostgreSQL, MongoDB",
  },
  {
    label: "Cloud",
    value: "AWS, Google Cloud, Docker, Terraform, GitHub Actions, Linux",
  },
];

export type SearchEntry = {
  group: "Pages" | "Work" | "Open source" | "Projects" | "Writing" | "Elsewhere";
  title: string;
  hint: string;
  href: string;
  keywords?: string;
};

export function searchEntries(): SearchEntry[] {
  return [
    { group: "Pages", title: "Home", hint: "Overview", href: "/" },
    { group: "Pages", title: "Projects", hint: "Selected work", href: "/projects" },
    { group: "Pages", title: "Writing", hint: "Published notes", href: "/blogs" },
    { group: "Pages", title: "Résumé", hint: "The longer version", href: profile.resume },
    ...experience.map((job) => ({
      group: "Work" as const,
      title: job.company,
      hint: job.role,
      href: `/#${job.id}`,
      keywords: `${job.summary} ${job.place}`,
    })),
    {
      group: "Work",
      title: achievement.title,
      hint: achievement.detail,
      href: `/#${achievement.id}`,
      keywords: achievement.summary,
    },
    ...openSource.map((item) => ({
      group: "Open source" as const,
      title: item.name,
      hint: `${item.merged} merged`,
      href: `/#${item.id}`,
      keywords: `${item.area} ${item.summary}`,
    })),
    ...projects.map((project) => ({
      group: "Projects" as const,
      title: project.name,
      hint: project.meta,
      href: `/projects#${project.id}`,
      keywords: project.summary,
    })),
    ...writings.map((post) => ({
      group: "Writing" as const,
      title: post.title,
      hint: post.venue,
      href: post.href,
      keywords: post.date,
    })),
    {
      group: "Elsewhere",
      title: "GitHub",
      hint: profile.githubLabel,
      href: profile.github,
    },
    {
      group: "Elsewhere",
      title: "LinkedIn",
      hint: profile.linkedinLabel,
      href: profile.linkedin,
    },
    { group: "Elsewhere", title: "X", hint: profile.xLabel, href: profile.x },
    {
      group: "Elsewhere",
      title: "Email",
      hint: profile.email,
      href: `mailto:${profile.email}`,
    },
  ];
}

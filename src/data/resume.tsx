import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { JavaScript } from "@/components/ui/svgs/javaScript";
import { ExpressJs } from "@/components/ui/svgs/expressJs";
import { NestJs } from "@/components/ui/svgs/nestJs";
import { Prisma } from "@/components/ui/svgs/prisma";
import { MongoDB } from "@/components/ui/svgs/mongoDB";
import { Redis } from "@/components/ui/svgs/redis";
import { Redux } from "@/components/ui/svgs/redux";
import { Git } from "@/components/ui/svgs/git";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Kafka } from "@/components/ui/svgs/kafka";
import { Prometheus } from "@/components/ui/svgs/prometheus";
import { Grafana } from "@/components/ui/svgs/grafana";
import { NewRelic } from "@/components/ui/svgs/newRelic";
import { DigitalOcean } from "@/components/ui/svgs/digitalOcean";
import { WebRTC } from "@/components/ui/svgs/webRTC";
import { Sst } from "@/components/ui/svgs/sst";
import { Aws } from "@/components/ui/svgs/aws";
import { Playwright } from "@/components/ui/svgs/playwright";
import { Grpc } from "@/components/ui/svgs/grpc";
import { GitHubActions } from "@/components/ui/svgs/githubActions";

export const DATA = {
  name: "Piyush Jha",
  initials: "PJ",
  url: "https://piyush-jha.vercel.app",
  location: "Remote, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Software Engineer. I love building things and helping people. Very active on Twitter. It's not who I am underneath, but what I do that defines me.",
  summary:
    "In 2025, I started my journey in software engineering, building everything from scratch. Through that process I learned a lot — and then realized AI can now do a lot of these things too. Now I'm more interested in AI and design, building AI products and high-level orchestrators that handle end-to-end automation.",
  avatarUrl: "/avatar.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: JavaScript },
    { name: "Express.js", icon: ExpressJs },
    { name: "Nest.js", icon: NestJs },
    { name: "Prisma", icon: Prisma },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },
    { name: "AWS", icon: Aws },
    { name: "Redux", icon: Redux },
    { name: "Git", icon: Git },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Docker Swarm", icon: Docker },
    { name: "Kafka", icon: Kafka },
    { name: "Prometheus", icon: Prometheus },
    { name: "Grafana", icon: Grafana },
    { name: "New Relic", icon: NewRelic },
    { name: "AWS ECR", icon: Aws },
    { name: "AWS ECS", icon: Aws },
    { name: "AWS S3", icon: Aws },
    { name: "SST", icon: Sst },
    { name: "Digital Ocean", icon: DigitalOcean },
    { name: "Playwright", icon: Playwright },
    { name: "gRPC", icon: Grpc },
    { name: "WebRTC", icon: WebRTC },
    { name: "CI/CD", icon: GitHubActions },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "piyushjha5668@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Piyush5784",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piyush-jha-a29619239",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Piyush5784",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:piyushjha5668@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Coyax AI",
      href: "",
      badges: [],
      location: "Remote",
      title: "Founding Full Stack Engineer",
      logoUrl: "/cl/coyax-logo.png",
      start: "Nov 2025",
      end: undefined,
      description:
        "Developed and optimized AI-powered automation platforms for sales and procurement workflows. Built document parsing pipelines and AI agents. Improved application performance, integrated LLM-based features, designed database architectures, and implemented production-ready APIs and workflows.",
    },
    {
      company: "100xdevs",
      href: "https://100xdevs.com",
      badges: [],
      location: "Remote",
      title: "Developer",
      logoUrl: "/cl/100xdevs.jpeg",
      start: "Aug 2025",
      end: undefined,
      description:
        "Completed Harkirat Singh's 100xdevs cohort, going from fundamentals to advanced full-stack development, DevOps, and system design. Built end-to-end projects including a Paytm-style wallet, a Zerodha clone, and a Zapier-style automation tool, working with monorepos and Turborepo for the first time. Covered advanced backend topics (message queues, Redis and Kafka, load balancing, sharding and replication, rate limiting, gRPC), advanced DevOps (Docker, Kubernetes, CI/CD, Prometheus and Grafana, AWS), and core system design concepts.",
    },
    {
      company: "Kryptonas Innovations",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/cl/KI.jpeg",
      start: "Jul 2023",
      end: "Dec 2024",
      description:
        "Migrated an existing JavaScript application to a fully typed TypeScript codebase within a Turborepo monorepo, improving maintainability and reducing runtime errors. Built application UIs using Tailwind CSS and shadcn/ui, and set up CI/CD pipelines to streamline deployments and testing workflows. Configured Redis caching to optimize platform performance and reduce response latency. Built APIs for new features using a TypeScript backend with PostgreSQL and ZenStack-generated hooks for streamlined CRUD operations.",
    },
    {
      company: "The Monkeys (open source organisation)",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/cl/the-monkeys.svg",
      start: "Oct 2024",
      end: "Oct 2024",
      description:
        "Actively contributed to The Monkeys organization, focusing on building and customizing components with Shadcn and Editor.js to create seamless, user-friendly experiences.",
    },
    {
      company: "MindSwap",
      href: "",
      badges: [],
      location: "Remote",
      title: "UI/UX Designer",
      logoUrl: "/cl/mindswap.jpeg",
      start: "Jun 2024",
      end: "Sep 2024",
      description:
        "Designed user interfaces and user experiences for the site, focusing on creating responsive components and mockups.",
    },
  ],
  education: [
    {
      school: "Guwahati University",
      href: "https://gauhati.ac.in",
      degree: "Bachelor in Computer Applications (BCA)",
      logoUrl: "/cl/gu.jpeg",
      start: "2022",
      end: "2025",
    },
    {
      school: "K C Das Commerce College",
      href: "https://en.bharatpedia.org/wiki/Gauhati_University",
      degree: "AHSEC (Higher Secondary)",
      logoUrl: "/cl/kcdcc.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Share Snippets + VS Code extension",
      href: "https://www.share-snippets.site",
      dates: "",
      active: true,
      description:
        "Share code snippets with anyone and import them into your editor, via the VS Code extension.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://www.share-snippets.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzf9kamfw/image/upload/v1764708285/Screenshot_from_2025-12-03_02-12-23_wp1ohu.png",
      video:
        "https://res.cloudinary.com/dzf9kamfw/video/upload/v1761135900/cursorful-video-1761135576571_kdidct.mp4",
    },
    {
      title: "Workflow Automation",
      href: "https://github.com/Piyush5784/n8n-clone-v0",
      dates: "",
      active: true,
      description:
        "An n8n-inspired workflow builder for sending emails, Telegram DMs, and AI-based automations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Tailwind CSS",
        "Node.js",
        "Kafka",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Piyush5784/n8n-clone-v0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzf9kamfw/image/upload/v1761979645/workflow_tfcgfy.png",
      video: "",
    },
    {
      title: "NextNotes",
      href: "https://nextnote-nextjs.netlify.app",
      dates: "",
      active: true,
      description:
        "A full-stack note-taking app with a rich text editor and secure auth, built using Editor.js.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Tailwind CSS",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://nextnote-nextjs.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Piyush5784/NextNotes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzf9kamfw/image/upload/v1785877523/Screenshot_from_2026-08-05_02-34-58_pwybau.png",
      video:
        "https://res.cloudinary.com/dzf9kamfw/video/upload/cursorful-video-1785877240997_qvl8ev.mp4",
    },
    {
      title: "Code Screensoft",
      href: "https://code-screensoft-generator.netlify.app",
      dates: "",
      active: true,
      description:
        "Generate beautiful, shareable code screenshots with custom themes, backgrounds, and padding.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://code-screensoft-generator.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/screensoft.png",
      video: "",
    },
    {
      title: "App Builder",
      href: "",
      dates: "Under Development",
      active: false,
      description:
        "An AI-powered app builder that plans, writes, and runs code in a sandbox, with live preview.",
      technologies: [
        "React",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Bun",
        "Turborepo",
        "Tailwind CSS",
      ],
      links: [],
      image:
        "https://res.cloudinary.com/dzf9kamfw/image/upload/v1785879514/Screenshot_from_2026-08-05_03-08-03_tuhbn0.png",
      video:
        "https://res.cloudinary.com/dzf9kamfw/video/upload/Screencast_from_2026-08-05_03-08-45_wikklw.mp4",
    },
    {
      title: "CLI Coding Terminal",
      href: "",
      dates: "Under Development",
      active: false,
      description:
        "A terminal-native coding tool that reads, edits, and runs code through natural conversation.",
      technologies: ["Node.js", "TypeScript"],
      links: [],
      image:
        "https://cdn.terminaltrove.com/m/d93d14de-cad1-4620-b828-08b9f255bd6e.gif",
      video: "",
    },
  ],
} as const;

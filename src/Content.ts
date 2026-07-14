import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ContentType } from "./types";

export const Content: ContentType = {
  name: "Piyush Jha",
  introText:
    "It's not who I am underneath, but what I do that defines me",
  freelanceExp:
    "Coding, debugging, optimizing, improving — any sort of task I've worked on. What I like is making the product as perfect as possible, whether it's frontend, backend, or DevOps — that's why we're called software engineers",
  Resume: {
    show: false,
    href: "",
  },

  socialLinks: [
    {
      icon: FaGithub,
      size: 18,
      href: "https://github.com/Piyush5784",
    },
    {
      icon: FaTwitter,
      size: 18,
      href: "https://x.com/Piyush5784",
    },
    {
      icon: FaLinkedin,
      size: 18,
      href: "https://www.linkedin.com/in/piyush-jha-a29619239",
    },
    {
      icon: MdOutlineMailOutline,
      size: 20,
      href: "mailto:piyushjha5668@gmail.com",
    },
  ],

  skills: [
    "Reactjs",
    "Nextjs",
    "Javascript",
    "Typescript",
    "Prisma",
    "Nodejs",
    "Expressjs",
    "Nestjs",
    "PostgreSQL",
    "MongoDb",
    "Docker",
    "Java",
    "Nginx",
    "AWS",
    "CI/CD",
    "EC2",
    "Redux",
  ],

  technicalSkills: [
    {
      category: "Languages",
      items: "JavaScript, TypeScript, Java, C, C++",
    },
    {
      category: "Frontend",
      items:
        "React, Next.js, TailwindCSS, Headless UI, ShadCN UI, Framer Motion, Redux, Recoil, Zustand, Context API, Tanstack Query, React Hook Form, Jest",
    },
    {
      category: "Backend",
      items: "Node.js, Express.js, Nest.js, Hono.js, Kafka",
    },
    {
      category: "Databases",
      items: "PostgreSQL, MongoDB, Redis, DynamoDB",
    },
    {
      category: "Runtime",
      items: "Node.js, Bun, Deno, Edge runtime (Vercel)",
    },
    {
      category: "Cloud & DevOps",
      items: "AWS (EC2, VPC, RDS, S3), Docker, CI/CD, Git",
    },
    {
      category: "Tools",
      items: "Figma, Postman, Handbrake, FFMPEG",
    },
  ],

  sections: ["PR's", "blogs", "experiences", "projects"],
  designs: [
    {
      title: "Nike-AirMax",
      liveLink:
        "https://www.figma.com/design/NeJw7C6aSE79kXdxn8xGGd/Untitled?node-id=0-1&t=TEUNJ8zYSpGOk0sR-1",
    },
    {
      title: "MindSwap",
      liveLink:
        "https://www.figma.com/design/S9PBEDZ6l7mkTPvxLw7svN/MindSwap?node-id=1-363&t=VqEGzIYiGCw6jifJ-1",
    },
    {
      title: "Gym web-app",
      liveLink:
        "https://www.figma.com/design/g8WJAAxPgwat7UdkfNbdqu/Untitled?node-id=0-1&t=YAe4dZAueiD3SnwP-1",
    },
  ],
  projects: [
    {
      name: "Share Snippets + VS code extension",
      description:
        "Share pieces of your code with anyone and import them via a VS Code extension",
      skills: ["Nextjs", "Typescript", "Prisma", "Tailwind"],
      liveSrc: "https://www.share-snippets.site",
      // sourceSrc: "https://github.com/Piyush5784/startup-validater",
    },
    {
      name: "Workflow Automation ",
      description:
        "Building some features of n8n, like sending emails, Telegram messages, and AI-based automations.",
      skills: ["Nextjs", "Typescript", "Prisma", "Tailwind", "Nodejs", "Kafka"],

      sourceSrc: "https://github.com/Piyush5784/n8n-clone-v0",
    },
    {
      name: "NextNotes",
      description:
        "NextNotes is a full-stack note-taking app with a rich text editor, Editor.js.",
      skills: [
        "Nextjs",
        "Typescript",
        "PostgreSQL",
        "Tailwind",
        // "Acernity",
        "Next Auth",
      ],
      liveSrc: "https://nextnote-nextjs.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/NextNotes",
    },
    {
      name: "Code - screensoft",
      description:
        "Generate coding screensoft easily with custom themes and padding.",
      skills: ["Nextjs", "Typescript", "Tailwind"],
      liveSrc: "https://code-screensoft-generator.netlify.app",
    },
    // {
    //   name: "Plantify",
    //   description:
    //     "Plantify is a plant-selling application where people can buy their favorite plants.",
    //   skills: ["Nextjs", "Redux Toolkit", "Tailwind", "Shadcn ui", "Next Auth"],
    //   liveSrc: "https://plantify-site-7584.netlify.app",
    //   sourceSrc: "https://github.com/Piyush5784/Plantify",
    // },
    // {
    //   name: "Medium-blog",
    //   description:
    //     "A blog website that aims to be simpler than Medium, where people can manage blogs.",
    //   skills: [
    //     "Reactjs",
    //     "Typescript",
    //     "Tailwind",
    //     "Rest API",
    //     "Hono",
    //     "Cloudflare",
    //   ],
    //   liveSrc: "https://medium-blog-dh6d.vercel.app",
    //   sourceSrc: "https://github.com/Piyush5784/Medium-blog",
    // },
    // {
      // name: "Startup-validater",
      // description:
        // "Share your project ideas with the world, and get your feedback by peoples",
      // skills: ["Nextjs", "Typescript", "Supabase", "Tailwind", "PostgreSQL"],
      // liveSrc: "https://startup-validater.vercel.app",
      // sourceSrc: "https://github.com/Piyush5784/startup-validater",
    // },

    // {
    //   name: "Task-gen - (UD)",
    //   description:
    //     "A project management tool to manage organisations, projects, and tasks.",
    //   skills: [
    //     "Nextjs",
    //     "Typescript",
    //     "MongoDb",
    //     "Tailwind",
    //     "Acernity",
    //     "Next Auth",
    //   ],
    //   // liveSrc: "https://task-gen.netlify.app",
    //   sourceSrc: "https://github.com/Piyush5784/TaskGen",
    // },

    // {
    //   name: "Typing-test",
    //   description:
    //     "Simple typing test site where users can check their typing speed by writing a quote or paragraph.",
    //   skills: ["HTML5", "CSS3", "Javascript"],
    //   liveSrc: "https://typing-test-site.pages.dev",
    //   sourceSrc: "https://github.com/Piyush5784/Typing-test",
    // },
    // {
    //   name: "Gemini-chatBot",
    //   description:
    //     "Gemini-ChatBot is a web app that takes images and text and generates responses.",
    //   skills: ["Reactjs", "Typescript", "Tailwind", "Rest API"],
    //   liveSrc: "https://gemini-pro-latest.netlify.app",
    //   sourceSrc: "https://github.com/Piyush5784/Gemini-Pro",
    // },

    // {
    //   name: "Shopping-Cart",
    //   description:
    //     "A shopping cart feature built for handling cart items and favorite items.",
    //   skills: ["Reactjs", "Typescript", "CSS", "Redux-toolkit"],
    //   liveSrc: "https://shoping-cart-redux-vert.vercel.app",
    //   sourceSrc: "https://github.com/Piyush5784/shopingCart-redux",
    // },
    // {
      // name: "Gymer",
      // description: "Gym site for managing membership was my first projects.",
      // skills: ["Reactjs", "Javascript", "Tailwind", "Razorpay"],
      // liveSrc: "https://gymer-version2-nbbn.vercel.app",
      // sourceSrc: "https://github.com/Piyush5784/GYMER-version2",
    // },
  ],
  blogs: [
    {
      title: "Most important commands for Docker management",
      content: "",
      href: "https://img-docker-commands.hashnode.dev/top-important-commands-for-docker-management",
    },
  ],
  landingPage: [
    {
      name: "Sass-t",
      description: "A SaaS website template with an initial landing page",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://next-template-rosy.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/next-template",
    },
    {
      name: "Sass-t(UD)",
      description:
        "A SaaS landing page with an initial page including authentication using NextAuth.",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://nextjs-template-three-phi.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/nextjs-template",
    },
    {
      name: "DSA-hub(UD)",
      description:
        "This platform contains a comprehensive list of DSA sheets all in one place.",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://dsa-hub-peach.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/DSA-hub",
    },
    {
      name: "Portfolio",
      description:
        "A portfolio for showcasing projects, built for every developer's needs",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://piyush.tech",
      sourceSrc: "https://github.com/Piyush5784/Piyush-portfolio",
    },
    {
      name: "Jis",
      description:
        "Jain Interior Solution is a business in my hometown that designs interiors for homes.",
      skills: ["Reactjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://jis-home-578434.vercel.app/",
      sourceSrc: "https://github.com/Piyush5784/JisHome",
    },
    {
      name: "Furniro",
      description:
        "Furniro is a furniture-selling application that sells furniture for homes and offices.",
      skills: ["Reactjs", "Typescript", "Vanilla CSS", "SCSS"],
      liveSrc: "https://furniro-sable.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/Furniro",
    },
  ],

  experiences: [
    {
      companyName: "Coyax AI",
      description:
        "Developed and optimized AI-powered automation platforms for sales and procurement workflows. Built document parsing pipelines, AI agents. Improved application performance, integrated LLM-based features, designed database architectures, and implemented production-ready APIs and workflows.",
      position: "Founding Full Stack Engineer",
      skillsIncluded: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "BullMQ",
        "AWS",
        "LLM Integration",
        "AI Agents",
        "GIT",
      ],
      location: "Remote",
      Date: "Nov 2025 - Present",
    },
    {
      companyName: "Clinix Sphere",
      description:
        "Developed responsive pages using React and Tailwind CSS, built and optimized APIs, and fixed platform issues to enhance performance. Also generated structured content to improve usability and engagement.",
      position: "Full Stack Developer",
      skillsIncluded: [
        "ReactJS",
        "Typescript",
        "Tailwind CSS",
        "Nodejs",
        "Expressjs",
        "GIT",
      ],
      location: "Remote",
      Date: "Feb 2025 - Apr 2024",
    },
    {
      companyName: "Maili Enterprise",
      description:
        "Contract-based work for the company, where I was responsible for building the frontend, backend, and testing of the site using ReactJS and Tailwind CSS.",
      position: "Full Stack Developer",
      skillsIncluded: [
        "ReactJS",
        "Material UI",
        "Typescript",
        "Tailwind CSS",
        "Nodejs",
        "Expressjs",
      ],
      location: "Remote",
      Date: "Oct 2024 - Dec 2024",
    },
    {
      companyName: "The Monkeys (open source organisation)",
      description:
        "Actively contributing to The Monkeys organization, focusing on building and customizing components with Shadcn and Editor.js to create seamless, user-friendly experiences.",
      position: "Frontend Developer",
      skillsIncluded: ["Nextjs", "Shadcn", "Typescript", "Editorjs"],
      location: "Remote",
      Date: "Oct 2024 ",
    },
    {
      companyName: "Clamio",
      description:
        "Developed the scalable backend of the site in Nestjs, including authentication, authorization, and payment gateway. Used DynamoDB as a database and AWS for deployment.",
      position: "Backend Developer Intern",
      skillsIncluded: ["Nestjs", "Dynamodb", "Razorpay", "RBAC"],
      location: "Assam, Ghy",
      Date: "July 2024 - Nov 2024",
    },
    {
      companyName: "MindSwap",
      description:
        "Designed user interfaces and user experiences for the site, focusing on creating responsive components and mockups.",
      position: "UI/UX Designer",
      skillsIncluded: ["Figma", "Testing", "Responsive Components", "Mockups"],
      location: "Remote",
      Date: "June 2024 - Sep 2024",
    },
  ],
  education: [
    {
      courseName: "Bachelor in Computer Applications",
      universityName: "Guwahati University",
      years: "2022-2025",
    },
    {
      courseName: "AHSEC (High School)",
      universityName: "K C Das Commerce College",
      years: "2020-2022",
    },
  ],
  PRS: [
   
  ],
};



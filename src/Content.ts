import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ContentType } from "./types";

export const Content: ContentType = {
  name: "Piyush Jha",
  introText:
    "Hey 👋 I'm Piyush, a passionate full-stack developer focused on building optimized, scalable solutions.",
  freelanceExp:
    "What I like is to make the product as optimized and perfect as possible ",
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
      items: "PostgreSQL, MongoDB, Redis, Dynammo DB",
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
      name: "share-snippets (UD)",
      description:
        "Share your pieces of codes, to anyone and import it via vs-extensions",
      skills: ["Nextjs", "Typescript", "Prisma", "Tailwind"],
      liveSrc: "https://www.share-snippets.site",
      // sourceSrc: "https://github.com/Piyush5784/startup-validater",
    },
    {
      name: "Workflow Automation ",
      description:
        "Building some features of n8n, like sending an email including await, telegram, some ai things,",
      skills: ["Nextjs", "Typescript", "Prisma", "Tailwind", "Nodejs", "Kafka"],

      sourceSrc: "https://github.com/Piyush5784/n8n-clone-v0",
    },
    {
      name: "NextNotes",
      description:
        "NextNotes is a full stack note-taking app with rich text editor Editorjs.",
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
    {
      name: "Plantify",
      description:
        " Plantify is an plants selling application where people can buy favorite plants",
      skills: ["Nextjs", "Redux Toolkit", "Tailwind", "Shadcn ui", "Next Auth"],
      liveSrc: "https://plantify-site-7584.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/Plantify",
    },
    {
      name: "Medium-blog",
      description:
        "A blog website tried to make it simpler to Medium, where people can manage blogs.",
      skills: [
        "Reactjs",
        "Typescript",
        "Tailwind",
        "Rest API",
        "Hono",
        "Cloudflare",
      ],
      liveSrc: "https://medium-blog-dh6d.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/Medium-blog",
    },
    {
      name: "Startup-validater",
      description:
        "Share your project ideas with the world, and get your feedback by peoples",
      skills: ["Nextjs", "Typescript", "Supabase", "Tailwind", "PostgreSQL"],
      // liveSrc: "https://startup-validater.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/startup-validater",
    },

    {
      name: "Task-gen - (UD)",
      description:
        "A project management tool to manage organisations, projects and tasks.",
      skills: [
        "Nextjs",
        "Typescript",
        "MongoDb",
        "Tailwind",
        "Acernity",
        "Next Auth",
      ],
      // liveSrc: "https://task-gen.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/TaskGen",
    },

    {
      name: "Typing-test",
      description:
        "Simple typing test site where users can check their typing speed by writing a quote or paragraph.",
      skills: ["HTML5", "CSS3", "Javascript"],
      liveSrc: "https://typing-test-site.pages.dev",
      sourceSrc: "https://github.com/Piyush5784/Typing-test",
    },
    {
      name: "Gemini-chatBot",
      description:
        "Gemini-chatBot is a web app which takes pictures and text and generate responses",
      skills: ["Reactjs", "Typescript", "Tailwind", "Rest API"],
      liveSrc: "https://gemini-pro-latest.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/Gemini-Pro",
    },

    {
      name: "Shopping-Cart",
      description:
        "A shopping cart features built for handling Cartitems, favorites items.",
      skills: ["Reactjs", "Typescript", "CSS", "Redux-toolkit"],
      liveSrc: "https://shoping-cart-redux-vert.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/shopingCart-redux",
    },
    {
      name: "Gymer",
      description: "Gym site for managing membership was my first projects.",
      skills: ["Reactjs", "Javascript", "Tailwind", "Razorpay"],
      // liveSrc: "https://gymer-version2-nbbn.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/GYMER-version2",
    },
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
      description: "A sass website template with initial landing page",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://next-template-rosy.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/next-template",
    },
    {
      name: "Sass-t(UD)",
      description:
        "A sass landing page with initial page including authenctication using next-auth.",
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
        "A portfolio for showcasing projects for every developer needs",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://piyush.tech",
      sourceSrc: "https://github.com/Piyush5784/Piyush-portfolio",
    },
    {
      name: "Jis",
      description:
        "Jain interior solution is a business in my hometown, which designs interiors for the homes.",
      skills: ["Reactjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://jis-home-578434.vercel.app/",
      sourceSrc: "https://github.com/Piyush5784/JisHome",
    },
    {
      name: "Furniro",
      description:
        "Furniro is a furniture selling application which sells furnitures for home and offices.",
      skills: ["Reactjs", "Typescript", "Vanilla CSS", "SCSS"],
      liveSrc: "https://furniro-sable.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/Furniro",
    },
  ],

  experiences: [
    {
      companyName: "Clinix Sphere",
      description:
        " Developing responsive pages using React and Tailwind CSS, build and optimize APIs, and fix platform issues to enhance performance. I also generate structured content to improve usability and engagement.",
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
        " Contract based work for the company, where I was responsible for building the frontend, backend and testing of the site using ReactJs and Tailwind CSS",
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
        " Actively contributing to the monkeys organization, where focusing on the building and customizing components with shadcn and Editor.js for creating seamlessa and user friendly experiences",
      position: "Frontend Developer",
      skillsIncluded: ["Nextjs", "Shadcn", "Typescript", "Editorjs"],
      location: "Remote",
      Date: "Oct 2024 ",
    },
    {
      companyName: "Clamio",
      description:
        "Developed the scalable backend of the site in Nestjs including authentication, authorization, payment gateway. Used dynamoDb as a database and AWS for deployment",
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
      courseName: "Bachlor in Computer Applications",
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
    {
      name: "Added a dynamic news page",
      liveSrc: "https://github.com/the-monkeys/the_monkeys/pull/214",
      merged: true,
    },
    {
      name: "Added Topics Component",
      merged: true,
      liveSrc: "https://github.com/the-monkeys/the_monkeys/pull/215",
    },
    {
      name: "Added Blog Page",
      liveSrc: "https://github.com/the-monkeys/the_monkeys/pull/216",
    },
    {
      name: "Made a dynamic date-of-birth selector using shadcn-ui",
      liveSrc: "https://github.com/the-monkeys/the_monkeys/pull/220",
    },
    {
      name: "Added a topics dialog had thousand of topics with selector",
      liveSrc: "https://github.com/the-monkeys/the_monkeys/pull/227",
    },
  ],
};

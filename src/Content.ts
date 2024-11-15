import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ContentType } from "./types";

export const Content: ContentType = {
  name: "Piyush Jha",
  introText:
    "Hey 👋 Piyush here! a computer science student born and raised in Assam. I have a strong passion for full stack development and enjoy working with the latest technology stacks to build innovative websites. ",
  Resume: { show: false, href: "" },
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
    "Typescript",
    "Prisma",
    "Nestjs",
    "PostgreSQL",
    "MongoDb",
    "Docker",
    "Java",
    "Redux",
  ],

  projects: [
    {
      name: "NextNotes",
      description:
        "NextNotes is a full stack note-taking app with rich text editor Editorjs",
      skills: [
        "Nextjs",
        "Typescript",
        "PostgreSQL",
        "Tailwind",
        "Acernity",
        "Next Auth",
      ],
      liveSrc: "https://nextnote-nextjs.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/NextNotes",
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
      name: "Gemini-chatBot",
      description:
        "Gemini-chatBot is a web app which takes pictures and text and generate responses",
      skills: ["Reactjs", "Typescript", "Tailwind", "Rest API"],
      liveSrc: "https://gemini-pro-latest.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/Gemini-Pro",
    },
    {
      name: "Medium-blog",
      description:
        "A blog website tried to make it simpler to Medium, where people can manage blogs",
      skills: [
        "Reactjs",
        "Typescript",
        "Tailwind",
        "Rest API",
        "Hono",
        "Cloudflare",
      ],
      liveSrc: "https://gemini-pro-latest.netlify.app",
      sourceSrc: "https://github.com/Piyush5784/Gemini-Pro",
    },
  ],
  landingPage: [
    {
      name: "Sass-t(UD)",
      description:
        "A sass landing page with initial page including authenctication using next-auth",
      skills: ["Nextjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://nextjs-template-three-phi.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/nextjs-template",
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
        "Jain interior solution is a business in my hometown, which designs interiors for the homes",
      skills: ["Reactjs", "Typescript", "Tailwind", "Framer-motion"],
      liveSrc: "https://jaininteriorsolution.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/JisHome",
    },
    {
      name: "Furniro",
      description:
        "Furniro is a furniture selling application which sells furnitures for home and offices",
      skills: ["Reactjs", "Typescript", "Vanilla CSS", "SCSS"],
      liveSrc: "https://furniro-sable.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/Furniro",
    },
    {
      name: "Gymer",
      description: "Gym site for managing membership was my first projects.",
      skills: ["Reactjs", "Javascript", "Tailwind", "Razorpay"],
      liveSrc: "https://gymer-version2-nbbn.vercel.app",
      sourceSrc: "https://github.com/Piyush5784/GYMER-version2",
    },
  ],

  experiences: [
    {
      companyName: "The Monkeys (open source organisation)",
      description:
        " Actively contributing to the monkeys organization, where focusing on the building and customizing components with shadcn and Editor.js for creating seamlessa and user friendly experiences",
      position: "Frontend Developer",
      skillsIncluded: ["Nextjs", "Shadcn", "Typescript", "Editorjs"],
      location: "Remote",
      Date: "Aug 2024",
    },
    {
      companyName: "UjuCode",
      description:
        "Developed the scalable backend of the site in Nestjs including authentication, authorization, payment gateway. Used dynamoDb as a database and AWS for deployment",
      position: "Backend Developer Intern",
      skillsIncluded: ["Nestjs", "Dynamodb", "Razorpay", "RBAC"],
      location: "Assam, Ghy",
      Date: "July 2024 - Nov 2024",
    },
  ],
};

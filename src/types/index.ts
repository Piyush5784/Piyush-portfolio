import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type select =
  | "projects"
  | "experiences"
  | "blogs"
  | "PR's"
  | "Education";

export interface socialLinks {
  icon: IconType;
  size: number | string;
  buttonVarient?:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost";
  href: string;
}

export interface projectContent {
  name: string;
  description: ReactNode | string;
  skills: string[];
  liveSrc?: string;
  sourceSrc?: string;
}
export interface ExperienceContent {
  companyName: string;
  position: string;
  description: string;
  skillsIncluded?: string[];
  location: string;
  Date: string;
}
export interface technicalSkills {
  category: string;
  items: string;
}
export interface ContentType {
  name: string;
  freelanceExp?: string;
  technicalSkills: technicalSkills[];
  introText: string;
  sections: select[];
  Resume: {
    show: boolean;
    href: string;
  };
  socialLinks: socialLinks[];
  skills: string[];
  projects: projectContent[];
  experiences: ExperienceContent[];
  landingPage: projectContent[];
  education: {
    courseName: string;
    universityName: string;
    years: string;
  }[];
  PRS: { name: string; merged?: boolean; liveSrc: string }[];
  designs: {
    title: string;
    liveLink: string;
  }[];
  blogs: {
    title: string;
    content: string;
    href: string;
  }[];
}

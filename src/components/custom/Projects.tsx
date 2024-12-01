import { Content } from "@/Content";
import { Globe } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-10 w-full pb-10">
        {Content.projects.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[85%] rounded-xl mt-5"
          >
            <p className=" text-2xl font-bold">{project.name}</p>
            <p className="pt-4 text-sm opacity-70">{project.description}</p>
            <div className="flex gap-2 flex-wrap pt-4">
              {project.skills.map((skill, index) => (
                <button
                  key={index}
                  className="text-[9px] px-2 py-1 rounded-sm dark:hover:bg-gray-200 dark:bg-white hover:bg-[#2e2e2f] bg-black  text-white  dark:text-black font-extrabold duration-100"
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="pt-10 flex gap-5">
              <Link href={project.liveSrc} target="_blank">
                <span className=" hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                  <Globe />
                  Live
                </span>
              </Link>
              <Link href={project.sourceSrc} target="_blank">
                <span className=" justify-center items-center hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                  <FaGithub size={25} /> Source
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="font-bold text-xl">Some static sites</p>
      <div className="flex flex-wrap items-center gap-10 w-full pb-10 ">
        {Content.landingPage.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[85%] rounded-xl mt-5"
          >
            <p className=" text-2xl font-bold">{project.name}</p>
            <p className="pt-4 text-sm opacity-70">{project.description}</p>
            <div className="flex gap-2 flex-wrap pt-4">
              {project.skills.map((skill, index) => (
                <button
                  key={index}
                  className="text-[9px] px-2 py-1 rounded-sm dark:hover:bg-gray-200 dark:bg-white hover:bg-[#2e2e2f] bg-black  text-white  dark:text-black font-extrabold duration-100"
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="pt-10 flex gap-5">
              <Link href={project.liveSrc} target="_blank">
                <span className=" hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                  <Globe />
                  Live
                </span>
              </Link>
              <Link href={project.sourceSrc} target="_blank">
                <span className=" justify-center items-center hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                  <FaGithub size={25} /> Source
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Link href={"https://github.com/Piyush5784"} target="_blank">
          <Button> More projects</Button>
        </Link>
      </div>
    </>
  );
};

export default Projects;

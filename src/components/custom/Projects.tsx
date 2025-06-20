import { Content } from "@/Content";
import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const runtime = "edge";

const Projects = () => {
  return (
    <>
      <p className=" text-xl opacity-40 pl-7 md:pl-0">Web apps</p>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 w-full pb-10">
        {Content.projects.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[85%] rounded-xl mt-5 "
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
              {project.liveSrc && (
                <Link href={project.liveSrc} target="_blank">
                  <span className=" hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                    <Globe />
                    Live
                  </span>
                </Link>
              )}
              {project.sourceSrc && (
                <Link href={project.sourceSrc} target="_blank">
                  <span className=" justify-center items-center hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                    <FaGithub size={25} /> Source
                  </span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className=" text-xl opacity-40 pl-7 md:pl-0">Some static sites</p>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 w-full pb-10 ">
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
              {project.liveSrc && (
                <Link href={project.liveSrc} target="_blank">
                  <span className=" hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                    <Globe />
                    Live
                  </span>
                </Link>
              )}
              {project.sourceSrc && (
                <Link href={project.sourceSrc} target="_blank">
                  <span className=" justify-center items-center hover:opacity-100 opacity-25 text-black dark:text-white cursor-pointer hover:underline flex gap-2">
                    <FaGithub size={25} /> Source
                  </span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className=" text-xl opacity-40 mb-5 pl-7 md:pl-0">Designs</p>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 w-full pb-10">
        {Content.designs.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[85%] rounded-xl  flex items-center justify-between"
          >
            <div>
              <p className=" text-xl font-bold">{project.title}</p>
            </div>
            <div>
              <Link
                href={project.liveLink}
                target="_blank"
                className="opacity-50 hover:opacity-100 duration-75"
              >
                <ExternalLink />
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

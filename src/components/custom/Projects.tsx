import { Content } from "@/Content";
import { Globe } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const runtime = "edge";

const Projects = () => {
  return (
    <>
      <p className="text-xl opacity-40 pb-4 md:pl-2">Web apps</p>
      <div className="flex flex-wrap items-stretch  md:justify-start gap-2 w-full">
        {Content.projects.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[95%] rounded-xl flex flex-col justify-between h-full"
          >
            {/* name + links inline */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-2xl font-bold">{project.name}</p>
              <div className="flex gap-3 opacity-60 hover:opacity-100 transition-opacity">
                {project.liveSrc && (
                  <Link
                    href={project.liveSrc}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <Globe size={18} />
                    <span className="hidden sm:inline">Live</span>
                  </Link>
                )}
                {project.sourceSrc && (
                  <Link
                    href={project.sourceSrc}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FaGithub size={18} />
                    <span className="hidden sm:inline">Code</span>
                  </Link>
                )}
              </div>
            </div>

            <p className="pt-4 text-sm opacity-70">{project.description}</p>

            <div className="flex gap-2 flex-wrap pt-4">
              {project.skills.map((skill, index) => (
                <button
                  key={index}
                  className="text-[9px] px-2 py-1 rounded-sm dark:hover:bg-gray-200 dark:bg-white hover:bg-[#2e2e2f] bg-black text-white dark:text-black font-extrabold duration-100"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xl opacity-40 pb-4 md:pl-2 pt-4">Some static sites</p>
      <div className="flex flex-wrap items-stretch  md:justify-start gap-2 w-full">
        {Content.landingPage.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[95%] rounded-xl flex flex-col justify-between h-full"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-2xl font-bold">{project.name}</p>
              <div className="flex gap-3 opacity-60 hover:opacity-100 transition-opacity">
                {project.liveSrc && (
                  <Link
                    href={project.liveSrc}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <Globe size={18} />
                    <span className="hidden sm:inline">Live</span>
                  </Link>
                )}
                {project.sourceSrc && (
                  <Link
                    href={project.sourceSrc}
                    target="_blank"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FaGithub size={18} />
                    <span className="hidden sm:inline">Code</span>
                  </Link>
                )}
              </div>
            </div>

            <p className="pt-4 text-sm opacity-70">{project.description}</p>

            <div className="flex gap-2 flex-wrap pt-4">
              {project.skills.map((skill, index) => (
                <button
                  key={index}
                  className="text-[9px] px-2 py-1 rounded-sm dark:hover:bg-gray-200 dark:bg-white hover:bg-[#2e2e2f] bg-black text-white dark:text-black font-extrabold duration-100"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xl opacity-40 pb-4 md:pl-2 pt-4">Designs</p>
      <div className="flex flex-wrap items-stretch  md:justify-start gap-2 w-full">
        {Content.designs.map((project, index) => (
          <div
            key={index}
            className="border p-6 md:w-[45%] w-[95%] rounded-xl flex items-center justify-between "
          >
            <p className="text-xl font-bold">{project.title}</p>
            <Link
              href={project.liveLink}
              target="_blank"
              className="opacity-50 hover:opacity-100 duration-75"
            >
              <Globe />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-4">
        <Link href={"https://github.com/Piyush5784"} target="_blank">
          <Button>More projects</Button>
        </Link>
      </div>
    </>
  );
};

export default Projects;

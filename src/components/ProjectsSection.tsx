import { useContexts } from "../Context";
import { Card } from "./Card";
import { productDetails } from "../lib/CardItems";
import { CardProps } from "../lib/Types";

const ProjectsSection = () => {
  const { setShowMenu } = useContexts();

  return (
    <>
      <div
        onClick={() => setShowMenu(false)}
        id="projects"
        className="pb-7 pl-6 lg:pl-[100px] bg-black text-white"
      >
        <p className="pt-6 text-2xl font-semibold">Projects</p>
        <div className="lg:flex lg:flex-wrap lg:items-center  lg:gap-[50px]">
          {productDetails.map((cartDetails: CardProps) => (
            <>
              <div>
                <Card
                  url={cartDetails.url}
                  projectName={cartDetails.projectName}
                  frameworksUsed={cartDetails.frameworksUsed}
                  sourceCodeUrl={cartDetails.sourceCodeUrl}
                  img={cartDetails.img}
                />
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://piyush578-portfolio.netlify.app/projects/project"
            target="_blank"
            className="bg-[#7D6AE8] text-center hover:bg-[#A899FF] m-4 ml-0 px-4 py-3 rounded-lg"
          >
            More Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;

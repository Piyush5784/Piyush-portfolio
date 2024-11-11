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
        className="pb-7 pl-6 bg-black text-white"
      >
        <p className="pt-6 text-2xl font-semibold">Projects</p>
        <div className="lg:flex lg:flex-wrap lg:items-center  lg:gap-[50px]">
          {productDetails.map((cartDetails: CardProps) => (
            <>
              <div key={cartDetails.projectName}>
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
        <div className="flex  items-center justify-center mr-24 pt-10">
          <a
            href="https://piyush578-portfolio.netlify.app/projects/project"
            target="_blank"
            className="bg-white text-black text-center m-4 px-4 py-3 rounded-lg"
          >
            More Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;

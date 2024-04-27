import { useContexts } from "../Context";
import { Card } from "./Card";
import mediumImage from "../assets/Medium.png";
import E_com from "../assets/E-com.png";
import walletApp from "../assets/Wallet app.webp";
import GymImage from "../assets/gym.png";
import Gemini from "../assets/Gemini.jpg";
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
          <div>
            <Card
              url="https://github.com/Piyush5784/Medium-blog"
              projectName="Medium Blog"
              frameworksUsed={[
                "React Js, ",
                "PostgresSQL, ",
                "Tailwind, ",
                "Cloudflare, ",
                "Hono, ",
                "Prisma ",
              ]}
              img={mediumImage}
            />
          </div>
          <div>
            <Card
              url="https://github.com/Piyush5784/e-comm-app"
              projectName="E-commerce Website"
              frameworksUsed={[
                "React Js, ",
                "Typescript, ",
                "Firebase, ",
                "Bootstrap, ",
                "Razorpay ",
              ]}
              img={E_com}
            />
          </div>

          <div>
            <Card
              url="https://github.com/Piyush5784/GYMER-version2"
              projectName="Gymer"
              frameworksUsed={[
                "React Js, ",
                "Express Js, ",
                "Node Js, ",
                "MongoDb, ",
                "Razorpay, ",
              ]}
              img={GymImage}
            />
          </div>
          <div>
            <Card
              url="https://github.com/Piyush5784/Wallet-app"
              projectName="Wallet App"
              frameworksUsed={[
                "React Js, ",
                "Express Js, ",
                "Tailwind, ",
                "MongoDB",
              ]}
              img={walletApp}
            />
          </div>
          <div>
            <Card
              url="https://gemini-pro-latest.netlify.app/"
              projectName="Gemini Pro "
              frameworksUsed={["React, ", "Tailwind, ", "REST Api"]}
              img={Gemini}
            />
          </div>
          {/* <div>
            <Card
              url="https://github.com/Piyush5784/Business-site"
              projectName="Digital Craft "
              frameworksUsed={["HTML, ", "CSS ", "Bootstrap "]}
              img={Digital}
            />
          </div> */}
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

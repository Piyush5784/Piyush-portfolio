import { useContexts } from "../Context";
import { ButtonType1 } from "./ButtonType1";

const AboutSection = () => {
  const { setShowMenu } = useContexts();
  return (
    <>
      <div
        onClick={() => setShowMenu(false)}
        id="about"
        className=" bg-[#1C1F24] lg:pl-[100px] duration-300  pl-6 pb-7 text-white"
      >
        <p className="p-4 pl-0 text-lg font-semibold">About me</p>
        <p className="font-extrabold text-3xl ">Piyush Jha</p>
        <p className="p-3 pl-0 text-lg font-light">
          Hi, I'm Piyush, a computer science student born and raised in Assam. I
          have a strong passion for full stack development and enjoy working
          with the latest technology stacks to build innovative websites. With a
          blend of creativity and technical expertise, I strive to create
          seamless user experiences and bring ideas to life on the web. Let's
          collaborate and turn your vision into reality!
        </p>
        <p className="text-lg font-semibold mt-10">What I know</p>
        <p className="text-md font-semibold mt-3 mb-2">Frontend</p>
        <div className="pl-1">
          <ButtonType1 text="HTML5" ringColor="green" />
          <ButtonType1 text="CSS3" ringColor="blue" />
          <ButtonType1 text="Tailwind" ringColor="" />
          <ButtonType1 text="Javascript" ringColor="" />
          <ButtonType1 text="Typescript" ringColor="" />
          <ButtonType1 text="React Js" ringColor="green" />
          <ButtonType1 text="Next Js 13" ringColor="" />
        </div>

        <p className="text-md font-semibold mt-3 mb-2">Backend</p>
        <div className="pl-1">
          <ButtonType1 text="Node Js" ringColor="" />
          <ButtonType1 text="Express Js" ringColor="" />
          <ButtonType1 text="Hono" ringColor="" />
          <ButtonType1 text="Next Auth" ringColor="" />
        </div>
        <p className="text-md font-semibold mt-3 mb-2">Database</p>
        <div className="pl-1">
          <ButtonType1 text="PostgresSQL" ringColor="green" />
          <ButtonType1 text="MongoDB" ringColor="blue" />
          <ButtonType1 text="Firebase" ringColor="purple" />
          <ButtonType1 text="MySQL" ringColor="yellow" />
        </div>
        <p className="text-md font-semibold mt-3 mb-2">Devops</p>
        <div className="pl-1">
          <ButtonType1 text="Docker" ringColor="green" />
          <ButtonType1 text="GIT" ringColor="blue" />
          {/* <ButtonType1 text="Kubernetes" ringColor="purple" /> */}
        </div>
      </div>
    </>
  );
};

export default AboutSection;

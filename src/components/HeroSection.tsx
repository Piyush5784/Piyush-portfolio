import { useContexts } from "../Context";
import img1 from "../assets/20943592.jpg";

const HeroSection = () => {
  const { setShowMenu } = useContexts();

  return (
    <div onClick={() => setShowMenu(false)}>
      <div className="pt-[5rem] h-screen md:flex  md:justify-around md:items-center">
        <div className=" flex justify-center items-center md:pl-6">
          <img
            src={img1}
            className="rounded-[50%] duration-300 h-[18.75rem] w-[18.75rem] lg:h-[31.25rem] lg:w-[31.25rem] "
            alt="Menu"
          />
        </div>

        <div className="pl-6 duration-300 ">
          <p className="text-white mt-3 text-3xl font-bold ">
            Hi , I am a <span className="text-[#7D6AE8] ">full stack</span>{" "}
            Developer <br />
            <span className="text-xl font-light">
              I convert design into fully functional sites
            </span>
          </p>
          <div>
            <div className="mt-7">
              <a
                href="#projects"
                className="bg-[#7D6AE8] hover:bg-[#A899FF] mt-3 px-4 py-3 rounded-lg"
              >
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

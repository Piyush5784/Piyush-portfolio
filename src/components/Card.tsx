import { CardProps } from "../lib/Types";

export const Card = ({
  img,
  projectName,
  frameworksUsed,
  url,
  sourceCodeUrl,
}: CardProps) => {
  return (
    <div className="mt-7  duration-300 rounded-xl w-[80%] lg:w-[18.5rem] bg-[#B0B0B0]">
      <div className="rounded-t-xl mt-7 w-full">
        <img src={img} className="rounded-t-xl " alt="Project Image" />
      </div>
      <div className="text-black p-3 h-[6.25rem]">
        <p className="font-bold">{projectName}</p>
        <p className="text-sm font-light">
          {frameworksUsed.map((name: string, index: number) => (
            <span key={index}>{name}</span>
          ))}
        </p>
      </div>

      <div className="flex justify-between  text-black font-light duration-300  px-2 pb-2">
        <a href={sourceCodeUrl} target="_blank">
          <button className="bg-[#d8d8d8] hover:bg-gray-400 text-black py-2 px-2 md:px-4 text-sm  rounded-full">
            <div className="flex gap-2 justify-center items-center">
              <i className="fa-brands fa-github text-2xl"></i>Source code
            </div>
          </button>
        </a>
        <a href={url} target="_blank">
          <button className="bg-[#d8d8d8] hover:bg-gray-400 text-black   py-2  md:px-4 px-2 rounded-full">
            <div className="flex gap-2 justify-center items-center">
              <i className="fa-solid fa-globe text-2xl"></i>Live
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

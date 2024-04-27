type CardProps = {
  img: string;
  projectName: string;
  frameworksUsed: string[];
  url: string;
};

export const Card = ({ img, projectName, frameworksUsed, url }: CardProps) => {
  return (
    <div className="mt-7 hover:transform hover:scale-105 hover:transition-transform duration-300 rounded-xl w-[80%] lg:w-[18.5rem] bg-[#B0B0B0]">
      <a href={url} target="_blank">
        <div className="rounded-t-xl mt-7 w-full">
          <img
            src={img}
            className="rounded-t-xl max-h-[260px]"
            alt="Project Image"
          />
        </div>
        <div className="text-black p-3 h-[6.25rem]">
          <p className="font-bold">{projectName}</p>
          <p className="text-sm font-light">
            {frameworksUsed.map((name: string, index: number) => (
              <span key={index}>{name}</span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
};

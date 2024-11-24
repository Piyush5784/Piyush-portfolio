import { Content } from "@/Content";

const Experiences = () => {
  return (
    <>
      {Content.experiences.map((experience, index) => (
        <div key={index} className="border rounded-xl p-4 mt-2">
          <div>
            <div className="flex justify-between items-center">
              <p>{experience.position}</p>
              <p className="text-sm text-gray-600">{experience.Date}</p>
            </div>
            <p>@{experience.companyName}</p>
            <p className="text-sm text-gray-600">{experience.description}</p>
            <div className="flex gap-2 items-center  p-2 pl-0">
              {experience.skillsIncluded?.map((skill, index) => (
                <button
                  key={index}
                  className="text-[10px] px-2 py-[0.7px] rounded-sm dark:hover:bg-gray-200 dark:bg-white hover:bg-[#2e2e2f] bg-black  text-white  dark:text-black font-extrabold duration-100"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experiences;
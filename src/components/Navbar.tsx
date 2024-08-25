import { useContexts } from "../Context";
import { links } from "../lib/CardItems";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContexts();

  return (
    <>
      <div className="bg-black p-6 fixed text-white w-full ">
        {/* icons change div */}
        <div className="flex justify-between">
          <div className="lg:pl-[77px] duration-300">Developer</div>
          <div
            onClick={() => setShowMenu((c) => !c)}
            className="md:invisible duration-300"
          >
            {showMenu ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars "></i>
            )}
          </div>

          {/* desktop links */}
          <div className="hidden md:flex ">
            {links.map((text: string, index: number) => (
              <div key={index}>
                <a
                  href={`#${text.toLowerCase()}`}
                  className="p-3 hover:bg-[#373A41] hover:rounded-lg"
                >
                  {text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* mobile nav */}
        <div
          className={`duration-300 md:hidden w-full  absolute top-[-20rem] bg-black left-0 ${
            showMenu ? "top-[4rem]" : ""
          } `}
        >
          <div className="bg-black flex items-center justify-center">
            <ul className="text-center bg-black flex w-full flex-col pt-2 dark:text-white">
              {links.map((text: string, index: number) => (
                <li
                  key={index}
                  className="p-3 hover:bg-[#373A41] w-full"
                  onClick={() => setShowMenu(false)}
                >
                  <a href={`#${text.toLowerCase()}`} className="p-3">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

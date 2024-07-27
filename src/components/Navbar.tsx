import { useContexts } from "../Context";
import { links } from "../lib/CardItems";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContexts();

  return (
    <>
      <div className="bg-black p-6 fixed text-white w-full">
        <div className="flex justify-between">
          <div className="lg:pl-[77px] duration-300">Developer</div>
          <div onClick={() => setShowMenu((c) => !c)} className="md:invisible ">
            {showMenu ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars "></i>
            )}
          </div>

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
        <div className={`${showMenu ? "block " : "hidden"}`}>
          <ul className="text-center flex flex-col pt-2 dark:text-white">
            {links.map((text: string, index: number) => (
              <li
                key={index}
                className="p-3 hover:bg-[#373A41]"
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
    </>
  );
};

export default Navbar;

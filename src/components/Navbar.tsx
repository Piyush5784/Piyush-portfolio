import { useContexts } from "../Context";

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

          <div className="hidden md:flex">
            <div>
              <a
                href="#home"
                className="p-3 hover:bg-[#373A41] hover:rounded-lg"
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="#about"
                className="p-3 hover:bg-[#373A41] hover:rounded-lg"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#projects"
                className="p-3 hover:bg-[#373A41] hover:rounded-lg"
              >
                Projects
              </a>
            </div>
            <div>
              <a
                href="#connect"
                className="p-3 hover:bg-[#373A41] hover:rounded-lg"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
        <div className={`${showMenu ? "block " : "hidden"}`}>
          <ul className="text-center flex flex-col pt-2">
            <li
              className="p-3 hover:bg-[#373A41]"
              onClick={() => setShowMenu(false)}
            >
              <a href="#home" className="p-3">
                Home
              </a>
            </li>
            <li
              className="p-3 hover:bg-[#373A41]"
              onClick={() => setShowMenu(false)}
            >
              <a href="#about" className="p-3">
                About
              </a>
            </li>{" "}
            <li
              className="p-3 hover:bg-[#373A41]"
              onClick={() => setShowMenu(false)}
            >
              <a href="#projects" className="p-3">
                Projects
              </a>
            </li>{" "}
            <li
              className="p-3 hover:bg-[#373A41]"
              onClick={() => setShowMenu(false)}
            >
              <a href="#connect" className="p-3">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

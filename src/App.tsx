import AboutSection from "./components/AboutSection";
import Connect from "./components/Connect";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-white bg-black md:w-[50%] flex flex-col items-center justify-center">
          {/* <Navbar /> */}

          {/* <HeroSection /> */}

          <AboutSection />

          <ProjectsSection />

          <Connect />
        </div>
      </div>
    </>
  );
};

export default App;

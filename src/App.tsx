import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Connect from "./components/Connect";

const App = () => {
  return (
    <>
      <div className="text-white bg-black ">
        <Navbar />

        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <Connect />
      </div>
    </>
  );
};

export default App;

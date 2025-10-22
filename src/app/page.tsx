import { AboutSection } from "@/components/custom/About/about-section";
import Insights from "@/components/custom/Insights";
import Sections from "@/components/custom/Sections";
import { SelectItems } from "@/components/custom/select-items";
import Skills from "@/components/custom/Skills";
import "./globals.css";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <div className="  rounded-lg h-screen">
          <div className="flex w-full flex-col md:flex-row gap-5 md:overflow-hidden overflow-scroll h-[100vh] p-5">
            <div className="shadow-lg md:w-[30%] p-5 rounded-xl border  ">
              <AboutSection />
            </div>
            <div className="shadow-lg md:w-[70%] p-5  rounded-xl border md:overflow-y-scroll ">
              <Skills />
              <SelectItems />
              <Sections />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

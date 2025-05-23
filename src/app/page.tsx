import { AboutSection } from "@/components/custom/About/about-section";
import Insights from "@/components/custom/Insights";
import Sections from "@/components/custom/Sections";
import { SelectItems } from "@/components/custom/select-items";
import Skills from "@/components/custom/Skills";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col p-4 ">
        <div className=" lg:w-[40%] rounded-lg pt-5 pb-10">
          {/* <Insights /> */}
          <AboutSection />
          <Skills />
          <SelectItems />
          <Sections />
        </div>
      </div>
    </>
  );
}

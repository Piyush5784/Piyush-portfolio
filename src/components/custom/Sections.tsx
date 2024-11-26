"use client";
import { selectAtom } from "@/store";
import { select } from "@/types";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import Blogs from "./Blogs";
import Experiences from "./Experiences";
import Projects from "./Projects";
import PRSections from "./Pr-s";
import { Content } from "@/Content";
import Education from "./Education";

const Sections = () => {
  const selected = useRecoilValue<select>(selectAtom);
  return (
    <>
      <div className="pt-5">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selected == "blogs" && <Blogs />}
          {selected == "experiences" && <Experiences />}
          {selected == "PR's" && <PRSections />}
          {selected == "projects" && <Projects />}
          {selected == "Education" && <Education />}
        </motion.div>
      </div>
    </>
  );
};

export default Sections;

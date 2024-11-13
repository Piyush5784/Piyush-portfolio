"use client";
import { selectAtom } from "@/store";
import { select } from "@/types";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import Blogs from "./Blogs";
import Experiences from "./Experiences";
import Projects from "./Projects";

const Sections = () => {
  const selected = useRecoilValue<select>(selectAtom);
  return (
    <>
      <div className="pt-5">
        {selected === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Projects />
          </motion.div>
        )}
        {selected === "experiences" && (
          <motion.div
            key="experiences"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Experiences />
          </motion.div>
        )}
        {selected === "blogs" && (
          <motion.div
            key="blogs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Blogs />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Sections;

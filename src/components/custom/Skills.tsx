"use client";
import { Content } from "@/Content";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-5 font-bold text-xl"
      >
        Skills
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex gap-2 pb-3 pt-2 flex-wrap my-2"
      >
        {Content.skills.map((Item, index) => (
          <button
            key={index}
            className="text-[10px] px-3 py-1 rounded-sm dark:hover:bg-gray-200 dark:bg-white hover:bg-[#2e2e2f] bg-black  text-white  dark:text-black font-extrabold duration-100 "
          >
            {Item}
          </button>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;

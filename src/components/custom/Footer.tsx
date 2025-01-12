"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
const GitCalander = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GitHubCalendar username="piyush5784" />
      </motion.div>
    </>
  );
};

// const gitHubTheme = {
//   light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
//   dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
// };
export default GitCalander;

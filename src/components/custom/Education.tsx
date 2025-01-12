import React from "react";
import { motion } from "framer-motion";
import { Content } from "@/Content";

export const runtime = "edge";

const Education = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {Content.education.map((education, idx) => (
          <div key={idx} className="border rounded-xl p-4 mt-2">
            <div className="flex justify-between">
              <div>
                <p> {education.courseName}</p>
                <p className="text-gray-600">{education.universityName}</p>
              </div>
              <div>
                {" "}
                <p>{education.years}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Education;

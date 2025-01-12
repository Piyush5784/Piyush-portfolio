"use client";
import { cn } from "@/lib/utils";
import { selectAtom } from "@/store";
import { select } from "@/types";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

export function SelectItems() {
  const [select, setSelected] = useRecoilState<select>(selectAtom);

  return (
    <>
      <div>
        <div className="flex items-center pt-5 justify-start ">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex my-2 border rounded-lg text-sm md:text-[1rem] duration-300"
            >
              {/* Option selectors */}
              <div
                onClick={() => setSelected("projects")}
                className={cn(
                  "flex-1 p-2 text-center cursor-pointer",
                  select === "projects"
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                )}
              >
                Projects
              </div>
              <div
                onClick={() => setSelected("experiences")}
                className={cn(
                  "flex-1 p-2 text-center cursor-pointer",
                  select === "experiences"
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                )}
              >
                Experience
              </div>
              <div
                onClick={() => setSelected("Education")}
                className={cn(
                  "flex-1 p-2 text-center cursor-pointer",
                  select === "Education"
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                )}
              >
                Education
              </div>
              <div
                onClick={() => setSelected("blogs")}
                className={cn(
                  "flex-1 p-2 text-center cursor-pointer",
                  select === "blogs"
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                )}
              >
                Blogs
              </div>

              <div
                onClick={() => setSelected("PR's")}
                className={cn(
                  "flex-1 p-2 text-center cursor-pointer",
                  select === "PR's"
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                )}
              >
                PR's
              </div>

              {/* Animated border indicator */}
              <motion.div
                className="absolute bottom-0 h-[3px] bg-primary rounded-full"
                initial={false}
                animate={{
                  x: dynamicPosition(select),
                  width: dynamicWidth(select),
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conditionally rendered content */}
    </>
  );
}

function dynamicPosition(name: select) {
  switch (name) {
    case "projects":
      return "3%";
    case "experiences":
      return "85.33%";
    case "blogs":
      return "465.66%";
    case "PR's":
      return "705%";
    case "Education":
      return "220%";
  }
}

function dynamicWidth(name: select) {
  switch (name) {
    case "PR's":
      return "12.33%";
    case "blogs":
      return "15.33%";
    case "projects":
      return "20.33%";
    case "experiences":
      return "25.33%";
    case "Education":
      return "22%";
  }
}

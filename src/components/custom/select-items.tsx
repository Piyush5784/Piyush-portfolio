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
        <div className="flex items-center pt-5 justify-start">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex w-[250px] my-2 border rounded-lg font-sm duration-300"
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

              {/* Animated border indicator */}
              <motion.div
                className="absolute bottom-0 h-[3px] bg-primary rounded-full"
                initial={false}
                animate={{
                  x:
                    select === "projects"
                      ? "0%"
                      : select === "experiences"
                      ? "106.33%"
                      : "290.66%",
                  width:
                    select === "blogs"
                      ? "25.33%"
                      : select === "projects"
                      ? "30.33%"
                      : "33.33%",
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

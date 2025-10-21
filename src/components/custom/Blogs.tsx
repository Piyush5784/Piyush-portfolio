"use client";
import { Content } from "@/Content";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { MouseEvent, MouseEventHandler, useState } from "react";
import { motion } from "framer-motion";
import ContainedMouseFollower from "./card-move-effect";
import ContainerWithGlowEffect from "./card-move-effect";
export const runtime = "edge";

const Blogs = () => {
  return (
    <div>
      {" "}
      <div className="border rounded-xl p-4 mt-2">
        {/* <ContainerWithGlowEffect> */}
        {Content.blogs.map((blog, idx) => (
          <div
            key={idx}
            className="text-black dark:text-white flex justify-between items-center"
          >
            <p>{blog.title}</p>

            <Link
              href={blog.href}
              target="_blank"
              className="opacity-50 hover:opacity-100 duration-75"
            >
              <ExternalLink />
            </Link>
          </div>
        ))}
        {/* </ContainerWithGlowEffect> */}
      </div>
    </div>
  );
};

export default Blogs;

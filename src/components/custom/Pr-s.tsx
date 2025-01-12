import { Content } from "@/Content";
import { GitMerge, GitPullRequest } from "lucide-react";
import Link from "next/link";
import React from "react";

export const runtime = "edge";

const PRSections = () => {
  return (
    <>
      {Content.PRS.slice()
        .reverse()
        .map((pr, idx) => (
          <div className="border rounded-xl p-4 mt-2" key={idx}>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center justify-center">
                <GitMerge /> {pr.name}
              </div>
              <div>
                <Link
                  target="_blank"
                  className="hover:underline text-slate-600 hover:text-white"
                  href={pr.liveSrc}
                >
                  src
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PRSections;

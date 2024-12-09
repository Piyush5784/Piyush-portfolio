import { Content } from "@/Content";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      {" "}
      <div className="border rounded-xl p-4 mt-2">
        {Content.blogs.map((blog, idx) => (
          <div
            key={idx}
            className="text-white flex justify-between items-center"
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
      </div>
    </div>
  );
};

export default Blogs;

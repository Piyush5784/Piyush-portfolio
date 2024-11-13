"use client";
import { Button } from "@/components/ui/button";
import { Content } from "@/Content";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ThemeToggler } from "../Theme/theme-toggler";

export function AboutSection() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Name and Theme Toggle */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-[25px] font-semibold">{Content.name}</p>
        <span>
          <ThemeToggler />
        </span>
      </motion.div>

      <motion.p
        className="pt-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {Content.introText}
      </motion.p>

      <motion.div
        className="pt-10 flex gap-2 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {Content.Resume.show && (
          <Button onClick={() => router.push(Content.Resume.href)}>
            Resume
          </Button>
        )}
        {Content.socialLinks.map((Item, index) => (
          <Button key={index} variant={Item.buttonVarient || "outline"}>
            <Item.icon size={Item.size || 18} />
          </Button>
        ))}
      </motion.div>
    </motion.div>
  );
}

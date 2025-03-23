"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "./acernity/glowing-effect";

export default function ContainerWithGlowEffect({
  children,
}: {
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const decorationSize = 80; // Size of the decorative element

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial position to center of container
    const { width, height } = container.getBoundingClientRect();
    setPosition({
      x: width / 2 - decorationSize / 2,
      y: height / 2 - decorationSize / 2,
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Get container bounds
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate relative mouse position within container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if mouse is within container bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setIsHovering(true);

        // Calculate new position with boundaries to keep element fully inside
        const newX = Math.max(
          0,
          Math.min(rect.width - decorationSize, x - decorationSize / 2)
        );
        const newY = Math.max(
          0,
          Math.min(rect.height - decorationSize, y - decorationSize / 2)
        );

        setPosition({ x: newX, y: newY });
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden px-2 py-3"
      >
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            x: position.x,
            y: position.y,
            opacity: isHovering ? 1 : 0.5,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 500,
            mass: 0.2,
          }}
        >
          <div className="relative w-[80px] h-[80px] blur-3xl bg-white"></div>
        </motion.div>
        {children}
      </div>
    </>
  );
}

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="">
      <GridItem
        area=""
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  width = 250,
  height = 250,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move up by 50px as user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`flex justify-center ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full shadow-lg"
      />
    </motion.div>
  );
}

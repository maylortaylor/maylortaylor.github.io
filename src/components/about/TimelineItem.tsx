"use client";

import { useRef, useEffect, useState } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  children: React.ReactNode;
  isLeft: boolean;
}

export default function TimelineItem({
  year,
  title,
  children,
  isLeft,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-8 flex ${isLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Content */}
      <div
        className={`w-full ${isLeft ? "pr-8" : "pl-8"} ${
          isVisible
            ? isLeft
              ? "animate-in slide-in-from-right"
              : "animate-in slide-in-from-left"
            : "opacity-0"
        } transition-all duration-500`}
      >
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#80ced7] transition-all duration-200">
          <h3 className="text-xl font-bold text-[#80ced7] mb-2">{year}</h3>
          <h4 className="text-lg font-bold text-[#263d42] mb-3">{title}</h4>
          <div className="text-gray-700 prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="flex justify-center">
        <div className="w-6 h-6 bg-[#63c7b2] rounded-full border-4 border-white shadow-md relative z-10 flex-shrink-0 -mx-3" />
      </div>

      {/* Spacer */}
      <div className={`w-full ${!isLeft ? "pr-8" : "pl-8"}`} />
    </div>
  );
}

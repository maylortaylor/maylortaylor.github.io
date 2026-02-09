"use client";

import { useState, useEffect } from "react";

const strings = [
  "Web Designer",
  "Web Developer",
  "Front-end Framework Ninja",
  ".NetCore Hacker",
  "Scrum Master",
  "Senior Full Stack .NET Web Developer",
];

interface TypedAnimationProps {
  typeSpeed?: number;
  backSpeed?: number;
  startDelay?: number;
}

export default function TypedAnimation({
  typeSpeed = 80,
  backSpeed = 40,
  startDelay = 1000,
}: TypedAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = strings[stringIndex];
      const speed = isDeleting ? backSpeed : typeSpeed;

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          // Finished typing, start deleting after a pause
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          setStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      }
    }, stringIndex === 0 && displayText === "" ? startDelay : isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, stringIndex, isDeleting, typeSpeed, backSpeed, startDelay]);

  return (
    <span className="min-h-[1.5em]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scrub?: boolean | number;
  triggerOnce?: boolean;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 50,
  scrub = false,
  triggerOnce = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = distance;
        break;
      case "down":
        y = -distance;
        break;
      case "left":
        x = distance;
        break;
      case "right":
        x = -distance;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          x,
          y,
          opacity: 0,
          scale: direction === "none" ? 0.9 : 1,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: triggerOnce ? "play none none none" : "play reverse play reverse",
            scrub,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, scrub, triggerOnce]);

  return <div ref={elementRef}>{children}</div>;
}

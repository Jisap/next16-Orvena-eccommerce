"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInitializer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Optional: Global GSAP defaults
    gsap.defaults({
      ease: "power2.out",
      duration: 0.6
    });

    console.log("GSAP Initialized with ScrollTrigger");
  }, []);

  return null;
}

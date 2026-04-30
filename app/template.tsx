"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // GSAP Entry Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { 
          opacity: 0, 
          y: 20,
          filter: "blur(10px)" 
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: 0.8, 
          ease: "power3.out",
          delay: 0.1
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={containerRef} className="flex-1 flex flex-col">
      {children}
    </div>
  );
}

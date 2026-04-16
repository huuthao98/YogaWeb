"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Setup observer for elements with fade classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: unobserve after revealing if you only want it to animate once
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Find all unrevealed elements
    const elements = document.querySelectorAll(
      ".fade-in:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible)"
    );
    
    // Add small timeout to ensure DOM is fully painted after route change
    setTimeout(() => {
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes

  return null;
}

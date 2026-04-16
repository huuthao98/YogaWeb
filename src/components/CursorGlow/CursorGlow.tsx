"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const trail = trailRef.current;
    if (!glow || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.left = `${e.clientX - 10}px`;
      glow.style.top = `${e.clientY - 10}px`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;
      trail.style.left = `${trailX - 20}px`;
      trail.style.top = `${trailY - 20}px`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "rgba(212, 175, 106, 0.8)",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          filter: "blur(4px)",
          transition: "width 0.2s, height 0.2s",
          mixBlendMode: "overlay",
        }}
      />
      <div
        ref={trailRef}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(212, 175, 106, 0.4)",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ITEMS = [
  "Residential Design",
  "Commercial Interiors",
  "Bespoke Furniture",
  "Architectural Consulting",
  "3D Visualization",
  "Project Management",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Duplicate for seamless loop
    el.innerHTML += el.innerHTML;
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="marquee-section" aria-hidden="true">
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track" ref={trackRef}>
          {ITEMS.map((item) => (
            <span key={item} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

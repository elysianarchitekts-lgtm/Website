"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;

    // After bar fills, fade out loader
    const tl = gsap.timeline({ delay: 1.9 });
    tl.to(el, {
      yPercent: -100,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        el.style.display = "none";
      },
    });
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-brand">
        <Image
          src="/logo-mark.png"
          alt="Elysian Emblem"
          width={70}
          height={70}
          className="loader-logo-img"
          priority
        />
        <div className="loader-logo">Elysian Architekts</div>
      </div>
      <div className="loader-bar" />
    </div>
  );
}

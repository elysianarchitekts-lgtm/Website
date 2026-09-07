"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.35;
        bgRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Entrance animation — delayed after loader
    const tl = gsap.timeline({ delay: 2.2 });
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />

      <div className="hero-content" ref={contentRef}>
        <div className="hero-eyebrow" ref={eyebrowRef}>
          Award-Winning Interior Architecture
        </div>

        <h1 className="hero-title" ref={titleRef}>
          Where Space<br />
          Becomes <em>Art</em>
        </h1>

        <p className="hero-sub" ref={subRef}>
          We design immersive interiors that marry architectural precision with
          handcrafted luxury — spaces that tell your story with every detail.
        </p>

        <div className="hero-actions" ref={actionsRef}>
          <a href="#portfolio" className="btn-primary">
            <span>Explore Our Work</span>
          </a>
          <a href="#studio" className="btn-ghost">
            Our Story
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll
      </div>
    </section>
  );
}

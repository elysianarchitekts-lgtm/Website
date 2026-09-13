"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)", y: 40 },
        {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Accent image
      gsap.fromTo(
        accentRef.current,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Text block
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Stats counter
      const statNums = statsRef.current?.querySelectorAll(".stat-num");
      statNums?.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section about" id="studio" ref={sectionRef}>
      {/* Images column */}
      <div className="about-image-wrap">
        <div ref={imageRef}>
          <Image
            src="/interior__0f2672a6-6540-4241-aca7-5f81733a6fed.png"
            alt="Elegant living room designed by Elysian Architekts"
            width={700}
            height={875}
            className="about-image-main"
            priority
          />
        </div>

        <div className="about-badge">
          <span className="about-badge-num">15</span>
          <span className="about-badge-label">Years of<br />Excellence</span>
        </div>

        <Image
          ref={accentRef}
          src="/interior__f2454cb1-6d0e-4509-8182-2a03fb3b7b0e.png"
          alt="Warm library interior"
          width={400}
          height={400}
          className="about-image-accent"
        />
      </div>

      {/* Text column */}
      <div ref={textRef}>
        <div className="section-eyebrow">Our Studio</div>

        <h2 className="section-title">
          Designing the <em>Extraordinary</em><br />
          Since 2021
        </h2>

        <div className="gold-divider" />

        <p className="section-body">
          Elysian Architekts believes that architecture is more than just building 
          spaces - Crafting havens of pure elegance and inspired designs. Guided by
          our Belief "Less is divine, more is eternal", we harmonize design with 
          elegance, utility, and timeless beauty, ensuring every detail resonates.
        </p>

        <p className="section-body" style={{ marginTop: "1.5rem" }}>
          Our work is rooted in minimalism, where every line, curve, and detail
          serves a purpose. We transform visions into spaces that breathe serenity,
          embody harmony, and elevate everday living. Whether it's a home, workspace,
          or public environment, our designs aspire to be both profoundly human 
          and spiritually uplifting.
          Discover how we turn simplicity into sophistication, and inspiration
          into reality.
        </p>

        <div className="about-stats" ref={statsRef}>
          {[
            { num: 60, label: "Projects Completed" },
            { num: 07, label: "Years Experience" },
            { num: 02, label: "Design Awards" },
            { num: 98, label: "Client Satisfaction %" },
          ].map(({ num, label }) => (
            <div className="stat" key={label}>
              <span className="stat-num" data-target={num}>
                {num}
              </span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

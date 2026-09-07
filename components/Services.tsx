"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "Residential Design",
    desc: "Bespoke living environments crafted to reflect your personality — from intimate apartments to sprawling villas. Every space tells your unique story.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M3 10.5L12 3l9 7.5V21H3V10.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Commercial Spaces",
    desc: "Offices, hotels, restaurants, and retail environments designed to elevate brand perception and inspire the people who use them daily.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 7V5a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Bespoke Furniture",
    desc: "Custom-commissioned pieces designed exclusively for your space. Furniture that becomes heirloom — built with master craftsmen using the finest materials.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="12" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 12V8a1 1 0 011-1h12a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 16v3M18 16v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "3D Visualization",
    desc: "Photo-realistic renders and immersive walkthroughs that let you experience your space before a single wall is built — refining every detail to perfection.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M12 3v13M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Architectural Consulting",
    desc: "Strategic guidance on spatial planning, material selection, lighting design, and architectural detailing from concept to completion.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M2 20h20M4 20V8l8-5 8 5v12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="9" y="13" width="6" height="7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Project Management",
    desc: "End-to-end coordination of contractors, suppliers, and artisans — ensuring your vision is realized precisely, on time, within budget.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section services-bg" id="services" ref={sectionRef}>
      <div className="services-header">
        <div className="section-eyebrow">What We Do</div>
        <h2 className="section-title">
          Full-Spectrum <em>Design</em> Services
        </h2>
        <p className="section-body" style={{ margin: "0 auto" }}>
          From the first sketch to the final flourish, we offer a comprehensive
          suite of design and architecture services.
        </p>
      </div>

      <div className="services-grid" ref={cardsRef}>
        {SERVICES.map((s) => (
          <div className="service-card" key={s.num}>
            <span className="service-num">{s.num}</span>
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

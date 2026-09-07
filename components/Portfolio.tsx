"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    src: "/interior_upscaled__9d4d425f-f159-4f3d-8060-d24dd167e724.png",
    alt: "Master Suite — The Elysian Penthouse",
    label: "The Elysian Penthouse",
    cat: "Residential · Mumbai",
  },
  {
    src: "/interior__0f2672a6-6540-4241-aca7-5f81733a6fed.png",
    alt: "Contemporary living room with ambient lighting",
    label: "Casa Lumina",
    cat: "Residential · Delhi",
  },
  {
    src: "/11.png",
    alt: "Botanical spa bathroom",
    label: "Verdant Spa Suite",
    cat: "Hospitality · Goa",
  },
  {
    src: "/14.png",
    alt: "Modern dining area with glass cabinet",
    label: "Saveur Dining",
    cat: "Restaurant · Bangalore",
  },
  {
    src: "/6.png",
    alt: "Luxury walk-in wardrobe with swing",
    label: "The Wardrobe Loft",
    cat: "Residential · Pune",
  },
  {
    src: "/03.png",
    alt: "Bespoke walk-in dressing room",
    label: "Dressing Atelier",
    cat: "Residential · Hyderabad",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".portfolio-item");
      if (!items) return;

      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section portfolio" id="portfolio" ref={sectionRef}>
      <div className="portfolio-header">
        <div>
          <div className="section-eyebrow">Our Portfolio</div>
          <h2 className="section-title">
            Selected <em>Works</em>
          </h2>
        </div>
        <a href="#" className="portfolio-link">
          View All Projects
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="portfolio-grid" ref={gridRef}>
        {PROJECTS.map((p) => (
          <div className="portfolio-item" key={p.src}>
            <Image
              src={p.src}
              alt={p.alt}
              width={1200}
              height={800}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="portfolio-overlay">
              <div>
                <span className="portfolio-cat">{p.cat}</span>
                <div className="portfolio-label">{p.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

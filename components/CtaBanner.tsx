"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-banner" id="contact" ref={sectionRef} aria-label="Call to action">
      <div className="cta-banner-bg" ref={bgRef} />
      <div className="cta-banner-overlay" />
      <div className="cta-content" ref={contentRef}>
        <div
          className="section-eyebrow"
          style={{ justifyContent: "center", color: "var(--gold)", marginBottom: "1.5rem" }}
        >
          Begin Your Journey
        </div>
        <h2 className="cta-title">
          Ready to Create Your<br />
          Dream <em>Space</em>?
        </h2>
        <p className="cta-sub">
          Schedule a complimentary consultation and discover how Elysian
          Architekts can transform your vision into extraordinary reality.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:hello@elysianarchitekts.com" className="btn-primary">
            <span>Book a Consultation</span>
          </a>
          <a
            href="tel:+91-9999-000-111"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              fontWeight: 300,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>☎</span>
            +91 9999 000 111
          </a>
        </div>
      </div>
    </section>
  );
}

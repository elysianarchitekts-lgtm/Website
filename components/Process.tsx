"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "An in-depth conversation to understand your lifestyle, aspirations, and aesthetic vision. We listen deeply before we design.",
  },
  {
    num: "02",
    title: "Concept",
    desc: "Our designers synthesize insights into mood boards, spatial concepts, and material palettes — establishing the creative direction.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Detailed architectural drawings, 3D visualizations, and bespoke specifications are developed to bring every element to life.",
  },
  {
    num: "04",
    title: "Realization",
    desc: "We meticulously oversee execution — coordinating craftsmen, suppliers, and contractors — ensuring flawless delivery.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = stepsRef.current?.querySelectorAll(".process-step");
      if (!steps) return;

      gsap.fromTo(
        steps,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section process" id="process" ref={sectionRef}>
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          How We Work
        </div>
        <h2 className="section-title">
          Our <em>Design</em> Process
        </h2>
        <p className="section-body" style={{ margin: "0 auto" }}>
          A proven, collaborative methodology refined over 15 years — ensuring
          every project exceeds expectations, beautifully.
        </p>
      </div>

      <div className="process-steps" ref={stepsRef}>
        {STEPS.map((step) => (
          <div className="process-step" key={step.num}>
            <div className="step-circle">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

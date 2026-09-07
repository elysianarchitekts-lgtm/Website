"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    text: "Elysian Architekts transformed our apartment into a masterpiece. Every material, every corner speaks of extraordinary craftsmanship. It's no longer just a home — it's an experience.",
    name: "Arjun & Priya Mehta",
    role: "Residential Client, Mumbai",
    initials: "AM",
    stars: 5,
  },
  {
    text: "Working with the Elysian team felt like a symphony — each detail played its part perfectly. Our restaurant has won three design awards since opening. The transformation was beyond imagining.",
    name: "Chef Rahul Sharma",
    role: "Restaurant Owner, Delhi",
    initials: "RS",
    stars: 5,
  },
  {
    text: "They listened to our dreams and created something far beyond what we envisioned. The attention to detail is unparalleled. Every guest who walks in is left speechless.",
    name: "Natasha & Vikram Singh",
    role: "Villa Client, Goa",
    initials: "NS",
    stars: 5,
  },
  {
    text: "Our headquarters now reflects our brand perfectly. Elysian understood not just our aesthetic vision but our culture and values. The workspace has genuinely transformed how our team feels.",
    name: "Kavya Reddy",
    role: "CEO, TechVenture Bangalore",
    initials: "KR",
    stars: 5,
  },
  {
    text: "The most professional design studio I have worked with. The timeline was respected, the budget honored, and the final result was breathtaking. I cannot recommend them highly enough.",
    name: "Siddharth Nair",
    role: "Property Developer, Pune",
    initials: "SN",
    stars: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Auto-scroll testimonials
      track.innerHTML += track.innerHTML;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section testimonials" ref={sectionRef}>
      <div className="testimonials-header">
        <div className="section-eyebrow">Client Voices</div>
        <h2 className="section-title">
          What Our Clients <em>Say</em>
        </h2>
      </div>

      <div className="testimonials-track-wrap">
        <div className="testimonials-track" ref={trackRef}>
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-stars">
                {"★".repeat(t.stars)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

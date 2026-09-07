"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <Link href="/" className="nav-logo">
        Elysian Architekts
      </Link>

      <ul className="nav-links">
        {["Studio", "Portfolio", "Services", "Process", "Journal"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        Book Consultation
      </a>
    </nav>
  );
}

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-top">
        {/* Brand */}
        <div>
          <span className="footer-brand-name">Elysian Architekts</span>
          <p className="footer-tagline">
            We craft interior environments of extraordinary beauty — spaces
            where architecture, art, and life converge in perfect harmony.
          </p>
          <div className="footer-socials">
            {[
              { label: "Instagram", icon: "IG" },
              { label: "Pinterest", icon: "PT" },
              { label: "Houzz", label2: "HZ", icon: "HZ" },
              { label: "LinkedIn", icon: "LI" },
            ].map((s) => (
              <a key={s.label} href="#" className="social-btn" aria-label={s.label}>
                <span style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <span className="footer-col-title">Studio</span>
          <ul className="footer-links">
            {["About Us", "Our Team", "Awards", "Press", "Careers"].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <span className="footer-col-title">Services</span>
          <ul className="footer-links">
            {["Residential Design", "Commercial Spaces", "Bespoke Furniture", "3D Visualization", "Consulting"].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <span className="footer-col-title">Contact</span>
          <ul className="footer-links">
            <li>
              <a href="mailto:hello@elysianarchitekts.com" style={{ lineHeight: 1.6 }}>
                hello@elysianarchitekts.com
              </a>
            </li>
            <li>
              <a href="tel:+919999000111">+91 9999 000 111</a>
            </li>
            <li>
              <a href="#" style={{ lineHeight: 1.7 }}>
                Studio 14, The Design Quarter<br />
                Bandra West, Mumbai 400050
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Elysian Architekts Pvt. Ltd. All rights reserved.
        </p>
        <ul className="footer-legal">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <li key={l}><a href="#">{l}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

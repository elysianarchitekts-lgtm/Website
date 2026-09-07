import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elysian Architekts — Luxury Interior Design Studio",
  description:
    "Award-winning interior architecture studio crafting bespoke living environments with uncompromising elegance. From concept to creation, we design spaces that transcend the ordinary.",
  keywords: "luxury interior design, bespoke architecture, premium interiors, interior design studio",
  openGraph: {
    title: "Elysian Architekts — Luxury Interior Design Studio",
    description: "Crafting bespoke living environments with uncompromising elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

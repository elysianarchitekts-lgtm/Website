import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elysianarchitekts.com"),
  title: "Elysian Architekts — Luxury Interior Design Studio",
  description:
    "Award-winning interior architecture studio crafting bespoke living environments with uncompromising elegance. From concept to creation, we design spaces that transcend the ordinary.",
  keywords: "luxury interior design, bespoke architecture, premium interiors, interior design studio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-mark.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Elysian Architekts — Luxury Interior Design Studio",
    description: "Crafting bespoke living environments with uncompromising elegance.",
    type: "website",
    images: ["/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-mark.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

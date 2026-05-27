import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pradhi Art Holdings | Nepali Contemporary Art",
  description: "Himalayan heritage meets contemporary mastery. Original artworks by Pradhi RL Rana.",
  keywords: ["Nepali Art", "Contemporary Art", "Himalayan Art", "Pradhi RL Rana", "Investment Art"],
  openGraph: {
    title: "Pradhi Art Holdings",
    description: "Luxury Nepali Contemporary Art | Investment & Corporate Collections",
    images: [{ url: "/1.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#f8f7f4] antialiased">{children}</body>
    </html>
  );
}

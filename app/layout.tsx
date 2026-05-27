import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pradhi Art Holdings | Contemporary Nepali Art",
  description: "Himalayan heritage meets contemporary mastery. Experience the art of Pradhi RL Rana.",
  keywords: ["Nepali Art", "Contemporary Art", "Himalayan Art", "Pradhi RL Rana"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-50">{children}</body>
    </html>
  );
}

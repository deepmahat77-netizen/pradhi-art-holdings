"use client";

import { motion } from "framer-motion";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8f7f4]">
      <SiteHeader />

      <section className="h-screen flex items-center justify-center text-center px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
          <h1 className="text-7xl md:text-8xl serif leading-none tracking-tight mb-8">
            HIMALAYAN SOUL.<br />TIMELESS VALUE.
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Contemporary Nepali Art | Investment • Legacy • Prestige
          </p>
        </motion.div>
      </section>

      <section id="collections" className="py-32 px-8">
        <h2 className="text-5xl serif text-center mb-20">Collections</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          {[1, 2, 3, 4].map((n) => (
            <motion.div key={n} whileHover={{ y: -15 }} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-black mb-8">
                <img src={`/${n}.jpeg`} alt={`Series ${n}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <h3 className="text-3xl serif">Series {n}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

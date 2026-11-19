"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useHomeStats } from "@/lib/hooks/use-home-stats";

export default function HeroSection() {
  const { stats } = useHomeStats();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <Image
        src="/images/hero-bg.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(14,10,4,0.88) 0%, rgba(14,10,4,0.68) 45%, rgba(14,10,4,0.94) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(217,119,6,0.13) 0%, transparent 65%)",
        }}
      />

      <div className="relative flex flex-col items-center w-full" style={{ zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass glass-sheen rounded-full px-5 py-2 mb-8 flex items-center gap-2 text-sm text-white/70"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight max-w-5xl"
        >
          Everything you need,{" "}
          <span className="gradient-text">near campus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          New university students in Sri Lanka often struggle to find safe housing, affordable food,
          and daily services near campus. UniLife brings verified local listings, campus search,
          and student reviews together for free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 bg-amber-500 text-black font-semibold px-7 py-3.5 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(217,119,6,0.45)]"
          >
            Get started
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/chat"
            className="group inline-flex items-center gap-2 glass glass-sheen rounded-full px-7 py-3.5 text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-amber-300" />
            Chat with UniBot
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {[
            { value: stats.verifiedBusinesses.toLocaleString(), label: "Verified businesses" },
            { value: "3", label: "Universities covered" },
            { value: stats.activeStudents.toLocaleString(), label: "Active students" },
            { value: "24/7", label: "UniBot chat" },
          ].map((stat) => (
            <div key={stat.label} className="glass glass-sheen rounded-2xl px-6 py-4 text-center min-w-[110px]">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs"
        style={{ zIndex: 3 }}
      >
        <span>scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

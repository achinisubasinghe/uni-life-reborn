"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, MapPin, Shield } from "lucide-react";
import { useHomeStats } from "@/lib/hooks/use-home-stats";

const features = [
  {
    icon: Shield,
    title: "Verified listings",
    description:
      "Every business is reviewed manually before appearing in the directory so details stay accurate.",
    accent: "text-amber-300",
  },
  {
    icon: Clock,
    title: "Up-to-date details",
    description:
      "Listed prices, opening hours, and availability help you avoid turning up to a closed shop.",
    accent: "text-teal-300",
  },
  {
    icon: MapPin,
    title: "Campus-centered search",
    description:
      "Results rank by distance from your university to save travel time and cost.",
    accent: "text-amber-300",
  },
  {
    icon: CheckCircle,
    title: "Built for students",
    description:
      "Free to use with no ads and no hidden charges.",
    accent: "text-orange-300",
  },
];

export default function AboutSection() {
  const { stats } = useHomeStats();

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-teal-700 top-1/2 left-[-10%]" style={{ opacity: 0.09 }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-300 text-sm font-medium tracking-widest uppercase mb-3">About UniLife</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built for the student journey
            </h2>
            <p className="text-white/55 text-lg mb-6 leading-relaxed">
              Every year, new students arrive at Sri Lankan universities with the same questions.
              Where can I find safe housing, affordable meals, and the nearest pharmacy? Most
              students rely on scattered word of mouth.
            </p>
            <p className="text-white/45 text-base leading-relaxed">
              UniLife lists verified local services for NSBM Green University, University of Colombo,
              and University of Sri Jayewardenepura. Reviewers check every business before it goes
              live, and the platform is free for students.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: stats.verifiedBusinesses.toLocaleString(), l: "Verified businesses" },
                { v: "3", l: "Universities" },
                { v: stats.activeStudents.toLocaleString(), l: "Active students" },
              ].map((s) => (
                <div key={s.l} className="glass glass-sheen rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-xs text-white/45 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass glass-sheen rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className={`glass rounded-xl p-2.5 flex-shrink-0 ${f.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Laptop, Zap, Users, Globe } from "lucide-react";

const items = [
  {
    title: "System Design",
    description: "Architecting scalable, fault-tolerant distributed systems.",
    icon: Globe,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Performance",
    description: "Optimizing Core Web Vitals and render performance.",
    icon: Zap,
    colSpan: "col-span-1",
  },
  {
    title: "Team Leadership",
    description: "Mentoring developers and driving engineering culture.",
    icon: Users,
    colSpan: "col-span-1",
  },
  {
    title: "Full Stack",
    description: "Building end-to-end type-safe applications.",
    icon: Laptop,
    colSpan: "col-span-1 md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="container mx-auto px-6 py-24 max-w-5xl">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Expertise
        </h2>
        <p className="text-zinc-400 max-w-md text-lg">
          Core competencies and technical focus areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 ${item.colSpan}`}
          >
            <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit border border-white/5 group-hover:bg-white/10 transition-colors">
              <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
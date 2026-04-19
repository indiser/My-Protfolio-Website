"use client";

import { motion } from "framer-motion";
import { Laptop, Zap, Users, Globe } from "lucide-react";

const items = [
  {
    title: "System Design",
    description:
      "Architecting scalable, fault-tolerant distributed systems built for real-world traffic.",
    icon: Globe,
    colSpan: "col-span-1 md:col-span-2",
    accent: "#c9a96e",
  },
  {
    title: "Performance",
    description:
      "Optimizing execution speed, memory usage, and algorithmic efficiency.",
    icon: Zap,
    colSpan: "col-span-1",
    accent: "#c99a6e",
  },
  {
    title: "Collaboration",
    description:
      "Working effectively within teams, contributing to open source, and shipping together.",
    icon: Users,
    colSpan: "col-span-1",
    accent: "#7ca7c9",
  },
  {
    title: "Full Stack",
    description:
      "Building complete applications from database design to polished user interfaces.",
    icon: Laptop,
    colSpan: "col-span-1 md:col-span-2",
    accent: "#9b8ec4",
  },
];

export function BentoGrid() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "rgba(201,169,110,0.6)" }}
          >
            Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-foreground/95 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Core Competencies
          </h2>
          <p className="text-muted-foreground max-w-md text-[15px] leading-relaxed">
            Technical focus areas and engineering disciplines.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative p-8 rounded-2xl transition-all duration-500 cursor-default ${item.colSpan}`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(17,17,19,0.6), rgba(14,14,17,0.4))",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${item.accent}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="mb-5 p-3 rounded-xl w-fit transition-all duration-300 group-hover:scale-105"
                style={{
                  background: `${item.accent}08`,
                  border: `1px solid ${item.accent}10`,
                }}
              >
                <item.icon
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                  style={{ color: item.accent }}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2 group-hover:text-foreground transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed group-hover:text-foreground/40 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
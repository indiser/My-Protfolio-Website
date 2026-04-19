"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "7+",
    label: "Projects Shipped",
    detail: "Open Source",
  },
  {
    value: "10+",
    label: "Technologies",
    detail: "Production-Ready",
  },
  {
    value: "99%",
    label: "Code Quality",
    detail: "Clean Architecture",
  },
  {
    value: "∞",
    label: "Curiosity",
    detail: "Always Learning",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl text-center transition-all duration-500 cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(17,17,19,0.5), rgba(14,14,17,0.3))",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,169,110,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2 tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#c9a96e",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground/70 mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] tracking-wider uppercase text-muted-foreground/50">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import ProfileUpload from "./ProfileUpload";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right warm glow */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left cold glow */}
        <div
          className="absolute -bottom-48 -left-48 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(100,120,160,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Profile Picture Upload */}
          <motion.div custom={0} variants={fadeUp}>
            <ProfileUpload size={160} />
          </motion.div>

          {/* Name */}
          <motion.div custom={1} variants={fadeUp}>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.03em] leading-[0.9]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-gradient-amber">Indiser</span>
            </h1>
          </motion.div>

          {/* Role & tagline */}
          <motion.div custom={2} variants={fadeUp} className="max-w-xl">
            <p
              className="text-lg md:text-xl font-medium tracking-wide mb-3"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(240,236,228,0.6)",
              }}
            >
              Software Engineer &amp; Builder
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(240,236,228,0.35)",
              }}
            >
              I craft high-performance software, open-source tools, and scalable
              systems. Obsessed with clean architecture, elegant code, and
              shipping products that matter.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              Open to opportunities
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
              <MapPin size={10} />
              Remote
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #c9a96e, #a8873c)",
                color: "#08080a",
              }}
            >
              <span className="relative z-10">View Projects</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #e0c992, #c9a96e)",
                }}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide text-muted-foreground rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground hover:bg-white/[0.02] transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown
              size={18}
              className="text-muted-foreground/40"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

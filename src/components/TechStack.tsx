"use client";

import { motion } from "framer-motion";

const stack = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "Flask",
  "FastAPI",
  "PyTorch",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "GraphQL",
];

export default function TechStack() {
  const doubled = [...stack, ...stack, ...stack, ...stack];

  return (
    <section id="stack" className="relative py-24 overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(201,169,110,0.02) 50%, transparent 100%)",
        }}
      />

      {/* Subtle vertical lines */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "100px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-center">
          <span
            className="text-[11px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(201,169,110,0.6)" }}
          >
            Technologies
          </span>
          <div
            className="h-px w-12 mx-auto mt-3"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)",
            }}
          />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #08080a, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, #08080a, transparent)",
          }}
        />

        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-16 pr-16"
            animate={{ x: "-50%" }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubled.map((item, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-semibold tracking-tight cursor-default transition-all duration-500 hover:text-gradient-amber"
                style={{
                  color: "rgba(240,236,228,0.12)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color =
                    "rgba(201,169,110,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    "rgba(240,236,228,0.12)";
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

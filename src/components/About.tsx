"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Zap, Brain, Database, Shield } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Building end-to-end applications with modern frameworks and clean architecture patterns.",
    accent: "#c9a96e",
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    desc: "Designing NLP pipelines, prompt engineering, and fine-tuning LLMs for real-world applications.",
    accent: "#7ca7c9",
  },
  {
    icon: Rocket,
    title: "System Architecture",
    desc: "Designing scalable, fault-tolerant distributed systems that handle production workloads.",
    accent: "#9b8ec4",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    desc: "Reducing latency, optimizing throughput, and maximizing efficiency across the stack.",
    accent: "#c99a6e",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Building ETL pipelines, data extraction tools, and automated processing systems.",
    accent: "#6ec9a9",
  },
  {
    icon: Shield,
    title: "Security & Tooling",
    desc: "Creating developer tools, security analysis systems, and automation frameworks.",
    accent: "#c96e7c",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "rgba(201,169,110,0.6)" }}
          >
            About Me
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-foreground/95 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crafting Digital
            <br />
            <span className="text-gradient-amber">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl">
            I&apos;m{" "}
            <span className="text-foreground/80 font-medium">Indiser</span> — a
            Software Engineer who builds tools that solve real problems. From
            AI-powered resume analyzers to micro-GPT fine-tuning frameworks, I
            focus on shipping software that&apos;s both powerful and elegant.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl transition-all duration-500 hover-lift cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(17,17,19,0.6), rgba(14,14,17,0.4))",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${skill.accent}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.03)";
              }}
            >
              {/* Icon */}
              <div
                className="inline-flex p-3 rounded-xl mb-5 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: `${skill.accent}08`,
                  border: `1px solid ${skill.accent}10`,
                }}
              >
                <skill.icon
                  size={22}
                  strokeWidth={1.5}
                  style={{ color: skill.accent }}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <h3 className="text-base font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed group-hover:text-foreground/40 transition-colors duration-300">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

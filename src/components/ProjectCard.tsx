"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Star, GitFork, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  stats: { stars: number; forks: number };
  index: number;
}

export default function ProjectCard({
  project,
  stats,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group outline-none h-full block"
    >
      <Link href={project.github} target="_blank" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-amber/50 rounded-2xl">
        <div className="relative h-full flex flex-col p-8 rounded-2xl overflow-hidden transition-all duration-500 bg-surface border border-white/[0.04] hover:border-amber/30 hover:bg-surface-hover hover:shadow-[0_8px_32px_-4px_rgba(201,169,110,0.1)]">
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Top gradient glow on hover */}
          <div 
            className="absolute top-0 left-0 w-full h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(201,169,110,0.1) 0%, transparent 70%)'
            }}
          />

          {/* Header Row */}
          <div className="relative z-10 flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.05] text-muted-foreground group-hover:text-amber group-hover:border-amber/20 group-hover:bg-amber/5 transition-all duration-500">
                <Github size={18} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-3 text-[12px] font-mono tracking-wide text-muted-foreground/60">
                  <span className="flex items-center gap-1.5 group-hover:text-amber-light transition-colors duration-300">
                    <Star size={12} strokeWidth={2} />
                    {stats.stars}
                  </span>
                  <span className="flex items-center gap-1.5 group-hover:text-amber-light transition-colors duration-300">
                    <GitFork size={12} strokeWidth={2} />
                    {stats.forks}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2 -mr-2 text-muted-foreground/40 group-hover:text-amber transition-colors duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transform">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 mb-auto">
            <h3 
              className="text-2xl font-bold mb-3 text-foreground/90 group-hover:text-amber-light transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            >
              {project.title}
            </h3>
            <p className="text-[14px] text-muted-foreground/80 leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.04] flex flex-wrap gap-2 group-hover:border-white/[0.08] transition-colors duration-500">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 bg-white/[0.02] text-muted-foreground/60 border border-white/[0.03] group-hover:border-amber/10 group-hover:text-amber/80 group-hover:bg-amber/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

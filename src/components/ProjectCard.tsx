'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { Star, GitFork, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
    stats: { stars: number; forks: number };
}

export default function ProjectCard({ project, stats }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group h-full"
        >
            <Link href={project.github} target="_blank" className="block h-full cursor-pointer">
                <div className="relative h-full flex flex-col p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm group-hover:bg-zinc-900/60 group-hover:shadow-2xl group-hover:shadow-black/50">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                            <span className="flex items-center gap-1">
                                <Star size={12} className="group-hover:text-emerald-400 transition-colors" />
                                {stats.stars}
                            </span>
                            <span className="flex items-center gap-1">
                                <GitFork size={12} />
                                {stats.forks}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mb-auto">
                        <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors">
                            {project.description}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

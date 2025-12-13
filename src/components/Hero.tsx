"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const
        }
    },
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export function Hero() {
    return (
        <section className="relative px-6 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden mx-auto max-w-5xl">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col items-start gap-8 z-10"
            >
                {/* Badge */}
                <motion.div variants={fadeInUp}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm transition-colors hover:bg-white/10">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-medium text-zinc-300 tracking-tight">
                            Open to new opportunities
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.div variants={fadeInUp} className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Building digital products with{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-cyan-300">
                            purpose
                        </span>{" "}
                        and{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-emerald-400 to-teal-300">
                            precision
                        </span>
                        .
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                        I'm a Senior Frontend Architect obsessed with performance, accessibility, and design systems.
                        Currently crafting pixel-perfect experiences with Next.js and Tailwind.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                    <Link
                        href="#work"
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
                    >
                        <span className="mr-2">View Projects</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />

                        {/* Inner Glow */}
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />

                    </Link>

                    <Link
                        href="https://github.com"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-400 transition-colors duration-200 rounded-lg hover:text-white hover:bg-white/5"
                    >
                        <Terminal className="w-4 h-4 mr-2" />
                        GitHub Profile
                    </Link>
                </motion.div>

                {/* Tech Stack Subtle Marquee / Grid */}
                <motion.div variants={fadeInUp} className="pt-16 w-full opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-8 items-center flex-wrap grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Just checks - icons would be better but text works for minimal v1 */}
                        <span className="text-sm font-mono text-zinc-500">NEXT.JS 15</span>
                        <span className="text-sm font-mono text-zinc-500">TAILWIND V4</span>
                        <span className="text-sm font-mono text-zinc-500">TYPESCRIPT</span>
                        <span className="text-sm font-mono text-zinc-500">FRAMER MOTION</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

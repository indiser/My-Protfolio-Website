'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Zap } from 'lucide-react';

const skills = [
    { icon: Code2, title: "Full-Stack Development", desc: "Building scalable web applications with modern frameworks", color: "from-purple-500 to-pink-500" },
    { icon: Rocket, title: "System Architecture", desc: "Designing high-performance distributed systems", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, title: "Performance Optimization", desc: "Reducing latency and improving throughput", color: "from-orange-500 to-yellow-500" }
];

export default function About() {
    return (
        <section id="about" className="relative container mx-auto px-4 py-24 md:py-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                <div className="inline-block mb-4">
                    <span className="text-sm font-mono text-purple-400 uppercase tracking-wider">About Me</span>
                    <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 to-transparent mt-2" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Crafting Digital Excellence</h2>
                <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mb-16">
                    I'm a Senior Product Engineer specializing in building <span className="text-purple-400 font-semibold">scalable systems</span> that drive business value. 
                    With expertise in full-stack development and system architecture, I help startups scale from MVP to production-ready platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative p-8 bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800/50 rounded-2xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <skill.icon className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{skill.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

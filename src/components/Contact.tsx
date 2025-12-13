'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/indiser", color: "hover:bg-purple-500/20 hover:border-purple-500/50" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/indiser", color: "hover:bg-blue-500/20 hover:border-blue-500/50" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/indiser", color: "hover:bg-cyan-500/20 hover:border-cyan-500/50" },
    { icon: Mail, label: "Email", href: "mailto:contact@indiser.dev", color: "hover:bg-pink-500/20 hover:border-pink-500/50" }
];

export default function Contact() {
    return (
        <section className="relative container mx-auto px-4 py-24 md:py-32 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <div className="inline-block mb-6">
                    <span className="text-sm font-mono text-purple-400 uppercase tracking-wider">Get In Touch</span>
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2" />
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                    Let's Build Something
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Amazing Together</span>
                </h2>
                
                <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:contact@indiser.dev"
                    className="group inline-flex items-center gap-3 px-12 py-5 text-lg font-bold text-black bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all shadow-lg shadow-purple-500/50 mb-16"
                >
                    Get In Touch
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>

                <div className="flex justify-center gap-4 flex-wrap">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl ${social.color} transition-all duration-300`}
                            aria-label={social.label}
                        >
                            <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

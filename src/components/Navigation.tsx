'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Navigation() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                >
                    Indiser
                </motion.a>

                <div className="flex items-center gap-8">
                    <a href="#work" className="text-sm font-medium hover:text-purple-400 transition-colors hidden md:block">Work</a>
                    <a href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors hidden md:block">About</a>
                    <div className="flex items-center gap-3">
                        <motion.a
                            whileHover={{ scale: 1.15, y: -2 }}
                            href="https://github.com/indiser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.15, y: -2 }}
                            href="https://linkedin.com/in/indiser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all"
                        >
                            <Linkedin size={18} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.15, y: -2 }}
                            href="mailto:contact@indiser.dev"
                            className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 text-gray-400 hover:text-pink-400 transition-all"
                        >
                            <Mail size={18} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

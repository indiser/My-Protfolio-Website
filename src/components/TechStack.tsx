'use client';

import { motion } from 'framer-motion';

const stack = [
    "Next.js 15", "TypeScript", "Python", "Node.js", "React Server Components",
    "Tailwind CSS", "Framer Motion", "PostgreSQL", "System Architecture", "GraphQL",
    "AWS", "Docker", "Redis", "FastAPI"
];

export default function TechStack() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
            
            <div className="container mx-auto px-4 mb-12 relative z-10">
                <div className="text-center">
                    <span className="text-sm font-mono text-purple-400 uppercase tracking-wider">Tech Stack</span>
                    <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2" />
                </div>
            </div>
            
            <div className="flex whitespace-nowrap relative">
                <motion.div
                    className="flex gap-12 pr-12"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
                        <span 
                            key={i} 
                            className="text-2xl md:text-3xl font-bold text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 cursor-default"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

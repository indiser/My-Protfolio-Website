'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: "5+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { value: "20+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
    { value: "99%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" },
    { value: "10+", label: "Technologies", color: "from-orange-500 to-yellow-500" }
];

export default function Stats() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group p-6 bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 text-center overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        <div className={`text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

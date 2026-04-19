'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Client Name",
        role: "CEO, Company",
        content: "Outstanding work! Delivered a scalable solution that exceeded our expectations.",
    },
    {
        name: "Client Name",
        role: "CTO, Startup",
        content: "Exceptional technical skills and great communication throughout the project.",
    },
    {
        name: "Client Name",
        role: "Product Manager",
        content: "Transformed our MVP into a production-ready platform in record time.",
    },
];

export default function Testimonials() {
    return (
        <section className="container mx-auto px-4 py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Clients Say</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-6 bg-white/5 border border-white/10 rounded-lg"
                        >
                            <Quote className="text-gray-600 mb-4" size={32} />
                            <p className="text-gray-400 mb-6 leading-relaxed">{testimonial.content}</p>
                            <div>
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

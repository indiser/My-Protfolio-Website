'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'dark';
        setIsDark(theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
}

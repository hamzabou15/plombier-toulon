'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatsCard = () => {
    const stats = [
        { value: 2850, label: 'Dépannages urgents réalisés à Cannes' },
        { value: 24, label: 'Plombiers disponibles 24h/24' },
        { value: 30, label: 'Minutes de délai moyen' },
        { value: 98, label: 'Taux de satisfaction clients' },
    ];

    return (
        <section className='py-16' id="chiffres-plomberie-cannes" aria-label="Statistiques Plombier Cannes">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-6 my-16 max-w-7xl mx-auto'>
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}
            </div>
        </section>
    );
};

const StatItem = ({ value, label }: { value: number; label: string; }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-[#3a5a40]"
            >
                {value >= 100 ? `${Math.floor(count / 10)}` : count}{value >= 100 ? '+' : ''}{label.includes('%') ? '%' : ''}
            </motion.div>
            <span className='text-lg font-medium text-center text-[#0f4c5c]'>
                {label}
            </span>
        </div>
    );
};

export default StatsCard;
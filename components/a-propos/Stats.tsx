// components/a-propos/Stats.tsx
'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatsCard = () => {
    const stats = [
        { value: 2850, label: 'Dépannages urgents réalisés à Toulon' },
        { value: 24, label: 'Plombiers disponibles 24h/24' },
        { value: 30, label: 'Minutes de délai moyen' },
        { value: 98, label: 'Taux de satisfaction clients' },
    ];

    return (
        <section className='py-16' id="chiffres-plomberie-toulon" aria-label="Statistiques Plombier Toulon">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6]">
                    Plombier Toulon en Chiffres
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    15 ans d&apos;expertise au service des habitants de Toulon et du Var
                </p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto'>
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
        <motion.div 
            ref={ref} 
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-4xl md:text-5xl font-bold text-[#0077B6]">
                {value >= 100 ? `${Math.floor(count / 10)}` : count}{value >= 100 ? '+' : ''}{label.includes('%') ? '%' : ''}
            </div>
            <span className='text-lg font-medium text-center text-gray-700'>
                {label}
            </span>
        </motion.div>
    );
};

export default StatsCard;
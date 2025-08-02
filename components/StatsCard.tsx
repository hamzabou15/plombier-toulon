'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatsCard = () => {
    const stats = [
        { value: 920, label: 'Interventions plomberie réalisées à Toulon' },
        { value: 85, label: 'Fuites d’eau détectées et réparées rapidement' },
        { value: 25, label: 'Plombiers experts qualifiés à votre service' },
        { value: 3, label: 'Quartiers et villes desservis autour de Toulon' },
    ];

    return (
        <section
            className='bg-white w-full px-16 max-sm:px-6  h-auto py-12 xl:max-w-[1300px] m-auto'
            id="chiffres-plomberie-toulon"
            aria-label="Statistiques sur les interventions de plomberie à Toulon"
        >
            <div className='flex items-start justify-between max-lg:flex-wrap max-lg:gap-y-6'>
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        isLast={index === stats.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

const StatItem = ({
    value,
    label,
    isLast,
}: {
    value: number;
    label: string;
    isLast: boolean;
}) => {
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

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
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
        <div ref={ref} className={`flex flex-col mx-auto w-[25%] items-center gap-3 px-6 py-6 ${!isLast ? 'border-l-[2px] border-[#d8d8d8] border-dashed max-lg:w-[50%] max-sm:w-[100%] max-sm:border-0' : ''}`}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className='text-[110px] leading-24 m-0 font-semibold text-[#e8e8e8] max-lg:text-[92px]'
                aria-label={`${count} ${label}`}
            >
                {value === 98 ? "98%" : count}
            </motion.h1>
            <span className='text-[18px] font-semibold text-center text-[#00B4D8] max-lg:text-base'>
                {label}
            </span>
        </div>
    );
};

export default StatsCard;

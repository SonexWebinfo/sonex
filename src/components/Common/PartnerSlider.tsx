"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
    { label: "Projects Delivered", value: 125 },
    { label: "Happy Clients", value: 95 },
    { label: "Countries Served", value: 5 },
];

const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let start = 0;
                    const duration = 1500;
                    const step = Math.max(1, Math.floor(value / (duration / 16)));

                    const timer = setInterval(() => {
                        start += step;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, 16);
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{count}+</span>;
};

const CounterSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#F4F7FF] py-16 md:py-20 dark:bg-gray-dark">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
                    {counters.map((item, index) => (
                        <div key={index}>
                            <h3 className="mb-2 text-4xl font-bold text-black dark:text-white md:text-5xl">
                                <AnimatedCounter value={item.value} />
                            </h3>
                            <p className="text-body-color dark:text-body-color-dark text-lg">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 dark:from-black/20 dark:to-black/20" />
        </section>
    );
};

export default CounterSection;

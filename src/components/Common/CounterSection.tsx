"use client";

import { useEffect, useState } from "react";

const counters = [
    { label: "Projects Delivered", value: 120 },
    { label: "Happy Clients", value: 80 },
    { label: "Countries Served", value: 10 },
];

const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}+</span>;
};

const CounterSection = () => {
    return (
        <section className="py-16 bg-primary">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                    {counters.map((item, index) => (
                        <div key={index}>
                            <h3 className="mb-2 text-4xl font-bold text-white">
                                <Counter value={item.value} />
                            </h3>
                            <p className="text-white/80">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterSection;

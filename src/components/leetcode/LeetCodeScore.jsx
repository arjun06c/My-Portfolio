import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { ArrowSquareOut, TrendUp, Target } from '@phosphor-icons/react';
import { fadeUp, viewportConfig } from '../../animations/variants';

const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => setCount(Math.floor(latest)),
            ease: "easeOut"
        });
        return () => controls.stop();
    }, [value]);

    return <span>{count}</span>;
};

const LeetCodeScore = ({ username = "arjun06c" }) => {
    const stats = {
        total: 203,
        easy: 152,
        medium: 50,
        hard: 1,
    };

    const focusAreas = [
        { label: "Sliding Window", progress: 85 },
        { label: "Two Pointers", progress: 80 },
        { label: "Binary Search", progress: 75 },
        { label: "Stack & Queue", progress: 90 },
    ];

    const totalPossible = stats.easy + stats.medium + stats.hard;
    const easyEnd = (stats.easy / totalPossible) * 100;
    const mediumEnd = easyEnd + (stats.medium / totalPossible) * 100;

    return (
        <div className="space-y-12">
            {/* Main Score UI */}
            <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Background Ring */}
                    <div className="absolute inset-0 rounded-full border-[10px] border-white/5"></div>

                    {/* Professional Conic Progress */}
                    <div
                        className="absolute inset-0 rounded-full border-[10px] border-transparent"
                        style={{
                            background: `conic-gradient(
                                #22c55e 0% ${easyEnd}%, 
                                #eab308 ${easyEnd}% ${mediumEnd}%, 
                                #ef4444 ${mediumEnd}% 100%
                            )`,
                            mask: 'radial-gradient(transparent 58%, black 60%)',
                            WebkitMask: 'radial-gradient(transparent 58%, black 60%)'
                        }}
                    ></div>

                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-white tracking-tighter">
                            <Counter value={stats.total} />+
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mt-1">Solved</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-10 w-full">
                    {[
                        { label: 'Easy', color: 'bg-[#22c55e]', count: stats.easy },
                        { label: 'Med', color: 'bg-[#eab308]', count: stats.medium },
                        { label: 'Hard', color: 'bg-[#ef4444]', count: stats.hard },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</span>
                            </div>
                            <span className="text-white font-bold">{item.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Focus Areas */}
            <div className="pt-8 border-t border-white/5">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Target size={18} className="text-accent" />
                    Top Focus Areas
                </h4>
                <div className="space-y-4">
                    {focusAreas.map((area, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-xs mb-2">
                                <span className="text-gray-400 font-medium">{area.label}</span>
                                <span className="text-accent font-bold">{area.progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${area.progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(0,210,255,0.4)]"
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-6">
                <a
                    href={`https://leetcode.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 w-full bg-accent/10 border border-accent/20 rounded-xl text-accent font-bold text-sm hover:bg-accent hover:text-dark transition-all duration-300 group"
                >
                    LeetCode Profile
                    <ArrowSquareOut size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default LeetCodeScore;

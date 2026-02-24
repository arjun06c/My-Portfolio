import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { educationData, experienceData } from '../data/about';
import PageWrapper from '../components/PageWrapper';
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    const aboutPoints = [
        "Strong foundation in Data Structures & Algorithms",
        "Experience building scalable full-stack MERN applications",
        "REST API development & authentication systems",
        "Focus on clean code and optimized architecture",
        "Passionate about solving real-world problems"
    ];

    const renderContent = () => {
        const data = activeTab === 'education' ? educationData : experienceData;

        return (
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
            >
                {data.map((item, index) => (
                    <div key={index} className="glass-card p-6 border-l-4 border-l-accent hover:border-l-accent-blue transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-accent text-xs font-bold uppercase tracking-widest">{item.Date}</span>
                            {item.percentage && <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400">Score: {item.percentage}</span>}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                            {activeTab === 'education' ? item.degree : item.role}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {activeTab === 'education' ? item.institution : item.company}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {item.details}
                        </p>
                    </div>
                ))}
            </motion.div>
        );
    };

    return (
        <PageWrapper className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                    {/* Left Side: About Intro */}
                    <motion.div variants={fadeUp} className="lg:col-span-5">
                        <h2 className="text-accent font-semibold tracking-[0.3em] uppercase text-sm mb-4">Discovery</h2>
                        <h1 className="text-5xl font-bold text-white mb-8 tracking-tight">About Me</h1>

                        <div className="glass-card p-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                            <ul className="space-y-6">
                                {aboutPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,210,255,0.8)]"></div>
                                        <p className="text-gray-300 text-lg leading-snug">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Side: Education/Experience Tabs */}
                    <motion.div variants={fadeUp} className="lg:col-span-7">
                        <div className="flex gap-8 mb-10 border-b border-white/10">
                            {['education', 'experience'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${activeTab === tab ? 'text-accent' : 'text-gray-500 hover:text-white'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {renderContent()}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default About;

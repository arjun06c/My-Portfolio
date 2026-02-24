import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FilePdf, Code } from '@phosphor-icons/react';
import PageWrapper from '../components/PageWrapper';
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants';

const Home = () => {
    return (
        <PageWrapper className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Glowing Gradient Background Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-accent/10 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse"></div>

            <motion.div
                className="container mx-auto px-6 relative z-10 pt-20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.p variants={fadeUp} className="text-accent font-semibold tracking-[0.3em] uppercase text-sm mb-4">
                        Welcome to My Portfolio
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent mb-6 tracking-tight"
                    >
                        Arjun C
                    </motion.h1>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-medium text-gray-300 mb-8"
                    >
                         <span className="text-accent">MERN Stack Developer</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
                    >
                        I build scalable, production-ready web applications
                        using the <span className="text-white font-medium">MERN stack</span> with a focus on clean architecture, performance, and user experience.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mb-16">
                        <Link to="/projects" className="btn-primary no-underline">
                            View Projects
                        </Link>
                        <a
                            href="/assets/Arjun_cv.pdf"
                            className="btn-outline flex items-center gap-2 no-underline"
                            download
                        >
                            <FilePdf size={20} />
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Authority Stats */}
                    <motion.div
                        variants={fadeUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl"
                    >
                        {[
                            { label: "DSA Problems Solved", value: "200+" },
                            { label: "Real-world Projects", value: "3+" },
                            { label: "MERN Stack Specialist", value: "High-End" }
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-6 flex flex-col items-center border-t-2 border-t-accent/30">
                                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </motion.div>
        </PageWrapper>
    );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData, statsData } from '../data/achievements';
import { certificatesData } from '../data/skills_extra';
import PageWrapper from '../components/PageWrapper';
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants';

import { Trophy, Presentation, Medal, Certificate, Calendar, ArrowUpRight } from '@phosphor-icons/react';

const StatCard = ({ stat }) => (
    <motion.div
        variants={fadeUp}
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass-card relative group overflow-hidden p-8 flex flex-col items-center justify-center text-center border-t-accent/20 border-t"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]">
            {stat.icon}
        </div>
        <div className="text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
            {stat.value}
        </div>
        <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">
            {stat.label}
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
    </motion.div>
);

const AchievementCard = ({ achievement }) => {
    const icons = {
        trophy: <Trophy size={32} />,
        presentation: <Presentation size={32} />,
        award: <Medal size={32} />
    };

    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="glass-card group p-6 flex flex-col relative border-l-2 border-l-transparent hover:border-l-accent/50 transition-all duration-300"
        >
            <div className="absolute top-4 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <Calendar size={14} className="text-accent" />
                <span className="text-accent text-[10px] font-bold uppercase tracking-wider">{achievement.year}</span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-500">
                {icons[achievement.icon]}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {achievement.title}
            </h3>

            <div className="text-accent/60 text-xs font-semibold mb-3 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {achievement.organization}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {achievement.description}
            </p>

            <button className="mt-auto flex items-center gap-2 text-xs font-bold text-white hover:text-accent transition-colors duration-300 group/btn">
                VIEW DETAILS
                <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </button>
        </motion.div>
    );
};

const CertificationCard = ({ cert }) => (
    <motion.div
        variants={fadeUp}
        whileHover={{ x: 5 }}
        className="glass-card group p-5 flex items-center gap-6 border-transparent hover:border-accent/30 transition-all duration-300"
    >
        <div className="w-14 h-14 rounded-full bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:scale-110 transition-transform duration-500">
            <Certificate size={28} className="text-accent/60 group-hover:text-accent transition-colors duration-300" />
        </div>

        <div className="flex-grow">
            <h4 className="text-white font-bold text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                {cert.title}
            </h4>
            <div className="flex items-center gap-3 mt-1.5">
                <span className="text-gray-500 text-xs font-medium">{cert.platform}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span className="text-gray-500 text-xs">{cert.year}</span>
            </div>
        </div>

        <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 text-white text-xs font-bold hover:bg-accent hover:text-dark transition-all duration-300"
        >
            VIEW CERTIFICATE
        </a>
    </motion.div>
);

const ParticleBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent/20 rounded-full"
                initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    opacity: Math.random() * 0.5
                }}
                animate={{
                    y: [null, Math.random() * 100 + "%"],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        ))}
    </div>
);

const Achievements = () => {
    return (
        <PageWrapper className="pt-32 pb-20 relative min-h-screen">
            <ParticleBackground />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Certifications</span>
                        <motion.div
                            className="h-1.5 w-32 bg-accent mx-auto mt-4 rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 128, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        Recognitions, technical events, and professional credentials that reflect my continuous learning journey.
                    </motion.p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
                >
                    {statsData.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </motion.div>

                {/* Technical Achievements */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-32"
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-[2px] w-12 bg-accent" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Technical Achievements</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievementsData.map((achievement) => (
                            <AchievementCard key={achievement.id} achievement={achievement} />
                        ))}
                    </div>
                </motion.div>

                {/* Professional Certifications */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-[2px] w-12 bg-accent" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Professional Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 max-w-4xl">
                        {certificatesData.map((cert) => (
                            <CertificationCard key={cert.id} cert={cert} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Achievements;

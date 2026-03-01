import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import LeetCodeScore from '../components/leetcode/LeetCodeScore';
import PageWrapper from '../components/PageWrapper';
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants';

const SkillCard = ({ skill }) => (
    <motion.div
        variants={fadeUp}
        whileHover={{ y: -5 }}
        className="glass-card p-6 flex items-start gap-4 hover:border-accent/40 transition-all duration-300 group"
    >
        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/1168/1168801.png' }}
            />
        </div>
        <div className="flex flex-col">
            <h4 className="text-white font-bold group-hover:text-accent transition-colors duration-300">{skill.name}</h4>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{skill.details}</p>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <PageWrapper className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-20"
                >
                    <div className="max-w-3xl">
                        <h2 className="text-accent font-semibold tracking-[0.3em] uppercase text-sm mb-4">Stack</h2>
                        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Technical Expertise</h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I specialize in building full-stack applications with the
                            <span className="text-white font-medium"> MERN stack</span>, combining
                            <span className="text-white font-medium"> robust backend logic</span> with
                            <span className="text-white font-medium"> seamless frontend experiences</span>.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Side: Skills Grid */}
                    <div className="lg:col-span-8 space-y-16">
                        {skillsData.map((category, idx) => (
                            <motion.div
                                key={idx}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                            >
                                <h3 className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-8 flex items-center gap-4">
                                    {category.category}
                                    <div className="h-[1px] flex-grow bg-white/5"></div>
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {category.skills.map((skill, sIdx) => (
                                        <SkillCard key={sIdx} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Performance & Certs */}
                    <div className="lg:col-span-4 space-y-12">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            className="glass-card p-2 border-t-accent/30 border-t-2"
                        >
                            <div className="p-6">
                                <h3 className="text-white font-bold mb-6 text-xl">Coding Performance</h3>
                                <LeetCodeScore username="arjun06c" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Skills;

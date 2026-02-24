import React from 'react';
import { motion } from 'framer-motion';
import {
    GithubLogo,
    Globe,
    ShieldCheck,
    Users,
    Lightning,
    ChartBar,
    Calendar,
    CreditCard,
    Star,
    Desktop,
    Check
} from '@phosphor-icons/react';
import { projectsData } from '../data/projects';
import PageWrapper from '../components/PageWrapper';
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants';

// Icon Map for dynamic icons in features
const IconMap = {
    ShieldCheck: <ShieldCheck size={20} className="text-accent" />,
    Users: <Users size={20} className="text-accent" />,
    Lightning: <Lightning size={20} className="text-accent" />,
    ChartBar: <ChartBar size={20} className="text-accent" />,
    Calendar: <Calendar size={20} className="text-accent" />,
    CreditCard: <CreditCard size={20} className="text-accent" />,
    Star: <Star size={20} className="text-accent" />,
    Desktop: <Desktop size={20} className="text-accent" />
};

const ProjectItem = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            variants={fadeUp}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center group relative overflow-hidden"
        >
            {/* Background Number */}
            <span className={`absolute -top-10 ${isEven ? 'left-0' : 'right-0'} text-[60px] md:text-[120px] font-bold text-white/10 font-poppins pointer-events-none select-none z-0 group-hover:text-accent/20 transition-colors duration-700`}>
                {project.number}
            </span>

            {/* Left/Right Visual Section */}
            <div className={`w-full relative z-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group overflow-hidden rounded-xl h-auto max-h-[300px] lg:max-h-[450px]">
                    {/* Spotlight Effect */}
                    <div className="absolute inset-0 bg-radial-gradient from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <motion.div
                        className="glass-card p-2 rounded-2xl border-white/5 group-hover:border-accent/30 transition-all duration-500 overflow-hidden h-full"
                        whileHover={{ y: -10 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className={`w-full flex flex-col relative z-20 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                    <span className="bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 inline-block">
                        {project.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {project.title}
                    </h2>
                    <p className="text-white/80 text-lg font-medium mb-2 leading-snug">
                        {project.intro}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.details}
                    </p>
                </div>

                {/* Impact Highlights */}
                <div>
                    <h3 className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Impact Highlights:</h3>
                    <ul className="space-y-3">
                        {project.impactHighlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                <Check size={16} className="text-accent mt-0.5" />
                                <span className="text-sm font-medium">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:scale-110 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Key Features (2 column) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="bg-accent/10 p-2 rounded-lg">
                                {IconMap[feature.icon] || <Check size={16} className="text-accent" />}
                            </div>
                            <span className="text-xs text-gray-300 font-medium">{feature.text}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2 group/btn w-full sm:w-auto"
                    >
                        <Globe size={20} />
                        <span>Live Demo</span>
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center justify-center gap-2 group/btn w-full sm:w-auto"
                    >
                        <GithubLogo size={20} />
                        <span>GitHub Code</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <PageWrapper className="pt-32 pb-20 overflow-x-hidden">
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 relative py-16 md:py-24">
                {/* Section Introduction */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-24 relative"
                >
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            Featured Projects
                        </h1>
                        <div className="w-24 h-1.5 bg-accent mb-8"></div>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            A collection of production-ready applications built with performance,
                            scalability, and <span className="text-white font-medium">user-centric design</span> in mind.
                        </p>
                    </div>

                    {/* Vertical Progress Line (subtle) */}
                    <div className="absolute left-[-2rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-gray-800 to-transparent hidden xl:block"></div>
                </motion.div>

                {/* Projects List */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="relative"
                >
                    {projectsData.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Projects;

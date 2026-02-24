import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinLogo, GithubLogo, Code, Envelope, MapPin, ArrowRight } from '@phosphor-icons/react';
import PageWrapper from '../components/PageWrapper';
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants';

const Contact = () => {
    const contactLinks = [
        {
            name: "LinkedIn",
            value: "Arjun C",
            icon: <LinkedinLogo size={24} weight="fill" />,
            href: "https://www.linkedin.com/in/arjun06c/",
            label: "Professional Network"
        },
        {
            name: "GitHub",
            value: "arjun06c",
            icon: <GithubLogo size={24} weight="fill" />,
            href: "https://github.com/arjun06c",
            label: "Open Source Code"
        },
        {
            name: "LeetCode",
            value: "arjun06c",
            icon: <Code size={24} weight="fill" />,
            href: "https://leetcode.com/u/arjun06c/",
            label: "Problem Solving"
        },
        {
            name: "Email",
            value: "arjun06c@gmail.com",
            icon: <Envelope size={24} weight="fill" />,
            href: "mailto:arjun06c@gmail.com",
            label: "Direct Communication"
        },
    ];

    return (
        <PageWrapper className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <h2 className="text-accent font-semibold tracking-[0.3em] uppercase text-sm mb-4">Availability</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Let's Connect</h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                variants={fadeUp}
                                className="glass-card p-8 group flex items-center justify-between hover:border-accent/40 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                                        {link.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{link.label}</p>
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{link.value}</h3>
                                    </div>
                                </div>
                                <ArrowRight size={20} className="text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-20 p-12 glass-card text-center border-t-2 border-t-accent/30"
                    >
                        <MapPin size={32} className="text-accent mx-auto mb-4" weight="fill" />
                        <h3 className="text-2xl font-bold text-white mb-2">Based in India</h3>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Madurai, Tamil Nadu • Remote Friendly</p>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Contact;

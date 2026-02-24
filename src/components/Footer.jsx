import React from 'react';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 mt-20 border-t border-glass-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-sm">
                                A
                            </div>
                            <span className="text-white font-bold tracking-wider">ARJUN C</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">
                            Building scalable applications with the MERN stack.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/arjun06c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <GithubLogo size={24} weight="fill" />
                        </a>
                        <a href="https://linkedin.com/in/arjun06c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <LinkedinLogo size={24} weight="fill" />
                        </a>
                        <a href="mailto:arjun@example.com" className="text-gray-400 hover:text-accent transition-colors">
                            <EnvelopeSimple size={24} weight="fill" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-widest">
                    <p>© {currentYear} Arjun C. All rights reserved.</p>
                    <p>Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

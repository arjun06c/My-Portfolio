import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

/**
 * Senior Developer Edition: Ultra-Robust Navbar
 * Solves: Overlapping, Scroll Locking, Z-Index conflicts, and mobile UX.
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
                }`}
        >
            {/* Scroll Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 z-[60]" style={{ width: `${scrollProgress}%` }}></div>

            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Brand/Logo Area */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onClick={closeMenu}
                >
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-dark font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                        A
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold tracking-wider text-lg leading-tight">ARJUN C</span>
                        <span className="text-accent text-[10px] font-semibold tracking-[0.2em] uppercase">Developer</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 glass-card py-2 px-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `
                                text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent
                                ${isActive ? 'text-accent' : 'text-gray-400'}
                            `}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 glass-card"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                </button>
            </div>

            {/* Mobile Navigation Sidebar */}
            <div
                className={`fixed inset-0 bg-dark/95 backdrop-blur-xl z-[100] transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-10 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <button
                    className="absolute top-8 right-8 text-white p-2 glass-card"
                    onClick={closeMenu}
                >
                    <X size={28} />
                </button>

                {navLinks.map((link, index) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) => `
                            text-3xl font-bold tracking-tight transition-all duration-300
                            ${isActive ? 'text-accent' : 'text-gray-500 hover:text-white'}
                        `}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={closeMenu}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </header>
    );
};

export default Navbar;

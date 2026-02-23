import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import '../styles/Navbar.css';

/**
 * Senior Developer Edition: Ultra-Robust Navbar
 * Solves: Overlapping, Scroll Locking, Z-Index conflicts, and mobile UX.
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 1. Best Practice: Scroll Locking
    // Disables background scrolling when the sidebar is active.
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                {/* Brand/Logo Area */}
                <div className="brand-info glass">
                    <Link to="/" className="brand-logo" onClick={closeMenu}>
                        <img src="/assets/my_logo.png" alt="Arjun Portfolio" />
                        <div className="brand-text">
                            <h2>Arjun C</h2>
                            <p>Portfolio</p>
                        </div>
                    </Link>
                </div>

                {/* Desktop & Mobile Navigation Links */}
                <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                </nav>

                {/* Hamburger / Close Icon */}
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
                </button>
            </div>

            {/* Professional Dark Overlay (Closes menu on click) */}
            <div
                className={`nav-overlay ${isOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>
        </header>
    );
};

export default Navbar;

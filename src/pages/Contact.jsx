import React from 'react';
import { LinkedinLogo, GithubLogo, Code, Phone, Envelope, MapPin } from '@phosphor-icons/react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact page-fade-in">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Let's Work Together</p>
            </div>

            <div className="contact-card glass">
                <div className="contact-left">
                    <div className="profile-summary">
                        <img src="/assets/my_image.png" alt="Arjun C" className="profile-img" />
                        <div className="profile-text">
                            <h3>Arjun C</h3>
                            <p>MERN Stack Developer</p>
                        </div>
                    </div>

                    <div className="contact-info">
                        <div className="info-item">
                            <Phone size={24} color="var(--accent)" />
                            <p>+91 9080846805</p>
                        </div>
                        <div className="info-item">
                            <Envelope size={24} color="var(--accent)" />
                            <p>arjun06c@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <MapPin size={24} color="var(--accent)" />
                            <p>Madurai, Tamil Nadu, India</p>
                        </div>
                    </div>
                </div>

                <div className="vertical-divider"></div>

                <div className="contact-right">
                    <div className="social-links-grid">
                        <a href="https://www.linkedin.com/in/arjun-c06/" target="_blank" rel="noreferrer" className="glass">
                            <LinkedinLogo size={24} />
                            <span>Arjun C</span>
                        </a>
                        <a href="https://github.com/arjun06c" target="_blank" rel="noreferrer" className="glass">
                            <GithubLogo size={24} />
                            <span>arjun06c</span>
                        </a>
                        <a href="https://leetcode.com/u/arjun06c/" target="_blank" rel="noreferrer" className="glass">
                            <Code size={24} />
                            <span>LeetCode</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

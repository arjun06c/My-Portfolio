import React from 'react';
import { LinkedinLogo, GithubLogo, EnvelopeSimple, Code, FilePdf } from '@phosphor-icons/react';
import '../styles/Home.css';

const Home = () => {
    return (
        <section className="home page-fade-in">
            <div className="home-container">
                <div className="home-text">
                    <p className="greeting">Hi there, I'm</p>
                    <h1>Arjun C</h1>
                    <h2 className="glitch">Full Stack Developer</h2>
                    <p className="description">
                        I build modern, high-performance web applications using the
                        <span> MERN Stack</span>. Passionate about creating seamless user experiences.
                    </p>

                    <div className="home-btns">
                        <a href="/assets/Arjun_cv.pdf" className="btn btn-primary" download>
                            <FilePdf size={20} weight="fill" />
                            Download CV
                        </a>
                        <div className="social-links-container">
                            <a href="https://linkedin.com/in/arjun06c" className="social-icon-link" target="_blank" rel="noreferrer" title="LinkedIn">
                                <LinkedinLogo size={24} />
                            </a>
                            <a href="https://github.com/arjun06c" className="social-icon-link" target="_blank" rel="noreferrer" title="GitHub">
                                <GithubLogo size={24} />
                            </a>
                            <a href="mailto:your.email@example.com" className="social-icon-link" title="Email">
                                <EnvelopeSimple size={24} />
                            </a>
                            <a href="https://leetcode.com/u/arjun06c/" className="social-icon-link" target="_blank" rel="noreferrer" title="LeetCode">
                                <Code size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="home-image">
                    <div className="image-ring">
                        <div className="image-box">
                            <img src="/assets/my_image.png" alt="Arjun C" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

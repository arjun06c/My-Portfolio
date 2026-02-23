import React, { useState } from 'react';
import { educationData, experienceData, personalInfo } from '../data/about';
import '../styles/About.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    const renderContent = () => {
        switch (activeTab) {
            case 'education':
                return (
                    <div className="education-list">
                        {educationData.map((item) => (
                            <div key={item.id} className="experience-box glass">
                                <h4>{item.Date}</h4>
                                <h3>{item.degree}</h3>
                                <div className="company-name">
                                    <span></span>
                                    <p>{item.institution}</p>
                                </div>
                                {item.percentage && <span className="edu-score">Score: {item.percentage}</span>}
                                <p>{item.details}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'experience':
                return (
                    <div className="experience-list">
                        {experienceData.map((item) => (
                            <div key={item.id} className="experience-box glass">
                                <h4>{item.Date}</h4>
                                <h3>{item.role}</h3>
                                <div className="company-name">
                                    <span></span>
                                    <p>{item.company}</p>
                                </div>
                                <p>{item.details}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'about-me':
                return (
                    <div className="my-info">
                        {personalInfo.map((item) => (
                            <div key={item.id} className="info-box glass">
                                <span>{item.key}</span>
                                <span>{item.value}</span>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="about page-fade-in">
            <div className="about-container">
                <aside className="sidebar">
                    <div className="sidebar-content">
                        <h2>Why Hire Me?</h2>
                        <p>I am a dedicated developer with a strong foundation in MERN stack and a passion for continuous learning.</p>

                        <div className="tabs">
                            <button
                                className={`tab ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}
                            >
                                Education
                            </button>
                            <button
                                className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                Experience
                            </button>
                            <button
                                className={`tab ${activeTab === 'about-me' ? 'active' : ''}`}
                                onClick={() => setActiveTab('about-me')}
                            >
                                About Me
                            </button>
                        </div>
                    </div>
                </aside>

                <div className="tab-content-container">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default About;

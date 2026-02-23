import React from 'react';
import { skillsData } from '../data/skills';
import { certificatesData } from '../data/skills_extra';
import LeetCodeStats from '../components/leetcode/LeetCodeStats';
import Certificates from '../components/Certificates';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <section className="skills-page page-fade-in">
            <div className="section-title">
                <h2>Technical Skills & Expertise</h2>
                <p>A comprehensive overview of my technical expertise, coding performance, and certifications.</p>
            </div>

            <div className="skills-main-layout">
                <div className="skills-left">
                    {/* Coding Platforms Section - Senior Dev Implementation */}
                    <div className="coding-platforms-wrapper">
                        <h3 className="category-title">Coding Performance</h3>
                        <LeetCodeStats username="arjun06c" />
                    </div>

                    {/* Technical Skills Section */}
                    <div className="technical-skills-section">
                        <h3 className="category-title">Technical Skills</h3>
                        <div className="skills-scroll-container">
                            {skillsData.map((group, index) => (
                                <div key={index} className="skill-category">
                                    <h4 className="sub-category-title">{group.category}</h4>
                                    <div className="category-grid">
                                        {group.skills.map((skill, sIndex) => (
                                            <div key={sIndex} className="skill-box glass">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/1168/1168801.png' }}
                                                />
                                                <span className="skill-name">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skills-right">
                    {/* Certifications Section */}
                    <Certificates certificates={certificatesData} />
                </div>
            </div>
        </section>
    );
};

export default Skills;

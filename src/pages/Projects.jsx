import React, { useState } from 'react';
import { CaretLeft, CaretRight, ArrowRight, GithubLogo } from '@phosphor-icons/react';
import { projectsData } from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProject = projectsData[currentIndex];

    const handleNext = (e) => {
        e.preventDefault();
        if (currentIndex < projectsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="projects-section page-fade-in">
            <div className="projects-grid">
                <div className="project-info">
                    <h3 className="project-number">{currentProject.number}</h3>
                    <h4>{currentProject.title}</h4>
                    <p>{currentProject.details}</p>

                    <div className="tech-stack">
                        {currentProject.techStack.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>

                    <hr className="divider" />

                    <div className="project-links">
                        <a href={currentProject.liveLink} target="_blank" rel="noreferrer" className="glass">
                            <ArrowRight size={24} />
                        </a>
                        <a href={currentProject.githubLink} target="_blank" rel="noreferrer" className="glass">
                            <GithubLogo size={24} />
                        </a>
                    </div>
                </div>

                <div className="carousel">
                    <div className="carousel-img-container glass">
                        <img src={currentProject.image} alt={currentProject.title} />
                    </div>

                    <div className="arrows">
                        <button
                            className={`glass ${currentIndex === 0 ? 'disabled' : ''}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            <CaretLeft size={24} />
                        </button>
                        <button
                            className={`glass ${currentIndex === projectsData.length - 1 ? 'disabled' : ''}`}
                            onClick={handleNext}
                            disabled={currentIndex === projectsData.length - 1}
                        >
                            <CaretRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

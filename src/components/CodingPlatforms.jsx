import React, { useState } from 'react';
import PlatformStats from './PlatformStats';
import { ArrowSquareOut } from '@phosphor-icons/react';

const CodingPlatforms = ({ platforms }) => {
    const [showStats, setShowStats] = useState(false);
    const [activePlatform, setActivePlatform] = useState(null);

    const toggleStats = (platform) => {
        if (activePlatform?.name === platform.name) {
            setShowStats(!showStats);
        } else {
            setActivePlatform(platform);
            setShowStats(true);
        }
    };

    return (
        <div className="coding-platforms-section">
            <h3 className="category-title">Coding Platforms</h3>
            <div className="platforms-grid">
                {platforms.map((platform, index) => (
                    <div key={index} className="platform-wrapper">
                        <div
                            className={`platform-card glass ${showStats && activePlatform?.name === platform.name ? 'active' : ''}`}
                            onClick={() => toggleStats(platform)}
                        >
                            <img src={platform.icon} alt={platform.name} className="platform-icon" />
                            <div className="platform-info">
                                <h4>{platform.name}</h4>
                                <p>{platform.stats.total} Problems Solved</p>
                            </div>
                        </div>

                        {showStats && activePlatform?.name === platform.name && (
                            <div className="stats-dropdown glass page-fade-in">
                                <PlatformStats username={platform.username || "arjun06c"} />
                                <a
                                    href={platform.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="profile-link-btn"
                                >
                                    View Profile <ArrowSquareOut size={18} />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CodingPlatforms;

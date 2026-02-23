import React, { useState, useEffect } from 'react';
import { Check } from '@phosphor-icons/react';

const PlatformStats = ({ username }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                const result = await response.json();

                if (result.status === "success") {
                    setData(result);
                } else {
                    throw new Error("User not found or API error");
                }
            } catch (err) {
                console.error("Error fetching LeetCode stats:", err);
                setError("Failed to load live stats");
                setData({
                    totalSolved: 192,
                    totalQuestions: 3850,
                    easySolved: 150,
                    totalEasy: 927,
                    mediumSolved: 41,
                    totalMedium: 2013,
                    hardSolved: 1,
                    totalHard: 910,
                    acceptanceRate: 45.5
                });
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchStats();
        }
    }, [username]);

    if (loading) return <div className="stats-loader">Loading live stats...</div>;

    const {
        easySolved, mediumSolved, hardSolved,
        totalSolved, totalQuestions,
        totalEasy, totalMedium, totalHard
    } = data;

    // SVG Circle Constants
    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    // Calculate segments
    const totalAvailable = (totalEasy || 1) + (totalMedium || 1) + (totalHard || 1);
    const easyRatio = (easySolved / (totalQuestions || 1)) * 100;
    const mediumRatio = (mediumSolved / (totalQuestions || 1)) * 100;
    const hardRatio = (hardSolved / (totalQuestions || 1)) * 100;

    // For the UI match, we'll use a single circle with colored segments
    const easyOffset = 0;
    const mediumOffset = (easySolved / totalSolved) * circumference;
    const hardOffset = ((easySolved + mediumSolved) / totalSolved) * circumference;

    return (
        <div className="platform-stats-v2">
            {error && <p className="stats-error-msg">{error}</p>}

            <div className="stats-main-card glass">
                <div className="stats-left-circle">
                    <div className="circle-container">
                        <svg viewBox="0 0 140 140" className="progress-ring">
                            {/* Background ring */}
                            <circle className="ring-bg" cx="70" cy="70" r={radius} />

                            {/* Easy Segment */}
                            <circle
                                className="ring-segment easy"
                                cx="70" cy="70" r={radius}
                                style={{
                                    strokeDasharray: `${(easySolved / totalSolved) * circumference} ${circumference}`
                                }}
                            />

                            {/* Medium Segment */}
                            <circle
                                className="ring-segment medium"
                                cx="70" cy="70" r={radius}
                                style={{
                                    strokeDasharray: `${(mediumSolved / totalSolved) * circumference} ${circumference}`,
                                    strokeDashoffset: -((easySolved / totalSolved) * circumference)
                                }}
                            />

                            {/* Hard Segment */}
                            <circle
                                className="ring-segment hard"
                                cx="70" cy="70" r={radius}
                                style={{
                                    strokeDasharray: `${(hardSolved / totalSolved) * circumference} ${circumference}`,
                                    strokeDashoffset: -(((easySolved + mediumSolved) / totalSolved) * circumference)
                                }}
                            />
                        </svg>

                        <div className="circle-text">
                            <div className="solved-count">
                                <span className="big-num">{totalSolved}</span>
                                <span className="small-num">/{totalQuestions}</span>
                            </div>
                            <div className="solved-label">
                                <Check size={14} color="#00b8a3" weight="bold" />
                                <span>Solved</span>
                            </div>
                        </div>
                    </div>
                    <div className="attempting-stats">
                        <span>15 Attempting</span>
                    </div>
                </div>

                <div className="stats-right-boxes">
                    <div className="difficulty-box glass">
                        <span className="dif-label easy">Easy</span>
                        <span className="dif-count"><strong>{easySolved}</strong>/{totalEasy}</span>
                    </div>
                    <div className="difficulty-box glass">
                        <span className="dif-label medium">Med.</span>
                        <span className="dif-count"><strong>{mediumSolved}</strong>/{totalMedium}</span>
                    </div>
                    <div className="difficulty-box glass">
                        <span className="dif-label hard">Hard</span>
                        <span className="dif-count"><strong>{hardSolved}</strong>/{totalHard}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformStats;

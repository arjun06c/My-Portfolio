import React from 'react';
import { Check } from '@phosphor-icons/react';

/**
 * CircularStats Component
 * Renders the LeetCode-style circular progress bar with segmented colors.
 */
const CircularStats = ({ totalSolved, totalQuestions, easySolved, mediumSolved, hardSolved }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    // Calculate segment offsets for accurate visualization
    const easyRatio = totalSolved > 0 ? (easySolved / totalSolved) : 0;
    const mediumRatio = totalSolved > 0 ? (mediumSolved / totalSolved) : 0;
    const hardRatio = totalSolved > 0 ? (hardSolved / totalSolved) : 0;

    return (
        <div className="circular-stats-container">
            <div className="circle-wrapper">
                <svg viewBox="0 0 140 140" className="progress-ring-v2">
                    {/* Background Track */}
                    <circle className="ring-bg-v2" cx="70" cy="70" r={radius} />

                    {/* Easy Segment (Teal) */}
                    <circle
                        className="ring-segment-v2 easy"
                        cx="70" cy="70" r={radius}
                        style={{ strokeDasharray: `${easyRatio * circumference} ${circumference}` }}
                    />

                    {/* Medium Segment (Yellow) */}
                    <circle
                        className="ring-segment-v2 medium"
                        cx="70" cy="70" r={radius}
                        style={{
                            strokeDasharray: `${mediumRatio * circumference} ${circumference}`,
                            strokeDashoffset: -(easyRatio * circumference)
                        }}
                    />

                    {/* Hard Segment (Red) */}
                    <circle
                        className="ring-segment-v2 hard"
                        cx="70" cy="70" r={radius}
                        style={{
                            strokeDasharray: `${hardRatio * circumference} ${circumference}`,
                            strokeDashoffset: -((easyRatio + mediumRatio) * circumference)
                        }}
                    />
                </svg>

                <div className="inner-text">
                    <div className="solved-headline">
                        <span className="current">{totalSolved}</span>
                        <span className="total">/{totalQuestions}</span>
                    </div>
                    <div className="label-with-icon">
                        <Check size={14} color="#00b8a3" weight="bold" />
                        <span>Solved</span>
                    </div>
                </div>
            </div>
            <div className="stats-footer-text">
                <span>15 Attempting</span>
            </div>
        </div>
    );
};

export default CircularStats;

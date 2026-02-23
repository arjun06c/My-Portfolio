import React, { useState, useEffect } from 'react';
import { ArrowSquareOut } from '@phosphor-icons/react';
import CircularStats from './CircularStats';
import './LeetCodeStats.css';

const CACHE_KEY = "leetcode_stats_data";

/**
 * LeetCodeStats Component
 * Optimized for "Instant Load" using localStorage caching.
 */
const LeetCodeStats = ({ username = "arjun06c" }) => {
    // Initialize from cache if exists for "Instant" feel
    const [data, setData] = useState(() => {
        const cached = localStorage.getItem(CACHE_KEY);
        return cached ? JSON.parse(cached) : null;
    });

    const [loading, setLoading] = useState(!data); // Only show loader if no cache
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeetCodeData = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                if (!response.ok) throw new Error("Failed to connect");

                const result = await response.json();
                if (result.status === "success") {
                    setData(result);
                    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
                    setError(null);
                }
            } catch (err) {
                console.error("Background refresh failed:", err);
                if (!data) {
                    setError("Failed to load metrics");
                    // Fallback only if we have literally nothing to show
                    setData({
                        totalSolved: 192,
                        totalQuestions: 3850,
                        easySolved: 150,
                        totalEasy: 927,
                        mediumSolved: 41,
                        totalMedium: 2013,
                        hardSolved: 1,
                        totalHard: 910
                    });
                }
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeData();
    }, [username]);

    // Only block the entire UI if it's the first time and we have NO data
    if (loading && !data) {
        return (
            <div className="leetcode-card-skeleton glass">
                <div className="loader-spinner"></div>
                <p>Initializing Stats...</p>
            </div>
        );
    }

    return (
        <div className="leetcode-main-container page-fade-in">
            <div className="leetcode-grid glass">
                {/* Left Section: Interactive Circular Progress */}
                <div className="leetcode-visuals">
                    <CircularStats
                        totalSolved={data?.totalSolved || 0}
                        totalQuestions={data?.totalQuestions || 0}
                        easySolved={data?.easySolved || 0}
                        mediumSolved={data?.mediumSolved || 0}
                        hardSolved={data?.hardSolved || 0}
                    />
                </div>

                {/* Right Section: Detailed Breakdown */}
                <div className="leetcode-details">
                    <DifficultyRow label="Easy" solved={data?.easySolved || 0} total={data?.totalEasy || 0} color="teal" />
                    <DifficultyRow label="Medium" solved={data?.mediumSolved || 0} total={data?.totalMedium || 0} color="yellow" />
                    <DifficultyRow label="Hard" solved={data?.hardSolved || 0} total={data?.totalHard || 0} color="red" />

                    <a
                        href={`https://leetcode.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-profile-btn"
                    >
                        <span>View LeetCode Profile</span>
                        <ArrowSquareOut size={18} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const DifficultyRow = ({ label, solved, total, color }) => (
    <div className={`diff-row-card glass ${color}`}>
        <span className="row-label">{label}</span>
        <div className="row-numbers">
            <span className="solved-val">{solved}</span>
            <span className="total-val">/{total}</span>
        </div>
    </div>
);

export default LeetCodeStats;

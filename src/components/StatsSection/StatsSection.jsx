import React from 'react';
import CountUp from '../CountUp/CountUp';
import './StatsSection.css';

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            value: 15000,
            suffix: '+',
            label: 'Happy Clients',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            id: 2,
            value: 98,
            suffix: '%',
            label: 'Successful Loans',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            )
        },
        {
            id: 3,
            value: 12,
            suffix: '+',
            label: 'Years Experience',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            )
        }
    ];

    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div className="stat-card" key={stat.id}>
                            <div className="stat-icon-wrapper">
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-value">
                                    <CountUp
                                        from={0}
                                        to={stat.value}
                                        separator=","
                                        direction="up"
                                        duration={1.5}
                                        className="count-up-text"
                                    />
                                    <span className="stat-suffix">{stat.suffix}</span>
                                </h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;


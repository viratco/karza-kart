import React from 'react';
import './AboutSection.css';
import LoanProcessSection from '../LoanProcessSection/LoanProcessSection';

const AboutSection = () => {
    return (
        <section className="about-section">
            {/* Top Content: Text + Illustration */}
            <div className="about-top-content">
                {/* Left Content */}
                <div className="about-content">
                    <h2 className="about-title">
                        Business Loans Made Easy
                    </h2>
                    <p className="about-description">
                        KarzaKart is your trusted partner to the best loan solutions. From personal to business loans, we simplify the journey with fast approvals, transparent processes, and personalized support. Whether you’re looking to grow your business or fulfill personal goals, KarzaKart connects you with India’s top lenders, seamlessly.
                    </p>

                    <div className="about-features">
                        {/* Feature 1 */}
                        <div className="feature-item">
                            <div className="feature-icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="14" stroke="#ffb347" strokeWidth="2" />
                                    <circle cx="16" cy="16" r="6" fill="#ffb347" />
                                    <path d="M16 2 L16 6 M16 26 L16 30 M2 16 L6 16 M26 16 L30 16" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="feature-text">
                                Our technology-driven platform is designed to provide transparency, speed, and reliability, ensuring every loan is matched to the borrower’s unique needs.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-item">
                            <div className="feature-icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="14" stroke="#a0aec0" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M16 16 L16 8" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M16 16 L22 22" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="16" cy="16" r="2" fill="#333" />
                                </svg>
                            </div>
                            <p className="feature-text">
                                From initial eligibility checks to final disbursal, we make the process faster, simpler, and smarter.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Content (Illustration) */}
                <div className="about-image-container">
                    <svg className="about-illustration" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background Elements */}
                        <circle cx="420" cy="100" r="40" fill="#ff7f6e" opacity="0.8" /> {/* Top Right Orange Circle */}
                        <circle cx="380" cy="100" r="40" fill="#2ecc71" opacity="0.8" /> {/* Top Right Green Circle */}
                        <path d="M380 100 L420 100 L420 60 A 40 40 0 0 0 380 100" fill="#ffffff" opacity="0.5" /> {/* Pie Chart Segment */}

                        <circle cx="120" cy="120" r="50" fill="#ff4433" /> {/* Top Left Red Coin */}
                        <circle cx="120" cy="120" r="40" stroke="white" strokeWidth="2" />
                        <text x="120" y="130" textAnchor="middle" fill="white" fontSize="30" fontWeight="bold">$</text>

                        {/* Abstract House */}
                        {/* Dark Side */}
                        <path d="M100 250 L200 180 L200 450 L100 450 Z" fill="#2c2f3e" />
                        {/* Light Side */}
                        <path d="M200 180 L320 250 L320 450 L200 450 Z" fill="#ffffff" stroke="#2c2f3e" strokeWidth="4" />
                        {/* Door/Window */}
                        <rect x="230" y="280" width="60" height="170" fill="#2ecc71" />

                        {/* Decorative Dots */}
                        <circle cx="400" cy="250" r="8" fill="#f4c542" />
                        <circle cx="450" cy="280" r="5" fill="#ff4433" />
                        <circle cx="430" cy="350" r="6" fill="#00cc66" />
                        <circle cx="380" cy="360" r="12" fill="#ff4433" /> {/* Red dot near house */}

                    </svg>
                </div>
            </div>

            {/* Nested Loan Process Section */}
            <LoanProcessSection />
        </section>
    );
};

export default AboutSection;

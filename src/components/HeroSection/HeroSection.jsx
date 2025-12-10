import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/hero-image.png';

const HeroSection = () => {
    return (
        <section className="hero-container">
            {/* Left Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    Get The <br />
                    Right Loan <br />
                    <span className="highlight">Right Now</span>
                </h1>
                <p className="hero-description">
                    We will help you find the loan that fits your business.
                    We are offering all kind of mortgage loan
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-video">
                        <div className="play-icon">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8L1 15L1 1L13 8Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>
                        Play Video
                    </button>
                </div>
            </div>

            {/* Right Content */}
            <div className="hero-image-container">
                <img src={heroImage} alt="Business meeting" className="hero-main-image" />

                {/* Floating Glass Card */}
                <div className="floating-card">
                    <div className="card-icon">$</div>
                    <div className="card-text">
                        <h4>Refinance</h4>
                        <p>$40400580</p>
                    </div>
                </div>

                {/* Decorative Dots */}
                <div className="decorative-dot dot-red"></div>
                <div className="decorative-dot dot-yellow"></div>
                <div className="decorative-dot dot-green"></div>
            </div>
        </section>
    );
};

export default HeroSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import './HeroSection.css';
import heroImage from '../../assets/hero-image.png';

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yCard = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yDots = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section className="hero-container" ref={containerRef}>
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
                <motion.img
                    style={{ y: yImage }}
                    src={heroImage}
                    alt="Business meeting"
                    className="hero-main-image"
                />

                {/* Floating Glass Card */}
                <motion.div
                    style={{ y: yCard }}
                    className="floating-card"
                >
                    <div className="card-icon">$</div>
                    <div className="card-text">
                        <h4>Refinance</h4>
                        <p>$40400580</p>
                    </div>
                </motion.div>

                {/* Decorative Dots */}
                <motion.div style={{ y: yDots }} className="decorative-dot dot-red"></motion.div>
                <motion.div style={{ y: yDots }} className="decorative-dot dot-yellow"></motion.div>
                <motion.div style={{ y: yDots }} className="decorative-dot dot-green"></motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

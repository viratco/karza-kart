import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                {/* Section Header */}
                <div className="services-header">
                    <h2 className="services-title">Our Services</h2>
                    <p className="services-description">
                        Have you been declined by a local Bank or Broker? We have experienced
                        team to help on complicated loans. Contact us today!
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="services-grid">
                    {/* Home Purchase Card */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#4dd4ac', stopOpacity: 0.3 }} />
                                        <stop offset="100%" style={{ stopColor: '#2dd4bf', stopOpacity: 0.6 }} />
                                    </linearGradient>
                                </defs>
                                {/* Layered geometric shapes */}
                                <rect x="15" y="25" width="35" height="35" rx="8" fill="url(#tealGradient)" />
                                <rect x="30" y="15" width="35" height="35" rx="8" fill="#2dd4bf" opacity="0.7" />
                            </svg>
                        </div>
                        <h3 className="service-card-title">Home Purchase</h3>
                        <p className="service-card-description">
                            We have hundreds of loan product to help on your home purchase. We are
                            making home buying simple and fast. Ask for fast pre-approval letter!!!
                        </p>
                    </div>

                    {/* Refinance Card */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 0.3 }} />
                                        <stop offset="100%" style={{ stopColor: '#ff4444', stopOpacity: 0.6 }} />
                                    </linearGradient>
                                </defs>
                                {/* Layered geometric shapes */}
                                <path d="M25 35 L40 20 L55 35 L55 55 L25 55 Z" fill="url(#redGradient)" />
                                <path d="M35 25 L50 10 L65 25 L65 45 L35 45 Z" fill="#ff4444" opacity="0.7" />
                            </svg>
                        </div>
                        <h3 className="service-card-title">Refinance</h3>
                        <p className="service-card-description">
                            We're offering comparative interest rates for conforming and non-conforming
                            and lite documents mortgage loans. Apply online today!
                        </p>
                    </div>

                    {/* Declined By A Lender Card */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#ffd93d', stopOpacity: 0.3 }} />
                                        <stop offset="100%" style={{ stopColor: '#ffb347', stopOpacity: 0.6 }} />
                                    </linearGradient>
                                </defs>
                                {/* Person icon with layers */}
                                <circle cx="35" cy="28" r="12" fill="url(#orangeGradient)" />
                                <path d="M20 55 C20 45 27 40 35 40 C43 40 50 45 50 55 L20 55 Z" fill="url(#orangeGradient)" />
                                <circle cx="50" cy="23" r="12" fill="#ffb347" opacity="0.7" />
                                <path d="M35 50 C35 40 42 35 50 35 C58 35 65 40 65 50 L35 50 Z" fill="#ffb347" opacity="0.7" />
                            </svg>
                        </div>
                        <h3 className="service-card-title">Declined By A Lender?</h3>
                        <p className="service-card-description">
                            Have you been declined by a local Bank or Broker? We have experienced team
                            to help on complicated loans. Contact us today!
                        </p>
                    </div>
                </div>

                {/* Service Details Button */}
                <div className="services-button-wrapper">
                    <button className="service-details-btn">Service Details</button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

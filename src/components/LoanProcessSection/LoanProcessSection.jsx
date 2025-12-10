import React from 'react';
import './LoanProcessSection.css';


import BubbleMenu from '../BubbleMenu/BubbleMenu';

const LoanProcessSection = () => {
    const steps = [
        {
            id: 1,
            title: "Easy application"
        },
        {
            id: 2,
            title: "Fast decision"
        },
        {
            id: 3,
            title: "Get Your Cash"
        },
        {
            id: 4,
            title: "Repay Your Loan"
        }
    ];

    const items = [
        {
            label: 'Apply Now',
            href: '#',
            ariaLabel: 'Apply Now',
            rotation: -8,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
        },
        {
            label: 'Eligibility',
            href: '#',
            ariaLabel: 'Eligibility',
            rotation: 8,
            hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
        },
        {
            label: 'Documents',
            href: '#',
            ariaLabel: 'Documents',
            rotation: 8,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
        },
        {
            label: 'Rates',
            href: '#',
            ariaLabel: 'Interest Rates',
            rotation: 8,
            hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
        },
        {
            label: 'Support',
            href: '#',
            ariaLabel: 'Support',
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        }
    ];

    return (
        <section className="loan-process-section">
            <div className="curved-background-wrapper">
                <div className="loan-process-container">
                    {/* Left Side - Bubble Menu */}
                    <div className="loan-process-left">
                        <BubbleMenu
                            items={items}
                            menuBg="#ffffff"
                            menuContentColor="#111111"
                            useFixedPosition={false}
                            animationEase="back.out(1.5)"
                            animationDuration={0.5}
                            staggerDelay={0.12}
                        />
                    </div>

                    {/* Right Side - Steps */}
                    <div className="loan-process-right">
                        <div className="process-header">
                            <h2 className="process-title">How our business loans work</h2>
                            <p className="process-description">
                                We've simplified the process. Apply for our business loan in minutes, without painful paperwork or waiting in queues.
                            </p>
                        </div>

                        <div className="process-steps">
                            {steps.map((step) => (
                                <div className="process-step" key={step.id}>
                                    <div className="step-number-container">
                                        <div className="step-number">{step.id}</div>
                                    </div>
                                    <div className="step-content">
                                        <h3 className="step-title">{step.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoanProcessSection;

import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" id="firstName" className="form-input" placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" id="lastName" className="form-input" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="you@example.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Comment or Message</label>
                        <textarea id="message" className="form-textarea" placeholder="Leave us a message..." rows="4"></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;

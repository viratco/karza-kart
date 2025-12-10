import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpeg';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* Column 1: Brand */}
                <div className="footer-brand-col">
                    <div className="footer-logo">
                        <img src={logo} alt="Karza Kart Logo" className="footer-logo-image" />
                        <span className="footer-logo-text">Karza Kart</span>
                    </div>
                    <p className="footer-description">
                        Contact us Karzakart and collaborate with us for making you Big dream business with our best loan services
                    </p>
                </div>

                {/* Column 2: Services */}
                <div className="footer-links-col">
                    <h4 className="footer-heading">Service</h4>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">Business Loan</a></li>
                        <li><a href="#" className="footer-link">Professional loan</a></li>
                        <li><a href="#" className="footer-link">Personal Loan</a></li>
                        <li><a href="#" className="footer-link">Home Loan</a></li>
                        <li><a href="#" className="footer-link">Loan Against Property</a></li>
                        <li><a href="#" className="footer-link">Overdraft Limit</a></li>
                    </ul>
                </div>

                {/* Column 3: Pages */}
                <div className="footer-links-col">
                    <h4 className="footer-heading">Page</h4>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">Our Service</a></li>
                        <li><a href="#" className="footer-link">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className="footer-contact-col">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span>naresh@karzakart.com</span>
                        </li>
                        <li className="contact-item">
                            <svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 1.23 0 2.44.2 3.57.57.35.13.46.52.24 1.02l-2.2 2.2z" />
                            </svg>
                            <span>+91 9654757547</span>
                        </li>
                        <li className="contact-item">
                            <svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Address: 401, 4th Floor, Satyam Cinema Building, Patel Nagar, Delhi, 110008</span>
                        </li>
                    </ul>

                    <div className="social-icons">
                        <svg className="social-icon" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <svg className="social-icon" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                        <svg className="social-icon" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>All rights reserved by Karza Kart Company, Inc. @ 2012- 2025.</p>
                <div className="footer-legal-links">
                    <a href="#" className="legal-link">Legal & Terms</a>
                    <a href="#" className="legal-link">Privacy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './TestimonialsSection.css';

import avatar1 from '../../assets/avatar_sarah.jpg';
import avatar2 from '../../assets/avatar_michael.jpg';
import avatar3 from '../../assets/avatar_emily.jpg';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Business Owner",
            avatar: avatar1,
            rating: 5,
            quote: "Karza Kart made securing a business loan incredibly smooth. Their team was supportive every step of the way, and I couldn't be happier with the service."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Entrepreneur",
            avatar: avatar2,
            rating: 5,
            quote: "The loan options Karza Kart provided were exactly what I needed for my startup. Professional, efficient, and truly customer-focused. Highly recommended!"
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Financial Consultant",
            avatar: avatar3,
            rating: 5,
            quote: "I recommend Karza Kart to all my clients. Their transparency and speed in processing loans are unmatched in the industry. A true partner in business finance."
        }
    ];

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, index) => (
            <svg key={index} className="star-icon" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ));
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <h2 className="testimonials-title">What Our Clients Say</h2>
                <p className="testimonials-subtitle">
                    Don't just take our word for it. Here is what our satisfied clients have to say about their experience with us.
                </p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <div className="testimonial-rating">
                            {renderStars(testimonial.rating)}
                        </div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-user">
                            <img src={testimonial.avatar} alt={testimonial.name} className="user-avatar" />
                            <div className="user-details">
                                <h4 className="user-name">{testimonial.name}</h4>
                                <span className="user-role">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;

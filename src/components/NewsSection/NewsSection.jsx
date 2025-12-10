import React from 'react';
import './NewsSection.css';
import newsImage1 from '../../assets/news_office_team.png';
import newsImage2 from '../../assets/news_desk_setup.jpg';
import newsImage3 from '../../assets/news_tablet_hands.jpg';

const NewsSection = () => {
    const newsItems = [
        {
            id: 1,
            image: newsImage1,
            title: "U.S. Stocks Jump On Positive Moder....",
            description: "The Dow industrials and S&P 500 rose on positive study results from another potential Covid-19 vaccine.",
            comments: 10
        },
        {
            id: 2,
            image: newsImage2,
            title: "U.S. Stocks Jump On Positive Moder....",
            description: "The Dow industrials and S&P 500 rose on positive study results from another potential Covid-19 vaccine.",
            comments: 10
        },
        {
            id: 3,
            image: newsImage3,
            title: "U.S. Stocks Jump On Positive Moder....",
            description: "The Dow industrials and S&P 500 rose on positive study results from another potential Covid-19 vaccine.",
            comments: 10
        }
    ];

    return (
        <section className="news-section">
            <div className="news-header">
                <h2 className="news-title">Latest News</h2>
            </div>

            <div className="news-grid">
                {newsItems.map((item) => (
                    <div className="news-card" key={item.id}>
                        <div className="news-image-container">
                            <img src={item.image} alt="News thumbnail" className="news-image" />
                        </div>
                        <div className="news-content">
                            <h3 className="news-card-title">{item.title}</h3>
                            <p className="news-card-description">{item.description}</p>

                            <div className="news-footer">
                                <a href="#" className="learn-more-link">Learn More</a>
                                <div className="comment-count">
                                    <svg className="comment-icon" viewBox="0 0 24 24">
                                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                                    </svg>
                                    <span>{item.comments} Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;

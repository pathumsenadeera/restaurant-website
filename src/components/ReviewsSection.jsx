import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Diner Voices</span>
          <h2 className="section-title serif-title">Unforgettable Moments Shared</h2>
          <p className="section-desc">
            Discover what culinary critics and beloved guests say about their time at AURA.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map(rev => (
            <div key={rev.id} className="review-card">
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ fill: '#ffc107', color: '#ffc107' }} />
                ))}
              </div>

              <p className="review-text">"{rev.text}"</p>

              <div className="review-author-box">
                <div className="review-avatar">{rev.avatar}</div>
                <div>
                  <h4 className="author-name">{rev.author}</h4>
                  <span className="author-role">{rev.role} • {rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

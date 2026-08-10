import React from 'react';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';
import { DINING_EXPERIENCES } from '../data/restaurantData';

export default function DiningExperiences({ onSelectExperience }) {
  return (
    <section id="experiences" className="experiences-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Bespoke Spaces</span>
          <h2 className="section-title serif-title">Curated Dining Venues & Private Vaults</h2>
          <p className="section-desc">
            Choose from oceanfront rooftop views, subterranean candlelit wine cellars, or interactive front-row chef counters.
          </p>
        </div>

        <div className="exp-grid">
          {DINING_EXPERIENCES.map((exp) => (
            <div key={exp.id} className="exp-card">
              <div className="exp-img-box">
                <img src={exp.image} alt={exp.title} className="exp-img" />
              </div>

              <div className="exp-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-sub">{exp.subtitle}</p>

                <ul className="exp-features">
                  {exp.features.map((feat, i) => (
                    <li key={i} className="exp-feature-item">
                      <CheckCircle2 size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-footer">
                  <div>
                    <span className="exp-price">{exp.price}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <Users size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {exp.capacity}
                    </div>
                  </div>

                  <button className="btn-dish-action" onClick={() => onSelectExperience(exp)}>
                    <span>Book Venue</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

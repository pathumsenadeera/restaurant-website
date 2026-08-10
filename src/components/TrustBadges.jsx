import React from 'react';
import { Leaf, Award, Wine, Sparkles } from 'lucide-react';
import { TRUST_BADGES } from '../data/restaurantData';

const iconMap = {
  Leaf: Leaf,
  Award: Award,
  Wine: Wine,
  Sparkles: Sparkles
};

export default function TrustBadges() {
  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="trust-badges-grid">
          {TRUST_BADGES.map((badge, idx) => {
            const IconComponent = iconMap[badge.icon] || Sparkles;
            return (
              <div key={idx} className="badge-card">
                <div className="badge-icon-box">
                  <IconComponent size={22} />
                </div>
                <div>
                  <h4 className="badge-title">{badge.title}</h4>
                  <p className="badge-desc">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

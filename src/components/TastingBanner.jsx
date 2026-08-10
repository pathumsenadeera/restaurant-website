import React from 'react';
import { ArrowRight, Sparkles, Utensils } from 'lucide-react';

export default function TastingBanner({ onOpenReservation }) {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-card">
          <div className="promo-bg-glow"></div>

          <div className="promo-content">
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} />
              <span>Limited Time Gastronomic Offer</span>
            </div>

            <h2 className="section-title serif-title" style={{ color: 'white', marginBottom: '16px' }}>
              Grand 7-Course Seasonal Tasting & Vintage Wine Pairing
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '28px', maxWidth: '520px' }}>
              Immerse yourself in Executive Chef Julian Vance's seasonal flagship menu featuring Miyazaki A5 Wagyu, Périgord truffle, and grand cru vintages.
            </p>

            <button className="btn-primary" onClick={onOpenReservation}>
              <span>Reserve Tasting Experience</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="promo-badge-circle">
            <span className="promo-label">SAVE UP TO</span>
            <span className="promo-discount">30%</span>
            <span className="promo-label">ON PAIRINGS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

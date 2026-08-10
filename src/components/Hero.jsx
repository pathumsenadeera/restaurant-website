import React from 'react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/restaurantData';
import ReservationWidget from './ReservationWidget';

export default function Hero({ bookingState, setBookingState, onOpenReservation }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-wrapper">
        <img src={ASSETS.heroBg} alt="AURA Fine Dining Ambiance" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="gold-badge">
            <Sparkles size={14} />
            <span>Michelin Distinction & Ocean Views</span>
          </div>

          <h1 className="hero-title serif-title">
            Culinary Flavors That <br />
            <span className="gold-gradient-text">Stay With You</span>
          </h1>

          <p className="hero-subtitle">
            Curated seasonal gastronomy. Handpicked coastal ingredients. Unforgettable dining experiences overlooking the horizon.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">
              <span>Explore Signature Menu</span>
              <ArrowRight size={18} />
            </a>

            <button className="btn-secondary" onClick={() => alert('Watch Video: Playing 4K Restaurant Ambiance Showcase')}>
              <Play size={16} style={{ fill: 'currentColor' }} />
              <span>Watch Story (4K)</span>
            </button>
          </div>
        </div>

        {/* Floating Table Reservation Search Widget */}
        <ReservationWidget 
          bookingState={bookingState}
          setBookingState={setBookingState}
          onSearch={onOpenReservation}
        />
      </div>
    </section>
  );
}

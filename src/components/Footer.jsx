import React, { useState } from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Clock, Send, Share2, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <a href="#" className="brand-logo" style={{ marginBottom: '16px' }}>
              <UtensilsCrossed className="brand-icon" size={28} />
              <div>
                <span className="brand-name">AURA</span>
                <span className="brand-sub">FINE DINING & LOUNGE</span>
              </div>
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Crafting unforgettable culinary memories along the ocean shoreline. Organic farm-to-table cuisine, master sommelier wine cellar, and panoramic candlelit dining.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" className="btn-icon" style={{ width: '38px', height: '38px' }} title="Share"><Share2 size={18} /></a>
              <a href="#" className="btn-icon" style={{ width: '38px', height: '38px' }} title="Website"><Globe size={18} /></a>
              <a href="#" className="btn-icon" style={{ width: '38px', height: '38px' }} title="Community"><MessageCircle size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#menu" className="footer-link">Signature Menu</a></li>
              <li><a href="#experiences" className="footer-link">Dining Venues</a></li>
              <li><a href="#story" className="footer-link">Chef's Philosophy</a></li>
              <li><a href="#reviews" className="footer-link">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="footer-col-title">Operating Hours</h4>
            <ul className="footer-links" style={{ fontSize: '0.875rem' }}>
              <li>
                <strong style={{ color: 'white', display: 'block' }}>Dinner Service</strong>
                <span>Tue - Sun: 5:00 PM - 11:00 PM</span>
              </li>
              <li style={{ marginTop: '8px' }}>
                <strong style={{ color: 'white', display: 'block' }}>Sunset Lounge & Drinks</strong>
                <span>Fri - Sun: 4:00 PM - 1:00 AM</span>
              </li>
              <li style={{ marginTop: '8px', color: 'var(--accent-gold-light)' }}>
                <span>Closed Mondays for private events</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Location */}
          <div>
            <h4 className="footer-col-title">Location & Insider Club</h4>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                450 Ocean Drive, Riviera Bay, CA 90210
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                +1 (800) 782-AURA
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                reservations@aurafinedining.com
              </span>
            </div>

            <form onSubmit={handleSubscribe} className="newsletter-box">
              <input 
                type="email" 
                required
                placeholder="Your email address..."
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0 16px', borderRadius: 'var(--radius-pill)' }}>
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <span style={{ fontSize: '0.775rem', color: 'var(--accent-gold-light)', marginTop: '6px', display: 'block' }}>
                ✓ Subscribed to seasonal invitations!
              </span>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AURA Fine Dining & Lounge. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Press & Awards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

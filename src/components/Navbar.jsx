import React, { useState, useEffect } from 'react';
import { Sparkles, UtensilsCrossed, ShoppingBag, Calendar, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="brand-logo">
          <UtensilsCrossed className="brand-icon" size={28} />
          <div>
            <span className="brand-name">AURA</span>
            <span className="brand-sub">FINE DINING & LOUNGE</span>
          </div>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#hero" className="nav-link active">Home</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#experiences" className="nav-link">Experiences</a></li>
          <li><a href="#story" className="nav-link">Chef's Story</a></li>
          <li><a href="#reviews" className="nav-link">Reviews</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-icon" onClick={onOpenCart} title="View Order">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge-dot">{cartCount}</span>}
          </button>

          <button className="btn-primary" onClick={onOpenReservation}>
            <Calendar size={18} />
            <span>Reserve Table</span>
          </button>

          <button 
            className="btn-icon mobile-toggle" 
            style={{ display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

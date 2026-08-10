import React, { useState, useEffect } from 'react';
import { Sparkles, UtensilsCrossed, ShoppingBag, Calendar, Menu as MenuIcon, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenReservation, theme, onToggleTheme }) {
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
          <UtensilsCrossed className="brand-icon" size={26} />
          <div>
            <span className="brand-name">AURA</span>
            <span className="brand-sub">FINE DINING & LOUNGE</span>
          </div>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#hero" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#menu" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#experiences" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experiences</a></li>
          <li><a href="#story" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Chef's Story</a></li>
          <li><a href="#reviews" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle Icon Button */}
          <button 
            className="btn-icon" 
            onClick={onToggleTheme} 
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="btn-icon" onClick={onOpenCart} title="View Order">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="badge-dot">{cartCount}</span>}
          </button>

          <button className="btn-primary nav-reserve-btn" onClick={onOpenReservation}>
            <Calendar size={18} />
            <span className="reserve-btn-text">Reserve Table</span>
          </button>

          <button 
            className="btn-icon mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

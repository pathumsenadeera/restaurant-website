import React from 'react';
import { Award, Star, Quote, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/restaurantData';

export default function ChefStory() {
  return (
    <section id="story" className="chef-section">
      <div className="container">
        <div className="chef-grid">
          <div className="chef-img-wrapper">
            <div className="chef-img-card">
              <img src={ASSETS.expChefCounter} alt="Executive Chef Julian Vance" />
            </div>

            <div className="chef-experience-badge">
              <div className="chef-exp-num">3 Stars</div>
              <div className="chef-exp-text">Michelin Guide Distinction</div>
            </div>
          </div>

          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} />
              <span>Culinary Philosophy</span>
            </div>

            <h2 className="section-title serif-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              "Food is memory preserved in flavor and art."
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Led by Executive Chef Julian Vance, AURA merges classical French technique with wild Pacific coastal botanicals. Every dish is a canvas designed to awaken the senses and evoke timeless memories.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-gold)' }}>100% Organic</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily local micro-farm harvest</div>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-gold)' }}>500+ Vintages</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Global sommelier wine cellar</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-gold)', color: '#080a0d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                JV
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: '700' }}>Julian Vance</h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Executive Culinary Director & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

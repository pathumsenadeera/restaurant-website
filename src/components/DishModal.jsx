import React from 'react';
import { X, Star, Clock, Wine, Plus, Check } from 'lucide-react';

export default function DishModal({ dish, onClose, onAddToCart }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ height: '280px', position: 'relative' }}>
          <img 
            src={dish.image} 
            alt={dish.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(17,20,28,0.95) 100%)' }}></div>
          {dish.badge && (
            <span className="dish-badge-pill" style={{ top: '20px', left: '20px' }}>{dish.badge}</span>
          )}
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h2 className="serif-title" style={{ fontSize: '1.75rem' }}>{dish.name}</h2>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-gold-light)', fontWeight: '700' }}>
              ${dish.price}
            </span>
          </div>

          <div className="dish-meta" style={{ marginBottom: '20px' }}>
            <span className="dish-rating">
              <Star size={16} style={{ fill: '#ffc107', color: '#ffc107' }} />
              {dish.rating}
            </span>
            <span>({dish.reviewsCount} reviews)</span>
            <span>•</span>
            <span><Clock size={14} style={{ display: 'inline', marginRight: '4px' }} />{dish.prepTime}</span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
            {dish.description}
          </p>

          {/* Key Ingredients */}
          {dish.ingredients && (
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '0.05em' }}>
                Key Artisanal Ingredients
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {dish.ingredients.map((ing, idx) => (
                  <span key={idx} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-pill)', fontSize: '0.825rem', border: '1px solid var(--border-light)' }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sommelier Wine Pairing */}
          {dish.winePairing && (
            <div style={{ padding: '16px', background: 'rgba(212, 175, 55, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-gold)', marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Wine size={22} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold-light)', fontWeight: '700' }}>
                  Sommelier Pairing Suggestion
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  {dish.winePairing}
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {dish.dietaryTags?.map((tag, i) => (
                <span key={i} style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>#{tag}</span>
              ))}
            </div>

            <button 
              className="btn-primary"
              onClick={() => { onAddToCart(dish); onClose(); }}
            >
              <Plus size={18} />
              <span>Add to Order (${dish.price})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

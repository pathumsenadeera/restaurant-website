import React, { useState } from 'react';
import { Star, Plus, Eye, Heart } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuHighlights({ onSelectDish, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDishes = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="dishes-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gourmet Selection</span>
          <h2 className="section-title serif-title">Signature Dishes & Cellar Pairings</h2>
          <p className="section-desc">
            Handcrafted with organic harvested produce, rare Périgord truffles, and wild-caught ocean delicacies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="dishes-grid">
          {filteredDishes.map(dish => (
            <div key={dish.id} className="dish-card" onClick={() => onSelectDish(dish)}>
              <div className="dish-img-box">
                <img src={dish.image} alt={dish.name} className="dish-img" />
                {dish.badge && (
                  <span className="dish-badge-pill">{dish.badge}</span>
                )}
                <button 
                  className="dish-fav-btn"
                  onClick={(e) => toggleFavorite(e, dish.id)}
                  title="Save to favorites"
                >
                  <Heart size={16} style={{ fill: favorites[dish.id] ? '#d4af37' : 'none', color: favorites[dish.id] ? '#d4af37' : 'white' }} />
                </button>
              </div>

              <div className="dish-content">
                <div className="dish-header">
                  <h3 className="dish-name">{dish.name}</h3>
                  <span className="dish-price">${dish.price}</span>
                </div>

                <div className="dish-meta">
                  <span className="dish-rating">
                    <Star size={14} style={{ fill: '#ffc107', color: '#ffc107' }} />
                    {dish.rating}
                  </span>
                  <span>({dish.reviewsCount} reviews)</span>
                  <span>•</span>
                  <span>{dish.prepTime}</span>
                </div>

                <p className="dish-desc">{dish.description}</p>

                <div className="dish-footer">
                  <button 
                    className="btn-dish-action" 
                    onClick={(e) => { e.stopPropagation(); onSelectDish(dish); }}
                  >
                    <Eye size={15} />
                    <span>View Recipe Details</span>
                  </button>

                  <button 
                    className="btn-primary" 
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                    onClick={(e) => { e.stopPropagation(); onAddToCart(dish); }}
                  >
                    <Plus size={16} />
                    <span>Order</span>
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

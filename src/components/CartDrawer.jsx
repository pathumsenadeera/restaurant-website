import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ cart, onClose, onUpdateQty, onRemoveItem, onClearCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      onClose();
      alert('Thank you! Your gourmet order has been transmitted to our kitchen.');
    }, 1500);
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--accent-gold)' }} />
            <h3 className="serif-title" style={{ fontSize: '1.25rem' }}>Your Dining Selection</h3>
          </div>
          <button className="btn-icon" onClick={onClose} style={{ width: '32px', height: '32px' }}>
            <X size={18} />
          </button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div style={{ textAlignment: 'center', margin: 'auto 0', textAlign: 'center', color: 'var(--text-muted)' }}>
              <ShoppingBag size={48} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Your order selection is empty.</p>
              <p style={{ fontSize: '0.825rem', marginTop: '4px' }}>Add dishes from our Signature Menu to get started.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <div className="cart-item-price">${item.price} each</div>
                </div>

                <div className="cart-qty-ctrl">
                  <button className="cart-qty-btn" onClick={() => onUpdateQty(item.id, -1)}>-</button>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', minWidth: '18px', textAlign: 'center' }}>{item.quantity}</span>
                  <button className="cart-qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                </div>

                <button 
                  onClick={() => onRemoveItem(item.id)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginLeft: '4px' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Subtotal</span>
              <span style={{ color: 'var(--accent-gold-light)' }}>${subtotal.toFixed(2)}</span>
            </div>

            <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
              Taxes and service gratuity calculated at dining checkout.
            </p>

            <button 
              className="btn-primary" 
              onClick={handleCheckout}
              disabled={orderPlaced}
              style={{ width: '100%', height: '50px' }}
            >
              {orderPlaced ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>Transmitting to Kitchen...</span>
                </>
              ) : (
                <>
                  <span>Place Gourmet Order</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

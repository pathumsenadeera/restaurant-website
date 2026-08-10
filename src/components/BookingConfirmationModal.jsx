import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Compass, CheckCircle, Sparkles } from 'lucide-react';

export default function BookingConfirmationModal({ bookingState, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'None / Casual Fine Dining',
    specialNotes: ''
  });
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedCode = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedCode);
    setStep('success');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {step === 'form' ? (
          <div style={{ padding: '36px' }}>
            <div className="gold-badge" style={{ marginBottom: '12px' }}>
              <Sparkles size={14} />
              <span>Instant Confirmation</span>
            </div>

            <h2 className="serif-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
              Complete Table Reservation
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Review your requested details and provide guest information to hold your table.
            </p>

            {/* Booking Summary Box */}
            <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '18px', marginBottom: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>Date & Time</span>
                <span style={{ fontWeight: '700', color: 'var(--accent-gold-light)' }}>{bookingState.date} @ {bookingState.time}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>Party Size</span>
                <span style={{ fontWeight: '700', color: 'white' }}>{bookingState.guests} Guest(s)</span>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>Seating Zone</span>
                <span style={{ fontWeight: '700', color: 'white' }}>{bookingState.area}</span>
              </div>
            </div>

            {/* Guest Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Alexander Hamilton"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Dining Occasion</label>
                <select 
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: '#11141c', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }}
                >
                  <option value="Casual Fine Dining">Casual Fine Dining</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business Dinner">Business Dinner</option>
                  <option value="Proposal / Romantic">Proposal / Romantic</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>Special Requests / Allergies</label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Window table preferred, shellfish allergy..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none', resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '10px', height: '52px' }}>
                Confirm Table Reservation
              </button>
            </form>
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', border: '2px solid var(--accent-gold)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle size={36} />
            </div>

            <h2 className="serif-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
              Reservation Confirmed!
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
              We look forward to hosting you, <strong style={{ color: 'white' }}>{formData.name}</strong>.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '20px', marginBottom: '28px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Booking Reference</span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-gold-light)', fontWeight: '800', letterSpacing: '0.08em', margin: '4px 0 12px' }}>
                {refCode}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {bookingState.date} at {bookingState.time} • {bookingState.guests} Guests ({bookingState.area})
              </div>
            </div>

            <button className="btn-primary" onClick={onClose} style={{ width: '100%' }}>
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

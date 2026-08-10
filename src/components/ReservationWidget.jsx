import React from 'react';
import { Calendar, Clock, Users, Compass, Search } from 'lucide-react';
import { SEATING_AREAS, TIME_SLOTS } from '../data/restaurantData';

export default function ReservationWidget({ bookingState, setBookingState, onSearch }) {
  return (
    <div className="floating-booking-widget">
      {/* Date Field */}
      <div className="booking-field">
        <span className="field-label">
          <Calendar size={14} />
          Date
        </span>
        <input 
          type="date" 
          className="field-input"
          value={bookingState.date}
          onChange={(e) => setBookingState({ ...bookingState, date: e.target.value })}
        />
      </div>

      {/* Time Field */}
      <div className="booking-field">
        <span className="field-label">
          <Clock size={14} />
          Time Slot
        </span>
        <select 
          className="field-select"
          value={bookingState.time}
          onChange={(e) => setBookingState({ ...bookingState, time: e.target.value })}
        >
          {TIME_SLOTS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Guests Field */}
      <div className="booking-field">
        <span className="field-label">
          <Users size={14} />
          Guests
        </span>
        <select 
          className="field-select"
          value={bookingState.guests}
          onChange={(e) => setBookingState({ ...bookingState, guests: Number(e.target.value) })}
        >
          <option value={1}>1 Guest (Solo Tasting)</option>
          <option value={2}>2 Guests (Couples Dining)</option>
          <option value={4}>4 Guests (Small Party)</option>
          <option value={6}>6 Guests (Private Group)</option>
          <option value={8}>8+ Guests (VIP Room)</option>
        </select>
      </div>

      {/* Seating Area Field */}
      <div className="booking-field">
        <span className="field-label">
          <Compass size={14} />
          Seating Area
        </span>
        <select 
          className="field-select"
          value={bookingState.area}
          onChange={(e) => setBookingState({ ...bookingState, area: e.target.value })}
        >
          {SEATING_AREAS.map((area) => (
            <option key={area.id} value={area.name}>{area.name}</option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button className="btn-primary" onClick={onSearch} style={{ height: '54px', padding: '0 32px' }}>
        <Search size={18} />
        <span>Find Table</span>
      </button>
    </div>
  );
}

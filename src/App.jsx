import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import MenuHighlights from './components/MenuHighlights';
import TastingBanner from './components/TastingBanner';
import DiningExperiences from './components/DiningExperiences';
import ChefStory from './components/ChefStory';
import ReviewsSection from './components/ReviewsSection';
import DishModal from './components/DishModal';
import BookingConfirmationModal from './components/BookingConfirmationModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aura-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aura-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [bookingState, setBookingState] = useState({
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '7:30 PM',
    guests: 2,
    area: 'Main Ocean Dining Room'
  });

  const [selectedDish, setSelectedDish] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleAddToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectExperience = (exp) => {
    setBookingState((prev) => ({
      ...prev,
      area: exp.title
    }));
    setIsReservationOpen(true);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-root">
      <Navbar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(false) || setIsReservationOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Hero 
        bookingState={bookingState}
        setBookingState={setBookingState}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <TrustBadges />

      <MenuHighlights 
        onSelectDish={(dish) => setSelectedDish(dish)}
        onAddToCart={handleAddToCart}
      />

      <TastingBanner 
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <DiningExperiences 
        onSelectExperience={handleSelectExperience}
      />

      <ChefStory />

      <ReviewsSection />

      <Footer />

      {/* Modals & Drawers */}
      {selectedDish && (
        <DishModal 
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {isReservationOpen && (
        <BookingConfirmationModal 
          bookingState={bookingState}
          onClose={() => setIsReservationOpen(false)}
        />
      )}

      {isCartOpen && (
        <CartDrawer 
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQty={handleUpdateQty}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      )}
    </div>
  );
}

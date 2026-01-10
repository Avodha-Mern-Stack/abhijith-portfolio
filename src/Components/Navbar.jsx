import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenu(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">MyPortfolio</div>

      {/* Hamburger */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About Me' },
          { id: 'services', label: 'Services' },
          { id: 'work', label: 'Portfolio' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <li key={item.id} onClick={() => scrollToSection(item.id)}>
            <p>{item.label}</p>
            <span
              className={`underline ${menu === item.id ? 'active' : ''
                }`}
            />
          </li>
        ))}
      </ul>

      {/* Connect Button */}
      <button
        type="button"
        className="nav-connect desktop-only"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById('contact');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Connect with me
      </button>

    </nav>
  );
};

export default Navbar;

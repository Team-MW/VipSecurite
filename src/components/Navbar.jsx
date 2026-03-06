import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'À PROPOS', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const textColor = (isHome && !scrolled && !isOpen) ? 'var(--white)' : 'var(--text)';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: isOpen ? 'white' : (scrolled || !isHome ? 'white' : 'transparent'),
        padding: '15px 0',
        boxShadow: (scrolled || !isHome) ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
        borderBottom: (scrolled || !isHome) ? '1px solid #f0f0f0' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Branding Area */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.png" alt="VIP" style={{ height: '45px' }} />
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: (isHome && !scrolled && !isOpen) ? 'var(--white)' : 'var(--primary)',
            textTransform: 'uppercase'
          }}>
            VIP <span style={{ color: (isHome && !scrolled && !isOpen) ? 'var(--white)' : 'var(--primary)' }}>SÉCURITÉ</span> 31
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <ul style={{ display: 'flex', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: textColor,
                    letterSpacing: '2px',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button - Matched to Image */}
          <a href="tel:0782585748" className="nav-contact-btn">
            <Phone size={18} fill="currentColor" />
            <span>07 82 58 57 48</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: isOpen ? 'var(--text)' : textColor,
              cursor: 'pointer'
            }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav-overlay"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="tel:0782585748" className="nav-contact-btn" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
                  <Phone size={24} fill="currentColor" />
                  07 82 58 57 48
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link.active::after {
          width: 40px;
        }
        
        .nav-contact-btn {
          background-color: var(--primary);
          color: white;
          padding: 10px 25px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(232, 74, 59, 0.2);
        }

        .nav-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(232, 74, 59, 0.3);
          background-color: #f15a4d;
        }
        
        .mobile-toggle {
          display: none !important;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: white;
          z-index: 90;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        @media (max-width: 1100px) {
          .desktop-menu ul {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .hide-mobile {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

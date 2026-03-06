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
  const textColor = (isHome && !scrolled && !isOpen) ? '#FFFFFF' : '#111827';
  const navBackground = (isHome && !scrolled && !isOpen) ? 'rgba(0,0,0,0.1)' : '#FFFFFF';

  return (
    <nav
      className="main-navbar"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.4s ease',
        backgroundColor: navBackground,
        padding: scrolled ? '10px 0' : '20px 0',
        boxShadow: (scrolled || !isHome) ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: (isHome && !scrolled) ? 'blur(5px)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="VIP" style={{ height: 'clamp(35px, 5vw, 45px)' }} />
          <div className="brand-text" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: (isHome && !scrolled && !isOpen) ? '#FFFFFF' : 'var(--primary)',
            textTransform: 'uppercase'
          }}>
            VIP SÉCURITÉ 31
          </div>
        </Link>

        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`nav-item ${location.pathname === link.href ? 'active' : ''}`}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: textColor,
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <a href="tel:0782585748" className="nav-call-button hide-mobile-tablet">
            <Phone size={16} fill="currentColor" />
            <span>07 82 58 57 48</span>
          </a>

          <button
            className="mobile-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: textColor,
              cursor: 'pointer',
              display: 'none',
              padding: '5px'
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav-item {
          position: relative;
          padding: 5px 0;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-item.active::after {
          width: 20px;
        }
        
        .nav-call-button {
          background-color: var(--primary);
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .nav-call-button:hover {
          transform: translateY(-2px);
          background-color: #f15a4d;
        }

        @media (max-width: 1024px) {
          .desktop-menu ul, .hide-mobile-tablet {
            display: none !important;
          }
          .mobile-btn {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .brand-text span {
             display: none;
          }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              zIndex: 2000
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#111' }}
            >
              <X size={35} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#111',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '2px'
                }}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:0782585748" className="nav-call-button" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
              <Phone size={20} fill="currentColor" />
              07 82 58 57 48
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

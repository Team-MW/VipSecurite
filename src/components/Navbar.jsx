import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: scrolled || isOpen ? 'var(--text)' : 'var(--white)' }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'max(1.2rem, 1.5vw)',
            fontWeight: 'bold',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Shield size={28} color="var(--primary)" fill="var(--primary)" fillOpacity={0.2} />
            VIP <span style={{ color: 'var(--primary)' }}>SÉCURITÉ</span> 31
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: scrolled ? '600' : '500',
                    color: scrolled ? 'var(--text)' : 'var(--white)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    position: 'relative'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:0782585748" className="btn btn-primary" style={{ borderRadius: '50px', padding: '0.8rem 1.5rem' }}>
            <Phone size={16} />
            <span className="hide-mobile">07 82 58 57 48</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: scrolled || isOpen ? 'var(--text)' : 'var(--white)',
              cursor: 'pointer',
              zIndex: 100
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'white',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:0782585748" className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>
                  <Phone size={24} />
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
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-toggle {
          display: none !important;
        }

        @media (max-width: 992px) {
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

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            background: 'black'
        }}>
            {/* Background Image / Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/security_hero_bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, color: 'white' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: 'var(--primary)',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        fontWeight: '600'
                    }}>
                        <ShieldCheck size={16} />
                        Sécurité Professionnelle à Toulouse
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        fontFamily: 'var(--font-heading)',
                        color: 'white'
                    }}>
                        VIP <span style={{ color: 'var(--primary)' }}>SÉCURITÉ</span> 31
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '40px',
                        opacity: 0.9,
                        maxWidth: '600px',
                        fontWeight: '300'
                    }}>
                        Agence de Sécurité, Incendie, Prévention et Services.
                        Une expertise de pointe pour votre sérénité et la protection de vos biens.
                    </p>

                    <div className="hero-btns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1rem', flex: '1 1 auto', minWidth: '200px' }}>
                            Demander un devis
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services" className="btn btn-outline" style={{
                            padding: '1.2rem 2.5rem',
                            fontSize: '1rem',
                            borderColor: 'white',
                            color: 'white',
                            flex: '1 1 auto',
                            minWidth: '200px'
                        }}>
                            Nos Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .mouse-scroll {
          width: 30px;
          height: 50px;
          border: 2px solid white;
          border-radius: 15px;
          position: relative;
        }
        .mouse-scroll::after {
          content: '';
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background-color: white;
          border-radius: 2px;
          animation: scrollAnim 1.5s infinite;
        }
        @keyframes scrollAnim {
          0% { opacity: 0; transform: translate(-50%, 0); }
          50% { opacity: 1; transform: translate(-50%, 10px); }
          100% { opacity: 0; transform: translate(-50%, 20px); }
        }
      `}</style>
        </section>
    );
};

export default Hero;

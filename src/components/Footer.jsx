import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', overflow: 'hidden' }}>
            {/* Top Footer with Branding & Contact */}
            <div style={{ padding: '80px 0 50px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>

                    {/* Brand Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                            <img src="/logo.png" alt="VIP Sécurité" style={{ height: '50px', filter: 'brightness(1.5)' }} />
                            <h3 style={{ fontSize: '1.2rem', color: 'white', fontFamily: 'var(--font-heading)' }}>
                                VIP <span style={{ color: 'var(--primary)' }}>SÉCURITÉ</span> 31
                            </h3>
                        </div>
                        <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '25px' }}>
                            Solutions de sécurité premium basées à Toulouse. Nous protégeons vos biens et vos personnes avec rigueur, discrétion et professionnalisme 24h/24 et 7j/7.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Facebook size={20} /></a>
                            <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Instagram size={20} /></a>
                            <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                            Navigation
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', background: 'var(--primary)' }}></span>
                        </h4>
                        <ul style={{ display: 'grid', gap: '15px', fontSize: '0.95rem' }}>
                            <li><Link to="/" style={{ opacity: 0.7 }}>Accueil</Link></li>
                            <li><Link to="/services" style={{ opacity: 0.7 }}>Nos Services</Link></li>
                            <li><Link to="/about" style={{ opacity: 0.7 }}>À Propos</Link></li>
                            <li><Link to="/contact" style={{ opacity: 0.7 }}>Contact & Devis</Link></li>
                            <li><a href="#" style={{ opacity: 0.7 }}>Mentions Légales</a></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                            Nos Métiers
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', background: 'var(--primary)' }}></span>
                        </h4>
                        <ul style={{ display: 'grid', gap: '15px', fontSize: '0.95rem' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.7 }}>
                                <ShieldCheck size={16} color="var(--primary)" /> Gardiennage et Surveillance
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.7 }}>
                                <ShieldCheck size={16} color="var(--primary)" /> Sécurité Incendie SSIAP
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.7 }}>
                                <ShieldCheck size={16} color="var(--primary)" /> Agent Cynophile (Maitre Chien)
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.7 }}>
                                <ShieldCheck size={16} color="var(--primary)" /> Intervention sur Alarme
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                            Contact Direct
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', background: 'var(--primary)' }}></span>
                        </h4>
                        <div style={{ display: 'grid', gap: '20px', fontSize: '0.95rem' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <MapPin size={22} color="var(--primary)" />
                                <span style={{ opacity: 0.7 }}>239 Route de Saint-Simon<br />31100 Toulouse</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <Phone size={22} color="var(--primary)" />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <a href="tel:0782585748" style={{ fontWeight: 'bold' }}>07 82 58 57 48</a>
                                    <a href="tel:0698579727" style={{ fontWeight: 'bold' }}>06 98 57 97 27</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <Mail size={22} color="var(--primary)" />
                                <a href="mailto:contact@vipsecurite31.com" style={{ opacity: 0.7 }}>contact@vipsecurite31.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div style={{ padding: '30px 0', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>
                        &copy; {new Date().getFullYear()} VIP SÉCURITÉ 31. Tous droits réservés.
                    </p>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ShieldCheck size={16} /> Certifié CNAPS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

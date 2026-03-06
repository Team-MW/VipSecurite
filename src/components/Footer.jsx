import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white' }}>VIP SÉCURITÉ 31</h3>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                            Solutions de sécurité premium pour les entreprises et les particuliers à Toulouse et dans toute l'Occitanie.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '0.9rem' }}>Lien Rapides</h4>
                        <ul style={{ display: 'grid', gap: '10px', fontSize: '0.9rem', opacity: 0.7 }}>
                            <li><a href="#home">Accueil</a></li>
                            <li><a href="#services">Nos Services</a></li>
                            <li><a href="#about">À Propos</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '0.9rem' }}>Services</h4>
                        <ul style={{ display: 'grid', gap: '10px', fontSize: '0.9rem', opacity: 0.7 }}>
                            <li>Gardiennage</li>
                            <li>Sécurité Incendie</li>
                            <li>Agent Cynophile</li>
                            <li>Télésurveillance</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '0.9rem' }}>Contact</h4>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7, display: 'grid', gap: '5px' }}>
                            <p>239 Route de Saint-Simon</p>
                            <p>31100 Toulouse</p>
                            <p>07 82 58 57 48</p>
                            <p>contact@vipsecurite31.com</p>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '20px',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    opacity: 0.5
                }}>
                    <p>&copy; {new Date().getFullYear()} VIP SÉCURITÉ 31. Tous droits réservés. Réalisé avec excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

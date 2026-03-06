import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Contactez-nous</h2>
                    <p>Une question ? Un besoin urgent ? Nos équipes sont à votre écoute.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '50px',
                    marginTop: '50px'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Téléphone</h4>
                                    <p style={{ fontWeight: 'bold' }}>07 82 58 57 48</p>
                                    <p style={{ fontWeight: 'bold' }}>06 98 57 97 27</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Email</h4>
                                    <p style={{ fontWeight: 'bold' }}>CONTACT@VIPSECURITE31.COM</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Adresse</h4>
                                    <p style={{ fontWeight: 'bold' }}>239 ROUTE DE SAINT-SIMON</p>
                                    <p style={{ fontWeight: 'bold' }}>31100 TOULOUSE</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Horaires</h4>
                                    <p style={{ fontWeight: 'bold' }}>Disponibilité 24h/24 - 7j/7</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'white',
                            padding: '40px',
                            borderRadius: '12px',
                            boxShadow: 'var(--shadow)'
                        }}
                    >
                        <form style={{ display: 'grid', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <input type="text" placeholder="Nom" style={inputStyle} required />
                                <input type="email" placeholder="Email" style={inputStyle} required />
                            </div>
                            <input type="text" placeholder="Sujet" style={inputStyle} required />
                            <textarea placeholder="Votre message" rows="5" style={inputStyle} required></textarea>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease'
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container grid-responsive" style={{ gap: '60px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        width: '100%',
                        height: '500px',
                        backgroundColor: '#eee',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow)'
                    }}>
                        {/* Re-using a generated image or just a color block for now */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url("https://images.unsplash.com/photo-1541873676947-9ea5d8a31346?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")', // Stock image of security/tech
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        padding: '30px',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: 'var(--shadow)'
                    }}>
                        <span style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1 }}>10+</span>
                        <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Années d'Expérience</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '25px', lineHeight: 1.2 }}>Expertise & <br /><span style={{ color: 'var(--primary)' }}>Savoir-Faire</span> Professionnel</h2>
                    <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        VIP SÉCURITÉ 31 est une agence de sécurité basée à Toulouse, dédiée à la protection optimale des personnes et des biens.
                    </p>
                    <p style={{ marginBottom: '40px' }}>
                        Nous intervenons sur toute l'Occitanie pour offrir des services de gardiennage, de surveillance et de sécurité incendie. Nos agents sont rigoureusement sélectionnés et formés aux dernières technologies de sécurité.
                    </p>

                    <div style={{ display: 'grid', gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ color: 'var(--primary)' }}><Target size={24} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Notre Mission</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Garantir un environnement sûr et serein pour nos clients grâce à une vigilance de chaque instant.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ color: 'var(--primary)' }}><Users size={24} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Équipes Qualifiées</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Agents certifiés CNAPS, SSIAP et conducteurs cynophiles expérimentés.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ color: 'var(--primary)' }}><Award size={24} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Discrétion Totale</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Un service professionnel reposant sur la confidentialité et le respect de la vie privée.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

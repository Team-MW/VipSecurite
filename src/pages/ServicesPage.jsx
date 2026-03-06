import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

const ServicesPage = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>Services de Sécurité et Gardiennage | VIP SÉCURITÉ 31 Toulouse</title>
                <meta name="description" content="Découvrez nos prestations de sécurité sur mesure à Toulouse : agent de sécurité incendie SSIAP, gardiennage de chantier, agent cynophile et intervention rapide sur alarme. Expertise 24/7." />
                <meta name="keywords" content="sécurité toulouse, gardiennage haute-garonne, ssiap 1 toulouse, agent cynophile 31, surveillance chantier, intervention alarme" />
                <link rel="canonical" href="https://vipsecurite31.com/services" />
            </Helmet>

            <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Nos Solutions de <span style={{ color: 'var(--primary)' }}>Protection</span></h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                    Nous mettons à votre disposition une expertise reconnue dans tous les domaines de la sécurité privée.
                    De la prévention à l'intervention, VIP SÉCURITÉ 31 est votre garant de sérénité.
                </p>
            </div>

            <Services />

            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <motion.div
                            style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}
                            whileHover={{ borderColor: 'var(--primary)' }}
                        >
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Sécurité Événementielle</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Protection de vos foires, salons, concerts et soirées privées avec des agents formés à l'accueil et à la gestion de foule.</p>
                        </motion.div>
                        <motion.div
                            style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}
                            whileHover={{ borderColor: 'var(--primary)' }}
                        >
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Rondes et Surveillance</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Circuits de vérification programmés ou aléatoires pour dissuader toute tentative d'intrusion ou de dégradation.</p>
                        </motion.div>
                        <motion.div
                            style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}
                            whileHover={{ borderColor: 'var(--primary)' }}
                        >
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Audit de Sécurité</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Analyse de vos points vulnérables et recommandations stratégiques pour renforcer la sécurité de vos locaux.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    );
};

export default ServicesPage;

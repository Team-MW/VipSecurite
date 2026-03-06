import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>Qui sommes-nous ? | VIP SÉCURITÉ 31 - Expertise Sécurité Toulouse</title>
                <meta name="description" content="Découvrez l'histoire de VIP SÉCURITÉ 31, nos valeurs d'excellence, de discrétion et de réactivité. Plus de 10 ans d'expérience au service de votre sécurité à Toulouse." />
            </Helmet>

            <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Votre Expertise <span style={{ color: 'var(--primary)' }}>Sûreté</span></h1>
            </div>

            <About />

            <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Nos Engagements</h2>
                            <ul style={{ display: 'grid', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>01.</div>
                                    <p><strong>Rigueur & Professionnalisme :</strong> Chaque agent est rigoureusement sélectionné pour ses compétences et son éthique.</p>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>02.</div>
                                    <p><strong>Technologie de pointe :</strong> Nous utilisons les derniers outils de contrôle et de surveillance pour une efficacité maximale.</p>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>03.</div>
                                    <p><strong>Réactivité 24/7 :</strong> Une ligne directe pour nos clients et une capacité d'intervention ultrarapide.</p>
                                </li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '50px', borderRadius: '15px' }}>
                            <h3 style={{ marginBottom: '20px', color: 'white' }}>Certifications & Agréments</h3>
                            <p style={{ opacity: 0.8, marginBottom: '20px' }}>
                                VIP SÉCURITÉ 31 opère en totale conformité avec la réglementation en vigueur (CNAPS).
                                Tous nos agents détiennent les agréments obligatoires pour l'exercice de leurs fonctions.
                            </p>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>AGRÉMENT CNAPS : N°AUT-31-XXXXXXXX</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    );
};

export default AboutPage;

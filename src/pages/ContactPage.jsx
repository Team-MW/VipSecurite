import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>Contact | VIP SÉCURITÉ 31 - Devis gratuit Sécurité</title>
                <meta name="description" content="Contactez VIP SÉCURITÉ 31 pour un devis gratuit. Intervention 24/7 à Toulouse pour tous vos besoins en gardiennage et sécurité." />
            </Helmet>
            <Contact />
            <FAQ />
        </div>
    );
};

export default ContactPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>VIP SÉCURITÉ 31 | Agence de Sécurité et Gardiennage à Toulouse</title>
                <meta name="description" content="Agence de sécurité VIP SÉCURITÉ 31 à Toulouse. Professionnels du gardiennage, sécurité incendie SSIAP, et protection des biens. Devis gratuit sous 24h. Intervention 24/7." />
                <meta name="keywords" content="sécurité toulouse, agence sécurité 31, gardiennage toulouse, ssiap 31, intervention rapide, agent sécurité événementiel" />
                <link rel="canonical" href="https://vipsecurite31.com/" />
            </Helmet>
            <Hero />
            <Services />
            <Features />
            <Reviews />
        </>
    );
};

export default Home;

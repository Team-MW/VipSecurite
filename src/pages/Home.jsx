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
                <title>Accueil | VIP SÉCURITÉ 31 - Excellence en Sécurité Toulouse</title>
                <meta name="description" content="VIP SÉCURITÉ 31 : Votre partenaire premium pour la sécurité, le gardiennage et la prévention incendie à Toulouse 31100. Disponibilité 24/7." />
            </Helmet>
            <Hero />
            <Services />
            <Features />
            <Reviews />
        </>
    );
};

export default Home;

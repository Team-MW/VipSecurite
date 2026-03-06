import React from 'react';
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <Helmet>
                <title>Mentions Légales | VIP SÉCURITÉ 31</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="container" style={{ maxWidth: '900px', lineHeight: '1.8' }}>
                <h1 style={{ marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>Mentions <span style={{ color: 'var(--primary)' }}>Légales</span></h1>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>1. Présentation du site</h2>
                    <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
                    <p><strong>Propriétaire :</strong> VIP SÉCURITÉ 31</p>
                    <p><strong>Adresse :</strong> 239 Route de Saint-Simon, 31100 Toulouse</p>
                    <p><strong>Téléphone :</strong> 07 82 58 57 48</p>
                    <p><strong>Numéro d'agrément CNAPS :</strong> [À remplir - ex: AUT-031-XXXXXXXX]</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>2. Conditions générales d’utilisation du site</h2>
                    <p>L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>3. Propriété intellectuelle et contrefaçons</h2>
                    <p>VIP SÉCURITÉ 31 est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
                    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : VIP SÉCURITÉ 31.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>4. Limitations de responsabilité</h2>
                    <p>VIP SÉCURITÉ 31 ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>5. Gestion des données personnelles</h2>
                    <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;

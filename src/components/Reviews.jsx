import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Jean Dupont",
        company: "SARL Immobilier Toulouse",
        text: "Une équipe professionnelle et discrète. Nous faisons appel à VIP Sécurité 31 pour nos chantiers et nous sommes pleinement satisfaits.",
        rating: 5
    },
    {
        name: "Marie Laurent",
        company: "Organisatrice d'Événements",
        text: "Sécurité irréprochable lors de notre dernier festival. Les agents sont courtois et très vigilants. Je recommande vivement.",
        rating: 5
    },
    {
        name: "Thomas Bernard",
        company: "Particulier",
        text: "Intervention rapide suite à un déclenchement d'alarme. Un service de proximité qui fait la différence.",
        rating: 5
    }
];

const Reviews = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Avis Clients</h2>
                    <p>La satisfaction de nos clients est notre meilleure carte de visite.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                }}>
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '40px',
                                borderRadius: '15px',
                                backgroundColor: 'var(--surface)',
                                position: 'relative',
                                boxShadow: 'var(--shadow)'
                            }}
                        >
                            <Quote style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }} size={40} />
                            <div style={{ display: 'flex', gap: '5px', marginBottom: '15px', color: '#FFB800' }}>
                                {[...Array(rev.rating)].map((_, index) => (
                                    <Star key={index} size={18} fill="#FFB800" />
                                ))}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.8' }}>"{rev.text}"</p>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '2px' }}>{rev.name}</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

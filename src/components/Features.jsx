import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Zap, Award } from 'lucide-react';

const values = [
    {
        icon: <Clock size={32} />,
        title: "Disponibilité 24h/24",
        desc: "Nos équipes interviennent de jour comme de nuit, tous les jours de l'année."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Agents Certifiés",
        desc: "Tous nos collaborateurs possèdent les cartes professionnelles et diplômes requis."
    },
    {
        icon: <Zap size={32} />,
        title: "Réactivité Immédiate",
        desc: "Une intervention rapide en cas d'alerte ou de besoin urgent sur site."
    },
    {
        icon: <Award size={32} />,
        title: "Service Sur Mesure",
        desc: "Une étude personnalisée pour chaque client et chaque configuration de site."
    }
];

const Features = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '40px'
                }}>
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '20px',
                                display: 'inline-flex',
                                padding: '15px',
                                borderRadius: '12px',
                                background: 'rgba(232, 74, 59, 0.1)'
                            }}>
                                {val.icon}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'white' }}>{val.title}</h3>
                            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, UserCheck, BellRing } from 'lucide-react';

const services = [
    {
        title: 'Prévention et Sécurité',
        description: 'Surveillance statique ou mobile pour protéger vos établissements, chantiers ou événements.',
        icon: <Shield size={40} />,
        color: '#E63946'
    },
    {
        title: 'Sécurité Incendie',
        description: 'Prévention des risques incendie, maintenance des équipements et évacuation (SSIAP 1, 2, 3).',
        icon: <Flame size={40} />,
        color: '#457B9D'
    },
    {
        title: 'Sécurité Cynophile',
        description: 'Agents de sécurité conducteurs de chiens pour une dissuasion et une détection accrue.',
        icon: <UserCheck size={40} />,
        color: '#1D3557'
    },
    {
        title: 'Intervention sur Alarme',
        description: 'Réactivité maximale en cas de déclenchement d\'alarme pour une levée de doute immédiate.',
        icon: <BellRing size={40} />,
        color: '#E63946'
    }
];

const Services = () => {
    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Nos Services</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Une gamme complète de solutions de sécurité adaptées à vos besoins spécifiques,
                        opérées par des professionnels qualifiés.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ translateY: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'white',
                                padding: '40px 30px',
                                borderRadius: '8px',
                                boxShadow: 'var(--shadow)',
                                textAlign: 'center',
                                borderBottom: `4px solid ${service.color}`
                            }}
                        >
                            <div style={{
                                color: service.color,
                                marginBottom: '20px',
                                display: 'inline-block',
                                background: `${service.color}10`,
                                padding: '20px',
                                borderRadius: '50%'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

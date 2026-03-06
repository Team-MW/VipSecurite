import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, HelpCircle } from 'lucide-react';

const faqItems = [
    {
        category: "Services & Expertise",
        q: "Quels types de sites pouvez-vous sécuriser à Toulouse ?",
        a: "Nous intervenons sur une grande diversité de sites en Occitanie : chantiers, entrepôts logistiques, immeubles de bureaux, centres commerciaux, et sites industriels. Nous adaptons nos dispositifs de sécurité (statique, mobile ou cynophile) selon les spécificités de chaque lieu."
    },
    {
        category: "Réglementation",
        q: "Vos agents sont-ils tous détenteurs de la carte professionnelle ?",
        a: "Absolument. Conformément à la législation du CNAPS, 100% de nos agents de sécurité sont détenteurs d'une carte professionnelle en cours de validité. Ils suivent régulièrement des formations de recyclage pour garantir un niveau de compétence optimal (MAC, SSIAP, Secourisme)."
    },
    {
        category: "Urgence & Réactivité",
        q: "En combien de temps pouvez-vous déployer un agent en cas d'urgence ?",
        a: "Grâce à notre implantation locale forte à Toulouse (31100), nous faisons preuve d'une réactivité exceptionnelle. Pour une mise en place urgente ou une levée de doute, nous pouvons mobiliser des effectifs sous des délais très courts, 24h/24 et 7j/7."
    },
    {
        category: "Technique",
        q: "Proposez-vous des solutions de sécurité connectées ?",
        a: "Oui, nous intégrons le facteur technologique à l'humain. Nos agents peuvent être équipés de dispositifs de pointage en temps réel (PTI) et nous travaillons en synergie avec vos systèmes de vidéosurveillance et d'alarme pour une protection à 360°."
    },
    {
        category: "Devis",
        q: "L'étude de mon projet de sécurité est-elle payante ?",
        a: "Non, nous réalisons systématiquement un audit gracieux de vos besoins. Un expert se déplace si nécessaire sur votre site pour évaluer les points de vulnérabilité et vous proposer une solution technique et financière sur mesure sous 24h."
    }
];

const FAQ = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '100px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>

                    {/* Left Side: Info */}
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--primary)',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            fontSize: '0.9rem',
                            letterSpacing: '1px'
                        }}>
                            <HelpCircle size={20} />
                            CENTRE D'ASSISTANCE
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '30px', lineHeight: '1.2' }}>
                            Questions <span style={{ color: 'var(--primary)' }}>Fréquentes</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
                            Besoin de précisions sur nos interventions ou sur la réglementation de la sécurité privée ? Retrouvez les réponses à vos questions les plus courantes.
                        </p>
                        <div style={{
                            padding: '30px',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            borderLeft: '5px solid var(--primary)',
                            boxShadow: 'var(--shadow)'
                        }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Une question spécifique ?</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Nos conseillers sont disponibles 24h/24 pour vous répondre personnellement.</p>
                            <a href="tel:0782585748" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                Appelez-nous <ShieldCheck size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Accordion */}
                    <div style={{ display: 'grid', gap: '15px' }}>
                        {faqItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={false}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: activeIdx === i ? '0 10px 30px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.02)',
                                    border: activeIdx === i ? '1px solid #eee' : '1px solid transparent',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <button
                                    onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                                    style={{
                                        width: '100%',
                                        padding: '25px 30px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                            {item.category}
                                        </span>
                                        <span style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.95rem',
                                            color: activeIdx === i ? 'var(--primary)' : 'var(--text)',
                                            transition: 'color 0.3s ease'
                                        }}>
                                            {item.q}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeIdx === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ color: activeIdx === i ? 'var(--primary)' : '#ccc' }}
                                    >
                                        <ChevronDown size={24} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIdx === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div style={{
                                                padding: '0 30px 30px',
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.8',
                                                fontSize: '0.95rem',
                                                borderTop: '1px solid #f9f9f9',
                                                paddingTop: '20px'
                                            }}>
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;

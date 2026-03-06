import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
    {
        q: "Quels sont les types de gardiennage que vous proposez ?",
        a: "Nous proposons du gardiennage statique, des rondes de surveillance, du gardiennage événementiel et de la surveillance de chantiers à Toulouse et en région Occitanie."
    },
    {
        q: "Vos agents sont-ils formés à la sécurité incendie ?",
        a: "Oui, nous disposons d'agents certifiés SSIAP 1, 2 et 3, spécialisés dans la prévention des risques incendie et l'assistance aux personnes."
    },
    {
        q: "Quelle est votre zone d'intervention ?",
        a: "Basés à Toulouse (31100), nous intervenons principalement sur toute la Haute-Garonne et les départements limitrophes de l'Occitanie."
    },
    {
        q: "Proposez-vous des services avec chiens ?",
        a: "Absolument. Nos agents conducteurs de chiens (sécurité cynophile) interviennent pour des missions de haute sécurité et de dissuasion."
    },
    {
        q: "Comment obtenir un devis ?",
        a: "Vous pouvez nous contacter directement par téléphone au 07 82 58 57 48 ou via notre formulaire de contact. Nous réalisons une étude gratuite de vos besoins sous 24h."
    }
];

const FAQ = () => {
    const [activeIdx, setActiveIdx] = useState(null);

    const toggle = (idx) => {
        setActiveIdx(activeIdx === idx ? null : idx);
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-title">
                    <h2>FAQ</h2>
                    <p>Questions fréquentes sur nos services de sécurité et gardiennage.</p>
                </div>

                <div style={{ marginTop: '40px', display: 'grid', gap: '15px' }}>
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                style={{
                                    width: '100%',
                                    padding: '20px 25px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.9rem',
                                    color: 'var(--text)'
                                }}
                            >
                                {item.q}
                                {activeIdx === i ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} />}
                            </button>

                            <AnimatePresence>
                                {activeIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 25px 25px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

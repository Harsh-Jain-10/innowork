import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

const ICONS = [
  '🏙️', '📡', '🎓', '🤖', '🔄', '☁️',
  '🖥️', '⚡', '💾', '🏗️', '🌐', '📊', '🔒'
];

export default function Solutions() {
  const solutions = configData.solutions;
  const [active, setActive] = useState(null);

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)' }} id="solutions-page-view">

      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fafc 60%, #eef6fd 100%)',
        padding: '7rem 0 5rem 0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #09619f 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal variant="fade-down">
            <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Enterprise Architecture
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1.25rem', letterSpacing: '-1px' }}>
              IT Solutions Portfolio
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '660px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Explore INNOWORQ's <strong>{solutions.length} official solution configurations</strong> designed to support
              hybrid cloud setups, datacenter management, and perimeter security networks.
            </p>

            {/* Quick-count badges */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Solutions', value: solutions.length },
                { label: 'Industries Covered', value: 9 },
                { label: 'SLA Tiers', value: 3 },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.9rem 1.75rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-blue)', lineHeight: 1 }}>{b.value}+</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.3rem', letterSpacing: '0.5px' }}>{b.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <StaggerContainer
            stagger={0.07}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="solutions-grid"
          >
            {solutions.map((sol, index) => (
              <StaggerItem key={sol.name} variant="fade-up">
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(9,97,159,0.1)', borderColor: 'var(--brand-blue)' }}
                  transition={{ duration: 0.28 }}
                  onClick={() => setActive(active === index ? null : index)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: active === index ? '1.5px solid var(--brand-blue)' : '1px solid #e2e8f0',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                    height: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="solution-card"
                >
                  {/* Top shimmer line on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: 'linear-gradient(90deg, var(--brand-blue), #3b9ad9)',
                      transformOrigin: 'left'
                    }}
                  />

                  {/* Icon + Code row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        width: '46px', height: '46px',
                        backgroundColor: 'rgba(9,97,159,0.07)',
                        borderRadius: '10px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.4rem'
                      }}
                    >
                      {ICONS[index] || '⚙️'}
                    </motion.div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--brand-blue)',
                      fontWeight: 700,
                      backgroundColor: 'rgba(9,97,159,0.07)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      fontFamily: 'monospace'
                    }}>
                      SOL-{(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1.1rem', fontWeight: 800, margin: 0, lineHeight: '1.3' }}>
                    {sol.name}
                  </h4>

                  <AnimatePresence>
                    {active === index ? (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', margin: 0 }}
                      >
                        {sol.desc}
                      </motion.p>
                    ) : (
                      <p style={{ fontSize: '0.87rem', color: 'var(--text-light-secondary)', lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {sol.desc}
                      </p>
                    )}
                  </AnimatePresence>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
                    {active === index ? '▲ Collapse' : '▼ Read more'}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Footer */}
      <ScrollReveal variant="fade-up">
        <section style={{ backgroundColor: '#f1f5f9', padding: '5rem 0', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '1rem' }}>
              Looking for a Specific Solution?
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Our solutions team can tailor configurations to your enterprise's exact infrastructure requirements and industry compliance needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/support-desk" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                Raise a Requirements Ticket
              </Link>
              <Link to="/partner-registration" className="btn btn-secondary" style={{ padding: '0.85rem 2rem' }}>
                Explore Partnership
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 1024px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .solutions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

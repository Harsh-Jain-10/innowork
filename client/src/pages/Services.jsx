import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

export default function Services() {
  const location = useLocation();
  const services = configData.services;

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)' }} id="services-page-view">

      {/* ── Hero Header — matches all other inner pages ── */}
      <section style={{
        background: 'linear-gradient(140deg, #f0f7ff 0%, #f8fafc 60%, #eef6fd 100%)',
        padding: '7rem 0 5rem',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, #09619f 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />

        {/* Floating blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '5%', right: '8%',
            width: 340, height: 340, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,97,159,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal variant="fade-down">
            <span style={{
              color: 'var(--brand-blue)', fontWeight: 700,
              fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '2px',
            }}>
              Capabilities Index
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
              color: 'var(--text-light-primary)', marginTop: '0.75rem',
              marginBottom: '1.25rem', letterSpacing: '-1px',
              fontFamily: 'var(--font-heading)',
            }}>
              IT Infrastructure &amp; Managed Services
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '660px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
              INNOWORQ operates standard SLA support frameworks across{' '}
              <strong>{services.length} key service lines</strong>, maintaining
              continuous availability of enterprise assets globally.
            </p>

            {/* Quick-count badges */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Service Lines', value: services.length },
                { label: 'SLA Tiers', value: 3 },
                { label: 'Countries Served', value: configData.stats.countries },
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
                    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-blue)', lineHeight: 1 }}>{b.value}+</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.3rem', letterSpacing: '0.5px' }}>
                    {b.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Stack ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {services.map((srv, idx) => (
              <ScrollReveal
                key={srv.id}
                variant={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={0.05}
                duration={0.7}
              >
                <motion.div
                  id={srv.id}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(9,97,159,0.07)', borderColor: 'rgba(9,97,159,0.25)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    padding: '3rem',
                    scrollMarginTop: '100px',
                    position: 'relative',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                    transition: 'border-color 0.3s ease',
                  }}
                  className="services-detail-card"
                >
                  {/* Ghost number */}
                  <div style={{
                    position: 'absolute', top: '2rem', right: '3rem',
                    fontSize: '4.5rem', fontWeight: 900,
                    color: 'rgba(9,97,159,0.04)', lineHeight: 1,
                    userSelect: 'none', pointerEvents: 'none',
                    fontFamily: 'var(--font-heading)',
                  }}>
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>

                  <div style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
                    {/* Accent bar + label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '3px', height: '18px', borderRadius: '2px', backgroundColor: 'var(--brand-blue)' }} />
                      <span style={{ color: 'var(--brand-blue)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Service Line {(idx + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <h3 style={{
                      color: 'var(--text-light-primary)',
                      fontSize: '1.65rem', fontWeight: 800,
                      marginBottom: '1.25rem', letterSpacing: '-0.5px',
                      fontFamily: 'var(--font-heading)',
                    }}>
                      {srv.name}
                    </h3>

                    <p style={{ fontSize: '1rem', color: 'var(--text-light-secondary)', lineHeight: '1.75', marginBottom: '2rem' }}>
                      {srv.desc}
                    </p>

                    {/* Technical details */}
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem',
                    }} className="service-details-grid">
                      <div>
                        <h5 style={{ color: 'var(--text-light-primary)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Service Standards
                        </h5>
                        <ul style={{ paddingLeft: '1.1rem', fontSize: '0.84rem', color: 'var(--text-light-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem', lineHeight: 1.6 }}>
                          <li>ISO 9001:2015 process compliance</li>
                          <li>Standardized escalation matrices</li>
                          <li>Direct access to certified technical managers</li>
                        </ul>
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--text-light-primary)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Operational Scope
                        </h5>
                        <ul style={{ paddingLeft: '1.1rem', fontSize: '0.84rem', color: 'var(--text-light-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem', lineHeight: 1.6 }}>
                          <li>24×7 Noida operations support desk</li>
                          <li>Onsite engineering dispatch availability</li>
                          <li>Multi-vendor support frameworks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .services-detail-card { padding: 2rem !important; }
          .service-details-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}

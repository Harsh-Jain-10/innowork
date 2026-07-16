import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem, CountUp } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

const SECTOR_ICONS = {
  'BFSI': '🏦',
  'Healthcare': '🏥',
  'Government': '🏛️',
  'Public Sector': '🏛️',
  'Telecom': '📡',
  'Telecoms': '📡',
  'Manufacturing': '🏭',
  'Retail': '🛒',
  'Education': '🎓',
  'Smart Cities': '🌆',
  'IT/ITeS': '💻',
  'Infrastructure': '🏗️',
  'Cloud': '☁️',
};

function getIcon(name) {
  for (const [key, icon] of Object.entries(SECTOR_ICONS)) {
    if (name.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return '🔧';
}

export default function Industries() {
  const industries = configData.industries;

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)' }} id="industries-page-view">

      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(140deg, #f0f7ff 0%, #f8fafc 60%, #eef6fd 100%)',
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
              Domain Alignments
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1.25rem', letterSpacing: '-1px' }}>
              Industries We Serve
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '660px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
              INNOWORQ designs SLA architectures customized to the operational demands of{' '}
              <strong>{industries.length} key industry segments</strong>, from critical banking
              infrastructure to smart city deployments and telecom networks.
            </p>
          </ScrollReveal>

          {/* Quick stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: 'flex', justifyContent: 'center', gap: '2rem',
              marginTop: '3.5rem', flexWrap: 'wrap'
            }}
          >
            {[
              { value: configData.stats.clients,    label: 'Enterprise Clients' },
              { value: configData.stats.devices,    label: 'Devices Managed' },
              { value: configData.stats.countries,  label: 'Countries Active' },
            ].map((s, i) => (
              <div key={i} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1rem 2rem',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--brand-blue)', lineHeight: 1 }}>
                  <CountUp target={s.value} />
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light-secondary)', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.3rem', letterSpacing: '0.5px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <StaggerContainer
            stagger={0.09}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="industries-grid"
          >
            {industries.map((ind, index) => (
              <StaggerItem key={ind.name} variant="fade-up">
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(9,97,159,0.1)', borderColor: 'var(--brand-blue)' }}
                  transition={{ duration: 0.28 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  className="industry-card"
                >
                  {/* Left accent bar on hover */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
                      background: 'linear-gradient(180deg, var(--brand-blue), #3b9ad9)',
                      transformOrigin: 'top'
                    }}
                  />

                  {/* Icon + Number */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        width: '48px', height: '48px',
                        backgroundColor: 'rgba(9,97,159,0.07)',
                        borderRadius: '10px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem'
                      }}
                    >
                      {getIcon(ind.name)}
                    </motion.div>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700,
                      color: 'var(--brand-blue)',
                      backgroundColor: 'rgba(9,97,159,0.07)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontFamily: 'monospace'
                    }}>
                      IND-{(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
                    {ind.name}
                  </h4>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', margin: 0 }}>
                    {ind.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal variant="fade-up">
        <section style={{ backgroundColor: '#f1f5f9', padding: '5rem 0', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '1rem' }}>
              Your Industry, Our Expertise
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              We can tailor our SLA support frameworks to match your sector's regulatory, compliance, and uptime requirements precisely.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/support-desk" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                Open Support Ticket
              </Link>
              <Link to="/solutions" className="btn btn-secondary" style={{ padding: '0.85rem 2rem' }}>
                Browse Solutions
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 1024px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

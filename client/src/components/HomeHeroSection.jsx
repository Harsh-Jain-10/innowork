import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_CARDS = [
  {
    id: 'cloud',
    title: 'Cloud & Hybrid IT',
    highlightText: 'cloud & hybrid IT',
    badge: 'Multi-Cloud Strategy',
    desc: 'Hybrid cloud operations, seamless AWS/Azure migrations, and virtualization management.',
    link: '/services#hco-cloud-services'
  },
  {
    id: 'datacenter',
    title: 'Datacenter Management',
    highlightText: 'managed infrastructure',
    badge: 'High Availability',
    desc: 'Continuous server maintenance, SAN storage allocation, and hypervisor administration.',
    link: '/services#it-datacenter-management'
  },
  {
    id: 'noc',
    title: '24×7 NOC Monitoring',
    highlightText: '24×7 NOC monitoring',
    badge: 'Always On SLA',
    desc: '24×7×365 remote network monitoring, alarm handling, and real-time incident triage.',
    link: '/services#noc-services'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Systems',
    highlightText: 'cybersecurity resilience',
    badge: 'Zero-Trust Security',
    desc: 'Perimeter defense, next-gen firewalls, VLAN zoning, and strict compliance controls.',
    link: '/services#third-party-maintenance'
  }
];

export default function HomeHeroSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const activeCard = HERO_CARDS[activeCardIndex];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '82vh',
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 0 3.5rem 0'
      }}
      id="hero-enterprise-section"
    >
      {/* Abstract Background Elements (Dot Grid & Radial Glow) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(9, 97, 159, 0.35) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 75%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Badge & Dynamic Heading */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(9, 97, 159, 0.25)',
                color: '#38bdf8',
                padding: '0.4rem 1.1rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                boxShadow: '0 0 15px rgba(9, 97, 159, 0.2)'
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8', display: 'inline-block' }} />
              CUSTOM ENTERPRISE IT SOLUTIONS
            </span>
          </motion.div>

          {/* Main Hero Dynamic Title */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4.8vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: 0
            }}
          >
            Your tech partner for creating sustainable business value through{' '}
            <span style={{ display: 'inline-block', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeCard.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    color: '#38bdf8',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(56, 189, 248, 0.4)',
                    textUnderlineOffset: '6px'
                  }}
                >
                  {activeCard.highlightText}
                </motion.span>
              </AnimatePresence>
            </span>
            .
          </h1>

        </div>

        {/* Interactive Brights.io Hero Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem'
          }}
          className="hero-brights-grid"
        >
          {HERO_CARDS.map((card, idx) => {
            const isActive = activeCardIndex === idx;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActiveCardIndex(idx)}
                onClick={() => setActiveCardIndex(idx)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  backgroundColor: isActive ? 'var(--brand-blue)' : 'rgba(15, 23, 42, 0.65)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isActive ? '0 16px 36px rgba(9, 97, 159, 0.35)' : '0 4px 16px rgba(0, 0, 0, 0.2)',
                  padding: '1.75rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '210px',
                  position: 'relative'
                }}
                whileHover={{ y: -4 }}
              >
                <div>
                  {/* Active Card Badge */}
                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '50px',
                            display: 'inline-block',
                            marginBottom: '0.85rem',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {card.badge}
                        </span>
                        <p
                          style={{
                            fontSize: '0.86rem',
                            color: '#e0f2fe',
                            lineHeight: '1.5',
                            marginBottom: '1rem'
                          }}
                        >
                          {card.desc}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: 0,
                      lineHeight: 1.25
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Card Action Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1.5rem'
                  }}
                >
                  <Link
                    to={card.link}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>Learn More</span>
                  </Link>

                  <motion.div
                    animate={{ x: isActive ? 4 : 0 }}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                      color: isActive ? 'var(--brand-blue)' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {isActive ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Indicators Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          {[
            { icon: '🛡️', text: 'ISO 9001, 27001, 20000 & 45001 Certified' },
            { icon: '👨‍💻', text: '350+ Technology Experts' },
            { icon: '🤝', text: '100+ OEM Technology Alliances' },
            { icon: '⚡', text: '24×7×365 SLA Response Model' },
            { icon: '🌐', text: 'Pan-India & UAE Operations' }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.84rem',
                color: '#94a3b8',
                fontWeight: 600
              }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-brights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          .hero-brights-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}

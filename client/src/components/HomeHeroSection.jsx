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
        backgroundColor: 'var(--bg-surface)',
        color: 'var(--text-primary)',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden',
        padding: '5rem 0 4rem 0'
      }}
      id="hero-enterprise-section"
    >
      {/* Background Soft Accent Glow & Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(circle, var(--border-color) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '0%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(9, 97, 159, 0.08) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 75%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Split Grid: Left Content + Right Enterprise IT Infrastructure SVG Visual */}
        <div className="hero-split-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          
          {/* Left Column: Heading & CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="pill pill-primary" style={{ marginBottom: '1.25rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'inline-block' }} />
                ENTERPRISE IT &amp; INFRASTRUCTURE PARTNER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ margin: '0 0 1.25rem 0' }}
            >
              Your technology support partner for creating sustainable business value through{' '}
              <span style={{ display: 'inline-block', position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeCard.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: 'var(--primary)',
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(9, 97, 159, 0.3)',
                      textUnderlineOffset: '6px'
                    }}
                  >
                    {activeCard.highlightText}
                  </motion.span>
                </AnimatePresence>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '620px' }}
            >
              We deliver SLA-bound 24×7 NOC monitoring, multi-cloud operations, third-party maintenance, and cybersecurity resilience for mission-critical enterprise environments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link to="/services" className="btn btn-primary" id="hero-btn-explore-services">
                <span>Explore Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/about#global-presence-section" className="btn btn-secondary" id="hero-btn-contact">
                <span>Our Locations</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Infrastructure SVG Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div className="hero-infra-svg-container" style={{ width: '100%', maxWidth: '480px', position: 'relative' }}>
              <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#09619f" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                  <linearGradient id="lightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f0f7ff" />
                  </linearGradient>
                  <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#09619f" floodOpacity="0.12" />
                  </filter>
                </defs>

                {/* Background Connected Network Grid Lines */}
                <path d="M 80 180 Q 250 80 420 180" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 120 280 Q 250 350 380 280" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 100 200 L 250 200 L 400 200" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M 250 90 L 250 320" stroke="#e2e8f0" strokeWidth="2" />

                {/* Central NOC Operations Core Node */}
                <g filter="url(#softGlow)" transform="translate(180, 130)">
                  <rect width="140" height="140" rx="20" fill="url(#blueGrad)" />
                  <circle cx="70" cy="55" r="28" fill="#ffffff" opacity="0.15" />
                  <path d="M 70 38 C 58 38 48 48 48 60 L 92 60 C 92 48 82 38 70 38 Z" fill="#ffffff" />
                  <rect x="52" y="65" width="36" height="4" rx="2" fill="#ffffff" />
                  <text x="70" y="98" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">24×7 NOC CORE</text>
                  <circle cx="115" cy="25" r="5" fill="#10b981" />
                </g>

                {/* Node 1: Cloud Operations (Top Left) */}
                <g filter="url(#softGlow)" transform="translate(40, 50)">
                  <rect width="120" height="90" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 45 42 Q 45 32 55 32 Q 62 25 72 30 Q 82 25 88 34 Q 95 36 95 45 Q 95 52 85 52 L 45 52 Z" fill="#0284c7" />
                  <text x="60" y="70" fill="#0f172a" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">Hybrid Cloud</text>
                </g>

                {/* Node 2: Datacenter & Hardware (Top Right) */}
                <g filter="url(#softGlow)" transform="translate(340, 50)">
                  <rect width="120" height="90" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <rect x="40" y="28" width="40" height="10" rx="2" fill="#09619f" />
                  <rect x="40" y="42" width="40" height="10" rx="2" fill="#09619f" />
                  <circle cx="73" cy="33" r="1.5" fill="#ffffff" />
                  <circle cx="73" cy="47" r="1.5" fill="#ffffff" />
                  <text x="60" y="70" fill="#0f172a" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">OEM Datacenter</text>
                </g>

                {/* Node 3: Zero-Trust Security (Bottom Left) */}
                <g filter="url(#softGlow)" transform="translate(40, 270)">
                  <rect width="120" height="90" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 60 26 L 75 32 V 44 C 75 52 60 58 60 58 C 60 58 45 52 45 44 V 32 Z" fill="#4f46e5" />
                  <text x="60" y="72" fill="#0f172a" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">Cyber Security</text>
                </g>

                {/* Node 4: SLA Managed Asset (Bottom Right) */}
                <g filter="url(#softGlow)" transform="translate(340, 270)">
                  <rect width="120" height="90" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <circle cx="60" cy="40" r="14" fill="#0d9488" />
                  <path d="M 54 40 L 58 44 L 66 36" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <text x="60" y="72" fill="#0f172a" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">SLA Assurance</text>
                </g>
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Interactive Brights.io Hero Service Cards Grid */}
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                style={{
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
                  padding: '1.75rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '210px',
                  position: 'relative'
                }}
                whileHover={{ y: -4 }}
              >
                <div>
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
                            color: '#f0f7ff',
                            lineHeight: '1.5',
                            marginBottom: '1rem'
                          }}
                        >
                          {card.desc}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: isActive ? '#ffffff' : 'var(--text-primary)',
                      margin: 0,
                      lineHeight: 1.25
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

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
                      color: isActive ? '#ffffff' : 'var(--primary)',
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
                      backgroundColor: isActive ? '#ffffff' : 'var(--primary-light)',
                      color: isActive ? 'var(--primary)' : 'var(--primary)',
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

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
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

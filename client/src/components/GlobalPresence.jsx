import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  const locations = [
    {
      id: 'india-hq',
      badge: 'HEADQUARTERS',
      name: 'India (HQ)',
      location: 'Noida & Bangalore, India',
      desc: 'Central technical hub hosting 300+ certified engineers, 24/7/365 NOC desks, and core hardware staging operations.',
      isHq: true
    },
    {
      id: 'uae-dubai',
      badge: 'REGIONAL OFFICE',
      name: 'UAE — Dubai',
      location: 'Dubai, United Arab Emirates',
      desc: 'Regional expansion hub delivering SLA-bound enterprise IT infrastructure support and managed services across the MEA region.',
      isHq: false
    }
  ];

  return (
    <section 
      id="global-presence-section"
      className="global-presence-container"
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              backgroundColor: 'rgba(9, 97, 159, 0.08)', color: 'var(--brand-blue)',
              padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.78rem',
              fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--brand-blue)', display: 'inline-block' }} />
              Global Reach
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-light-primary)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }} className="section-title">
              Global Presence
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.65' }} className="section-desc">
              From India to the UAE — built to scale where our clients grow.
            </p>
          </div>
        </ScrollReveal>

        {/* Minimal Vector Map Panel */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <div className="global-map-card" style={{
            position: 'relative',
            backgroundColor: '#091322',
            borderRadius: '12px',
            border: '1px solid #1e293b',
            padding: '2rem 1.5rem',
            marginBottom: '2.5rem',
            overflow: 'hidden'
          }}>
            {/* Minimal SVG Map */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '2.4 / 1', minHeight: '200px' }} className="global-map-svg-wrapper">
              <svg 
                viewBox="350 80 500 240" 
                style={{ width: '100%', height: '100%', display: 'block' }}
                aria-label="INNOWORQ Operational Locations Map"
              >
                <defs>
                  {/* Subtle Accent Line Gradient */}
                  <linearGradient id="expansionArc" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#09619f" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#09619f" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Minimalist Subdued Grid */}
                <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="4 4">
                  <line x1="300" y1="120" x2="900" y2="120" />
                  <line x1="300" y1="180" x2="900" y2="180" />
                  <line x1="300" y1="240" x2="900" y2="240" />
                  <line x1="450" y1="80" x2="450" y2="320" />
                  <line x1="600" y1="80" x2="600" y2="320" />
                  <line x1="750" y1="80" x2="750" y2="320" />
                </g>

                {/* Minimal Region Vector Contours */}
                <g fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.75">
                  {/* Middle East (Arabian Peninsula) */}
                  <path d="M520,165 Q560,160 590,185 T585,245 T540,250 T510,205 Z" />
                  {/* India / South Asia */}
                  <path d="M640,165 Q690,175 705,235 T675,290 T635,235 Z" />
                </g>

                {/* Subtle Connection Line: India (675, 215) -> Dubai (565, 195) */}
                <path 
                  d="M 675 215 Q 620 155 565 195" 
                  fill="none" 
                  stroke="url(#expansionArc)" 
                  strokeWidth="2" 
                  strokeDasharray="4 3"
                />

                {/* INDIA HQ POINT */}
                <g transform="translate(675, 215)">
                  <circle r="6" fill="#09619f" />
                  <circle r="2.5" fill="#ffffff" />
                  <text x="12" y="-4" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="sans-serif">India (HQ)</text>
                  <text x="12" y="9" fill="#94a3b8" fontSize="9" fontWeight="500" fontFamily="sans-serif">Noida &amp; Bangalore</text>
                </g>

                {/* DUBAI UAE POINT */}
                <g transform="translate(565, 195)">
                  <circle r="6" fill="#38bdf8" />
                  <circle r="2.5" fill="#ffffff" />
                  <text x="-12" y="-12" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="end" fontFamily="sans-serif">UAE — Dubai</text>
                  <text x="-12" y="1" fill="#94a3b8" fontSize="9" fontWeight="500" textAnchor="end" fontFamily="sans-serif">Regional Office</text>
                </g>
              </svg>
            </div>
          </div>
        </ScrollReveal>

        {/* 2 Location Cards: Side-by-side on desktop, stacked on mobile */}
        <div className="location-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem'
        }}>
          {locations.map((loc, idx) => (
            <ScrollReveal key={loc.id} variant="fade-up" delay={idx * 0.12}>
              <div style={{
                backgroundColor: loc.isHq ? '#f8fafc' : '#ffffff',
                borderRadius: '10px',
                padding: '2rem 1.75rem',
                border: '1px solid #e2e8f0',
                borderTop: loc.isHq ? '3px solid var(--brand-blue)' : '3px solid #38bdf8',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: loc.isHq ? 'var(--brand-blue)' : '#0284c7',
                    backgroundColor: loc.isHq ? 'rgba(9, 97, 159, 0.08)' : 'rgba(56, 189, 248, 0.1)',
                    letterSpacing: '0.5px',
                    marginBottom: '0.85rem'
                  }}>
                    {loc.badge}
                  </span>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.25rem' }}>
                    {loc.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-light-secondary)', marginBottom: '0.75rem' }}>
                    {loc.location}
                  </p>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-light-secondary)', lineHeight: '1.6', margin: 0 }}>
                    {loc.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .global-presence-container {
            padding: 3rem 0 !important;
          }
          .location-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .global-map-card {
            padding: 1.25rem 0.75rem !important;
            margin-bottom: 1.75rem !important;
          }
          .global-map-svg-wrapper {
            min-height: 170px !important;
          }
        }
      `}</style>
    </section>
  );
}

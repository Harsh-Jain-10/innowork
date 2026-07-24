import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  const locations = [
    {
      id: 'india-hq',
      badge: 'HEADQUARTERS',
      name: 'India (HQ)',
      location: 'Noida & Bangalore, India',
      desc: 'Central technical operations hub housing primary engineering teams, NOC monitoring desks, and core hardware staging facilities.',
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

  // SaaS Dot-Grid World Map Points Data
  const dotGridPoints = [
    // North America
    [100, 90], [120, 90], [140, 80], [160, 80], [180, 90], [200, 90],
    [80, 110], [100, 110], [120, 110], [140, 110], [160, 110], [180, 110], [200, 110], [220, 110], [240, 110],
    [100, 130], [120, 130], [140, 130], [160, 130], [180, 130], [200, 130], [220, 130], [240, 130],
    [120, 150], [140, 150], [160, 150], [180, 150], [200, 150], [220, 150],
    [160, 170], [180, 170], [200, 170],
    // South America
    [220, 210], [240, 210], [260, 210],
    [220, 230], [240, 230], [260, 230], [280, 230],
    [240, 250], [260, 250], [280, 250], [300, 250],
    [240, 270], [260, 270], [280, 270],
    [260, 290], [280, 290],
    [260, 310],
    // Europe
    [420, 90], [440, 80], [460, 80], [480, 80], [500, 90],
    [400, 110], [420, 110], [440, 110], [460, 110], [480, 110], [500, 110], [520, 110],
    [420, 130], [440, 130], [460, 130], [480, 130], [500, 130],
    // Africa
    [400, 170], [420, 170], [440, 170], [460, 170], [480, 170], [500, 170],
    [420, 190], [440, 190], [460, 190], [480, 190], [500, 190], [520, 190],
    [440, 210], [460, 210], [480, 210], [500, 210], [520, 210],
    [440, 230], [460, 230], [480, 230], [500, 230],
    [460, 250], [480, 250], [500, 250],
    [460, 270], [480, 270],
    [480, 290],
    // Middle East (UAE / Dubai Region)
    [540, 150], [560, 150], [580, 150],
    [540, 170], [560, 170], [580, 170], [600, 170],
    [560, 190], [580, 190],
    // Asia & India Region
    [620, 110], [640, 110], [660, 100], [680, 100], [700, 100], [720, 100], [740, 110], [760, 110],
    [620, 130], [640, 130], [660, 130], [680, 130], [700, 130], [720, 130], [740, 130], [760, 130], [780, 130],
    [620, 150], [640, 150], [660, 150], [680, 150], [700, 150], [720, 150], [740, 150], [760, 150],
    [640, 170], [660, 170], [680, 170], [700, 170], [720, 170], [740, 170],
    [640, 190], [660, 190], [680, 190], [700, 190], [720, 190],
    [660, 210], [680, 210], [700, 210],
    [660, 230], [680, 230],
    [680, 250],
    // Southeast Asia & East Asia
    [760, 170], [780, 170], [800, 170],
    [740, 190], [760, 190], [780, 190], [800, 190], [820, 190],
    [760, 210], [780, 210], [800, 210],
    [780, 230], [800, 230],
    // Australia
    [780, 280], [800, 280], [820, 280],
    [760, 300], [780, 300], [800, 300], [820, 300], [840, 300],
    [780, 320], [800, 320], [820, 320]
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

        {/* Dot-Grid SaaS World Map Panel */}
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
            {/* SaaS Dot-Matrix Map Graphic */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '2.4 / 1', minHeight: '220px' }} className="global-map-svg-wrapper">
              <svg 
                viewBox="50 50 820 310" 
                style={{ width: '100%', height: '100%', display: 'block' }}
                aria-label="INNOWORQ SaaS Dot-Grid World Map"
              >
                <defs>
                  {/* Subtle Accent Line Gradient */}
                  <linearGradient id="expansionArc" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#09619f" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#09619f" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Background Tech Grid Lines */}
                <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="3 3">
                  <line x1="50" y1="110" x2="870" y2="110" />
                  <line x1="50" y1="190" x2="870" y2="190" />
                  <line x1="50" y1="270" x2="870" y2="270" />
                  <line x1="200" y1="50" x2="200" y2="350" />
                  <line x1="400" y1="50" x2="400" y2="350" />
                  <line x1="600" y1="50" x2="600" y2="350" />
                  <line x1="800" y1="50" x2="800" y2="350" />
                </g>

                {/* Base Dot-Matrix Continental Map Grid */}
                <g fill="rgba(255, 255, 255, 0.18)">
                  {dotGridPoints.map(([cx, cy], i) => (
                    <circle key={`dot-${i}`} cx={cx} cy={cy} r="2" />
                  ))}
                </g>

                {/* Subdued Connecting Arc between India (660, 210) and Dubai (560, 190) */}
                <path 
                  d="M 660 210 Q 610 140 560 190" 
                  fill="none" 
                  stroke="url(#expansionArc)" 
                  strokeWidth="2" 
                  strokeDasharray="4 3"
                />

                {/* INDIA HQ POINT (x=660, y=210) */}
                <g transform="translate(660, 210)">
                  <circle r="12" fill="rgba(9, 97, 159, 0.25)" />
                  <circle r="6" fill="#09619f" />
                  <circle r="2.5" fill="#ffffff" />
                  <text x="14" y="-2" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="sans-serif">India (HQ)</text>
                  <text x="14" y="11" fill="#94a3b8" fontSize="9" fontWeight="500" fontFamily="sans-serif">Noida &amp; Bangalore</text>
                </g>

                {/* DUBAI UAE POINT (x=560, y=190) */}
                <g transform="translate(560, 190)">
                  <circle r="12" fill="rgba(56, 189, 248, 0.25)" />
                  <circle r="6" fill="#38bdf8" />
                  <circle r="2.5" fill="#ffffff" />
                  <text x="-14" y="-12" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="end" fontFamily="sans-serif">UAE — Dubai</text>
                  <text x="-14" y="1" fill="#94a3b8" fontSize="9" fontWeight="500" textAnchor="end" fontFamily="sans-serif">Regional Office</text>
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

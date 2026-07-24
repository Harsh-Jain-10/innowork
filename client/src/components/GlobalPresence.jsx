import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  const locations = [
    {
      id: 'india-hq',
      badge: 'HEADQUARTERS',
      name: 'India (HQ)',
      location: 'Noida & Bangalore, India',
      scope: 'Operations, 24/7 NOC & Staging',
      desc: 'Central technical operations hub housing primary engineering teams, 24/7 NOC monitoring desks, and core hardware staging facilities.',
      isHq: true
    },
    {
      id: 'uae-dubai',
      badge: 'REGIONAL OFFICE',
      name: 'UAE — Dubai',
      location: 'Dubai, United Arab Emirates',
      scope: 'SLA Support & Cloud Operations',
      desc: 'Regional expansion hub delivering SLA-bound enterprise IT infrastructure support and managed services across the MEA region.',
      isHq: false
    }
  ];

  // SaaS Dot-Grid World Map Points Data (x, y)
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
    [260, 290], [280, 290], [260, 310],
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
    [460, 270], [480, 270], [480, 290],
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
    [660, 230], [680, 230], [680, 250],
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
      {/* Section Header Container */}
      <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: '2.5rem' }}>
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              backgroundColor: 'rgba(9, 97, 159, 0.08)', color: 'var(--brand-blue)',
              padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.78rem',
              fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--brand-blue)', display: 'inline-block' }} />
              Global Reach
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-light-primary)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }} className="section-title">
              Global Presence
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.65' }} className="section-desc">
              From India to the UAE — built to scale where our clients grow.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* FULL-WIDTH FEATURED MAP STAGE (Scale & Presence) */}
      <div className="full-width-map-stage" style={{
        width: '100%',
        backgroundColor: '#030712',
        position: 'relative',
        padding: '2.5rem 0',
        borderTop: '1px solid #1e293b',
        borderBottom: '1px solid #1e293b',
        marginBottom: '3rem',
        overflow: 'hidden'
      }}>
        {/* Subtle Radial Glow Backdrops behind the Map Hubs */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 66% 50%, rgba(9, 97, 159, 0.28) 0%, transparent 45%), radial-gradient(circle at 56% 45%, rgba(56, 189, 248, 0.22) 0%, transparent 40%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '2.5 / 1', minHeight: '340px' }} className="global-map-svg-wrapper">
            <svg 
              viewBox="50 40 820 330" 
              style={{ width: '100%', height: '100%', display: 'block' }}
              aria-label="INNOWORQ SaaS Enterprise Dot-Grid World Map"
            >
              <defs>
                {/* Route Gradient Line */}
                <linearGradient id="expansionArc" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#09619f" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                  <stop offset="100%" stopColor="#09619f" stopOpacity="0.8" />
                </linearGradient>

                {/* Node Radial Glow Filters */}
                <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Faint Line-Art City Skyline Silhouettes (Subtle background texture ~12% opacity) */}
              <g stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.12">
                {/* Dubai Skyline Outline Silhouette (Burj Khalifa / Highrises hint behind UAE point) */}
                <path d="M 520,310 L 530,310 L 530,270 L 535,270 L 535,240 L 540,240 L 540,195 L 542,195 L 542,160 L 543,160 L 543,195 L 545,195 L 545,240 L 550,240 L 550,270 L 555,270 L 555,310 L 570,310 L 570,260 L 580,260 L 580,310 Z" />
                {/* India Monument / Gateway Outline Silhouette (behind India point) */}
                <path d="M 620,310 L 630,310 L 630,265 L 640,265 L 640,250 L 645,250 L 645,230 L 650,230 L 650,225 L 665,225 L 665,230 L 670,230 L 670,250 L 675,250 L 675,265 L 685,265 L 685,310 L 695,310 Z" />
              </g>

              {/* Background Tech Grid Lines */}
              <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="3 3">
                <line x1="50" y1="110" x2="870" y2="110" />
                <line x1="50" y1="190" x2="870" y2="190" />
                <line x1="50" y1="270" x2="870" y2="270" />
                <line x1="200" y1="40" x2="200" y2="360" />
                <line x1="400" y1="40" x2="400" y2="360" />
                <line x1="600" y1="40" x2="600" y2="360" />
                <line x1="800" y1="40" x2="800" y2="360" />
              </g>

              {/* Base Dot-Matrix Continental Map Grid */}
              <g fill="rgba(255, 255, 255, 0.18)">
                {dotGridPoints.map(([cx, cy], i) => (
                  <circle key={`dot-${i}`} cx={cx} cy={cy} r="2" />
                ))}
              </g>

              {/* Animated Route Line: India (660, 210) to Dubai (560, 190) */}
              <path 
                d="M 660 210 Q 610 135 560 190" 
                fill="none" 
                stroke="url(#expansionArc)" 
                strokeWidth="2.5" 
                strokeDasharray="6 6"
                className="animated-route-line"
                filter="url(#glowCyan)"
              />

              {/* ── INDIA HQ NODE (Prominent Callout Box & Glow) ── */}
              <g transform="translate(660, 210)">
                <circle r="18" fill="rgba(9, 97, 159, 0.25)" filter="url(#glowBlue)" />
                <circle r="8" fill="#09619f" />
                <circle r="3" fill="#ffffff" />
                
                {/* Prominent Callout Badge */}
                <g transform="translate(20, -32)" className="map-callout-box">
                  <rect x="0" y="0" width="165" height="54" rx="6" fill="rgba(9, 97, 159, 0.85)" stroke="var(--brand-blue)" strokeWidth="1.2" />
                  <text x="12" y="16" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="var(--font-heading)">INDIA (HQ)</text>
                  <text x="12" y="30" fill="#38bdf8" fontSize="9" fontWeight="700" fontFamily="sans-serif">HEADQUARTERS</text>
                  <text x="12" y="44" fill="#cbd5e1" fontSize="8" fontWeight="500" fontFamily="sans-serif">Operations, 24/7 NOC &amp; Staging</text>
                </g>
              </g>

              {/* ── DUBAI UAE NODE (Prominent Callout Box & Glow) ── */}
              <g transform="translate(560, 190)">
                <circle r="18" fill="rgba(56, 189, 248, 0.25)" filter="url(#glowCyan)" />
                <circle r="8" fill="#38bdf8" />
                <circle r="3" fill="#030712" />

                {/* Prominent Callout Badge */}
                <g transform="translate(-185, -32)" className="map-callout-box">
                  <rect x="0" y="0" width="165" height="54" rx="6" fill="rgba(3, 105, 161, 0.85)" stroke="#38bdf8" strokeWidth="1.2" />
                  <text x="12" y="16" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="var(--font-heading)">UAE — DUBAI</text>
                  <text x="12" y="30" fill="#38bdf8" fontSize="9" fontWeight="700" fontFamily="sans-serif">REGIONAL OFFICE</text>
                  <text x="12" y="44" fill="#cbd5e1" fontSize="8" fontWeight="500" fontFamily="sans-serif">SLA Support &amp; Cloud Operations</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 2 Location Cards: Side-by-side on desktop, stacked on mobile */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: loc.isHq ? 'var(--brand-blue)' : '#0284c7',
                    backgroundColor: loc.isHq ? 'rgba(9, 97, 159, 0.08)' : 'rgba(56, 189, 248, 0.1)',
                    letterSpacing: '0.5px',
                    marginBottom: '0.85rem'
                  }}>
                    {loc.badge}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.25rem' }}>
                    {loc.name}
                  </h3>

                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '0.75rem' }}>
                    {loc.location} • <span style={{ color: 'var(--text-light-secondary)', fontWeight: 500 }}>{loc.scope}</span>
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
        .animated-route-line {
          animation: routeDash 3s linear infinite;
        }
        @keyframes routeDash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -24;
          }
        }
        @media (max-width: 768px) {
          .global-presence-container {
            padding: 3rem 0 !important;
          }
          .full-width-map-stage {
            padding: 1.5rem 0 !important;
            margin-bottom: 2rem !important;
          }
          .location-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .global-map-svg-wrapper {
            min-height: 240px !important;
          }
          .map-callout-box rect {
            width: 140px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

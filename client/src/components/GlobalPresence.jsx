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

  // Generic building-bar skylines (x, width, height) — anchored to baseline y=340
  const indiaSkyline = [
    [40, 18, 60], [62, 14, 90], [80, 20, 70], [104, 16, 110], [124, 22, 85],
    [150, 18, 130], [172, 14, 95], [190, 24, 75], [218, 16, 105], [238, 18, 65]
  ];
  const dubaiSkyline = [
    [850, 16, 70], [870, 20, 100], [894, 14, 80], [912, 18, 120], [934, 22, 90],
    [1010, 16, 95], [1030, 20, 130], [1054, 14, 75], [1072, 18, 110]
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
      {/* Section Header */}
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

      {/* FULL-WIDTH ILLUSTRATED SKYLINE STAGE */}
      <div className="full-width-map-stage" style={{
        width: '100%',
        position: 'relative',
        padding: '3rem 0',
        marginBottom: '3rem',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 1', minHeight: '320px' }} className="global-map-svg-wrapper">
            <svg
              viewBox="0 0 1120 400"
              style={{ width: '100%', height: '100%', display: 'block', borderRadius: '14px' }}
              aria-label="INNOWORQ Global Presence: India and Dubai skyline map"
            >
              <defs>
                {/* Dusk sky gradient — the "color" source, no photography needed */}
                <linearGradient id="duskSky" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#050b1f" />
                  <stop offset="55%" stopColor="#0b1a3a" />
                  <stop offset="82%" stopColor="#3a2a5c" />
                  <stop offset="100%" stopColor="#a85a3f" />
                </linearGradient>
                <radialGradient id="horizonGlow" cx="50%" cy="100%" r="80%">
                  <stop offset="0%" stopColor="#e08a5a" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#e08a5a" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="expansionArc" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#09619f" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f0a868" stopOpacity="0.9" />
                </linearGradient>
                <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Sky */}
              <rect x="0" y="0" width="1120" height="400" fill="url(#duskSky)" />
              <rect x="0" y="0" width="1120" height="400" fill="url(#horizonGlow)" />

              {/* Stars (subtle, upper sky only) */}
              <g fill="#ffffff" opacity="0.5">
                {[[80, 40], [160, 70], [260, 30], [340, 60], [520, 40], [600, 25], [760, 50], [980, 35], [1040, 65]].map(([x, y], i) => (
                  <circle key={`star-${i}`} cx={x} cy={y} r="1.2" />
                ))}
              </g>

              {/* Ground line */}
              <line x1="0" y1="340" x2="1120" y2="340" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* INDIA skyline (left) — generic towers + Gateway of India arch */}
              <g opacity="0.9">
                {indiaSkyline.map(([x, w, h], i) => (
                  <rect key={`in-b-${i}`} x={x} y={340 - h} width={w} height={h} fill="#13214a" />
                ))}
                {/* Gateway of India arch silhouette — identifying landmark */}
                <path
                  d="M 270 340 L 270 250 Q 270 220 300 220 Q 330 220 330 250 L 330 340 
                     L 316 340 L 316 250 Q 316 236 300 236 Q 284 236 284 250 L 284 340 Z"
                  fill="#13214a"
                />
                <rect x="266" y="330" width="68" height="10" fill="#13214a" />
              </g>

              {/* DUBAI skyline (right) — generic towers + Burj Khalifa spire */}
              <g opacity="0.9">
                {dubaiSkyline.map(([x, w, h], i) => (
                  <rect key={`db-b-${i}`} x={x} y={340 - h} width={w} height={h} fill="#13214a" />
                ))}
                {/* Burj Khalifa — tapering, tiered spire silhouette (identifying landmark) */}
                <path
                  d="M 962 340 L 962 190 L 968 190 L 968 150 L 972 150 L 972 110 
                     L 975 110 L 975 70 L 978 70 L 978 40 L 981 40 L 981 70 
                     L 984 70 L 984 110 L 987 110 L 987 150 L 991 150 
                     L 991 190 L 997 190 L 997 340 Z"
                  fill="#13214a"
                />
              </g>

              {/* Animated connecting arc between the two hubs */}
              <path
                d="M 300 210 Q 640 90 970 190"
                fill="none"
                stroke="url(#expansionArc)"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                className="animated-route-line"
                filter="url(#glow)"
              />

              {/* India node + callout */}
              <g transform="translate(300, 210)">
                <circle r="16" fill="rgba(56,189,248,0.25)" filter="url(#glow)" />
                <circle r="7" fill="#38bdf8" />
                <circle r="2.5" fill="#ffffff" />
                <g transform="translate(-172, -58)">
                  <rect width="165" height="54" rx="6" fill="rgba(9,26,58,0.88)" stroke="#38bdf8" strokeWidth="1.2" />
                  <text x="12" y="18" fill="#ffffff" fontSize="12" fontWeight="800">INDIA (HQ)</text>
                  <text x="12" y="32" fill="#38bdf8" fontSize="9" fontWeight="700">HEADQUARTERS</text>
                  <text x="12" y="45" fill="#cbd5e1" fontSize="8.5">Operations, 24/7 NOC &amp; Staging</text>
                </g>
              </g>

              {/* Dubai node + callout */}
              <g transform="translate(970, 190)">
                <circle r="16" fill="rgba(240,168,104,0.3)" filter="url(#glow)" />
                <circle r="7" fill="#f0a868" />
                <circle r="2.5" fill="#050b1f" />
                <g transform="translate(-165, -70)">
                  <rect width="165" height="54" rx="6" fill="rgba(58,32,17,0.88)" stroke="#f0a868" strokeWidth="1.2" />
                  <text x="12" y="18" fill="#ffffff" fontSize="12" fontWeight="800">UAE — DUBAI</text>
                  <text x="12" y="32" fill="#f0a868" fontSize="9" fontWeight="700">REGIONAL OFFICE</text>
                  <text x="12" y="45" fill="#e2d5c8" fontSize="8.5">SLA Support &amp; Cloud Operations</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Location detail cards — unchanged content */}
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
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -28; }
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
            aspect-ratio: 3 / 2 !important;
            min-height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
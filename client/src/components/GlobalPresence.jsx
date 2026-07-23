import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  const [viewBox, setViewBox] = React.useState('0 0 1000 480');

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewBox('410 80 460 260'); // Custom mobile zoom for active MEA, India, Europe & APAC routes
      } else {
        setViewBox('0 0 1000 480');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const regionalHubs = [
    {
      id: 'dubai-mea',
      region: 'Dubai, UAE',
      badge: 'NEWEST REGIONAL PRESENCE',
      badgeColor: '#00f0ff',
      badgeBg: 'rgba(0, 240, 255, 0.1)',
      title: 'Middle East & Africa (MEA)',
      desc: 'Extending SLA-bound IT infrastructure support, multi-vendor hardware maintenance, and cloud managed services to enterprise clients across the MEA region.',
      highlight: true
    },
    {
      id: 'india-hq',
      region: 'Noida & Bangalore, India',
      badge: 'OPERATIONS & DELIVERY HQ',
      badgeColor: 'var(--brand-blue)',
      badgeBg: 'rgba(9, 97, 159, 0.08)',
      title: 'Pan-India Operations & Labs',
      desc: 'Central technical hub hosting 300+ certified engineers, 24/7/365 NOC monitoring desks, and hands-on hardware staging environments.',
      highlight: false
    },
    {
      id: 'apac-sea',
      region: 'Asia-Pacific (APAC)',
      badge: 'REGIONAL SERVICE COVERAGE',
      badgeColor: '#059669',
      badgeBg: 'rgba(16, 185, 129, 0.08)',
      title: 'APAC Delivery Network',
      desc: 'Coordinating regional IT deployments, enterprise infrastructure rollouts, and multi-country hardware support models.',
      highlight: false
    },
    {
      id: 'europe-intl',
      region: 'Europe & International',
      badge: 'GLOBAL ALLIANCES',
      badgeColor: '#7c3aed',
      badgeBg: 'rgba(124, 58, 237, 0.08)',
      title: 'International Support Footprint',
      desc: 'Delivering SLA multi-vendor support capability and OEM infrastructure services for international enterprise operations.',
      highlight: false
    }
  ];

  return (
    <section 
      style={{
        padding: '6.5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}
      id="global-presence-section"
      className="global-presence-container"
    >
      {/* Blueprint Grid Texture Background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(9, 97, 159, 0.6) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              backgroundColor: 'rgba(9, 97, 159, 0.08)', color: 'var(--brand-blue)',
              padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem',
              fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--brand-blue)', display: 'inline-block' }} />
              Expanding Regional Reach
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-light-primary)', letterSpacing: '-0.5px', marginBottom: '1rem' }} className="section-title">
              Global Presence &amp; MEA Expansion
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.02rem', lineHeight: '1.75' }} className="section-desc">
              Building on our strong operational foundation in India, INNOWORQ is expanding its regional service coverage into Dubai and the Middle East &amp; Africa (MEA) region to deliver 24/7 SLA-driven technology support.
            </p>
          </div>
        </ScrollReveal>

        {/* Vector Map Canvas Panel */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <div className="map-glass-card" style={{
            position: 'relative',
            backgroundColor: '#030712',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2.5rem 1.5rem',
            marginBottom: '3rem',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(2, 6, 23, 0.25)'
          }}>
            {/* Dark Radial Glow Background */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at 45% 45%, rgba(9, 97, 159, 0.22) 0%, rgba(2, 6, 23, 0.95) 85%)',
              pointerEvents: 'none'
            }} />

            {/* Custom Responsive SVG Map Display */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '2.1 / 1', minHeight: '240px' }} className="map-svg-wrapper">
              <svg 
                viewBox={viewBox} 
                style={{ width: '100%', height: '100%', display: 'block' }}
                aria-label="INNOWORQ Global Reach Vector Map"
              >
                <defs>
                  {/* Arc Gradient: India (Right) to Dubai (Left) */}
                  <linearGradient id="arcGradient" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#00f0ff" stopOpacity="1" />
                  </linearGradient>

                  {/* Node Glow Filters */}
                  <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid Overlay Lines */}
                <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="3 3">
                  <line x1="0" y1="120" x2="1000" y2="120" />
                  <line x1="0" y1="240" x2="1000" y2="240" />
                  <line x1="0" y1="360" x2="1000" y2="360" />
                  <line x1="200" y1="0" x2="200" y2="480" />
                  <line x1="400" y1="0" x2="400" y2="480" />
                  <line x1="600" y1="0" x2="600" y2="480" />
                  <line x1="800" y1="0" x2="800" y2="480" />
                </g>

                {/* Simplified Vector Stylized Map Landmass Contours */}
                <g fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.75">
                  {/* Europe */}
                  <path d="M430,90 Q480,80 520,110 T560,140 T510,170 T440,140 Z" />
                  {/* Africa */}
                  <path d="M420,195 Q490,190 530,240 T520,340 T460,390 T410,290 T400,220 Z" />
                  {/* Middle East (Arabian Peninsula) */}
                  <path d="M545,190 Q580,185 615,210 T610,270 T560,280 T535,230 Z" />
                  {/* India / South Asia */}
                  <path d="M675,190 Q725,200 740,260 T710,320 T670,260 Z" />
                  {/* East Asia / China */}
                  <path d="M720,130 Q790,120 840,160 T820,240 T740,200 Z" />
                  {/* Southeast Asia / Islands */}
                  <path d="M780,270 Q820,280 850,310 T810,340 Z" />
                  {/* Australia */}
                  <path d="M830,340 Q890,340 920,380 T880,430 T810,400 Z" />
                </g>

                {/* ── EXPANSION CONNECTION ARC (India -> Dubai) ── */}
                {/* Path from India (x=705, y=235) to Dubai (x=590, y=215) */}
                <g>
                  {/* Background Arc Line */}
                  <path 
                    d="M 705 235 Q 647 165 590 215" 
                    fill="none" 
                    stroke="rgba(0, 240, 255, 0.25)" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 4"
                  />

                  {/* Animated Glowing Connection Arc */}
                  <motion.path 
                    d="M 705 235 Q 647 165 590 215" 
                    fill="none" 
                    stroke="url(#arcGradient)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glowCyan)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                  />

                  {/* Floating Light Pulse Packet Along Arc */}
                  <motion.circle
                    r="4"
                    fill="#00f0ff"
                    filter="url(#glowCyan)"
                    animate={{
                      cx: [705, 647, 590],
                      cy: [235, 175, 215],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.5
                    }}
                  />
                </g>

                {/* Secondary Hub: Europe / UK (x=490, y=130) */}
                <g transform="translate(490, 130)">
                  <circle r="4" fill="#7c3aed" opacity="0.8" />
                  <circle r="9" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.4" />
                  <text x="12" y="4" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="sans-serif" className="map-svg-label">Europe Alliances</text>
                </g>

                {/* Secondary Hub: Southeast Asia / APAC (x=800, y=290) */}
                <g transform="translate(800, 290)">
                  <circle r="4" fill="#059669" opacity="0.8" />
                  <circle r="9" fill="none" stroke="#059669" strokeWidth="1" opacity="0.4" />
                  <text x="12" y="4" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="sans-serif" className="map-svg-label">APAC Region</text>
                </g>

                {/* ── CORE OPERATIONS NODE: India (x=705, y=235) ── */}
                <g transform="translate(705, 235)">
                  {/* Outer Pulsing Halo */}
                  <motion.circle 
                    r="16" 
                    fill="none" 
                    stroke="var(--brand-blue)" 
                    strokeWidth="1.5" 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle r="7" fill="var(--brand-blue)" filter="url(#glowBlue)" />
                  <circle r="3" fill="#ffffff" />
                  <text x="14" y="-8" fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="sans-serif" className="map-svg-label">India (HQ &amp; Labs)</text>
                  <text x="14" y="8" fill="#94a3b8" fontSize="9" fontWeight="500" fontFamily="sans-serif" className="map-svg-label">Pan-India Operations</text>
                </g>

                {/* ── NEWEST REGIONAL PRESENCE: Dubai, UAE (x=590, y=215) ── */}
                <g transform="translate(590, 215)">
                  {/* Glowing Animated Concentric Pulse Rings */}
                  <motion.circle 
                    r="24" 
                    fill="none" 
                    stroke="#00f0ff" 
                    strokeWidth="1.5" 
                    animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2.0, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.circle 
                    r="14" 
                    fill="none" 
                    stroke="#00f0ff" 
                    strokeWidth="2" 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.9, 0.2, 0.9] }}
                    transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  <circle r="8" fill="#00f0ff" filter="url(#glowCyan)" />
                  <circle r="3.5" fill="#020617" />

                  {/* Highlighted Dubai Callout Badge */}
                  <g transform="translate(-70, -45)" className="map-dubai-callout">
                    <rect x="0" y="0" width="140" height="30" rx="6" fill="rgba(0, 240, 255, 0.15)" stroke="#00f0ff" strokeWidth="1.2" />
                    <text x="70" y="14" fill="#00f0ff" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">DUBAI, UAE</text>
                    <text x="70" y="24" fill="#ffffff" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">MEA Expansion Hub</text>
                  </g>
                </g>

              </svg>
            </div>

            {/* Mobile Map structured descriptions below the map */}
            <div className="mobile-map-details">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', padding: '0 0.5rem' }}>
                <div style={{ borderLeft: '3px solid #00f0ff', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#00f0ff', fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>DUBAI, UAE</h4>
                  <p style={{ color: '#ffffff', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>MEA Expansion Hub:</strong> Delivering SLA-bound IT infrastructure support, cloud managed services, and multi-vendor maintenance.
                  </p>
                </div>
                <div style={{ borderLeft: '3px solid var(--brand-blue)', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>INDIA (HQ &amp; LABS)</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>Operations HQ:</strong> Central technical hub in Noida &amp; Bangalore hosting 300+ certified engineers and 24/7/365 NOC desks.
                  </p>
                </div>
                <div style={{ borderLeft: '3px solid #059669', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#cbd5e1', fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>APAC REGION</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>Service Coverage:</strong> Coordinating regional IT deployments and multi-country hardware support.
                  </p>
                </div>
                <div style={{ borderLeft: '3px solid #7c3aed', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#cbd5e1', fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>EUROPE ALLIANCES</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>Global Footprint:</strong> International support delivery and OEM alliance coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Legend Overlay Bar */}
            <div className="map-legend-desktop" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.82rem',
              color: '#94a3b8'
            }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff', fontWeight: 600 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }} />
                  Dubai (MEA Expansion)
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff', fontWeight: 600 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
                  India (HQ &amp; Engineering)
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: 16, height: 2, backgroundColor: '#00f0ff', display: 'inline-block' }} />
                  SLA Service Route
                </span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>
                Service &amp; Operational Coverage Map
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Regional Presence Cards Grid */}
        <div className="presence-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }}>
          {regionalHubs.map((hub, idx) => (
            <ScrollReveal key={hub.id} variant="fade-up" delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: hub.highlight ? '#f0f9ff' : '#ffffff',
                  borderRadius: '12px',
                  padding: '1.75rem 1.25rem',
                  border: hub.highlight ? '1.5px solid rgba(0, 240, 255, 0.4)' : '1px solid #e2e8f0',
                  boxShadow: hub.highlight ? '0 8px 24px rgba(0, 240, 255, 0.12)' : '0 4px 15px rgba(0,0,0,0.02)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: hub.badgeColor,
                    backgroundColor: hub.badgeBg,
                    letterSpacing: '0.5px',
                    marginBottom: '0.85rem'
                  }}>
                    {hub.badge}
                  </span>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.4rem' }}>
                    {hub.region}
                  </h3>

                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '0.75rem' }}>
                    {hub.title}
                  </h4>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', margin: 0 }}>
                    {hub.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .mobile-map-details {
          display: none;
        }
        @media (max-width: 1024px) {
          .presence-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 768px) {
          .global-presence-container {
            padding: 5.5rem 0 !important;
          }
          .mobile-map-details {
            display: block !important;
          }
          .map-legend-desktop {
            display: none !important;
          }
          .map-svg-label, .map-dubai-callout {
            display: none !important;
          }
          .map-glass-card {
            margin-left: -24px !important;
            margin-right: -24px !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
            padding: 2.25rem 0 !important;
          }
          .map-svg-wrapper {
            padding: 0 1.5rem !important;
            min-height: 200px !important;
          }
          .presence-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .presence-cards-grid > div {
            padding: 2.25rem 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}

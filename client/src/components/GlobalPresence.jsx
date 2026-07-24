import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  const destinations = [
    {
      id: 'uae',
      flag: '🇦🇪',
      name: 'United Arab Emirates',
      subtitle: 'Dubai / MEA Expansion',
      cx: 515,
      cy: 205,
      cardPos: { left: -140, top: 15 }
    },
    {
      id: 'uk',
      flag: '🇬🇧',
      name: 'United Kingdom',
      subtitle: 'Enterprise Support',
      cx: 425,
      cy: 130,
      cardPos: { left: -120, top: -45 }
    },
    {
      id: 'japan',
      flag: '🇯🇵',
      name: 'Japan',
      subtitle: 'Technology Partnerships',
      cx: 815,
      cy: 165,
      cardPos: { left: 15, top: -20 }
    },
    {
      id: 'new-zealand',
      flag: '🇳🇿',
      name: 'New Zealand',
      subtitle: 'Regional Delivery',
      cx: 890,
      cy: 375,
      cardPos: { left: 15, top: -20 }
    }
  ];

  return (
    <section 
      id="global-presence-section"
      className="global-presence-enterprise-section"
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Main 45% Content / 55% Real Map Grid Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          gap: '3rem',
          alignItems: 'center'
        }} className="enterprise-global-grid">
          
          {/* LEFT COLUMN (45%): Clean, Data-Forward Enterprise Header */}
          <ScrollReveal variant="fade-up">
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#2563eb',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                <span style={{ width: 14, height: 2, backgroundColor: '#2563eb', display: 'inline-block' }} />
                OUR GLOBAL PRESENCE
              </span>

              <h2 style={{
                fontSize: '2.85rem',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}>
                Expanding Beyond <br />
                <span style={{ color: '#2563eb' }}>Borders</span>
              </h2>

              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#475569',
                maxWidth: '480px',
                marginBottom: '2rem'
              }}>
                Delivering enterprise IT infrastructure, cloud, and managed services with 24×7 support across key international markets.
              </p>

              {/* Enterprise Capability Badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2.5rem'
              }} className="enterprise-capabilities-grid">
                {[
                  { title: 'Pan-India Delivery', sub: '24×7 NOC & Hardware Staging' },
                  { title: 'MEA Regional Hub', sub: 'SLA Support in Dubai' },
                  { title: 'UK Enterprise Support', sub: 'ISO Certified Delivery' },
                  { title: 'Global Coverage', sub: '5+ International Markets' }
                ].map((cap, idx) => (
                  <div key={idx} style={{
                    padding: '0.9rem 1.1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    borderLeft: '3px solid #2563eb'
                  }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>{cap.title}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500 }}>{cap.sub}</div>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <Link 
                to="/services" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.9rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                className="enterprise-cta-btn"
              >
                <span>Explore Our Services</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
            </div>
          </ScrollReveal>


          {/* RIGHT COLUMN (55%): REAL SVG VECTOR WORLD MAP STAGE */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '2.15 / 1',
              minHeight: '380px'
            }} className="real-map-stage">
              
              <svg 
                viewBox="0 0 1000 480" 
                style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
                aria-label="Accurate SVG World Map showing INNOWORQ global presence"
              >
                <defs>
                  {/* Subtle Connection Line Gradient */}
                  <linearGradient id="realMapConnectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
                  </linearGradient>

                  {/* Drop Shadow for Floating Cards */}
                  <filter id="glassCardShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* ── REAL GEOGRAPHICALLY ACCURATE SVG CONTINENTAL LANDMASSES (#EDF3FB) ── */}
                <g fill="#EDF3FB" stroke="none">
                  {/* North America */}
                  <path d="M 85 95 C 100 80 135 65 175 70 C 215 75 255 90 270 115 C 260 145 225 175 185 190 C 160 195 145 220 135 240 C 120 220 110 180 85 155 Z M 275 45 C 295 40 325 45 330 65 C 315 85 285 80 275 45 Z" />
                  
                  {/* South America */}
                  <path d="M 215 225 C 245 230 275 255 270 295 C 260 340 230 395 210 415 C 200 400 195 340 190 300 C 185 260 195 235 215 225 Z" />
                  
                  {/* Europe */}
                  <path d="M 425 90 C 455 80 495 85 515 105 C 500 135 465 145 435 140 C 415 125 410 105 425 90 Z M 410 100 C 420 95 430 110 415 120 Z" />
                  
                  {/* Africa */}
                  <path d="M 420 150 C 475 145 525 165 540 205 C 530 255 485 320 455 330 C 435 290 420 230 420 150 Z M 550 285 C 560 280 565 310 550 315 Z" />
                  
                  {/* Asia & Middle East & India Subcontinent */}
                  <path d="M 525 85 C 615 70 745 65 835 85 C 855 125 825 175 785 185 C 735 190 685 235 645 245 C 635 210 585 215 545 200 Z" />
                  {/* India Subcontinent Projection */}
                  <path d="M 620 175 Q 655 200 660 245 T 625 270 T 605 215 Z" fill="#E2ebd9" />
                  
                  {/* Japan Archipelago */}
                  <path d="M 825 125 C 840 115 845 135 830 155 Z" />
                  
                  {/* Southeast Asia & Islands */}
                  <path d="M 735 215 C 765 225 795 240 765 265 Z" />
                  
                  {/* Australia */}
                  <path d="M 760 315 C 815 305 855 335 845 375 C 795 395 755 365 760 315 Z" />
                  
                  {/* New Zealand */}
                  <path d="M 885 370 C 895 365 898 395 885 400 Z" />
                </g>


                {/* ── ELEGANT CURVED CONNECTION PATHS FROM INDIA (645, 230) ── */}
                {/* 1. Curve to UAE (530, 205) */}
                <path 
                  d="M 645 230 Q 585 185 530 205" 
                  fill="none" 
                  stroke="url(#realMapConnectionLine)" 
                  strokeWidth="1.8" 
                  className="connection-path-line"
                />
                
                {/* 2. Curve to UK (430, 130) */}
                <path 
                  d="M 645 230 Q 535 120 430 130" 
                  fill="none" 
                  stroke="url(#realMapConnectionLine)" 
                  strokeWidth="1.8" 
                  className="connection-path-line"
                />

                {/* 3. Curve to Japan (820, 165) */}
                <path 
                  d="M 645 230 Q 735 150 820 165" 
                  fill="none" 
                  stroke="url(#realMapConnectionLine)" 
                  strokeWidth="1.8" 
                  className="connection-path-line"
                />

                {/* 4. Curve to New Zealand (890, 375) */}
                <path 
                  d="M 645 230 Q 785 300 890 375" 
                  fill="none" 
                  stroke="url(#realMapConnectionLine)" 
                  strokeWidth="1.8" 
                  className="connection-path-line"
                />


                {/* DESTINATION NODE DOTS */}
                {destinations.map(d => (
                  <circle key={`node-dot-${d.id}`} cx={d.cx} cy={d.cy} r="4.5" fill="#2563eb" />
                ))}


                {/* ── CENTRAL HUB: INDIA LOCATION PIN (645, 230) ── */}
                <g transform="translate(645, 230)">
                  {/* Pulse Ring */}
                  <circle r="18" fill="rgba(37, 99, 235, 0.25)" className="india-pulse-ring" />
                  <circle r="10" fill="rgba(37, 99, 235, 0.35)" />
                  <circle r="6" fill="#2563eb" />
                  <circle r="2.5" fill="#ffffff" />

                  {/* INDIA FLOATING CARD */}
                  <g transform="translate(-65, 18)" filter="url(#glassCardShadow)">
                    <rect x="0" y="0" width="130" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="12" y="16" fontSize="12" fontFamily="sans-serif">🇮🇳</text>
                    <text x="32" y="16" fill="#0f172a" fontSize="10.5" fontWeight="800" fontFamily="sans-serif">India (HQ)</text>
                    <text x="32" y="29" fill="#2563eb" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Pan-India Operations</text>
                  </g>
                </g>


                {/* ── FLOATING GLASS CARDS FOR DESTINATIONS ── */}
                {/* 1. UAE Card */}
                <g transform="translate(530, 205)">
                  <g transform="translate(-155, 12)" filter="url(#glassCardShadow)">
                    <rect x="0" y="0" width="150" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="12" y="18" fontSize="13" fontFamily="sans-serif">🇦🇪</text>
                    <text x="34" y="17" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">United Arab Emirates</text>
                    <text x="34" y="30" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Dubai / MEA Expansion</text>
                  </g>
                </g>

                {/* 2. UK Card */}
                <g transform="translate(430, 130)">
                  <g transform="translate(-135, -46)" filter="url(#glassCardShadow)">
                    <rect x="0" y="0" width="135" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="12" y="17" fontSize="13" fontFamily="sans-serif">🇬🇧</text>
                    <text x="34" y="16" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">United Kingdom</text>
                    <text x="34" y="29" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Enterprise Support</text>
                  </g>
                </g>

                {/* 3. Japan Card */}
                <g transform="translate(815, 165)">
                  <g transform="translate(14, -20)" filter="url(#glassCardShadow)">
                    <rect x="0" y="0" width="140" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="12" y="17" fontSize="13" fontFamily="sans-serif">🇯🇵</text>
                    <text x="34" y="16" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">Japan</text>
                    <text x="34" y="29" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Technology Partnerships</text>
                  </g>
                </g>

                {/* 4. New Zealand Card */}
                <g transform="translate(890, 375)">
                  <g transform="translate(-145, -20)" filter="url(#glassCardShadow)">
                    <rect x="0" y="0" width="135" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="12" y="17" fontSize="13" fontFamily="sans-serif">🇳🇿</text>
                    <text x="34" y="16" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">New Zealand</text>
                    <text x="34" y="29" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Regional Delivery</text>
                  </g>
                </g>

              </svg>
            </div>
          </ScrollReveal>

        </div>

      </div>

      <style>{`
        .india-pulse-ring {
          animation: indiaPulse 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          transform-origin: center;
        }
        @keyframes indiaPulse {
          0% {
            r: 12px;
            opacity: 0.8;
          }
          100% {
            r: 32px;
            opacity: 0;
          }
        }
        .connection-path-line {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawArcLine 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes drawArcLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        .enterprise-cta-btn:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .enterprise-global-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
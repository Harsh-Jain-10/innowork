import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
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
        
        {/* Main 42% Left / 58% Right Desktop Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '42% 58%',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="enterprise-global-grid">
          
          {/* LEFT COLUMN (42%): Production Enterprise Content */}
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
                GLOBAL PRESENCE
              </span>

              <h2 style={{
                fontSize: '2.85rem',
                fontWeight: 900,
                lineHeight: 1.12,
                color: '#0f172a',
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem'
              }}>
                Expanding Beyond <br />
                <span style={{ color: '#2563eb' }}>Borders</span>
              </h2>

              <p style={{
                fontSize: '1.02rem',
                lineHeight: 1.65,
                color: '#475569',
                maxWidth: '440px',
                marginBottom: '2rem'
              }}>
                Delivering enterprise IT infrastructure, cloud operations, and managed services with 24×7 support across key international markets.
              </p>

              {/* 4 Enterprise Capabilities */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2.25rem'
              }} className="enterprise-capabilities-grid">
                {[
                  { title: 'Pan-India Operations', sub: '24×7 NOC & Hardware Staging' },
                  { title: 'MEA Regional Hub', sub: 'SLA Support in Dubai' },
                  { title: 'UK Enterprise Support', sub: 'ISO Certified Delivery' },
                  { title: 'Global Model', sub: '5+ International Markets' }
                ].map((cap, idx) => (
                  <div key={idx} style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    borderLeft: '3px solid #2563eb'
                  }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>{cap.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>{cap.sub}</div>
                  </div>
                ))}
              </div>

              {/* Primary CTA Button */}
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
                  fontSize: '0.92rem',
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


          {/* RIGHT COLUMN (58%): ACCURATE MERCATOR SVG MAP STAGE */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '2.05 / 1',
              minHeight: '410px'
            }} className="real-mercator-map-stage">
              
              <svg 
                viewBox="0 0 1000 480" 
                style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
                aria-label="Geographically accurate Mercator SVG World Map"
              >
                <defs>
                  {/* Smooth 2.5px Connection Arc Gradient */}
                  <linearGradient id="ciscoArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
                  </linearGradient>

                  {/* Glassmorphism Shadow */}
                  <filter id="ciscoGlassShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* ── ACCURATE MERCATOR SVG WORLD MAP CONTINENTS (#EDF3FB @ 65% opacity, NO BORDERS) ── */}
                <g fill="#EDF3FB" opacity="0.65" stroke="none">
                  {/* North America & Canada */}
                  <path d="M 80 85 C 100 70 140 55 180 60 C 220 65 260 80 275 105 C 265 135 230 165 190 180 C 165 185 150 210 140 230 C 125 210 115 170 90 145 Z M 270 35 C 290 30 320 35 325 55 C 310 75 280 70 270 35 Z" />
                  
                  {/* South America */}
                  <path d="M 210 220 C 240 225 270 250 265 290 C 255 335 225 390 205 410 C 195 395 190 335 185 295 C 180 255 190 230 210 220 Z" />
                  
                  {/* Europe & United Kingdom */}
                  <path d="M 420 85 C 450 75 490 80 510 100 C 495 130 460 140 430 135 C 410 120 405 100 420 85 Z M 405 95 C 415 90 425 105 410 115 Z" />
                  
                  {/* Africa */}
                  <path d="M 415 145 C 470 140 520 160 535 200 C 525 250 480 315 450 325 C 430 285 415 225 415 145 Z M 545 280 C 555 275 560 305 545 310 Z" />
                  
                  {/* Asia & Middle East & India Subcontinent */}
                  <path d="M 520 80 C 610 65 740 60 830 80 C 850 120 820 170 780 180 C 730 185 680 230 640 240 C 630 205 580 210 540 195 Z" />
                  {/* India Subcontinent Projection */}
                  <path d="M 615 170 Q 650 195 655 240 T 620 265 T 600 210 Z" />
                  
                  {/* Japan Archipelago */}
                  <path d="M 820 120 C 835 110 840 130 825 150 Z" />
                  
                  {/* Southeast Asia & Islands */}
                  <path d="M 730 210 C 760 220 790 235 760 260 Z" />
                  
                  {/* Australia */}
                  <path d="M 755 310 C 810 300 850 330 840 370 C 790 390 750 360 755 310 Z" />
                  
                  {/* New Zealand */}
                  <path d="M 880 365 C 890 360 893 390 880 395 Z" />
                </g>


                {/* ── SMOOTH 2.5PX SVG BEZIER CURVED CONNECTIONS FROM INDIA (650, 220) ── */}
                {/* 1. Curve to UAE (540, 195) */}
                <path 
                  d="M 650 220 Q 595 180 540 195" 
                  fill="none" 
                  stroke="url(#ciscoArcGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-connection-path"
                />
                
                {/* 2. Curve to UK (440, 125) */}
                <path 
                  d="M 650 220 Q 545 115 440 125" 
                  fill="none" 
                  stroke="url(#ciscoArcGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-connection-path"
                />

                {/* 3. Curve to Japan (835, 155) */}
                <path 
                  d="M 650 220 Q 745 140 835 155" 
                  fill="none" 
                  stroke="url(#ciscoArcGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-connection-path"
                />

                {/* 4. Curve to New Zealand (910, 385) */}
                <path 
                  d="M 650 220 Q 805 310 910 385" 
                  fill="none" 
                  stroke="url(#ciscoArcGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-connection-path"
                />


                {/* DESTINATION DOTS */}
                <circle cx="540" cy="195" r="5" fill="#2563eb" />
                <circle cx="440" cy="125" r="5" fill="#2563eb" />
                <circle cx="835" cy="155" r="5" fill="#2563eb" />
                <circle cx="910" cy="385" r="5" fill="#2563eb" />


                {/* ── INDIA HEADQUARTERS CENTRAL PIN (650, 220) WITH RIPPLE ANIMATION ── */}
                <g transform="translate(650, 220)">
                  {/* Soft Ripple Animation Ring */}
                  <circle r="22" fill="rgba(37, 99, 235, 0.2)" className="india-ripple-ring" />
                  <circle r="12" fill="rgba(37, 99, 235, 0.35)" />
                  <circle r="7" fill="#2563eb" />
                  <circle r="3" fill="#ffffff" />
                </g>


                {/* ── NON-OVERLAPPING PREMIUM GLASSMORPHISM FLOATING CARDS (230x76px) ── */}

                {/* CARD 1: INDIA HEADQUARTERS (Anchored below India pin at x=535, y=265) */}
                <g transform="translate(535, 265)" filter="url(#ciscoGlassShadow)">
                  <rect x="0" y="0" width="235" height="78" rx="10" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="1" />
                  <rect x="0" y="0" width="4" height="78" rx="2" fill="#2563eb" />
                  <text x="16" y="24" fontSize="16" fontFamily="sans-serif">🇮🇳</text>
                  <text x="42" y="23" fill="#0f172a" fontSize="12" fontWeight="900" fontFamily="sans-serif">India</text>
                  <text x="42" y="40" fill="#2563eb" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Headquarters</text>
                  <text x="42" y="58" fill="#64748b" fontSize="9" fontWeight="600" fontFamily="sans-serif">Pan-India Operations</text>
                </g>

                {/* CARD 2: UAE (Anchored left above UAE pin at x=290, y=175) */}
                <g transform="translate(290, 175)" filter="url(#ciscoGlassShadow)">
                  <rect x="0" y="0" width="230" height="74" rx="10" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="1" />
                  <text x="16" y="24" fontSize="16" fontFamily="sans-serif">🇦🇪</text>
                  <text x="42" y="23" fill="#0f172a" fontSize="11.5" fontWeight="800" fontFamily="sans-serif">United Arab Emirates</text>
                  <text x="42" y="44" fill="#64748b" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">Dubai / MEA Expansion</text>
                </g>

                {/* CARD 3: UK (Anchored left above UK pin at x=280, y=60) */}
                <g transform="translate(280, 60)" filter="url(#ciscoGlassShadow)">
                  <rect x="0" y="0" width="225" height="74" rx="10" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="1" />
                  <text x="16" y="24" fontSize="16" fontFamily="sans-serif">🇬🇧</text>
                  <text x="42" y="23" fill="#0f172a" fontSize="11.5" fontWeight="800" fontFamily="sans-serif">United Kingdom</text>
                  <text x="42" y="44" fill="#64748b" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">Enterprise Support</text>
                </g>

                {/* CARD 4: JAPAN (Anchored right above Japan pin at x=740, y=85) */}
                <g transform="translate(740, 85)" filter="url(#ciscoGlassShadow)">
                  <rect x="0" y="0" width="230" height="74" rx="10" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="1" />
                  <text x="16" y="24" fontSize="16" fontFamily="sans-serif">🇯🇵</text>
                  <text x="42" y="23" fill="#0f172a" fontSize="11.5" fontWeight="800" fontFamily="sans-serif">Japan</text>
                  <text x="42" y="44" fill="#64748b" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">Technology Partnerships</text>
                </g>

                {/* CARD 5: NEW ZEALAND (Anchored right at x=740, y=360) */}
                <g transform="translate(740, 360)" filter="url(#ciscoGlassShadow)">
                  <rect x="0" y="0" width="225" height="74" rx="10" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="1" />
                  <text x="16" y="24" fontSize="16" fontFamily="sans-serif">🇳🇿</text>
                  <text x="42" y="23" fill="#0f172a" fontSize="11.5" fontWeight="800" fontFamily="sans-serif">New Zealand</text>
                  <text x="42" y="44" fill="#64748b" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">Regional Delivery</text>
                </g>

              </svg>
            </div>
          </ScrollReveal>

        </div>

      </div>

      <style>{`
        /* Soft Ripple Animation on India Pin */
        .india-ripple-ring {
          animation: ripplePulse 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          transform-origin: center;
        }
        @keyframes ripplePulse {
          0% {
            r: 12px;
            opacity: 0.8;
          }
          100% {
            r: 36px;
            opacity: 0;
          }
        }

        /* Calm Entrance Draw Animation on SVG Bezier Paths */
        .bezier-connection-path {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: drawCiscoBezier 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes drawCiscoBezier {
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
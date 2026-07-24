import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  // Data for 5 Countries
  const countryCards = [
    {
      id: 'india',
      name: 'India',
      subtitle: 'Pan-India Operations',
      subtitleColor: '#1d4ed8',
      desc: 'Our headquarters and nationwide operations delivering trusted IT solutions across India.',
      accentBg: '#e0f2fe',
      flag: (
        <svg viewBox="0 0 640 480" className="country-flag-icon">
          <path fill="#f97316" d="M0 0h640v160H0z"/>
          <path fill="#ffffff" d="M0 160h640v160H0z"/>
          <path fill="#16a34a" d="M0 320h640v160H0z"/>
          <circle cx="320" cy="240" r="50" fill="none" stroke="#1e3a8a" strokeWidth="6"/>
          <g stroke="#1e3a8a" strokeWidth="3">
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="320" y1="240" x2={320 + 48 * Math.cos((i * Math.PI) / 6)} y2={240 + 48 * Math.sin((i * Math.PI) / 6)} />
            ))}
          </g>
        </svg>
      ),
      illustration: (
        <svg viewBox="0 0 100 100" className="landmark-svg">
          <circle cx="50" cy="50" r="45" fill="#eff6ff" />
          <path d="M 30 75 L 30 50 Q 30 40 50 40 Q 70 40 70 50 L 70 75 L 62 75 L 62 52 Q 62 46 50 46 Q 38 46 38 52 L 38 75 Z" fill="#3b82f6" opacity="0.85" />
          <rect x="25" y="70" width="50" height="6" rx="2" fill="#1d4ed8" />
          <path d="M 42 40 L 50 30 L 58 40 Z" fill="#2563eb" />
        </svg>
      )
    },
    {
      id: 'uae',
      name: 'United Arab Emirates (UAE)',
      subtitle: 'Including Dubai / MEA Expansion',
      subtitleColor: '#16a34a',
      desc: 'Expanding across the UAE and MEA region to support enterprises with local presence and global expertise.',
      accentBg: '#dcfce7',
      flag: (
        <svg viewBox="0 0 640 480" className="country-flag-icon">
          <path fill="#16a34a" d="M0 0h640v160H0z"/>
          <path fill="#ffffff" d="M0 160h640v160H0z"/>
          <path fill="#000000" d="M0 320h640v160H0z"/>
          <path fill="#dc2626" d="M0 0h200v480H0z"/>
        </svg>
      ),
      illustration: (
        <svg viewBox="0 0 100 100" className="landmark-svg">
          <circle cx="50" cy="50" r="45" fill="#f0fdf4" />
          <path d="M 45 75 L 45 35 L 48 35 L 48 20 L 50 12 L 52 20 L 52 35 L 55 35 L 55 75 Z" fill="#16a34a" opacity="0.85" />
          <rect x="38" y="72" width="24" height="4" rx="1" fill="#15803d" />
          <line x1="50" y1="12" x2="50" y2="8" stroke="#15803d" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'japan',
      name: 'Japan',
      subtitle: '',
      subtitleColor: '#9333ea',
      desc: 'Delivering advanced technology solutions and support through our operations and trusted partnerships in Japan.',
      accentBg: '#f3e8ff',
      flag: (
        <svg viewBox="0 0 640 480" className="country-flag-icon">
          <path fill="#ffffff" d="M0 0h640v480H0z"/>
          <circle cx="320" cy="240" r="140" fill="#dc2626"/>
        </svg>
      ),
      illustration: (
        <svg viewBox="0 0 100 100" className="landmark-svg">
          <circle cx="50" cy="50" r="45" fill="#faf5ff" />
          <path d="M 35 75 L 35 60 L 65 60 L 65 75 Z" fill="#a855f7" opacity="0.85" />
          <path d="M 30 60 Q 50 55 70 60 L 65 45 L 35 45 Z" fill="#9333ea" />
          <path d="M 32 45 Q 50 40 68 45 L 62 30 L 38 30 Z" fill="#7e22ce" />
          <polygon points="50,20 47,30 53,30" fill="#6b21a8" />
        </svg>
      )
    },
    {
      id: 'uk',
      name: 'United Kingdom (UK)',
      subtitle: '',
      subtitleColor: '#7c3aed',
      desc: 'Supporting businesses across the UK with enterprise-grade solutions and 24×7 managed support.',
      accentBg: '#ede9fe',
      flag: (
        <svg viewBox="0 0 640 480" className="country-flag-icon">
          <path fill="#1e3a8a" d="M0 0h640v480H0z"/>
          <path stroke="#ffffff" strokeWidth="60" d="M0 0l640 480M640 0L0 480"/>
          <path stroke="#dc2626" strokeWidth="40" d="M0 0l640 480M640 0L0 480"/>
          <path stroke="#ffffff" strokeWidth="100" d="M320 0v480M0 240h640"/>
          <path stroke="#dc2626" strokeWidth="60" d="M320 0v480M0 240h640"/>
        </svg>
      ),
      illustration: (
        <svg viewBox="0 0 100 100" className="landmark-svg">
          <circle cx="50" cy="50" r="45" fill="#f5f3ff" />
          <rect x="42" y="30" width="16" height="45" fill="#7c3aed" opacity="0.85" />
          <polygon points="50,15 40,30 60,30" fill="#6d28d9" />
          <circle cx="50" cy="42" r="4" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'new-zealand',
      name: 'New Zealand',
      subtitle: '',
      subtitleColor: '#2563eb',
      desc: 'Extending our reach to New Zealand with reliable IT services and customer-focused support.',
      accentBg: '#e0f2fe',
      flag: (
        <svg viewBox="0 0 640 480" className="country-flag-icon">
          <path fill="#00247d" d="M0 0h640v480H0z"/>
          {/* Small Union Jack top-left quarter */}
          <g transform="scale(0.5)">
            <path fill="#00247d" d="M0 0h640v480H0z"/>
            <path stroke="#ffffff" strokeWidth="60" d="M0 0l640 480M640 0L0 480"/>
            <path stroke="#cc142b" strokeWidth="40" d="M0 0l640 480M640 0L0 480"/>
            <path stroke="#ffffff" strokeWidth="100" d="M320 0v480M0 240h640"/>
            <path stroke="#cc142b" strokeWidth="60" d="M320 0v480M0 240h640"/>
          </g>
          {/* Southern Cross stars */}
          <polygon points="480,120 484,132 496,132 486,140 490,152 480,144 470,152 474,140 464,132 476,132" fill="#cc142b" stroke="#ffffff" strokeWidth="2"/>
          <polygon points="540,220 544,232 556,232 546,240 550,252 540,244 530,252 534,240 524,232 536,232" fill="#cc142b" stroke="#ffffff" strokeWidth="2"/>
          <polygon points="420,260 424,272 436,272 426,280 430,292 420,284 410,292 414,280 404,272 416,272" fill="#cc142b" stroke="#ffffff" strokeWidth="2"/>
          <polygon points="480,340 484,352 496,352 486,360 490,372 480,364 470,372 474,360 464,352 476,352" fill="#cc142b" stroke="#ffffff" strokeWidth="2"/>
        </svg>
      ),
      illustration: (
        <svg viewBox="0 0 100 100" className="landmark-svg">
          <circle cx="50" cy="50" r="45" fill="#f0f9ff" />
          <polygon points="50,25 25,75 75,75" fill="#2563eb" opacity="0.85" />
          <polygon points="50,25 42,42 50,38 58,42" fill="#ffffff" />
        </svg>
      )
    }
  ];

  // Dot Matrix World Map Points Data (x, y)
  const dotMatrixMapPoints = [
    // North America
    [100, 90], [120, 90], [140, 80], [160, 80], [180, 90], [200, 90],
    [80, 110], [100, 110], [120, 110], [140, 110], [160, 110], [180, 110], [200, 110], [220, 110],
    [100, 130], [120, 130], [140, 130], [160, 130], [180, 130], [200, 130], [220, 130],
    [120, 150], [140, 150], [160, 150], [180, 150], [200, 150],
    // South America
    [220, 210], [240, 210], [260, 210],
    [220, 230], [240, 230], [260, 230], [280, 230],
    [240, 250], [260, 250], [280, 250],
    // Europe
    [420, 90], [440, 80], [460, 80], [480, 80], [500, 90],
    [400, 110], [420, 110], [440, 110], [460, 110], [480, 110], [500, 110], [520, 110],
    [420, 130], [440, 130], [460, 130], [480, 130], [500, 130],
    // Africa
    [400, 170], [420, 170], [440, 170], [460, 170], [480, 170], [500, 170],
    [420, 190], [440, 190], [460, 190], [480, 190], [500, 190],
    [440, 210], [460, 210], [480, 210],
    // Middle East & India Region
    [540, 150], [560, 150], [580, 150],
    [540, 170], [560, 170], [580, 170], [600, 170],
    [620, 110], [640, 110], [660, 100], [680, 100], [700, 100], [720, 100], [740, 110],
    [620, 130], [640, 130], [660, 130], [680, 130], [700, 130], [720, 130], [740, 130],
    [620, 150], [640, 150], [660, 150], [680, 150], [700, 150], [720, 150],
    [640, 170], [660, 170], [680, 170], [700, 170], [720, 170],
    [660, 190], [680, 190], [700, 190],
    // East Asia & Australia/NZ
    [760, 110], [780, 110], [800, 110],
    [760, 130], [780, 130], [800, 130], [820, 130],
    [760, 170], [780, 170], [800, 170],
    [780, 270], [800, 270], [820, 270],
    [760, 290], [780, 290], [800, 290], [820, 290], [840, 290],
    [860, 310], [880, 310]
  ];

  return (
    <section 
      id="global-presence-section"
      className="global-presence-exact-section"
      style={{
        padding: '5rem 0 4rem 0',
        backgroundColor: '#f8fafc',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(224, 242, 254, 0.4) 0%, transparent 70%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* TOP LAYOUT: Left Content Header + Right Interactive Dot World Map */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '3.5rem'
        }} className="global-presence-top-grid">
          
          {/* LEFT SIDE: Header & Capabilities */}
          <ScrollReveal variant="fade-up">
            <div>
              {/* Kicker Pill */}
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

              {/* Main Heading */}
              <h2 style={{
                fontSize: '2.75rem',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }} className="main-global-title">
                Expanding Beyond <br />
                <span style={{ color: '#2563eb' }}>Borders</span>
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#475569',
                maxWidth: '460px',
                marginBottom: '2rem'
              }}>
                Delivering enterprise IT infrastructure, cloud, and managed services with 24×7 support across key international markets.
              </p>

              {/* 5 Capability Items Pill Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '2.25rem'
              }} className="capabilities-pill-row">
                {[
                  { icon: '🖥️', title: 'Infrastructure Solutions' },
                  { icon: '☁️', title: 'Cloud Services' },
                  { icon: '🛡️', title: 'Cybersecurity & Compliance' },
                  { icon: '⚙️', title: 'Automation & Modernization' },
                  { icon: '🎧', title: '24×7 Support' }
                ].map((cap, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem'
                    }}>
                      {cap.icon}
                    </div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155', maxWidth: '85px', lineHeight: 1.2 }}>
                      {cap.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                to="/services" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  textDecoration: 'none'
                }}
                className="explore-services-btn"
              >
                <span>Explore Our Services</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: Interactive Dotted World Map Stage with Curved Arc Connectors */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '2.1 / 1',
              minHeight: '320px',
              backgroundColor: 'transparent'
            }} className="map-stage-wrapper">
              <svg 
                viewBox="50 40 860 320" 
                style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
                aria-label="INNOWORQ Global Connected World Map"
              >
                <defs>
                  {/* Subtle Gradient Glow for Hub */}
                  <filter id="indiaHubGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Arc Gradient */}
                  <linearGradient id="mapArcLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Dotted Matrix Continental World Map background */}
                <g fill="#cbd5e1" opacity="0.65">
                  {dotMatrixMapPoints.map(([cx, cy], i) => (
                    <circle key={`dot-m-${i}`} cx={cx} cy={cy} r="2.2" />
                  ))}
                </g>

                {/* CURVED CONNECTING ARCS FROM INDIA (660, 160) TO ALL OTHER NODES */}
                {/* 1. Arc to UK (460, 100) */}
                <path d="M 660 160 Q 560 90 460 100" fill="none" stroke="url(#mapArcLine)" strokeWidth="1.8" strokeDasharray="4 3" />
                {/* 2. Arc to UAE (520, 175) */}
                <path d="M 660 160 Q 590 150 520 175" fill="none" stroke="url(#mapArcLine)" strokeWidth="1.8" strokeDasharray="4 3" />
                {/* 3. Arc to Japan (800, 110) */}
                <path d="M 660 160 Q 730 110 800 110" fill="none" stroke="url(#mapArcLine)" strokeWidth="1.8" strokeDasharray="4 3" />
                {/* 4. Arc to New Zealand (850, 275) */}
                <path d="M 660 160 Q 780 230 850 275" fill="none" stroke="url(#mapArcLine)" strokeWidth="1.8" strokeDasharray="4 3" />

                {/* OUTER NODE DOTS */}
                <circle cx="460" cy="100" r="4.5" fill="#3b82f6" />
                <circle cx="520" cy="175" r="4.5" fill="#3b82f6" />
                <circle cx="800" cy="110" r="4.5" fill="#3b82f6" />
                <circle cx="850" cy="275" r="4.5" fill="#3b82f6" />

                {/* central HUB: INDIA NODE (660, 160) */}
                <g transform="translate(660, 160)">
                  {/* Glowing Rings */}
                  <circle r="26" fill="rgba(59, 130, 246, 0.12)" filter="url(#indiaHubGlow)" />
                  <circle r="16" fill="rgba(59, 130, 246, 0.25)" />
                  <circle r="8" fill="#1d4ed8" />
                  
                  {/* Central India Flag Circular Badge overlay */}
                  <foreignObject x="-14" y="-14" width="28" height="28">
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}>
                      <svg viewBox="0 0 640 480" style={{ width: '100%', height: '100%', display: 'block' }}>
                        <path fill="#f97316" d="M0 0h640v160H0z"/>
                        <path fill="#ffffff" d="M0 160h640v160H0z"/>
                        <path fill="#16a34a" d="M0 320h640v160H0z"/>
                        <circle cx="320" cy="240" r="45" fill="none" stroke="#1e3a8a" strokeWidth="6"/>
                      </svg>
                    </div>
                  </foreignObject>

                  {/* INDIA CALLOUT BADGE (Below Hub) */}
                  <g transform="translate(-65, 24)">
                    <rect x="0" y="0" width="130" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                    <text x="65" y="18" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">India</text>
                    <text x="65" y="31" fill="#2563eb" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">Pan-India Operations</text>
                  </g>
                </g>

                {/* CALLOUT BADGE 1: UNITED KINGDOM (460, 100) */}
                <g transform="translate(460, 100)">
                  <g transform="translate(-115, -42)">
                    <rect x="0" y="0" width="115" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                    <foreignObject x="8" y="7" width="20" height="20">
                      <div style={{ width: '20px', height: '20px', borderRadius: '3px', overflow: 'hidden' }}>
                        {countryCards[3].flag}
                      </div>
                    </foreignObject>
                    <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">United Kingdom</text>
                  </g>
                </g>

                {/* CALLOUT BADGE 2: UAE (520, 175) */}
                <g transform="translate(520, 175)">
                  <g transform="translate(-150, 10)">
                    <rect x="0" y="0" width="145" height="48" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                    <foreignObject x="8" y="8" width="20" height="15">
                      <div style={{ width: '20px', height: '15px', borderRadius: '2px', overflow: 'hidden' }}>
                        {countryCards[1].flag}
                      </div>
                    </foreignObject>
                    <text x="34" y="19" fill="#0f172a" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">United Arab Emirates (UAE)</text>
                    <text x="34" y="31" fill="#64748b" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">Including Dubai /</text>
                    <text x="34" y="40" fill="#64748b" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">MEA Expansion</text>
                  </g>
                </g>

                {/* CALLOUT BADGE 3: JAPAN (800, 110) */}
                <g transform="translate(800, 110)">
                  <g transform="translate(14, -18)">
                    <rect x="0" y="0" width="90" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                    <foreignObject x="8" y="7" width="20" height="20">
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                        {countryCards[2].flag}
                      </div>
                    </foreignObject>
                    <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">Japan</text>
                  </g>
                </g>

                {/* CALLOUT BADGE 4: NEW ZEALAND (850, 275) */}
                <g transform="translate(850, 275)">
                  <g transform="translate(12, -18)">
                    <rect x="0" y="0" width="110" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                    <foreignObject x="8" y="7" width="20" height="20">
                      <div style={{ width: '20px', height: '20px', borderRadius: '3px', overflow: 'hidden' }}>
                        {countryCards[4].flag}
                      </div>
                    </foreignObject>
                    <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800" fontFamily="sans-serif">New Zealand</text>
                  </g>
                </g>

              </svg>
            </div>
          </ScrollReveal>
        </div>


        {/* MIDDLE SECTION: 5 COUNTRY CARDS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem'
        }} className="five-country-cards-grid">
          {countryCards.map((country, idx) => (
            <ScrollReveal key={country.id} variant="fade-up" delay={idx * 0.08}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '1.75rem 1.25rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} className="exact-country-card">
                
                {/* Top Circular Landmark Illustration */}
                <div style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {country.illustration}
                </div>

                {/* Country Flag Badge Icon */}
                <div style={{
                  width: '32px',
                  height: '22px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '0.75rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}>
                  {country.flag}
                </div>

                {/* Country Name */}
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: country.subtitle ? '0.25rem' : '0.85rem',
                  lineHeight: 1.25
                }}>
                  {country.name}
                </h3>

                {/* Subtitle if available */}
                {country.subtitle && (
                  <p style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: country.subtitleColor,
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}>
                    {country.subtitle}
                  </p>
                )}

                {/* Description */}
                <p style={{
                  fontSize: '0.82rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {country.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>


        {/* BOTTOM STATS & TRUST BAR */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            padding: '1.25rem 2rem',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            alignItems: 'center'
          }} className="bottom-stats-trust-grid">
            
            {/* Stat 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🌐
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>5+</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Countries</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#f0fdf4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                👥
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>Global</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Delivery Model</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🕒
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>24×7</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Support</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🛡️
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>100%</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Commitment</div>
              </div>
            </div>

            {/* Stat 5 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#fdf2f8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🤝
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>Trusted</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>By Enterprises Worldwide</div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      <style>{`
        .country-flag-icon {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .landmark-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .exact-country-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08) !important;
        }
        .explore-services-btn:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .global-presence-top-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .five-country-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .bottom-stats-trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .main-global-title {
            font-size: 2.1rem !important;
          }
          .five-country-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .bottom-stats-trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
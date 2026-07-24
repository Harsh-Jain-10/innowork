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
      mobileSubtitle: 'Pan-India Operations',
      subtitleColor: '#1d4ed8',
      desc: 'Our headquarters and nationwide operations delivering trusted IT solutions across India.',
      mobileDesc: 'Serving clients across the length and breadth of India.',
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
      mobileSubtitle: 'Dubai / MEA Expansion',
      subtitleColor: '#16a34a',
      desc: 'Expanding across the UAE and MEA region to support enterprises with local presence and global expertise.',
      mobileDesc: 'Expanding across the UAE and MEA region to deliver closer, faster, and smarter support.',
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
      mobileSubtitle: 'Technology Partnerships',
      subtitleColor: '#2563eb',
      desc: 'Delivering advanced technology solutions and support through our operations and trusted partnerships in Japan.',
      mobileDesc: 'Delivering advanced technology solutions with trusted partnerships in Japan.',
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
      mobileSubtitle: 'Enterprise Support',
      subtitleColor: '#2563eb',
      desc: 'Supporting businesses across the UK with enterprise-grade solutions and 24×7 managed support.',
      mobileDesc: 'Supporting businesses across the UK with enterprise-grade IT solutions and 24×7 support.',
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
      mobileSubtitle: 'Global Reach',
      subtitleColor: '#2563eb',
      desc: 'Extending our reach to New Zealand with reliable IT services and customer-focused support.',
      mobileDesc: 'Extending our reach to New Zealand with reliable IT services and customer-focused support.',
      flag: (
        <svg viewBox="0 0 640 480" className="country-flag-icon">
          <path fill="#00247d" d="M0 0h640v480H0z"/>
          <g transform="scale(0.5)">
            <path fill="#00247d" d="M0 0h640v480H0z"/>
            <path stroke="#ffffff" strokeWidth="60" d="M0 0l640 480M640 0L0 480"/>
            <path stroke="#cc142b" strokeWidth="40" d="M0 0l640 480M640 0L0 480"/>
            <path stroke="#ffffff" strokeWidth="100" d="M320 0v480M0 240h640"/>
            <path stroke="#cc142b" strokeWidth="60" d="M320 0v480M0 240h640"/>
          </g>
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

  // High Density Dotted Matrix World Map Grid Coordinates
  const dottedMatrixMapPoints = [
    // North America & Canada
    [80, 80], [95, 80], [110, 80], [125, 70], [140, 70], [155, 75], [170, 80], [185, 80], [200, 85], [215, 90], [230, 95], [245, 100],
    [65, 95], [80, 95], [95, 95], [110, 95], [125, 95], [140, 95], [155, 95], [170, 95], [185, 95], [200, 100], [215, 105], [230, 110], [245, 115],
    [80, 110], [95, 110], [110, 110], [125, 110], [140, 110], [155, 110], [170, 110], [185, 115], [200, 120], [215, 125], [230, 130],
    [95, 125], [110, 125], [125, 125], [140, 125], [155, 125], [170, 125], [185, 130], [200, 135], [215, 140],
    [110, 140], [125, 140], [140, 140], [155, 140], [170, 140], [185, 145], [200, 150],
    [125, 155], [140, 155], [155, 155], [170, 155], [185, 160],
    [140, 170], [155, 170], [170, 170],
    // Greenland
    [260, 45], [275, 45], [290, 45], [305, 50], [320, 55],
    [260, 60], [275, 60], [290, 60], [305, 65],
    // South America
    [205, 195], [220, 195], [235, 200], [250, 205],
    [205, 210], [220, 210], [235, 215], [250, 220], [265, 225],
    [210, 225], [225, 225], [240, 230], [255, 235], [270, 240],
    [215, 240], [230, 240], [245, 245], [260, 250],
    [220, 255], [235, 255], [250, 260],
    [220, 270], [235, 270], [250, 275],
    [225, 285], [240, 285],
    [225, 300], [240, 300],
    [225, 315],
    // Europe
    [410, 80], [425, 75], [440, 75], [455, 75], [470, 80], [485, 85], [500, 90],
    [395, 95], [410, 95], [425, 95], [440, 95], [455, 95], [470, 95], [485, 95], [500, 100], [515, 105],
    [410, 110], [425, 110], [440, 110], [455, 110], [470, 110], [485, 110], [500, 115],
    [425, 125], [440, 125], [455, 125], [470, 125], [485, 125],
    // UK & Ireland (at 415, 85)
    [405, 80], [420, 80], [415, 90], [415, 85],
    // Africa
    [410, 140], [425, 140], [440, 140], [455, 140], [470, 140], [485, 140], [500, 145], [515, 150], [530, 155],
    [410, 155], [425, 155], [440, 155], [455, 155], [470, 155], [485, 155], [500, 160], [515, 165], [530, 170],
    [425, 170], [440, 170], [455, 170], [470, 170], [485, 175], [500, 180], [515, 185],
    [425, 185], [440, 185], [455, 185], [470, 185], [485, 190], [500, 195],
    [440, 200], [455, 200], [470, 200], [485, 205], [500, 210],
    [440, 215], [455, 215], [470, 215], [485, 220],
    [455, 230], [470, 230], [485, 235],
    [455, 245], [470, 245],
    [460, 260],
    // Asia & Middle East
    [530, 135], [545, 135], [560, 135], [575, 135], [540, 155],
    [530, 150], [545, 150], [560, 150], [575, 150], [590, 150],
    [545, 165], [560, 165], [575, 165], [590, 165], [605, 165],
    [600, 65], [615, 65], [630, 60], [645, 60], [660, 60], [675, 60], [690, 65], [705, 65], [720, 65], [735, 70], [750, 70], [765, 75], [780, 80], [795, 85], [810, 90],
    [600, 80], [615, 80], [630, 80], [645, 80], [660, 80], [675, 80], [690, 80], [705, 80], [720, 80], [735, 80], [750, 85], [765, 90], [780, 95], [795, 100], [810, 105],
    [600, 95], [615, 95], [630, 95], [645, 95], [660, 95], [675, 95], [690, 95], [705, 95], [720, 95], [735, 95], [750, 100], [765, 105], [780, 110], [795, 115],
    [600, 110], [615, 110], [630, 110], [645, 110], [660, 110], [675, 110], [690, 110], [705, 110], [720, 110], [735, 110], [750, 115], [765, 120], [780, 125],
    [615, 125], [630, 125], [645, 125], [660, 125], [675, 125], [690, 125], [705, 125], [720, 125], [735, 125], [750, 130],
    [615, 140], [630, 140], [645, 140], [660, 140], [675, 140], [690, 140], [705, 140], [720, 140], [735, 140],
    // India Subcontinent (at 660, 175)
    [630, 155], [645, 155], [660, 155], [675, 155], [690, 155],
    [645, 170], [660, 170], [675, 170], [660, 175],
    [645, 185], [660, 185], [675, 185],
    [660, 200], [670, 200],
    // Japan (at 810, 110)
    [800, 105], [815, 100], [810, 115], [820, 125], [810, 110],
    // Southeast Asia & Indonesia
    [720, 160], [735, 165], [750, 170], [765, 175],
    [735, 180], [750, 185], [765, 190], [780, 195],
    // Australia
    [750, 250], [765, 245], [780, 245], [795, 245], [810, 250], [825, 255], [840, 260],
    [735, 265], [750, 265], [765, 265], [780, 265], [795, 265], [810, 265], [825, 270], [840, 275],
    [750, 280], [765, 280], [780, 280], [795, 280], [810, 280], [825, 285],
    [765, 295], [780, 295], [795, 295], [810, 295],
    [780, 310], [795, 310],
    // New Zealand (at 865, 295)
    [860, 290], [875, 285], [865, 295],
    [865, 305], [880, 300]
  ];

  return (
    <section 
      id="global-presence-section"
      className="global-presence-exact-section"
      style={{
        padding: '4.5rem 0',
        backgroundColor: '#f8fafc',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(224, 242, 254, 0.4) 0%, transparent 70%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* ── DESKTOP ONLY TOP HEADER & MAP STAGE (Matching Reference Desktop Image) ── */}
        <div className="desktop-global-top-stage">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.4fr',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}>
            
            {/* LEFT SIDE: Desktop Header & Capabilities */}
            <ScrollReveal variant="fade-up">
              <div style={{ paddingRight: '1rem' }}>
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
                  fontSize: '2.65rem',
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
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: '#475569',
                  maxWidth: '420px',
                  marginBottom: '2rem'
                }}>
                  Delivering enterprise IT infrastructure, cloud, and managed services with 24×7 support across key international markets.
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.1rem',
                  marginBottom: '2.25rem'
                }}>
                  {[
                    { icon: '🖥️', title: 'Infrastructure Solutions' },
                    { icon: '☁️', title: 'Cloud Services' },
                    { icon: '🛡️', title: 'Cybersecurity & Compliance' },
                    { icon: '⚙️', title: 'Automation & Modernization' },
                    { icon: '🎧', title: '24×7 Support' }
                  ].map((cap, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', textAlign: 'center' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem'
                      }}>
                        {cap.icon}
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155', maxWidth: '85px', lineHeight: 1.2 }}>
                        {cap.title}
                      </span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/services" 
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    backgroundColor: '#2563eb', color: '#ffffff', padding: '0.85rem 1.75rem',
                    borderRadius: '50px', fontWeight: 700, fontSize: '0.92rem',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)', textDecoration: 'none'
                  }}
                >
                  <span>Explore Our Services</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* RIGHT SIDE: Desktop Dotted Matrix Connected World Map Stage */}
            <ScrollReveal variant="fade-up" delay={0.15}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '2.1 / 1', minHeight: '340px' }}>
                <svg viewBox="40 30 880 330" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                  <defs>
                    <filter id="indiaHubGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="mapArcLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* COMPLETE DOTTED MATRIX WORLD MAP CONTINENTS */}
                  <g fill="#cbd5e1" opacity="0.65">
                    {dottedMatrixMapPoints.map(([cx, cy], i) => (
                      <circle key={`dot-dt-${i}`} cx={cx} cy={cy} r="2.2" />
                    ))}
                  </g>

                  {/* PERFECTLY LANDED CURVED CONNECTING ARCS FROM INDIA (660, 175) */}
                  {/* Arc to UK (415, 85) */}
                  <path d="M 660 175 Q 535 70 415 85" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="4 3" />
                  {/* Arc to UAE (540, 155) */}
                  <path d="M 660 175 Q 600 150 540 155" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="4 3" />
                  {/* Arc to Japan (810, 110) */}
                  <path d="M 660 175 Q 735 125 810 110" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="4 3" />
                  {/* Arc to New Zealand (865, 295) */}
                  <path d="M 660 175 Q 785 245 865 295" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="4 3" />

                  {/* DESTINATION NODES */}
                  <circle cx="415" cy="85" r="4.5" fill="#3b82f6" />
                  <circle cx="540" cy="155" r="4.5" fill="#3b82f6" />
                  <circle cx="810" cy="110" r="4.5" fill="#3b82f6" />
                  <circle cx="865" cy="295" r="4.5" fill="#3b82f6" />

                  {/* CENTRAL INDIA HUB (660, 175) */}
                  <g transform="translate(660, 175)">
                    <circle r="26" fill="rgba(59, 130, 246, 0.14)" filter="url(#indiaHubGlow)" />
                    <circle r="16" fill="rgba(59, 130, 246, 0.25)" />
                    <circle r="8" fill="#1d4ed8" />
                    <foreignObject x="-14" y="-14" width="28" height="28">
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #ffffff' }}>
                        {countryCards[0].flag}
                      </div>
                    </foreignObject>
                    <g transform="translate(-65, 24)">
                      <rect x="0" y="0" width="130" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                      <text x="65" y="18" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">India</text>
                      <text x="65" y="31" fill="#2563eb" fontSize="8.5" fontWeight="700" textAnchor="middle">Pan-India Operations</text>
                    </g>
                  </g>

                  {/* BADGE 1: UK (415, 85) */}
                  <g transform="translate(415, 85)">
                    <g transform="translate(-115, -42)">
                      <rect x="0" y="0" width="115" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                      <foreignObject x="8" y="7" width="20" height="20">
                        <div style={{ width: '20px', height: '20px', borderRadius: '3px', overflow: 'hidden' }}>{countryCards[3].flag}</div>
                      </foreignObject>
                      <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800">United Kingdom</text>
                    </g>
                  </g>

                  {/* BADGE 2: UAE (540, 155) */}
                  <g transform="translate(540, 155)">
                    <g transform="translate(-150, 10)">
                      <rect x="0" y="0" width="145" height="48" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                      <foreignObject x="8" y="8" width="20" height="15">
                        <div style={{ width: '20px', height: '15px', borderRadius: '2px', overflow: 'hidden' }}>{countryCards[1].flag}</div>
                      </foreignObject>
                      <text x="34" y="19" fill="#0f172a" fontSize="9.5" fontWeight="800">United Arab Emirates (UAE)</text>
                      <text x="34" y="31" fill="#64748b" fontSize="7.5" fontWeight="600">Including Dubai /</text>
                      <text x="34" y="40" fill="#64748b" fontSize="7.5" fontWeight="600">MEA Expansion</text>
                    </g>
                  </g>

                  {/* BADGE 3: JAPAN (810, 110) */}
                  <g transform="translate(810, 110)">
                    <g transform="translate(14, -18)">
                      <rect x="0" y="0" width="90" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                      <foreignObject x="8" y="7" width="20" height="20">
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #e2e8f0' }}>{countryCards[2].flag}</div>
                      </foreignObject>
                      <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800">Japan</text>
                    </g>
                  </g>

                  {/* BADGE 4: NEW ZEALAND (865, 295) */}
                  <g transform="translate(865, 295)">
                    <g transform="translate(12, -18)">
                      <rect x="0" y="0" width="110" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                      <foreignObject x="8" y="7" width="20" height="20">
                        <div style={{ width: '20px', height: '20px', borderRadius: '3px', overflow: 'hidden' }}>{countryCards[4].flag}</div>
                      </foreignObject>
                      <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800">New Zealand</text>
                    </g>
                  </g>
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* DESKTOP 5 COUNTRY CARDS GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.25rem',
            marginBottom: '3rem'
          }} className="desktop-five-country-cards-grid">
            {countryCards.map((country, idx) => (
              <ScrollReveal key={country.id} variant="fade-up" delay={idx * 0.08}>
                <div style={{
                  backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.75rem 1.25rem',
                  border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
                }} className="exact-country-card">
                  <div style={{ width: '76px', height: '76px', borderRadius: '50%', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {country.illustration}
                  </div>
                  <div style={{ width: '32px', height: '22px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.75rem', boxShadow: '0 2px 6px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.06)' }}>
                    {country.flag}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: country.subtitle ? '0.25rem' : '0.85rem', lineHeight: 1.25 }}>
                    {country.name}
                  </h3>
                  {country.subtitle && (
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, color: country.subtitleColor, marginBottom: '0.85rem', lineHeight: 1.3 }}>
                      {country.subtitle}
                    </p>
                  )}
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                    {country.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* DESKTOP STATS BAR */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0',
              padding: '1.25rem 2rem', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
              display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', alignItems: 'center'
            }} className="desktop-stats-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🌐</div>
                <div><div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0f172a' }}>5+</div><div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Countries</div></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>👥</div>
                <div><div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a' }}>Global</div><div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Delivery Model</div></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🕒</div>
                <div><div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a' }}>24×7</div><div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Support</div></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🛡️</div>
                <div><div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a' }}>100%</div><div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Commitment</div></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🤝</div>
                <div><div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a' }}>Trusted</div><div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>By Enterprises Worldwide</div></div>
              </div>
            </div>
          </ScrollReveal>
        </div>


        {/* ── MOBILE ONLY DESIGN ── */}
        <div className="mobile-global-presence-wrapper">
          {/* Mobile Centered Header */}
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{
                color: '#2563eb',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
                display: 'inline-block'
              }}>
                GLOBAL PRESENCE
              </span>

              <h2 style={{
                fontSize: '2.1rem',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '0.75rem'
              }}>
                Expanding <span style={{ color: '#2563eb' }}>Beyond Borders</span>
              </h2>

              <p style={{
                fontSize: '0.9rem',
                color: '#475569',
                maxWidth: '340px',
                margin: '0 auto',
                lineHeight: 1.55
              }}>
                Delivering enterprise IT infrastructure and support across key international markets.
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile Central "Q" Node World Map with Dotted Matrix Grid */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1.7 / 1',
              minHeight: '260px',
              marginBottom: '2rem'
            }}>
              <svg viewBox="100 20 700 360" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                <defs>
                  <radialGradient id="qHubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="mobileArc" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* DOTTED MATRIX MAP CONTINENTS (MOBILE) */}
                <g fill="#cbd5e1" opacity="0.65">
                  {dottedMatrixMapPoints.map(([cx, cy], i) => (
                    <circle key={`dot-mb-${i}`} cx={cx} cy={cy} r="2.2" />
                  ))}
                </g>

                {/* 5 CURVED ARCS RADIATING FROM CENTRAL "Q" NODE (450, 180) */}
                <path d="M 450 180 Q 350 100 260 110" fill="none" stroke="url(#mobileArc)" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M 450 180 Q 560 100 650 110" fill="none" stroke="url(#mobileArc)" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M 450 180 Q 300 200 180 200" fill="none" stroke="url(#mobileArc)" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M 450 180 Q 450 260 450 280" fill="none" stroke="url(#mobileArc)" strokeWidth="2" strokeDasharray="4 3" />
                <path d="M 450 180 Q 600 200 730 200" fill="none" stroke="url(#mobileArc)" strokeWidth="2" strokeDasharray="4 3" />

                {/* CENTRAL "Q" INNOWORQ NODE (450, 180) */}
                <g transform="translate(450, 180)">
                  <circle r="34" fill="url(#qHubGlow)" />
                  <circle r="22" fill="#ffffff" stroke="#2563eb" strokeWidth="3" filter="drop-shadow(0 4px 10px rgba(37,99,235,0.25))" />
                  <text x="0" y="8" fill="#2563eb" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="var(--font-heading)">Q</text>
                </g>

                {/* NODE 1: UK (260, 110) */}
                <g transform="translate(260, 110)">
                  <circle r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                  <foreignObject x="-11" y="-11" width="22" height="22">
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', overflow: 'hidden' }}>{countryCards[3].flag}</div>
                  </foreignObject>
                  <text x="0" y="-18" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">United Kingdom</text>
                </g>

                {/* NODE 2: JAPAN (650, 110) */}
                <g transform="translate(650, 110)">
                  <circle r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                  <foreignObject x="-11" y="-11" width="22" height="22">
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', overflow: 'hidden' }}>{countryCards[2].flag}</div>
                  </foreignObject>
                  <text x="0" y="-18" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">Japan</text>
                </g>

                {/* NODE 3: INDIA (180, 200) */}
                <g transform="translate(180, 200)">
                  <circle r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                  <foreignObject x="-11" y="-11" width="22" height="22">
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', overflow: 'hidden' }}>{countryCards[0].flag}</div>
                  </foreignObject>
                  <text x="0" y="24" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">India</text>
                  <text x="0" y="36" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="middle">(Pan-India)</text>
                </g>

                {/* NODE 4: UAE (450, 280) */}
                <g transform="translate(450, 280)">
                  <circle r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                  <foreignObject x="-11" y="-11" width="22" height="22">
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', overflow: 'hidden' }}>{countryCards[1].flag}</div>
                  </foreignObject>
                  <text x="0" y="24" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">UAE</text>
                  <text x="0" y="36" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="middle">(Dubai / MEA)</text>
                </g>

                {/* NODE 5: NEW ZEALAND (730, 200) */}
                <g transform="translate(730, 200)">
                  <circle r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                  <foreignObject x="-11" y="-11" width="22" height="22">
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', overflow: 'hidden' }}>{countryCards[4].flag}</div>
                  </foreignObject>
                  <text x="0" y="24" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">New Zealand</text>
                </g>

              </svg>
            </div>
          </ScrollReveal>

          {/* Mobile Stacked List Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {countryCards.map((country, idx) => (
              <ScrollReveal key={`mob-${country.id}`} variant="fade-up" delay={idx * 0.06}>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  padding: '0.95rem 0.9rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.025)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textDecoration: 'none'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden' }}>
                      {country.flag}
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.15rem', lineHeight: 1.2 }}>
                      {country.name}
                    </h3>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                      {country.mobileSubtitle}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      {country.mobileDesc}
                    </p>
                  </div>

                  <div style={{ color: '#2563eb', fontSize: '1.2rem', fontWeight: 700, opacity: 0.75, flexShrink: 0 }}>
                    ›
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile Bottom Stats Bar */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div style={{
              backgroundColor: '#edf5ff',
              borderRadius: '16px',
              border: '1px solid #dbeafe',
              padding: '1.25rem 0.85rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.5rem',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>🌐</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#2563eb', lineHeight: 1.1 }}>5+</div>
                <div style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600 }}>Countries</div>
              </div>

              <div>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>🎧</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#2563eb', lineHeight: 1.1 }}>24×7</div>
                <div style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600 }}>Support</div>
              </div>

              <div>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>🛡️</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#2563eb', lineHeight: 1.1 }}>100%</div>
                <div style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600 }}>Commitment</div>
              </div>

              <div>
                <div style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>🤝</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#2563eb', lineHeight: 1.1 }}>Trusted</div>
                <div style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600 }}>Worldwide</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile Bottom Footer CTA Container */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div style={{ textAlign: 'center', padding: '1rem 0 0.5rem 0' }}>
              <span style={{
                color: '#2563eb',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                LET'S WORK TOGETHER
              </span>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#0f172a',
                marginBottom: '1.1rem'
              }}>
                Ready to grow globally?
              </h3>
              <Link 
                to="/services" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  textDecoration: 'none'
                }}
              >
                <span>Connect With Us</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

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
        .desktop-global-top-stage {
          display: block;
        }
        .desktop-five-country-cards-grid {
          display: grid;
        }
        .desktop-stats-bar {
          display: grid;
        }
        .mobile-global-presence-wrapper {
          display: none;
        }

        /* ── MOBILE BREAKPOINT TOGGLE (<= 768px) ── */
        @media (max-width: 768px) {
          .desktop-global-top-stage {
            display: none !important;
          }
          .desktop-five-country-cards-grid {
            display: none !important;
          }
          .desktop-stats-bar {
            display: none !important;
          }
          .mobile-global-presence-wrapper {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
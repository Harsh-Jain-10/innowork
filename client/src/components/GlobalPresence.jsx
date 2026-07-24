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
      mobileSubtitle: 'Dubai / MEA Expansion',
      subtitleColor: '#2563eb',
      desc: 'Expanding across the UAE and MEA region to support enterprises with local presence and global expertise.',
      mobileDesc: 'Expanding across the UAE and MEA region to deliver closer, faster, and smarter support.',
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
      mobileSubtitle: 'Technology Partnerships',
      subtitleColor: '#2563eb',
      desc: 'Delivering advanced technology solutions and support through our operations and trusted partnerships in Japan.',
      mobileDesc: 'Delivering advanced technology solutions with trusted partnerships in Japan.',
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
      mobileSubtitle: 'Enterprise Support',
      subtitleColor: '#2563eb',
      desc: 'Supporting businesses across the UK with enterprise-grade solutions and 24×7 managed support.',
      mobileDesc: 'Supporting businesses across the UK with enterprise-grade IT solutions and 24×7 support.',
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
      mobileSubtitle: 'Global Reach',
      subtitleColor: '#2563eb',
      desc: 'Extending our reach to New Zealand with reliable IT services and customer-focused support.',
      mobileDesc: 'Extending our reach to New Zealand with reliable IT services and customer-focused support.',
      accentBg: '#e0f2fe',
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
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* ── DESKTOP ONLY TOP HEADER & MAP STAGE (Hidden on mobile) ── */}
        <div className="desktop-global-top-stage">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}>
            
            {/* LEFT SIDE: Desktop Header & Capabilities */}
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
                  fontSize: '2.75rem',
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
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#475569',
                  maxWidth: '460px',
                  marginBottom: '2rem'
                }}>
                  Delivering enterprise IT infrastructure, cloud, and managed services with 24×7 support across key international markets.
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
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
                        width: '42px', height: '42px', borderRadius: '50%',
                        backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'
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

            {/* RIGHT SIDE: Desktop Interactive Map with Complete World Map Vector Outlines */}
            <ScrollReveal variant="fade-up" delay={0.15}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '2.1 / 1', minHeight: '320px' }}>
                <svg viewBox="50 40 860 320" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                  <defs>
                    <filter id="indiaHubGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="mapArcLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>

                  {/* ── COMPLETE VECTOR CONTINENTAL WORLD MAP OUTLINES ── */}
                  <g fill="#cbd5e1" opacity="0.45" stroke="#94a3b8" strokeWidth="0.8" strokeLinejoin="round">
                    {/* North America */}
                    <path d="M 90 60 L 140 50 L 190 55 L 220 70 L 250 85 L 230 110 L 210 130 L 190 145 L 170 150 L 160 160 L 150 140 L 130 140 L 110 130 L 90 110 L 75 90 Z" />
                    {/* Greenland */}
                    <path d="M 270 45 L 310 40 L 330 55 L 300 70 L 270 60 Z" />
                    {/* South America */}
                    <path d="M 195 165 L 235 175 L 265 200 L 255 240 L 235 270 L 225 295 L 215 280 L 210 240 L 195 200 Z" />
                    {/* Europe */}
                    <path d="M 410 70 L 450 65 L 490 70 L 510 85 L 480 110 L 450 115 L 420 110 L 400 90 Z" />
                    {/* UK & Ireland */}
                    <path d="M 405 85 L 420 80 L 425 95 L 410 100 Z" />
                    {/* Africa */}
                    <path d="M 410 120 L 460 118 L 510 135 L 530 165 L 510 205 L 470 245 L 450 240 L 435 210 L 420 170 Z" />
                    {/* Madagascar */}
                    <path d="M 540 215 L 550 210 L 545 235 L 538 230 Z" />
                    {/* Asia & Middle East & India Subcontinent */}
                    <path d="M 515 65 L 600 55 L 720 50 L 800 65 L 820 100 L 780 135 L 730 140 L 680 175 L 640 185 L 620 155 L 575 160 L 540 150 L 520 115 Z" />
                    {/* India Subcontinent Projection */}
                    <path d="M 625 140 Q 660 155 675 190 T 645 220 T 620 175 Z" fill="#93c5fd" opacity="0.3" stroke="#2563eb" strokeWidth="1" />
                    {/* Japan Archipelago */}
                    <path d="M 790 105 L 805 95 L 810 115 L 795 125 Z" />
                    {/* SE Asia & Islands */}
                    <path d="M 720 170 L 750 180 L 780 195 L 760 210 L 730 195 Z" />
                    {/* Australia */}
                    <path d="M 750 245 L 810 240 L 840 265 L 830 300 L 770 305 L 745 275 Z" />
                    {/* New Zealand */}
                    <path d="M 865 290 L 878 285 L 872 315 L 860 310 Z" />
                  </g>

                  {/* CURVED ARCS FROM INDIA HUB (660, 160) */}
                  <path d="M 660 160 Q 560 90 460 100" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M 660 160 Q 590 150 520 175" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M 660 160 Q 730 110 800 110" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M 660 160 Q 780 230 850 275" fill="none" stroke="url(#mapArcLine)" strokeWidth="2" strokeDasharray="5 4" />

                  {/* OUTER NODE DOTS */}
                  <circle cx="460" cy="100" r="5" fill="#2563eb" />
                  <circle cx="520" cy="175" r="5" fill="#2563eb" />
                  <circle cx="800" cy="110" r="5" fill="#2563eb" />
                  <circle cx="850" cy="275" r="5" fill="#2563eb" />

                  {/* CENTRAL HUB: INDIA NODE (660, 160) */}
                  <g transform="translate(660, 160)">
                    <circle r="26" fill="rgba(59, 130, 246, 0.12)" filter="url(#indiaHubGlow)" />
                    <circle r="16" fill="rgba(59, 130, 246, 0.25)" />
                    <circle r="8" fill="#1d4ed8" />
                    <foreignObject x="-14" y="-14" width="28" height="28">
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #ffffff' }}>
                        {countryCards[0].flag}
                      </div>
                    </foreignObject>
                    <g transform="translate(-65, 24)">
                      <rect x="0" y="0" width="130" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                      <text x="65" y="18" fill="#0f172a" fontSize="11" fontWeight="800" textAnchor="middle">India</text>
                      <text x="65" y="31" fill="#2563eb" fontSize="8.5" fontWeight="700" textAnchor="middle">Pan-India Operations</text>
                    </g>
                  </g>

                  {/* CALLOUT BADGE 1: UNITED KINGDOM (460, 100) */}
                  <g transform="translate(460, 100)">
                    <g transform="translate(-115, -42)">
                      <rect x="0" y="0" width="115" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                      <foreignObject x="8" y="7" width="20" height="20">
                        <div style={{ width: '20px', height: '20px', borderRadius: '3px', overflow: 'hidden' }}>{countryCards[3].flag}</div>
                      </foreignObject>
                      <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800">United Kingdom</text>
                    </g>
                  </g>

                  {/* CALLOUT BADGE 2: UAE (520, 175) */}
                  <g transform="translate(520, 175)">
                    <g transform="translate(-150, 10)">
                      <rect x="0" y="0" width="145" height="48" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                      <foreignObject x="8" y="8" width="20" height="15">
                        <div style={{ width: '20px', height: '15px', borderRadius: '2px', overflow: 'hidden' }}>{countryCards[1].flag}</div>
                      </foreignObject>
                      <text x="34" y="19" fill="#0f172a" fontSize="9.5" fontWeight="800">United Arab Emirates (UAE)</text>
                      <text x="34" y="31" fill="#64748b" fontSize="7.5" fontWeight="600">Including Dubai /</text>
                      <text x="34" y="40" fill="#64748b" fontSize="7.5" fontWeight="600">MEA Expansion</text>
                    </g>
                  </g>

                  {/* CALLOUT BADGE 3: JAPAN (800, 110) */}
                  <g transform="translate(800, 110)">
                    <g transform="translate(14, -18)">
                      <rect x="0" y="0" width="90" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                      <foreignObject x="8" y="7" width="20" height="20">
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #e2e8f0' }}>{countryCards[2].flag}</div>
                      </foreignObject>
                      <text x="34" y="21" fill="#0f172a" fontSize="10" fontWeight="800">Japan</text>
                    </g>
                  </g>

                  {/* CALLOUT BADGE 4: NEW ZEALAND (850, 275) */}
                  <g transform="translate(850, 275)">
                    <g transform="translate(12, -18)">
                      <rect x="0" y="0" width="110" height="34" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
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


        {/* ── MOBILE ONLY DESIGN (Displayed on screens <= 768px matching mobile screenshot) ── */}
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

          {/* Mobile Central "Q" Node World Map with Complete Vector Continents */}
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

                {/* ── COMPLETE VECTOR CONTINENTS (MOBILE) ── */}
                <g fill="#cbd5e1" opacity="0.45" stroke="#94a3b8" strokeWidth="0.8" strokeLinejoin="round">
                  <path d="M 120 70 L 170 60 L 220 65 L 250 80 L 280 95 L 260 120 L 240 140 L 220 155 L 190 150 L 145 135 Z" />
                  <path d="M 230 175 L 270 185 L 300 210 L 290 250 L 270 280 L 250 290 Z" />
                  <path d="M 390 80 L 430 75 L 470 80 L 490 95 L 460 120 L 410 120 Z" />
                  <path d="M 390 130 L 440 128 L 490 145 L 510 175 L 490 215 L 450 255 Z" />
                  <path d="M 495 75 L 580 65 L 700 60 L 780 75 L 760 145 L 660 185 L 590 170 Z" />
                  <path d="M 680 255 L 740 250 L 770 275 L 760 310 L 700 315 Z" />
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {countryCards.map((country, idx) => (
              <ScrollReveal key={`mob-${country.id}`} variant="fade-up" delay={idx * 0.06}>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '1.15rem 1.1rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
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
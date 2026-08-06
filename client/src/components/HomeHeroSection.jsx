import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_FEATURE_CARDS = [
  {
    id: 'cloud',
    title: 'Cloud & Hybrid IT',
    categoryTag: 'Drive innovation',
    highlightText: 'AI & IT solutions',
    desc: 'Tap into AI to create intelligent solutions that optimize processes, enhance decision-making, and spark scalable growth.',
    link: '/services#hco-cloud-services',
    badgeText: 'MULTI-CLOUD OPS'
  },
  {
    id: 'datacenter',
    title: 'Datacenter Management',
    categoryTag: 'Prove viability',
    highlightText: 'MVP & OEM solutions',
    desc: 'Test your concept and prove market demand with an MVP that minimizes investment, gathers real feedback, and guides smart product decisions.',
    link: '/services#it-datacenter-management',
    badgeText: 'OEM HARDWARE'
  },
  {
    id: 'noc',
    title: '24×7 NOC Monitoring',
    categoryTag: 'Stay resilient',
    highlightText: 'reliable infrastructure',
    desc: 'Build a solid foundation for growth — with infrastructure that holds up under any load, smarter resource use, and DevOps practices that reduce risk.',
    link: '/services#noc-services',
    badgeText: '24×7 NOC SLA'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Systems',
    categoryTag: 'Zero-Trust Defense',
    highlightText: 'Zero-Trust SOC solutions',
    desc: 'Fortify perimeter defense, next-gen firewalls, VLAN segmentation, SOC telemetry, and ISO 27001 audited security.',
    link: '/services#third-party-maintenance',
    badgeText: 'ZERO-TRUST SOC'
  }
];

/* ─────────────────────────────────────────────────────────────
   LARGE HIGH-IMPACT 3D FLOATING GRAPHICS (Brights.io Exact Scale)
 ────────────────────────────────────────────────────────────── */
function HeroAbstractGraphics({ activeServiceId }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        overflow: 'visible'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeServiceId}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* ================= ARTWORK 1: CLOUD & AI ================= */}
          {activeServiceId === 'cloud' && (
            <svg
              viewBox="0 0 600 450"
              fill="none"
              style={{ width: '100%', height: '100%', maxWidth: '640px', overflow: 'visible' }}
            >
              <defs>
                <radialGradient id="torusGrad1" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#3d4454" />
                  <stop offset="50%" stopColor="#181a24" />
                  <stop offset="100%" stopColor="#08090c" />
                </radialGradient>
                <linearGradient id="blue3DGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2b77ff" />
                  <stop offset="100%" stopColor="#1a5fe6" />
                </linearGradient>
                <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000000" floodOpacity="0.85" />
                </filter>
              </defs>

              {/* 1. Large Floating Dark Tile with Dots */}
              <motion.g
                animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                filter="url(#glow1)"
              >
                <path d="M 190 40 L 350 110 L 270 205 L 110 135 Z" fill="#181a22" stroke="#2c303f" strokeWidth="2" />
                <circle cx="185" cy="110" r="6" fill="#1a68ff" />
                <circle cx="205" cy="119" r="6" fill="#38bdf8" />
                <circle cx="225" cy="128" r="6" fill="#475569" />
              </motion.g>

              {/* 2. HUGE Dark Glossy 3D Torus Donut Ring */}
              <motion.g
                animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                filter="url(#glow1)"
              >
                <path
                  d="M 400 90 C 530 140 560 310 440 375 C 320 440 200 370 170 260 C 140 150 270 40 400 90 Z"
                  fill="url(#torusGrad1)"
                  stroke="#2d3242"
                  strokeWidth="2"
                />
                <path
                  d="M 390 160 C 450 185 460 270 410 305 C 360 340 290 300 280 250 C 270 200 330 145 390 160 Z"
                  fill="#050505"
                  stroke="#1c1f2b"
                  strokeWidth="2"
                />
              </motion.g>

              {/* 3. Large Electric Blue 3D L-Chevron Block */}
              <motion.g
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                filter="url(#glow1)"
              >
                <path d="M 330 180 L 380 150 L 400 165 L 380 180 L 380 210 L 360 225 L 360 195 Z" fill="url(#blue3DGrad1)" />
                <path d="M 330 180 L 360 195 L 360 225 L 330 210 Z" fill="#1449b8" />
                <path d="M 360 225 L 380 210 L 400 225 L 380 240 Z" fill="#1a5fe6" />
              </motion.g>
            </svg>
          )}

          {/* ================= ARTWORK 2: DATACENTER / MVP ================= */}
          {activeServiceId === 'datacenter' && (
            <svg
              viewBox="0 0 600 450"
              fill="none"
              style={{ width: '100%', height: '100%', maxWidth: '640px', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="blueCheckGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a68ff" />
                  <stop offset="100%" stopColor="#0044cc" />
                </linearGradient>
                <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000000" floodOpacity="0.85" />
                </filter>
              </defs>

              {/* HUGE Multi-Ring Concentric Arcs Background */}
              <motion.g
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="420" cy="225" r="185" stroke="#1c1f2b" strokeWidth="4" strokeDasharray="24 16" />
                <circle cx="420" cy="225" r="135" stroke="#2a2e3d" strokeWidth="3" strokeDasharray="12 12" />
                <circle cx="420" cy="225" r="85" stroke="#1a68ff" strokeWidth="2" opacity="0.35" />
              </motion.g>

              {/* Floating Server Blade / Tile */}
              <motion.g
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                filter="url(#glow2)"
              >
                <path d="M 130 160 C 160 135 220 135 250 160 L 270 230 C 240 255 180 265 150 240 Z" fill="#181a22" stroke="#2c303f" strokeWidth="2" />
                <rect x="175" y="180" width="55" height="10" rx="5" fill="#1a68ff" />
              </motion.g>

              {/* HUGE 3D Electric Blue Checkmark (Exact brights.io match!) */}
              <motion.g
                animate={{ y: [0, -14, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                filter="url(#glow2)"
              >
                <path
                  d="M 330 220 L 390 290 L 510 150 L 470 115 L 390 215 L 350 180 Z"
                  fill="url(#blueCheckGrad2)"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
                <path d="M 390 290 L 390 310 L 510 170 L 510 150 Z" fill="#003599" />
                <path d="M 330 220 L 330 240 L 390 310 L 390 290 Z" fill="#0c44b3" />
              </motion.g>
            </svg>
          )}

          {/* ================= ARTWORK 3: NOC / DEVOPS & INFRASTRUCTURE (Large Circle + Arrows + Blue Gear ⚙) ================= */}
          {activeServiceId === 'noc' && (
            <svg
              viewBox="0 0 600 450"
              fill="none"
              style={{ width: '100%', height: '100%', maxWidth: '640px', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="gearGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a68ff" />
                  <stop offset="100%" stopColor="#0055ff" />
                </linearGradient>
                <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000000" floodOpacity="0.85" />
                </filter>
              </defs>

              {/* HUGE Concentric Circle Background with Rotating Perimeter Direction Arrows (Matching brights.io screenshot 3!) */}
              <motion.g
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '400px 225px' }}
              >
                <circle cx="400" cy="225" r="190" fill="#0e0f14" stroke="#1d202b" strokeWidth="4" />
                <circle cx="400" cy="225" r="145" fill="#14161f" stroke="#282c3c" strokeWidth="3" />
                <circle cx="400" cy="225" r="95" stroke="#1a68ff" strokeWidth="2" strokeDasharray="14 10" opacity="0.4" />

                {/* Rotating Perimeter Arrow 1 */}
                <g transform="translate(400, 35)">
                  <path d="M -12 0 L 12 0 L 0 -16 Z" fill="#38bdf8" />
                </g>
                {/* Rotating Perimeter Arrow 2 */}
                <g transform="translate(590, 225) rotate(90)">
                  <path d="M -12 0 L 12 0 L 0 -16 Z" fill="#1a68ff" />
                </g>
                {/* Rotating Perimeter Arrow 3 */}
                <g transform="translate(210, 225) rotate(-90)">
                  <path d="M -12 0 L 12 0 L 0 -16 Z" fill="#475569" />
                </g>
              </motion.g>

              {/* Floating Dark Command / Avatar Tile */}
              <motion.g
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                filter="url(#glow3)"
              >
                <path d="M 120 180 C 150 150 210 150 240 180 L 260 250 C 230 280 170 290 140 260 Z" fill="#181a22" stroke="#2c303f" strokeWidth="2" />
                <circle cx="190" cy="205" r="16" fill="#1a68ff" opacity="0.9" />
                <path d="M 170 240 C 170 225 210 225 210 240 Z" fill="#38bdf8" />
              </motion.g>

              {/* HUGE 3D Electric Blue Gear / Sprocket Icon ⚙ (Exact brights.io screenshot match!) */}
              <motion.g
                animate={{ rotate: [0, -360], y: [0, -8, 0] }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }}
                filter="url(#glow3)"
                style={{ transformOrigin: '460px 290px' }}
              >
                <g transform="translate(460, 290)">
                  {/* Gear Outer Teeth (8 3D teeth) */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <rect
                      key={i}
                      x="-14"
                      y="-55"
                      width="28"
                      height="22"
                      rx="5"
                      fill="url(#gearGrad3)"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  {/* Gear Center Disk */}
                  <circle cx="0" cy="0" r="42" fill="url(#gearGrad3)" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="0" cy="0" r="18" fill="#050505" stroke="#1449b8" strokeWidth="2" />
                </g>
              </motion.g>
            </svg>
          )}

          {/* ================= ARTWORK 4: CYBERSECURITY SYSTEMS ================= */}
          {activeServiceId === 'cybersecurity' && (
            <svg
              viewBox="0 0 600 450"
              fill="none"
              style={{ width: '100%', height: '100%', maxWidth: '640px', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="shieldGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a68ff" />
                  <stop offset="100%" stopColor="#0838a8" />
                </linearGradient>
                <filter id="glow4" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000000" floodOpacity="0.85" />
                </filter>
              </defs>

              {/* HUGE Hexagonal Security Mesh */}
              <polygon points="380,50 520,130 520,310 380,390 240,310 240,130" stroke="#1d202b" strokeWidth="3" fill="none" />
              <polygon points="380,90 480,150 480,290 380,350 280,290 280,150" stroke="#2a2e3d" strokeWidth="2" fill="none" />

              {/* Central Floating 3D Shield Emblem */}
              <motion.g
                animate={{ y: [0, -12, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                filter="url(#glow4)"
              >
                <path
                  d="M 380 130 L 450 170 V 260 C 450 310 380 340 380 340 C 380 340 310 310 310 260 V 170 Z"
                  fill="url(#shieldGrad4)"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />
                <rect x="360" y="215" width="40" height="32" rx="6" fill="#ffffff" />
                <path d="M 370 215 V 200 C 370 193 390 193 390 200 V 215" stroke="#ffffff" strokeWidth="4" fill="none" />
              </motion.g>
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN HERO SECTION COMPONENT (Brights.io exact dynamic switching)
 ────────────────────────────────────────────────────────────── */
export default function HomeHeroSection() {
  const [activeServiceId, setActiveServiceId] = useState('cloud');

  const currentCard = HERO_FEATURE_CARDS.find((c) => c.id === activeServiceId) || HERO_FEATURE_CARDS[0];

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        color: '#0f172a',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '60px',
        minHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      id="hero-enterprise-section"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        
        {/* Upper Split Layout: Headline (Left) + Dynamic 3D Abstract Artwork (Right) */}
        <div
          className="hero-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
        >
          {/* Left Side: Headline */}
          <div>
            {/* Main H1 Headline with Dynamic End Phrase Switching */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: 1.14,
                margin: 0,
                maxWidth: '780px'
              }}
            >
              Your tech partner for creating sustainable business value through{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentCard.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: '#1a68ff', display: 'inline-block' }}
                >
                  {currentCard.highlightText}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>

          {/* Right Side: Dynamic Floating 3D Graphic Canvas */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
            className="hero-graphics-wrapper"
          >
            <HeroAbstractGraphics activeServiceId={activeServiceId} />
          </div>
        </div>

        {/* Bottom 4-Card Service Feature Strip (Brights.io Exact Interactive Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.1rem',
            alignItems: 'stretch'
          }}
          className="hero-feature-strip-grid"
        >
          {HERO_FEATURE_CARDS.map((card) => {
            const isActive = activeServiceId === card.id;

            return (
              <Link
                key={card.id}
                to={card.link}
                onClick={() => setActiveServiceId(card.id)}
                onMouseEnter={() => setActiveServiceId(card.id)}
                style={{
                  backgroundColor: isActive ? '#1a68ff' : '#ffffff',
                  borderRadius: '14px',
                  border: isActive ? '1px solid #1a68ff' : '1px solid #e2e8f0',
                  padding: '2.2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '270px',
                  textDecoration: 'none',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  boxShadow: isActive
                    ? '0 16px 36px rgba(26, 104, 255, 0.28)'
                    : '0 4px 20px rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {isActive ? (
                  /* ================= ACTIVE CARD CONTENT (SOLID ELECTRIC BLUE) ================= */
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Top Tag */}
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.85)',
                        marginBottom: '1.5rem',
                        display: 'block'
                      }}
                    >
                      {card.categoryTag}
                    </span>

                    {/* Main Active Description */}
                    <p
                      style={{
                        fontSize: '1.12rem',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        color: '#ffffff',
                        margin: 0
                      }}
                    >
                      {card.desc}
                    </p>
                  </motion.div>
                ) : (
                  /* ================= INACTIVE CARD CONTENT (CLEAN WHITE WITH BLUE ACCENTS) ================= */
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.35,
                        margin: 0
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Bottom Right Arrow Icon */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '2rem'
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a68ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transition: 'stroke 0.2s ease, transform 0.2s ease' }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}




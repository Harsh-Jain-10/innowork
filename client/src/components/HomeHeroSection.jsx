import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HERO_FEATURE_CARDS = [
  {
    id: 'cloud',
    title: 'Cloud & Hybrid IT',
    desc: 'Hybrid cloud operations, seamless AWS/Azure migrations, and virtualization management.',
    link: '/services#hco-cloud-services',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    )
  },
  {
    id: 'datacenter',
    title: 'Datacenter Management',
    desc: 'End-to-end datacenter operations, capacity planning, and infrastructure lifecycle support.',
    link: '/services#it-datacenter-management',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  },
  {
    id: 'noc',
    title: '24×7 NOC Monitoring',
    desc: 'Round-the-clock remote network monitoring, alarm handling, and real-time incident triage.',
    link: '/services#noc-services',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Systems',
    desc: 'Perimeter defense, next-gen firewalls, VLAN zoning, and strict compliance controls.',
    link: '/services#third-party-maintenance',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

function HeroFeatureCard({ card }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={card.link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#2563EB' : '#ffffff',
        borderRadius: '14px',
        border: isHovered ? '1px solid #2563EB' : '1px solid #E6E9EE',
        boxShadow: isHovered ? '0 12px 30px rgba(37, 99, 235, 0.22)' : '0 2px 8px rgba(15, 23, 42, 0.03)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '210px',
        textDecoration: 'none',
        transition: 'all 200ms ease-out',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        cursor: 'pointer'
      }}
    >
      <div>
        {/* 1. Small Icon Container */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.18)' : '#EFF6FF',
            color: isHovered ? '#ffffff' : '#2563EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.1rem',
            transition: 'all 200ms ease-out'
          }}
        >
          {card.icon}
        </div>

        {/* 2. Fixed Title (18px, 700) */}
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: isHovered ? '#ffffff' : '#0F172A',
            margin: '0 0 0.5rem 0',
            lineHeight: 1.3,
            transition: 'color 200ms ease-out'
          }}
        >
          {card.title}
        </h3>

        {/* 3. One-line Description (14px, max 2 lines) */}
        <p
          style={{
            fontSize: '14px',
            color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#475569',
            lineHeight: 1.55,
            margin: 0,
            transition: 'color 200ms ease-out',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {card.desc}
        </p>
      </div>

      {/* 4. Learn More Link + Arrow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '1.25rem',
          fontSize: '14px',
          fontWeight: 700,
          color: isHovered ? '#ffffff' : '#2563EB',
          transition: 'color 200ms ease-out'
        }}
      >
        <span>Learn More</span>
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          →
        </motion.span>
      </div>
    </Link>
  );
}

export default function HomeHeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#F8FAFC',
        color: '#0F172A',
        borderBottom: '1px solid #E6E9EE',
        overflow: 'hidden',
        padding: '104px 0 32px 0' /* 80px navbar height + 24px top padding, 32px bottom padding */
      }}
      id="hero-enterprise-section"
    >
      {/* Background Soft Subtle Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Split Grid: Left Content + Right Contained NOC Diagram */}
        <div 
          className="hero-split-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.15fr 0.85fr', 
            gap: '3rem', 
            alignItems: 'center', 
            marginBottom: '24px' 
          }}
        >
          
          {/* Left Column: Headline & CTAs */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '30px',
                  padding: '6px 14px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#2563EB',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#2563EB', display: 'inline-block' }} />
                #1 ENTERPRISE IT MANAGED SERVICES &amp; HARDWARE SUPPORT
              </span>
            </div>

            {/* Static Headline - No Line Swapping */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                lineHeight: 1.18,
                margin: '0 0 1.25rem 0'
              }}
            >
              Your Technology Support Partner for Enterprise IT &amp; Infrastructure Value.
            </h1>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '1.75rem',
                maxWidth: '620px'
              }}
            >
              We deliver SLA-bound 24×7 NOC monitoring, multi-cloud operations, third-party hardware maintenance, and cybersecurity resilience for mission-critical enterprise environments.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/about#welcome-to-innoworq"
                style={{
                  backgroundColor: '#2563EB',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Get SLA Quote</span>
                <span>→</span>
              </Link>
              <Link
                to="/services"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0F172A',
                  border: '1px solid #E6E9EE',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Cleanly Contained Infrastructure Diagram */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              border: '1px solid #E6E9EE',
              backgroundColor: '#ffffff',
              padding: '1rem',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ width: '100%', maxWidth: '440px' }}>
              <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <defs>
                  <linearGradient id="blueGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>

                {/* Connecting Lines */}
                <path d="M 80 170 Q 250 80 420 170" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 120 270 Q 250 340 380 270" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 100 190 L 250 190 L 400 190" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M 250 85 L 250 310" stroke="#e2e8f0" strokeWidth="2" />

                {/* Central NOC Core Node */}
                <g transform="translate(180, 120)">
                  <rect width="140" height="140" rx="18" fill="url(#blueGradHero)" />
                  <circle cx="70" cy="55" r="26" fill="#ffffff" opacity="0.18" />
                  <path d="M 70 38 C 58 38 48 48 48 60 L 92 60 C 92 48 82 38 70 38 Z" fill="#ffffff" />
                  <rect x="52" y="65" width="36" height="4" rx="2" fill="#ffffff" />
                  <text x="70" y="98" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">24×7 NOC CORE</text>
                  <circle cx="115" cy="25" r="5" fill="#10b981" />
                </g>

                {/* Node 1: Hybrid Cloud */}
                <g transform="translate(40, 45)">
                  <rect width="120" height="85" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 45 40 Q 45 30 55 30 Q 62 23 72 28 Q 82 23 88 32 Q 95 34 95 43 Q 95 50 85 50 L 45 50 Z" fill="#2563EB" />
                  <text x="60" y="68" fill="#0F172A" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">Hybrid Cloud</text>
                </g>

                {/* Node 2: OEM Datacenter */}
                <g transform="translate(340, 45)">
                  <rect width="120" height="85" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <rect x="40" y="26" width="40" height="10" rx="2" fill="#2563EB" />
                  <rect x="40" y="40" width="40" height="10" rx="2" fill="#2563EB" />
                  <circle cx="73" cy="31" r="1.5" fill="#ffffff" />
                  <circle cx="73" cy="45" r="1.5" fill="#ffffff" />
                  <text x="60" y="68" fill="#0F172A" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">OEM Datacenter</text>
                </g>

                {/* Node 3: Cyber Security */}
                <g transform="translate(40, 260)">
                  <rect width="120" height="85" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 60 24 L 75 30 V 42 C 75 50 60 56 60 56 C 60 56 45 50 45 42 V 30 Z" fill="#2563EB" />
                  <text x="60" y="70" fill="#0F172A" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">Cyber Security</text>
                </g>

                {/* Node 4: SLA Assurance */}
                <g transform="translate(340, 260)">
                  <rect width="120" height="85" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <circle cx="60" cy="38" r="13" fill="#10b981" />
                  <path d="M 54 38 L 58 42 L 66 34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <text x="60" y="70" fill="#0F172A" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">SLA Assurance</text>
                </g>
              </svg>
            </div>
          </div>

        </div>

        {/* Rebuilt 4-Card Feature Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            marginTop: '24px'
          }}
          className="hero-feature-strip-grid"
        >
          {HERO_FEATURE_CARDS.map((card) => (
            <HeroFeatureCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}

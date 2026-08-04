import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_FEATURE_CARDS = [
  {
    id: 'cloud',
    title: 'Cloud & Hybrid IT',
    desc: 'Hybrid cloud operations, seamless AWS/Azure migrations, and virtualization management.',
    link: '/services#hco-cloud-services',
    iconType: 'cloud'
  },
  {
    id: 'datacenter',
    title: 'Datacenter Management',
    desc: 'End-to-end datacenter operations, capacity planning, and infrastructure lifecycle support.',
    link: '/services#it-datacenter-management',
    iconType: 'datacenter'
  },
  {
    id: 'noc',
    title: '24×7 NOC Monitoring',
    desc: 'Round-the-clock remote network monitoring, alarm handling, and real-time incident triage.',
    link: '/services#noc-services',
    iconType: 'noc'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Systems',
    desc: 'Perimeter defense, next-gen firewalls, VLAN zoning, and strict compliance controls.',
    link: '/services#third-party-maintenance',
    iconType: 'cybersecurity'
  }
];

const LIVE_TICKER_LOGS = [
  { text: 'Alert cleared — Node 12, Mumbai DC', time: '1m ago', tag: 'OK', tagBg: '#dcfce7', tagColor: '#166534' },
  { text: 'Ticket #4482 resolved — 3m response', time: '2m ago', tag: 'RESOLVED', tagBg: '#eff6ff', tagColor: '#1d4ed8' },
  { text: 'Failover completed — Cloud Region 2', time: '4m ago', tag: 'SYNC', tagBg: '#fef3c7', tagColor: '#92400e' },
  { text: 'Patch update applied — AWS Frankfurt', time: '5m ago', tag: 'SYSTEM', tagBg: '#f1f5f9', tagColor: '#475569' },
  { text: 'Zero-trust policy active — Dubai Hub', time: '7m ago', tag: 'SECURE', tagBg: '#dcfce7', tagColor: '#166534' },
  { text: 'SAN Storage synced — Bangalore DC', time: '9m ago', tag: 'OK', tagBg: '#dcfce7', tagColor: '#166534' }
];

function CardAnimatedIcon({ iconType, isHovered }) {
  if (iconType === 'cloud') {
    return (
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isHovered ? { y: [-1, -4, -1], scale: [1, 1.08, 1] } : { y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </motion.svg>
    );
  }

  if (iconType === 'datacenter') {
    return (
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isHovered ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <motion.line
          x1="6"
          y1="6"
          x2="6.01"
          y2="6"
          strokeWidth="3"
          animate={isHovered ? { opacity: [0.3, 1, 0.3, 1] } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.line
          x1="6"
          y1="18"
          x2="6.01"
          y2="18"
          strokeWidth="3"
          animate={isHovered ? { opacity: [1, 0.3, 1, 0.3] } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.svg>
    );
  }

  if (iconType === 'noc') {
    return (
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isHovered ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </motion.svg>
    );
  }

  // cybersecurity
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={isHovered ? { rotate: [0, -6, 6, 0], scale: [1, 1.1, 1] } : { rotate: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </motion.svg>
  );
}

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
          <CardAnimatedIcon iconType={card.iconType} isHovered={isHovered} />
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

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — LIVE OPERATIONS CONSOLE COMPONENT
 ────────────────────────────────────────────────────────────── */
function LiveOperationsConsole() {
  const [currentTime, setCurrentTime] = useState('');
  const [uptimeVal, setUptimeVal] = useState('99.98%');

  // Real-time clock update (HH:MM:SS UTC)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hrs = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setCurrentTime(`${hrs}:${mins}:${secs} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Uptime decimal subtle flicker (99.97% - 99.99%)
  useEffect(() => {
    const uptimeValues = ['99.98%', '99.99%', '99.97%', '99.98%'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % uptimeValues.length;
      setUptimeVal(uptimeValues[idx]);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '460px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        border: '1px solid #E6E9EE',
        padding: '1.25rem 1.4rem',
        boxShadow: '0 12px 36px rgba(15, 23, 42, 0.06)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
      id="live-operations-console"
    >
      {/* 2.1 HEADER ROW: Status + Live Clock */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid #F1F5F9'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
            <span
              style={{
                position: 'absolute',
                display: 'inline-flex',
                height: '100%',
                width: '100%',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                opacity: 0.75,
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                borderRadius: '50%',
                height: '8px',
                width: '8px',
                backgroundColor: '#10b981'
              }}
            />
          </span>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>
            All Systems Operational
          </span>
        </div>

        {/* Live Clock & Uptime Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'monospace',
              color: '#2563EB',
              backgroundColor: '#EFF6FF',
              padding: '2px 8px',
              borderRadius: '6px'
            }}
          >
            {currentTime || '00:00:00 UTC'}
          </span>
          
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#15803d',
              backgroundColor: '#dcfce7',
              padding: '2px 8px',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}
            title="SLA Uptime Guarantee"
          >
            {uptimeVal}
          </span>
        </div>
      </div>

      {/* 2.2 MINI ACTIVITY GRAPH (Animated SVG Line & Area Chart) */}
      <div style={{ position: 'relative', width: '100%', height: '54px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Network &amp; Ticket Activity
          </span>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563EB' }}>
            99.9% Optimal
          </span>
        </div>

        <svg viewBox="0 0 400 40" fill="none" style={{ width: '100%', height: '36px', overflow: 'visible' }}>
          <defs>
            <linearGradient id="consoleGraphGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path d="M 0 35 Q 50 15 100 25 T 200 12 T 300 22 T 400 10 V 40 H 0 Z" fill="url(#consoleGraphGrad)" />

          {/* Animated Line Stroke */}
          <motion.path
            d="M 0 35 Q 50 15 100 25 T 200 12 T 300 22 T 400 10"
            stroke="#2563EB"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          />

          {/* Activity Pulse Point */}
          <motion.circle
            cx="400"
            cy="10"
            r="4"
            fill="#2563EB"
            animate={{ r: [3, 5, 3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* 2.3 SCROLLING LIVE-FEED TICKER (Vertical Loop) */}
      <div
        style={{
          position: 'relative',
          height: '110px',
          overflow: 'hidden',
          backgroundColor: '#F8FAFC',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          padding: '0.5rem 0.75rem',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <motion.div
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          {/* Double list trick for seamless infinite vertical scroll */}
          {[...LIVE_TICKER_LOGS, ...LIVE_TICKER_LOGS].map((log, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.76rem',
                color: '#334155',
                padding: '4px 0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    padding: '1px 6px',
                    borderRadius: '4px',
                    backgroundColor: log.tagBg,
                    color: log.tagColor,
                    flexShrink: 0
                  }}
                >
                  {log.tag}
                </span>
                <span style={{ fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '250px' }}>
                  {log.text}
                </span>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8', flexShrink: 0 }}>
                {log.time}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2.4 MINI COVERAGE MAP (India + UAE Hub Outline) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.5rem',
          borderTop: '1px solid #F1F5F9'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569' }}>
            Active NOC Hubs:
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {[
              { name: 'Noida', status: 'Primary' },
              { name: 'Mumbai', status: 'DC' },
              { name: 'Bangalore', status: 'R&D' },
              { name: 'Dubai', status: 'UAE' }
            ].map((hub) => (
              <span
                key={hub.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#0F172A'
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
                {hub.name}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default function HomeHeroSection() {
  const [endpointCount, setEndpointCount] = useState(1420);
  const [showScrollCue, setShowScrollCue] = useState(true);

  // 8.2 Live Operations Pulse Counter Ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setEndpointCount((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // 8.4 Hide scroll cue on scroll past 100px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollCue(false);
      } else {
        setShowScrollCue(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#F8FAFC',
        color: '#0F172A',
        borderBottom: '1px solid #E6E9EE',
        overflow: 'hidden',
        padding: '104px 0 40px 0' /* 80px navbar height + 24px top padding */
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
        
        {/* Split Grid: Left Content + Right Section 2 Live Operations Console */}
        <div 
          className="hero-split-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.12fr 0.88fr', 
            gap: '3rem', 
            alignItems: 'center', 
            marginBottom: '24px' 
          }}
        >
          
          {/* Left Column: Headline, CTAs, Live Operations Pulse */}
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

            {/* Static Headline */}
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
                marginBottom: '1.5rem',
                maxWidth: '620px'
              }}
            >
              We deliver SLA-bound 24×7 NOC monitoring, multi-cloud operations, third-party hardware maintenance, and cybersecurity resilience for mission-critical enterprise environments.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.25rem' }}>
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

            {/* 8.2 Live Operations Pulse Strip */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#ffffff',
                border: '1px solid #E2E8F0',
                borderRadius: '30px',
                padding: '6px 14px',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)'
              }}
            >
              <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                <span
                  style={{
                    position: 'absolute',
                    display: 'inline-flex',
                    height: '100%',
                    width: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    opacity: 0.75,
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    borderRadius: '50%',
                    height: '8px',
                    width: '8px',
                    backgroundColor: '#10b981'
                  }}
                />
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                Monitoring <strong style={{ color: '#0F172A', fontWeight: 700 }}>{endpointCount.toLocaleString()}+</strong> active client workloads right now
              </span>
            </div>
          </div>

          {/* Right Column: Section 2 Live Operations Console */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <LiveOperationsConsole />
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

        {/* 8.4 Scroll-Cue Indicator */}
        <AnimatePresence>
          {showScrollCue && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1.5rem',
                gap: '4px',
                color: '#64748b',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              <span>Scroll to explore</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M7 10l5 5 5-5" />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

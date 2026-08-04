import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_FEATURE_CARDS = [
  {
    id: 'cloud',
    title: 'Cloud & Hybrid IT',
    desc: 'Hybrid cloud operations, seamless AWS/Azure migrations, and virtualization management.',
    link: '/services#hco-cloud-services',
    iconType: 'cloud',
    badgeText: 'MULTI-CLOUD OPS'
  },
  {
    id: 'datacenter',
    title: 'Datacenter Management',
    desc: 'End-to-end datacenter operations, capacity planning, and infrastructure lifecycle support.',
    link: '/services#it-datacenter-management',
    iconType: 'datacenter',
    badgeText: 'OEM HARDWARE'
  },
  {
    id: 'noc',
    title: '24×7 NOC Monitoring',
    desc: 'Round-the-clock remote network monitoring, alarm handling, and real-time incident triage.',
    link: '/services#noc-services',
    iconType: 'noc',
    badgeText: '24×7 NOC SLA'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Systems',
    desc: 'Perimeter defense, next-gen firewalls, VLAN zoning, and strict compliance controls.',
    link: '/services#third-party-maintenance',
    iconType: 'cybersecurity',
    badgeText: 'ZERO-TRUST SOC'
  }
];

/* ─────────────────────────────────────────────────────────────
   1. CARD ICON MICRO-ANIMATIONS
 ────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────
   2. INTERACTIVE SERVICE FEATURE CARD COMPONENT
 ────────────────────────────────────────────────────────────── */
function HeroFeatureCard({ card, activeServiceId, onHoverCard, onLeaveCard }) {
  const isHoveredOrActive = activeServiceId === card.id;

  return (
    <Link
      to={card.link}
      onMouseEnter={() => onHoverCard(card.id)}
      onMouseLeave={onLeaveCard}
      style={{
        backgroundColor: isHoveredOrActive ? '#2563EB' : '#ffffff',
        borderRadius: '16px',
        border: isHoveredOrActive ? '1px solid #2563EB' : '1px solid #E6E9EE',
        boxShadow: isHoveredOrActive ? '0 16px 36px rgba(37, 99, 235, 0.22)' : '0 2px 8px rgba(15, 23, 42, 0.03)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '210px',
        textDecoration: 'none',
        transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHoveredOrActive ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer'
      }}
    >
      <div>
        {/* Top Header: Icon + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: isHoveredOrActive ? 'rgba(255, 255, 255, 0.2)' : '#EFF6FF',
              color: isHoveredOrActive ? '#ffffff' : '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 200ms ease-out'
            }}
          >
            <CardAnimatedIcon iconType={card.iconType} isHovered={isHoveredOrActive} />
          </div>

          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              letterSpacing: '1px',
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: isHoveredOrActive ? 'rgba(255, 255, 255, 0.2)' : '#F1F5F9',
              color: isHoveredOrActive ? '#ffffff' : '#475569',
              transition: 'all 200ms ease-out'
            }}
          >
            {card.badgeText}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: isHoveredOrActive ? '#ffffff' : '#0F172A',
            margin: '0 0 0.5rem 0',
            lineHeight: 1.3,
            transition: 'color 200ms ease-out'
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '14px',
            color: isHoveredOrActive ? 'rgba(255, 255, 255, 0.9)' : '#475569',
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

      {/* Learn More Action */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '1.25rem',
          fontSize: '14px',
          fontWeight: 700,
          color: isHoveredOrActive ? '#ffffff' : '#2563EB',
          transition: 'color 200ms ease-out'
        }}
      >
        <span>Explore Service</span>
        <motion.span
          animate={{ x: isHoveredOrActive ? 4 : 0 }}
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
   3. BESPOKE VISUAL PANELS FOR THE 4 SERVICES
 ────────────────────────────────────────────────────────────── */

// 3A. Cloud & Hybrid IT Panel
function CloudVisualPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#2563EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
            HYBRID CLOUD OPERATIONAL CANVAS
          </span>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '2px 0 0 0' }}>
            AWS, Azure &amp; Virtualization Synchronization
          </h4>
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', backgroundColor: '#dcfce7', padding: '3px 8px', borderRadius: '6px' }}>
          0-DOWNTIME SYNC
        </span>
      </div>

      {/* Multi-Cloud Architecture SVG Diagram */}
      <div style={{ position: 'relative', width: '100%', height: '150px', backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '0.75rem', border: '1px solid #E2E8F0' }}>
        <svg viewBox="0 0 400 130" fill="none" style={{ width: '100%', height: '100%' }}>
          {/* Connecting Data Tunnel Lines */}
          <path d="M 60 40 Q 200 10 340 40" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 60 90 Q 200 120 340 90" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="200" y1="20" x2="200" y2="110" stroke="#e2e8f0" strokeWidth="2" />

          {/* Central Orchestrator Core */}
          <g transform="translate(160, 35)">
            <rect width="80" height="60" rx="10" fill="#2563EB" />
            <text x="40" y="28" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">IaC ENGINE</text>
            <text x="40" y="44" fill="#ffffff" opacity="0.85" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">Terraform/Ansible</text>
          </g>

          {/* Cloud Nodes */}
          <g transform="translate(15, 20)">
            <rect width="90" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="45" y="24" fill="#0F172A" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">AWS Cloud</text>
          </g>
          <g transform="translate(15, 75)">
            <rect width="90" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="45" y="24" fill="#0F172A" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Azure Cloud</text>
          </g>

          <g transform="translate(295, 20)">
            <rect width="90" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="45" y="24" fill="#0F172A" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">VMware Cluster</text>
          </g>
          <g transform="translate(295, 75)">
            <rect width="90" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="45" y="24" fill="#0F172A" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">On-Prem DC</text>
          </g>
        </svg>
      </div>

      {/* Cloud Telemetry Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
        <div style={{ backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Multi-Cloud Sync</div>
          <div style={{ fontSize: '0.85rem', color: '#2563EB', fontWeight: 800 }}>Sub-10ms</div>
        </div>
        <div style={{ backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Cloud Cost Savings</div>
          <div style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 800 }}>38% Optimized</div>
        </div>
        <div style={{ backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Workload Health</div>
          <div style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 800 }}>100% Healthy</div>
        </div>
      </div>
    </div>
  );
}

// 3B. Datacenter Management Panel
function DatacenterVisualPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#2563EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
            OEM DATACENTER &amp; HARDWARE TELEMETRY
          </span>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '2px 0 0 0' }}>
            HPE, Dell &amp; Cisco Rack Maintenance
          </h4>
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1d4ed8', backgroundColor: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
          4-HR ON-SITE SLA
        </span>
      </div>

      {/* Server Rack Chassis Visual */}
      <div style={{ backgroundColor: '#0F172A', borderRadius: '12px', padding: '0.85rem 1rem', color: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94a3b8', marginBottom: '8px' }}>
          <span>RACK CHASSIS #04 [MUMBAI DC]</span>
          <span style={{ color: '#10b981' }}>● POWER REDUNDANT</span>
        </div>

        {/* 3 Rack Blades */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {['BLADE 01: HPE PROLIANT DL380 [ACTIVE]', 'BLADE 02: DELL POWEREDGE R750 [ACTIVE]', 'BLADE 03: CISCO UCS B200 [ACTIVE]'].map((blade, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1E293B', padding: '6px 10px', borderRadius: '6px', borderLeft: '3px solid #2563EB' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: 'monospace' }}>{blade}</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capacity & Thermal Telemetry */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
        <div style={{ backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>SAN Provisioning</div>
          <div style={{ fontSize: '0.85rem', color: '#2563EB', fontWeight: 800 }}>84% Allocated</div>
        </div>
        <div style={{ backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Thermal Baseline</div>
          <div style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 800 }}>21°C Optimal</div>
        </div>
        <div style={{ backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>EOSL Spares Status</div>
          <div style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 800 }}>Pre-Staged</div>
        </div>
      </div>
    </div>
  );
}

// 3C. 24x7 NOC Monitoring Panel
function NocVisualPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#2563EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
            24×7 NOC TRIAGE &amp; TELEMETRY
          </span>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '2px 0 0 0' }}>
            Real-Time Network Alarm Triage
          </h4>
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', backgroundColor: '#dcfce7', padding: '3px 8px', borderRadius: '6px' }}>
          SUB-15 MIN DISPATCH
        </span>
      </div>

      {/* Live Wave Telemetry + Ticker Logs */}
      <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '0.75rem', border: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
          <span>PACKET DROP &amp; LATENCY STREAM</span>
          <span style={{ color: '#2563EB' }}>0.001% Packet Loss</span>
        </div>

        <svg viewBox="0 0 400 45" fill="none" style={{ width: '100%', height: '36px' }}>
          <path d="M 0 30 Q 50 10 100 20 T 200 8 T 300 25 T 400 12" stroke="#2563EB" strokeWidth="2.2" fill="none" />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#0F172A', fontWeight: 600 }}>
            <span>● Ticket #4482: Bangalore SAN Sync</span>
            <span style={{ color: '#166534', fontWeight: 700 }}>RESOLVED (3m)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#0F172A', fontWeight: 600 }}>
            <span>● Failover check: Dubai Cloud Region</span>
            <span style={{ color: '#1d4ed8', fontWeight: 700 }}>PASSING</span>
          </div>
        </div>
      </div>

      {/* Active NOC Hubs Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Active Command Hubs:</span>
        <div style={{ display: 'flex', gap: '8px', fontSize: '0.72rem', fontWeight: 800, color: '#0F172A' }}>
          <span>● Noida</span>
          <span>● Mumbai</span>
          <span>● Bangalore</span>
          <span>● Dubai</span>
        </div>
      </div>
    </div>
  );
}

// 3D. Cybersecurity Systems Panel
function CybersecurityVisualPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#2563EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
            ZERO-TRUST SECURITY &amp; SOC DEFENSE
          </span>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '2px 0 0 0' }}>
            Next-Gen Firewall &amp; Endpoint Protection
          </h4>
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', backgroundColor: '#dcfce7', padding: '3px 8px', borderRadius: '6px' }}>
          ISO 27001 AUDITED
        </span>
      </div>

      {/* Security Threat Grid & Shield Status */}
      <div style={{ backgroundColor: '#0F172A', borderRadius: '12px', padding: '0.85rem 1rem', color: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#38bdf8' }}>PERIMETER SECURITY RADAR</span>
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 800 }}>0 THREAT PENETRATIONS</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ backgroundColor: '#1E293B', padding: '6px 10px', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>VLAN Segmenting</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>Enforced</div>
          </div>
          <div style={{ backgroundColor: '#1E293B', padding: '6px 10px', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>SOC Monitoring</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>Active 24×7</div>
          </div>
          <div style={{ backgroundColor: '#1E293B', padding: '6px 10px', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Encrypted Tunnels</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>AES-256</div>
          </div>
          <div style={{ backgroundColor: '#1E293B', padding: '6px 10px', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Compliance Check</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#38bdf8' }}>PCI-DSS &amp; HIPAA</div>
          </div>
        </div>
      </div>

      {/* Compliance Verification Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', padding: '6px 12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
        <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Security Certifications:</span>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563EB' }}>ISO 9001, 27001, 20000, 45001</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. INTERACTIVE HERO CONSOLE DISPLAY WRAPPER
 ────────────────────────────────────────────────────────────── */
function InteractiveHeroConsole({ activeServiceId, onSelectService }) {
  const [currentTime, setCurrentTime] = useState('');

  // Ticking UTC clock
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

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        border: '1px solid #E6E9EE',
        padding: '1.25rem 1.4rem',
        boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minHeight: '340px'
      }}
      id="interactive-hero-console"
    >
      {/* Top Header Controls & Clock */}
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
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A' }}>
            Enterprise Command Center
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 800,
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
              borderRadius: '6px'
            }}
          >
            99.99% SLA
          </span>
        </div>
      </div>

      {/* Interactive Tabs bar for 4 Services */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', backgroundColor: '#F8FAFC', padding: '4px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
        {[
          { id: 'cloud', label: 'Cloud' },
          { id: 'datacenter', label: 'Datacenter' },
          { id: 'noc', label: 'NOC' },
          { id: 'cybersecurity', label: 'Security' }
        ].map((tab) => {
          const isActive = activeServiceId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectService(tab.id)}
              style={{
                backgroundColor: isActive ? '#2563EB' : 'transparent',
                color: isActive ? '#ffffff' : '#64748b',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 0',
                fontSize: '0.72rem',
                fontWeight: isActive ? 800 : 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Animated Visual Canvas Switcher */}
      <div style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeServiceId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ height: '100%' }}
          >
            {activeServiceId === 'cloud' && <CloudVisualPanel />}
            {activeServiceId === 'datacenter' && <DatacenterVisualPanel />}
            {activeServiceId === 'noc' && <NocVisualPanel />}
            {activeServiceId === 'cybersecurity' && <CybersecurityVisualPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. MAIN HOME HERO SECTION COMPONENT
 ────────────────────────────────────────────────────────────── */
export default function HomeHeroSection() {
  const [activeServiceId, setActiveServiceId] = useState('cloud');
  const [showScrollCue, setShowScrollCue] = useState(true);

  // Auto-cycle through services every 6 seconds when idle
  useEffect(() => {
    const services = ['cloud', 'datacenter', 'noc', 'cybersecurity'];
    const timer = setInterval(() => {
      setActiveServiceId((current) => {
        const nextIdx = (services.indexOf(current) + 1) % services.length;
        return services[nextIdx];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Hide scroll cue on scroll past 100px
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
        
        {/* Split Grid: Left Content + Right Interactive Enterprise Command Center Console */}
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
          
          {/* Left Column: Headline & CTAs (Cleaned, no dot lines) */}
          <div>
            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                lineHeight: 1.16,
                margin: '0 0 1.25rem 0'
              }}
            >
              Your Technology Support Partner for Enterprise IT &amp; Infrastructure Value.
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '1.75rem',
                maxWidth: '620px'
              }}
            >
              We deliver SLA-bound 24×7 NOC monitoring, multi-cloud operations, third-party hardware maintenance, and cybersecurity resilience for mission-critical enterprise environments.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                to="/services"
                style={{
                  backgroundColor: '#2563EB',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '13px 26px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Explore Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Command Center Console connected to 4 Services */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <InteractiveHeroConsole
              activeServiceId={activeServiceId}
              onSelectService={(id) => setActiveServiceId(id)}
            />
          </div>

        </div>

        {/* Rebuilt 4-Card Feature Strip connected directly to Interactive Hero Console */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            marginTop: '28px'
          }}
          className="hero-feature-strip-grid"
        >
          {HERO_FEATURE_CARDS.map((card) => (
            <HeroFeatureCard
              key={card.id}
              card={card}
              activeServiceId={activeServiceId}
              onHoverCard={(id) => setActiveServiceId(id)}
              onLeaveCard={() => {}}
            />
          ))}
        </div>

        {/* Scroll-Cue Indicator */}
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

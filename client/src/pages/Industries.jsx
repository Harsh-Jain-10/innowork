import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import ScrollReveal, { StaggerContainer } from '../components/ScrollReveal';
import {
  SmartCityIllustration,
  TelecomIllustration,
  HealthcareIllustration,
  ManufacturingIllustration,
  BFSIIllustration,
  LogisticsIllustration,
  EducationIllustration,
  GovernmentIllustration,
  MediaIllustration,
} from '../components/IndustryIllustrations';

/* ─────────────────────────────────────────────────────────────
   Industry configuration — all content from official INNOWORQ
 ────────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    id: 'smart-city',
    name: 'Smart City',
    shortTag: 'CIVIC TECH',
    desc: 'Integrated Command and Control Centers (ICCC), smart governance enablement, IoT gateways, and video surveillance wall operations.',
    challenges: [
      'Real-time processing of distributed IoT sensor streams',
      'Securing edge gateways against lateral network threats',
      'High-availability command center uptime across civic operations',
    ],
    technologies: ['Cisco IoT Platforms', 'Dell EMC Storage', 'Fortinet Security', 'IBM Systems'],
    services: ['ICCC Integration', 'NOC Operations', 'Edge Gateway Security', 'Video Surveillance Management'],
    Illustration: SmartCityIllustration,
  },
  {
    id: 'telecom',
    name: 'Telecom',
    shortTag: 'NETWORK OPS',
    desc: 'Supporting edge routing configurations, high-availability switching matrices, base station connectivity, and active networking infrastructure.',
    challenges: [
      'Packet throughput bottlenecks at high-density edge nodes',
      'Maintaining base station network continuity at scale',
      'Multi-vendor routing table optimization across distributed POPs',
    ],
    technologies: ['Juniper MX Series', 'Cisco Core Switches', 'F5 BIG-IP systems', 'NetApp Storage'],
    services: ['Edge Routing Configuration', 'High-Availability Switching', 'NOC Operations', 'Third-Party Maintenance'],
    Illustration: TelecomIllustration,
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    shortTag: 'CLINICAL IT',
    desc: 'Ensuring continuous IT infrastructure uptime, server resilience, and secure datacenter hosting for clinical systems.',
    challenges: [
      'Zero-downtime availability for mission-critical clinical applications',
      'Strict patient data privacy and regulatory compliance',
      'Active-active disaster recovery synchronization',
    ],
    technologies: ['VMware vSphere', 'Dell PowerEdge', 'Veeam Availability', 'Checkpoint Security'],
    services: ['SLA Datacenter Operations', 'Disaster Recovery Administration', 'Compliance Audit Support', 'Infrastructure Resilience'],
    Illustration: HealthcareIllustration,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    shortTag: 'OT-IT CONVERGENCE',
    desc: 'OT-IT convergence consulting, automation pipelines, systems monitoring, and shop-floor computing support.',
    challenges: [
      'Legacy OT systems integration with modern IT networks',
      'Real-time shop-floor telemetry processing at scale',
      'Zero-downtime assembly line continuity requirements',
    ],
    technologies: ['Red Hat Ansible', 'Nutanix HCI', 'Cisco Industrial', 'Microsoft SCOM'],
    services: ['OT-IT Convergence Consulting', 'Automation Pipeline Build', 'Infrastructure Monitoring', 'Staff Augmentation'],
    Illustration: ManufacturingIllustration,
  },
  {
    id: 'bfsi',
    name: 'BFSI',
    shortTag: 'FINANCIAL SECURITY',
    desc: 'Highly secure datacenter architectures, network firewalls, active-active disaster recovery replication, and regulatory compliance.',
    challenges: [
      'Hardening transaction endpoints against advanced persistent threats',
      'Active-active DR replication with sub-second failover',
      'Stringent RBI and SEBI regulatory compliance requirements',
    ],
    technologies: ['Checkpoint Quantum', 'F5 Advanced WAF', 'Oracle Database', 'Fortinet SD-WAN'],
    services: ['Secure Datacenter Architecture', 'DR Sync Administration', 'Compliance Audit Preparation', 'Penetration Testing Support'],
    Illustration: BFSIIllustration,
  },
  {
    id: 'logistics',
    name: 'Logistics',
    shortTag: 'SUPPLY CHAIN',
    desc: 'Deploying scalable datacenter solutions, transport management system servers, and remote site networking support.',
    challenges: [
      'Database latency in global transport management tracking systems',
      'Continuous network uptime across distributed warehouse sites',
      'Peak load scaling for high-traffic inventory operations',
    ],
    technologies: ['VMware vCenter', 'Microsoft Windows Server', 'Cisco WAN', 'Veeam Backup'],
    services: ['TMS Server Deployment', 'Remote Site Network Support', 'Scale-Out Virtualization', 'Third-Party Maintenance'],
    Illustration: LogisticsIllustration,
  },
  {
    id: 'education',
    name: 'Education',
    shortTag: 'CAMPUS TECH',
    desc: 'School and university campus digitization, virtualization, virtual lab hosting, and capability building trainings.',
    challenges: [
      'Scalable virtual lab compute pools for large student bodies',
      'Heterogeneous campus-wide network integration and management',
      'Identity access control for thousands of dynamic user nodes',
    ],
    technologies: ['Microsoft Active Directory', 'Nutanix HCI', 'Red Hat OpenShift', 'VMware Horizon'],
    services: ['Virtual Lab Infrastructure Hosting', 'IT Skills Training Workshops', 'Identity & Access Management', 'Campus Network Digitization'],
    Illustration: EducationIllustration,
  },
  {
    id: 'government',
    name: 'Government',
    shortTag: 'PUBLIC SECTOR',
    desc: 'Enterprise hosting solutions, high-grade security patches, compliance audits, and public command center operations.',
    challenges: [
      'Securing public-facing portals against coordinated cyber threats',
      'High-availability public crisis command center operations',
      'Comprehensive auditing without disrupting live citizen services',
    ],
    technologies: ['Red Hat RHEL', 'Checkpoint NGFW', 'IBM Power Systems', 'Dell Infrastructure'],
    services: ['Security Patch Management', '24/7 Command Center Support', 'Compliance Auditing', 'Enterprise Hosting Solutions'],
    Illustration: GovernmentIllustration,
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    shortTag: 'CDN & STREAMING',
    desc: 'Supporting media storage clusters, fast network distributions, and high-performance CDN architectures.',
    challenges: [
      'Bandwidth saturation during high-bitrate live streaming events',
      'I/O bottlenecks in petabyte-scale media storage clusters',
      'Peak traffic management during live broadcast windows',
    ],
    technologies: ['F5 BIG-IP systems', 'NetApp Storage', 'Cisco Catalyst', 'CDN Integrations'],
    services: ['CDN Architecture Tuning', 'Media Storage Cluster Support', 'Multi-Vendor Network Maintenance', 'SLA Network Monitoring'],
    Illustration: MediaIllustration,
  },
];

/* ─────────────────────────────────────────────────────────────
   Filter configuration — ids must match INDUSTRIES array ids
 ────────────────────────────────────────────────────────────── */
const FILTER_TAGS = [
  { id: 'all', label: 'All Sectors' },
  { id: 'infra',      label: 'Infrastructure',   match: ['smart-city', 'telecom', 'government'] },
  { id: 'enterprise', label: 'Enterprise',        match: ['bfsi', 'manufacturing', 'logistics'] },
  { id: 'digital',    label: 'Digital Services',  match: ['healthcare', 'education', 'media'] },
];

/* ─────────────────────────────────────────────────────────────
   Shared icons & sub-components
 ────────────────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '3px', flexShrink: 0 }} aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(0, 240, 255, 0.12)" />
      <path d="M5 8.2L7.2 10.4L11 6" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TelemetryReadout() {
  const [ping, setPing] = useState(12);
  const [load, setLoad] = useState(38.4);
  const [slaRate, setSlaRate] = useState(99.98);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(p => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(8, Math.min(22, p + delta));
      });
      setLoad(l => {
        const delta = parseFloat((Math.random() * 6 - 3).toFixed(1));
        return Math.max(10, Math.min(95, parseFloat((l + delta).toFixed(1))));
      });
      setSlaRate(s => {
        const delta = parseFloat((Math.random() * 0.04 - 0.02).toFixed(3));
        return Math.max(99.9, Math.min(100.0, parseFloat((s + delta).toFixed(3))));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="telemetry-readout-grid">
      <div className="telemetry-metric">
        <span className="telemetry-label">SYS PING</span>
        <span className="telemetry-value text-cyan">{ping} ms</span>
      </div>
      <div className="telemetry-metric border-x">
        <span className="telemetry-label">DEPLOY LOAD</span>
        <span className="telemetry-value text-red">{load}%</span>
      </div>
      <div className="telemetry-metric">
        <span className="telemetry-label">SLA INTEGRITY</span>
        <span className="telemetry-value text-green">{slaRate}%</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Radar ecosystem visualization (optimized for high smoothness)
 ────────────────────────────────────────────────────────────── */
function RadarDashboard({ industry, isActive }) {
  const reduced = useReducedMotion();
  const animate = !reduced && isActive;
  const nodeCount = industry.technologies.length;

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}
          aria-label={`${industry.name} Technology Ecosystem`}>
          <defs>
            <filter id="radar-glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Rotating Sonar Sweep Wedge */}
          {animate && (
            <motion.path
              d="M100,100 L100,15 A85,85 0 0,1 173.6,57.5 Z"
              fill="rgba(56, 189, 248, 0.07)"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '100px 100px' }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {/* Rotating Sonar sweep beam line */}
          {animate && (
            <motion.line
              x1="100" y1="100" x2="100" y2="15"
              stroke="#00f0ff" strokeWidth="1.5"
              filter="url(#radar-glow)"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '100px 100px' }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {/* Concentric rings */}
          {[30, 55, 80].map((r, i) => (
            <motion.circle key={i} cx="100" cy="100" r={r}
              fill="none" 
              stroke={i === 2 ? 'rgba(0, 240, 255, 0.22)' : 'rgba(56, 189, 248, 0.1)'} 
              strokeWidth="1" strokeDasharray="3 4"
              animate={animate ? { rotate: i % 2 === 0 ? 360 : -360 } : {}}
              style={{ transformOrigin: '100px 100px' }}
              transition={{ duration: 22 + i * 8, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Radial lines */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            return (
              <line key={i} x1="100" y1="100"
                x2={100 + 80 * Math.cos(angle)} y2={100 + 80 * Math.sin(angle)}
                stroke="rgba(56, 189, 248, 0.08)" strokeWidth="1" strokeDasharray="1 3" />
            );
          })}

          {/* Core node */}
          <motion.circle cx="100" cy="100" r="10"
            fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" strokeWidth="2"
            filter="url(#radar-glow)"
            animate={animate ? { r: [10, 12, 10] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Outer active nodes */}
          {industry.technologies.map((tech, i) => {
            const angle = ((i / nodeCount) * 360 - 90) * (Math.PI / 180);
            const r = 62;
            const cx = 100 + r * Math.cos(angle);
            const cy = 100 + r * Math.sin(angle);
            const shortName = tech.split(' ')[0];
            return (
              <g key={i}>
                <line x1="100" y1="100" x2={cx} y2={cy}
                  stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" strokeDasharray="2 2"
                />
                <motion.circle cx={cx} cy={cy} r="6"
                  fill="rgba(3, 7, 18, 0.85)" stroke="#00f0ff" strokeWidth="1.5"
                  filter="url(#radar-glow)"
                  animate={animate ? { r: [6, 7.5, 6], stroke: ['#00f0ff', '#ffffff', '#00f0ff'] } : {}}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <text x={cx} y={cy + 13} textAnchor="middle"
                  fontSize="5" fill="#f8fafc" fontWeight="bold" fontFamily="monospace">
                  {shortName}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Industries Page - Sector Explorer Redesign
 ────────────────────────────────────────────────────────────── */
export default function Industries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const initialSector = searchParams.get('sector') || INDUSTRIES[0].id;
  const [selectedId, setSelectedId] = useState(initialSector);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  useEffect(() => {
    const sector = searchParams.get('sector');
    if (sector && INDUSTRIES.some(ind => ind.id === sector)) {
      setSelectedId(sector);
    }
  }, [searchParams]);

  const visibleIndustries = activeFilter === 'all'
    ? INDUSTRIES
    : INDUSTRIES.filter(ind => {
        const tag = FILTER_TAGS.find(t => t.id === activeFilter);
        return tag?.match?.includes(ind.id);
      });

  const handleSelect = (id) => {
    setSelectedId(id);
    setSearchParams({ sector: id });
    if (window.innerWidth <= 1024) {
      setMobileDetailOpen(true);
    }
  };

  const activeSector = INDUSTRIES.find(ind => ind.id === selectedId) || INDUSTRIES[0];
  const ActiveIllustration = activeSector.Illustration;

  return (
    <main id="industries-page-view" style={{ backgroundColor: '#f8fafc', color: 'var(--text-light-primary)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fafc 55%, #eef6fd 100%)',
        padding: '8rem 0 3rem 0',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(9,97,159,0.1)'
      }}>
        {/* Blueprint grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9,97,159,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,97,159,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.8
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
            <ScrollReveal variant="fade-down">
              <span style={{
                display: 'inline-block',
                background: 'rgba(9,97,159,0.08)',
                border: '1px solid rgba(9,97,159,0.2)',
                borderRadius: '100px',
                padding: '0.3rem 1.2rem',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'rgba(9,97,159,0.95)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                marginBottom: '1.25rem',
              }}>
                Domain Alignments
              </span>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800, letterSpacing: '-1.5px',
                color: 'rgba(12,20,35,0.92)',
                lineHeight: 1.1, marginBottom: '1.25rem',
              }}>
                Industries We Serve
              </h1>

              <p style={{
                fontSize: '1.08rem', color: 'rgba(30,40,60,0.65)',
                maxWidth: '680px', margin: '0 auto', lineHeight: 1.75,
              }}>
                INNOWORQ designs SLA-driven infrastructure architectures for{' '}
                <strong style={{ color: 'rgba(9,97,159,0.95)' }}>9 industry verticals</strong>,
                from critical banking infrastructure to smart city deployments and telecom networks.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Interactive Sector Explorer (Premium Cyber Dashboard Theme) ── */}
      <section style={{ 
        padding: '5rem 0 8rem 0', 
        backgroundColor: '#f8fafc', 
        color: 'var(--text-light-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9, 97, 159, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9, 97, 159, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.8
        }} />

        {/* Glowing atmospheric lights */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(9, 97, 159, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(50px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(9, 97, 159, 0.02) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(40px)'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
          
          {/* Filter tabs */}
          <ScrollReveal variant="fade-up">
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3.5rem', justifyContent: 'center' }}>
              {FILTER_TAGS.map(tag => (
                <button
                  key={tag.id}
                  id={`filter-${tag.id}`}
                  onClick={() => { setActiveFilter(tag.id); }}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '100px',
                    border: activeFilter === tag.id
                      ? '1.5px solid var(--brand-blue)'
                      : '1px solid #cbd5e1',
                    background: activeFilter === tag.id
                      ? 'rgba(9, 97, 159, 0.08)'
                      : 'rgba(255, 255, 255, 0.85)',
                    color: activeFilter === tag.id
                      ? 'var(--brand-blue)'
                      : 'rgba(71, 85, 105, 0.95)',
                    fontSize: '0.84rem', fontWeight: 700,
                    cursor: 'pointer', transition: 'all 0.3s ease',
                    boxShadow: activeFilter === tag.id ? '0 8px 20px rgba(9, 97, 159, 0.06)' : 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid Split explorer */}
          <div className="industries-explorer-grid">
            
            {/* Left Panel: Card Selector Stack */}
            <StaggerContainer className="sector-selector-grid">
              {visibleIndustries.map((ind) => {
                const isActive = selectedId === ind.id;
                const { Illustration } = ind;
                return (
                  <motion.div
                    key={ind.id}
                    onClick={() => handleSelect(ind.id)}
                    whileHover={{ y: -4, scale: 1.015 }}
                    className={`sector-selector-card ${isActive ? 'active' : ''}`}
                    style={{
                      backgroundColor: isActive ? '#f0f7ff' : '#ffffff',
                      border: isActive ? '1.5px solid var(--brand-blue)' : '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      boxShadow: isActive 
                        ? '0 12px 30px rgba(9, 97, 159, 0.08), inset 0 0 12px rgba(9, 97, 159, 0.02)' 
                        : '0 4px 12px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.1rem',
                      position: 'relative',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    {/* Top Status */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        color: isActive ? 'var(--brand-blue)' : 'rgba(30, 41, 59, 0.55)',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                        transition: 'color 0.25s'
                      }}>{ind.shortTag}</span>
                      
                      {isActive ? (
                        <motion.span
                          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          style={{
                            width: '8px', height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--brand-blue)',
                            boxShadow: '0 0 10px var(--brand-blue)',
                            display: 'inline-block'
                          }}
                        />
                      ) : (
                        <span style={{
                          width: '8px', height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(30, 41, 59, 0.15)',
                          display: 'inline-block'
                        }} />
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                      <div style={{ 
                        width: '56px', 
                        height: '56px', 
                        flexShrink: 0,
                        backgroundColor: isActive ? 'rgba(9, 97, 159, 0.06)' : 'rgba(9, 97, 159, 0.02)',
                        border: isActive ? '1px solid rgba(9, 97, 159, 0.2)' : '1px solid #cbd5e1',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        transition: 'all 0.3s ease'
                      }}>
                        <Illustration isHovered={isActive} isMini={true} />
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'rgba(12, 20, 35, 0.92)' }}>{ind.name}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerContainer>

            {/* Right Panel: Sticky Detail Showcase */}
            <div className="sector-sticky-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(9, 97, 159, 0.12)',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    boxShadow: '0 20px 50px rgba(9, 97, 159, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.25rem',
                    position: 'relative'
                  }}
                  className="sector-detail-panel"
                >
                  {/* Large Aesthetic Section Number */}
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '2.5rem',
                    fontSize: '4.5rem',
                    fontWeight: 900,
                    color: 'rgba(9, 97, 159, 0.08)',
                    fontFamily: '"Outfit", "Inter", sans-serif',
                    lineHeight: 1,
                    letterSpacing: '-3px',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}>
                    {(INDUSTRIES.findIndex(ind => ind.id === activeSector.id) + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Mock Terminal Top Bar */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '1rem',
                    marginBottom: '-0.5rem'
                  }}>
                    {/* Window Controls */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', opacity: 0.8 }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308', opacity: 0.8 }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', opacity: 0.8 }} />
                    </div>
                    {/* Console Info */}
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.68rem',
                      color: 'rgba(9, 97, 159, 0.7)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase'
                    }}>
                      INNOWORQ SYSTEMS // SEC_EXPLORER_V4.2
                    </span>
                    {/* Status Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16a34a', boxShadow: '0 0 6px rgba(22, 163, 74, 0.4)' }} />
                      <span style={{ fontSize: '0.66rem', color: '#16a34a', fontWeight: 700, fontFamily: 'monospace' }}>SLA_CORE_OK</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: 'var(--brand-blue)',
                      backgroundColor: 'rgba(9, 97, 159, 0.06)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      border: '1px solid rgba(9, 97, 159, 0.15)'
                    }}>{activeSector.shortTag}</span>
                    
                    <span style={{ fontSize: '0.74rem', color: 'rgba(9, 97, 159, 0.85)', fontWeight: 700, fontFamily: 'monospace' }}>
                      🟢 DEPLOYED ACTIVE
                    </span>
                  </div>

                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'rgba(12, 20, 35, 0.92)', margin: 0, zIndex: 2 }}>{activeSector.name}</h2>

                  {/* Active Vector Illustration in large box with scanline sweeping */}
                  <div style={{
                    width: '100%',
                    height: '240px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f0f7ff 100%)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(9, 97, 159, 0.12)',
                    boxShadow: 'inset 0 0 20px rgba(9, 97, 159, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    {/* Laser Sweeper scan line */}
                    <motion.div
                      animate={{ y: ['0px', '238px', '0px'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(9, 97, 159, 0.35), transparent)',
                        zIndex: 5,
                        pointerEvents: 'none'
                      }}
                    />
                    <ActiveIllustration isHovered={true} />
                  </div>

                  {/* Inner Split: Information left, tech stack right */}
                  <div className="panel-inner-split">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {/* Overview */}
                      <div>
                        <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', margin: 0 }}>Sector Overview</h4>
                        <p style={{ fontSize: '0.98rem', color: 'rgba(30, 41, 59, 0.7)', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                          {activeSector.desc}
                        </p>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', margin: 0 }}>Technical Challenges</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {activeSector.challenges.map((c, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(30, 41, 59, 0.7)', lineHeight: 1.5 }}>
                              <CheckIcon />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', margin: 0 }}>INNOWORQ Services</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {activeSector.services.map((s, i) => (
                            <span key={i} style={{
                              fontSize: '0.76rem', padding: '0.25rem 0.75rem',
                              background: 'rgba(9, 97, 159, 0.05)', color: 'var(--brand-blue)',
                              borderRadius: '6px', border: '1px solid rgba(9, 97, 159, 0.15)',
                              fontWeight: 600
                            }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Integrated Tech Stack Panel */}
                    <div style={{
                      backgroundColor: 'rgba(9, 97, 159, 0.02)',
                      border: '1px solid rgba(9, 97, 159, 0.12)',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                      height: 'fit-content'
                    }}>
                      <span style={{ 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        color: 'rgba(9, 97, 159, 0.8)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '1.2px', 
                        display: 'block', 
                        borderBottom: '1px solid rgba(9, 97, 159, 0.1)',
                        paddingBottom: '0.5rem'
                      }}>
                        Integrated Tech Stack
                      </span>
                      
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.6rem',
                        marginTop: '0.2rem'
                      }}>
                        {activeSector.technologies.map((tech, i) => (
                          <div 
                            key={i} 
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'space-between',
                              background: '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.85rem',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.01)'
                            }}
                          >
                            <span style={{ 
                              fontSize: '0.86rem', 
                              fontWeight: 650, 
                              color: 'rgba(15, 23, 42, 0.85)' 
                            }}>
                              {tech}
                            </span>
                            <span style={{ 
                              fontSize: '0.62rem', 
                              fontWeight: 700, 
                              color: '#16a34a',
                              backgroundColor: 'rgba(22, 163, 74, 0.08)',
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              VERIFIED SLA
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Block */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '1.5rem',
                    marginTop: '1rem'
                  }}>
                    <Link
                      to={`/support-desk?sector=${activeSector.id}`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'rgba(9,97,159,1)',
                        color: '#fff', borderRadius: '6px',
                        fontSize: '0.86rem', fontWeight: 700, textDecoration: 'none',
                        boxShadow: '0 4px 14px rgba(9,97,159,0.3)',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--brand-blue-hover)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(9,97,159,1)'}
                    >
                      Discuss this Sector
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <Link
                      to="/services"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'transparent',
                        color: 'rgba(9, 97, 159, 0.95)', borderRadius: '6px',
                        fontSize: '0.86rem', fontWeight: 700, textDecoration: 'none',
                        border: '1px solid rgba(9, 97, 159, 0.3)',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.borderColor = 'rgba(9, 97, 159, 0.6)'}
                      onMouseLeave={(e) => e.target.style.borderColor = 'rgba(9, 97, 159, 0.3)'}
                    >
                      View Services
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(9,97,159,0.06) 0%, rgba(9,97,159,0.02) 100%)',
        borderTop: '1px solid rgba(9,97,159,0.1)',
        padding: '5rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal variant="fade-up">
            <h2 style={{
              fontSize: '2.25rem', fontWeight: 800, color: 'rgba(12,20,35,0.9)',
              letterSpacing: '-1px', marginBottom: '0.75rem',
            }}>
              Ready to Architect for Your Sector?
            </h2>
            <p style={{
              fontSize: '1rem', color: 'rgba(30,40,60,0.6)',
              maxWidth: '520px', margin: '0 auto 2.25rem', lineHeight: 1.7,
            }}>
              Our sector specialists will assess your IT infrastructure demands and
              deliver a tailored SLA architecture roadmap.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/support-desk"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.8rem 1.8rem',
                  background: 'rgba(9,97,159,1)',
                  color: '#fff', borderRadius: '8px',
                  fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(9,97,159,0.2)',
                }}
              >
                Request a Sector Assessment
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7.5 2.5L12 7l-4.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.8rem 1.8rem',
                  background: '#ffffff',
                  color: 'rgba(9,97,159,0.85)', borderRadius: '8px',
                  fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                  border: '1px solid rgba(9,97,159,0.25)',
                }}
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile Drawer/Modal Detail Overlay (Light Theme) */}
      <AnimatePresence>
        {mobileDetailOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-modal-overlay"
            onClick={() => setMobileDetailOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(10px)',
              zIndex: 999,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--text-light-primary)',
                width: '100%',
                maxHeight: '92vh',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                overflowY: 'auto',
                padding: '2.25rem 1.75rem',
                boxShadow: '0 -10px 40px rgba(9, 97, 159, 0.08)',
                borderTop: '1.5px solid rgba(9, 97, 159, 0.15)',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="badge-tag" style={{
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  color: 'var(--brand-blue)',
                  backgroundColor: 'rgba(9, 97, 159, 0.06)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(9, 97, 159, 0.12)'
                }}>{activeSector.shortTag}</span>
                <button
                  onClick={() => setMobileDetailOpen(false)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: 'rgba(30, 41, 59, 0.6)',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  ✕ Close
                </button>
              </div>

              {/* Header Title */}
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'rgba(12, 20, 35, 0.92)', marginBottom: '1.25rem' }}>{activeSector.name}</h2>

              {/* Active Vector Illustration */}
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f0f7ff 100%)',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                border: '1px solid rgba(9, 97, 159, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <motion.div
                  animate={{ y: ['0px', '198px', '0px'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(9, 97, 159, 0.35), transparent)',
                    zIndex: 5,
                    pointerEvents: 'none'
                  }}
                />
                <ActiveIllustration isHovered={true} />
              </div>

              {/* Overview */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Sector Overview</h4>
                <p style={{ fontSize: '0.96rem', color: 'rgba(30, 41, 59, 0.7)', lineHeight: 1.6, margin: 0 }}>{activeSector.desc}</p>
              </div>

              {/* Challenges */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Technical Challenges</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeSector.challenges.map((c, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: 'rgba(30, 41, 59, 0.7)', lineHeight: 1.45 }}>
                      <CheckIcon />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>INNOWORQ Services</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {activeSector.services.map((s, i) => (
                    <span key={i} style={{
                      fontSize: '0.74rem', padding: '0.2rem 0.65rem',
                      background: 'rgba(9, 97, 159, 0.05)', color: 'var(--brand-blue)',
                      borderRadius: '4px', border: '1px solid rgba(9, 97, 159, 0.15)',
                      fontWeight: 600
                    }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Technology Ecosystem */}
              <div style={{
                backgroundColor: 'rgba(9, 97, 159, 0.02)',
                border: '1px solid rgba(9, 97, 159, 0.12)',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginBottom: '1.5rem'
              }}>
                <span style={{ 
                  fontSize: '0.74rem', 
                  fontWeight: 700, 
                  color: 'rgba(9, 97, 159, 0.8)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.2px', 
                  display: 'block', 
                  borderBottom: '1px solid rgba(9, 97, 159, 0.1)',
                  paddingBottom: '0.5rem'
                }}>
                  Integrated Tech Stack
                </span>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.6rem',
                  marginTop: '0.2rem'
                }}>
                  {activeSector.technologies.map((tech, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '0.6rem 0.85rem',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.01)'
                      }}
                    >
                      <span style={{ 
                        fontSize: '0.86rem', 
                        fontWeight: 650, 
                        color: 'rgba(15, 23, 42, 0.85)' 
                      }}>
                        {tech}
                      </span>
                      <span style={{ 
                        fontSize: '0.62rem', 
                        fontWeight: 700, 
                        color: '#16a34a',
                        backgroundColor: 'rgba(22, 163, 74, 0.08)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        VERIFIED SLA
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action links */}
              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', marginTop: '1.5rem' }}>
                <Link
                  to={`/support-desk?sector=${activeSector.id}`}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.75rem 1.2rem',
                    background: 'rgba(9,97,159,1)',
                    color: '#fff', borderRadius: '6px',
                    fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none'
                  }}
                >
                  Discuss Sector
                </Link>
                <Link
                  to="/services"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.75rem 1.2rem',
                    background: 'transparent',
                    color: 'rgba(9, 97, 159, 0.95)', borderRadius: '6px',
                    fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none',
                    border: '1px solid rgba(9, 97, 159, 0.3)'
                  }}
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Styles Injection */}
      <style>{`
        .industries-explorer-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: start;
        }
        .sector-selector-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .panel-inner-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
        }
        @media (max-width: 1024px) {
          .industries-explorer-grid {
            grid-template-columns: 1fr;
          }
          .sector-sticky-panel {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .panel-inner-split {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .sector-selector-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}

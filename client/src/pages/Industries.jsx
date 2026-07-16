import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
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
   Shared icons
────────────────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ marginTop: '2px' }}>
      <circle cx="7" cy="7" r="7" fill="rgba(9,97,159,0.1)" />
      <path d="M4 7.2L6.2 9.4L10 5" stroke="rgba(9,97,159,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ isOpen }) {
  return (
    <motion.svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
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
          {/* Concentric rings */}
          {[30, 55, 80].map((r, i) => (
            <motion.circle key={i} cx="100" cy="100" r={r}
              fill="none" stroke={`rgba(9,97,159,${0.12 - i * 0.03})`} strokeWidth="1" strokeDasharray="3 4"
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
                stroke="rgba(9,97,159,0.06)" strokeWidth="1" />
            );
          })}

          {/* Core node */}
          <motion.circle cx="100" cy="100" r="12"
            fill="rgba(9,97,159,0.18)" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5"
            animate={animate ? { r: [12, 14, 12] } : {}}
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
                  stroke="rgba(9,97,159,0.1)" strokeWidth="1" strokeDasharray="2 2"
                />
                <motion.circle cx={cx} cy={cy} r="7"
                  fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.25"
                  animate={animate ? { r: [7, 8.5, 7] } : {}}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <text x={cx} y={cy + 2.5} textAnchor="middle"
                  fontSize="4.5" fill="rgba(9,97,159,0.8)" fontWeight="bold" fontFamily="monospace">
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
   Industry Panel Component (Vertical Accordion layout for high-end smoothness)
────────────────────────────────────────────────────────────── */
function IndustryPanel({ industry, isExpanded, onToggle, index }) {
  const { Illustration } = industry;
  const [isHovered, setIsHovered] = useState(false);
  const panelRef = useRef(null);

  // Smooth scroll into focus when expanded
  useEffect(() => {
    if (isExpanded && panelRef.current) {
      const timer = setTimeout(() => {
        panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  return (
    <motion.article
      ref={panelRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        background: '#ffffff',
        border: isExpanded ? '1.5px solid rgba(9,97,159,0.35)' : '1px solid rgba(9,97,159,0.12)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: isExpanded
          ? '0 12px 35px rgba(9,97,159,0.06), 0 2px 8px rgba(9,97,159,0.03)'
          : '0 4px 12px rgba(0,0,0,0.01)',
        marginBottom: '1rem',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      aria-label={`${industry.name} industry panel`}
    >
      {/* Header — toggle expand click target */}
      <div
        style={{ 
          padding: '1.75rem 2rem', 
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          userSelect: 'none'
        }}
        onClick={onToggle}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onToggle()}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
          {/* Visual logo avatar */}
          <div style={{
            flexShrink: 0,
            width: '60px', height: '60px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #f0f7ff, #e8f4fd)',
            border: '1px solid rgba(9,97,159,0.1)',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Illustration isHovered={isHovered || isExpanded} />
          </div>

          <div>
            <span style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: 'rgba(9,97,159,0.6)',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.2rem'
            }}>
              {industry.shortTag}
            </span>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: isExpanded ? 'rgba(9,97,159,0.95)' : 'rgba(12,20,35,0.85)',
              margin: 0,
              letterSpacing: '-0.3px',
              transition: 'color 0.25s'
            }}>
              {industry.name}
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Tags (only shown when collapsed for summary info) */}
          {!isExpanded && (
            <span className="industry-collapsed-tagline" style={{ fontSize: '0.84rem', color: 'rgba(30,40,60,0.5)', fontWeight: 500 }}>
              {industry.desc.substring(0, 68)}...
            </span>
          )}
          
          <motion.div style={{ color: isExpanded ? 'rgba(9,97,159,0.9)' : 'rgba(9,97,159,0.45)' }}>
            <ChevronIcon isOpen={isExpanded} />
          </motion.div>
        </div>
      </div>

      {/* Expanded Accordion Body — Smooth Height Animation */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 2rem 2rem 2rem',
              borderTop: '1px solid rgba(9,97,159,0.06)',
              paddingTop: '2rem',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '3rem',
              alignItems: 'start'
            }} className="industry-expanded-grid">
              
              {/* Left Column: Scope details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9,97,159,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Sector Overview</h4>
                  <p style={{ fontSize: '0.98rem', color: 'rgba(30,40,60,0.75)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {industry.desc}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9,97,159,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Technical Challenges</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {industry.challenges.map((c, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: 'rgba(30,40,60,0.75)', lineHeight: 1.5 }}>
                        <CheckIcon />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9,97,159,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>INNOWORQ Services</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {industry.services.map((s, i) => (
                      <span key={i} style={{
                        fontSize: '0.76rem', padding: '0.2rem 0.65rem',
                        background: 'rgba(9,97,159,0.05)', color: 'rgba(9,97,159,0.85)',
                        borderRadius: '4px', border: '1px solid rgba(9,97,159,0.12)',
                        fontWeight: 600, whiteSpace: 'nowrap'
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Ecosystem */}
              <div style={{
                backgroundColor: 'rgba(9,97,159,0.02)',
                border: '1px solid rgba(9,97,159,0.08)',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(9,97,159,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'block', textAlign: 'center' }}>
                  Technology Ecosystem
                </span>
                <div style={{ width: '100%', maxWidth: '240px' }}>
                  <RadarDashboard industry={industry} isActive={isExpanded} />
                </div>
                <div style={{ width: '100%', borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {industry.technologies.map((t, i) => (
                    <span key={i} style={{
                      fontSize: '0.7rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      background: '#ffffff',
                      border: '1px solid rgba(9,97,159,0.1)',
                      color: 'rgba(30,40,60,0.6)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div style={{
              padding: '0 2rem 2rem 2rem',
              display: 'flex',
              gap: '1rem',
              borderTop: '1px solid rgba(9,97,159,0.04)',
              paddingTop: '1.25rem'
            }}>
              <Link
                to={`/support-desk?sector=${industry.id}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.3rem',
                  background: 'rgba(9,97,159,1)',
                  color: '#fff', borderRadius: '6px',
                  fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(9,97,159,0.18)'
                }}
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
                  padding: '0.6rem 1.3rem',
                  background: 'transparent',
                  color: 'rgba(9,97,159,0.85)', borderRadius: '6px',
                  fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none',
                  border: '1px solid rgba(9,97,159,0.2)'
                }}
              >
                View Services
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Industries Page
────────────────────────────────────────────────────────────── */
export default function Industries() {
  const [expandedId, setExpandedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleIndustries = activeFilter === 'all'
    ? INDUSTRIES
    : INDUSTRIES.filter(ind => {
        const tag = FILTER_TAGS.find(t => t.id === activeFilter);
        return tag?.match?.includes(ind.id);
      });

  function toggleExpand(id) {
    setExpandedId(prev => (prev === id ? null : id));
  }

  return (
    <main id="industries-page-view" style={{ backgroundColor: '#ffffff', color: 'var(--text-light-primary)' }}>

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

      {/* ── Industry Grid Accordion Stack ── */}
      <section style={{ padding: '3.5rem 0 6rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '960px' }}>

          {/* Filter tabs */}
          <ScrollReveal variant="fade-up">
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
              {FILTER_TAGS.map(tag => (
                <button
                  key={tag.id}
                  id={`filter-${tag.id}`}
                  onClick={() => { setActiveFilter(tag.id); setExpandedId(null); }}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '100px',
                    border: activeFilter === tag.id
                      ? '1.5px solid rgba(9,97,159,0.6)'
                      : '1px solid rgba(9,97,159,0.18)',
                    background: activeFilter === tag.id
                      ? 'rgba(9,97,159,0.08)'
                      : '#ffffff',
                    color: activeFilter === tag.id
                      ? 'rgba(9,97,159,0.9)'
                      : 'rgba(30,40,60,0.6)',
                    fontSize: '0.8rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.25s',
                  }}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Vertical Accordion Stack - Buttery Smooth and Lag-free */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {visibleIndustries.map((industry, i) => (
              <IndustryPanel
                key={industry.id}
                industry={industry}
                isExpanded={expandedId === industry.id}
                onToggle={() => toggleExpand(industry.id)}
                index={i}
              />
            ))}
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

      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 768px) {
          .industry-expanded-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .industry-collapsed-tagline {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}

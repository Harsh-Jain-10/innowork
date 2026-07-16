import React, { useState } from 'react';
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
    technologies: ['Cisco IoT', 'Dell EMC Storage', 'Fortinet FortiGate', 'IBM Systems'],
    services: ['ICCC Integration', 'NOC Operations', 'Edge Gateway Security', 'Video Surveillance Management'],
    Illustration: SmartCityIllustration,
    accentRgb: '9, 97, 159',
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
    technologies: ['Juniper MX Series', 'Cisco Core Switches', 'F5 BIG-IP', 'NetApp Storage'],
    services: ['Edge Routing Configuration', 'High-Availability Switching', 'NOC Operations', 'Third-Party Maintenance'],
    Illustration: TelecomIllustration,
    accentRgb: '9, 97, 159',
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
    accentRgb: '9, 97, 159',
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
    accentRgb: '9, 97, 159',
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
    technologies: ['Checkpoint Quantum', 'F5 Advanced WAF', 'Oracle Database', 'Fortinet Secure SD-WAN'],
    services: ['Secure Datacenter Architecture', 'DR Sync Administration', 'Compliance Audit Preparation', 'Penetration Testing Support'],
    Illustration: BFSIIllustration,
    accentRgb: '9, 97, 159',
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
    accentRgb: '9, 97, 159',
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
    accentRgb: '9, 97, 159',
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
    accentRgb: '9, 97, 159',
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
    technologies: ['F5 BIG-IP LTM', 'NetApp ONTAP', 'Cisco Catalyst', 'Akamai CDN Integration'],
    services: ['CDN Architecture Tuning', 'Media Storage Cluster Support', 'Multi-Vendor Network Maintenance', 'SLA Network Monitoring'],
    Illustration: MediaIllustration,
    accentRgb: '9, 97, 159',
  },
];

/* ─────────────────────────────────────────────────────────────
   Subcomponents
────────────────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="rgba(9,97,159,0.12)" />
      <path d="M4 7.2L6.2 9.4L10 5" stroke="rgba(9,97,159,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ isOpen }) {
  return (
    <motion.svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      aria-hidden="true"
    >
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

/* Radar / ecosystem node visualization */
function RadarDashboard({ industry, isActive }) {
  const reduced = useReducedMotion();
  const animate = !reduced;
  const nodeCount = industry.technologies.length;

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }} aria-label={`${industry.name} Technology Ecosystem`}>
          <defs>
            <radialGradient id={`radar-grad-${industry.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(9,97,159,0.15)" />
              <stop offset="100%" stopColor="rgba(9,97,159,0.01)" />
            </radialGradient>
          </defs>

          {/* Rings */}
          {[30, 55, 80].map((r, i) => (
            <motion.circle key={i} cx="100" cy="100" r={r}
              fill="none" stroke={`rgba(9,97,159,${0.12 - i * 0.03})`} strokeWidth="1" strokeDasharray="3 4"
              animate={animate && isActive ? { rotate: i % 2 === 0 ? 360 : -360 } : {}}
              style={{ transformOrigin: '100px 100px' }}
              transition={{ duration: 18 + i * 5, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Radial spokes */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            return (
              <line key={i}
                x1="100" y1="100"
                x2={100 + 80 * Math.cos(angle)}
                y2={100 + 80 * Math.sin(angle)}
                stroke="rgba(9,97,159,0.06)" strokeWidth="1"
              />
            );
          })}

          {/* Center hub */}
          <motion.circle cx="100" cy="100" r="14"
            fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5"
            animate={animate && isActive ? { r: [14, 17, 14], opacity: [0.8, 1, 0.8] } : {}}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.circle cx="100" cy="100" r="25"
            fill="none" stroke="rgba(9,97,159,0.15)" strokeWidth="1"
            animate={animate && isActive ? { r: [25, 35, 25], opacity: [0.5, 0, 0.5] } : {}}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Technology nodes */}
          {industry.technologies.map((tech, i) => {
            const angle = ((i / nodeCount) * 360 - 90) * (Math.PI / 180);
            const r = 62;
            const cx = 100 + r * Math.cos(angle);
            const cy = 100 + r * Math.sin(angle);
            const shortName = tech.split(' ').slice(0, 1).join(' ');
            return (
              <g key={i}>
                <motion.line x1="100" y1="100" x2={cx} y2={cy}
                  stroke="rgba(9,97,159,0.15)" strokeWidth="1" strokeDasharray="3 3"
                  animate={animate && isActive ? { opacity: [0.3, 0.8, 0.3] } : {}}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                />
                <motion.circle cx={cx} cy={cy} r="8"
                  fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5"
                  animate={animate && isActive ? {
                    r: [8, 10, 8],
                    stroke: ['rgba(9,97,159,0.4)', 'rgba(9,97,159,0.8)', 'rgba(9,97,159,0.4)']
                  } : {}}
                  transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                />
                <text x={cx} y={cy + 3} textAnchor="middle"
                  fontSize="5" fill="rgba(9,97,159,0.7)" fontFamily="monospace">
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

/* Single industry panel in the main grid */
function IndustryPanel({ industry, isExpanded, onToggle, index }) {
  const { Illustration } = industry;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, layout: { duration: 0.4 } }}
      style={{
        background: isExpanded
          ? 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)'
          : '#ffffff',
        border: isExpanded ? '1.5px solid rgba(9,97,159,0.35)' : '1px solid rgba(9,97,159,0.12)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: isExpanded
          ? '0 12px 40px rgba(9,97,159,0.12), 0 2px 8px rgba(9,97,159,0.06)'
          : '0 2px 8px rgba(9,97,159,0.04)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'pointer',
        gridColumn: isExpanded ? 'span 2' : 'span 1',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onToggle}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${industry.name} industry panel`}
    >
      {/* Collapsed state */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          {/* Illustration thumbnail */}
          <div style={{
            flexShrink: 0,
            width: isExpanded ? '0' : '80px',
            height: isExpanded ? '0' : '80px',
            overflow: 'hidden',
            transition: 'width 0.4s, height 0.4s',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #f0f7ff, #e8f4fd)',
            border: '1px solid rgba(9,97,159,0.1)',
          }}>
            {!isExpanded && (
              <div style={{ width: '80px', height: '80px', padding: '4px' }}>
                <Illustration isHovered={isHovered} />
              </div>
            )}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              <div>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px',
                  color: 'rgba(9,97,159,0.6)', fontFamily: 'monospace',
                  textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem'
                }}>
                  {industry.shortTag}
                </span>
                <h2 style={{
                  fontSize: isExpanded ? '1.4rem' : '1.05rem',
                  fontWeight: 700, color: 'rgba(9,97,159,0.9)',
                  margin: 0, letterSpacing: '-0.3px', transition: 'font-size 0.3s',
                }}>
                  {industry.name}
                </h2>
              </div>
              <motion.div
                style={{ color: 'rgba(9,97,159,0.5)', flexShrink: 0 }}
                animate={{ color: isHovered ? 'rgba(9,97,159,0.9)' : 'rgba(9,97,159,0.5)' }}
              >
                <ChevronIcon isOpen={isExpanded} />
              </motion.div>
            </div>
            <p style={{
              color: 'rgba(30,40,60,0.7)', fontSize: '0.85rem',
              lineHeight: 1.6, margin: '0.5rem 0 0', display: '-webkit-box',
              WebkitLineClamp: isExpanded ? 'unset' : 2,
              WebkitBoxOrient: 'vertical', overflow: isExpanded ? 'visible' : 'hidden',
              transition: 'all 0.3s',
            }}>
              {industry.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Expanded state */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: 'hidden' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              padding: '0 1.5rem 1.5rem',
              borderTop: '1px solid rgba(9,97,159,0.08)',
              marginTop: '0',
              paddingTop: '1rem',
              display: 'grid',
              gridTemplateColumns: '1fr 220px',
              gap: '2rem',
              alignItems: 'start',
            }}>
              {/* Left: Content */}
              <div>
                {/* Full illustration */}
                <div style={{
                  width: '100%', height: '200px',
                  background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%)',
                  borderRadius: '8px', marginBottom: '1.25rem',
                  border: '1px solid rgba(9,97,159,0.1)',
                  overflow: 'hidden',
                }}>
                  <Illustration isHovered />
                </div>

                {/* Challenges */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3 style={{
                    fontSize: '0.7rem', fontWeight: 700, color: 'rgba(9,97,159,0.6)',
                    textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'monospace',
                    marginBottom: '0.6rem'
                  }}>
                    Technical Challenges
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {industry.challenges.map((c, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(30,40,60,0.75)', lineHeight: 1.5 }}>
                        <span style={{ flexShrink: 0, marginTop: '2px' }}><CheckIcon /></span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 style={{
                    fontSize: '0.7rem', fontWeight: 700, color: 'rgba(9,97,159,0.6)',
                    textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'monospace',
                    marginBottom: '0.6rem'
                  }}>
                    INNOWORQ Services
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {industry.services.map((s, i) => (
                      <span key={i} style={{
                        fontSize: '0.75rem', padding: '0.25rem 0.65rem',
                        background: 'rgba(9,97,159,0.08)', color: 'rgba(9,97,159,0.8)',
                        borderRadius: '100px', border: '1px solid rgba(9,97,159,0.15)',
                        fontWeight: 500, whiteSpace: 'nowrap',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Radar */}
              <div>
                <h3 style={{
                  fontSize: '0.7rem', fontWeight: 700, color: 'rgba(9,97,159,0.6)',
                  textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'monospace',
                  marginBottom: '0.75rem', textAlign: 'center'
                }}>
                  Technology Ecosystem
                </h3>
                <RadarDashboard industry={industry} isActive={isExpanded} />
                <div style={{ marginTop: '0.75rem' }}>
                  {industry.technologies.map((t, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.75rem', color: 'rgba(30,40,60,0.65)',
                      marginBottom: '0.3rem',
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(9,97,159,0.5)', flexShrink: 0 }} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div style={{
              padding: '0.75rem 1.5rem 1.25rem',
              borderTop: '1px solid rgba(9,97,159,0.06)',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <Link
                to="/contact"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.5rem 1.1rem',
                  background: 'rgba(9,97,159,1)',
                  color: '#fff', borderRadius: '6px',
                  fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Discuss this Sector
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/services"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.5rem 1.1rem',
                  background: 'transparent',
                  color: 'rgba(9,97,159,0.8)', borderRadius: '6px',
                  fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
                  border: '1px solid rgba(9,97,159,0.25)',
                  transition: 'background 0.2s, border-color 0.2s',
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
   Hero stats strip
────────────────────────────────────────────────────────────── */
const STATS = [
  { value: '9', label: 'Industry Sectors' },
  { value: '24/7', label: 'NOC Operations' },
  { value: '99.9%', label: 'SLA Uptime Target' },
  { value: '20+', label: 'OEM Partnerships' },
];

function StatsStrip() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid rgba(9,97,159,0.1)',
      borderBottom: '1px solid rgba(9,97,159,0.1)',
    }}>
      {STATS.map((s, i) => (
        <div key={i} style={{
          padding: '1.5rem 2rem',
          borderRight: i < STATS.length - 1 ? '1px solid rgba(9,97,159,0.08)' : 'none',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '1.8rem', fontWeight: 800, color: 'rgba(9,97,159,0.9)',
            letterSpacing: '-1px', lineHeight: 1,
          }}>
            {s.value}
          </div>
          <div style={{
            fontSize: '0.72rem', color: 'rgba(30,40,60,0.5)',
            marginTop: '0.3rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Capability cross-reference matrix
────────────────────────────────────────────────────────────── */
const MATRIX_CAPS = ['NOC Operations', 'Disaster Recovery', 'Network Security', 'Virtualization', 'Compliance Audit', 'Staff Augmentation'];
const MATRIX_INDUSTRIES = ['Smart City', 'Telecom', 'Healthcare', 'BFSI', 'Manufacturing', 'Government'];
const MATRIX_DATA = [
  // NOC, DR, NetSec, Virt, Compliance, StaffAug
  [true,  true,  true,  false, false, false],  // Smart City
  [true,  false, false, false, false, true ],  // Telecom
  [true,  true,  false, true,  true,  false],  // Healthcare
  [false, true,  true,  false, true,  false],  // BFSI
  [false, false, false, true,  false, true ],  // Manufacturing
  [true,  false, true,  false, true,  false],  // Government
];

function CapabilityMatrix() {
  return (
    <ScrollReveal variant="fade-up">
      <div style={{
        background: '#ffffff',
        border: '1px solid rgba(9,97,159,0.12)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(9,97,159,0.08)' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(9,97,159,0.8)', margin: 0, letterSpacing: '-0.2px' }}>
            Capability Cross-Reference
          </h3>
          <p style={{ fontSize: '0.75rem', color: 'rgba(30,40,60,0.5)', margin: '0.2rem 0 0' }}>
            Service delivery alignment across key industry sectors
          </p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
            <thead>
              <tr style={{ background: 'rgba(9,97,159,0.03)' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'rgba(30,40,60,0.5)', fontWeight: 600, borderBottom: '1px solid rgba(9,97,159,0.08)', width: '120px', minWidth: '120px', fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                  SECTOR
                </th>
                {MATRIX_CAPS.map((cap, i) => (
                  <th key={i} style={{ padding: '0.75rem 0.5rem', textAlign: 'center', color: 'rgba(9,97,159,0.7)', fontWeight: 600, borderBottom: '1px solid rgba(9,97,159,0.08)', fontSize: '0.65rem', letterSpacing: '0.3px', maxWidth: '80px' }}>
                    {cap}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX_INDUSTRIES.map((industry, ri) => (
                <tr key={ri} style={{ borderBottom: ri < MATRIX_INDUSTRIES.length - 1 ? '1px solid rgba(9,97,159,0.06)' : 'none' }}>
                  <td style={{ padding: '0.65rem 1rem', color: 'rgba(30,40,60,0.75)', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.75rem' }}>
                    {industry}
                  </td>
                  {MATRIX_DATA[ri].map((has, ci) => (
                    <td key={ci} style={{ padding: '0.65rem 0.5rem', textAlign: 'center' }}>
                      {has ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (ri * 6 + ci) * 0.02 }}
                          style={{
                            width: '20px', height: '20px', margin: '0 auto',
                            background: 'rgba(9,97,159,0.15)',
                            border: '1.5px solid rgba(9,97,159,0.35)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                            <path d="M2 5.2L4.2 7.4L8 3" stroke="rgba(9,97,159,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      ) : (
                        <div style={{ width: '20px', height: '20px', margin: '0 auto', background: 'rgba(9,97,159,0.03)', borderRadius: '50%' }} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main page
────────────────────────────────────────────────────────────── */
export default function Industries() {
  const [expandedId, setExpandedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const FILTER_TAGS = [
    { id: 'all', label: 'All Sectors' },
    { id: 'infra', label: 'Infrastructure', match: ['smart-city', 'telecom', 'government'] },
    { id: 'enterprise', label: 'Enterprise', match: ['bfsi', 'manufacturing', 'logistics'] },
    { id: 'digital', label: 'Digital Services', match: ['healthcare', 'education', 'media'] },
  ];

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
    <main
      id="industries-page-view"
      style={{ backgroundColor: '#f8fafc', color: 'var(--text-light-primary)' }}
    >
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(155deg, #f0f7ff 0%, #f8fafc 55%, #eef6fd 100%)',
        padding: '7rem 0 0',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Blueprint grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9,97,159,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,97,159,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '900px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9,97,159,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', paddingBottom: '3rem' }}>
            <ScrollReveal variant="fade-down">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'inline-block',
                  background: 'rgba(9,97,159,0.08)',
                  border: '1px solid rgba(9,97,159,0.2)',
                  borderRadius: '100px',
                  padding: '0.3rem 1rem',
                  fontSize: '0.72rem', fontWeight: 700,
                  color: 'rgba(9,97,159,0.8)',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  marginBottom: '1.5rem',
                }}
              >
                Domain Alignments
              </motion.span>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800, letterSpacing: '-1.5px',
                color: 'rgba(12,20,35,0.92)',
                lineHeight: 1.1, marginBottom: '1.25rem',
              }}>
                Industries We Serve
              </h1>

              <p style={{
                fontSize: '1.05rem', color: 'rgba(30,40,60,0.65)',
                maxWidth: '620px', margin: '0 auto', lineHeight: 1.75,
              }}>
                INNOWORQ designs SLA-driven infrastructure architectures for{' '}
                <strong style={{ color: 'rgba(9,97,159,0.85)' }}>9 industry verticals</strong>,
                from critical banking infrastructure to smart city deployments and telecom networks.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
          <StatsStrip />
        </div>
      </section>

      {/* ── Industry Grid ── */}
      <section style={{ padding: '4rem 0 3rem' }}>
        <div className="container">

          {/* Filter tabs */}
          <ScrollReveal variant="fade-up">
            <div style={{
              display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
              marginBottom: '2rem',
            }}>
              {FILTER_TAGS.map(tag => (
                <button
                  key={tag.id}
                  onClick={() => { setActiveFilter(tag.id); setExpandedId(null); }}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '100px',
                    border: activeFilter === tag.id ? '1.5px solid rgba(9,97,159,0.6)' : '1px solid rgba(9,97,159,0.18)',
                    background: activeFilter === tag.id ? 'rgba(9,97,159,0.1)' : 'rgba(255,255,255,0.8)',
                    color: activeFilter === tag.id ? 'rgba(9,97,159,0.9)' : 'rgba(30,40,60,0.6)',
                    fontSize: '0.8rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Industry panels grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {visibleIndustries.map((industry, i) => (
                <IndustryPanel
                  key={industry.id}
                  industry={industry}
                  isExpanded={expandedId === industry.id}
                  onToggle={() => toggleExpand(industry.id)}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Capability Matrix ── */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px',
                color: 'rgba(9,97,159,0.55)', fontFamily: 'monospace',
                textTransform: 'uppercase',
              }}>
                Service Alignment
              </span>
              <h2 style={{
                fontSize: '1.5rem', fontWeight: 800, color: 'rgba(12,20,35,0.88)',
                letterSpacing: '-0.5px', marginTop: '0.3rem', marginBottom: 0,
              }}>
                Capability Alignment Matrix
              </h2>
            </div>
          </ScrollReveal>
          <CapabilityMatrix />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(9,97,159,0.06) 0%, rgba(9,97,159,0.02) 100%)',
        borderTop: '1px solid rgba(9,97,159,0.1)',
        borderBottom: '1px solid rgba(9,97,159,0.1)',
        padding: '4rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal variant="fade-up">
            <h2 style={{
              fontSize: '1.75rem', fontWeight: 800, color: 'rgba(12,20,35,0.88)',
              letterSpacing: '-0.5px', marginBottom: '0.75rem',
            }}>
              Ready to architect for your sector?
            </h2>
            <p style={{
              fontSize: '1rem', color: 'rgba(30,40,60,0.6)',
              maxWidth: '480px', margin: '0 auto 1.75rem', lineHeight: 1.7,
            }}>
              Our sector specialists will assess your IT infrastructure demands and
              deliver a tailored SLA architecture roadmap.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  background: 'rgba(9,97,159,1)',
                  color: '#fff', borderRadius: '8px',
                  fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(9,97,159,0.25)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
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
                  padding: '0.75rem 1.75rem',
                  background: '#ffffff',
                  color: 'rgba(9,97,159,0.85)', borderRadius: '8px',
                  fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                  border: '1px solid rgba(9,97,159,0.25)',
                  transition: 'border-color 0.2s',
                }}
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

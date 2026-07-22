import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import ScrollReveal, { StaggerContainer } from '../components/ScrollReveal';

/* ─────────────────────────────────────────────────────────────
   Industry configuration — all content from official INNOWORQ
 ────────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    id: 'smart-city',
    name: 'Smart Cities & Public Safety',
    shortTag: 'SMART INFRASTRUCTURE',
    desc: 'Architecting resilient civic IT systems, Integrated Command and Control Centers (ICCC), edge IoT gateways, and high-availability public safety operations.',
    challenges: [
      'Processing and analyzing massive telemetry data from millions of distributed IoT edge sensors',
      'Hardening distributed edge gateways against lateral and external network threats',
      'Ensuring zero-downtime availability for critical civic monitoring and emergency command centers',
    ],
    technologies: ['Cisco Industrial IoT', 'Dell EMC PowerScale', 'Fortinet Security Fabric', 'IBM Power Systems'],
    services: ['Command Center Integration', '24/7 NOC & SOC Operations', 'Edge Gateway Cybersecurity', 'Public Safety System Management'],
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    shortTag: 'TELECOM & CARRIER SERVICES',
    desc: 'Optimizing high-throughput carrier networks, configuring edge routing fabrics, securing base stations, and deploying active network infrastructure with maximum availability.',
    challenges: [
      'Mitigating latency and packet throughput bottlenecks at high-density edge exchange nodes',
      'Ensuring carrier-grade network continuity across thousands of remote cell towers and base stations',
      'Aligning routing protocols and optimizing performance across complex, multi-vendor carrier environments',
    ],
    technologies: ['Juniper MX Series Routers', 'Cisco Catalyst Core Switches', 'F5 BIG-IP Carrier-Grade NAT', 'NetApp FAS Storage'],
    services: ['Core Routing & Switching Setup', 'High-Availability Fabric Engineering', 'Carrier-Class NOC Operations', 'Multi-Vendor Third-Party Support'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Systems',
    shortTag: 'CLINICAL INFRASTRUCTURE',
    desc: 'Architecting compliant, high-availability datacenter infrastructure and cloud services that keep mission-critical clinical applications and EHR systems online 24/7.',
    challenges: [
      'Ensuring continuous operation for life-critical clinical applications during hardware or network failures',
      'Securing sensitive electronic health records (EHR) to maintain strict HIPAA compliance and data integrity',
      'Synchronizing primary and secondary clinical datacenters with zero data loss (RPO/RTO) targets',
    ],
    technologies: ['VMware Cloud Foundation', 'Dell PowerEdge Server Clusters', 'Veeam Availability Suite', 'Check Point Quantum Security'],
    services: ['SLA-Driven Datacenter Management', 'Active-Active Disaster Recovery', 'Compliance & Security Auditing', 'Resilient Clinical Compute Hosting'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'manufacturing',
    name: 'Industrial & Manufacturing',
    shortTag: 'OT-IT INTEGRATION',
    desc: 'Bridging Operational Technology (OT) and Information Technology (IT) to secure shop-floor compute systems, automate telemetry pipelines, and monitor industrial control systems.',
    challenges: [
      'Safely bridging legacy industrial equipment and OT systems with modern IT networks without introducing security gaps',
      'Ingesting and processing high-frequency sensor telemetry feeds from automated assembly lines in real-time',
      'Minimizing compute-related downtime to avoid costly manufacturing line stoppages and inventory losses',
    ],
    technologies: ['Red Hat Ansible Automation', 'Nutanix Cloud Platform', 'Cisco Industrial Ethernet Switches', 'Microsoft System Center'],
    services: ['OT-IT Convergence Advisory', 'Industrial Automation Pipeline Engineering', 'ICS/SCADA Network Monitoring', 'Dedicated On-Site Engineering'],
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bfsi',
    name: 'Banking & Financial Services (BFSI)',
    shortTag: 'FINANCIAL SYSTEMS & SECURITY',
    desc: 'Engineering secure datacenter architectures, multi-region disaster recovery, and high-performance transactional environments with stringent compliance controls.',
    challenges: [
      'Protecting financial core networks and transactional databases against sophisticated, state-sponsored cyber threats',
      'Maintaining real-time transaction consistency and sub-second failover across geographical locations during outages',
      'Adhering to complex regulatory requirements such as RBI, SEBI, and PCI-DSS audit frameworks',
    ],
    technologies: ['Check Point Quantum Security', 'F5 Advanced Web Application Firewall', 'Oracle Real Application Clusters (RAC)', 'Fortinet Secure SD-WAN'],
    services: ['High-Security Datacenter Architecture', 'Multi-Region DR Synchronization', 'Regulatory Audit Readiness Assessments', 'Vulnerability Assessment & Pen Testing'],
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    shortTag: 'SUPPLY CHAIN INFRASTRUCTURE',
    desc: 'Designing robust, distributed networks and scalable datacenter architectures that keep global supply chains and transport management systems running without interruption.',
    challenges: [
      'Optimizing database response times and reducing latency for real-time tracking across international transport routes',
      'Ensuring stable WAN/SD-WAN connectivity across remote fulfillment centers and freight yards',
      'Handling massive transactional spikes during peak e-commerce and seasonal distribution periods',
    ],
    technologies: ['VMware vSphere Suite', 'Microsoft Windows Server Clusters', 'Cisco SD-WAN Technologies', 'Veeam Backup & Replication'],
    services: ['Enterprise Server Infrastructure Architecture', 'Remote Fulfillment Site Networking', 'Scale-Out Virtualization Platforms', 'Proactive Infrastructure Maintenance'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'education',
    name: 'Education & Academic Research',
    shortTag: 'ACADEMIC INFRASTRUCTURE',
    desc: 'Transforming academic institutions with campus-wide network digitization, secure hybrid clouds, and high-performance computing labs for advanced research.',
    challenges: [
      'Providing on-demand compute resources for thousands of concurrent students in virtual lab environments',
      'Managing complex campus-wide wired and wireless networks with diverse student and faculty requirements',
      'Implementing secure identity and access management (IAM) for highly fluid student and staff user directories',
    ],
    technologies: ['Microsoft Entra ID / Active Directory', 'Nutanix Enterprise Cloud', 'Red Hat OpenShift Platform', 'VMware Horizon VDI Solutions'],
    services: ['Virtual Lab Infrastructure Hosting', 'Institutional IT Training & Capability Building', 'Identity & Access Management Integration', 'Campus Network Digitization & Security'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    shortTag: 'FEDERAL & STATE IT',
    desc: 'Providing secure hosting environments, prompt security patching, compliance support, and robust systems maintenance for civic agencies and public portals.',
    challenges: [
      'Defending public services and critical infrastructure against coordinated DDoS and state-level cyber threats',
      'Providing continuous operational support and high availability for crisis response and emergency operations systems',
      'Conducting rigorous compliance and security audits without disrupting live citizen services',
    ],
    technologies: ['Red Hat Enterprise Linux (RHEL)', 'Check Point Next-Gen Firewalls', 'IBM Power Systems Platforms', 'Dell Enterprise Storage Arrays'],
    services: ['Critical Patch Management & Security Operations', '24/7 Command Center Support Services', 'Compliance & Vulnerability Auditing', 'High-Security Enterprise Hosting Solutions'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'media',
    name: 'Media, Entertainment & CDN',
    shortTag: 'CONTENT DISTRIBUTION',
    desc: 'Architecting scale-out storage matrices, high-throughput delivery systems, and low-latency network pipelines for global broadcasting and streaming services.',
    challenges: [
      'Handling immense data throughput and traffic spikes during real-time, global live streaming events',
      'Eliminating data access delays and I/O bottlenecks in media editing, transcoding, and playout storage clusters',
      'Dynamic traffic load balancing to ensure uninterrupted, high-definition broadcast streams during peak windows',
    ],
    technologies: ['F5 BIG-IP Application Delivery Controllers', 'NetApp Enterprise Storage Systems', 'Cisco Catalyst Backbone Switches', 'Global Content Delivery Network Integrations'],
    services: ['CDN Architecture & Performance Tuning', 'Petabyte-Scale Storage Support Services', 'Multi-Vendor Core Network Integration', 'SLA-Driven Stream Performance Monitoring'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
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
      <circle cx="8" cy="8" r="8" fill="rgba(9, 97, 159, 0.08)" />
      <path d="M5 8.2L7.2 10.4L11 6" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Interactive accessible Card Component
 ────────────────────────────────────────────────────────────── */
function IndustryCard({ ind, onClick }) {
  const [isFocusedOrHovered, setIsFocusedOrHovered] = useState(false);

  return (
    <div
      className="industry-card"
      onClick={onClick}
      onMouseEnter={() => setIsFocusedOrHovered(true)}
      onMouseLeave={() => setIsFocusedOrHovered(false)}
      onFocus={() => setIsFocusedOrHovered(true)}
      onBlur={() => setIsFocusedOrHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Explore specs and services for ${ind.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid rgba(9, 97, 159, 0.08)',
        boxShadow: isFocusedOrHovered 
          ? '0 12px 30px rgba(9, 97, 159, 0.08)' 
          : '0 4px 20px rgba(9, 97, 159, 0.02)',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        height: '380px',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
        transform: isFocusedOrHovered ? 'translateY(-6px)' : 'translateY(0)',
        outline: isFocusedOrHovered ? '2px solid var(--brand-blue)' : 'none',
        outlineOffset: '2px'
      }}
    >
      <div>
        <div style={{
          width: '100%',
          height: '150px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '1.25rem',
          border: '1px solid rgba(9, 97, 159, 0.08)'
        }}>
          {/* Subtle blue-gray overlay for cohesive branding */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(9, 97, 159, 0.02) 0%, rgba(9, 97, 159, 0.15) 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }} />
          <motion.img
            src={ind.image}
            alt={ind.name}
            animate={isFocusedOrHovered ? { scale: 1.06 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 800,
          color: 'var(--brand-blue)',
          letterSpacing: '1.2px',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.4rem'
        }}>
          {ind.shortTag}
        </span>

        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          margin: '0 0 0.5rem 0',
          transition: 'color 0.3s ease',
          color: isFocusedOrHovered ? 'var(--brand-blue)' : 'rgba(12, 20, 35, 0.92)'
        }}>
          {ind.name}
        </h3>

        <p style={{
          fontSize: '0.86rem',
          color: 'rgba(30, 41, 59, 0.65)',
          lineHeight: 1.55,
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {ind.desc}
        </p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--brand-blue)',
        fontSize: '0.82rem',
        fontWeight: 700,
        marginTop: '1rem',
        transition: 'gap 0.3s ease'
      }}>
        <span>Explore Specs &amp; SLA Services</span>
        <motion.span
          animate={isFocusedOrHovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="var(--brand-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Premium Slide-Over Detail Drawer Component
 ────────────────────────────────────────────────────────────── */
function SectorDetailDrawer({ sector, onClose }) {
  useEffect(() => {
    if (sector) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sector]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!sector) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
      {/* Dimmed Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(4px)',
          cursor: 'pointer'
        }}
      />

      {/* Slide-over Drawer Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#ffffff',
          boxShadow: '-10px 0 40px rgba(15, 23, 42, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 2rem',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          zIndex: 2
        }}>
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 800,
            color: 'var(--brand-blue)',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            {sector.shortTag}
          </span>
          <button
            onClick={onClose}
            style={{
              border: 'none',
              background: 'transparent',
              color: 'rgba(30, 41, 59, 0.5)',
              fontSize: '1.25rem',
              fontWeight: 300,
              cursor: 'pointer',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
              e.currentTarget.style.color = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'rgba(30, 41, 59, 0.5)';
            }}
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Illustration Frame */}
          <div style={{
            width: '100%',
            height: '220px',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(9, 97, 159, 0.08)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(3, 7, 18, 0.1) 0%, rgba(3, 7, 18, 0.4) 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
            <img
              src={sector.image}
              alt={sector.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Title & Description */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '0.75rem',
              lineHeight: 1.15
            }}>
              {sector.name}
            </h2>
            <p style={{
              fontSize: '0.94rem',
              color: 'rgba(30, 41, 59, 0.75)',
              lineHeight: 1.65,
              margin: 0
            }}>
              {sector.desc}
            </p>
          </div>

          {/* Operational Challenges */}
          <div>
            <h4 style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              color: 'var(--brand-blue)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.85rem'
            }}>
              Operational Challenges We Solve
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {sector.challenges.map((c, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  color: '#334155',
                  lineHeight: 1.45
                }}>
                  <CheckIcon />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key SLA Services */}
          <div>
            <h4 style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              color: 'var(--brand-blue)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.85rem'
            }}>
              Key SLA Services
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {sector.services.map((s, i) => (
                <span key={i} style={{
                  fontSize: '0.76rem',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(9, 97, 159, 0.05)',
                  color: 'var(--brand-blue)',
                  borderRadius: '8px',
                  border: '1px solid rgba(9, 97, 159, 0.12)',
                  fontWeight: 600
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Ecosystem Technologies */}
          <div>
            <h4 style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              color: 'var(--brand-blue)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.85rem'
            }}>
              Supported Ecosystem
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {sector.technologies.map((t, i) => (
                <span key={i} style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: 'rgba(30, 41, 59, 0.7)',
                  fontSize: '0.74rem',
                  fontWeight: 500
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Sticky Footer */}
        <div style={{
          padding: '1.25rem 2rem',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex'
        }}>
          <Link
            to={`/support-desk?sector=${sector.id}`}
            onClick={onClose}
            style={{
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              background: 'rgba(9, 97, 159, 1)',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              textAlign: 'center',
              boxShadow: '0 4px 14px rgba(9, 97, 159, 0.25)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-blue-hover)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(9, 97, 159, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(9, 97, 159, 1)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(9, 97, 159, 0.25)';
            }}
          >
            Discuss {sector.name} Architecture ➔
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Industries Component
 ────────────────────────────────────────────────────────────── */
export default function Industries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSector, setActiveSector] = useState(null);

  // Auto-open sector if specified in URL query params
  useEffect(() => {
    const sectorId = searchParams.get('sector');
    if (sectorId) {
      const sector = INDUSTRIES.find(s => s.id === sectorId);
      if (sector) {
        setActiveSector(sector);
      }
    }
  }, [searchParams]);

  const visibleIndustries = activeFilter === 'all'
    ? INDUSTRIES
    : INDUSTRIES.filter(ind => {
        const tag = FILTER_TAGS.find(t => t.id === activeFilter);
        return tag?.match?.includes(ind.id);
      });

  return (
    <main id="industries-page-view" style={{ backgroundColor: '#f8fafc', color: 'var(--text-light-primary)', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fafc 55%, #eef6fd 100%)',
        padding: '8rem 0 3rem 0',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(9,97,159,0.1)'
      }}>
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

      {/* ── Interactive Sector Grid (Premium Light Theme) ── */}
      <section style={{ 
        padding: '5rem 0 8rem 0', 
        backgroundColor: '#f8fafc', 
        color: 'var(--text-light-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9, 97, 159, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9, 97, 159, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.8
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
          
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

          {/* 3x3 Interactive Grid of Premium Cards */}
          <motion.div layout className="industries-explorer-grid">
            <AnimatePresence mode="popLayout">
              {visibleIndustries.map((ind) => (
                <motion.div
                  key={ind.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <IndustryCard ind={ind} onClick={() => setActiveSector(ind)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── Slide-Over Detail Drawer ── */}
      <AnimatePresence>
        {activeSector && (
          <SectorDetailDrawer 
            sector={activeSector} 
            onClose={() => setActiveSector(null)} 
          />
        )}
      </AnimatePresence>

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
        .industries-explorer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.25rem;
          align-items: start;
          margin-top: 1rem;
        }
        @media (max-width: 1024px) {
          .industries-explorer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }
        @media (max-width: 640px) {
          .industries-explorer-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .industry-card-inner {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </main>
  );
}

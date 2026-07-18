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
      <circle cx="8" cy="8" r="8" fill="rgba(9, 97, 159, 0.08)" />
      <path d="M5 8.2L7.2 10.4L11 6" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Interactive 3D Flip Card Component
 ────────────────────────────────────────────────────────────── */
function IndustryCard({ ind }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { Illustration } = ind;

  return (
    <div 
      className="industry-card-perspective" 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: '1000px',
        height: '460px',
        cursor: 'pointer',
        width: '100%'
      }}
    >
      <motion.div
        className="industry-card-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* FRONT FACE */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(9, 97, 159, 0.12)',
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 30px rgba(9, 97, 159, 0.03)',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          WebkitBackfaceVisibility: 'hidden'
        }}>
          <div>
            <div style={{
              width: '100%',
              height: '160px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f0f7ff 100%)',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              border: '1px solid rgba(9, 97, 159, 0.05)'
            }}>
              <Illustration isHovered={true} />
            </div>
            
            <span style={{
              fontSize: '0.66rem',
              fontWeight: 800,
              color: 'var(--brand-blue)',
              letterSpacing: '1px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.4rem'
            }}>
              {ind.shortTag}
            </span>

            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'rgba(12, 20, 35, 0.92)',
              margin: '0 0 0.5rem 0'
            }}>
              {ind.name}
            </h3>

            <p style={{
              fontSize: '0.88rem',
              color: 'rgba(30, 41, 59, 0.65)',
              lineHeight: 1.5,
              margin: 0
            }}>
              {ind.desc}
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--brand-blue)',
            fontSize: '0.84rem',
            fontWeight: 700,
            marginTop: '1rem'
          }}>
            <span>Tech Specs & SLA Services</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="var(--brand-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* BACK FACE */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(9, 97, 159, 0.15)',
          backgroundColor: '#f8fafc',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: 'rotateY(180deg)',
          WebkitBackfaceVisibility: 'hidden',
          boxShadow: '0 8px 30px rgba(9, 97, 159, 0.05)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', overflowY: 'auto', paddingRight: '4px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.64rem', fontWeight: 800, color: 'var(--brand-blue)', fontFamily: 'monospace' }}>
                {ind.shortTag}
              </span>
              <button 
                onClick={() => setIsFlipped(false)}
                style={{ border: 'none', background: 'transparent', color: 'rgba(30, 41, 59, 0.5)', fontSize: '0.74rem', fontWeight: 700, cursor: 'pointer' }}
              >
                ✕ Close
              </button>
            </div>

            <div>
              <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 0.4rem 0' }}>
                Challenges
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {ind.challenges.map((c, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(30, 41, 59, 0.7)', lineHeight: 1.45 }}>
                    <CheckIcon />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 0.4rem 0' }}>
                SLA Services
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {ind.services.map((s, i) => (
                  <span key={i} style={{
                    fontSize: '0.7rem', padding: '0.15rem 0.5rem',
                    background: 'rgba(9, 97, 159, 0.05)', color: 'var(--brand-blue)',
                    borderRadius: '4px', border: '1px solid rgba(9, 97, 159, 0.12)',
                    fontWeight: 600
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(9, 97, 159, 0.8)', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 0.4rem 0' }}>
                Ecosystem
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {ind.technologies.map((t, i) => (
                  <span key={i} style={{
                    padding: '0.12rem 0.4rem',
                    borderRadius: '4px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: 'rgba(30, 41, 59, 0.65)',
                    fontSize: '0.7rem',
                    fontWeight: 500
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
            <Link
              to={`/support-desk?sector=${ind.id}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                padding: '0.45rem 1rem',
                background: 'rgba(9,97,159,1)',
                color: '#fff', borderRadius: '6px',
                fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(9,97,159,0.25)'
              }}
            >
              Discuss Sector
            </Link>
            <button 
              onClick={() => setIsFlipped(false)}
              style={{ border: 'none', background: 'transparent', color: 'var(--brand-blue)', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Back ➔
            </button>
          </div>
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

          {/* 3x3 Interactive Grid of 3D Flip Cards */}
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
                  <IndustryCard ind={ind} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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
      `}</style>
    </main>
  );
}

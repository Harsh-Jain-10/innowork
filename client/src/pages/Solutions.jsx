import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

/* ─────────────────────────────────────────────────────────────
   Animated Count-Up Component for Hero Stats
────────────────────────────────────────────────────────────── */
function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setCount(end);
      return;
    }
    let start = 0;
    const endNum = parseInt(end, 10);
    if (isNaN(endNum)) {
      setCount(end);
      return;
    }
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endNum), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endNum) {
        clearInterval(timer);
        setCount(endNum);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, reduced]);

  return <span>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────────────────────────
   Verified solutions data configurations with concise copy & unique real images
────────────────────────────────────────────────────────────── */
const SOLUTIONS_DATA = [
  {
    id: 'cloud-hybrid',
    name: 'Cloud & Hybrid IT Solutions',
    code: 'SOL-01',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    intro: 'Scalable hybrid IT setups bridging on-premises assets with secure multi-cloud environments.',
    description: 'We design and deploy multi-cloud infrastructure environments, helping enterprises coordinate their workload placements, optimize virtual resource pools, and establish secure network paths across private nodes and public clouds.',
    scope: [
      'Multi-cloud workload migration planning',
      'Virtual private network and VPC design setups',
      'Hybrid cloud resource allocation audits'
    ],
    tech: ['Amazon Web Services', 'Microsoft Azure', 'Hypervisor Platforms'],
    benefits: 'Optimizes hybrid workload distribution, eliminates single-point-of-failure paths, and supports on-demand infrastructure capacity scaling.'
  },
  {
    id: 'infra-mgmt',
    name: 'IT Infrastructure Management & Operations',
    code: 'SOL-02',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    intro: 'Comprehensive management of server clusters, hypervisors, and storage networks.',
    description: 'We provide active administration support for enterprise servers, blade chassis enclosures, hypervisor configurations, and SAN/NAS storage volumes to maintain stable business operations.',
    scope: [
      'Host hypervisor patch administration',
      'SAN storage volume allocation and path mapping',
      'Blade chassis management and hardware status checks'
    ],
    tech: ['Virtualization Hypervisors', 'Fibre Channel SAN Arrays', 'Blade Server Enclosures'],
    benefits: 'Consolidates physical server footprints, maximizes computing density per rack, and provides reliable database pathways.'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Secure Perimeter Hardening',
    code: 'SOL-03',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    intro: 'Next-generation firewall integration and secure internal network segmentation.',
    description: 'We deploy firewall access policies, configure web application filters, set up secure VLAN boundaries, and configure secure client VPN connections to protect core digital systems.',
    scope: [
      'Firewall access rules configuration and verification',
      'VLAN segmentation and internal security zoning',
      'Security scans and network client log aggregation'
    ],
    tech: ['Next-Gen Firewalls', 'Secure Routing Switches', 'Web Application Firewalls'],
    benefits: 'Builds secure perimeter defenses, segments internal database networks, and encrypts communication links between offices.'
  },
  {
    id: 'automation-devops',
    name: 'Automation, DevOps & Modernization',
    code: 'SOL-04',
    img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    intro: 'Declarative Infrastructure as Code (IaC) deployment pipelines and configuration scripts.',
    description: 'We automate server provisioning steps, deploy standardized server configurations, and integrate deployment pipelines to eliminate manual maintenance errors.',
    scope: [
      'Infrastructure as Code template and playbook engineering',
      'Automated OS patch and configuration updates',
      'Self-healing system monitoring triggers'
    ],
    tech: ['Infrastructure as Code Tools', 'Configuration Management Engines', 'Container Platforms'],
    benefits: 'Reduces manual task overhead, prevents configuration drift across server fleets, and speeds up application deployments.'
  },
  {
    id: 'erp-mgmt',
    name: 'ERP & Enterprise Management Solutions',
    code: 'SOL-05',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    intro: 'Core ERP system maintenance, ITSM ticketing setups, and unified dashboard monitoring.',
    description: 'We configure database monitoring probes, define alert thresholds, set up automated ITSM ticket routing, and optimize core enterprise management systems.',
    scope: [
      'ERP database monitoring and performance checks',
      'ITSM helpdesk system configuration and ticketing rules',
      'Infrastructure dashboard integration and telemetry checks'
    ],
    tech: ['Enterprise ERP Databases', 'ITSM Platforms', 'Observability Dashboards'],
    benefits: 'Provides unified visual control over systems, streamlines IT ticket resolution paths, and supports ERP database stability.'
  },
  {
    id: 'deployment-rollouts',
    name: 'Deployment & Rollout Services',
    code: 'SOL-06',
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    intro: 'Structured IT rollouts, device provisioning, staging setups, and data migrations.',
    description: 'We handle large-scale corporate device staging, multi-site server setups, structured cabling alignments, and post-installation configuration checks.',
    scope: [
      'Multi-site branch server deployment execution',
      'Staging zone testing and client device configurations',
      'Data migration support and connection verifications'
    ],
    tech: ['Enterprise Servers', 'Client OS Platforms', 'Local Loop Networks'],
    benefits: 'Guarantees identical system configurations across locations, minimizes downtime during rollouts, and ensures orderly migrations.'
  },
  {
    id: 'support-desk',
    name: '24/7 Support Desk Services',
    code: 'SOL-07',
    img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80',
    intro: 'Guaranteed SLA-bound L1, L2, and L3 support desk engineering operations.',
    description: 'We deliver comprehensive remote support desk services, executing incident triage, troubleshooting network alerts, and coordinating field dispatches for global environments.',
    scope: [
      'Multi-tiered remote helpdesk troubleshooting operations',
      'Incident prioritization and ticket status management',
      'L3 engineering emergency dispatch coordination'
    ],
    tech: ['ITSM Ticketing Systems', 'Incident Management Databases', 'Monitoring Alert Panels'],
    benefits: 'Streamlines incident triage pathways, provides clear ticket visibility, and ensures L3 engineering support during system failures.'
  },
  {
    id: 'smart-city',
    name: 'Smart City & ICCC Solutions',
    code: 'SOL-08',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    intro: 'Integrated Command & Control Center (ICCC) engineering and municipal IoT networks.',
    description: 'We design and configure municipal operations architectures, integrating public surveillance grids, fiber backbones, and central data monitoring consoles.',
    scope: [
      'ICCC municipal command facility systems design',
      'Edge IoT gateway secure configuration setups',
      'Centralized municipal telemetry dashboard tuning'
    ],
    tech: ['IoT Gateway Protocols', 'Central Operations Video Walls', 'Redundant Storage Fabrics'],
    benefits: 'Improves response coordination for municipal services, reduces utility operational overhead, and supports secure edge sensor routing.'
  },
  {
    id: 'sap-basis',
    name: 'SAP Basis & Consulting',
    code: 'SOL-09',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    intro: 'SAP Basis administration, NetWeaver administration, and database health consulting.',
    description: 'We manage SAP landscapes, applying kernel updates, transport configurations, background job rules, database updates, and SAP Basis health checks.',
    scope: [
      'SAP Basis system configuration and health assessments',
      'Database performance optimization and patch testing',
      'NetWeaver application management and updates'
    ],
    tech: ['SAP NetWeaver', 'SAP Databases', 'System Administration Consoles'],
    benefits: 'Maintains stable database performance, provides controlled transport rollouts, and flags system alerts proactively.'
  },
  {
    id: 'staff-aug',
    name: 'Staff Augmentation',
    code: 'SOL-10',
    img: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80',
    intro: 'Deployment of certified systems operators and L1, L2, and L3 engineers.',
    description: 'We augment internal IT teams, providing certified professionals experienced in server, cloud, network virtualization, and database management.',
    scope: [
      'On-demand technical staffing for infrastructure projects',
      'L1, L2, and L3 engineering placement audits',
      'Remote backup administrator support'
    ],
    tech: ['Systems Administration Systems', 'Hypervisor Architectures', 'Cloud Engines'],
    benefits: 'Supports fast technical team scaling, reduces hiring delays, and provides access to L3 engineering skills.'
  },
  {
    id: 'noc-services',
    name: 'NOC Services',
    code: 'SOL-11',
    img: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80',
    intro: 'Active remote network monitoring, alarm handling, and syslog checks.',
    description: 'We configure syslog collection tools, SNMP monitoring rules, ping check loops, and network bandwidth monitoring alerts to track network status.',
    scope: [
      '24/7/365 active remote network monitoring',
      'Network alarm triage and severity checks',
      'Bandwidth usage tracking and incident reports'
    ],
    tech: ['SNMP Observability Tools', 'Interface Monitor Systems', 'Syslog Aggregators'],
    benefits: 'Proactively identifies network failures, triggers immediate incident dispatch alerts, and aggregates multi-site hardware status logs.'
  },
  {
    id: 'dc-operations',
    name: 'Datacenter Operations & Facility Management',
    code: 'SOL-12',
    img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    intro: 'Facility management including precision cooling, HVAC, UPS, and backup grids.',
    description: 'We support physical datacenter environments, managing hot/cold Containments, backup diesel generators, fire suppression, and battery UPS systems.',
    scope: [
      'Precision cooling HVAC system path alignment',
      'UPS battery bank and generator check monitoring',
      'Environmental sensor layout and tracking setups'
    ],
    tech: ['Precision Cooling Units', 'UPS Battery Cabinets', 'Environmental Control Sensors'],
    benefits: 'Ensures stable server temperatures, maintains continuous power during grid outages, and supports compliance with facility guidelines.'
  },
  {
    id: 'backup-recovery',
    name: 'Data Backup & Recovery (Backup Ecosystem)',
    code: 'SOL-13',
    img: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80',
    intro: 'Scheduled data backup jobs, immutable snapshot vaults, and bare-metal recovery plans.',
    description: 'We configure scheduled backups, secure snapshot vaults, data encryption policies, and recovery automation pipelines across our supported backup ecosystem.',
    scope: [
      'Backup scheduling and snapshot vault configurations',
      'Ransomware protection policies and data encryption setups',
      'Restore validation trials and bare-metal recovery planning'
    ],
    tech: ['Immutable Storage Vaults', 'Backup Repositories', 'Restore Automation Engines'],
    benefits: 'Supported Backup Ecosystem: Veritas, Veeam, Commvault, Druva, Vinchin, Acronis, Dell NetWorker. Protects storage vaults against unauthorized deletion, and supports recovery times.'
  }
];

/* ─────────────────────────────────────────────────────────────
   Individual Solution Showcase Section Component
────────────────────────────────────────────────────────────── */
function SolutionSection({ sol, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={sol.id}
      className="solution-showcase-section"
      style={{
        padding: '6rem 0',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        background: isEven ? '#ffffff' : '#f8fafc',
        borderBottom: '1px solid rgba(9,97,159,0.06)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative blueprint grids */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(9,97,159,0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating connector line between sections */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(9,97,159,0.08), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="solutions-grid-layout" style={{
          display: 'grid',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* TEXT SIDE */}
          <div className="solutions-text-col" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            order: isEven ? 1 : 2
          }}>
            <ScrollReveal variant={isEven ? 'fade-left' : 'fade-right'}>
              {/* Code badge */}
              <span style={{
                display: 'inline-block',
                background: 'rgba(9,97,159,0.08)',
                border: '1px solid rgba(9,97,159,0.2)',
                borderRadius: '100px',
                padding: '0.25rem 0.85rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'rgba(9,97,159,0.95)',
                letterSpacing: '1.5px',
                fontFamily: 'monospace',
                width: 'fit-content',
                marginBottom: '0.25rem'
              }}>
                {sol.code}
              </span>

              {/* Title */}
              <h2 style={{
                fontSize: '2.1rem',
                fontWeight: 800,
                color: 'rgba(12,20,35,0.92)',
                letterSpacing: '-0.8px',
                lineHeight: 1.15,
                margin: '0 0 0.5rem 0'
              }}>
                {sol.name}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'rgba(9,97,159,0.85)', lineHeight: 1.5, margin: '0 0 1rem 0', fontWeight: 600 }}>
                {sol.intro}
              </p>

              {/* Concise descriptive text */}
              <p style={{ fontSize: '0.92rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.6, margin: '0 0 1.25rem 0' }}>
                {sol.description}
              </p>

              {/* Scope Checklist */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(30,40,60,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.5rem' }}>Core Capabilities:</span>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.86rem', color: 'rgba(30,40,60,0.75)', lineHeight: 1.5 }}>
                  {sol.scope.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Technology badges & Qualitative benefits */}
              <div style={{
                padding: '1.1rem 1.25rem',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid rgba(9,97,159,0.12)',
                boxShadow: '0 4px 12px rgba(9,97,159,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem', letterSpacing: '0.5px' }}>Technology Scope</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {sol.tech.map((t, idx) => (
                      <span key={idx} style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(9,97,159,0.05)', color: 'rgba(9,97,159,0.85)', fontSize: '0.72rem', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '0.6rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem', letterSpacing: '0.5px' }}>Expected Outcomes</span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(30,40,60,0.75)', lineHeight: 1.4, display: 'block' }}>{sol.benefits}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link
                  to={`/support-desk?solution=${sol.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.4rem',
                    background: 'rgba(9,97,159,1)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(9,97,159,0.18)'
                  }}
                >
                  Discuss this Solution
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M6 2.5L9.5 6L6 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  to="/support-desk"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.4rem',
                    background: '#ffffff',
                    color: 'rgba(9,97,159,0.85)',
                    border: '1px solid rgba(9,97,159,0.2)',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Technical Inquiry
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* VISUAL SIDE - Fitted real image column */}
          <div className="solutions-visual-col" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            order: isEven ? 2 : 1
          }}>
            <ScrollReveal variant={isEven ? 'fade-right' : 'fade-left'} style={{ width: '100%' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(9,97,159,0.06), 0 2px 8px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  width: '100%',
                  border: '1px solid rgba(9,97,159,0.1)'
                }}
                className="solutions-image-container"
              >
                {/* Foreground Image - Non-clickable / Non-downloadable */}
                <img
                  src={sol.img}
                  alt={`${sol.name} Enterprise Infrastructure`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                />
                
                {/* Visual Blueprint Grid Overlay */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none',
                  backgroundImage: `
                    linear-gradient(rgba(9,97,159,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(9,97,159,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Solutions Page REDESIGN
────────────────────────────────────────────────────────────── */
export default function Solutions() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: 'var(--text-light-primary)' }} id="solutions-page-view">
      
      {/* ─── HERO HEADER ─── */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fafc 55%, #eef6fd 100%)',
        padding: '8rem 0 5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(9,97,159,0.1)'
      }}>
        {/* Blueprint grid backdrop */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9,97,159,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,97,159,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
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
              marginBottom: '1.25rem'
            }}>
              Enterprise Technology Architecture
            </span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'rgba(12,20,35,0.92)',
              marginTop: '0.5rem',
              marginBottom: '1.25rem',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}>
              Architecting Global Infrastructure
            </h1>
            <p style={{
              color: 'rgba(30,40,60,0.65)',
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.08rem',
              lineHeight: '1.75'
            }}>
              Explore INNOWORQ's enterprise solutions configurations.
              We design Tier-III compliant server environments, network security boundaries,
              and fully automated cloud deployments for global workloads.
            </p>

            {/* Quick stats strip */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}>
              {[
                { value: 13, suffix: '', label: 'Solutions Engineered' },
                { value: 9, suffix: '', label: 'Industry Sectors' },
                { value: 20, suffix: '+', label: 'OEM Tech Coverage' },
                { value: 2, suffix: '', label: 'ISO Certifications' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(9,97,159,0.12)',
                    borderRadius: '12px',
                    padding: '1.25rem 2rem',
                    textAlign: 'center',
                    minWidth: '150px',
                    boxShadow: '0 6px 15px rgba(9,97,159,0.04)'
                  }}
                >
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(9,97,159,1)', lineHeight: 1 }}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'rgba(30,40,60,0.5)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginTop: '0.4rem',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SOLUTIONS ALTERNATING SHOWCASE ─── */}
      <div style={{ position: 'relative' }}>
        {SOLUTIONS_DATA.map((sol, index) => (
          <SolutionSection key={sol.id} sol={sol} index={index} />
        ))}
      </div>

      {/* ─── FINAL CTA BLUEPRINT SECTION ─── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(9,97,159,0.07) 0%, rgba(9,97,159,0.02) 100%)',
        borderTop: '1px solid rgba(9,97,159,0.1)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Architectural blueprint grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9,97,159,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,97,159,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'rgba(12,20,35,0.9)',
              letterSpacing: '-1px',
              marginBottom: '1rem'
            }}>
              Let's Build Your Next Enterprise Infrastructure.
            </h2>
            <p style={{
              color: 'rgba(30,40,60,0.6)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              fontSize: '1rem',
              lineHeight: 1.7
            }}>
              Our systems architects design SLA-driven workloads, consolidation roadmaps,
              and security perimeters aligned with global industry regulations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/support-desk"
                className="btn"
                style={{
                  padding: '0.85rem 2rem',
                  background: 'rgba(9,97,159,1)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(9,97,159,0.2)'
                }}
              >
                Schedule Technical Consultation
              </Link>
              <Link
                to="/support-desk"
                className="btn"
                style={{
                  padding: '0.85rem 2rem',
                  background: '#ffffff',
                  color: 'rgba(9,97,159,0.85)',
                  border: '1px solid rgba(9,97,159,0.25)',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                Contact Solutions Team
              </Link>
              <Link
                to="/partner-registration"
                className="btn"
                style={{
                  padding: '0.85rem 2rem',
                  background: 'transparent',
                  color: 'rgba(9,97,159,0.9)',
                  border: '1px solid rgba(9,97,159,0.4)',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                Become a Partner
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Responsive Styles Injection */}
      <style>{`
        .solutions-grid-layout {
          grid-template-columns: repeat(12, 1fr);
        }
        .solutions-text-col {
          grid-column: span 6;
        }
        .solutions-visual-col {
          grid-column: span 6;
        }
        .solutions-image-container {
          aspect-ratio: 1.5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .solutions-details-subgrid {
          grid-template-columns: 1fr 1fr;
        }
        .solutions-specs-grid {
          grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 1024px) {
          .solutions-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .solutions-text-col {
            grid-column: span 12 !important;
            order: 2 !important;
          }
          .solutions-visual-col {
            grid-column: span 12 !important;
            order: 1 !important;
          }
          .solutions-image-container {
            aspect-ratio: 1.77 !important;
          }
          .solutions-details-subgrid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .solutions-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>

    </div>
  );
}

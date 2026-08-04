import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { StaggerContainer } from '../components/ScrollReveal';

/* ─────────────────────────────────────────────────────────────
   Comprehensive Solutions configuration with rich metadata
 ────────────────────────────────────────────────────────────── */
const SOLUTIONS_DATA = [
  {
    id: 'cloud-hybrid',
    code: 'SOL-01',
    name: 'Cloud & Hybrid IT Solutions',
    category: 'cloud',
    shortTag: 'CLOUD & HYBRID IT',
    desc: 'Scalable hybrid IT setups bridging on-premises assets with secure multi-cloud environments.',
    intro: 'We design and deploy multi-cloud infrastructure environments, helping enterprises coordinate their workload placements, optimize virtual resource pools, and establish secure network paths across private nodes and public clouds.',
    scope: [
      'Multi-cloud workload migration planning & execution',
      'Virtual private network and VPC gateway design',
      'Hybrid cloud resource allocation & cost audits'
    ],
    tech: ['AWS', 'Microsoft Azure', 'Google Cloud', 'VMware Cloud'],
    benefits: 'Optimizes hybrid workload distribution, eliminates single-point-of-failure paths, and supports on-demand infrastructure capacity scaling.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'infra-mgmt',
    code: 'SOL-02',
    name: 'IT Infrastructure Management & Operations',
    category: 'cloud',
    shortTag: 'DATACENTER COMPUTE',
    desc: 'Comprehensive management of server clusters, hypervisors, and SAN storage networks.',
    intro: 'We provide active administration support for enterprise servers, blade chassis enclosures, hypervisor configurations, and SAN/NAS storage volumes to maintain stable business operations.',
    scope: [
      'Host hypervisor patch administration & status checks',
      'SAN storage volume allocation and path mapping',
      'Blade chassis management & hardware monitoring'
    ],
    tech: ['VMware vSphere', 'Dell PowerEdge', 'NetApp SAN', 'Cisco UCS'],
    benefits: 'Consolidates physical server footprints, maximizes computing density per rack, and provides reliable database pathways.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cybersecurity',
    code: 'SOL-03',
    name: 'Cybersecurity & Secure Perimeter Hardening',
    category: 'security',
    shortTag: 'ZERO-TRUST SECURITY',
    desc: 'Next-generation firewall integration, zero-trust policies, and secure internal network segmentation.',
    intro: 'We deploy firewall access policies, configure web application filters, set up secure VLAN boundaries, and configure secure client VPN connections to protect core digital systems.',
    scope: [
      'Firewall access rules configuration & audit rules',
      'VLAN micro-segmentation & internal security zoning',
      'Security posture scans & centralized log aggregation'
    ],
    tech: ['Palo Alto Networks', 'Fortinet FortiGate', 'Check Point', 'F5 WAF'],
    benefits: 'Builds secure perimeter defenses, segments internal database networks, and encrypts communication links between global offices.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'automation-devops',
    code: 'SOL-04',
    name: 'Automation, DevOps & Modernization',
    category: 'ops',
    shortTag: 'INFRASTRUCTURE AS CODE',
    desc: 'Declarative Infrastructure as Code (IaC) deployment pipelines and automated configuration scripts.',
    intro: 'We automate server provisioning steps, deploy standardized server configurations, and integrate deployment pipelines to eliminate manual maintenance errors.',
    scope: [
      'Infrastructure as Code template & playbook engineering',
      'Automated OS patch and configuration updates',
      'Self-healing system monitoring triggers'
    ],
    tech: ['Ansible', 'Terraform', 'Kubernetes', 'Docker', 'GitLab CI'],
    benefits: 'Reduces manual task overhead, prevents configuration drift across server fleets, and speeds up application deployments.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'erp-mgmt',
    code: 'SOL-05',
    name: 'ERP & Enterprise Management Solutions',
    category: 'ops',
    shortTag: 'ENTERPRISE SYSTEMS',
    desc: 'Core ERP system maintenance, ITSM ticketing setups, and unified dashboard monitoring.',
    intro: 'We configure database monitoring probes, define alert thresholds, set up automated ITSM ticket routing, and optimize core enterprise management systems.',
    scope: [
      'ERP database monitoring & performance checks',
      'ITSM helpdesk system configuration & SLA rules',
      'Infrastructure dashboard integration & telemetry'
    ],
    tech: ['SAP S/4HANA', 'ServiceNow', 'Oracle DB', 'Datadog'],
    benefits: 'Provides unified visual control over systems, streamlines IT ticket resolution paths, and supports ERP database stability.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'deployment-rollouts',
    code: 'SOL-06',
    name: 'Deployment & Rollout Services',
    category: 'ops',
    shortTag: 'GLOBAL IT ROLLOUTS',
    desc: 'Structured IT rollouts, device provisioning, staging setups, and multi-site data migrations.',
    intro: 'We handle large-scale corporate device staging, multi-site server setups, structured cabling alignments, and post-installation configuration checks.',
    scope: [
      'Multi-site branch server deployment execution',
      'Staging zone testing & device provisioning',
      'Data migration support & connection verifications'
    ],
    tech: ['Dell Hardware', 'Cisco Routers', 'Windows Enterprise', 'RHEL'],
    benefits: 'Guarantees identical system configurations across locations, minimizes downtime during rollouts, and ensures orderly migrations.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'support-desk',
    code: 'SOL-07',
    name: '24/7 Support Desk Services',
    category: 'security',
    shortTag: 'MANAGED HELPDESK',
    desc: 'Guaranteed SLA-bound L1, L2, and L3 support desk engineering operations.',
    intro: 'We deliver comprehensive remote support desk services, executing incident triage, troubleshooting network alerts, and coordinating field dispatches for global environments.',
    scope: [
      'Multi-tiered remote helpdesk troubleshooting operations',
      'Incident prioritization & ticket status management',
      'L3 engineering emergency dispatch coordination'
    ],
    tech: ['ServiceNow', 'Jira Service Management', 'Zendesk', 'PagerDuty'],
    benefits: 'Streamlines incident triage pathways, provides clear ticket visibility, and ensures L3 engineering support during system failures.',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'smart-city',
    code: 'SOL-08',
    name: 'Smart City & ICCC Solutions',
    category: 'security',
    shortTag: 'CIVIC INFRASTRUCTURE',
    desc: 'Integrated Command & Control Center (ICCC) engineering and municipal IoT networks.',
    intro: 'We design and configure municipal operations architectures, integrating public surveillance grids, fiber backbones, and central data monitoring consoles.',
    scope: [
      'ICCC municipal command facility systems design',
      'Edge IoT gateway secure configuration setups',
      'Centralized municipal telemetry dashboard tuning'
    ],
    tech: ['Cisco Industrial IoT', 'Milestone Systems', 'Dell EMC Storage'],
    benefits: 'Improves response coordination for municipal services, reduces utility operational overhead, and supports secure edge sensor routing.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sap-basis',
    code: 'SOL-09',
    name: 'SAP Basis & Consulting',
    category: 'ops',
    shortTag: 'SAP LANDSCAPE',
    desc: 'SAP Basis administration, NetWeaver administration, and database health consulting.',
    intro: 'We manage SAP landscapes, applying kernel updates, transport configurations, background job rules, database updates, and SAP Basis health checks.',
    scope: [
      'SAP Basis system configuration & health assessments',
      'Database performance optimization & patch testing',
      'NetWeaver application management & updates'
    ],
    tech: ['SAP HANA', 'SAP NetWeaver', 'SUSE Linux', 'Oracle DB'],
    benefits: 'Maintains stable database performance, provides controlled transport rollouts, and flags system alerts proactively.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'staff-aug',
    code: 'SOL-10',
    name: 'Staff Augmentation',
    category: 'ops',
    shortTag: 'TECHNICAL TALENT',
    desc: 'Deployment of certified systems operators and L1, L2, and L3 engineers.',
    intro: 'We augment internal IT teams, providing certified professionals experienced in server, cloud, network virtualization, and database management.',
    scope: [
      'On-demand technical staffing for infrastructure projects',
      'L1, L2, and L3 engineering placement audits',
      'Remote backup administrator support'
    ],
    tech: ['CCNP Certified', 'VCP Engineers', 'AWS Certified', 'Red Hat RHCE'],
    benefits: 'Supports fast technical team scaling, reduces hiring delays, and provides access to L3 engineering skills.',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'noc-services',
    code: 'SOL-11',
    name: 'NOC Services',
    category: 'security',
    shortTag: '24/7 NOC OPERATIONS',
    desc: 'Active remote network monitoring, alarm handling, and syslog checks.',
    intro: 'We configure syslog collection tools, SNMP monitoring rules, ping check loops, and network bandwidth monitoring alerts to track network status.',
    scope: [
      '24/7/365 active remote network monitoring',
      'Network alarm triage and severity checks',
      'Bandwidth usage tracking & incident dispatch'
    ],
    tech: ['SolarWinds', 'Cisco DNA', 'Juniper Space', 'PRTG Network Monitor'],
    benefits: 'Proactively identifies network failures, triggers immediate incident dispatch alerts, and aggregates multi-site hardware status logs.',
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dc-operations',
    code: 'SOL-12',
    name: 'Datacenter Operations & Facility Management',
    category: 'cloud',
    shortTag: 'FACILITY MANAGEMENT',
    desc: 'Facility management including precision cooling, HVAC, UPS, and backup grids.',
    intro: 'We support physical datacenter environments, managing hot/cold containments, backup diesel generators, fire suppression, and battery UPS systems.',
    scope: [
      'Precision cooling HVAC system path alignment',
      'UPS battery bank & generator check monitoring',
      'Environmental sensor layout & tracking setups'
    ],
    tech: ['Schneider Electric', 'Vertiv Liebert', 'Caterpillar Gensets'],
    benefits: 'Ensures stable server temperatures, maintains continuous power during grid outages, and supports compliance with facility guidelines.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'backup-recovery',
    code: 'SOL-13',
    name: 'Data Backup & Recovery (Backup Ecosystem)',
    category: 'cloud',
    shortTag: 'DATA RESILIENCE',
    desc: 'Scheduled data backup jobs, immutable snapshot vaults, and bare-metal recovery plans.',
    intro: 'We configure scheduled backups, secure snapshot vaults, data encryption policies, and recovery automation pipelines across our supported backup ecosystem.',
    scope: [
      'Backup scheduling & snapshot vault configurations',
      'Ransomware protection & data encryption setups',
      'Restore validation trials & bare-metal recovery'
    ],
    tech: ['Veeam', 'Veritas', 'Commvault', 'Druva', 'Acronis'],
    benefits: 'Protects storage vaults against unauthorized deletion, ensures ransomware resilience, and supports low recovery time objectives (RTO).',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=600&q=80'
  }
];

const FILTER_TAGS = [
  { id: 'all', label: 'All Solutions' },
  { id: 'cloud', label: 'Cloud & Datacenter' },
  { id: 'security', label: 'Security & Operations' },
  { id: 'ops', label: 'DevOps & Systems' }
];

/* ─────────────────────────────────────────────────────────────
   Shared Check Icon
 ────────────────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(9, 97, 159, 0.1)" />
      <path d="M5 8.2L7.2 10.4L11 6" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Compact Small Box Solution Card Component (Matching Industries)
 ────────────────────────────────────────────────────────────── */
function SolutionCard({ sol, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="solution-small-box"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Explore specs for ${sol.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: isHovered ? '1px solid rgba(9, 97, 159, 0.35)' : '1px solid rgba(9, 97, 159, 0.1)',
        boxShadow: isHovered
          ? '0 16px 36px rgba(9, 97, 159, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03)'
          : '0 4px 20px rgba(9, 97, 159, 0.03)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div>
        {/* Banner Image Container */}
        <div style={{
          width: '100%',
          height: '160px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '1.2rem',
          border: '1px solid rgba(9, 97, 159, 0.08)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(9, 97, 159, 0.04) 0%, rgba(9, 97, 159, 0.25) 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }} />
          <motion.img
            src={sol.image}
            alt={sol.name}
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {/* Solution Code Pill */}
          <span style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            color: '#ffffff',
            fontSize: '0.68rem',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '6px',
            backdropFilter: 'blur(4px)',
            zIndex: 2,
            fontFamily: 'monospace'
          }}>
            {sol.code}
          </span>
        </div>

        {/* Domain Tag */}
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
          {sol.shortTag}
        </span>

        {/* Title */}
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: 800,
          margin: '0 0 0.5rem 0',
          transition: 'color 0.3s ease',
          color: isHovered ? 'var(--brand-blue)' : '#0f172a',
          lineHeight: 1.25
        }}>
          {sol.name}
        </h3>

        {/* Short Summary Description */}
        <p style={{
          fontSize: '0.86rem',
          color: '#475569',
          lineHeight: 1.55,
          margin: '0 0 1rem 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {sol.desc}
        </p>

        {/* Scope Bullet Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
          {sol.scope.slice(0, 2).map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: '#334155', fontWeight: 500 }}>
              <CheckIcon />
              <span style={{ lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA Trigger */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #f1f5f9',
        paddingTop: '0.85rem',
        marginTop: '0.5rem'
      }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--brand-blue)' }}>
          Explore Architecture &amp; Specs
        </span>
        <motion.span
          animate={isHovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--brand-blue)' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Slide-Over Solution Detail Drawer Component
 ────────────────────────────────────────────────────────────── */
function SolutionDetailDrawer({ solution, onClose }) {
  useEffect(() => {
    if (solution) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [solution]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!solution) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'flex-end',
          touchAction: 'none'
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)'
          }}
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          style={{
            position: 'relative',
            width: 'min(580px, 92vw)',
            height: '100%',
            backgroundColor: '#ffffff',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.2)',
            zIndex: 10,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header Image */}
          <div style={{ position: 'relative', height: '220px', width: '100%' }}>
            <img src={solution.image} alt={solution.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, transparent 60%)' }} />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close details"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                color: '#0f172a'
              }}
            >
              ✕
            </button>

            <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px', color: '#ffffff' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '1.5px', color: '#38bdf8', fontFamily: 'monospace' }}>
                {solution.code} · {solution.shortTag}
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '4px 0 0 0', color: '#ffffff' }}>
                {solution.name}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Executive Summary */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>
                Architecture &amp; Strategic Overview
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                {solution.intro}
              </p>
            </div>

            {/* Scope of Work */}
            <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#0f172a', marginBottom: '0.75rem' }}>
                Key Operational Capabilities
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {solution.scope.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#334155' }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Benefits */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>
                Measurable Business Impact
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                {solution.benefits}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#0f172a', marginBottom: '0.6rem' }}>
                Enterprise Tech Stack &amp; Alliances
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {solution.tech.map((t, i) => (
                  <span key={i} style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600, color: '#334155' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '1rem' }}>
              <Link
                to="/about#welcome-to-innoworq"
                onClick={onClose}
                style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--brand-blue)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(9, 97, 159, 0.25)'
                }}
              >
                <span>Request Architecture Blueprint</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Solutions Page Component
 ────────────────────────────────────────────────────────────── */
export default function Solutions() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const matched = SOLUTIONS_DATA.find((s) => s.id === targetId);
      if (matched) {
        setSelectedSolution(matched);
      }
    }
  }, [location]);

  const filteredSolutions = SOLUTIONS_DATA.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh' }}>
      
      {/* ── HERO HEADER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 60%, #eef6fd 100%)',
        padding: '8rem 0 4rem 0',
        borderBottom: '1px solid rgba(9, 97, 159, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(9,97,159,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(9,97,159,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal variant="fade-down">
            <span style={{
              display: 'inline-block',
              background: 'rgba(9, 97, 159, 0.08)',
              border: '1px solid rgba(9, 97, 159, 0.2)',
              borderRadius: '100px',
              padding: '0.35rem 1.2rem',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--brand-blue)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              marginBottom: '1rem'
            }}>
              Architectural Solutions Portfolio
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              margin: '0 0 1.2rem 0',
              lineHeight: 1.15
            }}>
              Enterprise Technology Solutions
            </h1>
            <p style={{
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.08rem',
              lineHeight: 1.65
            }}>
              Architectural solution blueprints for hybrid IT, multi-cloud operations, 24x7 NOC monitoring, zero-trust cybersecurity, and enterprise resource management.
            </p>
          </ScrollReveal>

          {/* Filter Bar */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginTop: '2.5rem'
            }}>
              {FILTER_TAGS.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => setActiveFilter(tag.id)}
                  style={{
                    backgroundColor: activeFilter === tag.id ? 'var(--brand-blue)' : '#ffffff',
                    color: activeFilter === tag.id ? '#ffffff' : '#475569',
                    border: activeFilter === tag.id ? '1px solid var(--brand-blue)' : '1px solid #cbd5e1',
                    borderRadius: '30px',
                    padding: '8px 18px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: activeFilter === tag.id ? '0 4px 14px rgba(9, 97, 159, 0.25)' : 'none'
                  }}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SOLUTIONS SMALL BOXES CATALOG GRID ── */}
      <section style={{ padding: '4.5rem 0 6rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.75rem',
              alignItems: 'stretch'
            }}
          >
            {filteredSolutions.map((sol) => (
              <SolutionCard
                key={sol.id}
                sol={sol}
                onClick={() => setSelectedSolution(sol)}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detail Slide-Over Drawer */}
      <SolutionDetailDrawer
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />

    </div>
  );
}

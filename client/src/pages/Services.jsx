import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ScrollReveal, { StaggerContainer } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

/* ─────────────────────────────────────────────────────────────
   Service configuration with complete rich metadata
 ────────────────────────────────────────────────────────────── */
const SERVICES_DATA = [
  {
    id: 'it-professional-services',
    name: 'IT Professional Services',
    category: 'consulting',
    shortTag: 'STRATEGIC ADVISORY',
    desc: 'Technology roadmaps, IT consulting, infrastructure assessments, and strategic planning aligned with enterprise business objectives.',
    scope: [
      'Infrastructure optimization & capacity planning',
      'Multi-vendor system & risk assessments',
      'Digital transformation roadmap consulting'
    ],
    standards: ['ISO 9001:2015 Process Mapping', 'ITIL v4 Service Framework', 'Technology Lifecycle Audits'],
    technologies: ['Cisco', 'Dell EMC', 'VMware', 'Microsoft Enterprise'],
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hco-cloud-services',
    name: 'HCO & Cloud Services',
    category: 'cloud',
    shortTag: 'CLOUD & HYBRID IT',
    desc: 'Hybrid Cloud Operations (HCO) and multi-cloud strategy planning, seamless migrations, virtualization management, and architecture consulting across AWS, Azure, and GCP.',
    scope: [
      'AWS, Azure & hybrid cloud architecture setup',
      'Zero-downtime workload & database migrations',
      'Hypervisor & container cluster management'
    ],
    standards: ['Zero-Trust Security Policies', 'ISO/IEC 27001 Data Protection', 'Encrypted Cloud Paths'],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'VMware vSphere'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'it-datacenter-management',
    name: 'IT Datacenter Management',
    category: 'infra',
    shortTag: 'ENTERPRISE DATACENTER',
    desc: 'Continuous server maintenance, storage allocation, blade chassis configurations, and hypervisor administration for high availability.',
    scope: [
      'Server hardware & blade rack maintenance',
      'Fibre Channel SAN storage configurations',
      'Active-active disaster recovery setup'
    ],
    standards: ['ISO/IEC 27001 Compliance', '99.99% Datacenter Uptime', 'Redundant Path Provisioning'],
    technologies: ['Dell PowerEdge', 'HPE ProLiant', 'NetApp SAN', 'Cisco UCS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'third-party-maintenance',
    name: 'Third Party Maintenance',
    category: 'infra',
    shortTag: 'EOSL HARDWARE SUPPORT',
    desc: 'Cost-effective, multi-vendor support SLA coverage for active and End-of-Service-Life (EOSL) enterprise hardware assets.',
    scope: [
      'Multi-vendor server & storage maintenance',
      '4-Hour On-site response & parts replacement',
      'Legacy rack components & EOSL coverage'
    ],
    standards: ['OEM-Equivalent SLA Parameters', 'Certified Engineer Dispatch', 'Global Parts Repository'],
    technologies: ['IBM Power', 'Oracle Sun', 'Dell EMC', 'Hitachi Vantara'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'it-manage-services-digital-transformation',
    name: 'IT Manage Services & Digital Transformation',
    category: 'managed',
    shortTag: 'MANAGED OUTSOURCING',
    desc: 'End-to-end IT outsourcing, IT service desk operations, SLA-driven problem resolution, and progressive digital transformation strategies.',
    scope: [
      'IT service desk & L1-L3 ticket resolution',
      'User workstation & identity migration support',
      'Enterprise application lifecycle management'
    ],
    standards: ['ITIL Service Desk Flows', 'Response Time Guarantees', 'Continuous Improvement Audits'],
    technologies: ['ServiceNow', 'Jira Service Management', 'Microsoft 365', 'Zendesk'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'noc-services',
    name: 'NOC Services',
    category: 'managed',
    shortTag: '24/7 NETWORK OPERATIONS',
    desc: '24/7/365 active remote network monitoring, alarm handling, incident triage, and real-time performance optimizations.',
    scope: [
      '24/7 Active packet drop & latency tracking',
      'Router & switch configuration monitoring',
      'Immediate 15-min incident dispatch'
    ],
    standards: ['Guaranteed 24×7 NOC Monitoring', 'ISO 27001 Syslog Logging', 'Standard Severity Triage'],
    technologies: ['Cisco DNA Center', 'SolarWinds', 'Juniper Junos', 'Fortinet FortiManager'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'staff-augmentation',
    name: 'Staff Augmentation',
    category: 'managed',
    shortTag: 'ENGINEERING TALENT',
    desc: 'Deployment of highly qualified, certified L1, L2, and L3 engineers and systems operators to meet transient or long-term client capacity requirements.',
    scope: [
      'L1, L2 & L3 operations support dispatch',
      'Dedicated backup & resident engineers',
      'Short-term migration project staffing'
    ],
    standards: ['Certified Technical Engineers', 'Seamless Team Integration', 'Skill Verification Audits'],
    technologies: ['Cisco CCNA/CCNP', 'VMware VCP', 'AWS Certified', 'Red Hat RHCE'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'software-maintenance-development-services',
    name: 'Software Maintenance & Development Services',
    category: 'devops',
    shortTag: 'CUSTOM SOFTWARE',
    desc: 'Custom software development, regular feature upgrades, performance tuning, bug fixing, and software lifecycle maintenance.',
    scope: [
      'Enterprise web & mobile app development',
      'API integration & database tuning',
      'Security patching & code refactoring'
    ],
    standards: ['OWASP Top 10 Security', 'Agile Scrum Delivery', 'Continuous Code Quality Audits'],
    technologies: ['React / Node.js', 'Python / Django', 'Java / Spring', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'devops-automation',
    name: 'DevOps & Automation',
    category: 'devops',
    shortTag: 'INFRASTRUCTURE AS CODE',
    desc: 'Elimination of manual IT operations through Ansible automation, shell scripting, Infrastructure as Code (IaC), and container management.',
    scope: [
      'Ansible & Terraform automation playbooks',
      'Kubernetes & Docker container orchestration',
      'Automated CI/CD patch deployment loops'
    ],
    standards: ['Declarative IaC Standards', 'GitOps Audit Trail', 'Drift Monitoring Checks'],
    technologies: ['Ansible', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins'],
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sap-basis-consulting',
    name: 'SAP Basis & Consulting',
    category: 'consulting',
    shortTag: 'ENTERPRISE ERP',
    desc: 'SAP Basis administration, HANA database consulting, system updates, kernel patching, transport management, and performance tuning.',
    scope: [
      'SAP Basis patch & kernel upgrades',
      'HANA database administration & backup',
      'Transport route management & monitoring'
    ],
    standards: ['SAP Certified Operations', 'HANA Database Integrity', 'High Availability Clustering'],
    technologies: ['SAP S/4HANA', 'SAP NetWeaver', 'SAP HANA DB', 'SUSE Linux Enterprise'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'it-trainings',
    name: 'IT Trainings',
    category: 'consulting',
    shortTag: 'CAPABILITY BUILDING',
    desc: 'Capability building and enterprise technology training workshops led by certified domain experts.',
    scope: [
      'Cloud & virtualization hands-on labs',
      'Cybersecurity & networking workshops',
      'Custom corporate IT curriculum'
    ],
    standards: ['Certified Expert Instructors', 'Hands-on Lab Verification', 'Structured Skill Assessments'],
    technologies: ['Cloud Labs', 'Network Simulators', 'DevOps Tooling', 'Security Frameworks'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'
  }
];

const FILTER_TAGS = [
  { id: 'all', label: 'All Services' },
  { id: 'cloud', label: 'Cloud & Hybrid IT' },
  { id: 'infra', label: 'Datacenter & Hardware' },
  { id: 'managed', label: 'Managed Ops & NOC' },
  { id: 'devops', label: 'DevOps & Software' },
  { id: 'consulting', label: 'Advisory & Training' }
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
   Compact Small Box Service Card Component (Matching Industries)
 ────────────────────────────────────────────────────────────── */
function ServiceCard({ srv, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-small-box"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Explore specs for ${srv.name}`}
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
            src={srv.image}
            alt={srv.name}
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
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
          {srv.shortTag}
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
          {srv.name}
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
          {srv.desc}
        </p>

        {/* Scope Bullet Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
          {srv.scope.slice(0, 2).map((item, i) => (
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
          Explore Specs &amp; SLAs
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
   Slide-Over Detail Drawer Component
 ────────────────────────────────────────────────────────────── */
function ServiceDetailDrawer({ service, onClose }) {
  useEffect(() => {
    if (service) {
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
  }, [service]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

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
          {/* Drawer Header Image */}
          <div style={{ position: 'relative', height: '220px', width: '100%' }}>
            <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)' }} />
            
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
                {service.shortTag}
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '4px 0 0 0', color: '#ffffff' }}>
                {service.name}
              </h2>
            </div>
          </div>

          {/* Drawer Body Content */}
          <div style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Description */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>
                Executive Overview
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                {service.desc}
              </p>
            </div>

            {/* Scope of Work */}
            <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#0f172a', marginBottom: '0.75rem' }}>
                Key Operational Scope
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {service.scope.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#334155' }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards & Certifications */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--brand-blue)', marginBottom: '0.6rem' }}>
                Standards &amp; SLA Compliance
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.standards.map((st, i) => (
                  <span key={i} style={{ backgroundColor: 'rgba(9, 97, 159, 0.08)', border: '1px solid rgba(9, 97, 159, 0.2)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-blue)' }}>
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#0f172a', marginBottom: '0.6rem' }}>
                Supported Hardware &amp; Platforms
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.technologies.map((tech, i) => (
                  <span key={i} style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600, color: '#334155' }}>
                    {tech}
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
                <span>Request SLA Proposal</span>
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
   Main Services Page Component
 ────────────────────────────────────────────────────────────── */
export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const matched = SERVICES_DATA.find((s) => s.id === targetId);
      if (matched) {
        setSelectedService(matched);
      }
    }
  }, [location]);

  const filteredServices = SERVICES_DATA.filter((s) => {
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
              Service Portfolio Catalog
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              margin: '0 0 1.2rem 0',
              lineHeight: 1.15
            }}>
              Enterprise IT &amp; Managed Services
            </h1>
            <p style={{
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.08rem',
              lineHeight: 1.65
            }}>
              High-availability SLA-bound infrastructure maintenance, cloud operations, 24×7 NOC triage, and digital transformation capabilities across 11 core domains.
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

      {/* ── SERVICES SMALL BOXES CATALOG GRID ── */}
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
            {filteredServices.map((srv) => (
              <ServiceCard
                key={srv.id}
                srv={srv}
                onClick={() => setSelectedService(srv)}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detail Slide-Over Drawer */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

    </div>
  );
}

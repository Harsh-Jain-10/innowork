import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/* ─────────────────────────────────────────────────────────────
   Service configuration for Home Page Catalog
 ────────────────────────────────────────────────────────────── */
const HOME_SERVICES = [
  {
    id: 'hco-cloud-services',
    name: 'HCO & Cloud Services',
    shortTag: 'CLOUD & HYBRID IT',
    desc: 'Hybrid Cloud Operations (HCO) and multi-cloud strategy planning, seamless migrations, virtualization management, and architecture consulting across AWS, Azure, and GCP.',
    scope: ['AWS, Azure & hybrid cloud setups', 'Zero-downtime workload migrations'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'it-datacenter-management',
    name: 'IT Datacenter Management',
    shortTag: 'ENTERPRISE DATACENTER',
    desc: 'Continuous server maintenance, storage allocation, blade chassis configurations, and hypervisor administration for high availability.',
    scope: ['Server hardware rack maintenance', 'SAN storage configurations'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'third-party-maintenance',
    name: 'Third Party Maintenance',
    shortTag: 'EOSL HARDWARE SUPPORT',
    desc: 'Cost-effective, multi-vendor support SLA coverage for active and End-of-Service-Life (EOSL) enterprise hardware assets.',
    scope: ['Multi-vendor server maintenance', '4-Hour On-site response'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'noc-services',
    name: 'NOC Services',
    shortTag: '24/7 NETWORK OPERATIONS',
    desc: '24/7/365 active remote network monitoring, alarm handling, incident triage, and real-time performance optimizations.',
    scope: ['24/7 Packet drop tracking', '15-Min incident dispatch'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'devops-automation',
    name: 'DevOps & Automation',
    shortTag: 'INFRASTRUCTURE AS CODE',
    desc: 'Elimination of manual IT operations through Ansible automation, shell scripting, Infrastructure as Code (IaC), and container management.',
    scope: ['Ansible playbooks & Terraform', 'Kubernetes cluster setup'],
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sap-basis-consulting',
    name: 'SAP Basis & Consulting',
    shortTag: 'ENTERPRISE ERP',
    desc: 'SAP Basis administration, HANA database consulting, system updates, kernel patching, transport management, and performance tuning.',
    scope: ['SAP Basis patch & upgrades', 'HANA database administration'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80'
  }
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill="rgba(9, 97, 159, 0.1)" />
      <path d="M5 8.2L7.2 10.4L11 6" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SmallServiceBox({ srv }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/services#${srv.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: isHovered ? '1px solid rgba(9, 97, 159, 0.35)' : '1px solid rgba(9, 97, 159, 0.1)',
        boxShadow: isHovered
          ? '0 16px 36px rgba(9, 97, 159, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03)'
          : '0 4px 20px rgba(9, 97, 159, 0.03)',
        padding: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        overflow: 'hidden'
      }}
    >
      <div>
        {/* Header Image */}
        <div style={{
          width: '100%',
          height: '140px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '1rem',
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

        {/* Short Tag */}
        <span style={{
          fontSize: '0.65rem',
          fontWeight: 800,
          color: 'var(--brand-blue)',
          letterSpacing: '1px',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.3rem'
        }}>
          {srv.shortTag}
        </span>

        {/* Title */}
        <h4 style={{
          fontSize: '1.12rem',
          fontWeight: 800,
          color: isHovered ? 'var(--brand-blue)' : '#0f172a',
          margin: '0 0 0.4rem 0',
          lineHeight: 1.25,
          transition: 'color 0.25s ease'
        }}>
          {srv.name}
        </h4>

        {/* Summary */}
        <p style={{
          fontSize: '0.84rem',
          color: '#475569',
          lineHeight: 1.5,
          margin: '0 0 0.85rem 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {srv.desc}
        </p>

        {/* Scope Bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.85rem' }}>
          {srv.scope.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#334155' }}>
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #f1f5f9',
        paddingTop: '0.75rem',
        marginTop: '0.4rem'
      }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-blue)' }}>
          Explore Capability
        </span>
        <motion.span
          animate={isHovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </div>
    </Link>
  );
}

export default function HomeServicesSection() {
  return (
    <section 
      style={{ 
        padding: '5.5rem 0', 
        backgroundColor: '#f8fafc',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }} 
      id="home-services-catalog"
    >
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span 
              style={{ 
                color: 'var(--brand-blue)', 
                fontWeight: 800, 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                display: 'inline-block',
                marginBottom: '0.6rem'
              }}
            >
              ENTERPRISE IT PORTFOLIO
            </span>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)', 
                fontWeight: 900, 
                color: '#0f172a', 
                letterSpacing: '-0.03em',
                marginBottom: '1rem' 
              }}
            >
              Strategic IT Services
            </h2>
            <p 
              style={{ 
                color: '#475569', 
                maxWidth: '640px', 
                margin: '0 auto', 
                lineHeight: '1.65',
                fontSize: '1.02rem' 
              }}
            >
              High-availability enterprise services across 11 core technology domains, managed under rigorous SLA models and 24×7 NOC support.
            </p>
          </div>
        </ScrollReveal>

        {/* Small Boxes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
          className="compact-services-grid"
        >
          {HOME_SERVICES.map((srv) => (
            <SmallServiceBox key={srv.id} srv={srv} />
          ))}
        </div>

        {/* Bottom Action */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <div 
            style={{ 
              marginTop: '3.5rem', 
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ fontSize: '0.92rem', color: '#64748b', fontWeight: 500 }}>
              Looking for our complete enterprise service portfolio?
            </span>
            <Link to="/services" className="btn btn-outline" style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}>
              <span>View All 11 Service Lines</span>
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

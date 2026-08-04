import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/* ─────────────────────────────────────────────────────────────
   Solution configuration for Home Page Catalog
 ────────────────────────────────────────────────────────────── */
const HOME_SOLUTIONS = [
  {
    id: 'cloud-hybrid',
    code: 'SOL-01',
    name: 'Cloud & Hybrid IT Solutions',
    shortTag: 'CLOUD & HYBRID IT',
    desc: 'Scalable hybrid IT setups bridging on-premises assets with secure multi-cloud environments.',
    scope: ['Multi-cloud migration planning', 'Virtual private cloud setups'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cybersecurity',
    code: 'SOL-03',
    name: 'Cybersecurity & Perimeter Hardening',
    shortTag: 'ZERO-TRUST SECURITY',
    desc: 'Next-generation firewall integration, zero-trust policies, and secure internal network segmentation.',
    scope: ['Firewall access rules audit', 'VLAN micro-segmentation'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'automation-devops',
    code: 'SOL-04',
    name: 'Automation & DevOps Modernization',
    shortTag: 'INFRASTRUCTURE AS CODE',
    desc: 'Declarative Infrastructure as Code (IaC) deployment pipelines and automated configuration scripts.',
    scope: ['Ansible & Terraform playbooks', 'Kubernetes cluster setups'],
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'smart-city',
    code: 'SOL-08',
    name: 'Smart City & ICCC Solutions',
    shortTag: 'CIVIC INFRASTRUCTURE',
    desc: 'Integrated Command & Control Center (ICCC) engineering and municipal IoT networks.',
    scope: ['ICCC command facility design', 'Edge IoT gateway setups'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'noc-services',
    code: 'SOL-11',
    name: 'NOC Services & Monitoring',
    shortTag: '24/7 NOC OPERATIONS',
    desc: 'Active remote network monitoring, alarm handling, incident triage, and real-time performance optimization.',
    scope: ['24/7 Remote syslog checks', '15-Min alert dispatch'],
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'backup-recovery',
    code: 'SOL-13',
    name: 'Data Backup & Disaster Recovery',
    shortTag: 'DATA RESILIENCE',
    desc: 'Scheduled data backup jobs, immutable snapshot vaults, and bare-metal recovery plans.',
    scope: ['Backup vault scheduling', 'Ransomware protection encryption'],
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=600&q=80'
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

function SmallSolutionBox({ sol }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/solutions#${sol.id}`}
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
          {/* Code Badge */}
          <span style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            color: '#ffffff',
            fontSize: '0.65rem',
            fontWeight: 800,
            padding: '2px 7px',
            borderRadius: '5px',
            backdropFilter: 'blur(4px)',
            zIndex: 2,
            fontFamily: 'monospace'
          }}>
            {sol.code}
          </span>
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
          {sol.shortTag}
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
          {sol.name}
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
          {sol.desc}
        </p>

        {/* Scope Bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.85rem' }}>
          {sol.scope.map((item, i) => (
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
          Explore Solution
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

export default function HomeSolutionsSection() {
  return (
    <section 
      style={{ 
        padding: '5.5rem 0', 
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }} 
      id="home-solutions-catalog"
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
              ARCHITECTURAL SOLUTIONS
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
              Enterprise Solution Blueprints
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
              Tailored architectural solution frameworks designed for multi-cloud deployment, zero-trust security, 24x7 NOC operational continuity, and enterprise resilience.
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
          className="compact-solutions-grid"
        >
          {HOME_SOLUTIONS.map((sol) => (
            <SmallSolutionBox key={sol.id} sol={sol} />
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
              Need a custom architecture assessment or solution blueprint?
            </span>
            <Link to="/solutions" className="btn btn-outline" style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}>
              <span>View All 13 Solutions</span>
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

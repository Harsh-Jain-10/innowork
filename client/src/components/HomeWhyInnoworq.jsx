import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';
import configData from '../data/companyConfig.json';

const PROOF_CARDS = [
  {
    id: 'oem-sla',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
    title: 'Multi-Vendor OEM SLA Support',
    desc: 'Single-point accountability covering HPE, Dell, Cisco, NetApp, and active or EOSL hardware without multi-contract friction.'
  },
  {
    id: 'noc-247',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24×7×365 Proactive NOC Operations',
    desc: 'Continuous network monitoring, real-time alarm correlation, incident triage, and sub-15 minute SLA response guarantees.'
  },
  {
    id: 'cloud-hco',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: 'Hybrid Cloud & Virtualization',
    desc: 'Seamless multi-cloud orchestration across AWS, Azure, GCP, and VMware hypervisors tailored for high-availability workloads.'
  },
  {
    id: 'iso-standards',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'ISO 4-Tier Quality Certification',
    desc: 'Fully compliant and audit-ready under ISO 9001, 27001, 20000, and 45001 international standards for zero-trust security.'
  },
  {
    id: 'dual-hub',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Dual-Hub Delivery',
    desc: 'Pan-India operations synchronized with our new Dubai Regional Hub supporting enterprises across India and the Middle East.'
  },
  {
    id: 'expert-team',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: '350+ Senior IT Engineers',
    desc: 'Certified L2/L3 infrastructure architects, security specialists, and sysadmins delivering hands-on execution.'
  }
];

export default function HomeWhyInnoworq() {
  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-subtle)',
        padding: '5rem 0',
        position: 'relative'
      }}
      id="why-innoworq-section"
    >
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="badge badge-primary">WHY INNOWORQ</span>
            <h2>Enterprise-Grade IT Infrastructure &amp; Managed Service Leadership</h2>
            <p>
              We bridge the gap between complex hardware ecosystems and business operations with SLA-driven support, multi-cloud mastery, and 24×7 NOC monitoring.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Proof Cards Grid */}
        <StaggerContainer stagger={0.06} className="why-grid-layout">
          {PROOF_CARDS.map((card) => (
            <StaggerItem key={card.id}>
              <div className="why-card">
                <div className="why-card-icon">
                  {card.icon}
                </div>
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>

      <style>{`
        .why-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .why-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2rem;
          height: 100%;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-brand);
        }

        .why-card-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: var(--transition-fast);
        }

        .why-card:hover .why-card-icon {
          background-color: var(--primary);
          color: #ffffff;
        }

        .why-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .why-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .why-grid-layout {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .why-grid-layout {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .why-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

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
   Extended services metadata mapping to avoid repetitive boilerplate
────────────────────────────────────────────────────────────── */
const SERVICES_METADATA = {
  'it-professional-services': {
    tagline: 'Strategic technology planning and infrastructure roadmap consulting.',
    standards: ['ISO 9001:2015 process mapping', 'Technology lifecycle audits', 'SLA definition workshops'],
    scope: ['Infrastructure optimization planning', 'Multi-vendor system assessments', 'Transformation path consulting'],
    img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80'
  },
  'hco-cloud-services': {
    tagline: 'Multi-cloud architecture design, secure migrations, and server virtualization.',
    standards: ['Zero-Trust access policies', 'Encrypted cloud connection paths', 'Continuous workload validation'],
    scope: ['AWS, Azure & hybrid cloud setups', 'Workload migrations', 'Hypervisor infrastructure management'],
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  },
  'it-datacenter-management': {
    tagline: 'Active server cluster monitoring, SAN storage allocation, and hardware management.',
    standards: ['ISO/IEC 27001 data safety compliance', 'Redundant path provisioning', 'Strict hardware status tracking'],
    scope: ['Server hardware rack maintenance', 'Fibre Channel storage configurations', 'Blade chassis status checking'],
    img: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&w=800&q=80'
  },
  'third-party-maintenance': {
    tagline: 'SLA-bound multi-vendor support for active and End-of-Service-Life hardware.',
    standards: ['OEM-equivalent SLA parameters', 'Escalation routing procedures', 'Certified engineering dispatch'],
    scope: ['Multi-vendor server maintenance', 'Storage cabinet replacement support', 'Legacy rack components coverage'],
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  'it-manage-services-digital-transformation': {
    tagline: 'Outsourced IT operations, service desk ticketing, and transformation strategies.',
    standards: ['ITIL-compliant service flows', 'Response time guarantees', 'Continuous improvement audits'],
    scope: ['IT service desk operations management', 'User workstation migration support', 'Digital transformation roadmap consulting'],
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  'noc-services': {
    tagline: '24/7/365 active remote network monitoring, alarm handling, and syslog checks.',
    standards: ['Guaranteed uptime monitoring', 'Standard severity alert definitions', 'Secure syslog collection rules'],
    scope: ['Continuous packet drop tracking', 'Switches & routers monitoring', 'Immediate network incident dispatch'],
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  'staff-augmentation': {
    tagline: 'On-demand provisioning of certified systems operators and engineers.',
    standards: ['Certified engineering resources', 'Seamless team integration checks', 'Skill match validation trials'],
    scope: ['L1, L2, L3 operations support dispatch', 'Dedicated backup manager allocation', 'Temporary migration project staffing'],
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  'software-maintenance-development-services': {
    tagline: 'Custom software development, regular upgrades, and code optimizations.',
    standards: ['Secure coding guidelines', 'Version control tracking compliance', 'Regular software health validation'],
    scope: ['Enterprise application development', 'Regular API updates and patches', 'Database connection tuning'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  'devops-automation': {
    tagline: 'Automated server provisioning, configuration playbooks, and GitOps pipelines.',
    standards: ['Declarative playbook configurations', 'Deployment drift monitoring checks', 'Automated patch validation loops'],
    scope: ['Ansible infrastructure automation', 'Container orchestration configurations', 'Automated patch rollout setups'],
    img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80'
  },
  'sap-basis-consulting': {
    tagline: 'SAP NetWeaver administration, HANA database health checks, and consulting.',
    standards: ['SAP-certified operations compliance', 'Transport route validation procedures', 'HANA database safety tracking'],
    scope: ['SAP Basis patch deployments', 'HANA database administration support', 'SAP Basis log checks'],
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
  },
  'it-trainings': {
    tagline: 'Enterprise capability building and certified technology training workshops.',
    standards: ['Certified technical domain trainers', 'Hands-on lab verification checks', 'Structured training path planning'],
    scope: ['Cloud technology training workshops', 'Infrastructure management classes', 'Data security training seminars'],
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  }
};

/* ─────────────────────────────────────────────────────────────
   Individual Service Showcase Section Component
────────────────────────────────────────────────────────────── */
function ServiceSection({ srv, index }) {
  const isEven = index % 2 === 0;
  const meta = SERVICES_METADATA[srv.id] || {
    tagline: 'High-grade SLA technology support service.',
    standards: ['ISO 9001 compliance standards', 'ITIL framework service flow'],
    scope: ['Technical operations assistance', 'Systems maintenance coordination'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section
      id={srv.id}
      className="service-showcase-section"
      style={{
        padding: '6.5rem 0',
        background: isEven ? '#ffffff' : '#f8fafc',
        borderBottom: '1px solid rgba(9,97,159,0.06)',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '80px'
      }}
    >
      {/* Blueprint grid texture background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(9,97,159,0.5) 1px, transparent 1px)`,
        backgroundSize: '36px 36px'
      }} />

      {/* Linking layout connector */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: '90px',
        background: 'linear-gradient(to bottom, rgba(9,97,159,0.08), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="services-grid-layout" style={{
          display: 'grid',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* TEXT CONTENT COLUMN */}
          <div className="services-text-col" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            order: isEven ? 1 : 2
          }}>
            <ScrollReveal variant={isEven ? 'fade-left' : 'fade-right'}>
              {/* Service Line ID Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                <span style={{
                  background: 'rgba(9,97,159,0.06)',
                  border: '1px solid rgba(9,97,159,0.18)',
                  borderRadius: '100px',
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'rgba(9,97,159,0.9)',
                  letterSpacing: '1px',
                  fontFamily: 'monospace'
                }}>
                  SERVICE LINE {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: '2.1rem',
                fontWeight: 800,
                color: 'rgba(12,20,35,0.92)',
                letterSpacing: '-0.8px',
                lineHeight: 1.15,
                margin: '0 0 0.5rem 0'
              }}>
                {srv.name}
              </h2>

              {/* Tagline */}
              <p style={{ fontSize: '1.05rem', color: 'rgba(9,97,159,0.85)', lineHeight: 1.5, margin: '0 0 1rem 0', fontWeight: 600 }}>
                {meta.tagline}
              </p>

              {/* Core Description */}
              <p style={{ fontSize: '0.92rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                {srv.desc}
              </p>

              {/* Specific Standards & Scope Details */}
              <div className="service-details-subgrid" style={{
                display: 'grid',
                gap: '1.5rem',
                padding: '1.25rem',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid rgba(9,97,159,0.1)',
                boxShadow: '0 4px 12px rgba(9,97,159,0.02)',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>Service Standards</span>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.82rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.45 }}>
                    {meta.standards.map((st, i) => (
                      <li key={i} style={{ marginBottom: '0.2rem' }}>{st}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '0.8rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>Operational Scope</span>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.82rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.45 }}>
                    {meta.scope.map((sc, i) => (
                      <li key={i} style={{ marginBottom: '0.2rem' }}>{sc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link
                  to={`/support-desk?service=${srv.id}`}
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
                  Discuss this Service
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
                  Request Audit
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* VISUAL IMAGE COLUMN */}
          <div className="services-visual-col" style={{
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
                className="services-image-container"
              >
                {/* Foreground Image - Non-clickable / Non-downloadable */}
                <img
                  src={meta.img}
                  alt={`${srv.name} Service capability`}
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
   Main Services Page component
────────────────────────────────────────────────────────────── */
export default function Services() {
  const location = useLocation();
  const services = configData.services;

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div style={{ backgroundColor: '#ffffff', color: 'var(--text-light-primary)' }} id="services-page-view">

      {/* ── Hero Header ── */}
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
              Capabilities Index
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
              IT Infrastructure &amp; Managed Services
            </h1>
            <p style={{
              color: 'rgba(30,40,60,0.65)',
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.08rem',
              lineHeight: '1.75'
            }}>
              INNOWORQ operates standard SLA support frameworks across{' '}
              <strong>{services.length} key service lines</strong>, maintaining
              continuous availability of enterprise assets globally.
            </p>

            {/* Quick-count stats strip */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}>
              {[
                { value: services.length, suffix: '', label: 'Service Lines' },
                { value: 3, suffix: '', label: 'SLA Tiers' },
                { value: configData.stats.countries, suffix: '', label: 'Countries Served' }
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

      {/* ── SERVICES STACK ── */}
      <div style={{ position: 'relative' }}>
        {services.map((srv, index) => (
          <ServiceSection key={srv.id} srv={srv} index={index} />
        ))}
      </div>

      {/* ── FINAL CTA SECTION ── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(9,97,159,0.07) 0%, rgba(9,97,159,0.02) 100%)',
        borderTop: '1px solid rgba(9,97,159,0.1)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
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
              Need Custom Service Integration?
            </h2>
            <p style={{
              color: 'rgba(30,40,60,0.6)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              fontSize: '1rem',
              lineHeight: 1.7
            }}>
              Our operational managers plan dedicated resource deployments,
              SLA custom mappings, and active infrastructure audits.
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
                Discuss Operations Audit
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
                Contact Operations Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Responsive Styles Injection */}
      <style>{`
        .services-grid-layout {
          grid-template-columns: repeat(12, 1fr);
        }
        .services-text-col {
          grid-column: span 6;
        }
        .services-visual-col {
          grid-column: span 6;
        }
        .services-image-container {
          aspect-ratio: 1.5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-details-subgrid {
          grid-template-columns: 1fr;
        }

        @media (max-width: 1024px) {
          .services-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .services-text-col {
            grid-column: span 12 !important;
            order: 2 !important;
          }
          .services-visual-col {
            grid-column: span 12 !important;
            order: 1 !important;
          }
          .services-image-container {
            aspect-ratio: 1.77 !important;
          }
        }
      `}</style>

    </div>
  );
}

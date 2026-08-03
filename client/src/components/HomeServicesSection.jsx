import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import configData from '../data/companyConfig.json';

// Service-specific icon renderer
function ServiceIcon({ id }) {
  const iconProps = {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-blue)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  switch (id) {
    case 'it-professional-services':
      return (
        <svg {...iconProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      );
    case 'hco-cloud-services':
      return (
        <svg {...iconProps}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      );
    case 'it-datacenter-management':
      return (
        <svg {...iconProps}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      );
    case 'third-party-maintenance':
      return (
        <svg {...iconProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      );
    case 'it-manage-services-digital-transformation':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      );
    case 'noc-services':
      return (
        <svg {...iconProps}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      );
    case 'staff-augmentation':
      return (
        <svg {...iconProps}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case 'software-maintenance-development-services':
      return (
        <svg {...iconProps}>
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      );
    case 'devops-automation':
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <line x1="9" y1="1" x2="9" y2="4"/>
          <line x1="15" y1="1" x2="15" y2="4"/>
          <line x1="9" y1="20" x2="9" y2="23"/>
          <line x1="15" y1="20" x2="15" y2="23"/>
          <line x1="20" y1="9" x2="23" y2="9"/>
          <line x1="20" y1="14" x2="23" y2="14"/>
          <line x1="1" y1="9" x2="4" y2="9"/>
          <line x1="1" y1="14" x2="4" y2="14"/>
        </svg>
      );
    case 'sap-basis-consulting':
      return (
        <svg {...iconProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      );
  }
}

// Compact Expandable Service Card Component (Brights.io Inspired)
function CompactServiceCard({ srv, isExpanded, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        border: isExpanded 
          ? '1px solid var(--brand-blue)' 
          : isHovered 
            ? '1px solid rgba(9, 97, 159, 0.4)' 
            : '1px solid var(--border-light)',
        boxShadow: isExpanded 
          ? '0 12px 30px rgba(9, 97, 159, 0.12)' 
          : isHovered 
            ? '0 8px 24px rgba(15, 23, 42, 0.08)' 
            : '0 2px 6px rgba(15, 23, 42, 0.03)',
        padding: '1.4rem 1.6rem',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      whileHover={{ y: -3 }}
    >
      {/* Accent top line indicator */}
      <motion.div
        animate={{
          scaleX: isHovered || isExpanded ? 1 : 0,
          opacity: isHovered || isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.25 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--brand-blue) 0%, var(--accent-cyan) 100%)',
          transformOrigin: 'left center'
        }}
      />

      {/* Main Card Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          {/* Icon Badge */}
          <div
            style={{
              width: '42px',
              height: '42px',
              minWidth: '42px',
              borderRadius: '10px',
              backgroundColor: isExpanded || isHovered ? 'var(--brand-blue-light)' : 'rgba(9, 97, 159, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s ease'
            }}
          >
            <ServiceIcon id={srv.id} />
          </div>

          <div>
            <h4
              style={{
                fontSize: '1.08rem',
                fontWeight: 700,
                color: isExpanded || isHovered ? 'var(--brand-blue)' : 'var(--text-light-primary)',
                margin: 0,
                lineHeight: 1.3,
                transition: 'color 0.25s ease'
              }}
            >
              {srv.name}
            </h4>
          </div>
        </div>

        {/* Action Toggle Arrow */}
        <motion.div
          animate={{
            rotate: isExpanded ? 90 : 0,
            x: isHovered && !isExpanded ? 4 : 0
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: isExpanded ? 'var(--brand-blue)' : isHovered ? 'var(--brand-blue-light)' : 'var(--bg-surface-secondary)',
            color: isExpanded ? '#ffffff' : 'var(--brand-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.div>
      </div>

      {/* Short 1-2 line description always visible */}
      <p
        style={{
          fontSize: '0.88rem',
          color: 'var(--text-light-secondary)',
          lineHeight: '1.55',
          marginTop: '0.75rem',
          marginBottom: 0,
          display: '-webkit-box',
          WebkitLineClamp: isExpanded ? 'none' : 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {srv.desc}
      </p>

      {/* Expanded Lightweight Details Accordion */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-primary">SLA Backed</span>
                <span className="badge badge-secondary">24×7 Operations</span>
                <span className="badge badge-secondary">ISO Certified</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <Link
                  to={`/services#${srv.id}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--brand-blue)',
                    textDecoration: 'none'
                  }}
                >
                  <span>Explore Full Service</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomeServicesSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      style={{ 
        padding: '5.5rem 0', 
        backgroundColor: '#ffffff',
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
                color: 'var(--text-light-primary)', 
                letterSpacing: '-0.03em',
                marginBottom: '1rem' 
              }}
            >
              Strategic IT Services
            </h2>
            <p 
              style={{ 
                color: 'var(--text-light-secondary)', 
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

        {/* Compact Interactive Cards Grid (Brights.io style) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start'
          }}
          className="compact-services-grid"
        >
          {configData.services.map((srv) => (
            <CompactServiceCard
              key={srv.id}
              srv={srv}
              isExpanded={expandedId === srv.id}
              onToggle={() => toggleExpand(srv.id)}
            />
          ))}
        </div>

        {/* Bottom Catalog Action Bar */}
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
            <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Need a custom SLA model or multi-vendor hardware coverage plan?
            </span>
            <Link to="/services" className="btn btn-outline" style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}>
              <span>View All Services</span>
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .compact-services-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

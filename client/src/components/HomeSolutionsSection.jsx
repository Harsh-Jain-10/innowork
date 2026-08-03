import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import configData from '../data/companyConfig.json';

// Solution-specific icon renderer
function SolutionIcon({ name }) {
  const iconProps = {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent-cyan)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  const lowerName = name.toLowerCase();

  if (lowerName.includes('smart city')) {
    return (
      <svg {...iconProps}>
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4v18"/>
        <path d="M19 21V11l-6-4"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="9" y1="13" x2="9.01" y2="13"/>
        <line x1="9" y1="17" x2="9.01" y2="17"/>
      </svg>
    );
  } else if (lowerName.includes('noc')) {
    return (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="7 10 10 7 13 11 17 8"/>
      </svg>
    );
  } else if (lowerName.includes('cloud')) {
    return (
      <svg {...iconProps}>
        <path d="M175 190A9 9 0 0 0 9 12H7a8 8 0 0 0 0 16h10.5"/>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    );
  } else if (lowerName.includes('automation') || lowerName.includes('ai')) {
    return (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    );
  } else if (lowerName.includes('backup') || lowerName.includes('recovery') || lowerName.includes('continuity')) {
    return (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    );
  } else if (lowerName.includes('datacenter') || lowerName.includes('dc')) {
    return (
      <svg {...iconProps}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    );
  } else if (lowerName.includes('network') || lowerName.includes('digital')) {
    return (
      <svg {...iconProps}>
        <rect x="16" y="16" width="6" height="6" rx="1"/>
        <rect x="2" y="16" width="6" height="6" rx="1"/>
        <rect x="9" y="2" width="6" height="6" rx="1"/>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
        <path d="M12 12V8"/>
      </svg>
    );
  } else {
    return (
      <svg {...iconProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    );
  }
}

// Compact Expandable Solution Card Component
function CompactSolutionCard({ sol, isExpanded, onToggle }) {
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
          ? '1px solid var(--accent-cyan)' 
          : isHovered 
            ? '1px solid rgba(2, 132, 199, 0.4)' 
            : '1px solid var(--border-light)',
        boxShadow: isExpanded 
          ? '0 12px 30px rgba(2, 132, 199, 0.12)' 
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
          background: 'linear-gradient(90deg, var(--accent-cyan) 0%, var(--brand-blue) 100%)',
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
              backgroundColor: isExpanded || isHovered ? 'var(--accent-cyan-light)' : 'rgba(2, 132, 199, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s ease'
            }}
          >
            <SolutionIcon name={sol.name} />
          </div>

          <div>
            <h4
              style={{
                fontSize: '1.08rem',
                fontWeight: 700,
                color: isExpanded || isHovered ? 'var(--accent-cyan)' : 'var(--text-light-primary)',
                margin: 0,
                lineHeight: 1.3,
                transition: 'color 0.25s ease'
              }}
            >
              {sol.name}
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
            backgroundColor: isExpanded ? 'var(--accent-cyan)' : isHovered ? 'var(--accent-cyan-light)' : 'var(--bg-surface-secondary)',
            color: isExpanded ? '#ffffff' : 'var(--accent-cyan)',
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

      {/* Short 1-2 line description */}
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
        {sol.desc}
      </p>

      {/* Expanded Accordion Details */}
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
                <span className="badge badge-primary">Enterprise Ready</span>
                <span className="badge badge-secondary">Turnkey Deployment</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <Link
                  to="/solutions"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    textDecoration: 'none'
                  }}
                >
                  <span>Discover Full Solution</span>
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

export default function HomeSolutionsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section 
      style={{ 
        padding: '5.5rem 0', 
        backgroundColor: 'var(--bg-surface-secondary)',
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
                color: 'var(--accent-cyan)', 
                fontWeight: 800, 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                display: 'inline-block',
                marginBottom: '0.6rem'
              }}
            >
              TAILORED ARCHITECTURES
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
              Turnkey Enterprise Solutions
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
              Engineered IT frameworks for Smart Cities, Cloud Migrations, AI Observability, and High-Density Datacenters.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Interactive Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start'
          }}
          className="compact-solutions-grid"
        >
          {configData.solutions.map((sol, idx) => (
            <CompactSolutionCard
              key={sol.name}
              sol={sol}
              isExpanded={expandedIndex === idx}
              onToggle={() => toggleExpand(idx)}
            />
          ))}
        </div>

        {/* Bottom Action CTA Bar */}
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
              Need custom architecture design or Datacenter infrastructure migration?
            </span>
            <Link to="/solutions" className="btn btn-primary" style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}>
              <span>Explore All Solutions</span>
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .compact-solutions-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function GlobalPresence() {
  const locations = [
    {
      id: 'india-hq',
      badge: 'HEADQUARTERS',
      name: 'India (HQ)',
      cities: 'Noida & Bangalore, India',
      role: 'Operations & Engineering Delivery Hub',
      services: [
        '24/7/365 NOC & Infrastructure Monitoring Desks',
        'Hardware Staging & Lab Testing Facilities',
        'Pan-India Multi-Vendor Hardware & Systems Maintenance'
      ],
      isHq: true
    },
    {
      id: 'uae-dubai',
      badge: 'REGIONAL OFFICE',
      name: 'UAE — Dubai',
      cities: 'Dubai, United Arab Emirates',
      role: 'MEA Regional Service Coverage',
      services: [
        'SLA-Bound Enterprise IT Infrastructure Support',
        'Cloud Operations & Virtualization Management',
        'Multi-Vendor Support Operations Across MEA Region'
      ],
      isHq: false
    }
  ];

  const trustBadges = [
    'ISO 9001:2015 Certified',
    'ISO/IEC 27001:2022 Certified',
    '24/7/365 SLA Support',
    'Multi-Vendor Maintenance'
  ];

  return (
    <section 
      id="global-presence-section"
      className="global-presence-container"
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              backgroundColor: 'rgba(9, 97, 159, 0.08)', color: 'var(--brand-blue)',
              padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.78rem',
              fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--brand-blue)', display: 'inline-block' }} />
              Global Reach
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-light-primary)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }} className="section-title">
              Global Presence
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.65' }} className="section-desc">
              From India to the UAE — built to scale where our clients grow.
            </p>
          </div>
        </ScrollReveal>

        {/* Demoted Small Secondary Line-Art Vector Map Panel */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto'
          }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3.5 / 1', minHeight: '130px' }}>
              <svg 
                viewBox="360 90 480 180" 
                style={{ width: '100%', height: '100%', display: 'block' }}
                aria-label="Subdued regional location map showing India and Dubai"
              >
                {/* Clean, Flat Vector Coastlines for Middle East and South Asia */}
                <g fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Arabian Peninsula Outline */}
                  <path d="M480,125 Q510,120 540,140 T545,190 T510,210 T460,195 T450,150 Z" />
                  {/* India Subcontinent Outline */}
                  <path d="M600,125 Q650,135 665,185 T635,235 T595,185 Z" />
                </g>

                {/* Thin, Flat Connecting Line (Dubai -> India) */}
                <path 
                  d="M 535 155 Q 585 115 635 160" 
                  fill="none" 
                  stroke="var(--brand-blue)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 3"
                />

                {/* Dubai Marker Point (x=535, y=155) */}
                <g transform="translate(535, 155)">
                  <circle r="4.5" fill="var(--brand-blue)" />
                  <circle r="2" fill="#ffffff" />
                  <text x="-8" y="-9" fill="var(--text-light-primary)" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="sans-serif">UAE (Dubai)</text>
                </g>

                {/* India Marker Point (x=635, y=160) */}
                <g transform="translate(635, 160)">
                  <circle r="4.5" fill="var(--brand-blue)" />
                  <circle r="2" fill="#ffffff" />
                  <text x="8" y="14" fill="var(--text-light-primary)" fontSize="10" fontWeight="700" fontFamily="sans-serif">India (HQ)</text>
                </g>
              </svg>
            </div>
          </div>
        </ScrollReveal>

        {/* PROMOTED PRIMARY LOCATION CARDS (2-Column Grid) */}
        <div className="location-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.75rem',
          marginBottom: '2.5rem'
        }}>
          {locations.map((loc, idx) => (
            <ScrollReveal key={loc.id} variant="fade-up" delay={idx * 0.12}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '2.25rem 2rem',
                border: '1px solid #e2e8f0',
                borderTop: loc.isHq ? '4px solid var(--brand-blue)' : '4px solid #0284c7',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* Role Badge */}
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: loc.isHq ? 'var(--brand-blue)' : '#0284c7',
                    backgroundColor: loc.isHq ? 'rgba(9, 97, 159, 0.08)' : 'rgba(2, 132, 199, 0.08)',
                    letterSpacing: '0.8px',
                    marginBottom: '1rem'
                  }}>
                    {loc.badge}
                  </span>

                  {/* Location Title & Cities */}
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '0.35rem' }}>
                    {loc.name}
                  </h3>
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
                    {loc.cities}
                  </p>

                  {/* Core Role Descriptor */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    padding: '0.85rem 1rem',
                    borderRadius: '6px',
                    borderLeft: '3px solid var(--brand-blue)',
                    marginBottom: '1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-light-primary)'
                  }}>
                    {loc.role}
                  </div>

                  {/* Operational Capabilities List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {loc.services.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: '1.5' }}>
                        <span style={{ color: 'var(--brand-blue)', fontWeight: 800, fontSize: '0.9rem' }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CREDIBILITY TRUST BAR (Certifications & SLA Standards) */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }} className="credibility-trust-bar">
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-light-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Service Standards &amp; Compliance:
            </span>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {trustBadges.map((badge, idx) => (
                <span key={idx} style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-light-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span style={{ color: 'var(--brand-blue)' }}>🛡️</span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .global-presence-container {
            padding: 3rem 0 !important;
          }
          .location-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .credibility-trust-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
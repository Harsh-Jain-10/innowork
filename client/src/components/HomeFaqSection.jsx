import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const HOME_FAQS = [
  {
    q: 'What SLAs do you guarantee for hardware support & datacenter maintenance?',
    a: 'We provide guaranteed SLA response models ranging from 4-Hour On-Site Critical Response with spares pre-staged to Next Business Day (NBD) resolution, backed by 24×7×365 engineering dispatch across India and the UAE.'
  },
  {
    q: 'Do you support End-of-Service-Life (EOSL) and legacy enterprise hardware?',
    a: 'Yes. Our Third-Party Maintenance (TPM) services extend the operational lifecycle of legacy servers, storage arrays, and network switches well beyond OEM End-of-Support dates, delivering up to 60% cost savings compared to OEM support renewals.'
  },
  {
    q: 'How does INNOWORQ manage multi-cloud migrations and hybrid operations?',
    a: 'We architect and execute zero-downtime workload migrations across AWS, Azure, GCP, and private on-premises hypervisors. Our Hybrid Cloud Operations (HCO) framework includes continuous cost optimization, automated security policy enforcement, and 24/7 monitoring.'
  },
  {
    q: 'Can INNOWORQ provide remote NOC monitoring and incident response?',
    a: 'Our 24×7 Network Operations Center (NOC) continuously monitors network telemetry, packet drop rates, server health, and syslog alerts. Incidents are triaged within 15 minutes by certified Level 2 and Level 3 engineers.'
  },
  {
    q: 'What global locations and regional hubs does INNOWORQ operate in?',
    a: 'We support enterprise clients globally with primary command hubs in India and Dubai (UAE). Engagement models include fully managed IT outsourcing, co-managed hybrid operations, project-based cloud migrations, and on-demand deployment of certified L1, L2, and L3 engineers.'
  }
];

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      style={{ 
        padding: '6rem 0', 
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-light)'
      }} 
      id="home-faq-section"
    >
      <div className="container">
        
        {/* FAQ Split Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '0.85fr 1.15fr', 
            gap: '4rem', 
            alignItems: 'flex-start' 
          }}
          className="faq-split-layout"
        >
          {/* Left Column: Heading & Description (Sticky-Aligned) */}
          <ScrollReveal variant="fade-up">
            <div style={{ position: 'sticky', top: '120px' }}>
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
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 
                style={{ 
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
                  fontWeight: 900, 
                  color: 'var(--text-light-primary)', 
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem' 
                }}
              >
                Everything You Need to Know About Our IT Delivery
              </h2>
              <p 
                style={{ 
                  color: 'var(--text-light-secondary)', 
                  lineHeight: '1.65', 
                  fontSize: '1rem',
                  margin: 0
                }}
              >
                Explore answers regarding our SLA guarantees, hardware coverage, multi-cloud management, and 24×7 NOC incident dispatch capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.08}>
                  <div
                    onClick={() => toggleFaq(idx)}
                    style={{
                      backgroundColor: isOpen ? '#ffffff' : 'var(--bg-surface-secondary)',
                      borderRadius: '12px',
                      border: isOpen ? '1px solid var(--brand-blue)' : '1px solid var(--border-light)',
                      boxShadow: isOpen ? '0 8px 24px rgba(9, 97, 159, 0.08)' : 'none',
                      padding: '1.25rem 1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}
                  >
                    {/* Header Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-light-primary)', margin: 0 }}>
                        {faq.q}
                      </h3>
                      <span 
                        style={{ 
                          width: '28px', 
                          height: '28px', 
                          borderRadius: '50%', 
                          backgroundColor: isOpen ? 'rgba(9, 97, 159, 0.1)' : '#ffffff', 
                          color: isOpen ? 'var(--brand-blue)' : 'var(--text-light-secondary)',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          flexShrink: 0,
                          border: '1px solid var(--border-light)',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>

                    {/* Expandable Body */}
                    {isOpen && (
                      <p 
                        style={{ 
                          marginTop: '0.85rem', 
                          color: 'var(--text-light-secondary)', 
                          lineHeight: '1.6', 
                          fontSize: '0.92rem',
                          marginBottom: 0
                        }}
                      >
                        {faq.a}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

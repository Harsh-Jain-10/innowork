import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const HOME_FAQS = [
  {
    q: "What IT infrastructure and cloud services does INNOWORQ provide?",
    a: "INNOWORQ delivers comprehensive enterprise IT services including hybrid cloud operations (AWS, Azure, GCP), datacenter server and storage management, 24×7×365 remote NOC monitoring, multi-vendor third-party hardware maintenance (TPM), cybersecurity hardening, DevOps automation, and IT staff augmentation."
  },
  {
    q: "What SLA models and response times does INNOWORQ commit to?",
    a: "We operate under legally binding, tiered SLA frameworks (P1 Critical, P2 Major, P3 Standard) with guaranteed response and resolution commitments. Our 24×7×365 Network Operations Centers (NOC) continuously monitor system telemetry to resolve incidents proactively."
  },
  {
    q: "Can INNOWORQ support post-warranty or End-of-Service-Life (EOSL) hardware?",
    a: "Yes. Our Third-Party Maintenance (TPM) programs provide OEM-equivalent SLA coverage for post-warranty and EOSL server racks, SAN/NAS storage arrays, and network switches from leading vendors like HPE, Dell, Cisco, IBM, NetApp, and Nutanix—reducing IT maintenance costs by up to 40-50%."
  },
  {
    q: "What ISO certifications and security standards does INNOWORQ maintain?",
    a: "INNOWORQ is fully certified under four international standards: ISO 9001:2015 (Quality Management), ISO/IEC 27001:2022 (Information Security Management), ISO 20000-1:2018 (IT Service Management), and ISO 45001:2018 (Occupational Health & Safety)."
  },
  {
    q: "What geographical regions and engagement models do you support?",
    a: "We support enterprise clients globally with primary command hubs in India and Dubai (UAE). Engagement models include fully managed IT outsourcing, co-managed hybrid operations, project-based cloud migrations, and on-demand deployment of certified L1, L2, and L3 engineers."
  }
];

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      style={{ 
        padding: '5.5rem 0', 
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }} 
      id="faq-section"
    >
      <div className="container">
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '0.85fr 1.15fr', 
            gap: '4rem', 
            alignItems: 'flex-start' 
          }}
          className="faq-split-layout"
        >
          {/* Left Column: Heading & Contact CTA */}
          <ScrollReveal variant="fade-up">
            <div>
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
                  marginBottom: '2rem' 
                }}
              >
                Have questions about our SLA guarantees, hardware coverage, or cloud migration frameworks? Explore answers below or get in touch with our solutions engineering team.
              </p>

              <div 
                style={{ 
                  backgroundColor: 'var(--bg-surface-secondary)', 
                  borderRadius: '14px', 
                  padding: '1.5rem', 
                  border: '1px solid var(--border-light)' 
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-light-primary)' }}>
                  Still have questions?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', marginBottom: '1rem' }}>
                  Our technology consultants are available 24/7 to assist with your infrastructure requirements.
                </p>
                <a 
                  href="mailto:sales@innoworq.com" 
                  className="btn btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                >
                  <span>Contact Our Engineers</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Accordion List (Brights.io style) */}
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
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: isOpen ? 'var(--brand-blue)' : 'var(--text-light-primary)',
                          margin: 0,
                          lineHeight: 1.35,
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {faq.q}
                      </h3>

                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? 'var(--brand-blue-light)' : '#ffffff',
                          color: 'var(--brand-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Answer Accordion */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            style={{
                              marginTop: '0.85rem',
                              paddingTop: '0.85rem',
                              borderTop: '1px solid var(--border-light)',
                              fontSize: '0.92rem',
                              color: 'var(--text-light-secondary)',
                              lineHeight: '1.65',
                              marginBottom: 0
                            }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-split-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

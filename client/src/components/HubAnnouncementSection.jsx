import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function HubAnnouncementSection() {
  return (
    <section 
      id="hub-announcement-section"
      style={{
        padding: '5.5rem 0 2rem 0',
        backgroundColor: '#f8fafc',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.04) 0%, transparent 60%)',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '42% 58%',
          gap: '3rem',
          alignItems: 'center'
        }} className="hub-announcement-grid">

          {/* LEFT COLUMN: Clean Minimalist Announcement Text with Generous Whitespace */}
          <ScrollReveal variant="fade-up">
            <div style={{ paddingRight: '1rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                  boxShadow: '0 0 8px #2563eb',
                  display: 'inline-block'
                }} />
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#1d4ed8',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase'
                }}>
                  LATEST ANNOUNCEMENT
                </span>
              </div>

              <h2 style={{
                fontSize: '2.85rem',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#0f172a',
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem'
              }}>
                Expanding Our <br />
                <span style={{ color: '#2563eb' }}>Regional Footprint</span>
              </h2>

              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#475569',
                maxWidth: '420px',
                marginBottom: '2.25rem'
              }}>
                Extending SLA-bound IT infrastructure, cloud operations, and 24×7 enterprise support closer to our clients across the UAE and Middle East.
              </p>

              <Link 
                to="/about#global-presence-section" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.9rem 2.1rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.28)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none'
                }}
                className="announcement-cta-btn"
              >
                <span>Explore Our Global Presence</span>
                <span style={{ fontSize: '1.15rem' }}>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Floating Announcement Feature Card overlapping next section */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div 
              style={{
                position: 'relative',
                marginBottom: 0,
                zIndex: 10
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #0284c7 100%)',
                borderRadius: '24px',
                padding: '2.5rem',
                color: '#ffffff',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                position: 'relative',
                overflow: 'hidden'
              }} className="announcement-floating-card">

                {/* Subtle Modern Dubai Skyline Vector Silhouette Graphic */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  height: '180px',
                  pointerEvents: 'none',
                  opacity: 0.18
                }}>
                  <svg viewBox="0 0 500 160" style={{ width: '100%', height: '100%', display: 'block' }}>
                    {/* Burj Khalifa & Dubai skyline silhouette */}
                    <path d="M 0 160 L 50 160 L 50 120 L 70 120 L 70 160 L 120 160 L 120 90 L 135 90 L 135 160 L 180 160 L 180 130 L 195 130 L 195 160 L 230 160 L 230 40 L 245 40 L 245 10 L 255 10 L 255 40 L 270 40 L 270 160 L 310 160 L 310 100 L 330 100 L 330 160 L 380 160 L 380 120 L 400 120 L 400 160 L 500 160 Z" fill="#60a5fa" />
                    {/* Soft Glowing Network Lines */}
                    <path d="M 50 100 Q 250 20 450 80" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                    <circle cx="250" cy="50" r="4" fill="#38bdf8" />
                  </svg>
                </div>

                {/* Floating Cloud & Infrastructure Graphic Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  opacity: 0.25
                }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                    <path d="M12 12v6M9 15l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Card Content Stack */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Badge & Flag Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '50px'
                    }}>
                      <span style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#22c55e',
                        boxShadow: '0 0 6px #22c55e',
                        display: 'inline-block'
                      }} />
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: '#4ade80',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}>
                        NEW REGIONAL HUB
                      </span>
                    </div>

                    {/* UAE Flag Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <span style={{ fontSize: '1.2rem' }}>🇦🇪</span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>UAE</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{
                    fontSize: '2.25rem',
                    fontWeight: 900,
                    lineHeight: 1.2,
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.02em'
                  }}>
                    Dubai, UAE
                  </h3>

                  <p style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.6,
                    color: '#e2e8f0',
                    maxWidth: '460px',
                    marginBottom: '2rem',
                    fontWeight: 400
                  }}>
                    Strengthening enterprise IT infrastructure, cloud operations, and managed support services across the UAE and Middle East.
                  </p>

                  {/* Bottom Action inside Floating Card */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#38bdf8'
                      }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#93c5fd' }}>
                        24×7 NOC & SLA Operations
                      </span>
                    </div>

                    <Link 
                      to="/about#global-presence-section" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease'
                      }}
                      className="card-internal-link"
                    >
                      <span>Explore</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      <style>{`
        .announcement-cta-btn:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
        }
        .card-internal-link:hover {
          gap: 0.65rem !important;
          color: '#38bdf8' !important;
        }
        @media (max-width: 1024px) {
          .hub-announcement-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .announcement-floating-card {
            margin-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

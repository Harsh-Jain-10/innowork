import React from 'react';
import { Link } from 'react-router-dom';
import WorldMapVector from './WorldMapVector';

export default function GlobalPresence() {
  return (
    <section 
      id="global-presence-section"
      className="global-presence-section-wrapper"
      style={{
        padding: '76px 0',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Responsive Grid: Tightened horizontal gap (~1.5rem / ~24px) */}
        <div 
          className="global-presence-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '44% 56%',
            gap: '1.5rem',
            alignItems: 'center'
          }}
        >
          
          {/* LEFT COLUMN: Text Content & CTA */}
          <div 
            className="global-presence-left-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: '0.5rem'
            }}
          >
            <span style={{
              display: 'inline-block',
              color: '#2563eb',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '0.85rem'
            }}>
              OUR GLOBAL PRESENCE
            </span>

            <h2 style={{
              fontSize: '2.85rem',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              marginBottom: '1.15rem'
            }}>
              Expanding Beyond <br />
              <span style={{ color: '#2563eb' }}>Borders</span>
            </h2>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.6,
              color: '#475569',
              marginBottom: '1.5rem',
              maxWidth: '460px'
            }}>
              Delivering enterprise IT infrastructure, cloud operations, and managed services with 24×7 support across key international markets.
            </p>

            <div>
              <Link 
                to="/services" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>Explore Our Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: GlobalMapContainer with inline WorldMapVector and soft blue radial glow behind India */}
          <div 
            id="GlobalMapContainer"
            className="GlobalMapContainer"
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle at 67.5% 47%, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0.03) 42%, transparent 72%)',
              borderRadius: '24px',
              padding: '0.5rem 0'
            }}
          >
            <div 
              className="world-map"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {/* Native Vector SVG World Map with monochrome professional styling */}
              <WorldMapVector 
                style={{
                  width: '95%',
                  maxWidth: '95%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />

              {/* OVERLAY SVG FOR ELEGANT NON-OVERLAPPING BEZIER LINES (2.5px STROKE) */}
              <svg 
                viewBox="0 0 1000 500" 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  overflow: 'visible'
                }}
              >
                <defs>
                  <linearGradient id="arcGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* SMOOTH BEZIER 1: INDIA (675, 235) -> DUBAI (565, 215) */}
                <path 
                  d="M 675 235 Q 610 165 565 215" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="565" cy="215" r="4.5" fill="#2563eb" />

                {/* SMOOTH BEZIER 2: INDIA (675, 235) -> UK (480, 135) */}
                <path 
                  d="M 675 235 Q 520 75 480 135" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="480" cy="135" r="4.5" fill="#2563eb" />

                {/* SMOOTH BEZIER 3: INDIA (675, 235) -> JAPAN (850, 180) */}
                <path 
                  d="M 675 235 Q 790 100 850 180" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="850" cy="180" r="4.5" fill="#2563eb" />

                {/* SMOOTH BEZIER 4: INDIA (675, 235) -> NEW ZEALAND (940, 415) */}
                <path 
                  d="M 675 235 Q 910 290 940 415" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="940" cy="415" r="4.5" fill="#2563eb" />
              </svg>

              {/* OVERLAY: INDIA HQ MARKER (+40% SIZE: 20px DOT, 54px RING) */}
              <div 
                className="india-pin-overlay"
                style={{
                  position: 'absolute',
                  left: '67.5%',
                  top: '47%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20
                }}
              >
                {/* Single Pulse Ring */}
                <div className="india-pin-pulse-ring" />

                {/* Inner Glowing Blue Pin Dot */}
                <div 
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    border: '3.5px solid #ffffff',
                    boxShadow: '0 0 20px rgba(37, 99, 235, 0.95), 0 2px 10px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>

              {/* FLOATING GLASS CARD 1: DUBAI (NEW REGIONAL HUB + GREEN NEW PILL) */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '36%',
                  top: '36%',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(37, 99, 235, 0.08)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.75rem',
                  maxWidth: '155px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>🇦🇪</span>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, display: 'flex', alignItems: 'center' }}>
                    <span>Dubai</span>
                    <span style={{
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      fontSize: '0.55rem',
                      fontWeight: 800,
                      padding: '0.1rem 0.35rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginLeft: '0.35rem',
                      display: 'inline-block'
                    }}>
                      NEW
                    </span>
                  </div>
                  <div style={{ fontSize: '0.67rem', fontWeight: 600, color: '#2563eb', marginTop: '0.1rem' }}>
                    New Regional Hub
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 2: UNITED KINGDOM */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '24%',
                  top: '14%',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(37, 99, 235, 0.08)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.75rem',
                  maxWidth: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>🇬🇧</span>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>
                    United Kingdom
                  </div>
                  <div style={{ fontSize: '0.67rem', fontWeight: 600, color: '#2563eb', marginTop: '0.1rem' }}>
                    Enterprise Support
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 3: JAPAN */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '86%',
                  top: '18%',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(37, 99, 235, 0.08)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.75rem',
                  maxWidth: '145px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>🇯🇵</span>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>
                    Japan
                  </div>
                  <div style={{ fontSize: '0.67rem', fontWeight: 600, color: '#2563eb', marginTop: '0.1rem' }}>
                    Technology Hub
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 4: NEW ZEALAND */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '88%',
                  top: '78%',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(37, 99, 235, 0.08)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.75rem',
                  maxWidth: '145px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>🇳🇿</span>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>
                    New Zealand
                  </div>
                  <div style={{ fontSize: '0.67rem', fontWeight: 600, color: '#2563eb', marginTop: '0.1rem' }}>
                    Regional Delivery
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* India Pin Pulse: Single pulse ring */
        .india-pin-pulse-ring {
          position: absolute;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: rgba(37, 99, 235, 0.35);
          box-shadow: 0 0 22px rgba(37, 99, 235, 0.75);
          animation: indiaPinPulse 1.2s ease-out forwards;
        }

        @keyframes indiaPinPulse {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.85;
          }
          100% {
            transform: scale(2.1);
            opacity: 0.15;
          }
        }

        /* Connection Lines: Draws ONCE */
        .bezier-draw-path {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawHubPaths 1.5s ease-out forwards;
        }

        @keyframes drawHubPaths {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Hub Cards: Fade Upward ONCE after 1.5s */
        .global-hub-card {
          opacity: 0;
          animation: hubCardFadeUp 0.6s ease-out 1.5s forwards;
        }

        @keyframes hubCardFadeUp {
          from {
            opacity: 0;
            transform: translate(-50%, calc(-50% + 12px));
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @media (max-width: 1024px) {
          .global-presence-section-wrapper {
            padding: 56px 0 !important;
          }
          .global-presence-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .global-presence-left-col {
            padding-right: 0 !important;
            text-align: center !important;
            align-items: center !important;
          }
          .global-hub-card {
            padding: 0.4rem 0.6rem !important;
            max-width: 130px !important;
          }
        }
      `}</style>
    </section>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import worldMapSvg from '../assets/maps/world-map.svg.svg';

export default function GlobalPresence() {
  return (
    <section 
      id="global-presence-section"
      className="global-presence-section-wrapper"
      style={{
        padding: '6rem 0',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Responsive Grid: 42% Left / 58% Right on Desktop, Vertical Stack on Mobile */}
        <div 
          className="global-presence-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '42% 58%',
            gap: '3.5rem',
            alignItems: 'center',
            minHeight: '480px'
          }}
        >
          
          {/* LEFT COLUMN: Text Content & CTA */}
          <div 
            className="global-presence-left-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: '1rem'
            }}
          >
            <span style={{
              display: 'inline-block',
              color: '#2563eb',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '1.75px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
              OUR GLOBAL PRESENCE
            </span>

            <h2 style={{
              fontSize: '3rem',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem'
            }}>
              Expanding Beyond <br />
              <span style={{ color: '#2563eb' }}>Borders</span>
            </h2>

            <p style={{
              fontSize: '1.08rem',
              lineHeight: 1.7,
              color: '#475569',
              marginBottom: '2.5rem',
              maxWidth: '480px'
            }}>
              Delivering enterprise IT infrastructure, cloud operations, and managed services with 24×7 support across key international markets.
            </p>

            <div>
              <Link 
                to="/services" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.95rem 2.2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.28)',
                  textDecoration: 'none'
                }}
              >
                <span>Explore Our Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: GlobalMapContainer with external SVG map & finite animations */}
          <div 
            id="GlobalMapContainer"
            className="GlobalMapContainer"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '440px',
              backgroundColor: '#EDF3FB',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div 
              className="world-map"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1.25rem',
                position: 'relative'
              }}
            >
              {/* Map SVG Image scaled up to ~98% container width */}
              <img 
                src={worldMapSvg} 
                alt="World Map" 
                style={{
                  width: '98%',
                  maxWidth: '98%',
                  height: 'auto',
                  maxHeight: '95%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />

              {/* OVERLAY SVG FOR BEZIER CURVES: DRAWS ONCE */}
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
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* BEZIER CURVE 1: INDIA (675, 235) -> DUBAI (565, 215) */}
                <path 
                  d="M 675 235 Q 620 190 565 215" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="565" cy="215" r="4.5" fill="#2563eb" />

                {/* BEZIER CURVE 2: INDIA (675, 235) -> UK (480, 135) */}
                <path 
                  d="M 675 235 Q 560 140 480 135" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="480" cy="135" r="4.5" fill="#2563eb" />

                {/* BEZIER CURVE 3: INDIA (675, 235) -> JAPAN (850, 180) */}
                <path 
                  d="M 675 235 Q 770 170 850 180" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="850" cy="180" r="4.5" fill="#2563eb" />

                {/* BEZIER CURVE 4: INDIA (675, 235) -> NEW ZEALAND (940, 415) */}
                <path 
                  d="M 675 235 Q 840 370 940 415" 
                  fill="none" 
                  stroke="url(#arcGradientBlue)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />
                <circle cx="940" cy="415" r="4.5" fill="#2563eb" />
              </svg>

              {/* OVERLAY: INDIA LOCATION PIN WITH ONE-TIME PULSE ANIMATION */}
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
                  justifyContent: 'center'
                }}
              >
                {/* Single-Pulse Glow Ring (No Infinite Loop) */}
                <div className="india-pin-pulse-ring" />

                {/* Inner Glowing Blue Pin Dot */}
                <div 
                  style={{
                    width: '13px',
                    height: '13px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    border: '2.5px solid #ffffff',
                    boxShadow: '0 0 12px rgba(37, 99, 235, 0.95), 0 2px 6px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>

              {/* FLOATING GLASS CARD 1: DUBAI, UAE (FADES UPWARD ONCE) */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '44%',
                  top: '28%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.1), 0 2px 8px rgba(37, 99, 235, 0.08)',
                  borderRadius: '12px',
                  padding: '0.65rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.35rem', lineHeight: 1 }}>🇦🇪</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                    Dubai, UAE
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#2563eb', marginTop: '0.15rem' }}>
                    New Regional Hub
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 2: UNITED KINGDOM (FADES UPWARD ONCE) */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '31%',
                  top: '10%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.1), 0 2px 8px rgba(37, 99, 235, 0.08)',
                  borderRadius: '12px',
                  padding: '0.65rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.35rem', lineHeight: 1 }}>🇬🇧</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                    United Kingdom
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#2563eb', marginTop: '0.15rem' }}>
                    Enterprise Support
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 3: JAPAN (FADES UPWARD ONCE) */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '84%',
                  top: '15%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.1), 0 2px 8px rgba(37, 99, 235, 0.08)',
                  borderRadius: '12px',
                  padding: '0.65rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.35rem', lineHeight: 1 }}>🇯🇵</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                    Japan
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#2563eb', marginTop: '0.15rem' }}>
                    Asia-Pacific Hub
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 4: NEW ZEALAND (FADES UPWARD ONCE) */}
              <div 
                className="global-hub-card"
                style={{
                  position: 'absolute',
                  left: '88%',
                  top: '76%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.1), 0 2px 8px rgba(37, 99, 235, 0.08)',
                  borderRadius: '12px',
                  padding: '0.65rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '1.35rem', lineHeight: 1 }}>🇳🇿</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                    New Zealand
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#2563eb', marginTop: '0.15rem' }}>
                    Oceania Operations
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* India Pin Pulse: Runs once on load, stays clean */
        .india-pin-pulse-ring {
          position: absolute;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: rgba(37, 99, 235, 0.35);
          box-shadow: 0 0 16px rgba(37, 99, 235, 0.65);
          animation: indiaPinPulse 1.2s ease-out forwards;
        }

        @keyframes indiaPinPulse {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
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
            transform: translate(-50%, calc(-50% + 14px));
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @media (max-width: 1024px) {
          .global-presence-section-wrapper {
            padding: 4rem 0 !important;
          }
          .global-presence-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            min-height: auto !important;
          }
          .global-presence-left-col {
            padding-right: 0 !important;
            text-align: center !important;
            align-items: center !important;
          }
          .GlobalMapContainer {
            min-height: 320px !important;
          }
          .global-hub-card {
            padding: 0.45rem 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}
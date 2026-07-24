import React from 'react';
import { Link } from 'react-router-dom';
import worldMapSvg from '../assets/maps/world-map.svg.svg';

export default function GlobalPresence() {
  return (
    <section 
      id="global-presence-section"
      className="global-presence-section-wrapper"
      style={{
        padding: '5rem 0',
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
            gap: '3rem',
            alignItems: 'stretch',
            minHeight: '450px'
          }}
        >
          
          {/* LEFT COLUMN: Text Content & CTA */}
          <div 
            className="global-presence-left-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <span style={{
              display: 'inline-block',
              color: '#2563eb',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              OUR GLOBAL PRESENCE
            </span>

            <h2 style={{
              fontSize: '2.85rem',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}>
              Expanding Beyond <br />
              <span style={{ color: '#2563eb' }}>Borders</span>
            </h2>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: '#475569',
              marginBottom: '2.25rem'
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
                  padding: '0.9rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  textDecoration: 'none'
                }}
              >
                <span>Explore Our Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: GlobalMapContainer with external SVG map, India pin, & Dubai Bezier arc */}
          <div 
            id="GlobalMapContainer"
            className="GlobalMapContainer"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '380px',
              backgroundColor: '#EDF3FB',
              borderRadius: '16px',
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
                padding: '1.5rem',
                position: 'relative'
              }}
            >
              {/* Map SVG Image occupying ~90% container width */}
              <img 
                src={worldMapSvg} 
                alt="World Map" 
                style={{
                  width: '90%',
                  maxWidth: '90%',
                  height: 'auto',
                  maxHeight: '90%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />

              {/* OVERLAY SVG FOR BEZIER CURVE FROM INDIA TO DUBAI */}
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
                  <linearGradient id="dubaiArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* ONE BEZIER CURVE: START INDIA (675, 235) -> END DUBAI (565, 215) */}
                <path 
                  d="M 675 235 Q 620 190 565 215" 
                  fill="none" 
                  stroke="url(#dubaiArcGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="bezier-draw-path"
                />

                {/* Dubai End Node Dot */}
                <circle cx="565" cy="215" r="4.5" fill="#2563eb" />
              </svg>

              {/* OVERLAY: ONE ANIMATED GLOWING & PULSING LOCATION PIN OVER INDIA */}
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
                {/* 3-Second Gently Pulsing Glow Ring */}
                <div 
                  style={{
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.35)',
                    boxShadow: '0 0 15px rgba(37, 99, 235, 0.6)',
                    animation: 'indiaPinPulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                  }}
                />

                {/* Inner Glowing Blue Pin Dot */}
                <div 
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    border: '2.5px solid #ffffff',
                    boxShadow: '0 0 10px rgba(37, 99, 235, 0.9), 0 2px 6px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .bezier-draw-path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawDubaiPath 1.5s ease-out forwards;
        }
        @keyframes drawDubaiPath {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes indiaPinPulse {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          60% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            transform: scale(0.6);
            opacity: 0;
          }
        }
        @media (max-width: 1024px) {
          .global-presence-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            min-height: auto !important;
          }
          .GlobalMapContainer {
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

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

          {/* RIGHT COLUMN: Empty GlobalMapContainer Placeholder */}
          <div 
            id="GlobalMapContainer"
            className="GlobalMapContainer"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '380px',
              backgroundColor: '#EDF3FB',
              borderRadius: '16px'
            }}
          />

        </div>

      </div>

      <style>{`
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
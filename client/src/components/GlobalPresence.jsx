import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountryCard from './CountryCard';
import { GLOBAL_PRESENCE_LOCATIONS, GLOBAL_CAPABILITIES } from '../data/globalPresenceData';

export default function GlobalPresence() {
  return (
    <section 
      id="global-presence-section"
      className="global-presence-section-wrapper"
      style={{
        padding: '6rem 0 5rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Abstract Enterprise Background Gradients & Subtle Dot Grid */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle, rgba(37, 99, 235, 0.6) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, rgba(14, 165, 233, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          filter: 'blur(40px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Two-Column Enterprise Grid Layout */}
        <div 
          className="global-presence-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'flex-start'
          }}
        >
          
          {/* LEFT COLUMN: Enterprise Narrative & Action CTA */}
          <motion.div 
            className="global-presence-left-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'sticky',
              top: '100px'
            }}
          >
            <span style={{
              display: 'inline-block',
              color: '#2563eb',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.85rem'
            }}>
              OUR GLOBAL PRESENCE
            </span>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}>
              Global IT Infrastructure &amp; Delivery Network
            </h2>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.65,
              color: '#475569',
              marginBottom: '2.25rem',
              maxWidth: '480px'
            }}>
              INNOWORQ operates standard SLA support frameworks and managed operations 
              across key international technology hubs, maintaining continuous 
              availability of enterprise assets globally.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/services" 
                className="global-presence-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '0.9rem 2.1rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Explore Our Services</span>
                <span style={{ transition: 'transform 0.2s ease' }}>→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Vertical Timeline of International Hubs */}
          <div 
            className="global-presence-right-col"
            style={{
              gridColumn: 'span 7',
              position: 'relative',
              paddingLeft: '1rem'
            }}
          >
            {/* Animated Vertical Connecting Line */}
            <div 
              style={{
                position: 'absolute',
                top: '1.25rem',
                bottom: '2.5rem',
                left: '1rem',
                width: '2px',
                background: 'linear-gradient(to bottom, #2563eb 0%, rgba(37, 99, 235, 0.2) 80%, transparent 100%)',
                zIndex: 1
              }}
            />

            {/* Timeline Cards */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              {GLOBAL_PRESENCE_LOCATIONS.map((location, index) => (
                <CountryCard 
                  key={location.id} 
                  location={location} 
                  index={index} 
                />
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM: Enterprise Capabilities Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}
        >
          {GLOBAL_CAPABILITIES.map((capability, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: 'rgba(241, 245, 249, 0.85)',
                border: '1px solid #e2e8f0',
                borderRadius: '50px',
                padding: '0.5rem 1.15rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#1e293b',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.02)'
              }}
            >
              <span style={{ color: '#2563eb', fontWeight: 900, fontSize: '0.95rem' }}>✓</span>
              <span>{capability}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        .global-presence-cta-btn:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.4) !important;
        }

        .global-presence-cta-btn:hover span:last-child {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .global-presence-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .global-presence-left-col {
            grid-column: span 12 !important;
            position: relative !important;
            top: 0 !important;
            text-align: center;
            align-items: center;
          }
          .global-presence-right-col {
            grid-column: span 12 !important;
            padding-left: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountryCard from './CountryCard';
import { GLOBAL_PRESENCE_LOCATIONS } from '../data/globalPresenceData';
import globalPresenceHero from '../assets/illustrations/global-presence-hero.webp';

export default function GlobalPresence() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="global-presence-section"
      className="global-presence-section-wrapper"
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Enterprise Blueprint Background Grid */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle, rgba(37, 99, 235, 0.6) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container">
        
        {/* Two-Column Enterprise Grid Layout */}
        <div 
          className="global-presence-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '42% 58%',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          
          {/* LEFT COLUMN: Enterprise Copy & Action CTA */}
          <motion.div 
            className="global-presence-left-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: isMobile ? 0 : '1rem'
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
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}>
              Global IT Infrastructure &amp; Delivery Footprint
            </h2>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.65,
              color: '#475569',
              marginBottom: '2rem',
              maxWidth: '480px'
            }}>
              Delivering SLA-backed IT infrastructure management, multi-cloud operations, 
              and 24×7 NOC/SOC support across critical technology hubs worldwide.
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
                  padding: '0.9rem 2rem',
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

          {/* RIGHT COLUMN: World Map Illustration & React Overlay Components */}
          <motion.div 
            id="GlobalMapContainer"
            className="GlobalMapContainer"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0b1329',
              borderRadius: '24px',
              padding: '1.5rem',
              boxShadow: '0 20px 45px rgba(11, 19, 41, 0.25), 0 0 30px rgba(37, 99, 235, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden'
            }}
          >
            {/* Illustration Frame Container */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1.33',
                maxHeight: '520px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Pure Local WebP Illustration (No embedded text, badges, or labels) */}
              <img
                src={globalPresenceHero}
                alt="INNOWORQ Global Presence Enterprise Map"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              />

              {/* DESKTOP: Independent React Country Cards Overlaid Above Map */}
              {!isMobile && GLOBAL_PRESENCE_LOCATIONS.map((location, index) => (
                <CountryCard 
                  key={location.id} 
                  location={location} 
                  index={index} 
                  isMobile={false} 
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* MOBILE: Country Cards Vertical Grid Below Illustration */}
        {isMobile && (
          <div 
            style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem'
            }}
          >
            {GLOBAL_PRESENCE_LOCATIONS.map((location, index) => (
              <CountryCard 
                key={location.id} 
                location={location} 
                index={index} 
                isMobile={true} 
              />
            ))}
          </div>
        )}

      </div>

      <style>{`
        .global-presence-cta-btn:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
          boxShadow: 0 8px 22px rgba(37, 99, 235, 0.4) !important;
        }
        .global-presence-cta-btn:hover span:last-child {
          transform: translateX(4px);
        }
        @media (max-width: 1024px) {
          .global-presence-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .global-presence-left-col {
            padding-right: 0 !important;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
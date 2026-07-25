import React from 'react';
import { motion } from 'framer-motion';

export default function CountryCard({ location, index = 0 }) {
  const { country, role, description, flag, isHQ } = location;

  return (
    <motion.div
      initial={{ opacity: 0, x: 25, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      style={{
        position: 'relative',
        paddingLeft: '2.5rem',
        marginBottom: '1.75rem'
      }}
      className="timeline-item country-timeline-item"
    >
      {/* Node Dot on Vertical Line */}
      <div 
        style={{
          position: 'absolute',
          left: 0,
          top: '1.25rem',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isHQ ? (
          <>
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0.1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 99, 235, 0.35)',
                boxShadow: '0 0 16px rgba(37, 99, 235, 0.6)'
              }}
            />
            <div style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#2563eb',
              border: '3px solid #ffffff',
              boxShadow: '0 0 10px rgba(37, 99, 235, 0.8)'
            }} />
          </>
        ) : (
          <>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
              style={{
                position: 'absolute',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'rgba(14, 165, 233, 0.3)',
                boxShadow: '0 0 10px rgba(14, 165, 233, 0.4)'
              }}
            />
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#0ea5e9',
              border: '2px solid #ffffff',
              boxShadow: '0 0 8px rgba(14, 165, 233, 0.6)'
            }} />
          </>
        )}
      </div>

      {/* Glassmorphic Card Container */}
      <motion.div
        whileHover={{ 
          y: -4, 
          boxShadow: isHQ 
            ? '0 14px 30px rgba(37, 99, 235, 0.16), 0 2px 8px rgba(0, 0, 0, 0.04)' 
            : '0 12px 28px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(37, 99, 235, 0.08)',
          borderColor: isHQ ? '#1d4ed8' : '#2563eb'
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          backgroundColor: '#ffffff',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '14px',
          padding: '1.25rem 1.5rem',
          border: isHQ ? '2px solid #2563eb' : '1px solid #e2e8f0',
          boxShadow: isHQ 
            ? '0 8px 24px rgba(37, 99, 235, 0.1), 0 2px 6px rgba(0, 0, 0, 0.02)'
            : '0 6px 20px rgba(15, 23, 42, 0.04)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.25s ease'
        }}
        className="country-card-container"
      >
        {/* Top Accent Stripe for HQ */}
        {isHQ && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)'
          }} />
        )}

        <div className="country-card-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
          <div className="country-card-title-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
            <span className="country-card-flag" style={{ fontSize: '1.65rem', lineHeight: 1, flexShrink: 0 }}>{flag}</span>
            <div className="country-card-info" style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.25, overflowWrap: 'break-word' }}>
                {country}
              </h3>
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: isHQ ? '#2563eb' : '#0284c7', 
                marginTop: '0.2rem', 
                display: 'inline-block' 
              }}>
                {role}
              </span>
            </div>
          </div>

          {isHQ && (
            <span className="country-card-hq-tag" style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              fontSize: '0.65rem',
              fontWeight: 900,
              padding: '0.2rem 0.55rem',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
              flexShrink: 0,
              alignSelf: 'flex-start',
              marginTop: '0.1rem'
            }}>
              HQ
            </span>
          )}
        </div>

        <p className="country-card-desc" style={{
          fontSize: '0.86rem',
          color: '#475569',
          margin: '0.75rem 0 0 0',
          lineHeight: 1.55,
          fontWeight: 500
        }}>
          {description}
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .country-timeline-item {
            padding-left: 1.75rem !important;
            margin-bottom: 1.25rem !important;
          }
          .country-card-container {
            padding: 1rem 1.15rem !important;
            border-radius: 12px !important;
          }
          .country-card-flag {
            font-size: 1.4rem !important;
          }
          .country-card-info h3 {
            font-size: 0.98rem !important;
          }
          .country-card-info span {
            font-size: 0.76rem !important;
          }
          .country-card-desc {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
            margin-top: 0.6rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

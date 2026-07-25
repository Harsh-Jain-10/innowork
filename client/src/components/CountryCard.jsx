import React from 'react';
import { motion } from 'framer-motion';

export default function CountryCard({ location, index = 0, isMobile = false }) {
  const { title, subtitle, flag, position, isHQ } = location;

  if (isMobile) {
    // Mobile list variant (rendered below the illustration)
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(37, 99, 235, 0.12)' }}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          border: isHQ ? '1.5px solid rgba(37, 99, 235, 0.4)' : '1px solid #e2e8f0',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          position: 'relative'
        }}
      >
        <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{flag}</span>
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {title}
            </h4>
            {isHQ && (
              <span style={{
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: '#2563eb',
                fontSize: '0.65rem',
                fontWeight: 800,
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                HQ
              </span>
            )}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#64748b', margin: '0.15rem 0 0 0', fontWeight: 500 }}>
            {subtitle}
          </p>
        </div>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: isHQ ? '#2563eb' : '#0ea5e9',
          boxShadow: `0 0 8px ${isHQ ? '#2563eb' : '#0ea5e9'}`
        }} />
      </motion.div>
    );
  }

  // Desktop overlay card variant (positioned absolutely around illustration)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.12, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -100%)',
        zIndex: 10
      }}
    >
      {/* Node pulse dot at position location */}
      <div style={{
        position: 'absolute',
        bottom: '-12px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}>
        {/* Pulsing Outer Glow Ring */}
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0.1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
          style={{
            position: 'absolute',
            width: isHQ ? '28px' : '22px',
            height: isHQ ? '28px' : '22px',
            borderRadius: '50%',
            backgroundColor: isHQ ? 'rgba(37, 99, 235, 0.4)' : 'rgba(14, 165, 233, 0.4)',
            boxShadow: `0 0 16px ${isHQ ? '#2563eb' : '#0ea5e9'}`
          }}
        />
        {/* Solid Center Node */}
        <div style={{
          width: isHQ ? '14px' : '10px',
          height: isHQ ? '14px' : '10px',
          borderRadius: '50%',
          backgroundColor: isHQ ? '#3b82f6' : '#38bdf8',
          border: '2px solid #ffffff',
          boxShadow: `0 0 12px ${isHQ ? '#2563eb' : '#38bdf8'}`,
          zIndex: 2
        }} />
      </div>

      {/* Floating Card Body with Gentle Floating Animation */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        whileHover={{ y: -6, scale: 1.04, boxShadow: '0 14px 28px rgba(15, 23, 42, 0.28), 0 0 15px rgba(37, 99, 235, 0.3)' }}
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: isHQ ? '1.5px solid rgba(59, 130, 246, 0.6)' : '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '10px',
          padding: '0.55rem 0.85rem',
          color: '#ffffff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          whiteSpace: 'nowrap',
          cursor: 'default',
          transition: 'border-color 0.3s ease'
        }}
      >
        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{flag}</span>
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.15, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>{title}</span>
            {isHQ && (
              <span style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontSize: '0.58rem',
                fontWeight: 900,
                padding: '0.1rem 0.35rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                HQ
              </span>
            )}
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, color: isHQ ? '#60a5fa' : '#94a3b8', marginTop: '0.12rem' }}>
            {subtitle}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BrandRevealPanel() {
  const containerRef = useRef(null);
  
  // Triggers entrance and brand reveal when 30% of the panel is visible in viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  // SVG text letters setup for "INNOWORQ"
  const letters = ["I", "N", "N", "O", "W", "O", "R", "Q"];

  // Helper arrays for particles and dynamic network rings
  const particles = Array.from({ length: 15 });
  const orbitalNodes = Array.from({ length: 3 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '16/10',
        backgroundColor: '#03050c', // Deep tech background
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(0, 168, 255, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #0b1528 0%, #02040a 100%)', // Layered radial gradient
      }}
      className="brand-reveal-panel"
    >
      {/* 1. Volumetric Lighting Glow Layers (Continuous Pulsing) */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9, 97, 159, 0.3) 0%, rgba(9, 97, 159, 0) 70%)',
          filter: 'blur(35px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ 
          opacity: [0.18, 0.35, 0.18],
          scale: [1, 0.9, 1.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          width: '45%',
          height: '45%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 255, 0.2) 0%, rgba(0, 168, 255, 0) 75%)',
          filter: 'blur(25px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* 2. Glass Reflection Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.01) 100%)',
          zIndex: 4,
          pointerEvents: 'none',
          borderRadius: '16px'
        }}
      />

      {/* 3. Tech blueprint grid and dynamic network visuals */}
      <svg 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        viewBox="0 0 800 500"
      >
        <defs>
          {/* Blueprint Grid */}
          <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 168, 255, 0.02)" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="1" fill="rgba(0, 168, 255, 0.12)" />
          </pattern>
          
          {/* Scanline Sweep Gradient */}
          <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="50%" stopColor="rgba(0, 168, 255, 0.6)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* Glowing Filter */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid Background */}
        <rect width="100%" height="100%" fill="url(#tech-grid)" opacity="0.9" />

        {/* ── CONTINUOUS SCANNERS & TIMELINE RULERS ── */}
        <motion.line
          x1="0"
          y1="0"
          x2="800"
          y2="0"
          stroke="rgba(0, 168, 255, 0.06)"
          strokeWidth="1.5"
          animate={{ y: [20, 480, 20] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        <motion.line
          x1="0"
          y1="0"
          x2="0"
          y2="500"
          stroke="rgba(0, 168, 255, 0.04)"
          strokeWidth="1"
          animate={{ x: [40, 760, 40] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />

        {/* ── ROTATING ORBITAL NETWORKS ── */}
        {/* Outer Orbit with Ticks */}
        <motion.circle
          cx="400"
          cy="250"
          r="190"
          fill="none"
          stroke="rgba(0, 168, 255, 0.06)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: '400px 250px' }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />

        {/* Middle Ring Orbit (reverse rotation) */}
        <motion.circle
          cx="400"
          cy="250"
          r="140"
          fill="none"
          stroke="rgba(0, 168, 255, 0.08)"
          strokeWidth="1"
          strokeDasharray="20 40"
          animate={{ rotate: -360 }}
          style={{ transformOrigin: '400px 250px' }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner concentric ring */}
        <circle
          cx="400"
          cy="250"
          r="100"
          fill="none"
          stroke="rgba(0, 168, 255, 0.05)"
          strokeWidth="1"
        />

        {/* ── TRAVELING DATA PULSES ── */}
        {/* Circuit path segments from borders to orbit */}
        <path d="M 50 120 H 250 L 300 250" fill="none" stroke="rgba(0, 168, 255, 0.05)" strokeWidth="1" />
        <path d="M 750 120 H 550 L 500 250" fill="none" stroke="rgba(0, 168, 255, 0.05)" strokeWidth="1" />
        <path d="M 50 380 H 250 L 300 250" fill="none" stroke="rgba(0, 168, 255, 0.05)" strokeWidth="1" />
        <path d="M 750 380 H 550 L 500 250" fill="none" stroke="rgba(0, 168, 255, 0.05)" strokeWidth="1" />

        {/* Looped Traveling Packets */}
        {startAnimation && (
          <>
            <motion.circle r="3" fill="#00f0ff" filter="url(#neon-glow)"
              animate={{ 
                cx: [50, 250, 300],
                cy: [120, 120, 250],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle r="3" fill="#00f0ff" filter="url(#neon-glow)"
              animate={{ 
                cx: [750, 550, 500],
                cy: [120, 120, 250],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
            <motion.circle r="3" fill="#00f0ff" filter="url(#neon-glow)"
              animate={{ 
                cx: [50, 250, 300],
                cy: [380, 380, 250],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />
            <motion.circle r="3" fill="#00f0ff" filter="url(#neon-glow)"
              animate={{ 
                cx: [750, 550, 500],
                cy: [380, 380, 250],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2.3 }}
            />
          </>
        )}

        {/* ── ROTATING ORBITAL NODES ── */}
        {startAnimation && orbitalNodes.map((_, i) => {
          const startAngle = i * (360 / orbitalNodes.length);
          return (
            <motion.circle
              key={i}
              r="4.5"
              fill="#00f0ff"
              filter="url(#neon-glow)"
              animate={{
                cx: Array.from({ length: 37 }).map((_, step) => {
                  const angle = ((startAngle + step * 10) * Math.PI) / 180;
                  return 400 + 190 * Math.cos(angle);
                }),
                cy: Array.from({ length: 37 }).map((_, step) => {
                  const angle = ((startAngle + step * 10) * Math.PI) / 180;
                  return 250 + 190 * Math.sin(angle);
                })
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
          );
        })}

        {/* Sweep Scan Line Reveal (triggered once at start) */}
        <motion.rect
          x="-200"
          y="50"
          width="200"
          height="400"
          fill="url(#scan-gradient)"
          initial={{ x: -200 }}
          animate={startAnimation ? { x: 1000 } : { x: -200 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>

      {/* 4. Continuous Ambient Floating Particles (Tech Dust) */}
      {startAnimation && particles.map((_, idx) => {
        const size = Math.random() * 3 + 1.5;
        const initialX = Math.random() * 80 + 10; // percentage
        const initialY = Math.random() * 80 + 10; // percentage
        return (
          <motion.div
            key={idx}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.45, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4
            }}
            style={{
              position: 'absolute',
              left: `${initialX}%`,
              top: `${initialY}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: '#00f0ff',
              boxShadow: '0 0 8px #00f0ff',
              pointerEvents: 'none',
              zIndex: 2
            }}
          />
        );
      })}

      {/* 5. Center Brand Text Container with Neon Core Glows */}
      <div 
        style={{
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          transform: 'translateY(-10px)'
        }}
      >
        {/* Stylized background wireframe emblem (pulsing core logo structure) */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            border: '2px solid rgba(0, 168, 255, 0.08)',
            borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%', // tech morphing shape
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1.05, 0.95, 1.05]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            border: '1.5px dashed rgba(0, 240, 255, 0.06)',
            borderRadius: '50%',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        {/* Modern styled INNOWORQ typography with continuous neon shimmer */}
        <motion.div 
          animate={startAnimation ? {
            textShadow: [
              '0 0 10px rgba(0, 168, 255, 0.15), 0 0 2px rgba(0, 168, 255, 0.1)',
              '0 0 25px rgba(0, 168, 255, 0.55), 0 0 8px rgba(0, 168, 255, 0.35)',
              '0 0 10px rgba(0, 168, 255, 0.15), 0 0 2px rgba(0, 168, 255, 0.1)'
            ]
          } : {}}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display: 'flex',
            gap: '10px',
            fontFamily: 'var(--font-heading), "Outfit", sans-serif',
            fontSize: '4.2rem', // Made significantly larger
            fontWeight: 900,
            letterSpacing: '0.12em',
            color: '#ffffff',
            position: 'relative',
            zIndex: 2
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.8 }}
              animate={startAnimation ? { 
                opacity: 1, 
                filter: 'blur(0px)', 
                scale: 1 
              } : {}}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.0 + (index * 0.12)
              }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {letter}
            </motion.span>
          ))}

          {/* Underline gradient reveal (pulsing size) */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={startAnimation ? { 
              scaleX: [1, 1.06, 1], 
              opacity: [0.7, 1, 0.7] 
            } : {}}
            transition={{ 
              scaleX: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.2 },
              opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.2 },
              default: { duration: 1.5, ease: 'easeOut', delay: 2.2 }
            }}
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '5%',
              width: '90%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, #00a8ff 35%, #00f0ff 50%, #00a8ff 65%, transparent 100%)',
              originX: 0.5
            }}
          />
        </motion.div>

        {/* Subtitle brand statement */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={startAnimation ? { opacity: 0.75, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 2.4 }}
          style={{
            marginTop: '1.8rem',
            color: '#e2e8f0',
            fontSize: '0.86rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.45em',
            textAlign: 'center',
            display: 'block',
            zIndex: 2,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          Technology Infrastructure
        </motion.span>
      </div>

      {/* 6. Static premium grid frame borders (Holographic bracket lines) */}
      <div 
        style={{
          position: 'absolute',
          inset: '12px',
          border: '1px solid rgba(0, 168, 255, 0.06)',
          borderRadius: '12px',
          pointerEvents: 'none',
          zIndex: 3
        }}
      >
        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '14px', height: '14px', borderTop: '2px solid rgba(0, 168, 255, 0.5)', borderLeft: '2px solid rgba(0, 168, 255, 0.5)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '14px', height: '14px', borderTop: '2px solid rgba(0, 168, 255, 0.5)', borderRight: '2px solid rgba(0, 168, 255, 0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '14px', height: '14px', borderBottom: '2px solid rgba(0, 168, 255, 0.5)', borderLeft: '2px solid rgba(0, 168, 255, 0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '14px', height: '14px', borderBottom: '2px solid rgba(0, 168, 255, 0.5)', borderRight: '2px solid rgba(0, 168, 255, 0.5)' }} />
      </div>
    </motion.div>
  );
}

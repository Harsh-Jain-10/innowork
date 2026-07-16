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

  // Framer Motion variants for structured phased reveal
  const panelVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // SVG text letters setup for "INNOWORQ"
  const letters = ["I", "N", "N", "O", "W", "O", "R", "Q"];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={panelVariants}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#090b10', // Dark graphite foundation
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #141c2c 0%, #07090d 100%)', // Layered radial gradient
      }}
      className="brand-reveal-panel"
    >
      {/* 1. Volumetric lighting glow layers in background */}
      <motion.div
        animate={startAnimation ? { 
          opacity: [0.25, 0.45, 0.35],
          scale: [1, 1.05, 1],
        } : { opacity: 0.15 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9, 97, 159, 0.25) 0%, rgba(9, 97, 159, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={startAnimation ? { 
          opacity: [0.15, 0.28, 0.2],
          scale: [1, 1.1, 1],
        } : { opacity: 0.1 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          width: '35%',
          height: '35%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 255, 0.18) 0%, rgba(0, 168, 255, 0) 75%)',
          filter: 'blur(20px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* 2. Glass Reflection Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.01) 100%)',
          zIndex: 4,
          pointerEvents: 'none',
          borderRadius: '16px'
        }}
      />

      {/* 3. Tech grid and moving lines */}
      <svg 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        viewBox="0 0 800 450"
      >
        <defs>
          {/* Subtle Grid Pattern */}
          <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="rgba(9, 97, 159, 0.15)" />
          </pattern>
          
          {/* Linear Gradient for Text Mask Sweep */}
          <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="50%" stopColor="rgba(0, 168, 255, 0.9)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* Core Text Gradient */}
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Electric Blue Line Gradient */}
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(9, 97, 159, 0)" />
            <stop offset="50%" stopColor="rgba(0, 168, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(9, 97, 159, 0)" />
          </linearGradient>
        </defs>

        {/* Grid Background */}
        <rect width="100%" height="100%" fill="url(#tech-grid)" opacity="0.8" />

        {/* Ambient Grid Lines Sweeper */}
        <motion.line
          x1="0"
          y1="0"
          x2="800"
          y2="0"
          stroke="rgba(9, 97, 159, 0.08)"
          strokeWidth="2"
          animate={startAnimation ? { y: [0, 450, 0] } : { y: 0 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Infrastructure Connection paths */}
        <motion.path
          d="M 50,225 L 200,225 M 600,225 L 750,225"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={startAnimation ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />

        <motion.path
          d="M 120,80 L 220,130 L 220,225 M 680,370 L 580,320 L 580,225"
          stroke="rgba(0, 168, 255, 0.12)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={startAnimation ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Traveling Data Packets (continuous idle movement) */}
        {startAnimation && (
          <>
            <motion.circle
              r="3"
              fill="#00f0ff"
              filter="drop-shadow(0 0 4px #00f0ff)"
              animate={{ 
                cx: [50, 200, 200, 250],
                cy: [225, 225, 225, 225],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.circle
              r="2.5"
              fill="#00f0ff"
              filter="drop-shadow(0 0 3px #00f0ff)"
              animate={{ 
                cx: [750, 600, 600, 550],
                cy: [225, 225, 225, 225],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
            />
            <motion.circle
              r="2"
              fill="#00f0ff"
              filter="drop-shadow(0 0 3px #00a8ff)"
              animate={{ 
                cx: [120, 220, 220],
                cy: [80, 130, 225],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </>
        )}

        {/* Sweep Scan Line Reveal (triggered once, reveals branding) */}
        <motion.rect
          x="-150"
          y="100"
          width="150"
          height="250"
          fill="url(#scan-gradient)"
          initial={{ x: -150 }}
          animate={startAnimation ? { x: 1000 } : { x: -150 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>

      {/* 4. Brand Text Container */}
      <div 
        style={{
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none'
        }}
      >
        {/* Modern styled INNOWORQ typography with individual letter reveals */}
        <div 
          style={{
            display: 'flex',
            gap: '8px',
            fontFamily: 'var(--font-heading), "Outfit", sans-serif',
            fontSize: '3.4rem',
            fontWeight: 900,
            letterSpacing: '0.12em',
            color: '#ffffff',
            position: 'relative'
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
                delay: 1.2 + (index * 0.15) // Staggered entrance
              }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
              }}
            >
              {letter}
            </motion.span>
          ))}

          {/* Dynamic underline gradient reveal */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={startAnimation ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 2.2 }}
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '5%',
              width: '90%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, #00a8ff 35%, #00f0ff 50%, #00a8ff 65%, transparent 100%)',
              originX: 0.5
            }}
          />
        </div>

        {/* Subtitle brand statement */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={startAnimation ? { opacity: 0.65, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
          style={{
            marginTop: '1.25rem',
            color: '#e2e8f0',
            fontSize: '0.82rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.45em',
            textAlign: 'center',
            display: 'block'
          }}
        >
          Technology Infrastructure
        </motion.span>
      </div>

      {/* 5. Static premium grid frame borders */}
      <div 
        style={{
          position: 'absolute',
          inset: '12px',
          border: '1px solid rgba(0, 168, 255, 0.05)',
          borderRadius: '12px',
          pointerEvents: 'none',
          zIndex: 3
        }}
      >
        {/* Digital Corner brackets */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '12px', borderTop: '2px solid rgba(0, 168, 255, 0.4)', borderLeft: '2px solid rgba(0, 168, 255, 0.4)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', borderTop: '2px solid rgba(0, 168, 255, 0.4)', borderRight: '2px solid rgba(0, 168, 255, 0.4)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '12px', height: '12px', borderBottom: '2px solid rgba(0, 168, 255, 0.4)', borderLeft: '2px solid rgba(0, 168, 255, 0.4)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderBottom: '2px solid rgba(0, 168, 255, 0.4)', borderRight: '2px solid rgba(0, 168, 255, 0.4)' }} />
      </div>
    </motion.div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BrandRevealPanel() {
  const containerRef = useRef(null);
  
  // Triggers entrance and brand reveal when 30% of the panel is visible in viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Timeline phases: 'none' | 'boot' | 'converge' | 'flash' | 'reveal' | 'idle'
  const [phase, setPhase] = useState('none');

  useEffect(() => {
    if (isInView) {
      setPhase('boot');
      
      const t1 = setTimeout(() => setPhase('converge'), 1800);
      const t2 = setTimeout(() => setPhase('flash'), 3600);
      const t3 = setTimeout(() => setPhase('reveal'), 3900);
      const t4 = setTimeout(() => setPhase('idle'), 6200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [isInView]);

  // SVG text letters setup for "INNOWORQ"
  const letters = ["I", "N", "N", "O", "W", "O", "R", "Q"];

  // Helper arrays for rich particle environments
  const ambientParticles = Array.from({ length: 32 });
  const energyPaths = [
    { d: "M 50 80 Q 200 80 300 210 L 400 250", delay: 0 },
    { d: "M 750 80 Q 600 80 500 210 L 400 250", delay: 0.4 },
    { d: "M 50 420 Q 200 420 300 290 L 400 250", delay: 0.8 },
    { d: "M 750 420 Q 600 420 500 290 L 400 250", delay: 1.2 },
    { d: "M 400 30 L 400 250", delay: 0.2 },
    { d: "M 400 470 L 400 250", delay: 1.0 },
    { d: "M 100 250 Q 250 250 400 250", delay: 0.6 },
    { d: "M 700 250 Q 550 250 400 250", delay: 1.4 }
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '16/10',
        backgroundColor: '#010204',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(0, 168, 255, 0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #070e1c 0%, #010205 100%)',
      }}
      className="brand-reveal-panel"
    >
      {/* ── 1. CINEMATIC FLASH OVERLAY ── */}
      <motion.div
        animate={phase === 'flash' ? {
          opacity: [0, 0.85, 0],
          backgroundColor: '#e0f7ff'
        } : { opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 9,
          mixBlendMode: 'screen',
          pointerEvents: 'none'
        }}
      />

      {/* ── 2. NEBULA & VOLUMETRIC GLOWS ── */}
      <motion.div
        animate={{ 
          opacity: phase !== 'none' ? [0.25, 0.45, 0.25] : 0,
          scale: [1, 1.15, 1],
          x: [0, 15, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9, 97, 159, 0.35) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 75%)',
          filter: 'blur(45px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ 
          opacity: phase !== 'none' ? [0.15, 0.3, 0.15] : 0,
          scale: [1, 0.9, 1.1],
          x: [0, -20, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          width: '55%',
          height: '55%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(0, 168, 255, 0.02) 60%, transparent 80%)',
          filter: 'blur(30px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Glass sheen overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.015) 0%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.01) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* ── 3. DETAILED HUD GRID & SCENERY SVG ── */}
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
          {/* Detailed Fine Grid */}
          <pattern id="tech-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 168, 255, 0.015)" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="0.5" fill="rgba(0, 168, 255, 0.08)" />
          </pattern>

          {/* Glowing Filters */}
          <filter id="cinematic-neon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="3" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="intense-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Grid */}
        <rect width="100%" height="100%" fill="url(#tech-blueprint-grid)" opacity="0.85" />

        {/* ── TELEMETRY READOUTS (CYBERPUNK HUD STYLE) ── */}
        {phase !== 'none' && (
          <g opacity="0.45" fontSize="9" fontFamily="monospace" fill="#00f0ff" letterSpacing="1">
            {/* Noida Headquarters Coordinates */}
            <text x="35" y="45" opacity="0.75">LOC // NOIDA.HQ.INDIA</text>
            <text x="35" y="60">LAT // 28.5355 N</text>
            <text x="35" y="75">LNG // 77.3910 E</text>

            {/* Core Status logs */}
            <text x="635" y="45" opacity="0.75">SYS // INFRA.MONITOR</text>
            <text x="635" y="60">CORE.TEMP // 34.2 C</text>
            <text x="635" y="75" fill="#38bdf8">STATUS    // SECURE</text>

            {/* System logs bottom-left */}
            <text x="35" y="435" opacity="0.6">SYS.SYS_UPTIME: 99.998%</text>
            <text x="35" y="450" opacity="0.6">SYS.MAPPED_DESK: SECURE_DESK</text>
            <text x="35" y="465" opacity="0.8" fill="#0ea5e9">SECURE_LINK: Noida Channel Desk</text>

            {/* Frame lines */}
            <path d="M 30 90 L 30 35 M 30 35 L 150 35" fill="none" stroke="rgba(0,240,255,0.2)" strokeWidth="1" />
            <path d="M 770 90 L 770 35 M 770 35 L 630 35" fill="none" stroke="rgba(0,240,255,0.2)" strokeWidth="1" />
            <path d="M 30 410 L 30 475 M 30 475 L 220 475" fill="none" stroke="rgba(0,240,255,0.2)" strokeWidth="1" />
            <path d="M 770 410 L 770 475 M 770 475 L 630 475" fill="none" stroke="rgba(0,240,255,0.2)" strokeWidth="1" />
            <text x="645" y="465" opacity="0.7">EST.2019 // MULTI.VENDOR</text>
          </g>
        )}

        {/* ── HUD TICK MARQUEES (LEFT & RIGHT EDGES) ── */}
        {phase !== 'none' && (
          <g stroke="rgba(0, 168, 255, 0.15)" strokeWidth="1">
            {Array.from({ length: 15 }).map((_, i) => {
              const y = 100 + i * 20;
              const isEven = i % 2 === 0;
              return (
                <g key={i}>
                  <line x1="15" y1={y} x2={isEven ? "30" : "22"} y2={y} />
                  <line x1="785" y1={y} x2={isEven ? "770" : "778"} y2={y} />
                </g>
              );
            })}
          </g>
        )}

        {/* ── CONTINUOUS COORDINATE SCAN LINES ── */}
        <motion.line
          x1="0" y1="0" x2="800" y2="0"
          stroke="rgba(0, 240, 255, 0.08)"
          strokeWidth="1.5"
          animate={{ y: [40, 460, 40] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* ── ENERGY PATHWAYS & DATA PULSES ── */}
        {(phase === 'converge' || phase === 'flash' || phase === 'reveal' || phase === 'idle') && (
          <g>
            {energyPaths.map((path, idx) => (
              <path
                key={idx}
                d={path.d}
                fill="none"
                stroke="rgba(0, 168, 255, 0.06)"
                strokeWidth="1.5"
              />
            ))}

            {/* Flying energy sparks rushing into the core */}
            {energyPaths.map((path, idx) => (
              <motion.circle
                key={`spark-${idx}`}
                r="3.5"
                fill="#00f0ff"
                filter="url(#intense-glow)"
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: phase === 'converge' ? Infinity : 0,
                  ease: 'easeIn',
                  delay: path.delay
                }}
                style={{
                  motionPath: `path('${path.d}')`,
                  transformBox: 'fill-box',
                  transformOrigin: 'center'
                }}
              />
            ))}
          </g>
        )}

        {/* ── CENTRAL REACTOR ENERGY CORE ── */}
        {phase !== 'none' && (
          <g transform="translate(400, 250)">
            {/* Outer status ring ticks */}
            <motion.circle
              r="75"
              fill="none"
              stroke="rgba(0, 168, 255, 0.12)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            {/* Tech dashboard bracket ring */}
            <motion.circle
              r="60"
              fill="none"
              stroke="rgba(0, 240, 255, 0.18)"
              strokeWidth="2"
              strokeDasharray="90 30 10 30"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* Volumetric core glow element */}
            <motion.circle
              r="22"
              fill="url(#reactor-core-gradient)"
              filter="url(#cinematic-neon)"
              animate={{
                scale: phase === 'boot' ? [0.2, 1] : [1, 1.28, 1],
                opacity: phase === 'flash' ? 1 : [0.7, 1, 0.7]
              }}
              transition={{
                scale: { duration: 3, ease: 'easeOut' },
                opacity: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
              }}
            />

            <defs>
              <radialGradient id="reactor-core-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#00f0ff" />
                <stop offset="70%" stopColor="#09619f" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </g>
        )}

        {/* ── EPIC ENERGY SHOCKWAVES (DURING FLASH & REVEAL) ── */}
        {(phase === 'flash' || phase === 'reveal' || phase === 'idle') && (
          <g>
            <motion.circle
              cx="400"
              cy="250"
              r="22"
              fill="none"
              stroke="rgba(0, 240, 255, 0.6)"
              strokeWidth="3"
              filter="url(#cinematic-neon)"
              animate={{
                r: [22, 500],
                strokeWidth: [4, 0.2],
                opacity: [1, 0]
              }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
            />
            <motion.circle
              cx="400"
              cy="250"
              r="22"
              fill="none"
              stroke="rgba(99, 102, 241, 0.4)"
              strokeWidth="2"
              filter="url(#cinematic-neon)"
              animate={{
                r: [22, 420],
                strokeWidth: [3, 0.1],
                opacity: [0.8, 0]
              }}
              transition={{ duration: 2.5, ease: 'easeOut', delay: 0.15 }}
            />
            <motion.circle
              cx="400"
              cy="250"
              r="22"
              fill="none"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="5"
              filter="url(#intense-glow)"
              animate={{
                r: [22, 350],
                strokeWidth: [6, 0.1],
                opacity: [1, 0]
              }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 0.05 }}
            />
          </g>
        )}
      </svg>

      {/* ── 4. NEON GLITCH LETTERS CONTAINER ── */}
      <div 
        style={{
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          transform: 'translateY(-10px)'
        }}
      >
        {/* Core emblem backplates */}
        {phase !== 'none' && (
          <motion.div
            animate={{
              rotate: 360,
              scale: [0.96, 1.04, 0.96]
            }}
            transition={{
              rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              border: '1.5px solid rgba(0, 168, 255, 0.08)',
              borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Staggered Glitch Title */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            fontFamily: 'var(--font-heading), "Outfit", sans-serif',
            fontSize: '4.5rem',
            fontWeight: 900,
            letterSpacing: '0.12em',
            color: '#ffffff',
            position: 'relative',
            zIndex: 2,
            paddingLeft: '0.12em'
          }}
        >
          {letters.map((letter, index) => {
            const isRevealed = phase === 'reveal' || phase === 'idle';
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 2.2, filter: 'blur(20px)', y: -15 }}
                animate={isRevealed ? { 
                  opacity: [0, 0.8, 0.3, 1],
                  scale: [2.2, 0.9, 1.05, 1],
                  filter: ['blur(15px)', 'blur(2px)', 'blur(0px)'],
                  y: 0
                } : {}}
                transition={{
                  duration: 0.85,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: isRevealed ? index * 0.15 : 0
                }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: isRevealed ? '0 0 30px rgba(0, 240, 255, 0.4), 0 0 10px rgba(0, 168, 255, 0.2)' : 'none',
                }}
              >
                {letter}
              </motion.span>
            );
          })}

          {/* Underline neon glow reveal */}
          {(phase === 'reveal' || phase === 'idle') && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [1, 1.05, 1], 
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                scaleX: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
                opacity: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
                default: { duration: 1.8, ease: 'easeOut', delay: 1.2 }
              }}
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '5%',
                width: '90%',
                height: '4px',
                background: 'linear-gradient(90deg, transparent 0%, #00a8ff 30%, #00f0ff 50%, #00a8ff 70%, transparent 100%)',
                boxShadow: '0 0 15px #00f0ff, 0 0 5px rgba(0, 168, 255, 0.5)',
                originX: 0.5
              }}
            />
          )}

          {/* Shimmer laser reflection sheet sweeping across the text */}
          {(phase === 'reveal' || phase === 'idle') && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 5.5,
                ease: 'easeInOut',
                delay: 2.2
              }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0) 70%, transparent 100%)',
                mixBlendMode: 'overlay',
                pointerEvents: 'none',
                zIndex: 3
              }}
            />
          )}
        </div>

        {/* Subtitle tag with reflection shimmer */}
        {(phase === 'reveal' || phase === 'idle') && (
          <div style={{ position: 'relative', overflow: 'hidden', marginTop: '2.2rem' }}>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 1.5 }}
              style={{
                color: '#e2e8f0',
                fontSize: '0.88rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.55em',
                textAlign: 'center',
                display: 'block',
                zIndex: 2,
                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
              }}
            >
              Technology Infrastructure
            </motion.span>
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 8,
                ease: 'linear',
                delay: 3.5
              }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        )}
      </div>

      {/* ── 5. CINEMATIC AMBIENT TECH DUST (FLOATING PARTICLES) ── */}
      {(phase === 'reveal' || phase === 'idle') && ambientParticles.map((_, idx) => {
        const size = Math.random() * 4 + 1.5;
        const initialX = Math.random() * 80 + 10;
        const initialY = Math.random() * 70 + 15;
        const speed = 7 + Math.random() * 8;
        return (
          <motion.div
            key={idx}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.6, 0.6, 0],
              scale: [1, 1.25, 0.75, 1]
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3
            }}
            style={{
              position: 'absolute',
              left: `${initialX}%`,
              top: `${initialY}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: idx % 3 === 0 ? '#38bdf8' : '#00f0ff',
              boxShadow: '0 0 10px #00f0ff, 0 0 4px rgba(0,240,255,0.5)',
              pointerEvents: 'none',
              zIndex: 3
            }}
          />
        );
      })}

      {/* ── 6. HOLOGRAPHIC FRAME BRACKETS ── */}
      <div 
        style={{
          position: 'absolute',
          inset: '12px',
          border: '1px solid rgba(0, 168, 255, 0.08)',
          borderRadius: '12px',
          pointerEvents: 'none',
          zIndex: 3
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '16px', height: '16px', borderTop: '2.5px solid rgba(0, 240, 255, 0.6)', borderLeft: '2.5px solid rgba(0, 240, 255, 0.6)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '16px', height: '16px', borderTop: '2.5px solid rgba(0, 240, 255, 0.6)', borderRight: '2.5px solid rgba(0, 240, 255, 0.6)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '16px', height: '16px', borderBottom: '2.5px solid rgba(0, 240, 255, 0.6)', borderLeft: '2.5px solid rgba(0, 240, 255, 0.6)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '16px', height: '16px', borderBottom: '2.5px solid rgba(0, 240, 255, 0.6)', borderRight: '2.5px solid rgba(0, 240, 255, 0.6)' }} />
      </div>
    </motion.div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BrandRevealPanel() {
  const containerRef = useRef(null);
  
  // Triggers entrance and brand reveal when 30% of the panel is visible in viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Timeline phases: 'none' | 'boot' | 'reveal' | 'idle'
  const [phase, setPhase] = useState('none');

  useEffect(() => {
    if (isInView) {
      setPhase('boot');
      
      const t1 = setTimeout(() => setPhase('reveal'), 1400);
      const t2 = setTimeout(() => setPhase('idle'), 3800);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isInView]);

  // Letters of the brand name
  const letters = ["I", "N", "N", "O", "W", "O", "R", "Q"];

  // Constellation nodes for global network theme
  const nodes = [
    { x: 120, y: 140, size: 4, delay: 0 },
    { x: 220, y: 100, size: 5, delay: 0.2 },
    { x: 280, y: 160, size: 3, delay: 0.5 },
    { x: 180, y: 220, size: 4, delay: 0.8 },
    { x: 620, y: 120, size: 5, delay: 0.3 },
    { x: 680, y: 180, size: 3, delay: 0.6 },
    { x: 580, y: 220, size: 4, delay: 0.9 },
    { x: 650, y: 280, size: 5, delay: 1.1 },
    { x: 150, y: 380, size: 4, delay: 0.4 },
    { x: 250, y: 420, size: 5, delay: 0.7 },
    { x: 550, y: 390, size: 4, delay: 0.5 },
    { x: 680, y: 370, size: 5, delay: 1.0 }
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '16/10',
        backgroundColor: '#03050a',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #050a18 0%, #010205 100%)',
      }}
      className="brand-reveal-panel"
    >
      {/* ── 1. AMBIENT MESH GRADIENT LIGHTS (BREATHING & DRITFING) ── */}
      <motion.div
        animate={{ 
          opacity: phase !== 'none' ? [0.15, 0.3, 0.15] : 0,
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9, 97, 159, 0.28) 0%, rgba(99, 102, 241, 0.03) 60%, transparent 80%)',
          filter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ 
          opacity: phase !== 'none' ? [0.1, 0.22, 0.1] : 0,
          scale: [1.1, 0.95, 1.1],
          x: [0, -25, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 255, 0.18) 0%, rgba(9, 97, 159, 0.02) 60%, transparent 80%)',
          filter: 'blur(40px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* ── 2. DELICATE SVG NETWORK CONSTELLATIONS & LIGHT WAVES ── */}
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
          {/* Wave linear gradients for high-speed fiber-optic representation */}
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 168, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 168, 255, 0)" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
            <stop offset="50%" stopColor="rgba(129, 140, 248, 0.4)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </linearGradient>
          <filter id="soft-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Constellation link lines (thin, elegant) */}
        {phase !== 'none' && (
          <g stroke="rgba(0, 168, 255, 0.035)" strokeWidth="0.75">
            {/* Left cluster link */}
            <line x1="120" y1="140" x2="220" y2="100" />
            <line x1="220" y1="100" x2="280" y2="160" />
            <line x1="280" y1="160" x2="180" y2="220" />
            <line x1="180" y1="220" x2="120" y2="140" />
            <line x1="150" y1="380" x2="250" y2="420" />
            
            {/* Right cluster link */}
            <line x1="620" y1="120" x2="680" y2="180" />
            <line x1="680" y1="180" x2="580" y2="220" />
            <line x1="580" y1="220" x2="650" y2="280" />
            <line x1="650" y1="280" x2="620" y2="120" />
            <line x1="550" y1="390" x2="680" y2="370" />
            
            {/* Soft global bridges linking clusters */}
            <line x1="280" y1="160" x2="580" y2="220" stroke="rgba(255, 255, 255, 0.015)" strokeWidth="0.5" />
            <line x1="180" y1="220" x2="550" y2="390" stroke="rgba(255, 255, 255, 0.015)" strokeWidth="0.5" />
          </g>
        )}

        {/* Constellation Nodes */}
        {phase !== 'none' && nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1, delay: node.delay }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="rgba(0, 240, 255, 0.25)"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 2.5}
              fill="none"
              stroke="rgba(0, 168, 255, 0.08)"
              strokeWidth="0.5"
            />
          </motion.g>
        ))}

        {/* ── FIBER-OPTIC FLUID WAVES (flowing curves representing datacenter highways) ── */}
        {(phase === 'reveal' || phase === 'idle') && (
          <g>
            {/* Wave 1 (Upper Arc) */}
            <path
              d="M 50 160 C 250 80, 550 80, 750 160"
              fill="none"
              stroke="rgba(255, 255, 255, 0.02)"
              strokeWidth="1.5"
            />
            <motion.path
              d="M 50 160 C 250 80, 550 80, 750 160"
              fill="none"
              stroke="url(#wave-grad-1)"
              strokeWidth="2"
              filter="url(#soft-glow)"
              initial={{ strokeDasharray: "150 450", strokeDashoffset: 600 }}
              animate={{ strokeDashoffset: [600, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Wave 2 (Lower Arc) */}
            <path
              d="M 50 340 C 250 420, 550 420, 750 340"
              fill="none"
              stroke="rgba(255, 255, 255, 0.02)"
              strokeWidth="1.5"
            />
            <motion.path
              d="M 50 340 C 250 420, 550 420, 750 340"
              fill="none"
              stroke="url(#wave-grad-1)"
              strokeWidth="2"
              filter="url(#soft-glow)"
              initial={{ strokeDasharray: "120 480", strokeDashoffset: -600 }}
              animate={{ strokeDashoffset: [-600, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            {/* Wave 3 (Center Sine S-Curve) */}
            <path
              d="M 100 250 Q 250 150 400 250 T 700 250"
              fill="none"
              stroke="rgba(255, 255, 255, 0.01)"
              strokeWidth="1"
            />
            <motion.path
              d="M 100 250 Q 250 150 400 250 T 700 250"
              fill="none"
              stroke="url(#wave-grad-2)"
              strokeWidth="1.5"
              initial={{ strokeDasharray: "100 350", strokeDashoffset: 450 }}
              animate={{ strokeDashoffset: [450, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </g>
        )}
      </svg>

      {/* ── 3. PREMIUM GLASSMORPHIC CARD BACKPLATE ── */}
      {(phase === 'reveal' || phase === 'idle') && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '80%',
            height: '42%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.015) 0%, rgba(255, 255, 255, 0.005) 100%)',
            backdropFilter: 'blur(20px) saturate(110%)',
            border: '1px solid rgba(255, 255, 255, 0.035)',
            borderRadius: '24px',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: '0 30px 100px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
          }}
        />
      )}

      {/* ── 4. MAJESTIC LOGO TYPOGRAPHY & SHIMMER EFFECT ── */}
      <div 
        style={{
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
        }}
      >
        <motion.div
          animate={(phase === 'reveal' || phase === 'idle') ? {
            letterSpacing: ['0.25em', '0.12em'],
          } : { letterSpacing: '0.25em' }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            gap: '8px',
            fontFamily: 'var(--font-heading), "Outfit", sans-serif',
            fontSize: '4.6rem',
            fontWeight: 800,
            color: '#ffffff',
            position: 'relative',
            paddingLeft: '0.12em'
          }}
        >
          {letters.map((letter, index) => {
            const isShown = phase === 'reveal' || phase === 'idle';
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15, scale: 0.92, filter: 'blur(8px)' }}
                animate={isShown ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  filter: 'blur(0px)'
                } : {}}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isShown ? index * 0.12 : 0
                }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 55%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {letter}
              </motion.span>
            );
          })}

          {/* High-gloss silver reflection sweep */}
          {(phase === 'reveal' || phase === 'idle') && (
            <motion.div
              initial={{ x: '-150%', skewX: -25 }}
              animate={{ x: '150%' }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                repeatDelay: 5.5,
                ease: 'easeInOut',
                delay: 2.0
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
        </motion.div>

        {/* Subtitle tag with reflection shimmer */}
        {(phase === 'reveal' || phase === 'idle') && (
          <div style={{ position: 'relative', overflow: 'hidden', marginTop: '1.75rem' }}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
              style={{
                color: '#e2e8f0',
                fontSize: '0.86rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.45em',
                textAlign: 'center',
                display: 'block',
                zIndex: 2,
                textShadow: '0 2px 6px rgba(0,0,0,0.6)'
              }}
            >
              Technology Infrastructure
            </motion.span>
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 7,
                ease: 'linear',
                delay: 3.0
              }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        )}
      </div>

      {/* ── 5. OPTICAL SPOTLIGHT GLOW REACTION (BRETATHING BEHIND LOGO) ── */}
      {(phase === 'reveal' || phase === 'idle') && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '320px',
            height: '140px',
            background: 'radial-gradient(circle, rgba(0, 168, 255, 0.12) 0%, transparent 70%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* ── 6. ELEGANT FIBER-OPTIC TRACE LINE (BOTTOM BAR) ── */}
      {(phase === 'reveal' || phase === 'idle') && (
        <div style={{ position: 'absolute', bottom: '15px', width: '220px', height: '1px', background: 'rgba(255, 255, 255, 0.05)', overflow: 'hidden' }}>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '40px',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)'
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

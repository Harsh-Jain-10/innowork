import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function BrandRevealPanel() {
  const containerRef = useRef(null);
  
  // Triggers entrance and brand reveal when 30% of the panel is visible in viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Timeline phases: 'none' | 'alert' | 'converge' | 'cleanse' | 'reveal' | 'idle'
  const [phase, setPhase] = useState('none');

  useEffect(() => {
    if (isInView) {
      setPhase('alert'); // Phase 1: 0s - 4s
      
      const t1 = setTimeout(() => setPhase('converge'), 4000);  // Phase 2: 4s - 7s
      const t2 = setTimeout(() => setPhase('cleanse'), 7000);   // Phase 3: 7s - 9s
      const t3 = setTimeout(() => setPhase('reveal'), 9000);    // Phase 4: 9s - 11s (revealing)
      const t4 = setTimeout(() => setPhase('idle'), 11000);     // Phase 4 final: 11s+ (idle loop)

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [isInView]);

  // Letters of the brand name split
  const mainLetters = ["I", "N", "N", "O", "W", "O", "R", "Q"];

  // Motherboard track layout paths
  const motherboardTracks = [
    { d: "M 80 80 H 220 L 300 200 L 350 250", delay: 0 },
    { d: "M 720 80 H 580 L 500 200 L 450 250", delay: 0.3 },
    { d: "M 80 500 H 220 L 300 380 L 350 330", delay: 0.6 },
    { d: "M 720 500 H 580 L 500 380 L 450 330", delay: 0.9 },
    { d: "M 400 50 V 230", delay: 0.2 },
    { d: "M 400 530 V 350", delay: 0.8 },
    { d: "M 100 290 H 340", delay: 0.5 },
    { d: "M 700 290 H 460", delay: 1.1 }
  ];

  // Solder joints for background motherboard details
  const motherboardPins = [
    { cx: 80, cy: 80 }, { cx: 220, cy: 80 }, { cx: 300, cy: 200 },
    { cx: 720, cy: 80 }, { cx: 580, cy: 80 }, { cx: 500, cy: 200 },
    { cx: 80, cy: 500 }, { cx: 220, cy: 500 }, { cx: 300, cy: 380 },
    { cx: 720, cy: 500 }, { cx: 580, cy: 500 }, { cx: 500, cy: 380 },
    { cx: 400, cy: 50 }, { cx: 400, cy: 530 }, { cx: 100, cy: 290 }, { cx: 700, cy: 290 }
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
        minHeight: '580px',
        backgroundColor: '#020306',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: (phase === 'alert' || phase === 'converge') 
          ? 'radial-gradient(circle at center, #1b050a 0%, #020306 100%)'
          : 'radial-gradient(circle at center, #050e1f 0%, #010204 100%)',
        transition: 'background 2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="brand-reveal-panel"
    >
      {/* ── 1. RED ALERT HEARTBEAT GLOW LAYER (Phase 1 & 2) ── */}
      {(phase === 'alert' || phase === 'converge') && (
        <motion.div
          animate={{
            opacity: [0.35, 0.85, 0.45, 0.95, 0.35],
            scale: [1, 1.05, 0.98, 1.08, 1]
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            width: '65%',
            height: '65%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.32) 0%, transparent 70%)',
            filter: 'blur(45px)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* ── 2. CLEANSE FLASH WAVE (Phase 3 transition) ── */}
      {phase === 'cleanse' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 8,
            background: 'radial-gradient(circle at center, #e0f7ff 0%, #00f0ff 40%, transparent 100%)',
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* ── 3. STABLE AMBIENT MESH GRADIENT LIGHTS (Phase 3 & 4) ── */}
      {(phase === 'cleanse' || phase === 'reveal' || phase === 'idle') && (
        <motion.div
          animate={{ 
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.12, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '75%',
            height: '75%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9, 97, 159, 0.32) 0%, rgba(0, 168, 255, 0.04) 50%, transparent 75%)',
            filter: 'blur(45px)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Glass sheen overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.015) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.01) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* ── 4. DETAILED SILICON MOTHERBOARD GRID & CIRCUITS ── */}
      <svg 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        viewBox="0 0 800 580"
      >
        <defs>
          {/* Subtly colored gradients for circuit trace lines */}
          <linearGradient id="trace-alert-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
            <stop offset="100%" stopColor="rgba(185, 28, 28, 0.05)" />
          </linearGradient>
          <linearGradient id="trace-stable-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 168, 255, 0.25)" />
            <stop offset="100%" stopColor="rgba(9, 97, 159, 0.05)" />
          </linearGradient>

          {/* Central warning core pulsing gradient */}
          <radialGradient id="warning-core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#ef4444" />
            <stop offset="80%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Cleansed core gradient */}
          <radialGradient id="stable-core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#00f0ff" />
            <stop offset="75%" stopColor="#09619f" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Intense neon glow filter */}
          <filter id="neon-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base fine mesh grids */}
        <g stroke="rgba(255,255,255,0.015)" strokeWidth="0.5">
          {Array.from({ length: 41 }).map((_, i) => (
            <line key={`x-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="580" />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`y-${i}`} x1="0" y1={i * 20} x2="800" y2={i * 20} />
          ))}
        </g>

        {/* Silicon Motherboard Tracks */}
        <g>
          {motherboardTracks.map((track, idx) => {
            const isAlert = phase === 'alert' || phase === 'converge';
            return (
              <path
                key={idx}
                d={track.d}
                fill="none"
                stroke={isAlert ? "url(#trace-alert-grad)" : "url(#trace-stable-grad)"}
                strokeWidth="1.5"
                style={{ transition: 'stroke 1.5s ease' }}
              />
            );
          })}
        </g>

        {/* Solder pins details */}
        <g fill={ (phase === 'alert' || phase === 'converge') ? "rgba(220, 38, 38, 0.25)" : "rgba(0, 168, 255, 0.2)" }>
          {motherboardPins.map((pin, idx) => (
            <circle
              key={idx}
              cx={pin.cx}
              cy={pin.cy}
              r="3"
              style={{ transition: 'fill 1.5s ease' }}
            />
          ))}
        </g>

        {/* Motherboard Labels Engravings */}
        <g fill="rgba(255,255,255,0.06)" fontSize="7" fontFamily="monospace" letterSpacing="0.5">
          <text x="90" y="70">CPU_VCC_LINE_01</text>
          <text x="730" y="70" textAnchor="end">PCI_BUS_G5_GND</text>
          <text x="90" y="515">SYS_PWR_BUS_GND</text>
          <text x="730" y="515" textAnchor="end">TRANS_LINK_V4.2</text>
        </g>

        {/* ── PHASE 1: HEARTBEAT WARNING CORE (CPU footprint) ── */}
        {(phase === 'alert' || phase === 'converge') && (
          <g transform="translate(400, 290)">
            {/* Warning Octagon */}
            <motion.polygon
              points="-30,-12.5 -12.5,-30 12.5,-30 30,-12.5 30,12.5 12.5,30 -12.5,30 -30,12.5"
              fill="rgba(185, 28, 28, 0.2)"
              stroke="#ef4444"
              strokeWidth="2.5"
              animate={{
                scale: [1, 1.15, 0.97, 1.2, 1],
                strokeWidth: [2.5, 3.5, 2, 4, 2.5]
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            {/* Core Center Pulse */}
            <motion.circle
              r="15"
              fill="url(#warning-core-grad)"
              filter="url(#neon-glow-filter)"
              animate={{
                scale: [1, 1.22, 0.95, 1.25, 1]
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            {/* Alarm lines */}
            <line x1="-10" y1="0" x2="10" y2="0" stroke="#ef4444" strokeWidth="2.5" />
            <line x1="0" y1="-10" x2="0" y2="10" stroke="#ef4444" strokeWidth="2.5" />
          </g>
        )}

        {/* ── PHASE 2: TRANSMISSION WIRE & ENERGY CONVERGENCE (4s - 7s) ── */}
        {phase === 'converge' && (
          <g>
            {/* Transmission cable connecting from left edge to core */}
            <motion.path
              d="M 100 290 H 340"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="3"
              filter="url(#soft-glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <motion.path
              d="M 700 290 H 460"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="3"
              filter="url(#soft-glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Accelerated packets rushing into the CPU footprint */}
            {motherboardTracks.map((track, idx) => (
              <motion.circle
                key={`packet-${idx}`}
                r="3.5"
                fill="#00f0ff"
                filter="url(#neon-glow-filter)"
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeIn',
                  delay: track.delay
                }}
                style={{
                  motionPath: `path('${track.d}')`,
                  transformBox: 'fill-box',
                  transformOrigin: 'center'
                }}
              />
            ))}
          </g>
        )}

        {/* ── PHASE 3: EXPANDING CLEANSE SHOCKWAVE (7s - 9s) ── */}
        {(phase === 'cleanse' || phase === 'reveal' || phase === 'idle') && (
          <g>
            {/* CPU Socket footprints cleansed */}
            <g transform="translate(400, 290)">
              <rect x="-45" y="-45" width="90" height="90" fill="none" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="1.5" />
              <rect x="-35" y="-35" width="70" height="70" fill="none" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1.5" />
              
              {/* Luminous Central Core */}
              <circle
                r="20"
                fill="url(#stable-core-grad)"
                filter="url(#neon-glow-filter)"
              />
            </g>

            {/* Glowing wave segments drawing and propagating */}
            <motion.circle
              cx="400"
              cy="290"
              r="20"
              fill="none"
              stroke="rgba(0, 240, 255, 0.85)"
              strokeWidth="4"
              filter="url(#neon-glow-filter)"
              animate={{
                r: phase === 'cleanse' ? [20, 750] : 750,
                strokeWidth: phase === 'cleanse' ? [4, 0.1] : 0,
                opacity: phase === 'cleanse' ? [1, 0] : 0
              }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
            />
            <motion.circle
              cx="400"
              cy="290"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="6"
              filter="url(#neon-glow-filter)"
              animate={{
                r: phase === 'cleanse' ? [20, 600] : 600,
                strokeWidth: phase === 'cleanse' ? [6, 0.1] : 0,
                opacity: phase === 'cleanse' ? [0.9, 0] : 0
              }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
            />
          </g>
        )}
      </svg>

      {/* ── 5. GLASSMORPHIC PROCESSOR BRACKET BACKPLATE (Phase 4) ── */}
      {(phase === 'reveal' || phase === 'idle') && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '82%',
            height: '42%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.015) 0%, rgba(255, 255, 255, 0.005) 100%)',
            backdropFilter: 'blur(20px) saturate(110%)',
            border: '1px solid rgba(255, 255, 255, 0.035)',
            borderRadius: '20px',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: '0 30px 100px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
          }}
        />
      )}

      {/* ── 6. MAJESTIC LOGO TYPOGRAPHY REVEAL (Phase 4) ── */}
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
        {/* Top small header tag */}
        {(phase === 'reveal' || phase === 'idle') && (
          <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              style={{
                color: '#e2e8f0',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.55em',
                display: 'block'
              }}
            >
              WORK BY
            </motion.span>
          </div>
        )}

        {/* Main letters grid */}
        <motion.div
          animate={(phase === 'reveal' || phase === 'idle') ? {
            letterSpacing: ['0.35em', '0.14em'],
          } : { letterSpacing: '0.35em' }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '8px',
            fontFamily: 'var(--font-heading), "Outfit", sans-serif',
            fontSize: '4.6rem',
            fontWeight: 800,
            color: '#ffffff',
            position: 'relative',
            paddingLeft: '0.14em'
          }}
        >
          {letters.map((letter, index) => {
            const isShown = phase === 'reveal' || phase === 'idle';
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15, scale: 0.94, filter: 'blur(8px)' }}
                animate={isShown ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  filter: 'blur(0px)'
                } : {}}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isShown ? 0.4 + (index * 0.12) : 0
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

          {/* Silver/light reflection sweep across the logo */}
          {(phase === 'reveal' || phase === 'idle') && (
            <motion.div
              initial={{ x: '-150%', skewX: -25 }}
              animate={{ x: '150%' }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                repeatDelay: 5.5,
                ease: 'easeInOut',
                delay: 2.5
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

        {/* Subtitle tag with reflection sheen */}
        {(phase === 'reveal' || phase === 'idle') && (
          <div style={{ position: 'relative', overflow: 'hidden', marginTop: '1.5rem' }}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 1.6 }}
              style={{
                color: '#cbd5e1',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.45em',
                textAlign: 'center',
                display: 'block',
                zIndex: 2,
                textShadow: '0 2px 6px rgba(0,0,0,0.6)'
              }}
            >
              Technology Infrastructure Partner
            </motion.span>
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 7,
                ease: 'linear',
                delay: 3.5
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

      {/* ── 7. OPTICAL CORE GLOW BEHIND LOGO (Phase 4) ── */}
      {(phase === 'reveal' || phase === 'idle') && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '350px',
            height: '140px',
            background: 'radial-gradient(circle, rgba(0, 168, 255, 0.12) 0%, transparent 70%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* ── 8. CINEMATIC AMBIENT EMBER DUST (Phase 4) ── */}
      {(phase === 'reveal' || phase === 'idle') && Array.from({ length: 30 }).map((_, idx) => {
        const size = Math.random() * 4.5 + 1.5;
        const initialX = Math.random() * 70 + 15;
        const initialY = Math.random() * 65 + 18;
        const speed = 6 + Math.random() * 6;
        return (
          <motion.div
            key={idx}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.55, 0.55, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: speed,
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
              backgroundColor: idx % 3 === 0 ? '#38bdf8' : '#00f0ff',
              boxShadow: '0 0 8px #00f0ff, 0 0 3px rgba(0,240,255,0.4)',
              pointerEvents: 'none',
              zIndex: 3
            }}
          />
        );
      })}

      {/* ── 9. HOLOGRAPHIC FRAME BRACKETS ── */}
      <div 
        style={{
          position: 'absolute',
          inset: '12px',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '16px',
          pointerEvents: 'none',
          zIndex: 3
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '18px', height: '18px', borderTop: '2.5px solid rgba(0, 240, 255, 0.5)', borderLeft: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '18px', height: '18px', borderTop: '2.5px solid rgba(0, 240, 255, 0.5)', borderRight: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '18px', height: '18px', borderBottom: '2.5px solid rgba(0, 240, 255, 0.5)', borderLeft: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '18px', height: '18px', borderBottom: '2.5px solid rgba(0, 240, 255, 0.5)', borderRight: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
      </div>
    </motion.div>
  );
}

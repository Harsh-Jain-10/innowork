import React from 'react';
import { motion } from 'framer-motion';

export default function HeroCinematicAnimation() {
  const circles = Array.from({ length: 20 });
  const orbitalNodes = Array.from({ length: 4 });

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        aspectRatio: '1/1',
        background: 'radial-gradient(circle at center, rgba(9, 97, 159, 0.04) 0%, transparent 70%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    >
      {/* Volumetric glow backdrop */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.9],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '80%',
          height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 255, 0.15) 0%, rgba(9, 97, 159, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 1
        }}
      />

      <svg
        viewBox="0 0 500 500"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 2
        }}
      >
        <defs>
          <linearGradient id="laser-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.6)" />
            <stop offset="50%" stopColor="rgba(9, 97, 159, 0.8)" />
            <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
          </linearGradient>

          <filter id="glow-effect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Blueprint Grid Overlay */}
        <g stroke="rgba(9, 97, 159, 0.04)" strokeWidth="0.75">
          {Array.from({ length: 11 }).map((_, i) => {
            const pos = i * 50;
            return (
              <React.Fragment key={i}>
                <line x1={pos} y1="0" x2={pos} y2="500" />
                <line x1="0" y1={pos} x2="500" y2={pos} />
              </React.Fragment>
            );
          })}
        </g>

        {/* Rotating Concentric Tech Rings */}
        <motion.circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="rgba(9, 97, 159, 0.08)"
          strokeWidth="1.5"
          strokeDasharray="10 30"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: '250px 250px' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        <motion.circle
          cx="250"
          cy="250"
          r="140"
          fill="none"
          stroke="rgba(0, 168, 255, 0.12)"
          strokeWidth="1"
          strokeDasharray="40 15 10 15"
          animate={{ rotate: -360 }}
          style={{ transformOrigin: '250px 250px' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <motion.circle
          cx="250"
          cy="250"
          r="90"
          fill="none"
          stroke="rgba(9, 97, 159, 0.06)"
          strokeWidth="2"
          strokeDasharray="2 6"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: '250px 250px' }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        {/* Central Rotating Technology Globe */}
        <g style={{ transformOrigin: '250px 250px' }}>
          {/* Longitude Ellipse 1 */}
          <motion.ellipse
            cx="250"
            cy="250"
            rx="90"
            ry="30"
            fill="none"
            stroke="rgba(0, 168, 255, 0.25)"
            strokeWidth="1"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: '250px 250px' }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          {/* Longitude Ellipse 2 */}
          <motion.ellipse
            cx="250"
            cy="250"
            rx="90"
            ry="30"
            fill="none"
            stroke="rgba(9, 97, 159, 0.2)"
            strokeWidth="1"
            animate={{ rotate: -360 }}
            style={{ transformOrigin: '250px 250px' }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
          {/* Latitude line */}
          <line x1="160" y1="250" x2="340" y2="250" stroke="rgba(9, 97, 159, 0.15)" strokeWidth="1" />
          <line x1="250" y1="160" x2="250" y2="340" stroke="rgba(9, 97, 159, 0.15)" strokeWidth="1" />
        </g>

        {/* Pulsing Core */}
        <motion.circle
          cx="250"
          cy="250"
          r="15"
          fill="url(#laser-glow)"
          filter="url(#glow-effect)"
          animate={{
            scale: [0.9, 1.25, 0.9],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Continuous Shockwave/Pulse Radar Ring */}
        <motion.circle
          cx="250"
          cy="250"
          r="15"
          fill="none"
          stroke="rgba(0, 240, 255, 0.4)"
          strokeWidth="1.5"
          animate={{
            r: [15, 220],
            opacity: [1, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* Diagonal Circuit Connection Lines */}
        <path d="M 40 40 L 180 180 M 460 40 L 320 180 M 40 460 L 180 320 M 460 460 L 320 320" fill="none" stroke="rgba(9, 97, 159, 0.08)" strokeWidth="1.25" />

        {/* Traveling Data Pulses along lines */}
        <motion.circle r="3" fill="#00f0ff" filter="url(#glow-effect)"
          animate={{ cx: [40, 180], cy: [40, 180], opacity: [0, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle r="3" fill="#00f0ff" filter="url(#glow-effect)"
          animate={{ cx: [460, 320], cy: [40, 180], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        <motion.circle r="3" fill="#00f0ff" filter="url(#glow-effect)"
          animate={{ cx: [40, 180], cy: [460, 320], opacity: [0, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
        />
        <motion.circle r="3" fill="#00f0ff" filter="url(#glow-effect)"
          animate={{ cx: [460, 320], cy: [460, 320], opacity: [0, 1, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'linear', delay: 1.8 }}
        />

        {/* Orbital nodes traveling in a circle */}
        {orbitalNodes.map((_, i) => {
          const startAngle = i * 90;
          return (
            <motion.circle
              key={i}
              r="4.5"
              fill="#00f0ff"
              filter="url(#glow-effect)"
              animate={{
                cx: Array.from({ length: 37 }).map((_, step) => {
                  const angle = ((startAngle + step * 10) * Math.PI) / 180;
                  return 250 + 140 * Math.cos(angle);
                }),
                cy: Array.from({ length: 37 }).map((_, step) => {
                  const angle = ((startAngle + step * 10) * Math.PI) / 180;
                  return 250 + 140 * Math.sin(angle);
                })
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
          );
        })}
      </svg>

      {/* Floating particles inside the panel */}
      {circles.map((_, i) => {
        const size = Math.random() * 3.5 + 1.5;
        const initialX = Math.random() * 80 + 10;
        const initialY = Math.random() * 80 + 10;
        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
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
              boxShadow: '0 0 6px #00f0ff',
              zIndex: 3
            }}
          />
        );
      })}
    </div>
  );
}

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   Shared Layout Helper
   All illustrations fit inside a 480x320 view box
  ────────────────────────────────────────────────────────────── */
const BASE = { width: '100%', height: '100%' };

function useMotion() {
  const reduced = useReducedMotion();
  return !reduced;
}

/* ─────────────────────────────────────────────────────────────
   1. Smart City Illustration (Civic Tech)
   Features modern skyline, wind turbine, solar panels, and routing arcs
  ────────────────────────────────────────────────────────────── */
export function SmartCityIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Smart City Architecture">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(2, 132, 199, 0.05)" />

      {/* Skyline silhouettes */}
      <rect x="70" y="160" width="45" height="120" rx="3" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="130" y="120" width="55" height="160" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      <rect x="290" y="140" width="50" height="140" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      <rect x="360" y="180" width="40" height="100" rx="3" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />

      {/* Central Smart Command Hub Tower */}
      <rect x="200" y="90" width="70" height="190" rx="4" fill="#f1f5f9" stroke="#0284c7" strokeWidth="2" />
      
      {/* Smart Command Hub Antenna */}
      <line x1="235" y1="90" x2="235" y2="60" stroke="#0284c7" strokeWidth="2" />
      <circle cx="235" cy="58" r="4" fill="#0d9488" />
      {animate && (
        <motion.circle cx="235" cy="58" r="14" fill="none" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1"
          animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Solar Panel details */}
      {!isMini && (
        <g transform="translate(80, 200)">
          <polygon points="0,20 30,20 25,40 5,40" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1" />
          <line x1="15" y1="20" x2="15" y2="40" stroke="#ffffff" strokeWidth="0.8" />
          <line x1="5" y1="30" x2="25" y2="30" stroke="#ffffff" strokeWidth="0.8" />
        </g>
      )}

      {/* Wind Turbine (Civic Green Energy) */}
      {!isMini && (
        <g transform="translate(320, 160)">
          <line x1="0" y1="0" x2="0" y2="80" stroke="#64748b" strokeWidth="2.5" />
          <motion.g
            animate={animate ? { rotate: 360 } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="0" cy="0" r="3.5" fill="#0d9488" />
            <path d="M0,0 L0,-35 L4,-35 Z" fill="#0d9488" />
            <path d="M0,0 L30,17 L28,21 Z" fill="#0d9488" />
            <path d="M0,0 L-30,17 L-28,21 Z" fill="#0d9488" />
          </motion.g>
        </g>
      )}

      {/* Grid Ground Line */}
      <line x1="40" y1="280" x2="440" y2="280" stroke="#94a3b8" strokeWidth="2.5" />

      {/* Connection Arcs */}
      {!isMini && (
        <g>
          <path d="M100,160 Q235,100 370,180" fill="none" stroke="rgba(2, 132, 199, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M150,120 Q235,130 310,140" fill="none" stroke="rgba(13, 148, 136, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. Telecom Illustration (Network Ops)
   Features a radio transmission tower, network waves, and core router
  ────────────────────────────────────────────────────────────── */
export function TelecomIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Telecom Network Architecture">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(79, 70, 229, 0.05)" />

      {/* Central Tower Stand */}
      <path d="M220,280 L235,120 L245,120 L260,280 Z" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
      <line x1="230" y1="200" x2="250" y2="200" stroke="#4f46e5" strokeWidth="1.5" />
      <line x1="233" y1="160" x2="247" y2="160" stroke="#4f46e5" strokeWidth="1.5" />
      <line x1="225" y1="240" x2="255" y2="240" stroke="#4f46e5" strokeWidth="1.5" />

      {/* Tower Head / Transmitter */}
      <circle cx="240" cy="115" r="7" fill="#4f46e5" />
      <circle cx="240" cy="115" r="3" fill="#818cf8" />

      {/* Radio Transmission Waves */}
      {[20, 36, 52, 68].map((radius, idx) => {
        if (isMini && idx > 1) return null;
        return (
          <motion.circle
            key={idx}
            cx="240"
            cy="115"
            r={radius}
            fill="none"
            stroke="rgba(79, 70, 229, 0.3)"
            strokeWidth="1.5"
            animate={animate ? {
              r: [radius, radius + 15, radius],
              opacity: [0.8, 0.2, 0.8]
            } : {}}
            transition={{ duration: 3, delay: idx * 0.4, repeat: Infinity }}
          />
        );
      })}

      {/* Base Server Cabinets (Subscribers/Routing nodes) */}
      {!isMini && (
        <g>
          {/* Router Node A */}
          <rect x="80" y="210" width="50" height="70" rx="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.5" />
          <circle cx="105" cy="225" r="3" fill="#818cf8" />
          <line x1="90" y1="245" x2="120" y2="245" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="90" y1="255" x2="120" y2="255" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="130" y1="245" x2="228" y2="200" stroke="rgba(79, 70, 229, 0.25)" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Router Node B */}
          <rect x="350" y="210" width="50" height="70" rx="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.5" />
          <circle cx="375" cy="225" r="3" fill="#818cf8" />
          <line x1="360" y1="245" x2="390" y2="245" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="360" y1="255" x2="390" y2="255" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="350" y1="245" x2="252" y2="200" stroke="rgba(79, 70, 229, 0.25)" strokeWidth="1.2" strokeDasharray="3 3" />
        </g>
      )}

      {/* Ground Line */}
      <line x1="40" y1="280" x2="440" y2="280" stroke="#94a3b8" strokeWidth="2.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. Healthcare Illustration (Clinical IT)
   Features a hospital cross inside medical shield and pulsing ECG wave
  ────────────────────────────────────────────────────────────── */
export function HealthcareIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Healthcare IT Architecture">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(5, 150, 105, 0.05)" />

      {/* Heartbeat ECG monitor line */}
      {!isMini && (
        <motion.path
          d="M60,160 L140,160 L155,110 L170,210 L185,150 L200,170 L215,160 L420,160"
          fill="none"
          stroke="rgba(5, 150, 105, 0.18)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={animate ? {
            strokeDasharray: ['20 40', '40 20', '20 40'],
            strokeDashoffset: [0, 60, 120]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Protective Shield */}
      <path
        d="M200,80 Q240,70 280,80 Q280,150 240,210 Q200,150 200,80 Z"
        fill="#ffffff"
        stroke="#059669"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Medical Cross */}
      <g transform="translate(240, 140)">
        <rect x="-6" y="-18" width="12" height="36" rx="2" fill="#34d399" />
        <rect x="-18" y="-6" width="36" height="12" rx="2" fill="#34d399" />
        {animate && (
          <motion.rect
            x="-6" y="-18" width="12" height="36" rx="2"
            fill="#059669"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </g>

      {/* Server & DR Monitoring Console */}
      {!isMini && (
        <g>
          {/* Uptime cabinet */}
          <rect x="50" y="210" width="80" height="50" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="65" cy="225" r="3.5" fill="#34d399" />
          <line x1="78" y1="225" x2="115" y2="225" stroke="#475569" strokeWidth="2.5" />
          <line x1="60" y1="242" x2="115" y2="242" stroke="#94a3b8" strokeWidth="2" />

          {/* DR Cabinet */}
          <rect x="350" y="210" width="80" height="50" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="365" cy="225" r="3.5" fill="#34d399" />
          <line x1="378" y1="225" x2="415" y2="225" stroke="#475569" strokeWidth="2.5" />
          <line x1="360" y1="242" x2="415" y2="242" stroke="#94a3b8" strokeWidth="2" />
        </g>
      )}

      {/* Ground Line */}
      <line x1="40" y1="280" x2="440" y2="280" stroke="#94a3b8" strokeWidth="2.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. Manufacturing Illustration (OT-IT Convergence)
   Features robotic arm, active gears, assembly line
  ────────────────────────────────────────────────────────────── */
export function ManufacturingIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Manufacturing & OT Infrastructure">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(217, 119, 6, 0.05)" />

      {/* Interlocking Gears */}
      <g transform={isMini ? "translate(240, 160) scale(1.3)" : "translate(150, 150)"}>
        {/* Gear A */}
        <motion.g
          animate={animate ? { rotate: 360 } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <circle cx="0" cy="0" r="30" fill="none" stroke="#d97706" strokeWidth="5" strokeDasharray="10 6" />
          <circle cx="0" cy="0" r="18" fill="none" stroke="#d97706" strokeWidth="2" />
          <circle cx="0" cy="0" r="5" fill="#d97706" />
        </motion.g>

        {/* Gear B */}
        {!isMini && (
          <motion.g
            transform="translate(48, 38)"
            animate={animate ? { rotate: -360 } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '0px 0px' }}
          >
            <circle cx="0" cy="0" r="22" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 5" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3.5" fill="#f59e0b" />
          </motion.g>
        )}
      </g>

      {/* Precision Robotic Arm */}
      {!isMini && (
        <g transform="translate(300, 130)">
          {/* Arm Base */}
          <rect x="40" y="90" width="40" height="60" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
          
          {/* Arm segments */}
          <motion.g
            animate={animate ? { rotate: [-10, 15, -10] } : {}}
            style={{ transformOrigin: '50px 100px' }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <line x1="50" y1="100" x2="20" y2="40" stroke="#d97706" strokeWidth="7" strokeLinecap="round" />
            
            <motion.g
              transform="translate(20, 40)"
              animate={animate ? { rotate: [15, -20, 15] } : {}}
              style={{ transformOrigin: '0px 0px' }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <line x1="0" y1="0" x2="-40" y2="20" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              {/* Welding Node spark */}
              <circle cx="-40" cy="20" r="4" fill="#d97706" />
              {animate && (
                <motion.circle cx="-40" cy="20" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5"
                  animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              )}
            </motion.g>
          </motion.g>
        </g>
      )}

      {/* Assembly line ground platform */}
      <line x1="40" y1="280" x2="440" y2="280" stroke="#94a3b8" strokeWidth="2.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. BFSI Illustration (Financial Security)
   Features high security bank vault door, locking pins, combination dial
  ────────────────────────────────────────────────────────────── */
export function BFSIIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Banking & Financial IT Security">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(15, 23, 42, 0.03)" />

      {/* Outer Vault Frame */}
      <rect x="150" y="70" width="180" height="180" rx="10" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
      <rect x="160" y="80" width="160" height="160" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Heavy Hinge Plate */}
      <rect x="140" y="100" width="15" height="120" rx="3" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />

      {/* Main vault door wheel (Combination lock) */}
      <g transform="translate(240, 160)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        <circle cx="0" cy="0" r="42" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" />

        {/* Rotatable wheel spokes */}
        <motion.g
          animate={animate ? { rotate: 360 } : {}}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <line x1="0" y1="-50" x2="0" y2="50" stroke="#1e293b" strokeWidth="3" />
          <line x1="-50" y1="0" x2="50" y2="0" stroke="#1e293b" strokeWidth="3" />
          <circle cx="0" cy="-50" r="6" fill="#b45309" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="0" cy="50" r="6" fill="#b45309" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="-50" cy="0" r="6" fill="#b45309" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="50" cy="0" r="6" fill="#b45309" stroke="#1e293b" strokeWidth="1.5" />
        </motion.g>

        {/* Central dial lock */}
        <circle cx="0" cy="0" r="16" fill="#b45309" stroke="#1e293b" strokeWidth="2" />
        <circle cx="0" cy="0" r="6" fill="#ffffff" />
      </g>

      {/* Left/Right Security Locking Bolts */}
      {!isMini && (
        <g>
          <rect x="325" y="105" width="20" height="12" rx="2" fill="#b45309" stroke="#1e293b" strokeWidth="1" />
          <rect x="325" y="154" width="20" height="12" rx="2" fill="#b45309" stroke="#1e293b" strokeWidth="1" />
          <rect x="325" y="203" width="20" height="12" rx="2" fill="#b45309" stroke="#1e293b" strokeWidth="1" />
        </g>
      )}

      {/* Security Status Tag */}
      {!isMini && (
        <g transform="translate(60, 135)">
          <rect x="0" y="0" width="70" height="50" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="15" cy="20" r="4" fill="#22c55e" />
          <line x1="30" y1="20" x2="58" y2="20" stroke="#475569" strokeWidth="2" />
          <line x1="12" y1="38" x2="58" y2="38" stroke="#94a3b8" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. Logistics Illustration (Supply Chain)
   Features parcel cargo, tracking routing lines, map marker pins
  ────────────────────────────────────────────────────────────── */
export function LogisticsIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Supply Chain & Logistics IT">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(124, 58, 237, 0.05)" />

      {/* Geometric Routing Maps Lines */}
      {!isMini && (
        <g>
          <path
            d="M80,180 L160,110 L240,210 L320,130 L400,200"
            fill="none"
            stroke="rgba(124, 58, 237, 0.2)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {animate && (
            <motion.path
              d="M80,180 L160,110 L240,210 L320,130 L400,200"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                strokeDasharray: ['15 35', '35 15', '15 35'],
                strokeDashoffset: [0, 50, 100]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </g>
      )}

      {/* Isometric Shipping Box (3D Package) */}
      <g transform={isMini ? "translate(240, 155) scale(1.3)" : "translate(240, 150)"}>
        {/* Left facet */}
        <polygon points="0,0 -40,-20 -40,20 0,40" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1" />
        {/* Right facet */}
        <polygon points="0,0 40,-20 40,20 0,40" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="1" />
        {/* Top facet */}
        <polygon points="0,0 -40,-20 0,-40 40,-20" fill="#c084fc" stroke="#a78bfa" strokeWidth="1" />
        {/* Tape strips */}
        <polygon points="0,-15 15,-23 0,-30 -15,-23" fill="#6d28d9" />
      </g>

      {/* Map location Pin drops */}
      {!isMini && (
        <g>
          {/* Pin 1 */}
          <g transform="translate(160, 110)">
            <path d="M0,0 C-6,-6 -10,-12 -10,-18 C-10,-24 -5,-28 0,-28 C5,-28 10,-24 10,-18 C10,-12 6,-6 0,0 Z" fill="#7c3aed" />
            <circle cx="0" cy="-18" r="3.5" fill="#ffffff" />
          </g>
          
          {/* Pin 2 */}
          <g transform="translate(320, 130)">
            <path d="M0,0 C-6,-6 -10,-12 -10,-18 C-10,-24 -5,-28 0,-28 C5,-28 10,-24 10,-18 C10,-12 6,-6 0,0 Z" fill="#7c3aed" />
            <circle cx="0" cy="-18" r="3.5" fill="#ffffff" />
          </g>
        </g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. Education Illustration (Campus Tech)
   Features open academic book, floating graduation cap
  ────────────────────────────────────────────────────────────── */
export function EducationIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Campus & Education IT">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(234, 88, 12, 0.05)" />

      {/* Open Hardcover Book */}
      <g transform="translate(240, 200)">
        {/* Book spine & cover */}
        <path d="M-100,20 L0,10 L100,20 L100,30 L0,20 L-100,30 Z" fill="#ea580c" />
        
        {/* Left Pages */}
        <path d="M-96,16 Q-48,2 0,10 L0,20 Q-48,12 -96,26 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        {/* Right Pages */}
        <path d="M96,16 Q48,2 0,10 L0,20 Q48,12 96,26 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      </g>

      {/* Floating Academic Graduation Cap */}
      <g transform={isMini ? "translate(240, 135) scale(1.2)" : "translate(240, 110)"}>
        <motion.g
          animate={animate ? { y: [-6, 6, -6] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Skull cap band */}
          <path d="M-25,5 L-25,18 Q0,26 25,18 L25,5 Z" fill="#ea580c" stroke="#475569" strokeWidth="1.5" />
          
          {/* Diamond top board */}
          <polygon points="0,-18 50,0 0,18 -50,0" fill="#f97316" stroke="#ea580c" strokeWidth="2.5" />
          
          {/* Tassel */}
          <path d="M0,0 L28,6 L28,24" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          <rect x="25" y="24" width="6" height="10" fill="#f97316" />
        </motion.g>
      </g>

      {/* Virtual Lab terminal overlay */}
      {!isMini && (
        <g transform="translate(340, 60)">
          <rect x="0" y="0" width="70" height="50" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3" fill="#ea580c" />
          <line x1="22" y1="12" x2="58" y2="12" stroke="#475569" strokeWidth="2.5" />
          <line x1="8" y1="28" x2="58" y2="28" stroke="#94a3b8" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. Government Illustration (Public Sector)
   Features classic temple facade, structural columns, scales emblem
  ────────────────────────────────────────────────────────────── */
export function GovernmentIllustration({ isHovered, isMini = false }) {
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Public Sector IT Architecture">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(30, 58, 138, 0.05)" />

      {/* Neoclassic Temple Building Façade */}
      <g transform={isMini ? "translate(240, 160) scale(0.9)" : "translate(240, 160)"}>
        {/* Triangular Pediment (Roof) */}
        <polygon points="0,-75 -110,-40 110,-40" fill="#ffffff" stroke="#1e3a8a" strokeWidth="3" />
        <polygon points="0,-65 -90,-38 90,-38" fill="#60a5fa" opacity="0.3" />

        {/* Entablature (Horizontal architrave beam) */}
        <rect x="-100" y="-40" width="200" height="18" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2.5" />

        {/* Structural Columns */}
        {/* Column 1 (Left) */}
        <rect x="-80" y="-22" width="18" height="85" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2.5" />
        {/* Column 2 (Inner Left) */}
        <rect x="-35" y="-22" width="18" height="85" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2.5" />
        {/* Column 3 (Inner Right) */}
        <rect x="17" y="-22" width="18" height="85" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2.5" />
        {/* Column 4 (Right) */}
        <rect x="62" y="-22" width="18" height="85" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2.5" />

        {/* High-quality Columns Pedestal foundation steps */}
        <rect x="-110" y="63" width="220" height="15" rx="2" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2.5" />
        <rect x="-120" y="78" width="240" height="15" rx="3" fill="#1e3a8a" />
      </g>

      {/* Scale of Justice emblem in central gap */}
      {!isMini && (
        <g transform="translate(240, 150) scale(0.75)">
          <line x1="0" y1="-20" x2="0" y2="35" stroke="#60a5fa" strokeWidth="3" />
          <line x1="-30" y1="-10" x2="30" y2="-10" stroke="#60a5fa" strokeWidth="3" />
          {/* Left pan */}
          <line x1="-30" y1="-10" x2="-30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M-42,15 Q-30,28 -18,15 Z" fill="#60a5fa" />
          {/* Right pan */}
          <line x1="30" y1="-10" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M18,15 Q30,28 42,15 Z" fill="#60a5fa" />
        </g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. Media Illustration (CDN & Streaming)
   Features media play button inside film canister and media wave streams
  ────────────────────────────────────────────────────────────── */
export function MediaIllustration({ isHovered, isMini = false }) {
  const animate = useMotion() && !isMini;
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Media Streaming & CDN">
      {/* Background soft glow */}
      <circle cx="240" cy="160" r="130" fill="rgba(219, 39, 119, 0.05)" />

      {/* Glowing Multimedia streaming waves */}
      {!isMini && (
        <g>
          <path
            d="M50,200 Q140,90 240,160 T430,120"
            fill="none"
            stroke="rgba(219, 39, 119, 0.2)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {animate && (
            <motion.path
              d="M50,200 Q140,90 240,160 T430,120"
              fill="none"
              stroke="#f472b6"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{
                strokeDasharray: ['20 40', '40 20', '20 40'],
                strokeDashoffset: [0, -60, -120]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </g>
      )}

      {/* Film reel structure */}
      <g transform={isMini ? "translate(240, 160) scale(1.3)" : "translate(240, 160)"}>
        <circle cx="0" cy="0" r="54" fill="#ffffff" stroke="#db2777" strokeWidth="3" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#f472b6" strokeWidth="1" strokeDasharray="4 6" />

        {/* Rotatable Film Reel openings */}
        <motion.g
          animate={animate ? { rotate: -360 } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '0px 0px' }}
        >
          <circle cx="0" cy="-28" r="9" fill="rgba(219, 39, 119, 0.15)" stroke="#db2777" strokeWidth="1.5" />
          <circle cx="24" cy="14" r="9" fill="rgba(219, 39, 119, 0.15)" stroke="#db2777" strokeWidth="1.5" />
          <circle cx="-24" cy="14" r="9" fill="rgba(219, 39, 119, 0.15)" stroke="#db2777" strokeWidth="1.5" />
        </motion.g>

        {/* Central Triangle Media Play symbol */}
        <polygon points="-8,-14 16,0 -8,14" fill="#db2777" stroke="#db2777" strokeWidth="2.5" strokeLinejoin="round" />
      </g>

      {/* Edge CDN nodes */}
      {!isMini && (
        <g>
          {/* Storage node A */}
          <rect x="50" y="70" width="70" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="65" cy="85" r="3.5" fill="#db2777" />
          <line x1="78" y1="85" x2="105" y2="85" stroke="#475569" strokeWidth="2" />
          <line x1="60" y1="98" x2="105" y2="98" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Storage node B */}
          <rect x="360" y="210" width="70" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="375" cy="225" r="3.5" fill="#db2777" />
          <line x1="388" y1="225" x2="415" y2="225" stroke="#475569" strokeWidth="2" />
          <line x1="370" y1="238" x2="415" y2="238" stroke="#94a3b8" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

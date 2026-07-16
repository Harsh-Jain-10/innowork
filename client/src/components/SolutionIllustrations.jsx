import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BASE_STYLE = { width: '100%', height: '100%', display: 'block' };

function useIllustrationMotion() {
  const reduced = useReducedMotion();
  return !reduced;
}

// ─── 1. SMART CITY ───
export function SmartCityIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Smart City Infrastructure Visual">
      <defs>
        <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(9,97,159,0.05)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0.01)" />
        </linearGradient>
        <radialGradient id="sc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.15)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>
      
      {/* Background glow */}
      <circle cx="250" cy="180" r="150" fill="url(#sc-glow)" />

      {/* Grid backdrop */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h-${i}`} x1="50" y1={60 + i * 30} x2="450" y2={60 + i * 30} stroke="rgba(9,97,159,0.05)" strokeWidth="1" />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`v-${i}`} x1={50 + i * 40} y1="60" x2={50 + i * 40} y2="300" stroke="rgba(9,97,159,0.05)" strokeWidth="1" />
      ))}

      {/* Connected Buildings Skyline */}
      <rect x="70" y="190" width="40" height="110" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <rect x="120" y="140" width="55" height="160" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
      <rect x="190" y="100" width="60" height="200" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.4)" strokeWidth="2" />
      <rect x="265" y="150" width="50" height="150" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
      <rect x="330" y="170" width="45" height="130" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <rect x="390" y="210" width="40" height="90" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />

      {/* City window grids */}
      {[0, 1, 2].map(row => (
        <g key={row}>
          <rect x="202" y={120 + row * 25} width="12" height="12" rx="1" fill="rgba(9,97,159,0.08)" />
          <rect x="222" y={120 + row * 25} width="12" height="12" rx="1" fill="rgba(9,97,159,0.08)" />
          <rect x="132" y={160 + row * 25} width="10" height="10" rx="1" fill="rgba(9,97,159,0.08)" />
          <rect x="277" y={170 + row * 25} width="10" height="10" rx="1" fill="rgba(9,97,159,0.08)" />
        </g>
      ))}

      {/* Main ground line */}
      <line x1="40" y1="300" x2="460" y2="300" stroke="rgba(9,97,159,0.3)" strokeWidth="2.5" />

      {/* Traffic lines on ground */}
      <motion.line
        x1="50" y1="305" x2="450" y2="305"
        stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" strokeDasharray="6 6"
        animate={run ? { strokeDashoffset: -20 } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Tower transmitter & beacon */}
      <line x1="220" y1="100" x2="220" y2="60" stroke="rgba(9,97,159,0.5)" strokeWidth="2" />
      <motion.circle
        cx="220" cy="60" r="4" fill="rgba(9,97,159,0.85)"
        animate={run ? { scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="220" cy="60" r="16" fill="none" stroke="rgba(9,97,159,0.25)" strokeWidth="1"
        animate={run ? { r: [16, 40, 16], opacity: [0.4, 0, 0.4] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* IoT Sensors & Communication links */}
      {[
        { cx: 90, cy: 190 },
        { cx: 147, cy: 140 },
        { cx: 290, cy: 150 },
        { cx: 352, cy: 170 },
      ].map((node, idx) => (
        <g key={idx}>
          {/* Pulsing signal link from main tower to building nodes */}
          <motion.line
            x1="220" y1="60" x2={node.cx} y2={node.cy}
            stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" strokeDasharray="4 4"
            animate={run ? { strokeDashoffset: [0, 16] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <circle cx={node.cx} cy={node.cy} r="4" fill="#ffffff" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5" />
          <motion.circle
            cx={node.cx} cy={node.cy} r="8" fill="none" stroke="rgba(9,97,159,0.3)" strokeWidth="1"
            animate={run ? { r: [8, 16, 8], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2.5, delay: idx * 0.4, repeat: Infinity }}
          />
        </g>
      ))}
    </svg>
  );
}

// ─── 2. NOC SOLUTION ───
export function NOCIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Network Operations Center Visual">
      <defs>
        <radialGradient id="noc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>
      
      <circle cx="250" cy="180" r="160" fill="url(#noc-glow)" />

      {/* Blueprint background grid */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1="40" y1={40 + i * 35} x2="460" y2={40 + i * 35} stroke="rgba(9,97,159,0.04)" strokeWidth="1" />
      ))}

      {/* Main Monitoring Screen console */}
      <rect x="70" y="60" width="360" height="180" rx="8" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="2" />
      
      {/* Dynamic Graph lines inside NOC screen */}
      <rect x="85" y="75" width="160" height="80" rx="4" fill="rgba(9,97,159,0.02)" stroke="rgba(9,97,159,0.12)" />
      <motion.path
        d="M 90 130 Q 120 90 150 110 T 210 90 T 240 120"
        fill="none" stroke="rgba(9,97,159,0.6)" strokeWidth="2"
        animate={run ? { d: [
          "M 90 130 Q 120 90 150 110 T 210 90 T 240 120",
          "M 90 120 Q 120 110 150 90 T 210 120 T 240 100",
          "M 90 130 Q 120 90 150 110 T 210 90 T 240 120"
        ]} : {}}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid status matrix representing server clusters */}
      <rect x="260" y="75" width="155" height="80" rx="4" fill="rgba(9,97,159,0.02)" stroke="rgba(9,97,159,0.12)" />
      {Array.from({ length: 3 }).map((row, rIdx) => (
        Array.from({ length: 5 }).map((col, cIdx) => (
          <motion.circle
            key={`${rIdx}-${cIdx}`}
            cx={280 + cIdx * 28} cy={95 + rIdx * 22} r="5"
            fill={rIdx === 1 && cIdx === 3 ? 'rgba(239, 68, 68, 0.7)' : 'rgba(9,97,159,0.5)'}
            animate={run ? { opacity: [0.6, 1, 0.6] } : {}}
            transition={{ duration: 1.5, delay: (rIdx + cIdx) * 0.15, repeat: Infinity }}
          />
        ))
      ))}

      {/* Lower Dashboard stats bar */}
      <rect x="85" y="170" width="330" height="55" rx="4" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
      
      {/* Blinking alarm alerts */}
      <g transform="translate(100, 185)">
        <circle cx="10" cy="12" r="6" fill="rgba(9,97,159,0.6)" />
        <motion.circle cx="10" cy="12" r="10" fill="none" stroke="rgba(9,97,159,0.3)" strokeWidth="1"
          animate={run ? { r: [10, 18, 10], opacity: [0.5, 0, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="30" y="16" fontSize="10" fill="rgba(9,97,159,0.8)" fontFamily="monospace" fontWeight="600">NOC ACTIVE</text>
      </g>
      
      <g transform="translate(290, 185)">
        <circle cx="10" cy="12" r="6" fill="rgba(16,185,129,0.7)" />
        <text x="25" y="16" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600">Uptime: 99.98%</text>
      </g>

      {/* Desk and terminal base */}
      <path d="M50 300 L120 260 L380 260 L450 300 Z" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="2.5" />
      <line x1="120" y1="260" x2="120" y2="330" stroke="rgba(9,97,159,0.25)" strokeWidth="2" />
      <line x1="380" y1="260" x2="380" y2="330" stroke="rgba(9,97,159,0.25)" strokeWidth="2" />
    </svg>
  );
}

// ─── 3. TRAINING & LEARNING ───
export function TrainingIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Professional IT Training & Learning Visual">
      <defs>
        <radialGradient id="tr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>
      
      <circle cx="250" cy="180" r="150" fill="url(#tr-glow)" />

      {/* Central Knowledge Node */}
      <circle cx="250" cy="160" r="28" fill="#ffffff" stroke="rgba(9,97,159,0.5)" strokeWidth="2" />
      <path d="M 240 160 L 250 150 L 260 160 L 250 170 Z" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.7)" strokeWidth="1.5" />

      {/* Outer Satellite Knowledge Hubs */}
      {[
        { x: 130, y: 100, label: 'Cloud' },
        { x: 370, y: 100, label: 'DevOps' },
        { x: 130, y: 220, label: 'Linux' },
        { x: 370, y: 220, label: 'Security' },
      ].map((sat, idx) => (
        <g key={idx}>
          {/* Main Connector lines */}
          <line x1="250" y1="160" x2={sat.x} y2={sat.y} stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
          
          {/* Pulsing signal on lines */}
          <motion.circle
            cx={sat.x} cy={sat.y} r="20" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5"
            whileHover={{ scale: 1.1 }}
          />
          <circle cx={sat.x} cy={sat.y} r="4" fill="rgba(9,97,159,0.8)" />
          
          <text x={sat.x} y={sat.y + 35} textAnchor="middle" fontSize="10" fill="rgba(30,40,60,0.7)" fontFamily="monospace" fontWeight="600">
            {sat.label}
          </text>

          {/* Animated data pulses flowing from hubs to center */}
          <motion.circle
            cx={sat.x} cy={sat.y} r="3" fill="rgba(9,97,159,0.7)"
            animate={run ? { cx: [sat.x, 250], cy: [sat.y, 160] } : {}}
            transition={{ duration: 3, delay: idx * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      ))}

      {/* Orbit paths */}
      <circle cx="250" cy="160" r="90" fill="none" stroke="rgba(9,97,159,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
      <motion.circle
        cx="250" cy="160" r="90" fill="none" stroke="rgba(9,97,159,0.2)" strokeWidth="1" strokeDasharray="8 8"
        animate={run ? { rotate: 360 } : {}}
        style={{ transformOrigin: '250px 160px' }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

// ─── 4. AUTOMATION & AI ───
export function AutomationIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Automation & Artificial Intelligence Visual">
      <defs>
        <radialGradient id="auto-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.15)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="150" fill="url(#auto-glow)" />

      {/* Automation gear assemblies */}
      <g transform="translate(180, 150)">
        <motion.path
          d="M 0 -25 L 5 -25 L 8 -15 L 15 -18 L 18 -12 L 10 -6 L 15 3 L 10 9 L 2 5 L -5 10 L -9 4 L -4 -4 L -9 -11 L -5 -16 Z"
          fill="none" stroke="rgba(9,97,159,0.4)" strokeWidth="2"
          animate={run ? { rotate: 360 } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(9,97,159,0.3)" />
      </g>

      <g transform="translate(255, 195)">
        <motion.path
          d="M 0 -35 L 7 -35 L 11 -21 L 21 -25 L 25 -17 L 14 -8 L 21 4 L 14 13 L 3 7 L -7 14 L -13 6 L -6 -6 L -13 -15 L -7 -22 Z"
          fill="none" stroke="rgba(9,97,159,0.5)" strokeWidth="2.5"
          animate={run ? { rotate: -360 } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(9,97,159,0.4)" />
      </g>

      {/* Artificial Intelligence Neural Matrix */}
      {/* Node cluster */}
      {[
        { cx: 330, cy: 90 },
        { cx: 380, cy: 110 },
        { cx: 350, cy: 150 },
        { cx: 410, cy: 150 },
        { cx: 370, cy: 190 },
      ].map((n, idx) => (
        <g key={idx}>
          <circle cx={n.cx} cy={n.cy} r="6" fill="#ffffff" stroke="rgba(9,97,159,0.6)" strokeWidth="2" />
          <motion.circle cx={n.cx} cy={n.cy} r="10" fill="none" stroke="rgba(9,97,159,0.3)" strokeWidth="1"
            animate={run ? { scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2, delay: idx * 0.4, repeat: Infinity }}
          />
        </g>
      ))}

      {/* Connection paths inside Neural matrix */}
      <line x1="330" y1="90" x2="380" y2="110" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <line x1="330" y1="90" x2="350" y2="150" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <line x1="380" y1="110" x2="350" y2="150" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <line x1="380" y1="110" x2="410" y2="150" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <line x1="350" y1="150" x2="410" y2="150" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <line x1="350" y1="150" x2="370" y2="190" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
      <line x1="410" y1="150" x2="370" y2="190" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />

      {/* Flowing pipelines representing Automation workflow */}
      <path d="M 80 240 Q 150 260 255 195" fill="none" stroke="rgba(9,97,159,0.2)" strokeWidth="4" />
      <motion.path
        d="M 80 240 Q 150 260 255 195" fill="none" stroke="rgba(56,189,248,0.7)" strokeWidth="2.5" strokeDasharray="10 15"
        animate={run ? { strokeDashoffset: 50 } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

// ─── 5. BUSINESS CONTINUITY ───
export function BusinessContinuityIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Business Continuity & Disaster Recovery Visual">
      <defs>
        <radialGradient id="bc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="160" fill="url(#bc-glow)" />

      {/* Datacenter Site A (Primary) */}
      <g transform="translate(100, 120)">
        <rect x="0" y="0" width="80" height="120" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
        <rect x="10" y="15" width="60" height="20" rx="2" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
        <rect x="10" y="45" width="60" height="20" rx="2" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
        <rect x="10" y="75" width="60" height="20" rx="2" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
        {/* LED Indicators */}
        <circle cx="20" cy="25" r="2" fill="rgba(16,185,129,0.8)" />
        <circle cx="20" cy="55" r="2" fill="rgba(16,185,129,0.8)" />
        <circle cx="20" cy="85" r="2" fill="rgba(16,185,129,0.8)" />
        <text x="40" y="135" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">PRIMARY DC</text>
      </g>

      {/* Datacenter Site B (Secondary / DR) */}
      <g transform="translate(320, 120)">
        <rect x="0" y="0" width="80" height="120" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
        <rect x="10" y="15" width="60" height="20" rx="2" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
        <rect x="10" y="45" width="60" height="20" rx="2" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
        <rect x="10" y="75" width="60" height="20" rx="2" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.15)" />
        {/* DR LED Indicators */}
        <circle cx="20" cy="25" r="2" fill="rgba(9,97,159,0.5)" />
        <circle cx="20" cy="55" r="2" fill="rgba(9,97,159,0.5)" />
        <circle cx="20" cy="85" r="2" fill="rgba(9,97,159,0.5)" />
        <text x="40" y="135" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">DISASTER REC</text>
      </g>

      {/* Active Sync replication channel */}
      <path d="M 190 160 Q 250 120 310 160" fill="none" stroke="rgba(9,97,159,0.18)" strokeWidth="3" />
      <motion.path
        d="M 190 160 Q 250 120 310 160" fill="none" stroke="rgba(9,97,159,0.7)" strokeWidth="2.5" strokeDasharray="8 8"
        animate={run ? { strokeDashoffset: -20 } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      <path d="M 310 200 Q 250 240 190 200" fill="none" stroke="rgba(9,97,159,0.18)" strokeWidth="3" />
      <motion.path
        d="M 310 200 Q 250 240 190 200" fill="none" stroke="rgba(9,97,159,0.7)" strokeWidth="2.5" strokeDasharray="8 8"
        animate={run ? { strokeDashoffset: 20 } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sync Status Badge */}
      <rect x="205" y="165" width="90" height="25" rx="12" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
      <circle cx="218" cy="177" r="4" fill="rgba(16,185,129,0.8)" />
      <text x="228" y="181" fontSize="9" fill="rgba(9,97,159,0.85)" fontFamily="monospace" fontWeight="600">REPLICATING</text>
    </svg>
  );
}

// ─── 6. CLOUD SOLUTIONS ───
export function CloudIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Hybrid Cloud Solutions Visual">
      <defs>
        <radialGradient id="cloud-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.15)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="150" fill="url(#cloud-glow)" />

      {/* Central Cloud Node */}
      <g transform="translate(190, 100)">
        <rect x="0" y="20" width="120" height="60" rx="30" fill="#ffffff" stroke="rgba(9,97,159,0.4)" strokeWidth="2.5" />
        <circle cx="40" cy="30" r="30" fill="#ffffff" stroke="rgba(9,97,159,0.4)" strokeWidth="2.5" />
        <circle cx="80" cy="30" r="30" fill="#ffffff" stroke="rgba(9,97,159,0.4)" strokeWidth="2.5" />
        {/* Inner fill to hide overlap lines */}
        <rect x="1" y="21" width="118" height="58" rx="29" fill="#ffffff" />
        <circle cx="40" cy="30" r="28" fill="#ffffff" />
        <circle cx="80" cy="30" r="28" fill="#ffffff" />
        
        <text x="60" y="55" fontSize="12" fill="rgba(9,97,159,0.85)" fontFamily="monospace" fontWeight="700" textAnchor="middle">HYBRID CLOUD</text>
      </g>

      {/* Bottom On-Prem Datacenter */}
      <g transform="translate(200, 240)">
        <rect x="0" y="0" width="100" height="60" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
        <line x1="10" y1="20" x2="90" y2="20" stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />
        <line x1="10" y1="40" x2="90" y2="40" stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />
        <circle cx="15" cy="20" r="2" fill="rgba(9,97,159,0.7)" />
        <circle cx="15" cy="40" r="2" fill="rgba(9,97,159,0.7)" />
        <text x="50" y="75" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">ON-PREMISE</text>
      </g>

      {/* Left & Right Satellite Regions */}
      <g transform="translate(80, 160)">
        <circle cx="20" cy="20" r="20" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
        <text x="20" y="24" fontSize="8" fill="rgba(9,97,159,0.7)" fontFamily="monospace" fontWeight="600" textAnchor="middle">AWS</text>
      </g>

      <g transform="translate(380, 160)">
        <circle cx="20" cy="20" r="20" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
        <text x="20" y="24" fontSize="8" fill="rgba(9,97,159,0.7)" fontFamily="monospace" fontWeight="600" textAnchor="middle">AZURE</text>
      </g>

      {/* Sync links with flowing packet dots */}
      <line x1="250" y1="162" x2="250" y2="240" stroke="rgba(9,97,159,0.2)" strokeWidth="2" strokeDasharray="4 4" />
      <motion.circle cx="250" cy="200" r="4" fill="rgba(9,97,159,0.85)"
        animate={run ? { cy: [162, 240] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      <line x1="120" y1="175" x2="190" y2="150" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
      <line x1="380" y1="175" x2="310" y2="150" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
    </svg>
  );
}

// ─── 7. DC INFRASTRUCTURE ───
export function DCInfrastructureIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Datacenter IT Infrastructure Visual">
      <defs>
        <radialGradient id="dc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="160" fill="url(#dc-glow)" />

      {/* Blade Chassis Server Racks */}
      <g transform="translate(150, 70)">
        <rect x="0" y="0" width="200" height="220" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="2" />
        
        {/* Rack units */}
        {[0, 1, 2, 3].map(unit => (
          <g key={unit} transform={`translate(10, ${15 + unit * 48})`}>
            <rect x="0" y="0" width="180" height="38" rx="3" fill="rgba(9,97,159,0.03)" stroke="rgba(9,97,159,0.15)" strokeWidth="1" />
            
            {/* Server details */}
            <line x1="15" y1="19" x2="100" y2="19" stroke="rgba(9,97,159,0.2)" strokeWidth="2" />
            <circle cx="120" cy="19" r="3" fill="rgba(16,185,129,0.7)" />
            <circle cx="135" cy="19" r="3" fill="rgba(9,97,159,0.5)" />
            
            {/* Blinking slot LEDs */}
            <motion.circle cx="155" cy="19" r="2.5" fill="rgba(9,97,159,0.8)"
              animate={run ? { opacity: [0.3, 1, 0.3] } : {}}
              transition={{ duration: 1, delay: unit * 0.25, repeat: Infinity }}
            />
            <motion.circle cx="168" cy="19" r="2.5" fill="rgba(16,185,129,0.8)"
              animate={run ? { opacity: [1, 0.2, 1] } : {}}
              transition={{ duration: 1.2, delay: unit * 0.15, repeat: Infinity }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

// ─── 8. DC NON-IT ───
export function DCNonITIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Datacenter Non-IT Facility Visual">
      <defs>
        <radialGradient id="nit-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="150" fill="url(#nit-glow)" />

      {/* Cooling Fan Unit (HVAC) */}
      <g transform="translate(120, 120)">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="2" />
        <circle cx="50" cy="50" r="12" fill="#ffffff" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5" />
        
        {/* Fan blades */}
        <motion.g
          animate={run ? { rotate: 360 } : {}}
          style={{ transformOrigin: '50px 50px' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <path d="M 50 12 L 45 38 L 55 38 Z" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" />
          <path d="M 50 88 L 45 62 L 55 62 Z" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" />
          <path d="M 12 50 L 38 45 L 38 55 Z" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" />
          <path d="M 88 50 L 62 45 L 62 55 Z" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" />
        </motion.g>
        <text x="50" y="115" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">PRECISION COOLING</text>
      </g>

      {/* Power Monitoring Panel (UPS) */}
      <g transform="translate(280, 100)">
        <rect x="0" y="0" width="110" height="140" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
        <rect x="15" y="15" width="80" height="35" rx="2" fill="rgba(9,97,159,0.03)" stroke="rgba(9,97,159,0.15)" />
        
        {/* Grid volt line */}
        <path d="M 20 32 L 35 32 L 42 22 L 50 42 L 58 28 L 65 32 L 90 32" fill="none" stroke="rgba(16,185,129,0.7)" strokeWidth="2" />
        
        {/* Digital metrics */}
        <line x1="15" y1="70" x2="80" y2="70" stroke="rgba(9,97,159,0.2)" strokeWidth="3" />
        <line x1="15" y1="90" x2="60" y2="90" stroke="rgba(9,97,159,0.2)" strokeWidth="3" />
        
        <circle cx="20" cy="115" r="4" fill="rgba(16,185,129,0.8)" />
        <text x="32" y="118" fontSize="8" fill="rgba(9,97,159,0.85)" fontFamily="monospace" fontWeight="600">UPS ONLINE</text>
        <text x="55" y="155" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">POWER MATRIX</text>
      </g>
    </svg>
  );
}

// ─── 9. DATA BACKUP & RECOVERY ───
export function BackupIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Data Backup & Recovery Services Visual">
      <defs>
        <radialGradient id="bk-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="150" fill="url(#bk-glow)" />

      {/* Layered Storage snapshots stack */}
      <g transform="translate(175, 110)">
        {/* Layer 3 */}
        <path d="M 0 60 L 75 30 L 150 60 L 75 90 Z" fill="#ffffff" stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />
        <path d="M 0 60 L 0 75 L 75 105 L 150 75 L 150 60 Z" fill="rgba(9,97,159,0.03)" stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />

        {/* Layer 2 */}
        <g transform="translate(0, -30)">
          <path d="M 0 60 L 75 30 L 150 60 L 75 90 Z" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
          <path d="M 0 60 L 0 75 L 75 105 L 150 75 L 150 60 Z" fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
        </g>

        {/* Layer 1 (Top Snapshot) */}
        <g transform="translate(0, -60)">
          <path d="M 0 60 L 75 30 L 150 60 L 75 90 Z" fill="#ffffff" stroke="rgba(9,97,159,0.45)" strokeWidth="2" />
          <path d="M 0 60 L 0 75 L 75 105 L 150 75 L 150 60 Z" fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.45)" strokeWidth="2" />
          {/* Data storage symbols on top stack */}
          <circle cx="75" cy="60" r="10" fill="none" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5" />
          <line x1="75" y1="55" x2="75" y2="65" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5" />
          <line x1="70" y1="60" x2="80" y2="60" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5" />
        </g>
      </g>

      {/* Rotating Sync arrows indicating Backup schedule */}
      <motion.path
        d="M 120 180 A 100 100 0 0 1 380 180"
        fill="none" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" strokeDasharray="6 6"
        animate={run ? { rotate: 360 } : {}}
        style={{ transformOrigin: '250px 180px' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <motion.path
        d="M 380 180 A 100 100 0 0 1 120 180"
        fill="none" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" strokeDasharray="6 6"
        animate={run ? { rotate: 360 } : {}}
        style={{ transformOrigin: '250px 180px' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

// ─── 10. DATACENTER TRANSFORMATION ───
export function DCTransformationIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Datacenter Transformation Visual">
      <defs>
        <radialGradient id="trans-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="160" fill="url(#trans-glow)" />

      {/* Legacy Physical Server Rack (Left) */}
      <g transform="translate(80, 100)">
        <rect x="0" y="0" width="90" height="150" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
        <line x1="10" y1="30" x2="80" y2="30" stroke="rgba(30,40,60,0.2)" strokeWidth="2.5" />
        <line x1="10" y1="60" x2="80" y2="60" stroke="rgba(30,40,60,0.2)" strokeWidth="2.5" />
        <line x1="10" y1="90" x2="80" y2="90" stroke="rgba(30,40,60,0.2)" strokeWidth="2.5" />
        <line x1="10" y1="120" x2="80" y2="120" stroke="rgba(30,40,60,0.2)" strokeWidth="2.5" />
        <circle cx="20" cy="30" r="1.5" fill="rgba(239, 68, 68, 0.7)" />
        <circle cx="20" cy="90" r="1.5" fill="rgba(239, 68, 68, 0.7)" />
        <text x="45" y="165" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">LEGACY HW</text>
      </g>

      {/* Transition indicator lines */}
      <g transform="translate(190, 155)">
        <path d="M 0 20 L 100 20" fill="none" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" strokeDasharray="4 4" />
        <motion.path
          d="M 0 20 L 100 20" fill="none" stroke="rgba(9,97,159,0.7)" strokeWidth="2.5" strokeDasharray="4 4"
          animate={run ? { strokeDashoffset: -16 } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </g>

      {/* Software-Defined Cloud Rack (Right) */}
      <g transform="translate(310, 100)">
        <rect x="0" y="0" width="110" height="150" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.45)" strokeWidth="2.2" />
        
        {/* Hypervisor Virtual containers grid */}
        {Array.from({ length: 3 }).map((row, rIdx) => (
          Array.from({ length: 3 }).map((col, cIdx) => (
            <motion.rect
              key={`${rIdx}-${cIdx}`}
              x={15 + cIdx * 28} y={20 + rIdx * 35} width="22" height="22" rx="2"
              fill="rgba(9,97,159,0.05)" stroke="rgba(9,97,159,0.3)" strokeWidth="1"
              animate={run ? { fill: ['rgba(9,97,159,0.05)', 'rgba(9,97,159,0.18)', 'rgba(9,97,159,0.05)'] } : {}}
              transition={{ duration: 2, delay: (rIdx + cIdx) * 0.3, repeat: Infinity }}
            />
          ))
        ))}
        <text x="55" y="165" fontSize="10" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="600" textAnchor="middle">SDDC CLOUD</text>
      </g>
    </svg>
  );
}

// ─── 11. DIGITAL INFRASTRUCTURE ───
export function DigitalInfrastructureIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Digital Infrastructure backbone Visual">
      <defs>
        <radialGradient id="dig-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="150" fill="url(#dig-glow)" />

      {/* Network route connection points representing Fiber/WAN backbone */}
      {[
        { x: 100, y: 120, label: 'Node A' },
        { x: 230, y: 80,  label: 'Node B' },
        { x: 380, y: 140, label: 'Node C' },
        { x: 180, y: 220, label: 'Node D' },
        { x: 320, y: 240, label: 'Node E' },
      ].map((pt, idx) => (
        <g key={idx}>
          <circle cx={pt.x} cy={pt.y} r="6" fill="#ffffff" stroke="rgba(9,97,159,0.65)" strokeWidth="2" />
          <text x={pt.x} y={pt.y - 12} fontSize="9" fill="rgba(30,40,60,0.5)" fontFamily="monospace" fontWeight="600" textAnchor="middle">
            {pt.label}
          </text>
        </g>
      ))}

      {/* High-speed optic fiber connection lines */}
      <line x1="100" y1="120" x2="230" y2="80" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" />
      <line x1="230" y1="80" x2="380" y2="140" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" />
      <line x1="100" y1="120" x2="180" y2="220" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" />
      <line x1="180" y1="220" x2="320" y2="240" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" />
      <line x1="320" y1="240" x2="380" y2="140" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" />
      <line x1="230" y1="80" x2="320" y2="240" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />

      {/* Optic light signal pulses traveling between nodes */}
      <motion.circle cx="100" cy="120" r="4" fill="rgba(9,97,159,0.85)"
        animate={run ? { cx: [100, 230], cy: [120, 80] } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.circle cx="230" cy="80" r="4" fill="rgba(9,97,159,0.85)"
        animate={run ? { cx: [230, 380], cy: [80, 140] } : {}}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.circle cx="180" cy="220" r="4" fill="rgba(9,97,159,0.85)"
        animate={run ? { cx: [180, 320], cy: [220, 240] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

// ─── 12. ENTERPRISE MANAGEMENT ───
export function EnterpriseManagementIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Enterprise Management Console Visual">
      <defs>
        <radialGradient id="em-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="150" fill="url(#em-glow)" />

      {/* Command Control dashboard interface */}
      <rect x="80" y="70" width="340" height="200" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="2" />
      
      {/* Sidebar navigation line */}
      <line x1="130" y1="70" x2="130" y2="270" stroke="rgba(9,97,159,0.12)" strokeWidth="1.5" />
      
      {/* Navigation lines details */}
      {[0, 1, 2, 3].map(row => (
        <line key={row} x1="95" y1={95 + row * 22} x2="115" y2={95 + row * 22} stroke="rgba(9,97,159,0.25)" strokeWidth="3" />
      ))}

      {/* Dynamic graph ring gauge (Metric observability) */}
      <circle cx="205" cy="165" r="40" fill="none" stroke="rgba(9,97,159,0.06)" strokeWidth="8" />
      <motion.circle
        cx="205" cy="165" r="40" fill="none" stroke="rgba(9,97,159,0.6)" strokeWidth="8"
        strokeDasharray="251"
        animate={run ? { strokeDashoffset: [200, 80, 200] } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x="205" y="170" fontSize="12" fill="rgba(9,97,159,0.85)" fontFamily="monospace" fontWeight="700" textAnchor="middle">85%</text>

      {/* Secondary data metric bars */}
      <g transform="translate(280, 110)">
        <line x1="0" y1="15" x2="110" y2="15" stroke="rgba(9,97,159,0.05)" strokeWidth="12" strokeLinecap="round" />
        <motion.line x1="0" y1="15" x2="80" y2="15" stroke="rgba(9,97,159,0.55)" strokeWidth="12" strokeLinecap="round"
          animate={run ? { x2: [80, 95, 80] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <line x1="0" y1="40" x2="110" y2="40" stroke="rgba(9,97,159,0.05)" strokeWidth="12" strokeLinecap="round" />
        <motion.line x1="0" y1="40" x2="60" y2="40" stroke="rgba(16,185,129,0.6)" strokeWidth="12" strokeLinecap="round"
          animate={run ? { x2: [60, 45, 60] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <line x1="0" y1="65" x2="110" y2="65" stroke="rgba(9,97,159,0.05)" strokeWidth="12" strokeLinecap="round" />
        <motion.line x1="0" y1="65" x2="90" y2="65" stroke="rgba(9,97,159,0.55)" strokeWidth="12" strokeLinecap="round"
          animate={run ? { x2: [90, 75, 90] } : {}}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      </g>
    </svg>
  );
}

// ─── 13. NETWORK INFRASTRUCTURE & SECURITY ───
export function NetworkSecurityIllustration({ isHovered }) {
  const run = useIllustrationMotion();
  return (
    <svg viewBox="0 0 500 360" style={BASE_STYLE} aria-label="Network Infrastructure & Cybersecurity Visual">
      <defs>
        <radialGradient id="ns-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.15)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
      </defs>

      <circle cx="250" cy="180" r="160" fill="url(#ns-glow)" />

      {/* Gateway center hub */}
      <circle cx="250" cy="180" r="32" fill="#ffffff" stroke="rgba(9,97,159,0.4)" strokeWidth="2" />
      {/* Lock symbol in hub */}
      <path d="M 242 182 L 258 182 L 258 194 L 242 194 Z" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.7)" strokeWidth="1.5" />
      <path d="M 246 182 L 246 176 A 4 4 0 0 1 254 176 L 254 182" fill="none" stroke="rgba(9,97,159,0.7)" strokeWidth="1.5" />

      {/* Network perimeter Shield / Firewall rings */}
      <circle cx="250" cy="180" r="95" fill="none" stroke="rgba(9,97,159,0.25)" strokeWidth="2.5" />
      
      {/* Scanning laser sweep */}
      <motion.circle
        cx="250" cy="180" r="95" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="2.5"
        strokeDasharray="90 300"
        animate={run ? { rotate: 360 } : {}}
        style={{ transformOrigin: '250px 180px' }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Distributed client/server nodes surrounding perimeter */}
      {[
        { x: 100, y: 110 },
        { x: 400, y: 110 },
        { x: 120, y: 260 },
        { x: 380, y: 260 },
      ].map((node, idx) => (
        <g key={idx}>
          <line x1="250" y1="180" x2={node.x} y2={node.y} stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />
          <circle cx={node.x} cy={node.y} r="14" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
          <circle cx={node.x} cy={node.y} r="3" fill="rgba(9,97,159,0.7)" />

          {/* Blocked cyber threat packet animation (red dot hitting shield) */}
          <motion.circle
            cx={node.x} cy={node.y} r="3" fill="rgba(239, 68, 68, 0.8)"
            animate={run ? {
              cx: [node.x, node.x + (250 - node.x) * 0.5, node.x + (250 - node.x) * 0.5],
              cy: [node.y, node.y + (180 - node.y) * 0.5, node.y + (180 - node.y) * 0.5],
              scale: [1, 1, 0],
              opacity: [1, 1, 0]
            } : {}}
            transition={{ duration: 2.5, delay: idx * 0.6, repeat: Infinity, ease: 'easeIn' }}
          />
        </g>
      ))}
    </svg>
  );
}

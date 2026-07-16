import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BASE = { width: '100%', height: '100%' };

function useMotion() {
  const reduced = useReducedMotion();
  return !reduced;
}

/* ─────────────────────────────────────────────────────────────
   1. Cloud & Hybrid IT Solutions
────────────────────────────────────────────────────────────── */
export function CloudHybridIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Cloud & Hybrid IT Architecture">
      <defs>
        <radialGradient id="ch-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="200" ry="120" fill="url(#ch-bg)" />

      {/* Blueprint grid lines */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1="30" y1={50 + i * 55} x2="450" y2={50 + i * 55} stroke="rgba(9,97,159,0.04)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={i} x1={50 + i * 76} y1="30" x2={50 + i * 76} y2="290" stroke="rgba(9,97,159,0.04)" strokeWidth="1" />
      ))}

      {/* Cloud nodes */}
      <rect x="70" y="80" width="120" height="60" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
      <text x="130" y="115" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.8)" fontWeight="bold" fontFamily="monospace">ON-PREM DC</text>

      <rect x="290" y="80" width="120" height="60" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
      <text x="350" y="115" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.8)" fontWeight="bold" fontFamily="monospace">PUBLIC CLOUD</text>

      {/* Connection loop */}
      <path d="M 190 110 H 290" stroke="rgba(9,97,159,0.2)" strokeWidth="2" strokeDasharray="4 4" />
      <motion.circle cx="240" cy="110" r="4" fill="rgba(56,189,248,0.9)"
        animate={animate ? { cx: [190, 290, 190] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Hybrid stack diagram elements below */}
      <rect x="180" y="180" width="120" height="70" rx="4" fill="rgba(9,97,159,0.03)" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
      <text x="240" y="200" textAnchor="middle" fontSize="9" fill="rgba(30,40,60,0.6)" fontFamily="monospace">HYBRID ROUTER</text>
      <line x1="240" y1="140" x2="240" y2="180" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
      
      {/* Visual signals */}
      <circle cx="210" cy="225" r="4" fill="rgba(16,185,129,0.8)" />
      <circle cx="240" cy="225" r="4" fill="rgba(9,97,159,0.4)" />
      <circle cx="270" cy="225" r="4" fill="rgba(9,97,159,0.4)" />

      <text x="240" y="295" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1.5">HYBRID ORCHESTRATION</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. IT Infrastructure Management & Operations
────────────────────────────────────────────────────────────── */
export function ITInfrastructureIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="IT Infrastructure Management">
      <defs>
        <radialGradient id="im-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#im-bg)" />

      {/* Racks */}
      <rect x="150" y="60" width="180" height="180" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="2" />
      
      {/* Server Slots */}
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(160, ${75 + i * 40})`}>
          <rect x="0" y="0" width="160" height="30" rx="3" fill="rgba(9,97,159,0.02)" stroke="rgba(9,97,159,0.12)" />
          <line x1="10" y1="15" x2="90" y2="15" stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />
          <circle cx="110" cy="15" r="2.5" fill="rgba(16,185,129,0.8)" />
          <motion.circle cx="125" cy="15" r="2.5" fill="rgba(9,97,159,0.7)"
            animate={animate ? { opacity: [0.3, 1, 0.3] } : {}}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
          />
          <circle cx="140" cy="15" r="2.5" fill="rgba(9,97,159,0.3)" />
        </g>
      ))}

      <text x="240" y="275" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">INFRASTRUCTURE MANAGEMENT</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. Cybersecurity & Secure Perimeter Hardening
────────────────────────────────────────────────────────────── */
export function CybersecurityIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Cybersecurity Perimeter">
      <defs>
        <radialGradient id="cs-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.07)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="200" ry="120" fill="url(#cs-bg)" />

      {/* Security concentric rings */}
      <circle cx="240" cy="160" r="80" fill="none" stroke="rgba(9,97,159,0.12)" strokeWidth="1.5" />
      <circle cx="240" cy="160" r="110" fill="none" stroke="rgba(9,97,159,0.08)" strokeWidth="1.5" strokeDasharray="5 5" />
      
      {/* Central Hub with Shield lock */}
      <circle cx="240" cy="160" r="28" fill="#ffffff" stroke="rgba(9,97,159,0.35)" strokeWidth="2" />
      <path d="M 233 162 L 247 162 L 247 172 L 233 172 Z M 236 162 L 236 156 A 4 4 0 0 1 244 156 L 244 162" fill="none" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5" />

      {/* Threats blocked visual */}
      {[[100, 110], [380, 110], [120, 220], [360, 220]].map((pos, i) => (
        <g key={i}>
          <line x1="240" y1="160" x2={pos[0]} y2={pos[1]} stroke="rgba(9,97,159,0.12)" strokeWidth="1.5" />
          <circle cx={pos[0]} cy={pos[1]} r="6" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
          
          {/* Signal path drawing */}
          <motion.circle cx={pos[0]} cy={pos[1]} r="3" fill="rgba(239, 68, 68, 0.7)"
            animate={animate ? {
              cx: [pos[0], pos[0] + (240 - pos[0]) * 0.45],
              cy: [pos[1], pos[1] + (160 - pos[1]) * 0.45],
              opacity: [1, 0]
            } : {}}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        </g>
      ))}

      <text x="240" y="295" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1.5">SECURE PERIMETER HARDENING</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. Automation & Modernization
────────────────────────────────────────────────────────────── */
export function AutomationModernizationIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Automation & Modernization">
      <defs>
        <radialGradient id="am-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#am-bg)" />

      {/* Automation gear assemblies */}
      <g transform="translate(180, 140)">
        <motion.path
          d="M 0 -20 L 4 -20 L 6 -12 L 12 -14 L 14 -10 L 8 -5 L 12 2 L 8 7 L 2 4 L -4 8 L -7 3 L -3 -3 L -7 -9 L -3 -13 Z"
          fill="none" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5"
          animate={animate ? { rotate: 360 } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="0" cy="0" r="5" fill="none" stroke="rgba(9,97,159,0.2)" />
      </g>

      <g transform="translate(240, 175)">
        <motion.path
          d="M 0 -28 L 5 -28 L 8 -17 L 17 -20 L 20 -14 L 11 -7 L 17 3 L 11 10 L 2 6 L -6 11 L -10 5 L -5 -5 L -10 -12 L -5 -18 Z"
          fill="none" stroke="rgba(9,97,159,0.4)" strokeWidth="2"
          animate={animate ? { rotate: -360 } : {}}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="0" cy="0" r="9" fill="none" stroke="rgba(9,97,159,0.3)" />
      </g>

      {/* Flowing pipelines representing Automation workflow */}
      <path d="M 80 220 Q 150 240 240 175" fill="none" stroke="rgba(9,97,159,0.12)" strokeWidth="3" />
      <motion.path
        d="M 80 220 Q 150 240 240 175" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="2" strokeDasharray="8 12"
        animate={animate ? { strokeDashoffset: 40 } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      <text x="240" y="285" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">AUTOMATION & DEVOPS PIPELINE</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. ERP & Enterprise Management
────────────────────────────────────────────────────────────── */
export function ERPMangementIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="ERP Solutions">
      <defs>
        <radialGradient id="erp-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#erp-bg)" />

      {/* Central Database hub */}
      <rect x="180" y="120" width="120" height="80" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="2" />
      {/* Cylinder stacks for Database */}
      <ellipse cx="240" cy="140" rx="35" ry="8" fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.4)" strokeWidth="1" />
      <ellipse cx="240" cy="155" rx="35" ry="8" fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.4)" strokeWidth="1" />
      <ellipse cx="240" cy="170" rx="35" ry="8" fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.4)" strokeWidth="1" />

      {/* Enterprise endpoints */}
      {[[70, 70, 'Billing'], [410, 70, 'HRM'], [70, 250, 'Logistics'], [410, 250, 'CRM']].map((node, i) => (
        <g key={i}>
          <line x1="240" y1="160" x2={node[0]} y2={node[1]} stroke="rgba(9,97,159,0.12)" strokeWidth="1.5" />
          <circle cx={node[0]} cy={node[1]} r="16" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
          <text x={node[0]} y={node[1] + 28} textAnchor="middle" fontSize="8" fill="rgba(30,40,60,0.6)" fontFamily="monospace">{node[2]}</text>
          
          <motion.circle cx={240} cy={160} r="3.5" fill="rgba(56,189,248,0.7)"
            animate={animate ? { cx: [240, node[0]], cy: [160, node[1]] } : {}}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          />
        </g>
      ))}

      <text x="240" y="295" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1.5">ERP DATA CONVERGENCE</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. Deployment & Rollout Services
────────────────────────────────────────────────────────────── */
export function DeploymentRolloutIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Deployment Rollouts">
      <defs>
        <radialGradient id="dr-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#dr-bg)" />

      {/* Phased Timeline nodes */}
      <line x1="60" y1="160" x2="420" y2="160" stroke="rgba(9,97,159,0.2)" strokeWidth="2.5" />

      {[[80, 'PLAN'], [185, 'STAGE'], [295, 'BUILD'], [400, 'RUN']].map((step, i) => (
        <g key={i}>
          <circle cx={step[0]} cy="160" r="12" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="2" />
          <text x={step[0]} y="192" textAnchor="middle" fontSize="8" fill="rgba(30,40,60,0.6)" fontFamily="monospace" fontWeight="bold">{step[1]}</text>
          <circle cx={step[0]} cy="160" r="4" fill="rgba(9,97,159,0.7)" />

          {/* Pulsing highlights */}
          {i === 2 && (
            <motion.circle cx={step[0]} cy="160" r="18" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1"
              animate={animate ? { r: [12, 22, 12], opacity: [0.6, 0, 0.6] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </g>
      ))}

      {/* Process flow pulse */}
      <motion.circle cx="80" cy="160" r="4.5" fill="rgba(56,189,248,0.9)"
        animate={animate ? { cx: [80, 400] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <text x="240" y="275" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">IT ROLLOUT PROCESS MAP</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. 24/7 Support Desk Services
────────────────────────────────────────────────────────────── */
export function SupportDeskIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Support Desk Flow">
      <defs>
        <radialGradient id="sd-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#sd-bg)" />

      {/* Ticket intake -> dispatch visual */}
      <rect x="60" y="110" width="80" height="100" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
      <text x="100" y="130" textAnchor="middle" fontSize="8" fill="rgba(30,40,60,0.5)" fontFamily="monospace">INCOMING</text>
      <rect x="75" y="150" width="50" height="8" rx="2" fill="rgba(9,97,159,0.08)" />
      <rect x="75" y="165" width="50" height="8" rx="2" fill="rgba(9,97,159,0.08)" />
      <rect x="75" y="180" width="30" height="8" rx="2" fill="rgba(9,97,159,0.08)" />

      <rect x="340" y="110" width="80" height="100" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
      <text x="380" y="130" textAnchor="middle" fontSize="8" fill="rgba(30,40,60,0.5)" fontFamily="monospace">RESOLVED</text>
      <path d="M 365 170 L 375 180 L 395 160" stroke="rgba(16,185,129,0.8)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Escalation path */}
      <path d="M 140 160 L 340 160" stroke="rgba(9,97,159,0.15)" strokeWidth="2.5" strokeDasharray="4 4" />
      
      <circle cx="240" cy="160" r="24" fill="#ffffff" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
      <text x="240" y="163" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.8)" fontWeight="bold" fontFamily="monospace">TRIAGE</text>

      <motion.circle cx="140" cy="160" r="4" fill="rgba(56,189,248,0.9)"
        animate={animate ? { cx: [140, 240, 340] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <text x="240" y="275" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">24/7 SLA DISPATCH SERVICE</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. Smart City Solution & ICCC
────────────────────────────────────────────────────────────── */
export function SmartCityICCCIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Smart City ICCC Command Console">
      <defs>
        <radialGradient id="sc-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="200" ry="120" fill="url(#sc-bg)" />

      {/* City outline */}
      <rect x="80" y="180" width="35" height="70" rx="2" fill="rgba(9,97,159,0.12)" stroke="rgba(9,97,159,0.25)" />
      <rect x="130" y="140" width="45" height="110" rx="2" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" />
      <rect x="200" y="100" width="50" height="150" rx="2" fill="rgba(9,97,159,0.22)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5" />
      <rect x="270" y="150" width="40" height="100" rx="2" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" />
      <rect x="330" y="170" width="35" height="80" rx="2" fill="rgba(9,97,159,0.12)" stroke="rgba(9,97,159,0.25)" />

      <line x1="50" y1="250" x2="430" y2="250" stroke="rgba(9,97,159,0.3)" strokeWidth="2.5" />

      {/* Dynamic antenna signal on top tower */}
      <line x1="225" y1="100" x2="225" y2="70" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5" />
      <motion.circle cx="225" cy="70" r="3" fill="rgba(9,97,159,0.85)"
        animate={animate ? { scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="225" cy="70" r="12" fill="none" stroke="rgba(9,97,159,0.2)" strokeWidth="1"
        animate={animate ? { r: [12, 28, 12], opacity: [0.5, 0, 0.5] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <text x="240" y="285" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1.5">CIVIC COMMAND AND CONTROL (ICCC)</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. SAP Basis & Consulting
────────────────────────────────────────────────────────────── */
export function SAPBasisIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="SAP Basis Consulting">
      <defs>
        <radialGradient id="sap-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#sap-bg)" />

      {/* Multi-tier SAP NetWeaver architecture layer stack */}
      {[[110, 'SAP APPLICATION LAYER'], [160, 'SAP NETWEAVER ENGINE'], [210, 'DATABASE INSTANCE (HANA)']].map((layer, i) => (
        <g key={i} transform={`translate(90, ${layer[0]})`}>
          <rect x="0" y="0" width="300" height="34" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
          <text x="150" y="21" textAnchor="middle" fontSize="8" fill="rgba(9,97,159,0.8)" fontWeight="bold" fontFamily="monospace">{layer[1]}</text>
          
          {/* Internal diagnostic scan */}
          {i === 1 && (
            <motion.line x1="10" y1="17" x2="290" y2="17" stroke="rgba(56,189,248,0.4)" strokeWidth="1" strokeDasharray="3 3"
              animate={animate ? { strokeDashoffset: 12 } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </g>
      ))}

      <text x="240" y="285" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">ENTERPRISE SAP BASIS ARCHITECTURE</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   10. Staff Augmentation
────────────────────────────────────────────────────────────── */
export function StaffAugmentationIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Staff Augmentation Placement">
      <defs>
        <radialGradient id="sa-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#sa-bg)" />

      {/* Engineer classification slots L1, L2, L3 */}
      {[[100, 70, 'L3 DESIGNER'], [240, 70, 'L2 ENGINEER'], [380, 70, 'L1 OPERATOR']].map((box, i) => (
        <g key={i}>
          <rect x={box[0] - 50} y={box[1]} width="100" height="90" rx="4" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
          <text x={box[0]} y={box[1] + 25} textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.9)" fontWeight="bold" fontFamily="monospace">{box[2]}</text>
          
          {/* User icons representation */}
          <circle cx={box[0]} cy={box[1] + 55} r="10" fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
          <path d={`M ${box[0]-8} ${box[1]+72} Q ${box[0]} ${box[1]+62} ${box[0]+8} ${box[1]+72}`} stroke="rgba(9,97,159,0.4)" strokeWidth="1" fill="none" />
          
          {/* Allocation active check */}
          <motion.circle cx={box[0] + 32} cy={box[1] + 15} r="3.5" fill="rgba(16,185,129,0.8)"
            animate={animate ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
          />
        </g>
      ))}

      {/* Allocation connection loops */}
      <path d="M 150 115 H 190 M 290 115 H 330" stroke="rgba(9,97,159,0.12)" strokeWidth="1.5" />

      <text x="240" y="275" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">SLA-DRIVEN ENGINEER PLACEMENTS</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   11. NOC Services
────────────────────────────────────────────────────────────── */
export function NOCServicesIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="NOC Services Console">
      <defs>
        <radialGradient id="ns-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.07)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#ns-bg)" />

      {/* Operations desk monitors */}
      <rect x="90" y="70" width="300" height="150" rx="6" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="2" />
      
      {/* Telemetry charts inside NOC console */}
      <rect x="110" y="90" width="120" height="60" rx="2" fill="rgba(9,97,159,0.02)" stroke="rgba(9,97,159,0.12)" />
      <motion.path d="M 120 135 L 140 110 L 160 125 L 180 100 L 200 130 L 220 115" fill="none" stroke="rgba(9,97,159,0.6)" strokeWidth="1.5"
        animate={animate ? { d: [
          "M 120 135 L 140 110 L 160 125 L 180 100 L 200 130 L 220 115",
          "M 120 125 L 140 120 L 160 105 L 180 120 L 200 110 L 220 130",
          "M 120 135 L 140 110 L 160 125 L 180 100 L 200 130 L 220 115"
        ]} : {}}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <rect x="250" y="90" width="120" height="60" rx="2" fill="rgba(9,97,159,0.02)" stroke="rgba(9,97,159,0.12)" />
      {/* Blinking alarm alerts */}
      <circle cx="275" cy="120" r="5" fill="rgba(16,185,129,0.8)" />
      <motion.circle cx="310" cy="120" r="5" fill="rgba(239, 68, 68, 0.8)"
        animate={animate ? { opacity: [0.4, 1, 0.4] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <circle cx="345" cy="120" r="5" fill="rgba(9,97,159,0.4)" />

      {/* Terminal stand */}
      <path d="M 210 220 L 270 220 L 255 250 L 225 250 Z" fill="rgba(9,97,159,0.1)" stroke="rgba(9,97,159,0.25)" />

      <text x="240" y="285" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1.5">24/7 INFRASTRUCTURE OBSERVABILITY</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   12. Datacenter Operations & Non-IT DC Facility Management
────────────────────────────────────────────────────────────── */
export function DCOperationsIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Datacenter Facilities">
      <defs>
        <radialGradient id="dco-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#dco-bg)" />

      {/* Cooling fan assemblies */}
      <g transform="translate(140, 130)">
        <circle cx="40" cy="40" r="36" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
        <motion.g
          animate={animate ? { rotate: 360 } : {}}
          style={{ transformOrigin: '40px 40px' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <line x1="40" y1="10" x2="40" y2="70" stroke="rgba(9,97,159,0.3)" strokeWidth="2" />
          <line x1="10" y1="40" x2="70" y2="40" stroke="rgba(9,97,159,0.3)" strokeWidth="2" />
        </motion.g>
        <text x="40" y="90" textAnchor="middle" fontSize="8" fill="rgba(30,40,60,0.5)" fontFamily="monospace">COOLING FAN</text>
      </g>

      {/* UPS Power circuits */}
      <g transform="translate(260, 110)">
        <rect x="0" y="0" width="90" height="110" rx="3" fill="#ffffff" stroke="rgba(9,97,159,0.2)" strokeWidth="1.5" />
        <path d="M 15 45 L 30 45 L 37 35 L 45 55 L 52 41 L 60 45 L 75 45" fill="none" stroke="rgba(16,185,129,0.8)" strokeWidth="1.8" />
        <text x="45" y="25" textAnchor="middle" fontSize="8" fill="rgba(9,97,159,0.8)" fontWeight="bold" fontFamily="monospace">UPS GRID</text>
        <circle cx="45" cy="85" r="4" fill="rgba(16,185,129,0.8)" />
        <text x="45" y="130" textAnchor="middle" fontSize="8" fill="rgba(30,40,60,0.5)" fontFamily="monospace">FACILITY POWER</text>
      </g>

      <text x="240" y="285" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">ENVIRONMENTAL & UTILITY CONTROLS</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   13. Data Backup & Recovery
────────────────────────────────────────────────────────────── */
export function DataBackupIllustration() {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Backup Recovery Stack">
      <defs>
        <radialGradient id="db-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="160" rx="190" ry="110" fill="url(#db-bg)" />

      {/* 3-2-1 backup stack visual plates */}
      {[[110, 'PRIMARY STORAGE'], [155, 'SECURE IMMUTABLE VAULT'], [200, 'OFFSITE DISASTER CLOUD']].map((plate, i) => (
        <g key={i} transform={`translate(100, ${plate[0]})`}>
          <path d="M 0 10 L 140 -5 L 280 10 L 140 25 Z" fill="#ffffff" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
          <path d="M 0 10 L 0 18 L 140 33 L 280 18 L 280 10 Z" fill="rgba(9,97,159,0.03)" stroke="rgba(9,97,159,0.25)" strokeWidth="1.5" />
          <text x="140" y="14" textAnchor="middle" fontSize="8" fill="rgba(9,97,159,0.85)" fontWeight="bold" fontFamily="monospace">{plate[1]}</text>
        </g>
      ))}

      {/* Sync sync rotating link indicator */}
      <motion.path d="M 70 170 A 90 90 0 0 1 410 170" fill="none" stroke="rgba(9,97,159,0.18)" strokeWidth="2" strokeDasharray="4 4"
        animate={animate ? { rotate: 360 } : {}}
        style={{ transformOrigin: '240px 170px' }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <text x="240" y="285" textAnchor="middle" fontSize="9" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="1">3-2-1 DATA RECOVERY PATHWAY</text>
    </svg>
  );
}

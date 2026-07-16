import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   Shared helpers
────────────────────────────────────────────────────────────── */
const BASE = { width: '100%', height: '100%' };

function useMotion() {
  const reduced = useReducedMotion();
  return !reduced;
}

/* ─────────────────────────────────────────────────────────────
   1. Smart City
────────────────────────────────────────────────────────────── */
export function SmartCityIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Smart City Visualization">
      <defs>
        <radialGradient id="sc-bg" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="rgba(9,97,159,0)" />
        </radialGradient>
        <filter id="sc-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="240" cy="200" rx="200" ry="120" fill="url(#sc-bg)" />

      {/* Blueprint grid */}
      {[0,1,2,3,4,5].map(i => (
        <line key={`hg-${i}`} x1="20" y1={50+i*45} x2="460" y2={50+i*45} stroke="rgba(9,97,159,0.06)" strokeWidth="1" />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={`vg-${i}`} x1={20+i*70} y1="30" x2={20+i*70} y2="290" stroke="rgba(9,97,159,0.06)" strokeWidth="1" />
      ))}

      {/* City skyline */}
      {/* Buildings */}
      <rect x="40" y="200" width="30" height="80" rx="2" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
      <rect x="46" y="210" width="6" height="6" fill="rgba(56,189,248,0.5)" />
      <rect x="58" y="210" width="6" height="6" fill="rgba(56,189,248,0.5)" />
      <rect x="46" y="222" width="6" height="6" fill="rgba(56,189,248,0.3)" />
      <rect x="58" y="222" width="6" height="6" fill="rgba(56,189,248,0.5)" />

      <rect x="80" y="170" width="40" height="110" rx="2" fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.4)" strokeWidth="1" />
      <rect x="87" y="180" width="8" height="8" fill="rgba(56,189,248,0.5)" />
      <rect x="103" y="180" width="8" height="8" fill="rgba(56,189,248,0.3)" />
      <rect x="87" y="195" width="8" height="8" fill="rgba(56,189,248,0.5)" />
      <rect x="103" y="195" width="8" height="8" fill="rgba(56,189,248,0.5)" />
      <rect x="87" y="210" width="8" height="8" fill="rgba(56,189,248,0.3)" />
      <rect x="103" y="210" width="8" height="8" fill="rgba(56,189,248,0.5)" />

      {/* Central tower */}
      <rect x="200" y="130" width="50" height="150" rx="2" fill="rgba(9,97,159,0.25)" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5" />
      <rect x="222" y="115" width="6" height="20" fill="rgba(9,97,159,0.6)" />
      <rect x="209" y="145" width="10" height="10" fill="rgba(56,189,248,0.6)" />
      <rect x="231" y="145" width="10" height="10" fill="rgba(56,189,248,0.6)" />
      <rect x="231" y="163" width="10" height="10" fill="rgba(56,189,248,0.4)" />
      <rect x="209" y="163" width="10" height="10" fill="rgba(56,189,248,0.6)" />
      <rect x="209" y="181" width="10" height="10" fill="rgba(56,189,248,0.4)" />
      <rect x="231" y="181" width="10" height="10" fill="rgba(56,189,248,0.6)" />

      <rect x="270" y="155" width="45" height="125" rx="2" fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.4)" strokeWidth="1" />
      <rect x="278" y="165" width="9" height="9" fill="rgba(56,189,248,0.5)" />
      <rect x="296" y="165" width="9" height="9" fill="rgba(56,189,248,0.3)" />
      <rect x="278" y="181" width="9" height="9" fill="rgba(56,189,248,0.5)" />
      <rect x="296" y="181" width="9" height="9" fill="rgba(56,189,248,0.5)" />

      <rect x="330" y="185" width="35" height="95" rx="2" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
      <rect x="338" y="195" width="7" height="7" fill="rgba(56,189,248,0.5)" />
      <rect x="352" y="195" width="7" height="7" fill="rgba(56,189,248,0.3)" />
      <rect x="338" y="208" width="7" height="7" fill="rgba(56,189,248,0.5)" />

      <rect x="380" y="200" width="28" height="80" rx="2" fill="rgba(9,97,159,0.12)" stroke="rgba(9,97,159,0.25)" strokeWidth="1" />

      {/* Ground */}
      <line x1="30" y1="280" x2="450" y2="280" stroke="rgba(9,97,159,0.2)" strokeWidth="2" />

      {/* IoT Connection nodes */}
      {/* Node positions and connection lines */}
      {[
        { cx: 55, cy: 190, tx: 225, ty: 145 },
        { cx: 100, cy: 160, tx: 225, ty: 145 },
        { cx: 293, cy: 145, tx: 225, ty: 145 },
        { cx: 348, cy: 175, tx: 225, ty: 145 },
        { cx: 160, cy: 240, tx: 225, ty: 145 },
        { cx: 390, cy: 250, tx: 225, ty: 145 },
      ].map((n, i) => (
        <g key={i}>
          <line x1={n.cx} y1={n.cy} x2={n.tx} y2={n.ty}
            stroke="rgba(9,97,159,0.2)" strokeWidth="1" strokeDasharray="4 3" />
          <motion.line x1={n.cx} y1={n.cy} x2={n.tx} y2={n.ty}
            stroke="rgba(56,189,248,0.7)" strokeWidth="1.5" strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? {
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            } : {}}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 1.5 }}
          />
          <motion.circle cx={n.cx} cy={n.cy} r="5"
            fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5"
            animate={animate ? {
              r: [5, 7, 5],
              stroke: ['rgba(9,97,159,0.5)', 'rgba(56,189,248,0.9)', 'rgba(9,97,159,0.5)']
            } : {}}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        </g>
      ))}

      {/* Central hub */}
      <motion.circle cx="225" cy="145" r="10"
        fill="rgba(9,97,159,0.3)" stroke="rgba(56,189,248,0.8)" strokeWidth="2"
        filter="url(#sc-glow)"
        animate={animate ? { r: [10, 13, 10], opacity: [0.8, 1, 0.8] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="225" cy="145" r="18"
        fill="none" stroke="rgba(56,189,248,0.25)" strokeWidth="1"
        animate={animate ? { r: [18, 26, 18], opacity: [0.6, 0, 0.6] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Scan ring */}
      <motion.circle cx="225" cy="145" r="35"
        fill="none" stroke="rgba(9,97,159,0.1)" strokeWidth="1" strokeDasharray="3 5"
        animate={animate ? { rotate: 360 } : {}}
        style={{ transformOrigin: '225px 145px' }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Data packets traveling */}
      {animate && [
        { path: 'M55,190 L225,145', delay: 0 },
        { path: 'M348,175 L225,145', delay: 0.8 },
        { path: 'M100,160 L225,145', delay: 1.6 },
      ].map((p, i) => (
        <motion.circle key={i} r="3" fill="rgba(56,189,248,0.9)" filter="url(#sc-glow)">
          <animateMotion dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${p.delay}s`} path={p.path} />
        </motion.circle>
      ))}

      {/* Label */}
      <text x="225" y="310" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.5)" fontFamily="monospace" letterSpacing="2">
        SMART CITY COMMAND
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. Telecom
────────────────────────────────────────────────────────────── */
export function TelecomIllustration({ isHovered }) {
  const animate = useMotion();
  const nodes = [
    { cx: 240, cy: 155, label: 'HUB', main: true },
    { cx: 120, cy: 90, label: 'POP-A' },
    { cx: 360, cy: 90, label: 'POP-B' },
    { cx: 80, cy: 200, label: 'BS-01' },
    { cx: 400, cy: 200, label: 'BS-02' },
    { cx: 160, cy: 260, label: 'EDGE-1' },
    { cx: 320, cy: 260, label: 'EDGE-2' },
  ];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,3],[2,4],[3,5],[4,6]
  ];
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Telecom Network Topology">
      <defs>
        <radialGradient id="tc-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="tc-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="240" cy="175" rx="210" ry="135" fill="url(#tc-bg)" />

      {/* Grid */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="20" y1={40+i*60} x2="460" y2={40+i*60} stroke="rgba(9,97,159,0.05)" strokeWidth="1" />
      ))}

      {/* Edges */}
      {edges.map(([a,b], i) => (
        <g key={i}>
          <line x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" />
          <motion.line x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(56,189,248,0.6)" strokeWidth="2" strokeDasharray="5 4"
            initial={{ pathLength: 0 }}
            animate={animate ? { pathLength: [0,1,0] } : {}}
            transition={{ duration: 2, delay: i * 0.25, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </g>
      ))}

      {/* Traveling packets */}
      {animate && edges.slice(0, 5).map(([a,b], i) => (
        <motion.circle key={i} r="3" fill="rgba(56,189,248,1)" filter="url(#tc-glow)">
          <animateMotion
            dur={`${1.2 + i * 0.2}s`} repeatCount="indefinite"
            begin={`${i * 0.4}s`}
            path={`M${nodes[a].cx},${nodes[a].cy} L${nodes[b].cx},${nodes[b].cy}`}
          />
        </motion.circle>
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle cx={n.cx} cy={n.cy} r={n.main ? 14 : 9}
            fill={n.main ? 'rgba(9,97,159,0.3)' : 'rgba(9,97,159,0.15)'}
            stroke={n.main ? 'rgba(56,189,248,0.9)' : 'rgba(9,97,159,0.5)'}
            strokeWidth={n.main ? 2 : 1.5}
            filter={n.main ? 'url(#tc-glow)' : undefined}
            animate={animate ? {
              r: n.main ? [14,17,14] : [9,11,9],
              opacity: [0.8,1,0.8]
            } : {}}
            transition={{ duration: 2.5, delay: i*0.3, repeat: Infinity }}
          />
          {n.main && (
            <motion.circle cx={n.cx} cy={n.cy} r="24"
              fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="1"
              animate={animate ? { r: [24,34,24], opacity: [0.5,0,0.5] } : {}}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          )}
          <text x={n.cx} y={n.cy + (n.main ? 28 : 22)} textAnchor="middle"
            fontSize="8" fill="rgba(9,97,159,0.6)" fontFamily="monospace">
            {n.label}
          </text>
        </g>
      ))}
      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        NETWORK TOPOLOGY
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. Healthcare
────────────────────────────────────────────────────────────── */
export function HealthcareIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Healthcare Infrastructure">
      <defs>
        <radialGradient id="hc-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="hc-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="240" cy="160" rx="200" ry="130" fill="url(#hc-bg)" />

      {/* Server racks */}
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(${80 + i*110}, 80)`}>
          <rect x="0" y="0" width="70" height="120" rx="4"
            fill="rgba(9,97,159,0.1)" stroke="rgba(9,97,159,0.35)" strokeWidth="1.5" />
          {[0,1,2,3,4].map(j => (
            <g key={j}>
              <rect x="8" y={12+j*20} width="54" height="12" rx="2"
                fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.25)" strokeWidth="1" />
              <motion.circle cx="55" cy={18+j*20} r="3"
                fill="rgba(56,189,248,0.8)"
                animate={animate ? {
                  opacity: [1, 0.3, 1],
                  fill: j===2 ? ['rgba(56,189,248,0.8)', 'rgba(56,189,248,0.4)', 'rgba(56,189,248,0.8)'] : undefined
                } : {}}
                transition={{ duration: 1.5, delay: (i*0.4 + j*0.25), repeat: Infinity }}
              />
            </g>
          ))}
          <text x="35" y="135" textAnchor="middle" fontSize="8"
            fill="rgba(9,97,159,0.6)" fontFamily="monospace">
            SRV-{String.fromCharCode(65+i)}
          </text>
        </g>
      ))}

      {/* Connection lines between servers */}
      {[0,1].map(i => (
        <motion.line key={i}
          x1={150 + i*110} y1="140" x2={190 + i*110} y2="140"
          stroke="rgba(56,189,248,0.6)" strokeWidth="2" strokeDasharray="4 3"
          animate={animate ? { opacity: [0.3,1,0.3] } : {}}
          transition={{ duration: 1.5, delay: i*0.5, repeat: Infinity }}
        />
      ))}

      {/* Cross icon */}
      <g transform="translate(210, 230)">
        <rect x="-8" y="-22" width="16" height="44" rx="3" fill="rgba(9,97,159,0.4)" />
        <rect x="-22" y="-8" width="44" height="16" rx="3" fill="rgba(9,97,159,0.4)" />
        <motion.rect x="-8" y="-22" width="16" height="44" rx="3"
          fill="rgba(56,189,248,0.15)"
          animate={animate ? { opacity: [0.2,0.5,0.2] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>

      {/* Uptime monitor */}
      <g transform="translate(30, 230)">
        <rect x="0" y="0" width="100" height="50" rx="6"
          fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
        <text x="8" y="14" fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">UPTIME MONITOR</text>
        <motion.path d="M8,35 L20,25 L30,30 L42,15 L52,22 L62,18 L72,28 L82,20 L92,25"
          fill="none" stroke="rgba(56,189,248,0.8)" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <text x="8" y="45" fontSize="7" fill="rgba(9,97,159,0.4)" fontFamily="monospace">99.99% SLA</text>
      </g>

      {/* DR Status */}
      <g transform="translate(350, 230)">
        <rect x="0" y="0" width="100" height="50" rx="6"
          fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
        <text x="8" y="14" fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">DR STATUS</text>
        <motion.circle cx="20" cy="30" r="8" fill="rgba(9,97,159,0.2)"
          stroke="rgba(56,189,248,0.7)" strokeWidth="1.5"
          animate={animate ? { r: [8,10,8], opacity: [0.8,1,0.8] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="36" y="26" fontSize="7" fill="rgba(9,97,159,0.6)" fontFamily="monospace">ACTIVE-ACTIVE</text>
        <text x="36" y="36" fontSize="7" fill="rgba(56,189,248,0.7)" fontFamily="monospace">REPLICATION OK</text>
      </g>

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        CLINICAL INFRASTRUCTURE
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. Manufacturing
────────────────────────────────────────────────────────────── */
export function ManufacturingIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Manufacturing Automation">
      <defs>
        <radialGradient id="mfg-bg" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="190" rx="200" ry="120" fill="url(#mfg-bg)" />

      {/* Assembly belt */}
      <rect x="30" y="230" width="420" height="20" rx="3" fill="rgba(9,97,159,0.12)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
      <motion.rect x="30" y="233" width="420" height="4"
        fill="rgba(9,97,159,0.08)"
        animate={animate ? { x: [30, -30, 30] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Belt items */}
      {animate && [0,1,2,3].map(i => (
        <motion.rect key={i} y="218" width="28" height="14" rx="3"
          fill="rgba(9,97,159,0.3)" stroke="rgba(56,189,248,0.5)" strokeWidth="1"
          animate={{ x: [440 - i*110, -30] }}
          transition={{ duration: 6, delay: i*1.5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Robot arm 1 */}
      <g transform="translate(120, 130)">
        <rect x="-5" y="0" width="10" height="80" rx="3" fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5" />
        <motion.g
          animate={animate ? { rotate: [-15, 15, -15] } : {}}
          style={{ transformOrigin: '0px 0px' }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="-4" y="-45" width="8" height="50" rx="3" fill="rgba(9,97,159,0.3)" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5" />
          <circle cx="0" cy="-48" r="5" fill="rgba(56,189,248,0.7)" />
        </motion.g>
        <circle cx="0" cy="0" r="6" fill="rgba(9,97,159,0.4)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" />
        <text x="-12" y="95" fontSize="8" fill="rgba(9,97,159,0.5)" fontFamily="monospace">ARM-01</text>
      </g>

      {/* Robot arm 2 */}
      <g transform="translate(240, 120)">
        <rect x="-5" y="0" width="10" height="90" rx="3" fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5" />
        <motion.g
          animate={animate ? { rotate: [20, -20, 20] } : {}}
          style={{ transformOrigin: '0px 0px' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <rect x="-4" y="-55" width="8" height="60" rx="3" fill="rgba(9,97,159,0.3)" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5" />
          <circle cx="0" cy="-58" r="5" fill="rgba(56,189,248,0.7)" />
        </motion.g>
        <circle cx="0" cy="0" r="6" fill="rgba(9,97,159,0.4)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" />
        <text x="-12" y="105" fontSize="8" fill="rgba(9,97,159,0.5)" fontFamily="monospace">ARM-02</text>
      </g>

      {/* Robot arm 3 */}
      <g transform="translate(360, 130)">
        <rect x="-5" y="0" width="10" height="80" rx="3" fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5" />
        <motion.g
          animate={animate ? { rotate: [-10, 25, -10] } : {}}
          style={{ transformOrigin: '0px 0px' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <rect x="-4" y="-45" width="8" height="50" rx="3" fill="rgba(9,97,159,0.3)" stroke="rgba(9,97,159,0.5)" strokeWidth="1.5" />
          <circle cx="0" cy="-48" r="5" fill="rgba(56,189,248,0.7)" />
        </motion.g>
        <circle cx="0" cy="0" r="6" fill="rgba(9,97,159,0.4)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" />
        <text x="-12" y="95" fontSize="8" fill="rgba(9,97,159,0.5)" fontFamily="monospace">ARM-03</text>
      </g>

      {/* OT-IT Bridge */}
      <g transform="translate(30, 50)">
        <rect x="0" y="0" width="120" height="55" rx="6"
          fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.25)" strokeWidth="1" />
        <text x="8" y="14" fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">OT-IT BRIDGE</text>
        <text x="8" y="28" fontSize="8" fill="rgba(9,97,159,0.7)" fontFamily="monospace" fontWeight="bold">ANSIBLE AUTO</text>
        <motion.rect x="8" y="35" width="80" height="6" rx="2"
          fill="rgba(9,97,159,0.15)"
          animate={animate ? { width: [0, 80, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <text x="94" y="40" fontSize="7" fill="rgba(56,189,248,0.7)" fontFamily="monospace">RUN</text>
      </g>

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        AUTOMATED PRODUCTION FLOOR
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. BFSI
────────────────────────────────────────────────────────────── */
export function BFSIIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="BFSI Secure Infrastructure">
      <defs>
        <radialGradient id="bfsi-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.12)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="bfsi-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="240" cy="160" rx="200" ry="130" fill="url(#bfsi-bg)" />

      {/* Vault */}
      <circle cx="240" cy="155" r="70" fill="rgba(9,97,159,0.1)" stroke="rgba(9,97,159,0.4)" strokeWidth="2" />
      <circle cx="240" cy="155" r="55" fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />

      {/* Vault door details */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const r = 60;
        const rad = (deg * Math.PI) / 180;
        const x = 240 + r * Math.cos(rad);
        const y = 155 + r * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="4" fill="rgba(9,97,159,0.3)" stroke="rgba(9,97,159,0.5)" strokeWidth="1" />;
      })}

      {/* Rotating dial */}
      <motion.circle cx="240" cy="155" r="25"
        fill="rgba(9,97,159,0.15)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5"
        animate={animate ? { rotate: 360 } : {}}
        style={{ transformOrigin: '240px 155px' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.line x1="240" y1="155" x2="240" y2="135"
        stroke="rgba(56,189,248,0.8)" strokeWidth="2"
        animate={animate ? { rotate: 360 } : {}}
        style={{ transformOrigin: '240px 155px' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Shield layers */}
      {[85, 75, 65].map((r, i) => (
        <motion.circle key={i} cx="240" cy="155" r={r}
          fill="none" stroke={`rgba(9,97,159,${0.08 - i*0.02})`} strokeWidth="1" strokeDasharray="4 4"
          animate={animate ? { rotate: i % 2 === 0 ? 360 : -360, opacity: [0.4, 0.8, 0.4] } : {}}
          style={{ transformOrigin: '240px 155px' }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Security labels */}
      {[
        { x: 60, y: 100, text: 'FIREWALL', sub: 'ACTIVE' },
        { x: 360, y: 100, text: 'WAF', sub: 'PROTECTED' },
        { x: 60, y: 240, text: 'DR-SYNC', sub: '0ms LAG' },
        { x: 360, y: 240, text: 'ENCRYPT', sub: 'AES-256' },
      ].map((label, i) => (
        <g key={i}>
          <rect x={label.x-30} y={label.y-16} width="60" height="32" rx="4"
            fill="rgba(9,97,159,0.1)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
          <text x={label.x} y={label.y} textAnchor="middle"
            fontSize="7" fill="rgba(9,97,159,0.6)" fontFamily="monospace">{label.text}</text>
          <motion.text x={label.x} y={label.y+11} textAnchor="middle"
            fontSize="7" fontFamily="monospace" fontWeight="bold"
            animate={animate ? { fill: ['rgba(56,189,248,0.7)', 'rgba(56,189,248,1)', 'rgba(56,189,248,0.7)'] } : { fill: 'rgba(56,189,248,0.7)' }}
            transition={{ duration: 2, delay: i*0.5, repeat: Infinity }}
          >{label.sub}</motion.text>
          {/* Connecting line to vault */}
          <line x1={label.x} y1={label.y + (label.y > 155 ? -16 : 16)}
            x2="240" y2={label.y > 155 ? 210 : 100}
            stroke="rgba(9,97,159,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        </g>
      ))}

      {/* Glow */}
      <motion.circle cx="240" cy="155" r="10"
        fill="rgba(56,189,248,0.3)" filter="url(#bfsi-glow)"
        animate={animate ? { r: [10, 14, 10], opacity: [0.7, 1, 0.7] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        SECURE BANKING CORE
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. Logistics
────────────────────────────────────────────────────────────── */
export function LogisticsIllustration({ isHovered }) {
  const animate = useMotion();
  const hubs = [
    { cx: 240, cy: 155, label: 'DC-HQ' },
    { cx: 100, cy: 80, label: 'WH-01' },
    { cx: 380, cy: 80, label: 'WH-02' },
    { cx: 70, cy: 220, label: 'DEPOT-A' },
    { cx: 410, cy: 220, label: 'DEPOT-B' },
    { cx: 180, cy: 270, label: 'PORT-W' },
    { cx: 310, cy: 270, label: 'PORT-E' },
  ];
  const routes = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,3],[2,4]];
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Global Logistics Network">
      <defs>
        <radialGradient id="log-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="175" rx="210" ry="130" fill="url(#log-bg)" />

      {/* Subtle world map dots */}
      {Array.from({ length: 60 }).map((_, i) => (
        <circle key={i} cx={30 + (i % 12) * 36} cy={50 + Math.floor(i / 12) * 45}
          r="1" fill="rgba(9,97,159,0.08)" />
      ))}

      {/* Routes */}
      {routes.map(([a, b], i) => (
        <g key={i}>
          <line x1={hubs[a].cx} y1={hubs[a].cy} x2={hubs[b].cx} y2={hubs[b].cy}
            stroke="rgba(9,97,159,0.12)" strokeWidth="1.5" strokeDasharray="5 4" />
          <motion.circle r="4" fill="rgba(56,189,248,0.8)">
            <animateMotion
              dur={`${2 + i * 0.3}s`} repeatCount="indefinite"
              begin={`${i * 0.5}s`}
              path={`M${hubs[a].cx},${hubs[a].cy} L${hubs[b].cx},${hubs[b].cy}`}
            />
          </motion.circle>
        </g>
      ))}

      {/* Hubs */}
      {hubs.map((h, i) => (
        <g key={i}>
          <motion.circle cx={h.cx} cy={h.cy} r={i === 0 ? 12 : 8}
            fill={i === 0 ? 'rgba(9,97,159,0.3)' : 'rgba(9,97,159,0.15)'}
            stroke={i === 0 ? 'rgba(56,189,248,0.8)' : 'rgba(9,97,159,0.5)'}
            strokeWidth={i === 0 ? 2 : 1.5}
            animate={animate ? { opacity: [0.7, 1, 0.7] } : {}}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
          <text x={h.cx} y={h.cy + (i === 0 ? 24 : 20)} textAnchor="middle"
            fontSize="7" fill="rgba(9,97,159,0.55)" fontFamily="monospace">{h.label}</text>
        </g>
      ))}

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        GLOBAL SUPPLY CHAIN
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. Education
────────────────────────────────────────────────────────────── */
export function EducationIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Digital Campus Network">
      <defs>
        <radialGradient id="edu-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="170" rx="200" ry="125" fill="url(#edu-bg)" />

      {/* Grid/Campus blueprint */}
      {[0,1,2].map(i => <line key={`h${i}`} x1="40" y1={80+i*80} x2="440" y2={80+i*80} stroke="rgba(9,97,159,0.07)" strokeWidth="1" />)}
      {[0,1,2,3].map(i => <line key={`v${i}`} x1={80+i*100} y1="50" x2={80+i*100} y2="270" stroke="rgba(9,97,159,0.07)" strokeWidth="1" />)}

      {/* Campus buildings */}
      {[
        { x: 60, y: 110, w: 90, h: 80, label: 'MAIN CAMPUS' },
        { x: 190, y: 95, w: 70, h: 95, label: 'DATA CENTER' },
        { x: 310, y: 120, w: 80, h: 70, label: 'RESEARCH LAB' },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="3"
            fill="rgba(9,97,159,0.12)" stroke="rgba(9,97,159,0.3)" strokeWidth="1.5" />
          {Array.from({ length: 6 }).map((_, j) => (
            <motion.rect key={j}
              x={b.x + 8 + (j % 3) * 22} y={b.y + 12 + Math.floor(j / 3) * 22}
              width="12" height="10" rx="1"
              fill="rgba(56,189,248,0.3)"
              animate={animate ? { opacity: [0.3, 0.8, 0.3] } : {}}
              transition={{ duration: 2, delay: (i + j) * 0.3, repeat: Infinity }}
            />
          ))}
          <text x={b.x + b.w/2} y={b.y + b.h + 12} textAnchor="middle"
            fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">{b.label}</text>
        </g>
      ))}

      {/* WiFi/Network connections */}
      {[[105, 150], [225, 143], [350, 155]].map(([cx, cy], i) => (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r="20"
            fill="none" stroke="rgba(9,97,159,0.15)" strokeWidth="1"
            animate={animate ? { r: [20, 32, 20], opacity: [0.5, 0, 0.5] } : {}}
            transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity }}
          />
          <motion.circle cx={cx} cy={cy} r="12"
            fill="none" stroke="rgba(9,97,159,0.25)" strokeWidth="1"
            animate={animate ? { r: [12, 20, 12], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2.5, delay: i * 0.8 + 0.4, repeat: Infinity }}
          />
        </g>
      ))}

      {/* Backbone line */}
      <motion.path d="M105,150 C150,150 175,143 225,143 C275,143 300,155 350,155"
        fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="2" strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        animate={animate ? { pathLength: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Virtual lab panel */}
      <g transform="translate(30, 220)">
        <rect x="0" y="0" width="120" height="42" rx="5"
          fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.25)" strokeWidth="1" />
        <text x="8" y="13" fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">VIRTUAL LABS</text>
        {[0,1,2].map(i => (
          <motion.rect key={i} x={8+i*36} y="20" width="28" height="16" rx="3"
            fill="rgba(9,97,159,0.15)" stroke="rgba(56,189,248,0.4)" strokeWidth="1"
            animate={animate ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
      </g>

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        DIGITAL CAMPUS NETWORK
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. Government
────────────────────────────────────────────────────────────── */
export function GovernmentIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Government Security Infrastructure">
      <defs>
        <radialGradient id="gov-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="gov-glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="240" cy="170" rx="210" ry="130" fill="url(#gov-bg)" />

      {/* Government building */}
      <rect x="165" y="130" width="150" height="130" rx="2" fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.35)" strokeWidth="1.5" />
      {/* Columns */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={172+i*26} y="145" width="10" height="115" rx="2"
          fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.3)" strokeWidth="1" />
      ))}
      {/* Pediment */}
      <polygon points="155,130 325,130 240,80" fill="rgba(9,97,159,0.2)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5" />
      {/* Windows */}
      {[0,1,2].map(r => [0,1,2,3,4].map(c => (
        <motion.rect key={`${r}-${c}`} x={173+c*26} y={155+r*30} width="8" height="14" rx="1"
          fill="rgba(56,189,248,0.3)"
          animate={animate ? { opacity: [0.3, 0.8, 0.3] } : {}}
          transition={{ duration: 2, delay: (r*5+c)*0.2, repeat: Infinity }}
        />
      )))}

      {/* Security layers - pulsing rings */}
      {[90, 120, 150].map((r, i) => (
        <motion.circle key={i} cx="240" cy="195" r={r}
          fill="none" stroke={`rgba(9,97,159,${0.12 - i*0.03})`} strokeWidth="1" strokeDasharray="4 5"
          animate={animate ? { rotate: i % 2 === 0 ? 360 : -360 } : {}}
          style={{ transformOrigin: '240px 195px' }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Shield icon */}
      <g transform="translate(240, 105)">
        <path d="M0,-20 L14,0 L10,18 L0,22 L-10,18 L-14,0 Z"
          fill="rgba(9,97,159,0.3)" stroke="rgba(56,189,248,0.7)" strokeWidth="1.5" />
        <motion.path d="M0,-20 L14,0 L10,18 L0,22 L-10,18 L-14,0 Z"
          fill="rgba(56,189,248,0.1)"
          animate={animate ? { opacity: [0.1, 0.4, 0.1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>

      {/* Status bars */}
      {[
        { x: 30, y: 140, label: 'PATCH LEVEL', val: '98%', pct: 0.98 },
        { x: 360, y: 140, label: 'COMPLIANCE', val: '100%', pct: 1 },
        { x: 30, y: 220, label: 'UPTIME', val: '99.9%', pct: 0.999 },
        { x: 360, y: 220, label: 'AUDIT STATUS', val: 'CLEAN', pct: 0.95 },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width="90" height="48" rx="5"
            fill="rgba(9,97,159,0.07)" stroke="rgba(9,97,159,0.2)" strokeWidth="1" />
          <text x={s.x+6} y={s.y+14} fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">{s.label}</text>
          <rect x={s.x+6} y={s.y+20} width="78" height="5" rx="2" fill="rgba(9,97,159,0.1)" />
          <motion.rect x={s.x+6} y={s.y+20} width={78*s.pct} height="5" rx="2"
            fill="rgba(56,189,248,0.7)"
            initial={{ width: 0 }}
            animate={animate ? { width: 78 * s.pct } : {}}
            transition={{ duration: 1.5, delay: i * 0.3 }}
          />
          <text x={s.x+6} y={s.y+38} fontSize="9" fill="rgba(9,97,159,0.8)" fontFamily="monospace" fontWeight="bold">{s.val}</text>
        </g>
      ))}

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        PUBLIC SECTOR SECURITY
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. Media/Entertainment
────────────────────────────────────────────────────────────── */
export function MediaIllustration({ isHovered }) {
  const animate = useMotion();
  return (
    <svg viewBox="0 0 480 320" style={BASE} aria-label="Media CDN Infrastructure">
      <defs>
        <radialGradient id="med-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(9,97,159,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="med-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="240" cy="160" rx="200" ry="120" fill="url(#med-bg)" />

      {/* CDN Origin */}
      <motion.circle cx="240" cy="150" r="24"
        fill="rgba(9,97,159,0.25)" stroke="rgba(56,189,248,0.8)" strokeWidth="2"
        filter="url(#med-glow)"
        animate={animate ? { r: [24, 27, 24], opacity: [0.8, 1, 0.8] } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <text x="240" y="147" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.9)" fontFamily="monospace">CDN</text>
      <text x="240" y="157" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.9)" fontFamily="monospace">ORIGIN</text>

      {/* Distribution waves */}
      {[40, 70, 100, 135].map((r, i) => (
        <motion.circle key={i} cx="240" cy="150" r={r}
          fill="none" stroke="rgba(9,97,159,0.15)" strokeWidth="1"
          animate={animate ? {
            r: [r, r + 10, r],
            opacity: [0.4, 0.1, 0.4]
          } : {}}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
        />
      ))}

      {/* Edge nodes */}
      {[
        { cx: 80, cy: 80, label: 'EDGE-N' },
        { cx: 400, cy: 80, label: 'EDGE-E' },
        { cx: 80, cy: 240, label: 'EDGE-S' },
        { cx: 400, cy: 240, label: 'EDGE-W' },
        { cx: 150, cy: 270, label: 'POP-1' },
        { cx: 330, cy: 270, label: 'POP-2' },
      ].map((n, i) => (
        <g key={i}>
          <line x1={n.cx} y1={n.cy} x2="240" y2="150"
            stroke="rgba(9,97,159,0.15)" strokeWidth="1.5" strokeDasharray="4 3" />
          <motion.circle r="3" fill="rgba(56,189,248,0.9)" filter="url(#med-glow)">
            <animateMotion
              dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite"
              begin={`${i * 0.4}s`}
              path={`M${n.cx},${n.cy} L240,150`}
            />
          </motion.circle>
          <motion.circle cx={n.cx} cy={n.cy} r="9"
            fill="rgba(9,97,159,0.15)" stroke="rgba(9,97,159,0.4)" strokeWidth="1.5"
            animate={animate ? { opacity: [0.6, 1, 0.6] } : {}}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
          <text x={n.cx} y={n.cy + 20} textAnchor="middle"
            fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">{n.label}</text>
        </g>
      ))}

      {/* Bandwidth meter */}
      <g transform="translate(30, 50)">
        <rect x="0" y="0" width="100" height="45" rx="5"
          fill="rgba(9,97,159,0.08)" stroke="rgba(9,97,159,0.2)" strokeWidth="1" />
        <text x="6" y="14" fontSize="7" fill="rgba(9,97,159,0.5)" fontFamily="monospace">BANDWIDTH</text>
        <rect x="6" y="20" width="88" height="5" rx="2" fill="rgba(9,97,159,0.1)" />
        <motion.rect x="6" y="20" width="0" height="5" rx="2"
          fill="rgba(56,189,248,0.7)"
          animate={animate ? { width: [0, 88, 60, 88] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <text x="6" y="38" fontSize="8" fill="rgba(56,189,248,0.8)" fontFamily="monospace" fontWeight="bold">100 Gbps</text>
      </g>

      <text x="240" y="308" textAnchor="middle" fontSize="10" fill="rgba(9,97,159,0.4)" fontFamily="monospace" letterSpacing="2">
        CONTENT DELIVERY NETWORK
      </text>
    </svg>
  );
}

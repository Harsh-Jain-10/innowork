import React from 'react';

export function DatacenterIllustration({ style }) {
  return (
    <svg 
      viewBox="0 0 800 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block', borderRadius: '8px', ...style }}
    >
      <rect width="800" height="500" fill="url(#dc_bg)" />
      
      {/* Grid Pattern */}
      <defs>
        <linearGradient id="dc_bg" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a192f" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="grid_grad" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#09619f" stopOpacity="0" />
          <stop offset="0.5" stopColor="#09619f" stopOpacity="0.25" />
          <stop offset="1" stopColor="#09619f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="glow_1" x1="200" y1="100" x2="600" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#0369a1" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid Lines */}
      <path d="M 0 50 L 800 50 M 0 100 L 800 100 M 0 150 L 800 150 M 0 200 L 800 200 M 0 250 L 800 250 M 0 300 L 800 300 M 0 350 L 800 350 M 0 400 L 800 400 M 0 450 L 800 450" stroke="url(#grid_grad)" strokeWidth="1" />
      <path d="M 100 0 L 100 500 M 200 0 L 200 500 M 300 0 L 300 500 M 400 0 L 400 500 M 500 0 L 500 500 M 600 0 L 600 500 M 700 0 L 700 500" stroke="url(#grid_grad)" strokeWidth="1" />

      {/* Central Ambient Glow */}
      <circle cx="400" cy="250" r="300" fill="url(#glow_1)" />

      {/* Abstract Tech Shapes - Servers Isometric Layer */}
      <g transform="translate(180, 80) scale(0.9)" opacity="0.85">
        {/* Layer 1 */}
        <polygon points="250,150 400,70 550,150 400,230" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
        {/* Layer 2 */}
        <polygon points="250,220 400,140 550,220 400,300" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
        {/* Layer 3 */}
        <polygon points="250,290 400,210 550,290 400,370" fill="#0369a1" stroke="#0ea5e9" strokeWidth="2" />

        {/* Isometric Node Lines */}
        <line x1="400" y1="70" x2="400" y2="370" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="250" y1="150" x2="550" y2="290" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="550" y1="150" x2="250" y2="290" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />

        {/* Data points */}
        <circle cx="400" cy="140" r="6" fill="#38bdf8" />
        <circle cx="400" cy="210" r="6" fill="#0ea5e9" />
        <circle cx="400" cy="70" r="4" fill="#7dd3fc" />
        
        {/* Secondary Nodes */}
        <circle cx="300" cy="177" r="4" fill="#38bdf8" opacity="0.8" />
        <circle cx="500" cy="177" r="4" fill="#38bdf8" opacity="0.8" />
        <circle cx="325" cy="250" r="4" fill="#0ea5e9" opacity="0.8" />
        <circle cx="475" cy="250" r="4" fill="#0ea5e9" opacity="0.8" />
      </g>
      
      {/* Foreground Abstract HUD details */}
      <path d="M 50 450 L 150 450 L 180 420" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="180" cy="420" r="3" fill="#38bdf8" />
      
      <path d="M 750 50 L 650 50 L 620 80" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="620" cy="80" r="3" fill="#38bdf8" />
      
      <text x="50" y="80" fill="#38bdf8" fontFamily="monospace" fontSize="12" opacity="0.6">SYS.NODE_CONNECTED: [100%]</text>
      <text x="50" y="100" fill="#38bdf8" fontFamily="monospace" fontSize="12" opacity="0.6">LATENCY: 0.14ms</text>
    </svg>
  );
}

export function SecurityIllustration({ style }) {
  return (
    <svg 
      viewBox="0 0 800 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block', borderRadius: '8px', ...style }}
    >
      <rect width="800" height="500" fill="url(#sec_bg)" />
      
      <defs>
        <linearGradient id="sec_bg" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0b1329" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="glow_2" x1="400" y1="100" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" stopOpacity="0.2" />
          <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Cyber Circuit Lines */}
      <g opacity="0.3">
        <path d="M 100 100 L 250 100 L 300 150 L 300 350 L 250 400" stroke="#6366f1" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="4" fill="#6366f1" />
        
        <path d="M 700 100 L 550 100 L 500 150 L 500 350 L 550 400" stroke="#6366f1" strokeWidth="1.5" />
        <circle cx="700" cy="100" r="4" fill="#6366f1" />
        
        <line x1="300" y1="250" x2="500" y2="250" stroke="#4f46e5" strokeWidth="1" strokeDasharray="4 4" />
      </g>

      <circle cx="400" cy="250" r="280" fill="url(#glow_2)" />

      {/* Abstract Shield Composition */}
      <g transform="translate(320, 130) scale(1.1)">
        {/* Outer Shield Shield Outline */}
        <path 
          d="M 70 0 L 140 30 L 140 110 C 140 170 70 210 70 210 C 70 210 0 170 0 110 L 0 30 Z" 
          fill="#1e1b4b" 
          stroke="#818cf8" 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />
        
        {/* Inner Shield */}
        <path 
          d="M 70 15 L 125 40 L 125 105 C 125 155 70 190 70 190 C 70 190 15 155 15 105 L 15 40 Z" 
          fill="url(#shield_inner_grad)" 
          stroke="#4f46e5" 
          strokeWidth="1.5" 
        />
        
        <defs>
          <linearGradient id="shield_inner_grad" x1="70" y1="15" x2="70" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312e81" />
            <stop offset="1" stopColor="#1e1b4b" />
          </linearGradient>
        </defs>

        {/* Lock or Key Emblem Inside Shield */}
        <rect x="55" y="75" width="30" height="24" rx="3" fill="#818cf8" />
        <path d="M 60 75 L 60 62 C 60 55 65 50 70 50 C 75 50 80 55 80 62 L 80 75" stroke="#818cf8" strokeWidth="3" fill="none" />
        <circle cx="70" cy="85" r="3" fill="#1e1b4b" />
        <line x1="70" y1="88" x2="70" y2="95" stroke="#1e1b4b" strokeWidth="2.5" />

        {/* Scanning laser line */}
        <line x1="-15" y1="100" x2="155" y2="100" stroke="#6366f1" strokeWidth="2.5" strokeOpacity="0.8" />
        <line x1="-15" y1="100" x2="155" y2="100" stroke="#818cf8" strokeWidth="6" strokeOpacity="0.3" />
      </g>

      {/* Tech indicators */}
      <text x="310" y="420" fill="#818cf8" fontFamily="monospace" fontSize="12" opacity="0.8">SHIELD STATUS: ACTIVE</text>
      <text x="310" y="440" fill="#818cf8" fontFamily="monospace" fontSize="12" opacity="0.6">Z-TRUST.AUTH: VERIFIED</text>
    </svg>
  );
}

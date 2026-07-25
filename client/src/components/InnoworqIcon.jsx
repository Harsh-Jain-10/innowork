import React from 'react';

export default function InnoworqIcon({ size = 24, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Top Blue Accent Triangle (Narrower & Taller Proportions) */}
      <path 
        d="M 11 2 H 21 L 11 14 Z" 
        fill="#0963ff" 
      />

      {/* Main Black Body Pillar with Angled Top Cut (Sleek & Elongated) */}
      <path 
        d="M 11 16.5 L 21 4.5 V 30 H 11 Z" 
        fill="#0f172a" 
      />
    </svg>
  );
}

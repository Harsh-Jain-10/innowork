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
      {/* Top Blue Accent Triangle */}
      <path 
        d="M 9 4 H 23 L 9 16 Z" 
        fill="#0963ff" 
      />

      {/* Main Black Body Pillar with Angled Top Cut */}
      <path 
        d="M 9 18.5 L 23 6.5 V 28 H 9 Z" 
        fill="#0f172a" 
      />
    </svg>
  );
}

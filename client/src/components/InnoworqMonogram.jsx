import React from 'react';

export default function InnoworqMonogram({ size = 26, className = '' }) {
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
      {/* "I" Pillar: Brand Blue diagonal slash top accent */}
      <path d="M 3 10 L 7.5 5.5 L 7.5 26.5 L 3 26.5 Z" fill="#2563eb" />
      
      {/* "I" Pillar Body: Dark Navy geometric vertical rect */}
      <rect x="7.5" y="5.5" width="4.5" height="21" fill="#0f172a" />
      
      {/* "W" Vector: Sharp geometric strokes in INNOWORQ Brand Blue */}
      <path 
        d="M 14.5 5.5 L 18 26.5 L 21.5 14.5 L 25 26.5 L 28.5 5.5" 
        stroke="#2563eb" 
        strokeWidth="3.4" 
        strokeLinecap="butt" 
        strokeLinejoin="miter" 
      />
    </svg>
  );
}

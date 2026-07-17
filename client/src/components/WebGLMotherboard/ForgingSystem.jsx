import React from 'react';
import * as THREE from 'three';

// 3D Metal Letter components constructed from solid bars (industrial sci-fi look)
export function MetalLetter({ type }) {
  const metalMaterial = (
    <meshStandardMaterial 
      color="#e2e8f0" 
      metalness={0.95} 
      roughness={0.12} 
    />
  );

  switch (type) {
    case 'I':
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[0.3, 1.8, 0.3]} />
            {metalMaterial}
          </mesh>
        </group>
      );
    case 'N':
      return (
        <group>
          {/* Left Vertical */}
          <mesh castShadow position={[-0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.8, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Right Vertical */}
          <mesh castShadow position={[0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.8, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Diagonal */}
          <mesh castShadow rotation={[0, 0, -0.56]} position={[0, 0, 0]}>
            <boxGeometry args={[0.24, 2.05, 0.26]} />
            {metalMaterial}
          </mesh>
        </group>
      );
    case 'O':
      return (
        <group>
          {/* Top */}
          <mesh castShadow position={[0, 0.75, 0]}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Bottom */}
          <mesh castShadow position={[0, -0.75, 0]}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Left */}
          <mesh castShadow position={[-0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Right */}
          <mesh castShadow position={[0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
            {metalMaterial}
          </mesh>
        </group>
      );
    case 'W':
      return (
        <group>
          {/* Outer Left */}
          <mesh castShadow position={[-0.75, 0, 0]} rotation={[0, 0, 0.18]}>
            <boxGeometry args={[0.24, 1.8, 0.24]} />
            {metalMaterial}
          </mesh>
          {/* Outer Right */}
          <mesh castShadow position={[0.75, 0, 0]} rotation={[0, 0, -0.18]}>
            <boxGeometry args={[0.24, 1.8, 0.24]} />
            {metalMaterial}
          </mesh>
          {/* Inner Left */}
          <mesh castShadow position={[-0.24, -0.1, 0]} rotation={[0, 0, -0.28]}>
            <boxGeometry args={[0.24, 1.35, 0.24]} />
            {metalMaterial}
          </mesh>
          {/* Inner Right */}
          <mesh castShadow position={[0.24, -0.1, 0]} rotation={[0, 0, 0.28]}>
            <boxGeometry args={[0.24, 1.35, 0.24]} />
            {metalMaterial}
          </mesh>
        </group>
      );
    case 'R':
      return (
        <group>
          {/* Vertical Stem */}
          <mesh castShadow position={[-0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.8, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Top horizontal */}
          <mesh castShadow position={[0, 0.75, 0]}>
            <boxGeometry args={[0.8, 0.26, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Middle horizontal */}
          <mesh castShadow position={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.26, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Loop right vertical */}
          <mesh castShadow position={[0.38, 0.38, 0]}>
            <boxGeometry args={[0.26, 0.74, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Diagonal leg */}
          <mesh castShadow position={[0.2, -0.4, 0]} rotation={[0, 0, 0.55]}>
            <boxGeometry args={[0.26, 1.0, 0.26]} />
            {metalMaterial}
          </mesh>
        </group>
      );
    case 'Q':
      return (
        <group>
          {/* Outer O box shape */}
          <mesh castShadow position={[0, 0.75, 0]}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
            {metalMaterial}
          </mesh>
          <mesh castShadow position={[0, -0.75, 0]}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
            {metalMaterial}
          </mesh>
          <mesh castShadow position={[-0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
            {metalMaterial}
          </mesh>
          <mesh castShadow position={[0.5, 0, 0]}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
            {metalMaterial}
          </mesh>
          {/* Q Tail */}
          <mesh castShadow position={[0.45, -0.55, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.24, 0.7, 0.24]} />
            {metalMaterial}
          </mesh>
        </group>
      );
    default:
      return null;
  }
}

export default function ForgingSystem({ letterStates, letters }) {
  return (
    <group position={[0, 1.15, 1.3]}>
      {letters.map((letter, index) => {
        const state = letterStates[index];
        if (!state) return null;

        // Vibrating displacement offset
        const dx = state.vibrate ? (Math.random() - 0.5) * 0.05 : 0;
        const dy = state.vibrate ? (Math.random() - 0.5) * 0.05 : 0;
        const dz = state.vibrate ? (Math.random() - 0.5) * 0.05 : 0;

        return (
          <group key={index} position={[state.x, 0, 0]}>
            
            {/* ── A. TRANSISTOR CLUSTER AT BASE (PCB level) ── */}
            <group position={[dx, -1.05 + dy, dz]}>
              {/* Central microchip base */}
              <mesh castShadow>
                <boxGeometry args={[0.6, 0.1, 0.6]} />
                <meshStandardMaterial color="#0b0f19" roughness={0.7} />
              </mesh>
              {/* Surrounding minor transistors */}
              {[-0.22, 0.22].map((tx, i) => (
                <mesh key={i} castShadow position={[tx, 0.08, tx]}>
                  <boxGeometry args={[0.12, 0.08, 0.12]} />
                  <meshStandardMaterial color="#0f172a" roughness={0.8} />
                </mesh>
              ))}
            </group>

            {/* ── B. BLUE ENERGY FOUNTAIN ERUPTING UPWARD ── */}
            {state.fountainIntensity > 0.05 && (
              <mesh position={[0, state.fountainIntensity * 1.5 - 1.0, 0]}>
                <cylinderGeometry args={[0.2, 0.4, state.fountainIntensity * 3.0, 8]} />
                <meshBasicMaterial
                  color="#00f0ff"
                  transparent
                  opacity={state.fountainIntensity * 0.4}
                  blending={THREE.AdditiveBlending}
                />
              </mesh>
            )}

            {/* ── C. METALLIC FORGED LETTER ── */}
            {state.visible && (
              <group position={[dx, state.y, dz]} rotation={[0, 0, 0]} scale={[0.35, 0.35, 0.35]}>
                <MetalLetter type={letter} />
              </group>
            )}

            {/* ── D. LANDING SHOCKWAVE ── */}
            {state.shockwaveOpacity > 0.01 && (
              <group position={[0, -1.04, 0]}>
                {/* Horizontal expanding energy ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <ringGeometry args={[state.shockwaveScale * 0.9, state.shockwaveScale, 32]} />
                  <meshBasicMaterial
                    color="#00f0ff"
                    transparent
                    opacity={state.shockwaveOpacity}
                    blending={THREE.AdditiveBlending}
                  />
                </mesh>
              </group>
            )}

            {/* ── E. LANDING PARTICLES ── */}
            {state.particlesActive && (
              <group position={[0, -1.0, 0]}>
                {Array.from({ length: 15 }).map((_, pIdx) => {
                  const angle = (pIdx * (360 / 15) * Math.PI) / 180;
                  const spreadRadius = state.particleTimer * 1.5;
                  const px = Math.cos(angle) * spreadRadius;
                  const pz = Math.sin(angle) * spreadRadius;
                  const py = Math.sin(pIdx * 5) * 0.3 * (1.0 - state.particleTimer) + 0.05;
                  const pScale = (1.0 - state.particleTimer) * 0.08;

                  return (
                    <mesh key={pIdx} position={[px, py, pz]}>
                      <sphereGeometry args={[pScale, 4, 4]} />
                      <meshBasicMaterial
                        color="#00f0ff"
                        transparent
                        opacity={1.0 - state.particleTimer}
                      />
                    </mesh>
                  );
                })}
              </group>
            )}

          </group>
        );
      })}
    </group>
  );
}

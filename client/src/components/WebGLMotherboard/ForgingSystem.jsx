import React from 'react';
import * as THREE from 'three';

// Shared materials and geometries created once to avoid GC/WebGL buffer compilation overhead
const metalMaterial = new THREE.MeshStandardMaterial({ 
  color: "#e2e8f0", 
  metalness: 0.95, 
  roughness: 0.12 
});

const baseChipGeo = new THREE.BoxGeometry(0.6, 0.1, 0.6);
const baseChipMat = new THREE.MeshStandardMaterial({ color: "#0b0f19", roughness: 0.7 });
const transistorGeo = new THREE.BoxGeometry(0.12, 0.08, 0.12);
const transistorMat = new THREE.MeshStandardMaterial({ color: "#0f172a", roughness: 0.8 });

// Caching unit geometries so we can scale/transform the mesh instead of reconstructing geometries on the fly
const unitSphereGeo = new THREE.SphereGeometry(1, 4, 4);
const unitRingGeo = new THREE.RingGeometry(0.9, 1.0, 32);
const unitCylinderGeo = new THREE.CylinderGeometry(0.2, 0.4, 3.0, 8);

// ── 3D Metal Letter components constructed from solid bars (industrial sci-fi look) ──
export function MetalLetter({ type }) {
  switch (type) {
    case 'I':
      return (
        <group>
          <mesh castShadow material={metalMaterial}>
            <boxGeometry args={[0.3, 1.8, 0.3]} />
          </mesh>
        </group>
      );
    case 'N':
      return (
        <group>
          {/* Left Vertical */}
          <mesh castShadow position={[-0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.8, 0.26]} />
          </mesh>
          {/* Right Vertical */}
          <mesh castShadow position={[0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.8, 0.26]} />
          </mesh>
          {/* Diagonal */}
          <mesh castShadow rotation={[0, 0, -0.56]} position={[0, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.24, 2.05, 0.26]} />
          </mesh>
        </group>
      );
    case 'O':
      return (
        <group>
          {/* Top */}
          <mesh castShadow position={[0, 0.75, 0]} material={metalMaterial}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
          </mesh>
          {/* Bottom */}
          <mesh castShadow position={[0, -0.75, 0]} material={metalMaterial}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
          </mesh>
          {/* Left */}
          <mesh castShadow position={[-0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
          </mesh>
          {/* Right */}
          <mesh castShadow position={[0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
          </mesh>
        </group>
      );
    case 'W':
      return (
        <group>
          {/* Outer Left */}
          <mesh castShadow position={[-0.75, 0, 0]} rotation={[0, 0, 0.18]} material={metalMaterial}>
            <boxGeometry args={[0.24, 1.8, 0.24]} />
          </mesh>
          {/* Outer Right */}
          <mesh castShadow position={[0.75, 0, 0]} rotation={[0, 0, -0.18]} material={metalMaterial}>
            <boxGeometry args={[0.24, 1.8, 0.24]} />
          </mesh>
          {/* Inner Left */}
          <mesh castShadow position={[-0.24, -0.1, 0]} rotation={[0, 0, -0.28]} material={metalMaterial}>
            <boxGeometry args={[0.24, 1.35, 0.24]} />
          </mesh>
          {/* Inner Right */}
          <mesh castShadow position={[0.24, -0.1, 0]} rotation={[0, 0, 0.28]} material={metalMaterial}>
            <boxGeometry args={[0.24, 1.35, 0.24]} />
          </mesh>
        </group>
      );
    case 'R':
      return (
        <group>
          {/* Vertical Stem */}
          <mesh castShadow position={[-0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.8, 0.26]} />
          </mesh>
          {/* Top horizontal */}
          <mesh castShadow position={[0, 0.75, 0]} material={metalMaterial}>
            <boxGeometry args={[0.8, 0.26, 0.26]} />
          </mesh>
          {/* Middle horizontal */}
          <mesh castShadow position={[0, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.8, 0.26, 0.26]} />
          </mesh>
          {/* Loop right vertical */}
          <mesh castShadow position={[0.38, 0.38, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 0.74, 0.26]} />
          </mesh>
          {/* Diagonal leg */}
          <mesh castShadow position={[0.2, -0.4, 0]} rotation={[0, 0, 0.55]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.0, 0.26]} />
          </mesh>
        </group>
      );
    case 'Q':
      return (
        <group>
          {/* Outer O box shape */}
          <mesh castShadow position={[0, 0.75, 0]} material={metalMaterial}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
          </mesh>
          <mesh castShadow position={[0, -0.75, 0]} material={metalMaterial}>
            <boxGeometry args={[1.1, 0.26, 0.26]} />
          </mesh>
          <mesh castShadow position={[-0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
          </mesh>
          <mesh castShadow position={[0.5, 0, 0]} material={metalMaterial}>
            <boxGeometry args={[0.26, 1.24, 0.26]} />
          </mesh>
          {/* Q Tail */}
          <mesh castShadow position={[0.42, -0.62, 0]} rotation={[0, 0, -Math.PI / 4]} material={metalMaterial}>
            <boxGeometry args={[0.26, 0.85, 0.26]} />
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
              <mesh castShadow geometry={baseChipGeo} material={baseChipMat} />
              {/* Surrounding minor transistors */}
              {[-0.22, 0.22].map((tx, i) => (
                <mesh key={i} castShadow position={[tx, 0.08, tx]} geometry={transistorGeo} material={transistorMat} />
              ))}
            </group>

            {/* ── B. BLUE ENERGY FOUNTAIN ERUPTING UPWARD ── */}
            {state.fountainIntensity > 0.05 && (
              <mesh 
                position={[0, state.fountainIntensity * 1.5 - 1.0, 0]} 
                scale={[1, state.fountainIntensity, 1]} 
                geometry={unitCylinderGeo}
              >
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
                {/* Horizontal expanding energy ring using static geometry + mesh scale */}
                <mesh 
                  rotation={[Math.PI / 2, 0, 0]} 
                  scale={[state.shockwaveScale, state.shockwaveScale, 1]} 
                  geometry={unitRingGeo}
                >
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
                    <mesh 
                      key={pIdx} 
                      position={[px, py, pz]} 
                      scale={[pScale, pScale, pScale]} 
                      geometry={unitSphereGeo}
                    >
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

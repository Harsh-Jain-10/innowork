import React, { useRef } from 'react';
import * as THREE from 'three';

export default function Motherboard3D({ traceColor, traceEmissiveIntensity, flashIntensity }) {
  const pcbRef = useRef();

  // Capacitor positions (x, z)
  const capacitors = [
    [-3.2, -1.8], [-3.2, -1.4], [-0.5, -1.6], [-0.5, 1.6],
    [3.5, 2.5], [3.5, -2.5], [-1.2, 2.3], [-4.8, -1.5],
    [-4.8, -2.2], [1.0, -3.2], [1.0, 3.2]
  ];

  // Transistor locations
  const transistors = [
    { x: -3.5, z: 1.0 }, { x: -3.5, z: -1.0 },
    { x: -1.0, z: 2.1 }, { x: -1.0, z: -2.1 },
    { x: 4.8, z: 1.5 }, { x: 4.8, z: -1.5 },
    { x: -0.2, z: -3.0 }, { x: 3.2, z: 0 }
  ];

  // Define static circuit trace rectangles on the PCB surface
  const pcbTraces = [
    // Main paths routing to CPU
    { pos: [-3.5, 0.105, 0], scale: [2.5, 0.005, 0.08] },
    { pos: [-2.0, 0.105, -1.2], scale: [0.08, 0.005, 1.8] },
    { pos: [-2.0, 0.105, 1.2], scale: [0.08, 0.005, 1.8] },
    // CPU to RAM traces
    { pos: [-0.2, 0.105, -1.0], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, -0.6], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, -0.2], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, 0.2], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, 0.6], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, 1.0], scale: [2.8, 0.005, 0.04] },
    // CPU to PCIe traces
    { pos: [-2.4, 0.105, 2.5], scale: [0.05, 0.005, 1.2] },
    { pos: [-1.8, 0.105, 2.8], scale: [1.8, 0.005, 0.05] },
    // Power connector link
    { pos: [-3.4, 0.105, 2.0], scale: [2.6, 0.005, 0.12] }
  ];

  return (
    <group ref={pcbRef}>
      {/* ── 1. PCB BASE BOARD ── */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[11.5, 0.18, 7.8]} />
        <meshStandardMaterial 
          color="#04060b" 
          roughness={0.8} 
          metalness={0.15} 
        />
      </mesh>

      {/* ── 2. GLOWING CIRCUIT TRACE LINES ── */}
      {pcbTraces.map((trace, idx) => (
        <mesh key={idx} position={trace.pos}>
          <boxGeometry args={trace.scale} />
          <meshStandardMaterial
            color={traceColor}
            emissive={traceColor}
            emissiveIntensity={traceEmissiveIntensity}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}

      {/* ── 3. LGA CPU PROCESSOR SOCKET ── */}
      <group position={[-2.2, 0.09, 0]}>
        {/* Socket base socket frame */}
        <mesh castShadow position={[0, 0.06, 0]}>
          <boxGeometry args={[2.4, 0.12, 2.4]} />
          <meshStandardMaterial color="#0f172a" roughness={0.7} metalness={0.2} />
        </mesh>
        
        {/* Retention frame border */}
        <mesh castShadow position={[0, 0.14, 0]}>
          <boxGeometry args={[2.1, 0.05, 2.1]} />
          <meshStandardMaterial color="#475569" roughness={0.3} metalness={0.85} />
        </mesh>

        {/* CPU Integrated Heat Spreader (IHS) Cover */}
        <mesh castShadow position={[0, 0.18, 0]}>
          <boxGeometry args={[1.5, 0.04, 1.5]} />
          <meshStandardMaterial 
            color="#94a3b8" 
            roughness={0.15} 
            metalness={0.95} 
          />
        </mesh>

        {/* Core silicon block center */}
        <mesh position={[0, 0.205, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.6]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive={traceColor}
            emissiveIntensity={traceEmissiveIntensity * 1.5}
            roughness={0.1}
          />
        </mesh>

        {/* Golden pin rows surrounding IHS */}
        {[-0.9, 0.9].map((px, i) => (
          <group key={i}>
            <mesh position={[px, 0.13, 0]}>
              <boxGeometry args={[0.04, 0.03, 1.8]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0.13, px]}>
              <boxGeometry args={[1.8, 0.03, 0.04]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        ))}
      </group>

      {/* ── 4. VRM POWER PHASES (Chokes & Heatsinks) ── */}
      {/* Aluminum VRM block 1 (Top) */}
      <group position={[-2.2, 0.09, -1.6]}>
        <mesh castShadow position={[0, 0.2, 0]}>
          <boxGeometry args={[2.0, 0.4, 0.5]} />
          <meshStandardMaterial color="#334155" roughness={0.25} metalness={0.85} />
        </mesh>
        {/* Cooling fins */}
        {Array.from({ length: 9 }).map((_, i) => (
          <mesh key={i} castShadow position={[i * 0.2 - 0.8, 0.41, 0]}>
            <boxGeometry args={[0.08, 0.08, 0.48]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Aluminum VRM block 2 (Left) */}
      <group position={[-3.8, 0.09, 0]}>
        <mesh castShadow position={[0, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.4, 2.0]} />
          <meshStandardMaterial color="#334155" roughness={0.25} metalness={0.85} />
        </mesh>
        {/* Cooling fins */}
        {Array.from({ length: 9 }).map((_, i) => (
          <mesh key={i} castShadow position={[0, 0.41, i * 0.2 - 0.8]}>
            <boxGeometry args={[0.48, 0.08, 0.08]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* VRM Choke Cubes (Inductors with copper coils) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <group key={i} position={[-3.8, 0.21, i * 0.38 - 0.95]}>
          <mesh castShadow>
            <boxGeometry args={[0.26, 0.24, 0.26]} />
            <meshStandardMaterial color="#0f172a" roughness={0.65} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.32, 6]} />
            <meshStandardMaterial color="#ea580c" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* ── 5. VERTICAL RAM SLOTS ── */}
      {/* 4 parallel channels */}
      {[1.2, 1.5, 1.8, 2.1].map((rx, idx) => (
        <group key={idx} position={[rx, 0.09, 0]}>
          {/* Plastic slot track */}
          <mesh castShadow position={[0, 0.12, 0]}>
            <boxGeometry args={[0.12, 0.24, 5.0]} />
            <meshStandardMaterial color="#020617" roughness={0.7} />
          </mesh>
          
          {/* Plated retention clips */}
          <mesh castShadow position={[0, 0.2, -2.48]}>
            <boxGeometry args={[0.16, 0.22, 0.08]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>
          <mesh castShadow position={[0, 0.2, 2.48]}>
            <boxGeometry args={[0.16, 0.22, 0.08]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>

          {/* RAM module stick */}
          <mesh castShadow position={[0, 0.44, 0]}>
            <boxGeometry args={[0.035, 0.6, 4.8]} />
            <meshStandardMaterial color="#022c22" roughness={0.6} />
          </mesh>

          {/* Individual DRAM microchips */}
          {[-1.8, -0.9, 0, 0.9, 1.8].map((rz, cIdx) => (
            <mesh key={cIdx} castShadow position={[0.038, 0.54, rz]}>
              <boxGeometry args={[0.045, 0.22, 0.46]} />
              <meshStandardMaterial color="#090d16" roughness={0.85} />
            </mesh>
          ))}
        </group>
      ))}

      {/* ── 6. PCIe EXPANSION SLOT ── */}
      <group position={[0, 0.09, 2.8]}>
        {/* PCIe slot plastic casing */}
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[4.4, 0.16, 0.16]} />
          <meshStandardMaterial color="#0f172a" roughness={0.75} />
        </mesh>
        {/* Metal shielding */}
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[4.42, 0.14, 0.17]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Card lock clasp */}
        <mesh castShadow position={[2.1, 0.12, 0]}>
          <boxGeometry args={[0.12, 0.2, 0.22]} />
          <meshStandardMaterial color="#64748b" roughness={0.5} />
        </mesh>
      </group>

      {/* ── 7. ELECTROLYTIC CAPACITORS ── */}
      {capacitors.map((pos, idx) => (
        <group key={idx} position={[pos[0], 0.09, pos[1]]}>
          {/* Cylinder core */}
          <mesh castShadow position={[0, 0.35, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.7, 10]} />
            <meshStandardMaterial color="#1e293b" roughness={0.35} metalness={0.7} />
          </mesh>
          {/* Chrome top */}
          <mesh castShadow position={[0, 0.702, 0]}>
            <cylinderGeometry args={[0.178, 0.178, 0.01, 10]} />
            <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Vent markings on cap top */}
          <mesh position={[0, 0.708, 0]}>
            <boxGeometry args={[0.015, 0.002, 0.28]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
          <mesh position={[0, 0.708, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.015, 0.002, 0.28]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
          {/* Decal insulator wrap stripe */}
          <mesh position={[0.155, 0.35, 0]}>
            <boxGeometry args={[0.05, 0.68, 0.1]} />
            <meshStandardMaterial color="#ffffff" roughness={0.4} />
          </mesh>
        </group>
      ))}

      {/* ── 8. THREE-LEGGED TRANSISTOR ARRAYS ── */}
      {transistors.map((t, idx) => (
        <group key={idx} position={[t.x, 0.09, t.z]}>
          {/* Transistor square body */}
          <mesh castShadow position={[0, 0.08, 0]}>
            <boxGeometry args={[0.16, 0.14, 0.16]} />
            <meshStandardMaterial color="#0f172a" roughness={0.8} />
          </mesh>
          {/* Metal heatsink tab */}
          <mesh castShadow position={[0, 0.17, 0.06]}>
            <boxGeometry args={[0.16, 0.04, 0.03]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Legs */}
          {[-0.05, 0, 0.05].map((lx, lIdx) => (
            <mesh key={lIdx} position={[lx, 0.02, -0.04]} rotation={[0.15, 0, 0]}>
              <cylinderGeometry args={[0.008, 0.008, 0.06, 4]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
            </mesh>
          ))}
        </group>
      ))}

      {/* ── 9. MOTHERBOARD POWER SOCKET (24-Pin ATX Connector Socket) ── */}
      <group position={[-4.8, 0.09, 1.8]}>
        {/* Socket base frame */}
        <mesh castShadow position={[0, 0.14, 0]}>
          <boxGeometry args={[0.7, 0.28, 1.8]} />
          <meshStandardMaterial color="#1e293b" roughness={0.65} />
        </mesh>
        {/* Snap clip */}
        <mesh castShadow position={[0.36, 0.14, 0]}>
          <boxGeometry args={[0.08, 0.2, 0.5]} />
          <meshStandardMaterial color="#0f172a" roughness={0.7} />
        </mesh>
        {/* Metallic pins */}
        {Array.from({ length: 10 }).map((_, i) => (
          <group key={i}>
            <mesh position={[-0.18, 0.22, i * 0.16 - 0.72]}>
              <cylinderGeometry args={[0.015, 0.015, 0.15, 4]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.95} roughness={0.05} />
            </mesh>
            <mesh position={[0.18, 0.22, i * 0.16 - 0.72]}>
              <cylinderGeometry args={[0.015, 0.015, 0.15, 4]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.95} roughness={0.05} />
            </mesh>
          </group>
        ))}
      </group>

      {/* ── 10. CR2032 BATTERY ── */}
      <group position={[4.6, 0.09, -2.6]}>
        {/* Casing holder */}
        <mesh castShadow position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.1, 16]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
        {/* Metal battery cell */}
        <mesh castShadow position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.06, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.98} roughness={0.02} />
        </mesh>
        {/* Cell text stamp indicator */}
        <mesh position={[0, 0.132, 0]}>
          <boxGeometry args={[0.02, 0.002, 0.28]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0, 0.132, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.02, 0.002, 0.28]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
      </group>

      {/* ── 11. SOLID STATE CHIPSET HEATSINK ── */}
      <group position={[3.8, 0.09, 0.8]}>
        <mesh castShadow position={[0, 0.15, 0]}>
          <boxGeometry args={[1.6, 0.3, 1.6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.35} metalness={0.85} />
        </mesh>
        {/* Diagonal fins overlay */}
        {[-0.6, -0.2, 0.2, 0.6].map((xOffset, i) => (
          <mesh key={i} castShadow position={[xOffset, 0.31, 0]} rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.1, 0.05, 1.8]} />
            <meshStandardMaterial color="#0f172a" metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* ── 12. FULL SCREEN RESTORATION FLASH WAVE GLOW MESH ── */}
      {flashIntensity > 0.01 && (
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[11.6, 0.02, 7.9]} />
          <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={flashIntensity * 0.9} 
          />
        </mesh>
      )}
    </group>
  );
}

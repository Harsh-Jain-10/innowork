import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export default function Motherboard3D({ 
  traceColor, 
  traceEmissiveIntensity, 
  flashIntensity,
  debugCode = "00",
  isFailed = false,
  isHealthy = true
}) {
  
  // Generate highly realistic procedural PCB circuit bump texture using CanvasTexture
  const pcbTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    // Deep dark green-black base
    ctx.fillStyle = '#04070c';
    ctx.fillRect(0, 0, 1024, 1024);
    
    // Draw micro-woven fiberglass grid lines
    ctx.strokeStyle = '#080d14';
    ctx.lineWidth = 1;
    for (let i = 0; i < 1024; i += 6) {
      ctx.beginPath();
      ctx.moveTo(i, 0); ctx.lineTo(i, 1024); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i); ctx.lineTo(1024, i); ctx.stroke();
    }
    
    // Draw micro copper paths (fine traces)
    ctx.strokeStyle = '#0e1628';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      let x = Math.random() * 1024;
      let y = Math.random() * 1024;
      ctx.moveTo(x, y);
      for (let j = 0; j < 3; j++) {
        const dir = Math.floor(Math.random() * 4);
        if (dir === 0) x += 50;
        else if (dir === 1) x -= 50;
        else if (dir === 2) y += 50;
        else y -= 50;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Draw circular micro solder pin pad arrays
    ctx.fillStyle = '#1e293b';
    for (let i = 0; i < 500; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 1024, Math.random() * 1024, 1.2 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  // Capacitors coordinate positions (x, z)
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

  // Emissive tracks coordinates
  const pcbTraces = [
    { pos: [-3.5, 0.105, 0], scale: [2.5, 0.005, 0.08] },
    { pos: [-2.0, 0.105, -1.2], scale: [0.08, 0.005, 1.8] },
    { pos: [-2.0, 0.105, 1.2], scale: [0.08, 0.005, 1.8] },
    { pos: [-0.2, 0.105, -1.0], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, -0.6], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, -0.2], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, 0.2], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, 0.6], scale: [2.8, 0.005, 0.04] },
    { pos: [-0.2, 0.105, 1.0], scale: [2.8, 0.005, 0.04] },
    { pos: [-2.4, 0.105, 2.5], scale: [0.05, 0.005, 1.2] },
    { pos: [-1.8, 0.105, 2.8], scale: [1.8, 0.005, 0.05] },
    { pos: [-3.4, 0.105, 2.0], scale: [2.6, 0.005, 0.12] }
  ];

  return (
    <group>
      {/* ── 1. PCB BOARD BASE (with procedural bump/roughness textures) ── */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[11.5, 0.18, 7.8]} />
        <meshStandardMaterial 
          color="#04070c" 
          roughness={0.65} 
          metalness={0.12} 
          bumpMap={pcbTexture}
          bumpScale={0.015}
          roughnessMap={pcbTexture}
        />
      </mesh>

      {/* ── 2. GLOWING COPPER CIRCUIT PATHS ── */}
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

      {/* ── 3. LGA PROCESSOR SOCKET & LOCK LEVER ── */}
      <group position={[-2.2, 0.09, 0]}>
        {/* Retention frame */}
        <mesh castShadow position={[0, 0.06, 0]}>
          <boxGeometry args={[2.4, 0.12, 2.4]} />
          <meshStandardMaterial color="#0f172a" roughness={0.7} metalness={0.2} />
        </mesh>
        
        {/* Metal clamp plate */}
        <mesh castShadow position={[0, 0.14, 0]}>
          <boxGeometry args={[2.1, 0.05, 2.1]} />
          <meshStandardMaterial color="#475569" roughness={0.28} metalness={0.88} />
        </mesh>

        {/* CPU Integrated Heat Spreader (IHS) */}
        <mesh castShadow position={[0, 0.18, 0]}>
          <boxGeometry args={[1.5, 0.04, 1.5]} />
          <meshStandardMaterial 
            color="#94a3b8" 
            roughness={0.12} 
            metalness={0.98} 
          />
        </mesh>

        {/* Core center die */}
        <mesh position={[0, 0.205, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.6]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive={traceColor}
            emissiveIntensity={traceEmissiveIntensity * 1.5}
            roughness={0.1}
          />
        </mesh>

        {/* Metal Lock retention lever arm */}
        <group position={[-1.24, 0.15, 1.1]}>
          {/* Main rod */}
          <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -1.1]}>
            <cylinderGeometry args={[0.02, 0.02, 2.2, 8]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Latch tip hook */}
          <mesh castShadow position={[0, 0.04, 0]} rotation={[0.4, 0, 0]}>
            <boxGeometry args={[0.05, 0.1, 0.12]} />
            <meshStandardMaterial color="#475569" metalness={0.9} />
          </mesh>
        </group>

        {/* Socket Labels */}
        <Html
          position={[0, 0.22, 0.9]}
          rotation={[-Math.PI / 2, 0, 0]}
          transform
          occlude
          distanceFactor={1.2}
        >
          <div style={{
            fontFamily: 'monospace',
            fontSize: '9px',
            color: 'rgba(255, 255, 255, 0.4)',
            whiteSpace: 'nowrap',
            userSelect: 'none'
          }}>
            INNOWORQ CORE
          </div>
        </Html>
      </group>

      {/* ── 4. MULTI-FIN ALUMINUM VRM HEATSINKS ── */}
      {/* VRM Fin Block 1 (Top) */}
      <group position={[-2.2, 0.09, -1.6]}>
        <mesh castShadow position={[0, 0.05, 0]}>
          <boxGeometry args={[2.0, 0.1, 0.5]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
        {/* 14 individual cooling fins */}
        {Array.from({ length: 14 }).map((_, i) => (
          <mesh key={i} castShadow position={[i * 0.14 - 0.91, 0.24, 0]}>
            <boxGeometry args={[0.03, 0.38, 0.46]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
          </mesh>
        ))}
      </group>

      {/* VRM Fin Block 2 (Left) */}
      <group position={[-3.8, 0.09, 0]}>
        <mesh castShadow position={[0, 0.05, 0]}>
          <boxGeometry args={[0.5, 0.1, 2.0]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
        {/* 14 individual cooling fins */}
        {Array.from({ length: 14 }).map((_, i) => (
          <mesh key={i} castShadow position={[0, 0.24, i * 0.14 - 0.91]}>
            <boxGeometry args={[0.46, 0.38, 0.03]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
          </mesh>
        ))}
      </group>

      {/* VRM Inductors (Chokes) */}
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

      {/* ── 5. DETAILED RAM SLOTS ── */}
      {[1.2, 1.5, 1.8, 2.1].map((rx, idx) => (
        <group key={idx} position={[rx, 0.09, 0]}>
          {/* Base track socket */}
          <mesh castShadow position={[0, 0.12, 0]}>
            <boxGeometry args={[0.12, 0.24, 5.0]} />
            <meshStandardMaterial color="#020617" roughness={0.7} />
          </mesh>
          
          {/* Ejector clips */}
          <mesh castShadow position={[0, 0.2, -2.48]}>
            <boxGeometry args={[0.16, 0.22, 0.08]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>
          <mesh castShadow position={[0, 0.2, 2.48]}>
            <boxGeometry args={[0.16, 0.22, 0.08]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>

          {/* Installed RAM module stick */}
          <mesh castShadow position={[0, 0.44, 0]}>
            <boxGeometry args={[0.035, 0.6, 4.8]} />
            <meshStandardMaterial color="#022c22" roughness={0.6} />
          </mesh>

          {/* DRAM chips */}
          {[-1.8, -0.9, 0, 0.9, 1.8].map((rz, cIdx) => (
            <mesh key={cIdx} castShadow position={[0.038, 0.54, rz]}>
              <boxGeometry args={[0.045, 0.22, 0.46]} />
              <meshStandardMaterial color="#090d16" roughness={0.85} />
            </mesh>
          ))}

          {/* Gold fingers pin contacts visible at base */}
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.05, 0.04, 4.6]} />
            <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* ── 6. PCIe EXPANSION SLOT ── */}
      <group position={[0, 0.09, 2.8]}>
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[4.4, 0.16, 0.16]} />
          <meshStandardMaterial color="#0f172a" roughness={0.75} />
        </mesh>
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[4.42, 0.14, 0.17]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh castShadow position={[2.1, 0.12, 0]}>
          <boxGeometry args={[0.12, 0.2, 0.22]} />
          <meshStandardMaterial color="#64748b" roughness={0.5} />
        </mesh>
      </group>

      {/* ── 7. 3D ELECTROLYTIC CAPACITORS ── */}
      {capacitors.map((pos, idx) => (
        <group key={idx} position={[pos[0], 0.09, pos[1]]}>
          {/* Cylinder body */}
          <mesh castShadow position={[0, 0.35, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.7, 12]} />
            <meshStandardMaterial color="#1e293b" roughness={0.35} metalness={0.7} />
          </mesh>
          {/* Steel Vent Cap */}
          <mesh castShadow position={[0, 0.702, 0]}>
            <cylinderGeometry args={[0.178, 0.178, 0.01, 12]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Vent Cross Cap marks */}
          <mesh position={[0, 0.708, 0]}>
            <boxGeometry args={[0.015, 0.002, 0.28]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
          <mesh position={[0, 0.708, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.015, 0.002, 0.28]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
          {/* Insulating stripe */}
          <mesh position={[0.155, 0.35, 0]}>
            <boxGeometry args={[0.05, 0.68, 0.1]} />
            <meshStandardMaterial color="#ffffff" roughness={0.4} />
          </mesh>
          {/* Lead wire contacts connecting to board */}
          <mesh position={[0.08, 0.01, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.06, 4]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} />
          </mesh>
          <mesh position={[-0.08, 0.01, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.06, 4]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} />
          </mesh>
        </group>
      ))}

      {/* ── 8. THREE-LEGGED TRANSISTOR ARRAYS ── */}
      {transistors.map((t, idx) => (
        <group key={idx} position={[t.x, 0.09, t.z]}>
          <mesh castShadow position={[0, 0.08, 0]}>
            <boxGeometry args={[0.16, 0.14, 0.16]} />
            <meshStandardMaterial color="#0f172a" roughness={0.8} />
          </mesh>
          <mesh castShadow position={[0, 0.17, 0.06]}>
            <boxGeometry args={[0.16, 0.04, 0.03]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
          </mesh>
          {[-0.05, 0, 0.05].map((lx, lIdx) => (
            <mesh key={lIdx} position={[lx, 0.02, -0.04]} rotation={[0.15, 0, 0]}>
              <cylinderGeometry args={[0.008, 0.008, 0.06, 4]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
            </mesh>
          ))}
        </group>
      ))}

      {/* ── 9. MOTHERBOARD POWER SOCKET (24-Pin ATX Socket) ── */}
      <group position={[-4.8, 0.09, 1.8]}>
        <mesh castShadow position={[0, 0.14, 0]}>
          <boxGeometry args={[0.7, 0.28, 1.8]} />
          <meshStandardMaterial color="#1e293b" roughness={0.65} />
        </mesh>
        <mesh castShadow position={[0.36, 0.14, 0]}>
          <boxGeometry args={[0.08, 0.2, 0.5]} />
          <meshStandardMaterial color="#0f172a" roughness={0.7} />
        </mesh>
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

      {/* ── 10. CR2032 BATTERY CELL ── */}
      <group position={[4.6, 0.09, -2.6]}>
        <mesh castShadow position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.1, 16]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
        <mesh castShadow position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.06, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.98} roughness={0.02} />
        </mesh>
      </group>

      {/* ── 11. SOLID STATE CHIPSET HEATSINK ── */}
      <group position={[3.8, 0.09, 0.8]}>
        <mesh castShadow position={[0, 0.15, 0]}>
          <boxGeometry args={[1.6, 0.3, 1.6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.35} metalness={0.85} />
        </mesh>
        {[-0.6, -0.2, 0.2, 0.6].map((xOffset, i) => (
          <mesh key={i} castShadow position={[xOffset, 0.31, 0]} rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.1, 0.05, 1.8]} />
            <meshStandardMaterial color="#0f172a" metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* ── 12. 7-SEGMENT LED DIAGNOSTIC CHIP DISPLAY (STANDBY/ALERT/RESTORE CODES) ── */}
      <group position={[-4.8, 0.09, -2.8]}>
        {/* Chip Case */}
        <mesh castShadow position={[0, 0.1, 0]}>
          <boxGeometry args={[0.8, 0.2, 0.6]} />
          <meshStandardMaterial color="#020617" roughness={0.8} />
        </mesh>
        {/* 7-Segment glowing LED text */}
        <Html
          position={[0, 0.22, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          transform
          occlude
          distanceFactor={1.2}
        >
          <div style={{
            fontFamily: 'monospace',
            fontSize: '24px',
            fontWeight: 'bold',
            color: isFailed ? "#ef4444" : isHealthy ? "#00f0ff" : "#ef4444",
            textShadow: isFailed ? '0 0 8px #ef4444' : '0 0 8px #00f0ff',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            transition: 'color 0.5s ease, text-shadow 0.5s ease'
          }}>
            {debugCode}
          </div>
        </Html>
      </group>

      {/* ── 13. FULL BOARD CLEANSING FLASH ── */}
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

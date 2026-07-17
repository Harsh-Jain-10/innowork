import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function NodeMesh() {
  const groupRef = useRef();
  const packetGroupRef = useRef();

  // Generate 45 nodes distributed on a sphere
  const { nodes, connections } = useMemo(() => {
    const tempNodes = [];
    const count = 45;
    const radius = 2.2;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      tempNodes.push(new THREE.Vector3(x, y, z));
    }

    // Find connections (nodes within a certain distance)
    const tempConnections = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = tempNodes[i].distanceTo(tempNodes[j]);
        if (dist < 1.45) {
          tempConnections.push(tempNodes[i]);
          tempConnections.push(tempNodes[j]);
        }
      }
    }
    return { nodes: tempNodes, connections: tempConnections };
  }, []);

  // Generate lines geometry
  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(connections);
  }, [connections]);

  // Set up packet particles traveling along connections
  const packets = useMemo(() => {
    const list = [];
    const packetCount = 18;
    for (let i = 0; i < packetCount; i++) {
      const connIdx = Math.floor(Math.random() * (connections.length / 2)) * 2;
      if (connections[connIdx] && connections[connIdx + 1]) {
        list.push({
          start: connections[connIdx],
          end: connections[connIdx + 1],
          progress: Math.random(),
          speed: 0.006 + Math.random() * 0.008
        });
      }
    }
    return list;
  }, [connections]);

  useFrame((state) => {
    const { pointer } = state;
    const time = state.clock.getElapsedTime();

    // Continuous slow rotation
    groupRef.current.rotation.y = time * 0.055;
    
    // Interactive mouse parallax tilt
    groupRef.current.rotation.y += pointer.x * 0.38;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.38, 0.05);

    // Animate data packet positions along connectivity traces
    if (packetGroupRef.current) {
      const children = packetGroupRef.current.children;
      packets.forEach((packet, idx) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1.0) {
          packet.progress = 0.0;
          // Dynamically route to a new node path
          const connIdx = Math.floor(Math.random() * (connections.length / 2)) * 2;
          packet.start = connections[connIdx];
          packet.end = connections[connIdx + 1];
        }
        if (children[idx]) {
          children[idx].position.lerpVectors(packet.start, packet.end, packet.progress);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central spinning Core wireframe */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </mesh>

      {/* Connectivity nodes */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color={idx % 3 === 0 ? "#00f0ff" : idx % 3 === 1 ? "#3b82f6" : "#fbbf24"} />
        </mesh>
      ))}

      {/* Grid paths */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#334155" transparent opacity={0.45} />
      </lineSegments>

      {/* Moving data packets */}
      <group ref={packetGroupRef}>
        {packets.map((_, idx) => (
          <mesh key={idx}>
            <sphereGeometry args={[0.026, 6, 6]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function GlobalConnectivitySphere() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        backgroundColor: '#020306',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Sci-Fi corner readouts */}
      <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 10 }}>
        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          SYS.TELEMETRY: ACTIVE_NODES
        </span>
      </div>
      
      <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', zIndex: 10, display: 'flex', gap: '1rem' }}>
        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#00f0ff', letterSpacing: '0.5px' }}>
          ● CLOUD NODES
        </span>
        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#fbbf24', letterSpacing: '0.5px' }}>
          ● ACTIVE INFRASTRUCTURE
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        style={{ cursor: 'grab' }}
      >
        <Suspense fallback={null}>
          <NodeMesh />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          
          <EffectComposer multisampling={4}>
            <Bloom luminanceThreshold={0.05} luminanceSmoothing={0.9} height={300} intensity={1.4} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

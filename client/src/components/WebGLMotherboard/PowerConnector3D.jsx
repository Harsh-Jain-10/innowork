import React, { forwardRef } from 'react';

const PowerConnector3D = forwardRef((props, ref) => {
  return (
    <group ref={ref} position={[-4.8, 5.0, 1.8]}>
      {/* Connector Plug Plastic Housing */}
      <mesh castShadow position={[0, 0.25, 0]}>
        <boxGeometry args={[0.66, 0.44, 1.76]} />
        <meshStandardMaterial color="#0b0f19" roughness={0.65} metalness={0.1} />
      </mesh>
      
      {/* Lock latch clip matching socket */}
      <mesh castShadow position={[0.34, 0.2, 0]}>
        <boxGeometry args={[0.08, 0.16, 0.4]} />
        <meshStandardMaterial color="#020617" roughness={0.7} />
      </mesh>

      {/* 24 wire lines extending upwards, curved slightly */}
      {Array.from({ length: 10 }).map((_, i) => {
        // Red, yellow, black wires
        const wireColor1 = i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#fbbf24" : "#0f172a";
        const wireColor2 = i % 3 === 2 ? "#ef4444" : i % 3 === 0 ? "#fbbf24" : "#0f172a";
        const zOffset = i * 0.16 - 0.72;

        return (
          <group key={i}>
            {/* Left row wire */}
            <mesh position={[-0.18, 0.8, zOffset]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, 6]} />
              <meshStandardMaterial color={wireColor1} roughness={0.5} />
            </mesh>
            {/* Right row wire */}
            <mesh position={[0.18, 0.8, zOffset]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, 6]} />
              <meshStandardMaterial color={wireColor2} roughness={0.5} />
            </mesh>
          </group>
        );
      })}

      {/* Wire bundle wrap collar */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.5, 0.1, 1.6]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>
    </group>
  );
});

export default PowerConnector3D;

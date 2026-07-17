import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';
import Motherboard3D from './Motherboard3D';
import PowerConnector3D from './PowerConnector3D';
import ForgingSystem from './ForgingSystem';

// Procedural Jagged Lightning Arc for electrical sparks & discharges
function LightningArc({ start, end, active, color }) {
  const lineRef = useRef();

  useFrame(() => {
    if (!active || !lineRef.current) return;
    const points = [];
    const segments = 6;
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const p = new THREE.Vector3().lerpVectors(startVec, endVec, t);
      if (i > 0 && i < segments) {
        // Jagged crackling offset
        p.x += (Math.random() - 0.5) * 0.16;
        p.y += (Math.random() - 0.5) * 0.16;
        p.z += (Math.random() - 0.5) * 0.16;
      }
      points.push(p);
    }
    lineRef.current.geometry.setFromPoints(points);
  });

  if (!active) return null;
  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color={color} linewidth={2.5} transparent opacity={0.8} />
    </line>
  );
}

export default function MotherboardScene({ onComplete }) {
  const { clock } = useThree();
  const connectorRef = useRef();
  const scannerRef = useRef();

  // Dynamic point lights animated to follow trace paths
  const traceLight1Ref = useRef();
  const traceLight2Ref = useRef();

  // Color & intensity states driven by ref to maintain high 60+ FPS
  const animValuesRef = useRef({
    cameraPos: [-2.2, 0.6, 1.2],
    cameraLook: [-2.2, 0.1, 0],
    traceColor: '#0ea5e9', // Starts blue
    traceIntensity: 0.15,
    flashIntensity: 0.0,
    shakeIntensity: 0.0,
    debugCode: "00",
    isFailed: false,
    isHealthy: true,
    connectorSparks: false,
    pathDischarge: false,
    traceLight1Pos: [-4.8, 0.4, 1.8],
    traceLight2Pos: [-2.2, 0.4, 0.0],
    traceLightIntensity: 0.0,
    letters: Array.from({ length: 8 }).map((_, i) => ({
      x: [2.0, 2.52, 3.04, 3.56, 4.08, 4.6, 5.12, 5.64][i],
      y: 5.0,
      visible: false,
      vibrate: false,
      fountainIntensity: 0,
      shockwaveScale: 0.1,
      shockwaveOpacity: 0.0,
      particlesActive: false,
      particleTimer: 0.0
    }))
  });

  // Local React states for elements that render statically
  const [traceColorState, setTraceColorState] = useState('#0ea5e9');
  const [traceIntensityState, setTraceIntensityState] = useState(0.15);
  const [flashIntensityState, setFlashIntensityState] = useState(0);
  const [debugCodeState, setDebugCodeState] = useState("00");
  const [isFailedState, setIsFailedState] = useState(false);
  const [isHealthyState, setIsHealthyState] = useState(true);
  const [connectorSparksState, setConnectorSparksState] = useState(false);
  const [pathDischargeState, setPathDischargeState] = useState(false);
  const [letterStates, setLetterStates] = useState(animValuesRef.current.letters);

  useEffect(() => {
    const val = animValuesRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // ── SCENE 1: BOOT & STANDBY STATE (0s - 4.5s) ──
    tl.to(val.cameraPos, {
      0: -2.6, 1: 0.8, 2: 1.4,
      duration: 4.5,
      ease: 'power1.inOut'
    });

    // ── SCENE 2: SYSTEM FAILURE & HEARTBEAT RED ALARM (4.5s - 8.5s) ──
    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.traceColor = '#ef4444'; // turn red
        setTraceColorState('#ef4444');
        val.debugCode = "E8"; // Error Warning Code
        setDebugCodeState("E8");
        val.isFailed = true;
        setIsFailedState(true);
        val.isHealthy = false;
        setIsHealthyState(false);
        val.shakeIntensity = 0.14; // Camera vibration
      }
    }, 4.5);

    tl.to(val, {
      shakeIntensity: 0.0,
      duration: 0.6,
      ease: 'power2.out'
    }, 4.6);

    // Heartbeat warning pulses
    const heartbeatTimes = [4.7, 5.7, 6.7, 7.7];
    heartbeatTimes.forEach((time) => {
      tl.to(val, {
        traceIntensity: 1.8,
        duration: 0.2,
        ease: 'power1.out',
        onUpdate: () => setTraceIntensityState(val.traceIntensity)
      }, time);
      tl.to(val, {
        traceIntensity: 0.2,
        duration: 0.5,
        ease: 'power1.inOut',
        onUpdate: () => setTraceIntensityState(val.traceIntensity)
      }, time + 0.2);
    });

    // Camera zooms close to error socket
    tl.to(val.cameraPos, {
      0: -2.3, 1: 0.5, 2: 1.0,
      duration: 4.0,
      ease: 'power2.inOut'
    }, 4.5);

    // ── SCENE 3: INDUSTRIAL POWER CONNECTOR INJECTION (8.5s - 11.5s) ──
    // camera pans to look at socket
    tl.to(val.cameraPos, {
      0: -4.1, 1: 1.2, 2: 3.2,
      duration: 2.2,
      ease: 'power2.inOut'
    }, 8.5);
    tl.to(val.cameraLook, {
      0: -4.8, 1: 0.1, 2: 1.8,
      duration: 2.2,
      ease: 'power2.inOut'
    }, 8.5);

    // Plug descends
    if (connectorRef.current) {
      tl.to(connectorRef.current.position, {
        y: 0.28,
        duration: 2.0,
        ease: 'back.out(1.1)'
      }, 9.0);
    }

    // Spark pre-connect crackle
    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.connectorSparks = true;
        setConnectorSparksState(true);
      }
    }, 10.4);

    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.connectorSparks = false;
        setConnectorSparksState(false);
      }
    }, 10.95);

    // Snap & Snap Discharge Event
    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.traceColor = '#00f0ff'; // swap to cyan
        setTraceColorState('#00f0ff');
        val.traceIntensity = 3.5;
        setTraceIntensityState(3.5);
        val.flashIntensity = 1.0;
        setFlashIntensityState(1.0);
        val.shakeIntensity = 0.25; // snap impact vibration
        val.pathDischarge = true;
        setPathDischargeState(true);
        val.traceLightIntensity = 4.0;
      }
    }, 11.0);

    // Power Point Light 1 flows from ATX Socket to CPU
    tl.to(val.traceLight1Pos, {
      0: -2.2, 1: 0.4, 2: 0.0,
      duration: 0.6,
      ease: 'power1.out'
    }, 11.0);

    // Power Point Light 2 flows from CPU to RAM and Chipset
    tl.to(val.traceLight2Pos, {
      0: 2.8, 1: 0.4, 2: 0.8,
      duration: 0.7,
      ease: 'power1.out'
    }, 11.4);

    // Decays flash & shake
    tl.to(val, {
      flashIntensity: 0.0,
      shakeIntensity: 0.0,
      traceIntensity: 0.8,
      traceLightIntensity: 0.0,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        setFlashIntensityState(val.flashIntensity);
        setTraceIntensityState(val.traceIntensity);
      },
      onComplete: () => {
        val.pathDischarge = false;
        setPathDischargeState(false);
      }
    }, 11.1);

    // ── SCENE 4: SIGNATURE FORGING FOR ALL 8 LETTERS (11.5s - 22s) ──
    const letterXCoords = [2.0, 2.52, 3.04, 3.56, 4.08, 4.6, 5.12, 5.64];
    const letterStartTimes = [11.5, 12.8, 14.1, 15.4, 16.7, 18.0, 19.3, 20.6];

    letterStartTimes.forEach((startTime, idx) => {
      const targetX = letterXCoords[idx];

      // Pan camera to follow letter position
      tl.to(val.cameraPos, {
        0: targetX, 1: 1.0, 2: 3.2,
        duration: 1.1,
        ease: 'power1.inOut'
      }, startTime - 0.2);

      tl.to(val.cameraLook, {
        0: targetX, 1: 0.2, 2: 1.3,
        duration: 1.1,
        ease: 'power1.inOut'
      }, startTime - 0.2);

      // Transistor cluster vibration build
      tl.to({}, {
        duration: 0.1,
        onStart: () => {
          val.letters[idx].visible = true;
          val.letters[idx].vibrate = true;
          setLetterStates([...val.letters]);
        }
      }, startTime);

      // Fountain build
      tl.to(val.letters[idx], {
        fountainIntensity: 1.0,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => setLetterStates([...val.letters])
      }, startTime);

      // Letter falling landing
      tl.to(val.letters[idx], {
        y: 0.0,
        duration: 0.8,
        ease: 'bounce.out'
      }, startTime + 0.4);

      // Land impact shockwave, sparks, shake
      tl.to({}, {
        duration: 0.1,
        onStart: () => {
          val.letters[idx].vibrate = false;
          val.letters[idx].fountainIntensity = 0.0;
          val.letters[idx].shockwaveOpacity = 1.0;
          val.letters[idx].particlesActive = true;
          val.shakeIntensity = 0.12;
          setLetterStates([...val.letters]);
        }
      }, startTime + 1.2);

      // Shockwave expand decay
      tl.to(val.letters[idx], {
        shockwaveScale: 3.5,
        shockwaveOpacity: 0.0,
        particleTimer: 1.0,
        duration: 0.8,
        ease: 'power2.out',
        onUpdate: () => setLetterStates([...val.letters]),
        onComplete: () => {
          val.letters[idx].particlesActive = false;
          setLetterStates([...val.letters]);
        }
      }, startTime + 1.21);

      tl.to(val, {
        shakeIntensity: 0.0,
        duration: 0.3
      }, startTime + 1.25);
    });

    // ── SCENE 5: PULL BACK & STABILIZE LOGO (22s - 26s) ──
    tl.to(val.cameraPos, {
      0: 2.2, 1: 4.8, 2: 5.6,
      duration: 3.5,
      ease: 'power2.inOut'
    }, 22.0);

    tl.to(val.cameraLook, {
      0: 2.2, 1: 0.1, 2: 1.3,
      duration: 3.5,
      ease: 'power2.inOut'
    }, 22.0);

    // Restores display nominal status code
    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.debugCode = "FF"; // Boot Success Nominal Code
        setDebugCodeState("FF");
        val.isFailed = false;
        setIsFailedState(false);
        val.isHealthy = true;
        setIsHealthyState(true);
      }
    }, 22.2);

    // Stable soft trace glows
    tl.to(val, {
      traceIntensity: 1.3,
      duration: 2.0,
      ease: 'power1.inOut',
      onUpdate: () => setTraceIntensityState(val.traceIntensity)
    }, 22.5);

  }, [onComplete]);

  // Handle R3F camera position, target interpolation, scanner rotations, and point light paths
  useFrame(({ camera }) => {
    const val = animValuesRef.current;
    const time = clock.getElapsedTime();

    // 1. Handheld Camera Sway
    const swayX = Math.sin(time * 1.5) * 0.035;
    const swayY = Math.cos(time * 1.2) * 0.035;

    // 2. Impact Vibration Shake
    const shakeX = (Math.random() - 0.5) * val.shakeIntensity;
    const shakeY = (Math.random() - 0.5) * val.shakeIntensity;

    camera.position.set(
      val.cameraPos[0] + swayX + shakeX,
      val.cameraPos[1] + swayY + shakeY,
      val.cameraPos[2]
    );

    camera.lookAt(
      val.cameraLook[0] + shakeX,
      val.cameraLook[1] + shakeY,
      val.cameraLook[2]
    );

    // 3. Volumetric Spotlight Cone Scan rotation
    if (scannerRef.current) {
      scannerRef.current.rotation.z = Math.sin(time * 0.8) * 0.18;
      scannerRef.current.rotation.x = Math.cos(time * 0.6) * 0.12;
    }

    // 4. Update dynamic trace point lights position
    if (traceLight1Ref.current) {
      traceLight1Ref.current.position.set(...val.traceLight1Pos);
    }
    if (traceLight2Ref.current) {
      traceLight2Ref.current.position.set(...val.traceLight2Pos);
    }
  });

  return (
    <>
      {/* ── Lighting ── */}
      <ambientLight intensity={0.14} />
      <directionalLight 
        position={[4, 10, 5]} 
        intensity={1.25} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
      />
      <pointLight position={[-4, 3, -3]} intensity={0.4} />

      {/* Volumetric Scan Light Cylinder */}
      <group position={[0, 4.5, 0]} ref={scannerRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.8, 2.5, 8.0, 16, 1, true]} />
          <meshBasicMaterial 
            color={isFailedState ? "#ef4444" : "#00f0ff"} 
            transparent 
            opacity={0.025} 
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* ── Dynamic Trace Point Lights (flowing power packets) ── */}
      {pathDischargeState && (
        <>
          <pointLight 
            ref={traceLight1Ref} 
            color="#00f0ff" 
            intensity={animValuesRef.current.traceLightIntensity} 
            distance={4} 
          />
          <pointLight 
            ref={traceLight2Ref} 
            color="#00f0ff" 
            intensity={animValuesRef.current.traceLightIntensity} 
            distance={4} 
          />
        </>
      )}

      {/* ── Procedural Electrical Arcs ── */}
      {/* ATX Connect socket sparks */}
      <LightningArc 
        start={[-4.8, 1.2, 1.8]} 
        end={[-4.8, 0.35, 1.8]} 
        active={connectorSparksState} 
        color="#00f0ff" 
      />
      <LightningArc 
        start={[-4.6, 1.2, 2.0]} 
        end={[-4.6, 0.35, 2.0]} 
        active={connectorSparksState} 
        color="#fbbf24" 
      />

      {/* Circuit discharge trace crackles */}
      <LightningArc 
        start={[-4.8, 0.22, 1.8]} 
        end={[-2.2, 0.25, 0]} 
        active={pathDischargeState} 
        color="#00f0ff" 
      />

      {/* Environmental reflections */}
      <Environment preset="warehouse" />

      {/* ── scene objects ── */}
      <Motherboard3D 
        traceColor={traceColorState} 
        traceEmissiveIntensity={traceIntensityState}
        flashIntensity={flashIntensityState}
        debugCode={debugCodeState}
        isFailed={isFailedState}
        isHealthy={isHealthyState}
      />

      <PowerConnector3D ref={connectorRef} />

      <ForgingSystem 
        letterStates={letterStates} 
        letters={['I', 'N', 'N', 'O', 'W', 'O', 'R', 'Q']}
      />
    </>
  );
}

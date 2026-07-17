import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import Motherboard3D from './Motherboard3D';
import PowerConnector3D from './PowerConnector3D';
import ForgingSystem from './ForgingSystem';

export default function MotherboardScene({ onComplete }) {
  const { clock } = useThree();
  const connectorRef = useRef();

  // Color & intensity states driven by ref to maintain high 60+ FPS
  const animValuesRef = useRef({
    cameraPos: [-2.2, 0.6, 1.2],
    cameraLook: [-2.2, 0.1, 0],
    traceColor: '#0ea5e9', // Starts blue
    traceIntensity: 0.15,
    flashIntensity: 0.0,
    shakeIntensity: 0.0,
    letters: Array.from({ length: 8 }).map((_, i) => ({
      x: [-4.0, -2.8, -1.6, -0.4, 0.8, 2.0, 3.2, 4.4][i],
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

  // Local React states for components reading values not in useFrame loop
  const [traceColorState, setTraceColorState] = useState('#0ea5e9');
  const [traceIntensityState, setTraceIntensityState] = useState(0.15);
  const [flashIntensityState, setFlashIntensityState] = useState(0);
  const [letterStates, setLetterStates] = useState(animValuesRef.current.letters);

  useEffect(() => {
    const val = animValuesRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // ── STAGE 1: SYSTEM BOOT (0s - 3s) ──
    tl.to(val.cameraPos, {
      0: -2.6, 1: 0.8, 2: 1.4,
      duration: 3,
      ease: 'power1.inOut'
    });

    // ── STAGE 2: INTRUSION GLITCH & HEARTBEAT ALARM (3s - 7s) ──
    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.traceColor = '#ef4444'; // turn red
        setTraceColorState('#ef4444');
        val.shakeIntensity = 0.15; // Camera shake
      }
    }, 3.0);

    tl.to(val, {
      shakeIntensity: 0.0,
      duration: 0.6,
      ease: 'power2.out'
    }, 3.1);

    // Alert red trace heartbeat pulses
    const heartbeatTimes = [3.2, 4.2, 5.2, 6.2];
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

    // Camera zooms close to error
    tl.to(val.cameraPos, {
      0: -2.3, 1: 0.5, 2: 1.0,
      duration: 3.5,
      ease: 'power2.inOut'
    }, 3.2);

    // ── STAGE 3: POWER CONNECTOR INJECTION (7s - 10s) ──
    // camera pans to power socket
    tl.to(val.cameraPos, {
      0: -4.1, 1: 1.2, 2: 3.2,
      duration: 2.2,
      ease: 'power2.inOut'
    }, 7.0);
    tl.to(val.cameraLook, {
      0: -4.8, 1: 0.1, 2: 1.8,
      duration: 2.2,
      ease: 'power2.inOut'
    }, 7.0);

    // Plug descends and snaps in
    if (connectorRef.current) {
      tl.to(connectorRef.current.position, {
        y: 0.25,
        duration: 1.8,
        ease: 'back.out(1.1)'
      }, 7.5);
    }

    // ── STAGE 4: ELECTRICAL DISCHARGE & CLEANSE (10s - 11.5s) ──
    tl.to({}, {
      duration: 0.1,
      onStart: () => {
        val.traceColor = '#00f0ff'; // Turn cyan
        setTraceColorState('#00f0ff');
        val.traceIntensity = 3.5;
        setTraceIntensityState(3.5);
        val.flashIntensity = 1.0;
        setFlashIntensityState(1.0);
        val.shakeIntensity = 0.25; // Shake on connect snap
      }
    }, 9.3);

    // Decays flash & trace intensity to nominal values
    tl.to(val, {
      flashIntensity: 0.0,
      shakeIntensity: 0.0,
      traceIntensity: 0.8,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        setFlashIntensityState(val.flashIntensity);
        setTraceIntensityState(val.traceIntensity);
      }
    }, 9.4);

    // ── STAGE 5: LETTER FORGING SEQUENCES (11s - 22s) ──
    const letterXCoords = [-4.0, -2.8, -1.6, -0.4, 0.8, 2.0, 3.2, 4.4];
    const letterStartTimes = [11.0, 12.3, 13.6, 14.9, 16.2, 17.5, 18.8, 20.1];

    letterStartTimes.forEach((startTime, idx) => {
      const targetX = letterXCoords[idx];

      // Pan camera to look at the letter forging spot
      tl.to(val.cameraPos, {
        0: targetX, 1: 0.9, 2: 2.2,
        duration: 1.1,
        ease: 'power1.inOut'
      }, startTime - 0.2);

      tl.to(val.cameraLook, {
        0: targetX, 1: 0.2, 2: 0,
        duration: 1.1,
        ease: 'power1.inOut'
      }, startTime - 0.2);

      // 1. Build Phase: Transistor vibrates & Energy builds
      tl.to({}, {
        duration: 0.1,
        onStart: () => {
          val.letters[idx].visible = true;
          val.letters[idx].vibrate = true;
          setLetterStates([...val.letters]);
        }
      }, startTime);

      // Energy fountain scales up
      tl.to(val.letters[idx], {
        fountainIntensity: 1.0,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => setLetterStates([...val.letters])
      }, startTime);

      // 2. Forge & Fall Phase: Letter drops from energy fountain
      tl.to(val.letters[idx], {
        y: 0.0,
        duration: 0.8,
        ease: 'bounce.out' // Snappy weight landing
      }, startTime + 0.4);

      // 3. Landing Phase: Shockwave, particle burst, camera vibration
      tl.to({}, {
        duration: 0.1,
        onStart: () => {
          val.letters[idx].vibrate = false;
          val.letters[idx].fountainIntensity = 0.0;
          val.letters[idx].shockwaveOpacity = 1.0;
          val.letters[idx].particlesActive = true;
          val.shakeIntensity = 0.12; // Camera vibration on impact
          setLetterStates([...val.letters]);
        }
      }, startTime + 1.2);

      // Animate shockwave expanding and fading
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

      // Decays camera vibration
      tl.to(val, {
        shakeIntensity: 0.0,
        duration: 0.3
      }, startTime + 1.25);
    });

    // ── STAGE 6: PULL BACK & STABILIZE (22s - 25s) ──
    tl.to(val.cameraPos, {
      0: 0.2, 1: 4.8, 2: 5.6,
      duration: 3.2,
      ease: 'power2.inOut'
    }, 21.8);

    tl.to(val.cameraLook, {
      0: 0.2, 1: 0.1, 2: 0,
      duration: 3.2,
      ease: 'power2.inOut'
    }, 21.8);

    // Branding glows softly at end
    tl.to(val, {
      traceIntensity: 1.3,
      duration: 2.0,
      ease: 'power1.inOut',
      onUpdate: () => setTraceIntensityState(val.traceIntensity)
    }, 22.0);

  }, [onComplete]);

  // Handle camera position updates and handheld shake in useFrame
  useFrame(({ camera }) => {
    const val = animValuesRef.current;
    const time = clock.getElapsedTime();

    // 1. Handheld Camera Sway (Subtle noise/sine wave)
    const swayX = Math.sin(time * 1.4) * 0.035;
    const swayY = Math.cos(time * 1.1) * 0.035;

    // 2. Camera Shake (Explosions/Glitches impact)
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
  });

  return (
    <>
      {/* ── Lighting Setup ── */}
      <ambientLight intensity={0.12} />
      <directionalLight 
        position={[5, 12, 4]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
      />
      <pointLight position={[-4, 3, -2]} intensity={0.5} />
      
      {/* Dynamic light at connector plug */}
      {traceIntensityState > 1.5 && (
        <pointLight position={[-4.8, 0.4, 1.8]} color="#00f0ff" intensity={2.5} distance={5} />
      )}

      {/* HDR Environmental reflections */}
      <Environment preset="warehouse" />

      {/* ── 3D Scene Components ── */}
      <Motherboard3D 
        traceColor={traceColorState} 
        traceEmissiveIntensity={traceIntensityState}
        flashIntensity={flashIntensityState}
      />

      <PowerConnector3D ref={connectorRef} />

      <ForgingSystem 
        letterStates={letterStates} 
        letters={['I', 'N', 'N', 'O', 'W', 'O', 'R', 'Q']}
      />
    </>
  );
}

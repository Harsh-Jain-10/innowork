import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MotherboardScene from './WebGLMotherboard/MotherboardScene';

export default function BrandRevealPanel() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Delay loader screen to let WebGL scene compile and mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/');
    }, 1000); // 1 second fade-out transition
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/');
    }, 450); // Snappy 450ms skip transition
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '620px',
        backgroundColor: '#020306',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ── 1. MAIN WEBGL CANVAS ── */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          >
            <Canvas
              shadows
              camera={{ fov: 45, near: 0.1, far: 20, position: [-2.2, 0.6, 1.2] }}
              gl={{ 
                antialias: true, 
                powerPreference: 'high-performance',
                toneMapping: 3 // ACESFilmicToneMapping
              }}
            >
              <Suspense fallback={null}>
                <MotherboardScene onComplete={handleComplete} />
                
                {/* ── Cinematic Post-Processing ── */}
                <EffectComposer multisampling={4}>
                  {/* Depth of Field with shallow focus */}
                  <DepthOfField 
                    focusDistance={0.012} 
                    focalLength={0.03} 
                    bokehScale={4.0} 
                  />
                  {/* Ambient Bloom for glowing neon traces, sparks, and letters */}
                  <Bloom 
                    luminanceThreshold={0.12} 
                    luminanceSmoothing={0.9} 
                    height={300} 
                    intensity={1.8} 
                  />
                  {/* Dark corner vignette */}
                  <Vignette eskil={false} offset={0.1} darkness={1.2} />
                </EffectComposer>
              </Suspense>
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. DIAGNOSTIC LOADER SCREEN ── */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#020306',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'monospace',
              color: '#00f0ff',
              gap: '1.25rem',
            }}
          >
            {/* Spinning load ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 240, 255, 0.1)',
                borderTop: '2px solid #00f0ff',
              }}
            />
            <motion.div
              animate={{ opacity: [0.4, 1.0, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: '0.72rem', letterSpacing: '3px', fontWeight: 'bold' }}
            >
              INNOWORQ // WEBGL_COMPILING_SHADERS
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 3. SKIP INTRO BUTTON ── */}
      {isLoaded && !isExiting && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          whileHover={{ opacity: 1.0, scale: 1.05 }}
          onClick={handleSkip}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '30px',
            color: '#ffffff',
            padding: '0.45rem 1.25rem',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
            outline: 'none',
          }}
        >
          Skip Intro ➔
        </motion.button>
      )}

      {/* ── 4. OVERALL TRANSITION FADE BACKDROP ── */}
      {isExiting && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#020306',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}
    </div>
  );
}

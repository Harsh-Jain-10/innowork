import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function BrandRevealPanel() {
  const containerRef = useRef(null);
  
  // Trigger animations when the panel is 25% visible in the viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  
  // Timeline loop phases: 'normal' | 'alert' | 'bridge' | 'spark' | 'glow'
  const [phase, setPhase] = useState('normal');
  const [telemetryLogs, setTelemetryLogs] = useState([]);

  // Telemetry logger helper
  const addLog = (msg) => {
    const timestamp = new Date().toLocaleTimeString([], { hour12: false });
    setTelemetryLogs(prev => [`[${timestamp}] ${msg}`, ...prev].slice(0, 7));
  };

  useEffect(() => {
    let timer;
    let logIntervals = [];

    const runSequence = () => {
      // Phase 0: Normal Operation (0s - 4.5s)
      setPhase('normal');
      setTelemetryLogs([]);
      addLog("SYS_BOOT: SYSTEM NOMINAL");
      
      logIntervals.push(setTimeout(() => addLog("CORE_PWR: 1.25V STABLE"), 1000));
      logIntervals.push(setTimeout(() => addLog("PCIe_LINK: GEN5 x16 NOMINAL"), 2000));
      logIntervals.push(setTimeout(() => addLog("RAM_INTEGRITY: 99.98% OK"), 3000));

      // Phase 1: Cyber Attack / Hardware Tampering (4.5s - 8s)
      const tAlert = setTimeout(() => {
        setPhase('alert');
        addLog("CRITICAL: SYS_GLITCH DETECTED");
        addLog("ALERT: PATH_BREACH AT TRACE_X08");
        addLog("WARN: DISCONNECT DETECTED - MAIN LINE DOWN");
      }, 4500);

      // Phase 2: Redundant Failover Wire Drawing (8s - 11.5s)
      const tBridge = setTimeout(() => {
        setPhase('bridge');
        addLog("SYS: ENGAGING REDUNDANT FAILOVER...");
        addLog("SYS: DRAWING BACKUP BRIDGE WIRE");
      }, 8000);

      // Phase 3: Wire Join Spark & Cleanse (11.5s - 13s)
      const tSpark = setTimeout(() => {
        setPhase('spark');
        addLog("BRIDGE: CONNECTION SECURED");
        addLog("SYS: SPARK IGNITING - FLUSHING FAULTS");
      }, 11500);

      // Phase 4: System Restored & INNOWORQ Glow-up (13s - 17s)
      const tGlow = setTimeout(() => {
        setPhase('glow');
        addLog("SYS: ENCRYPTION ACTIVE - SYSTEM NOMINAL");
        addLog("SLA_STATUS: 100% OPERATIONAL");
        addLog("PARTNER: INNOWORQ SECURED");
      }, 13000);

      // Loop restart
      timer = setTimeout(() => {
        runSequence();
      }, 17000);

      return () => {
        clearTimeout(tAlert);
        clearTimeout(tBridge);
        clearTimeout(tSpark);
        clearTimeout(tGlow);
      };
    };

    if (isInView) {
      const innerCleanup = runSequence();
      return () => {
        innerCleanup();
        clearTimeout(timer);
        logIntervals.forEach(clearTimeout);
      };
    }
  }, [isInView]);

  // Letters of the brand name
  const letters = ["I", "N", "N", "O", "W", "O", "R", "Q"];

  // Motherboard background details
  const motherboardPins = [
    { cx: 80, cy: 80 }, { cx: 220, cy: 80 }, { cx: 300, cy: 120 },
    { cx: 720, cy: 80 }, { cx: 580, cy: 80 }, { cx: 500, cy: 120 },
    { cx: 80, cy: 500 }, { cx: 220, cy: 500 }, { cx: 300, cy: 460 },
    { cx: 720, cy: 500 }, { cx: 580, cy: 500 }, { cx: 500, cy: 460 },
    { cx: 400, cy: 50 }, { cx: 400, cy: 530 }, { cx: 100, cy: 290 }, { cx: 700, cy: 290 }
  ];

  // Circuit trace paths
  const traceLines = [
    { d: "M 80 80 H 220 L 330 190 H 370", delay: 0 },
    { d: "M 720 80 H 580 L 470 190 H 430", delay: 0.3 },
    { d: "M 80 500 H 220 L 330 390 H 370", delay: 0.6 },
    { d: "M 720 500 H 580 L 470 390 H 430", delay: 0.9 },
    { d: "M 400 50 V 190", delay: 0.2 },
    { d: "M 400 530 V 390", delay: 0.8 },
    { d: "M 100 290 H 330", delay: 0.5 },
    { d: "M 700 290 H 470", delay: 1.1 }
  ];

  // RAM slots vertical definitions
  const ramSlots = [
    { x: 570, label: "DIMM_A1" },
    { x: 585, label: "DIMM_A2" },
    { x: 605, label: "DIMM_B1" },
    { x: 620, label: "DIMM_B2" }
  ];

  // Decoupling Capacitors (Cylinder 3D circles with cross markings)
  const capacitors = [
    { cx: 270, cy: 190 },
    { cx: 270, cy: 390 },
    { cx: 510, cy: 160 },
    { cx: 515, cy: 420 },
    { cx: 340, cy: 100 },
    { cx: 460, cy: 100 },
    { cx: 140, cy: 480 }
  ];

  // Transistors details (Three legged shapes)
  const transistors = [
    { tx: 250, ty: 120 },
    { tx: 180, ty: 220 },
    { tx: 150, ty: 330 },
    { tx: 530, ty: 220 },
    { tx: 530, ty: 360 }
  ];

  // Red Alert state check
  const isFailed = phase === 'alert' || phase === 'bridge';
  const isSparking = phase === 'spark';
  const isHealthy = phase === 'normal' || phase === 'glow';

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '580px',
        backgroundColor: '#020306',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isFailed
          ? 'radial-gradient(circle at center, #24050a 0%, #020306 100%)'
          : isSparking 
            ? 'radial-gradient(circle at center, #0c335e 0%, #020306 100%)'
            : 'radial-gradient(circle at center, #050e1f 0%, #010204 100%)',
        transition: 'background 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="brand-reveal-panel"
    >
      {/* ── 1. RED ALERT HEARTBEAT BLINK OVERLAY (Phase: alert, bridge) ── */}
      {isFailed && (
        <motion.div
          animate={{
            opacity: [0.3, 0.75, 0.3],
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, transparent 70%)',
            filter: 'blur(35px)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* ── 2. FULL SCREEN CLEANSE WHITE FLASH (Phase: spark) ── */}
      <AnimatePresence>
        {isSparking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 99,
              backgroundColor: '#ffffff',
              mixBlendMode: 'screen',
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      {/* ── 3. GLOWING AMBIENT CORE LIGHTS (Phase: normal, glow) ── */}
      {isHealthy && (
        <motion.div
          animate={{ 
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '75%',
            height: '75%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, rgba(9, 97, 159, 0.02) 60%, transparent 80%)',
            filter: 'blur(50px)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Glass sheen overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.015) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* ── 4. DETAILED HARDWARE MOTHERBOARD ── */}
      <svg 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        viewBox="0 0 800 580"
      >
        <defs>
          <linearGradient id="trace-failed-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.35)" />
            <stop offset="100%" stopColor="rgba(220, 38, 38, 0.05)" />
          </linearGradient>
          <linearGradient id="trace-normal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(9, 97, 159, 0.05)" />
          </linearGradient>

          <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fine Silicon Mesh Grid */}
        <g stroke="rgba(255, 255, 255, 0.012)" strokeWidth="0.5">
          {Array.from({ length: 41 }).map((_, i) => (
            <line key={`x-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="580" />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`y-${i}`} x1="0" y1={i * 20} x2="800" y2={i * 20} />
          ))}
        </g>

        {/* ── Motherboard Circuit Tracks ── */}
        <g>
          {traceLines.map((line, idx) => (
            <path
              key={idx}
              d={line.d}
              fill="none"
              stroke={isFailed ? "url(#trace-failed-grad)" : "url(#trace-normal-grad)"}
              strokeWidth="1.5"
              style={{ transition: 'stroke 1.2s ease-in-out' }}
            />
          ))}
        </g>

        {/* Solder Joints */}
        <g fill={isFailed ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 240, 255, 0.2)"}>
          {motherboardPins.map((pin, idx) => (
            <circle
              key={idx}
              cx={pin.cx}
              cy={pin.cy}
              r="2.5"
              style={{ transition: 'fill 1.2s ease-in-out' }}
            />
          ))}
        </g>

        {/* ── Motherboard Components Drawing ── */}

        {/* A. BIOS Chip */}
        <g transform="translate(110, 150)">
          <rect x="0" y="0" width="40" height="40" rx="3" fill="#111827" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <rect x="5" y="5" width="30" height="30" fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.75" />
          {/* Pins */}
          {[0, 1, 2, 3].map(i => (
            <g key={i}>
              <line x1="-4" y1={8 + i * 8} x2="0" y2={8 + i * 8} stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />
              <line x1="40" y1={8 + i * 8} x2="44" y2={8 + i * 8} stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />
            </g>
          ))}
          <text x="20" y="24" fontSize="5.5" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">BIOS_U1</text>
        </g>

        {/* B. CR2032 Battery */}
        <g transform="translate(130, 360)">
          <circle cx="20" cy="20" r="22" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="4" />
          <circle cx="20" cy="20" r="20" fill="rgba(30, 41, 59, 0.6)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
          <path d="M 12 20 H 28 M 20 12 V 28" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <text x="20" y="49" fontSize="6" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace">CR2032 BATTERY</text>
        </g>

        {/* C. PCIe slot (Bottom-Left) */}
        <g transform="translate(80, 450)">
          <rect x="0" y="0" width="220" height="12" rx="2" fill="#0f172a" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="8" y1="6" x2="200" y2="6" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* PCIe Latch */}
          <path d="M 210 2 L 218 6 L 210 10 Z" fill="rgba(255, 255, 255, 0.25)" />
          <text x="110" y="-6" fontSize="6.5" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace">PCIEX16_SLOT1</text>
        </g>

        {/* D. Vertical RAM slots (DIMM slots) */}
        {ramSlots.map((slot, idx) => (
          <g key={idx} transform={`translate(${slot.x}, 140)`}>
            {/* Slot slot */}
            <rect x="0" y="0" width="8" height="280" rx="1.5" fill="#0b0f19" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            
            {/* RAM Module inserted */}
            <rect x="2" y="15" width="4" height="250" rx="1" 
              fill={isFailed ? "#7f1d1d" : "rgba(0, 240, 255, 0.25)"} 
              stroke={isFailed ? "#ef4444" : "#00f0ff"} 
              strokeWidth="0.8" 
              style={{ transition: 'all 1.2s ease-in-out' }}
            />
            
            {/* Memory Chips on module */}
            {[0, 1, 2, 3, 4].map(cIdx => (
              <rect key={cIdx} x="2.5" y={35 + cIdx * 45} width="3" height="22" fill="#030712" />
            ))}

            {/* Retention Clips */}
            <rect x="-1" y="-4" width="10" height="6" fill="rgba(255, 255, 255, 0.25)" rx="1" />
            <rect x="-1" y="278" width="10" height="6" fill="rgba(255, 255, 255, 0.25)" rx="1" />
            
            <text x="4" y="-8" fontSize="5.5" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace" transform={`rotate(-90 4 -8)`}>
              {slot.label}
            </text>
          </g>
        ))}

        {/* E. Decoupling Capacitors */}
        {capacitors.map((cap, i) => (
          <g key={i} transform={`translate(${cap.cx}, ${cap.cy})`}>
            <circle cx="0" cy="0" r="7" fill="rgba(30, 41, 59, 0.85)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            {/* Vent lines cross on top */}
            <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" />
            <line x1="4.5" y1="-4.5" x2="-4.5" y2="4.5" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" />
          </g>
        ))}

        {/* F. Transistors (3-legged shapes) */}
        {transistors.map((t, i) => (
          <g key={i} transform={`translate(${t.tx}, ${t.ty})`}>
            {/* Base block */}
            <rect x="-5" y="-5" width="10" height="7" fill="#1e293b" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.75" />
            {/* Legs */}
            <line x1="-3" y1="2" x2="-3" y2="10" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
            <line x1="0" y1="2" x2="0" y2="10" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
            <line x1="3" y1="2" x2="3" y2="10" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
            <circle cx="0" cy="-2" r="1.5" fill="#00f0ff" />
          </g>
        ))}

        {/* ── G. CPU Processor Socket (Center-Left) ── */}
        <g transform="translate(350, 270)">
          {/* Socket Bracket Outer Frame */}
          <rect x="-65" y="-65" width="130" height="130" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
          
          {/* Socket Pins footprint grid */}
          <rect x="-53" y="-53" width="106" height="106" fill="none" stroke="rgba(0, 240, 255, 0.12)" strokeWidth="1" strokeDasharray="3 4" />
          
          {/* Metallic CPU Retention Cover */}
          <rect x="-42" y="-42" width="84" height="84" rx="4" fill="rgba(30, 41, 59, 0.95)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.8" />
          
          {/* Silicon Core/Die (Center) */}
          <motion.rect x="-24" y="-24" width="48" height="48" rx="2" 
            fill={isFailed ? "rgba(127, 29, 29, 0.9)" : "rgba(15, 23, 42, 0.95)"}
            stroke={isFailed ? "#ef4444" : "#00f0ff"} 
            strokeWidth="1.5"
            style={{ transition: 'all 1.2s ease-in-out' }}
          />

          {/* Core Telemetry Pulsing Dot */}
          <motion.circle
            r={isFailed ? 6 : 4}
            fill={isFailed ? "#ef4444" : "#00f0ff"}
            filter="url(#neon-glow)"
            animate={isFailed ? {
              scale: [0.9, 1.3, 0.9],
              opacity: [0.7, 1, 0.7]
            } : {
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />

          {/* CPU Socket Labels */}
          <text x="0" y="36" fontSize="5.5" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">LGA_1700_CPU</text>
          <text x="0" y="-32" fontSize="5.5" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">SLA_CORE_V4.8</text>
        </g>

        {/* ── 5. THE STORYBOARD ANIMATION LAYERS ── */}

        {/* A. Normal Phase Packet Flow */}
        {phase === 'normal' && traceLines.map((line, idx) => (
          <motion.circle
            key={`packet-${idx}`}
            r="3"
            fill="#00f0ff"
            filter="url(#neon-glow)"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'linear',
              delay: line.delay
            }}
            style={{
              motionPath: `path('${line.d}')`,
              transformBox: 'fill-box',
              transformOrigin: 'center'
            }}
          />
        ))}

        {/* B. The Broken Trace line & Failure Blinking Alert (Phase: alert, bridge) */}
        {isFailed && (
          <g>
            {/* Burnt gap indicator */}
            <motion.circle
              cx="225"
              cy="290"
              r="12"
              fill="rgba(239, 68, 68, 0.08)"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeDasharray="2 3"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            {/* Blinking alert circle */}
            <motion.circle
              cx="225"
              cy="290"
              r="5"
              fill="#ef4444"
              filter="url(#neon-glow)"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 1.25, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            {/* Red alert spark particles flying off broken ends */}
            <motion.circle cx="210" cy="290" r="2.5" fill="#ef4444"
              animate={{ x: [0, -10, 0], y: [0, Math.random()*15-7.5, 0], opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <motion.circle cx="240" cy="310" r="2.5" fill="#ef4444"
              animate={{ x: [0, 10, 0], y: [0, Math.random()*15-7.5, 0], opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
          </g>
        )}

        {/* C. Failover Wire Bridging (Phase: bridge) */}
        {phase === 'bridge' && (
          <g>
            {/* Jumper Bridge Wire drawing itself across the gap */}
            <motion.path
              d="M 210 290 Q 225 280 240 310"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2.5"
              filter="url(#neon-glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, ease: 'linear' }}
            />
            {/* Soldier heat spark at wire tip */}
            <motion.circle r="4" fill="#ffffff" filter="url(#neon-glow)"
              animate={{
                cx: [210, 240],
                cy: [290, 310],
                scale: [1, 1.5, 1]
              }}
              transition={{ duration: 3.5, ease: 'linear' }}
            />
          </g>
        )}

        {/* D. Blue Spark Explosion & Shockwave Cleanse (Phase: spark) */}
        {isSparking && (
          <g>
            {/* Closed Jumper Wire */}
            <path
              d="M 210 290 Q 225 280 240 310"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2.5"
            />
            {/* Spark bursts lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x2 = 225 + 50 * Math.cos(rad);
              const y2 = 300 + 50 * Math.sin(rad);
              return (
                <motion.line
                  key={i}
                  x1="225"
                  y1="300"
                  x2={x2}
                  y2={y2}
                  stroke="#00f0ff"
                  strokeWidth="2.5"
                  filter="url(#neon-glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              );
            })}
            {/* Concentric cleansing waves expanding from spark point */}
            <motion.circle
              cx="225"
              cy="300"
              r="10"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="5"
              filter="url(#neon-glow)"
              animate={{ r: [10, 800], strokeWidth: [5, 0.1], opacity: [1, 0] }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
            />
            <motion.circle
              cx="225"
              cy="300"
              r="10"
              fill="none"
              stroke="#ffffff"
              strokeWidth="7"
              filter="url(#neon-glow)"
              animate={{ r: [10, 650], strokeWidth: [7, 0.1], opacity: [0.8, 0] }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.05 }}
            />
          </g>
        )}

        {/* E. Glowing Jumper Wire in Stabilized State (Phase: glow) */}
        {phase === 'glow' && (
          <path
            d="M 210 290 Q 225 280 240 310"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="2.5"
            strokeDasharray="none"
            style={{ filter: 'url(#neon-glow)', opacity: 0.8 }}
          />
        )}
      </svg>

      {/* ── 5. SIMULATED SYSTEM DIAGNOSTICS & TELEMETRY TERMINALS ── */}
      <div style={{
        position: 'absolute',
        left: '24px',
        top: '24px',
        width: '210px',
        maxHeight: '130px',
        backgroundColor: 'rgba(3, 7, 18, 0.75)',
        backdropFilter: 'blur(10px)',
        border: isFailed ? '1.2px solid rgba(239, 68, 68, 0.35)' : '1px solid rgba(56, 189, 248, 0.2)',
        borderRadius: '8px',
        padding: '0.65rem 0.85rem',
        fontFamily: 'monospace',
        fontSize: '0.66rem',
        color: isFailed ? '#ef4444' : 'rgba(56, 189, 248, 0.85)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        transition: 'border-color 1.2s ease, color 1.2s ease'
      }}>
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: '3px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.58rem',
          color: 'rgba(255,255,255,0.45)'
        }}>
          <span>SYS_DIAGNOSTICS</span>
          <span style={{ color: isFailed ? '#ef4444' : '#22c55e' }}>
            {isFailed ? "⚠️ ERR_ALERT" : "🟢 NOMINAL"}
          </span>
        </div>
        <div style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px'
        }}>
          {telemetryLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {log}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 6. GEOMETRIC PROCESSOR MOUNT GLASS BRACKET (Phase: glow) ── */}
      {phase === 'glow' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '84%',
            height: '42%',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.2) 100%)',
            backdropFilter: 'blur(20px) saturate(110%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            zIndex: 3,
            pointerEvents: 'none',
            boxShadow: '0 30px 100px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.04)'
          }}
        />
      )}

      {/* ── 7. MAJESTIC LOGO TYPOGRAPHY REVEAL (Phase: glow) ── */}
      <div 
        style={{
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
        }}
      >
        {phase === 'glow' && (
          <>
            {/* Top Tag */}
            <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.55, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                style={{
                  color: '#e2e8f0',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.55em',
                  display: 'block'
                }}
              >
                WORK BY
              </motion.span>
            </div>

            {/* Main Brand Letters */}
            <motion.div
              animate={{ letterSpacing: ['0.35em', '0.14em'] }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                display: 'flex',
                gap: '8px',
                fontFamily: 'var(--font-heading), "Outfit", sans-serif',
                fontSize: '4.6rem',
                fontWeight: 800,
                color: '#ffffff',
                position: 'relative',
                paddingLeft: '0.14em'
              }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15, scale: 0.94, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4 + (index * 0.12)
                  }}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 55%, #94a3b8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Reflection sheen sweep across brand logo */}
              <motion.div
                initial={{ x: '-150%', skewX: -25 }}
                animate={{ x: '150%' }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  repeatDelay: 5.5,
                  ease: 'easeInOut',
                  delay: 2.5
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0) 70%, transparent 100%)',
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                  zIndex: 3
                }}
              />
            </motion.div>

            {/* Subtitle tag */}
            <div style={{ position: 'relative', overflow: 'hidden', marginTop: '1.5rem' }}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 1.6 }}
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.45em',
                  textAlign: 'center',
                  display: 'block',
                  zIndex: 2,
                  textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                }}
              >
                Technology Infrastructure Partner
              </motion.span>
              
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 7,
                  ease: 'linear',
                  delay: 3.5
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
                  mixBlendMode: 'overlay'
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* ── 8. OPTICAL CORE GLOW BEHIND LOGO (Phase: glow) ── */}
      {phase === 'glow' && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '350px',
            height: '140px',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* ── 9. CINEMATIC AMBIENT EMBER DUST (Phase: glow) ── */}
      {phase === 'glow' && Array.from({ length: 30 }).map((_, idx) => {
        const size = Math.random() * 4 + 1.5;
        const initialX = Math.random() * 70 + 15;
        const initialY = Math.random() * 65 + 18;
        const speed = 6 + Math.random() * 6;
        return (
          <motion.div
            key={idx}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.6, 0.6, 0],
              scale: [1, 1.25, 0.8, 1]
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4
            }}
            style={{
              position: 'absolute',
              left: `${initialX}%`,
              top: `${initialY}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: idx % 3 === 0 ? '#38bdf8' : '#00f0ff',
              boxShadow: '0 0 8px #00f0ff, 0 0 3px rgba(0,240,255,0.4)',
              pointerEvents: 'none',
              zIndex: 3
            }}
          />
        );
      })}

      {/* ── 10. HOLOGRAPHIC FRAME BRACKETS ── */}
      <div 
        style={{
          position: 'absolute',
          inset: '12px',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '16px',
          pointerEvents: 'none',
          zIndex: 3
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '18px', height: '18px', borderTop: '2.5px solid rgba(0, 240, 255, 0.5)', borderLeft: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '18px', height: '18px', borderTop: '2.5px solid rgba(0, 240, 255, 0.5)', borderRight: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '18px', height: '18px', borderBottom: '2.5px solid rgba(0, 240, 255, 0.5)', borderLeft: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '18px', height: '18px', borderBottom: '2.5px solid rgba(0, 240, 255, 0.5)', borderRight: '2.5px solid rgba(0, 240, 255, 0.5)' }} />
      </div>
    </motion.div>
  );
}

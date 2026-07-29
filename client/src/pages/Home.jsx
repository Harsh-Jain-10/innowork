import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem, CountUp } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';
import MotherboardScene from '../components/WebGLMotherboard/MotherboardScene';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, DepthOfField, Bloom, Vignette } from '@react-three/postprocessing';






import hpeLogo from '../assets/logos/hpe.svg';
import dellLogo from '../assets/logos/dell.svg';
import hpLogo from '../assets/logos/hp.svg';
import lenovoLogo from '../assets/logos/lenovo.svg';
import ciscoLogo from '../assets/logos/cisco.svg';
import arubaLogo from '../assets/logos/aruba.svg';
import fortinetLogo from '../assets/logos/fortinet.svg';
import paloaltoLogo from '../assets/logos/paloalto.svg';

import ibmLogo from '../assets/logos/ibm.svg';
import oracleLogo from '../assets/logos/oracle.svg';
import netappLogo from '../assets/logos/netapp.svg';
import nutanixLogo from '../assets/logos/nutanix.svg';
import vmwareLogo from '../assets/logos/vmware.svg';
import microsoftLogo from '../assets/logos/microsoft.svg';
import redhatLogo from '../assets/logos/redhat.svg';
import suseLogo from '../assets/logos/suse.svg';

import veeamLogo from '../assets/logos/veeam.svg';
import veritasLogo from '../assets/logos/veritas.svg';
import rubrikLogo from '../assets/logos/rubrik.svg';
import commvaultLogo from '../assets/logos/commvault.svg';
import acronisLogo from '../assets/logos/acronis.svg';
import zscalerLogo from '../assets/logos/zscaler.svg';
import checkpointLogo from '../assets/logos/checkpoint.svg';
import kasperskyLogo from '../assets/logos/kaspersky.svg';

import trendmicroLogo from '../assets/logos/trendmicro.svg';
import sophosLogo from '../assets/logos/sophos.svg';
import bitdefenderLogo from '../assets/logos/bitdefender.svg';
import symantecLogo from '../assets/logos/symantec.svg';
import sonicwallLogo from '../assets/logos/sonicwall.svg';
import citrixLogo from '../assets/logos/citrix.svg';
import adobeLogo from '../assets/logos/adobe.svg';
import sapLogo from '../assets/logos/sap.svg';

const logoMapping = {
  "HPE": hpeLogo,
  "Dell": dellLogo,
  "HP": hpLogo,
  "Lenovo": lenovoLogo,
  "Cisco": ciscoLogo,
  "Aruba": arubaLogo,
  "Fortinet": fortinetLogo,
  "PaloAlto": paloaltoLogo,
  "IBM": ibmLogo,
  "Oracle": oracleLogo,
  "NetApp": netappLogo,
  "Nutanix": nutanixLogo,
  "VMware": vmwareLogo,
  "Microsoft": microsoftLogo,
  "RedHat": redhatLogo,
  "SUSE": suseLogo,
  "Veeam": veeamLogo,
  "Veritas": veritasLogo,
  "Rubrik": rubrikLogo,
  "Commvault": commvaultLogo,
  "Acronis": acronisLogo,
  "Zscaler": zscalerLogo,
  "Checkpoint": checkpointLogo,
  "Kaspersky": kasperskyLogo,
  "TrendMicro": trendmicroLogo,
  "Sophos": sophosLogo,
  "Bitdefender": bitdefenderLogo,
  "Symantec": symantecLogo,
  "SonicWall": sonicwallLogo,
  "Citrix": citrixLogo,
  "Adobe": adobeLogo,
  "SAP": sapLogo
};

// Optical alignment configuration (proportional heights)
const logoDetails = {
  HPE: { height: 28 },
  Dell: { height: 30 },
  HP: { height: 28 },
  Lenovo: { height: 26 },
  Cisco: { height: 32 },
  Aruba: { height: 28 },
  Fortinet: { height: 26 },
  PaloAlto: { height: 28 },
  IBM: { height: 28 },
  Oracle: { height: 25 },
  NetApp: { height: 25 },
  Nutanix: { height: 28 },
  VMware: { height: 26 },
  Microsoft: { height: 26 },
  RedHat: { height: 28 },
  SUSE: { height: 28 },
  Veeam: { height: 26 },
  Veritas: { height: 26 },
  Rubrik: { height: 28 },
  Commvault: { height: 28 },
  Acronis: { height: 28 },
  Zscaler: { height: 28 },
  Checkpoint: { height: 28 },
  Kaspersky: { height: 28 },
  TrendMicro: { height: 28 },
  Sophos: { height: 26 },
  Bitdefender: { height: 26 },
  Symantec: { height: 28 },
  SonicWall: { height: 26 },
  Citrix: { height: 25 },
  Adobe: { height: 26 },
  SAP: { height: 26 }
};

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const allStats = [
    { value: configData.stats.years,         label: 'Years of Excellence', icon: '🏆' },
    { value: configData.stats.projects,      label: 'Successful Projects', icon: '🚀' },
    { value: configData.stats.professionals, label: 'Technology Experts', icon: '👨‍💻' },
    { value: configData.stats.alliances,     label: 'OEM Partner Network', icon: '🤝' },
    { value: configData.stats.clients,       label: 'Enterprise Clients',  icon: '🏢' },
    { value: configData.stats.devices,       label: 'Devices Managed',     icon: '🖥️' },
    { value: configData.stats.countries,     label: 'Countries Served',    icon: '🌐' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)', overflow: 'hidden' }} id="home-page-view">

      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          height: '92vh',
          minHeight: '680px',
          backgroundColor: '#020306',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}
        id="hero-webgl-section"
      >
        {/* Background WebGL Motherboard Animation */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          <Canvas
            shadows={{ type: THREE.PCFShadowMap }}
            camera={{ fov: 45, near: 0.1, far: 20, position: [-2.2, 0.6, 1.2] }}
            gl={{ 
              antialias: true, 
              powerPreference: 'high-performance',
              toneMapping: 3
            }}
          >
            <Suspense fallback={null}>
              <MotherboardScene />
              
              {/* Cinematic Post-Processing - Disabled on mobile for 60 FPS scrolling */}
              {!isMobile && (
                <EffectComposer multisampling={4}>
                  <DepthOfField 
                    focusDistance={0.012} 
                    focalLength={0.03} 
                    bokehScale={4.0} 
                  />
                  <Bloom 
                    luminanceThreshold={0.12} 
                    luminanceSmoothing={0.9} 
                    height={300} 
                    intensity={1.8} 
                  />
                  <Vignette eskil={false} offset={0.1} darkness={1.2} />
                </EffectComposer>
              )}
            </Suspense>
          </Canvas>
        </div>

        {/* Middle Layer: Dark Radial Vignette for Content Readability */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(3, 7, 18, 0.35) 0%, rgba(2, 3, 6, 0.88) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Foreground Content Overlay */}
        <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
          <div className="hero-glass-card" style={{
            textAlign: 'left',
            maxWidth: '720px',
            padding: '2.8rem',
            borderRadius: '16px',
            backgroundColor: 'rgba(3, 7, 18, 0.55)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            position: 'relative'
          }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Badge */}
              <motion.span
                variants={itemVariants}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: 'rgba(0, 240, 255, 0.08)',
                  color: '#00f0ff',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '50px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  marginBottom: '1.75rem',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  textShadow: '0 0 8px rgba(0, 240, 255, 0.3)'
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00f0ff', display: 'inline-block', boxShadow: '0 0 6px #00f0ff' }} />
                Enterprise IT Support &amp; Services
              </motion.span>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                style={{
                  fontSize: 'clamp(1.85rem, 5.5vw, 3.75rem)',
                  lineHeight: '1.12',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  letterSpacing: '-1.5px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
                className="responsive-hero-title"
              >
                Welcome to <span style={{ color: '#00f0ff', textShadow: '0 0 10px rgba(0, 240, 255, 0.4)' }}>INNOWORQ</span><br />
                Your Technology Support Partner
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.75',
                  color: '#94a3b8',
                  fontWeight: 400,
                  maxWidth: '680px',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)'
                }}
                className="hero-desc-p"
              >
                Delivering secure, scalable, and highly available IT infrastructure, hybrid cloud operations,
                and proactive cybersecurity systems globally. We manage the complexity of your technology
                so you can scale your business.
              </motion.p>


            </motion.div>
          </div>

          {/* Trust indicators row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              display: 'flex', justifyContent: 'center', gap: '2.5rem',
              marginTop: '4rem', flexWrap: 'wrap'
            }}
          >
            {[
              '🛡️ ISO 9001:2015 Certified',
              '🔐 ISO/IEC 27001:2022 Certified',
              '⚙️ ISO 20000-1:2018 Certified',
              '🏥 ISO 45001:2018 Certified',
              '⚡ 24×7×365 SLA Support',
              '🌐 Pan-India Coverage',
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                style={{
                  fontSize: '0.82rem', fontWeight: 600,
                  color: '#94a3b8',
                  display: 'flex', alignItems: 'center', gap: '0.4rem'
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Animated Stats Counter Band */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--brand-blue)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle wave pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px', pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                By The Numbers
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '0.5rem' }}>
                Scale You Can Trust
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer
            stagger={0.1}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1.5rem',
              textAlign: 'center'
            }}
            className="stats-full-grid"
          >
            {allStats.map((stat, i) => (
              <StaggerItem key={i} variant="scale">
                <motion.div
                  whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.12)' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: '1.75rem 0.75rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '1.95rem', fontWeight: 900, color: '#ffffff',
                    fontFamily: 'var(--font-heading)', lineHeight: 1,
                    marginBottom: '0.5rem',
                    whiteSpace: 'nowrap'
                  }}>
                    <CountUp target={stat.value} delay={i * 0.12} duration={1.6} />
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                    {stat.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* OEM Partners Section - Animated Enterprise Moving Marquee */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }} id="oem-partners-section">
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ 
              color: 'var(--brand-blue)', 
              fontWeight: 700, 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              display: 'inline-block',
              marginBottom: '0.5rem'
            }}>
              AUTHORIZED ENTERPRISE ECOSYSTEM
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.35rem)', 
              fontWeight: 800, 
              color: '#0f172a', 
              margin: 0,
              letterSpacing: '-0.5px',
              fontFamily: 'var(--font-heading)'
            }}>
              Our OEM Technology Partners
            </h2>
          </div>

          {/* OEM Moving Marquee Card Container */}
          <ScrollReveal variant="fade-up">
            <div className="oem-marquee-card">
              <style>{`
                .oem-marquee-card {
                  background-color: #ffffff;
                  border-radius: 16px;
                  border: 1px solid #e2e8f0;
                  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04);
                  padding: 2rem 0;
                  overflow: hidden;
                  position: relative;
                  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }

                .oem-marquee-row {
                  display: flex;
                  overflow: hidden;
                  user-select: none;
                  gap: 2rem;
                  padding: 0.5rem 0;
                }

                .oem-marquee-track {
                  display: flex;
                  flex-shrink: 0;
                  align-items: center;
                  justify-content: space-around;
                  gap: 2rem;
                  min-width: 100%;
                  animation: scrollMarqueeLeft 40s linear infinite;
                }

                .oem-marquee-track-reverse {
                  display: flex;
                  flex-shrink: 0;
                  align-items: center;
                  justify-content: space-around;
                  gap: 2rem;
                  min-width: 100%;
                  animation: scrollMarqueeRight 40s linear infinite;
                }

                .oem-marquee-card:hover .oem-marquee-track,
                .oem-marquee-card:hover .oem-marquee-track-reverse {
                  animation-play-state: paused;
                }

                @keyframes scrollMarqueeLeft {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-100%);
                  }
                }

                @keyframes scrollMarqueeRight {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(0%);
                  }
                }

                .oem-marquee-item {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 0.75rem 1.5rem;
                  height: 65px;
                  min-width: 140px;
                  background: #ffffff;
                  border-radius: 10px;
                  border: 1px solid #f1f5f9;
                  transition: all 0.25s ease;
                }

                .oem-marquee-item:hover {
                  background-color: #f8fafc;
                  border-color: #cbd5e1;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                  transform: translateY(-2px);
                }

                .oem-logo-image {
                  max-width: 120px;
                  max-height: 40px;
                  width: auto;
                  height: auto;
                  object-fit: contain;
                  filter: grayscale(10%);
                  transition: filter 0.25s ease;
                }

                .oem-marquee-item:hover .oem-logo-image {
                  filter: grayscale(0%);
                }
              `}</style>
              
              {/* Row 1: Continuous Marquee Moving Left */}
              <div className="oem-marquee-row">
                <div className="oem-marquee-track">
                  {configData.oemPartners.slice(0, 16).map((oem, idx) => (
                    <div key={`row1-1-${oem}-${idx}`} className="oem-marquee-item">
                      <img 
                        src={logoMapping[oem]} 
                        alt={`${oem} Logo`} 
                        className="oem-logo-image" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="oem-marquee-track" aria-hidden="true">
                  {configData.oemPartners.slice(0, 16).map((oem, idx) => (
                    <div key={`row1-2-${oem}-${idx}`} className="oem-marquee-item">
                      <img 
                        src={logoMapping[oem]} 
                        alt={`${oem} Logo`} 
                        className="oem-logo-image" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Continuous Marquee Moving Right */}
              <div className="oem-marquee-row" style={{ marginTop: '0.75rem' }}>
                <div className="oem-marquee-track-reverse">
                  {configData.oemPartners.slice(16, 32).map((oem, idx) => (
                    <div key={`row2-1-${oem}-${idx}`} className="oem-marquee-item">
                      <img 
                        src={logoMapping[oem]} 
                        alt={`${oem} Logo`} 
                        className="oem-logo-image" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="oem-marquee-track-reverse" aria-hidden="true">
                  {configData.oemPartners.slice(16, 32).map((oem, idx) => (
                    <div key={`row2-2-${oem}-${idx}`} className="oem-marquee-item">
                      <img 
                        src={logoMapping[oem]} 
                        alt={`${oem} Logo`} 
                        className="oem-logo-image" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>


      {/* 3. Core Strengths & Certifications */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-split">

            {/* Mission & Vision info */}
            <ScrollReveal variant="fade-up" duration={0.8}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Why INNOWORQ
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1.25rem', lineHeight: '1.2' }}>
                Delivering Excellence in Infrastructure Support
              </h2>
              <p style={{ lineHeight: '1.7', color: 'var(--text-light-secondary)', marginBottom: '1.5rem' }}>
                Our corporate structure is organized around reliable service execution. With pan-India presence and global support delivery channels, INNOWORQ is trusted by Fortune 500 companies and growing enterprises alike.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2rem' }} className="home-cards-subgrid">
                {[
                  { icon: '🚀', title: 'Our Vision', text: 'To be the global benchmark for seamless, multi-vendor IT infrastructure and cloud managed services.' },
                  { icon: '🎯', title: 'Our Mission', text: 'Providing SLA-bound proactive support, minimizing system downtime, and ensuring absolute compliance standards.' },
                  { icon: '🛡️', title: 'Quality First', text: 'ISO-certified processes guaranteeing continuous quality management and enterprise-grade security controls.' },
                  { icon: '⚡', title: 'Always On', text: '24×7×365 NOC monitoring and incident response across India, UAE, and Africa regions.' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, boxShadow: '0 10px 24px rgba(0,0,0,0.07)' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{card.icon}</div>
                    <h4 style={{ color: 'var(--text-light-primary)', marginBottom: '0.4rem', fontWeight: 700, fontSize: '0.95rem' }}>{card.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-light-secondary)', lineHeight: '1.55', margin: 0 }}>{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Certifications & Strengths list */}
            <ScrollReveal variant="fade-up" delay={0.2} duration={0.8}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="compliance-card-padding"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '3rem 2.5rem',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '2rem' }}>
                  Compliance &amp; Quality Standards
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { icon: '🛡️', title: configData.certifications[0], text: 'Demonstrated processes and systems committed to continuous quality management.' },
                    { icon: '🔐', title: configData.certifications[1], text: 'Verified information security controls keeping client operational logs and networks secure.' },
                    { icon: '⚙️', title: configData.certifications[2], text: 'Certified IT service management framework delivering structured, high-availability IT services.' },
                    { icon: '🏥', title: configData.certifications[3], text: 'Occupational health and safety management system ensuring safe workplace and operational environments.' },
                    { icon: '🌐', title: 'Global Service Delivery Channels', text: 'Operating support centers covering India, APAC, Europe, and Middle East locations.' },
                    { icon: '📊', title: 'SLA-Backed Accountability', text: 'P1/P2/P3 tiered response model with legal binding SLA commitments on all active support engagements.' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}
                    >
                      <span style={{
                        fontSize: '1.4rem',
                        width: '42px', height: '42px',
                        minWidth: '42px',
                        backgroundColor: 'rgba(9,97,159,0.07)',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>{item.icon}</span>
                      <div>
                        <h5 style={{ color: 'var(--text-light-primary)', marginBottom: '0.2rem', fontWeight: 700, fontSize: '0.95rem' }}>{item.title}</h5>
                        <p style={{ fontSize: '0.83rem', color: 'var(--text-light-secondary)', margin: 0, lineHeight: '1.5' }}>{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Quick Services Catalog */}
      <section style={{ padding: '3.5rem 0 4rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                What We Do
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1rem' }}>
                Our Services Catalog
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.65' }}>
                Delivering high-availability enterprise services across 11 verified business portfolios under rigorous SLAs.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.07} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="home-services-grid">
            {configData.services.slice(0, 6).map((srv) => (
              <StaggerItem key={srv.id} variant="fade-up">
                <motion.div
                  whileHover={{ y: -7, boxShadow: '0 16px 40px rgba(0,0,0,0.09)', borderColor: 'var(--brand-blue)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '2.25rem',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                    height: '100%',
                    transition: 'border-color 0.3s ease'
                  }}
                  className="service-card"
                >
                  <div style={{
                    width: '40px', height: '40px',
                    backgroundColor: 'rgba(9,97,159,0.07)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>⚙️</div>
                  <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1.1rem', fontWeight: 700 }}>{srv.name}</h4>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', flexGrow: 1 }}>{srv.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Technology Coverage / OEM Grid */}
      <section style={{ 
        padding: '6.5rem 0', 
        backgroundColor: '#ffffff', 
        borderTop: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle spotlight background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          maxWidth: '100vw',
          height: '600px',
          background: 'radial-gradient(circle, rgba(9,97,159,0.04) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Technology Ecosystem
              </span>
              <h3 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                OEM Coverage &amp; Alliances
              </h3>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                We deliver third-party maintenance and SLA-bound operational support covering enterprise systems from leading global technology vendors.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.03} className="oem-grid-wrapper">
            {configData.oemPartners.map((oem) => {
              const logoSrc = logoMapping[oem];
              const details = logoDetails[oem] || { height: 28 };
              return (
                <StaggerItem key={oem} variant="scale">
                  <div 
                    className="oem-grid-item"
                    style={{ '--logo-height': `${details.height}px` }}
                  >
                    <img 
                      src={logoSrc} 
                      alt={`${oem} Logo`} 
                      loading="lazy" 
                      className="oem-grid-logo"
                    />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        <style>{`
          .oem-grid-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 3.5rem 5rem;
            max-width: 1100px;
            margin: 0 auto;
            padding: 1rem;
          }
          .oem-grid-item {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--logo-height);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .oem-grid-item:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
          }
          .oem-grid-logo {
            height: 100%;
            width: auto;
            display: block;
            object-fit: contain;
          }
          @media (max-width: 768px) {
            .oem-grid-wrapper {
              gap: 2.5rem 3.5rem;
            }
            .oem-grid-item {
              height: calc(var(--logo-height) * 0.85);
            }
          }
          @media (max-width: 480px) {
            .oem-grid-wrapper {
              gap: 2rem 2.5rem;
            }
            .oem-grid-item {
              height: calc(var(--logo-height) * 0.75);
            }
          }
        `}</style>
      </section>



      <style>{`
        .responsive-hero-title { font-size: 3.75rem; }
        .stats-full-grid { grid-template-columns: repeat(7, 1fr); }
        .hero-split-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-desc-p {
          margin: 0 0 2.75rem 0;
        }
        .hero-buttons-flex {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .hero-glass-card {
          transition: all 0.3s ease;
        }
        @media (max-width: 1200px) {
          .stats-full-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 960px) {
          #hero-webgl-section {
            height: auto !important;
            min-height: 80vh !important;
            padding: 5rem 0 3rem 0 !important;
          }
          .hero-glass-card {
            padding: 2rem !important;
            margin: 0 auto !important;
            text-align: center !important;
            background-color: rgba(3, 7, 18, 0.75) !important;
          }
          .hero-split-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .hero-split-layout > div {
            margin: 0 auto;
            text-align: center !important;
          }
          .hero-split-layout > div:first-of-type {
            max-width: 100% !important;
          }
          .hero-desc-p {
            margin: 0 auto 2.75rem auto !important;
          }
          .hero-buttons-flex {
            justify-content: center !important;
          }
        }
        @media (max-width: 768px) {
          .responsive-hero-title { font-size: 2.25rem !important; }
          .stats-full-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.25rem !important; }
          .premium-marquee-track { gap: 3.5rem !important; padding-right: 3.5rem !important; }
          .home-cards-subgrid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .home-services-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-split {
            gap: 4rem !important;
          }
          .hero-glass-card {
            padding: 2.25rem 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .hero-buttons-flex {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-buttons-flex .btn {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .responsive-hero-title { font-size: 1.85rem !important; }
          .hero-glass-card { padding: 1.25rem 1rem !important; }
          .stats-full-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
        }
        @media (max-width: 360px) {
          .responsive-hero-title { font-size: 1.6rem !important; }
          .hero-glass-card { padding: 1rem 0.75rem !important; }
          .stats-full-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  );
}

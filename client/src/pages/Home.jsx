import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem, CountUp } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

// Import OEM partner logos
import dellLogo from '../assets/logos/dell.svg';
import microsoftLogo from '../assets/logos/microsoft.svg';
import ibmLogo from '../assets/logos/ibm.svg';
import ciscoLogo from '../assets/logos/cisco.svg';
import hpLogo from '../assets/logos/hp.svg';
import fortinetLogo from '../assets/logos/fortinet.svg';
import checkpointLogo from '../assets/logos/checkpoint.svg';
import f5Logo from '../assets/logos/f5.svg';
import juniperLogo from '../assets/logos/juniper.svg';
import microfocusLogo from '../assets/logos/microfocus.svg';
import netappLogo from '../assets/logos/netapp.svg';
import opentextLogo from '../assets/logos/opentext.svg';
import redhatLogo from '../assets/logos/redhat.svg';
import veeamLogo from '../assets/logos/veeam.svg';
import dlinkLogo from '../assets/logos/dlink.svg';
import veritasLogo from '../assets/logos/veritas.svg';
import vinchinLogo from '../assets/logos/vinchin.svg';
import oracleLogo from '../assets/logos/oracle.svg';
import acerLogo from '../assets/logos/acer.svg';
import zertoLogo from '../assets/logos/zerto.svg';

const logoMapping = {
  "Dell": dellLogo,
  "Microsoft": microsoftLogo,
  "IBM": ibmLogo,
  "Cisco": ciscoLogo,
  "HP": hpLogo,
  "Checkpoint": checkpointLogo,
  "Fortinet": fortinetLogo,
  "F5": f5Logo,
  "Juniper": juniperLogo,
  "Microfocus": microfocusLogo,
  "NetApp": netappLogo,
  "OpenText": opentextLogo,
  "RedHat": redhatLogo,
  "Veeam": veeamLogo,
  "D-Link": dlinkLogo,
  "Veritas": veritasLogo,
  "Vinchin": vinchinLogo,
  "Acer": acerLogo,
  "Zerto": zertoLogo,
  "Oracle": oracleLogo
};

// Optical alignment configuration (proportional heights - enlarged for prominence)
const logoDetails = {
  Dell: { height: 38 },
  Microsoft: { height: 38 },
  IBM: { height: 34 },
  Cisco: { height: 46 },
  HP: { height: 38 },
  Checkpoint: { height: 38 },
  Fortinet: { height: 38 },
  F5: { height: 38 },
  Juniper: { height: 38 },
  Microfocus: { height: 34 },
  NetApp: { height: 34 },
  OpenText: { height: 34 },
  RedHat: { height: 38 },
  Veeam: { height: 36 },
  "D-Link": { height: 34 },
  Veritas: { height: 36 },
  Vinchin: { height: 36 },
  Acer: { height: 34 },
  Zerto: { height: 36 },
  Oracle: { height: 34 }
};

export default function Home() {
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
    { value: configData.stats.professionals, label: 'Tech Professionals', icon: '👨‍💻' },
    { value: configData.stats.clients,       label: 'Enterprise Clients',  icon: '🏢' },
    { value: configData.stats.projects,      label: 'Projects Deployed',   icon: '🚀' },
    { value: configData.stats.devices,       label: 'Devices Managed',     icon: '🖥️' },
    { value: configData.stats.alliances,     label: 'OEM Alliances',       icon: '🤝' },
    { value: configData.stats.industries,    label: 'Industry Verticals',  icon: '🏭' },
    { value: configData.stats.countries,     label: 'Countries Served',    icon: '🌐' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)', overflow: 'hidden' }} id="home-page-view">

      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '9rem 0 7rem 0',
          background: 'linear-gradient(140deg, #f0f7ff 0%, #f8fafc 40%, #eef6fd 100%)',
          borderBottom: '1px solid #e2e8f0',
          overflow: 'hidden',
        }}
      >
        {/* Animated radial dot-grid background */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.07,
          backgroundImage: 'radial-gradient(circle, #09619f 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none'
        }} />

        {/* Floating blobs */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '8%', right: '10%',
            width: 340, height: 340,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,97,159,0.07) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, -14, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '5%', left: '6%',
            width: 260, height: 260,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,97,159,0.05) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                backgroundColor: 'rgba(9, 97, 159, 0.08)',
                color: 'var(--brand-blue)',
                padding: '0.45rem 1.1rem',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
                border: '1px solid rgba(9, 97, 159, 0.2)'
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--brand-blue)', display: 'inline-block' }}
              />
              Enterprise IT Support &amp; Services
            </motion.span>

            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: '3.75rem',
                lineHeight: '1.12',
                fontWeight: 800,
                color: 'var(--text-light-primary)',
                marginBottom: '1.5rem',
                letterSpacing: '-1.5px'
              }}
              className="responsive-hero-title"
            >
              Welcome to <span style={{ color: 'var(--brand-blue)' }}>INNOWORQ</span><br />
              Your Technology Support Partner
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                color: 'var(--text-light-secondary)',
                marginBottom: '2.75rem',
                fontWeight: 400,
                maxWidth: '680px',
                margin: '0 auto 2.75rem auto'
              }}
            >
              Delivering secure, scalable, and highly available IT infrastructure, hybrid cloud operations,
              and proactive cybersecurity systems globally. We manage the complexity of your technology
              so you can scale your business.
            </motion.p>

            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/support-desk" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
                Open Support Ticket
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
                Explore Services Catalog
              </Link>
            </motion.div>
          </motion.div>

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
                  color: 'var(--text-light-secondary)',
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
                    fontSize: '2.25rem', fontWeight: 900, color: '#ffffff',
                    fontFamily: 'var(--font-heading)', lineHeight: 1,
                    marginBottom: '0.5rem'
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

      {/* OEM Partner Marquee */}
      <div className="premium-marquee-container" role="region" aria-label="Technology Partners Marquee">
        <style>{`
          .premium-marquee-container {
            overflow: hidden;
            width: 100%;
            display: flex;
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            padding: 1.75rem 0;
            position: relative;
          }
          .premium-marquee-track {
            display: flex;
            flex-shrink: 0;
            gap: 5.5rem;
            padding-right: 5.5rem;
            animation: marquee-scroll 45s linear infinite;
            align-items: center;
          }
          .premium-marquee-container:hover .premium-marquee-track,
          .premium-marquee-container:focus-within .premium-marquee-track {
            animation-play-state: paused;
          }
          .premium-logo-item {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.9;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }
          .premium-logo-item:hover {
            opacity: 1;
            transform: scale(1.08);
          }
          @keyframes marquee-scroll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-100%, 0, 0);
            }
          }
        `}</style>
        <div className="premium-marquee-track">
          {configData.oemPartners.map((oem) => {
            const logoSrc = logoMapping[oem];
            const details = logoDetails[oem] || { height: 28 };
            return (
              <div 
                key={`m1-${oem}`} 
                className="premium-logo-item"
                style={{ height: `${details.height}px` }}
              >
                <img 
                  src={logoSrc} 
                  alt={`${oem} Logo`} 
                  loading="lazy" 
                  style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>
            );
          })}
        </div>
        <div className="premium-marquee-track" aria-hidden="true">
          {configData.oemPartners.map((oem) => {
            const logoSrc = logoMapping[oem];
            const details = logoDetails[oem] || { height: 28 };
            return (
              <div 
                key={`m2-${oem}`} 
                className="premium-logo-item"
                style={{ height: `${details.height}px` }}
              >
                <img 
                  src={logoSrc} 
                  alt={`${oem} Logo`} 
                  loading="lazy" 
                  style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>
            );
          })}
        </div>
      </div>


      {/* 3. Core Strengths & Certifications */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-split">

            {/* Mission & Vision info */}
            <ScrollReveal variant="fade-left" duration={0.8}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Why INNOWORQ
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1.25rem', lineHeight: '1.2' }}>
                Delivering Excellence in<br />Infrastructure Support
              </h2>
              <p style={{ lineHeight: '1.7', color: 'var(--text-light-secondary)', marginBottom: '1.5rem' }}>
                Our corporate structure is organized around reliable service execution. With pan-India presence and global support delivery channels, INNOWORQ is trusted by Fortune 500 companies and growing enterprises alike.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2rem' }}>
                {[
                  { icon: '🚀', title: 'Our Vision', text: 'To be the global benchmark for seamless, multi-vendor IT infrastructure and cloud managed services.' },
                  { icon: '🎯', title: 'Our Mission', text: 'Providing SLA-bound proactive support, minimizing system downtime, and ensuring absolute compliance standards.' },
                  { icon: '🛡️', title: 'Quality First', text: 'ISO-certified processes guaranteeing continuous quality management and enterprise-grade security controls.' },
                  { icon: '⚡', title: 'Always On', text: '24×7×365 NOC monitoring and incident response across India, APAC, Europe, and Middle East regions.' },
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
            <ScrollReveal variant="fade-right" delay={0.2} duration={0.8}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
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
      <section style={{ padding: '7rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                  <Link to={`/services#${srv.id}`} style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Learn more →
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link to="/services" className="btn btn-primary" style={{ padding: '0.85rem 2.5rem' }}>
                View All 11 Services →
              </Link>
            </div>
          </ScrollReveal>
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

      {/* 6. CTA Band */}
      <ScrollReveal variant="fade-up">
        <section
          style={{
            padding: '7rem 0',
            background: 'linear-gradient(135deg, var(--brand-blue) 0%, #052f5c 100%)',
            textAlign: 'center',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle animated circles */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.12, 0.07] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '-80px', right: '-80px', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', pointerEvents: 'none' }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', pointerEvents: 'none' }}
          />

          <div className="container" style={{ maxWidth: '740px', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', lineHeight: '1.2' }}
            >
              Establish Contact with<br />Noida Channel Desk
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '3rem', fontSize: '1.05rem' }}
            >
              Whether you want to partner with us, enroll in our tech training programs,
              or request active SLA-backed support desk coverage — we have structured channels to review your request.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/support-desk" className="btn" style={{ padding: '0.9rem 2rem', backgroundColor: '#ffffff', color: 'var(--brand-blue)', fontWeight: 700, borderRadius: '6px' }}>
                🎫 Open Support Ticket
              </Link>
              <Link to="/partner-registration" className="btn" style={{ padding: '0.9rem 2rem', backgroundColor: 'transparent', color: '#ffffff', fontWeight: 700, borderRadius: '6px', border: '1px solid rgba(255,255,255,0.4)' }}>
                🤝 Become a Partner
              </Link>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        .responsive-hero-title { font-size: 3.75rem; }
        .stats-full-grid { grid-template-columns: repeat(7, 1fr); }
        @media (max-width: 1200px) {
          .stats-full-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .responsive-hero-title { font-size: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem, CountUp } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

// Import BrandRevealPanel component
import BrandRevealPanel from '../components/BrandRevealPanel';

// Import certifications
import iso45001 from '../assets/certificates/iso_45001.png';
import iso9001 from '../assets/certificates/iso_9001.png';
import iso27001 from '../assets/certificates/iso_27001.png';
import iso20000 from '../assets/certificates/iso_20000.png';
import cmmiLevel3 from '../assets/certificates/cmmi_level3.png';

// Import team members
import naveenGroverImg from '../assets/team/naveen_grover.jpg';
import anujGuptaImg from '../assets/team/anuj_gupta.png';
import nitinKumarImg from '../assets/team/nitin_kumar.png';
import manishGuptaImg from '../assets/team/manish_gupta.png';

const TEAM_IMAGES = {
  "Naveen Grover": naveenGroverImg,
  "Anuj Gupta": anujGuptaImg,
  "Nitin Kumar": nitinKumarImg,
  "Manish Gupta": manishGuptaImg
};

const CERTIFICATES = [
  { name: "ISO 45001:2018", number: "Registration No: 44 126 20042", img: iso45001 },
  { name: "ISO 9001:2015", number: "Registration No: 44 100 20084", img: iso9001 },
  { name: "ISO 27001:2022", number: "Registration No: 44 121 22002", img: iso27001 },
  { name: "ISO 20000-1:2018", number: "Registration No: 44 135 20001", img: iso20000 },
  { name: "CMMI Level 3", number: "Appraisal ID: 52914 / CMMI-DEV3", img: cmmiLevel3 }
];

export default function About() {
  const leadership = configData.leadership;
  const stats = configData.stats;

  const CORE_STATS = [
    {
      number: stats.clients,
      label: "Happy Clients",
      desc: "Enterprise client footprint",
      delay: 0
    },
    {
      number: stats.professionals,
      label: "Head Count",
      desc: "Certified technical innovators",
      delay: 0.1
    },
    {
      number: stats.devices,
      label: "Devices Supported",
      desc: "Unix, Windows Servers, and DC assets",
      delay: 0.2
    },
    {
      number: stats.alliances,
      label: "Strategic Alliances",
      desc: "Partner technology ecosystem",
      delay: 0.3
    }
  ];

  const FACTS_FIGURES = [
    { number: stats.projects, label: "Projects Delivered", delay: 0 },
    { number: stats.professionals, label: "Team of Innovators", delay: 0.08 },
    { number: stats.clients, label: "Our Clients", delay: 0.16 },
    { number: stats.countries, label: "Countries", delay: 0.24 },
    { number: stats.industries, label: "Industries Served", delay: 0.32 }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }} id="about-page-view">
      
      {/* Page Hero Header */}
      <div style={{
        background: 'linear-gradient(180deg, #f0f9ff 0%, #f8fafc 100%)',
        padding: '6rem 0 4rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-light)'
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--border-light) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.5,
          pointerEvents: 'none'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-down" duration={0.6}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ 
                color: 'var(--brand-blue)', 
                fontWeight: 700, 
                fontSize: '0.85rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1.5px', 
                background: 'rgba(9, 97, 159, 0.06)', 
                padding: '0.35rem 1rem', 
                borderRadius: '30px', 
                border: '1px solid rgba(9, 97, 159, 0.1)' 
              }}>
                Corporate Profile
              </span>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '1.5rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                About INNOWORQ
              </h1>
              <p style={{ color: 'var(--text-light-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: 500 }}>
                Providing high-grade, SLA-bound multi-vendor technology support, cloud managed integrations, and infrastructure services globally.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container" style={{ padding: '6rem 0' }}>
        <div className="about-split-row" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
          <ScrollReveal variant="fade-left" duration={0.8}>
            <BrandRevealPanel />
          </ScrollReveal>

          <ScrollReveal variant="fade-right" duration={0.8} delay={0.2}>
            <div>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>
                Who We Are
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-light-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Welcome To INNOWORQ
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-light-secondary)', lineHeight: '1.7', fontSize: '1.02rem' }}>
                <p>
                  INNOWORQ is an IT Infrastructure and Solutions Company that enables enterprises across industries with a Pan India presence and providing services in many countries outside India.
                </p>
                <p>
                  As an IT services and transformation partner, INNOWORQ brings extensive domain and technology expertise to drive competitive differentiation with measurable business outcomes.
                </p>
                <p>
                  Since our inception 2019 INNOWORQ has lead a customer-centric approach and utilizes all delivery models, be it in supporting the infrastructure or their integration or deployment.
                </p>
                <p>
                  Working with over a 100 clients and supported by over 300 engineers, spread across India and across 5 countries, INNOWORQ's innovative approach and client focus led to INR 20 Cr revenue in FY2023-24, with 20-25% YoY growth.
                </p>
                <p style={{ fontWeight: 700, color: 'var(--text-light-primary)', borderLeft: '3px solid var(--brand-blue)', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                  INNOWORQ is ISO 9001:2015 and ISO/IEC 27001:2022 Certified.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Core Stats Band */}
      <div style={{ backgroundColor: '#f1f5f9', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Performance Metrics
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.5rem' }}>
                Our Growth, Your Trust—Numbers That Matters
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.1} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="stats-full-grid">
            {CORE_STATS.map((stat) => (
              <StaggerItem key={stat.label} variant="fade-up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(9, 97, 159, 0.08)', borderColor: 'rgba(9, 97, 159, 0.2)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '2.5rem 1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div className="fact-number" style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>
                    <CountUp target={stat.number} delay={stat.delay} />
                  </div>
                  <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {stat.label}
                  </h4>
                  <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>
                    {stat.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Facts & Figures Band */}
      <div className="container" style={{ margin: '6rem auto' }}>
        <div className="facts-figures-band">
          <div className="facts-figures-split">
            <ScrollReveal variant="fade-left">
              <div>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  FACTS & FIGURES
                </h2>
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: 500 }}>
                  We envisage to build better products and offer high-end services, inventing disruptive business models to provide strategic business advantage. Check our important facts & figures.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer stagger={0.08} className="facts-grid">
              {FACTS_FIGURES.map((fact) => (
                <StaggerItem key={fact.label} variant="fade-up">
                  <div className="fact-card">
                    <span className="fact-number">
                      <CountUp target={fact.number} delay={fact.delay} />
                    </span>
                    <span className="fact-label">{fact.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <section className="container" style={{ padding: '2rem 0 6rem 0' }}>
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Leadership Team
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Our Team
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
              At INNOWORQ, our technical team is the backbone of our comprehensive IT training and enterprise solutions. We are a diverse group of certified professionals dedicated to delivering top-notch support.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.12} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="leadership-grid">
          {leadership.map((leader) => (
            <StaggerItem key={leader.name} variant="fade-up">
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.08)', borderColor: 'rgba(9, 97, 159, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="team-card"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.5rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                }}
              >
                {/* Circular Portrait Image */}
                <div className="team-img-wrapper">
                  <img src={TEAM_IMAGES[leader.name] || naveenGroverImg} alt={leader.name} />
                </div>
                
                <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.25rem 0' }}>
                  {leader.name}
                </h4>
                <span style={{ fontSize: '0.88rem', color: 'var(--brand-blue)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                  {leader.title}
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {leader.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Certifications Section */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <div className="certifications-section">
          <ScrollReveal variant="fade-down">
            <div className="certifications-header">
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Compliance & Standards
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.5rem', color: 'var(--text-light-primary)' }}>
                Our Certifications & Recognitions
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="certifications-container" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'stretch',
              marginTop: '3rem'
            }}>
              {CERTIFICATES.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(9,97,159,0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '180px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                  }}
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(9,97,159,0.3)' }}
                >
                  <img
                    src={cert.img}
                    alt={cert.name}
                    style={{ height: '55px', width: 'auto', display: 'block', objectFit: 'contain', marginBottom: '1rem' }}
                  />
                  <div>
                    <h5 style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-light-primary)', margin: '0 0 0.25rem 0' }}>{cert.name}</h5>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-light-secondary)', fontFamily: 'monospace', display: 'block' }}>{cert.number}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

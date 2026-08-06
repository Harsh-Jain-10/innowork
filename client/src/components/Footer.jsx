import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import logo from '../assets/logo.png';
import configData from '../data/companyConfig.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blogs', path: '/blogs' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e2e8f0',
        padding: '4rem 0 2.5rem 0',
        color: '#475569',
        fontSize: '0.9rem'
      }}
      id="site-footer"
    >
      <div className="container">
        <ScrollReveal variant="fade-up" threshold={0.05}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '3.5fr 2fr 2.5fr 4fr', 
              gap: '2.5rem', 
              marginBottom: '3.5rem',
              alignItems: 'start' 
            }} 
            className="footer-main-grid"
          >

            {/* Column 1: Brand & Description & Badges */}
            <div className="footer-col-1">
              <img src={logo} alt="INNOWORQ logo" style={{ height: '34px', marginBottom: '1.25rem', display: 'block' }} />
              <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: '#475569', fontSize: '0.92rem', maxWidth: '320px' }}>
                IT infrastructure, cloud, and cybersecurity services delivering scalable, secure environments under solid SLA models.
              </p>
              
              {/* Region Badges */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0.3rem 0.85rem', fontSize: '0.85rem', color: '#475569', backgroundColor: '#f8fafc', fontWeight: 600 }}>
                  India
                </span>
                <span style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0.3rem 0.85rem', fontSize: '0.85rem', color: '#475569', backgroundColor: '#f8fafc', fontWeight: 600 }}>
                  UAE
                </span>
              </div>

              {/* SOCIAL Section */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '0.6rem' }}>
                  SOCIAL
                </span>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  {/* LinkedIn Circular Icon */}
                  <a 
                    href={configData.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    style={{ 
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      color: '#0077b5',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.borderColor = '#0077b5';
                      e.currentTarget.style.backgroundColor = '#0077b5';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 119, 181, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#cbd5e1';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#0077b5';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>

                  {/* Instagram Circular Icon */}
                  <a 
                    href={configData.contact.instagram || "https://www.instagram.com/innoworq"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                    style={{ 
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      color: '#e1306c',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.borderColor = '#e1306c';
                      e.currentTarget.style.backgroundColor = '#e1306c';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(225, 48, 108, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#cbd5e1';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#e1306c';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: QUICK LINKS */}
            <div className="footer-col-2">
              <h4 style={{ color: '#94a3b8', marginBottom: '1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                QUICK LINKS
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{ transition: 'var(--transition-smooth)', color: '#1e293b', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--brand-blue)'}
                      onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: CERTIFICATIONS */}
            <div className="footer-col-3">
              <h4 style={{ color: '#94a3b8', marginBottom: '1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                CERTIFICATIONS
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0, color: '#1e293b', fontWeight: 600, fontSize: '0.95rem' }}>
                {configData.certifications.map((cert) => (
                  <li key={cert}>{cert.replace(' Certified', '')}</li>
                ))}
              </ul>
            </div>

            {/* Column 4: CONTACT AND SUPPORT (With Left Blue Line) */}
            <div 
              className="footer-col-4" 
              style={{ 
                borderLeft: '2px solid var(--brand-blue)', 
                paddingLeft: '1.75rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem' 
              }}
            >
              <h4 style={{ color: '#94a3b8', marginBottom: '0.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                CONTACT AND SUPPORT
              </h4>

              {/* Registered Address */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.4px', marginBottom: '0.25rem' }}>
                  REGISTERED ADDRESS (NOIDA)
                </span>
                <span style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: '1.45', display: 'block', fontWeight: 500, maxWidth: '250px' }}>
                  {configData.contact.address}
                </span>
              </div>

              {/* Dubai Regional Hub */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.4px', marginBottom: '0.25rem' }}>
                  DUBAI REGIONAL HUB
                </span>
                <span style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: '1.45', display: 'block', fontWeight: 500, maxWidth: '260px' }}>
                  {configData.contact.dubaiAddress || 'Office No. 2-75, Smark 2 Building, Ras Al Khor Industrial Area 2, Dubai, United Arab Emirates'}
                </span>
              </div>

              {/* Sales Toll-Free */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.4px', marginBottom: '0.25rem' }}>
                  SALES TOLL-FREE
                </span>
                <a 
                  href={`tel:${configData.contact.phone.replace(/\s+/g, '')}`} 
                  onClick={(e) => {
                    if (window.innerWidth >= 768) {
                      e.preventDefault();
                    }
                  }}
                  style={{ 
                    color: 'var(--brand-blue)', 
                    fontWeight: 700, 
                    fontSize: '1.05rem', 
                    textDecoration: 'none',
                    cursor: window.innerWidth >= 768 ? 'default' : 'pointer'
                  }}
                >
                  {configData.contact.phone}
                </a>
              </div>

              {/* General & Sales Email */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.4px', marginBottom: '0.25rem' }}>
                  GENERAL &amp; SALES EMAIL
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a 
                    href={`mailto:${configData.contact.generalEmail || 'hello@innoworq.com'}`} 
                    style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
                  >
                    {configData.contact.generalEmail || 'hello@innoworq.com'}
                  </a>
                  <a 
                    href={`mailto:${configData.contact.email}`} 
                    style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
                  >
                    {configData.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Copyright Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid #cbd5e1',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#64748b'
          }}
        >
          <div>
            <p style={{ margin: 0, lineHeight: '1.5' }}>
              &copy; {currentYear} INNOWORQ Infotech Pvt. Ltd. All rights reserved.
              <span style={{ display: 'block', marginTop: '0.25rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                Disclaimer: Support coverage, vendor labels, and logo marks (Dell, Microsoft, RedHat, Cisco, VMware, etc.) represent technical capability and do not imply formal endorsement by the respective OEMs.
              </span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/services" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>Services Catalog</Link>
            <Link to="/solutions" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>Solutions Overview</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #site-footer {
            padding: 3rem 0 2rem 0 !important;
          }
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
            margin-bottom: 2.5rem !important;
          }
          .footer-col-1 {
            grid-column: span 2 !important;
          }
          .footer-col-1 p {
            max-width: 100% !important;
          }
          .footer-col-2, .footer-col-3 {
            grid-column: span 1 !important;
          }
          .footer-col-4 {
            grid-column: span 2 !important;
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 2px solid var(--brand-blue) !important;
            padding-top: 1.5rem !important;
          }
          .footer-bottom-bar {
            padding-top: 1.25rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 550px) {
          #site-footer {
            padding: 2.5rem 0 1.5rem 0 !important;
          }
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4 {
            grid-column: span 1 !important;
          }
          .footer-col-4 div span {
            max-width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
}


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
              
              {/* Badges: India | UAE | [in] */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '0.25rem 0.75rem', fontSize: '0.85rem', color: '#64748b', backgroundColor: '#ffffff', fontWeight: 500 }}>
                  India
                </span>
                <span style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '0.25rem 0.75rem', fontSize: '0.85rem', color: '#64748b', backgroundColor: '#ffffff', fontWeight: 500 }}>
                  UAE
                </span>
                <a 
                  href={configData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '0.25rem 0.6rem', fontSize: '0.85rem', color: '#334155', backgroundColor: '#ffffff', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}
                >
                  <u style={{ textDecoration: 'underline' }}>in</u>
                </a>
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
                  REGISTERED ADDRESS
                </span>
                <span style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: '1.45', display: 'block', fontWeight: 500, maxWidth: '240px' }}>
                  {configData.contact.address}
                </span>
              </div>

              {/* Sales Toll-Free */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.4px', marginBottom: '0.25rem' }}>
                  SALES TOLL-FREE
                </span>
                <a 
                  href={`tel:${configData.contact.phone}`} 
                  style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}
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


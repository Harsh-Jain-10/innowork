import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import logo from '../assets/logo.png';
import configData from '../data/companyConfig.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Career', path: '/career' }
  ];

  const regLinks = [
    { name: 'Partner Registration', path: '/partner-registration' },
    { name: 'Support Desk', path: '/support-desk' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#f1f5f9',
        borderTop: '1px solid #cbd5e1',
        padding: '5rem 0 3rem 0',
        color: 'var(--text-light-secondary)',
        fontSize: '0.9rem'
      }}
      id="site-footer"
    >
      <div className="container">
        <ScrollReveal variant="fade-up" threshold={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', marginBottom: '4rem' }}>

            {/* Logo, Certifications & Socials */}
            <div style={{ gridColumn: 'span 4' }} className="footer-col-1">
              <img src={logo} alt="INNOWORQ logo" style={{ height: '36px', marginBottom: '1.5rem', display: 'block' }} />
              <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-light-secondary)' }}>
                INNOWORQ Infotech Pvt. Ltd. is an IT Infrastructure, Cloud, and Cybersecurity Services company. We deliver scalable, secure, and reliable IT environments under solid SLA models.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-light-primary)', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 600 }}>
                {configData.certifications.map((cert) => (
                  <span key={cert}>🛡️ {cert}</span>
                ))}
              </div>
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: '#0077b5', fontSize: '0.88rem', fontWeight: 600, cursor: 'default' }}>LinkedIn</span>
              </div>
            </div>

            {/* Quick Sitemap Links */}
            <div style={{ gridColumn: 'span 3' }} className="footer-col-2">
              <h4 style={{ color: 'var(--text-light-primary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Sitemap</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{ transition: 'var(--transition-smooth)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--brand-blue)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-light-secondary)'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration & Support Links */}
            <div style={{ gridColumn: 'span 2' }} className="footer-col-3">
              <h4 style={{ color: 'var(--text-light-primary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Registrations</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {regLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{ transition: 'var(--transition-smooth)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--brand-blue)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-light-secondary)'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div style={{ gridColumn: 'span 3' }} className="footer-col-4">
              <h4 style={{ color: 'var(--text-light-primary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Corporate Office</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Registered Address</span>
                  <span style={{ color: 'var(--text-light-primary)', fontSize: '0.9rem', lineHeight: '1.5', display: 'block', fontWeight: 500 }}>{configData.contact.address}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Toll Free</span>
                  <span style={{ color: 'var(--text-light-primary)', fontWeight: 700 }}>{configData.contact.phone}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Sales &amp; Queries</span>
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>{configData.contact.email}</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Legal Disclaimer & Copyright */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid #cbd5e1',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', maxWidth: '850px', lineHeight: '1.4' }}>
              &copy; {currentYear} INNOWORQ Infotech Pvt. Ltd. All rights reserved.
              <br />
              <span style={{ display: 'block', marginTop: '0.5rem' }}>
                Disclaimer: Support coverage, vendor labels, and logo marks (Dell, Microsoft, RedHat, Cisco, VMware, etc.) represent technical integration and support delivery capability and do not imply formal endorsement by the respective OEMs.
              </span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem' }}>
            <Link to="/support-desk" style={{ color: '#64748b' }}>Support Desk</Link>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <Link to="/services" style={{ color: '#64748b' }}>IT Services Catalog</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-col-1 {
            grid-column: span 12 !important;
          }
          .footer-col-2, .footer-col-3 {
            grid-column: span 6 !important;
          }
          .footer-col-4 {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4 {
            grid-column: span 12 !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

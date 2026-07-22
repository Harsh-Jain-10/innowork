import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import configData from '../data/companyConfig.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const services = configData.services;

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
      }}
      id="main-navigation"
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        
        {/* Brand Logo Anchor to Home */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }} id="nav-brand-logo">
          <img 
            src={logo} 
            alt="INNOWORQ logo" 
            style={{ height: '36px', display: 'block' }} 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav-links">
          
          <Link
            to="/about"
            id="nav-link-about"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/about' ? 'var(--brand-blue)' : '#334155',
              transition: 'var(--transition-smooth)'
            }}
          >
            About Us
          </Link>

          {/* Mega Menu Dropdown Trigger */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              to="/services"
              id="nav-link-services"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: location.pathname === '/services' ? 'var(--brand-blue)' : '#334155',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '1.5rem 0'
              }}
            >
              Services 
              <span style={{ fontSize: '0.75rem', transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
            </Link>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '60px',
                    left: '-200px',
                    width: '680px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    padding: '1.5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    zIndex: 200
                  }}
                >
                  {services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services#${srv.id}`}
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        transition: 'var(--transition-smooth)'
                      }}
                      className="mega-menu-item"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <span style={{ fontWeight: 700, color: 'var(--text-light-primary)', fontSize: '0.88rem' }}>{srv.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-light-secondary)', lineHeight: '1.3' }}>{srv.desc.substring(0, 70)}...</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/solutions"
            id="nav-link-solutions"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/solutions' ? 'var(--brand-blue)' : '#334155'
            }}
          >
            Solutions
          </Link>

          <Link
            to="/industries"
            id="nav-link-industries"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/industries' ? 'var(--brand-blue)' : '#334155'
            }}
          >
            Industries
          </Link>

          <Link
            to="/blogs"
            id="nav-link-blogs"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/blogs' ? 'var(--brand-blue)' : '#334155'
            }}
          >
            Blogs
          </Link>

          <Link
            to="/career"
            id="nav-link-career"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/career' ? 'var(--brand-blue)' : '#334155'
            }}
          >
            Career
          </Link>

          <Link
            to="/partner-registration"
            id="nav-link-partner-reg"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/partner-registration' ? 'var(--brand-blue)' : '#334155'
            }}
          >
            Partner Registration
          </Link>
        </div>

        {/* Support Desk Action CTA */}
        <div className="desktop-cta">
          <Link to="/support-desk" className="btn btn-primary" id="nav-cta-support" style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}>
            Support Desk
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-nav-toggle"
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
            flexDirection: 'column',
            gap: '5px'
          }}
          className="mobile-toggle-btn"
        >
          <span style={{ width: '22px', height: '2px', backgroundColor: '#334155', transition: 'var(--transition-smooth)', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ width: '22px', height: '2px', backgroundColor: '#334155', transition: 'var(--transition-smooth)', opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ width: '22px', height: '2px', backgroundColor: '#334155', transition: 'var(--transition-smooth)', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '76px',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #e2e8f0',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 99,
              maxHeight: 'calc(100vh - 76px)',
              overflowY: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
            className="mobile-nav-drawer"
          >
            <Link to="/about" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>About Us</Link>

            {/* Mobile Touch-Friendly Services Expandable */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  fontWeight: 600,
                  color: '#334155',
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  padding: '0.65rem 0',
                  minHeight: '44px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                Services
                <span style={{ fontSize: '0.8rem' }}>{isMobileServicesOpen ? '▲' : '▼'}</span>
              </button>
              {isMobileServicesOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                  {services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services#${srv.id}`}
                      onClick={() => setIsOpen(false)}
                      style={{ fontSize: '0.92rem', color: 'var(--text-light-secondary)', padding: '0.5rem 0', minHeight: '40px', display: 'flex', alignItems: 'center' }}
                    >
                      {srv.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/solutions" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>Solutions</Link>
            <Link to="/industries" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>Industries</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>Blogs</Link>
            <Link to="/career" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>Career</Link>
            <Link to="/partner-registration" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>Partner Registration</Link>

            <Link
              to="/support-desk"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary"
              id="nav-cta-support-mobile"
              style={{ width: '100%', marginTop: '0.75rem', minHeight: '46px' }}
            >
              Support Desk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav-links, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 360px) {
          #nav-brand-logo img {
            height: 28px !important;
          }
        }
      `}</style>
    </nav>
  );
}

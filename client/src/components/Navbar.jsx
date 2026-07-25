import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import configData from '../data/companyConfig.json';
import AnnouncementCenter from './AnnouncementCenter';
import InnoworqIcon from './InnoworqIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [hasUnreadAnnouncements, setHasUnreadAnnouncements] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isViewed = sessionStorage.getItem('announcementsViewed') === 'true';
    if (isViewed) {
      setHasUnreadAnnouncements(false);
    }
  }, []);

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0.85rem 0'
      }}
      id="main-navbar"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} id="nav-brand-logo">
          <img src={logo} alt="INNOWORQ Logo" style={{ height: '36px', display: 'block' }} />
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav-links">
          <Link
            to="/about"
            id="nav-link-about"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: location.pathname === '/about' ? 'var(--brand-blue)' : '#334155'
            }}
          >
            About Us
          </Link>

          {/* Dropdown Menu for Services */}
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
                gap: '0.25rem'
              }}
            >
              Services <span style={{ fontSize: '0.7rem' }}>▼</span>
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
                    top: '100%',
                    left: 0,
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '0.75rem 0',
                    minWidth: '260px',
                    border: '1px solid #e2e8f0',
                    zIndex: 110
                  }}
                >
                  {configData.services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services#${srv.id}`}
                      style={{
                        display: 'block',
                        padding: '0.5rem 1.25rem',
                        fontSize: '0.88rem',
                        color: '#334155',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f1f5f9';
                        e.target.style.color = 'var(--brand-blue)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#334155';
                      }}
                    >
                      {srv.name}
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

        </div>

        {/* Right Nav Action Items (Announcement Center Icon) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="nav-right-actions">
          
          {/* Top-Right Announcement Branded INNOWORQ Logo Mark Icon */}
          <button
            type="button"
            onClick={() => setIsAnnouncementOpen(true)}
            id="nav-announcement-btn"
            aria-label="View Announcements"
            title="INNOWORQ Announcement Center"
            style={{
              position: 'relative',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              padding: 0
            }}
            className="nav-announcement-btn"
          >
            {/* Custom Exact INNOWORQ Logo Mark Icon */}
            <InnoworqIcon size={24} />

            {/* Unread Blue Notification Badge Dot */}
            {hasUnreadAnnouncements && (
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#0963ff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 10px rgba(9, 99, 255, 0.75)'
                }}
                title="New Announcement Available"
              />
            )}
          </button>

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
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #e2e8f0',
              padding: '1.25rem 1.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              zIndex: 99
            }}
          >
            <Link to="/about" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.75rem 0', minHeight: '48px', display: 'flex', alignItems: 'center' }}>About Us</Link>
            
            {/* Services Mobile Submenu */}
            <div>
              <div 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                style={{ fontWeight: 600, color: '#334155', padding: '0.75rem 0', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <span>Services</span>
                <span>{isServicesOpen ? '▲' : '▼'}</span>
              </div>

              {isServicesOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {configData.services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services#${srv.id}`}
                      onClick={() => setIsOpen(false)}
                      style={{ fontSize: '0.92rem', color: 'var(--text-light-secondary)', padding: '0.65rem 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}
                    >
                      {srv.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/solutions" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.75rem 0', minHeight: '48px', display: 'flex', alignItems: 'center' }}>Solutions</Link>
            <Link to="/industries" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.75rem 0', minHeight: '48px', display: 'flex', alignItems: 'center' }}>Industries</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} style={{ fontWeight: 600, color: '#334155', padding: '0.75rem 0', minHeight: '48px', display: 'flex', alignItems: 'center' }}>Blogs</Link>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsAnnouncementOpen(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0.85rem 1.25rem',
                borderRadius: '8px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                fontWeight: 600,
                color: '#1e293b',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <InnoworqIcon size={22} />
                <span>Announcement Center</span>
              </div>
              {hasUnreadAnnouncements && (
                <span style={{
                  backgroundColor: '#0963ff',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  NEW
                </span>
              )}
            </button>

          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-announcement-btn {
          transition: all 250ms ease !important;
        }
        .nav-announcement-btn:hover {
          transform: translateY(-2px);
          border-color: #2563eb !important;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.2) !important;
        }
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

      {/* Premium Announcement Center Modal Viewer */}
      <AnnouncementCenter 
        isOpen={isAnnouncementOpen}
        onClose={() => setIsAnnouncementOpen(false)}
        onAllViewed={() => setHasUnreadAnnouncements(false)}
      />
    </nav>
  );
}

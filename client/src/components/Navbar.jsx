import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import InnoworqIcon from './InnoworqIcon';
import AnnouncementCenter from './AnnouncementCenter';

const NAV_DROPDOWNS = {
  services: {
    title: 'Enterprise IT Services',
    subtitle: 'End-to-end SLA-bound IT management and multi-cloud operations',
    items: [
      { id: 'it-infrastructure', name: 'IT Infrastructure Management', desc: 'Hardware lifecycle, network & server administration' },
      { id: 'hybrid-cloud', name: 'Hybrid Cloud & Multi-Cloud Operations', desc: 'AWS, Azure, GCP infrastructure & cloud cost optimization' },
      { id: 'cybersecurity', name: 'Cybersecurity & Zero-Trust', desc: 'Vulnerability assessment, SOC monitoring & endpoint security' },
      { id: 'noc-support', name: '24×7 NOC & Managed Support', desc: 'Continuous uptime monitoring & L1/L2/L3 sysadmin dispatch' },
      { id: 'devops-iac', name: 'DevOps & IaC Automation', desc: 'Terraform, Ansible, CI/CD pipeline orchestration' }
    ],
    ctaText: 'Explore All Services →',
    ctaLink: '/services'
  },
  solutions: {
    title: 'Transformative Solutions',
    subtitle: 'Strategic frameworks engineered for enterprise growth',
    items: [
      { id: 'enterprise-erp', name: 'Enterprise ERP & SAP Support', desc: 'High availability ERP hosting & functional maintenance' },
      { id: 'cloud-migration', name: 'Cloud Migration & Modernization', desc: 'Zero-downtime workload lift-and-shift to cloud' },
      { id: 'multivendor-sla', name: 'Multi-Vendor Hardware Support', desc: 'OEM alliances for HPE, Dell, Cisco, Lenovo SLA coverage' },
      { id: 'disaster-recovery', name: 'Disaster Recovery & Business Continuity', desc: 'Automated backup, failover & data sovereignty solutions' }
    ],
    ctaText: 'View Enterprise Solutions →',
    ctaLink: '/solutions'
  },
  industries: {
    title: 'Industries We Serve',
    subtitle: 'Domain expertise tailored to global sector requirements',
    items: [
      { id: 'bfsi', name: 'BFSI & Fintech', desc: 'High-frequency transaction security & PCI-DSS compliance' },
      { id: 'healthcare', name: 'Healthcare & Life Sciences', desc: 'HIPAA compliant cloud storage & medical IT infrastructure' },
      { id: 'retail', name: 'Retail & E-Commerce', desc: 'Scalable omnichannel infrastructure & peak load protection' },
      { id: 'manufacturing', name: 'Manufacturing & Logistics', desc: 'IoT edge deployment & supply chain NOC support' },
      { id: 'energy', name: 'Energy & Utilities', desc: 'Mission-critical infrastructure resilience' }
    ],
    ctaText: 'Discover All Industries →',
    ctaLink: '/industries'
  }
};

const NAV_ITEMS = [
  { path: '/about', label: 'About', id: 'about' },
  { path: '/services', label: 'Services', id: 'services', hasDropdown: true },
  { path: '/solutions', label: 'Solutions', id: 'solutions', hasDropdown: true },
  { path: '/industries', label: 'Industries', id: 'industries', hasDropdown: true },
  { path: '/blogs', label: 'Blogs', id: 'blogs' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [hasUnreadAnnouncements, setHasUnreadAnnouncements] = useState(true);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for smooth navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check announcement status
  useEffect(() => {
    const isViewed = sessionStorage.getItem('announcementsViewed') === 'true';
    if (isViewed) {
      setHasUnreadAnnouncements(false);
    }
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleRequestQuote = () => {
    if (location.pathname === '/about') {
      const el = document.getElementById('welcome-to-innoworq');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/about#welcome-to-innoworq');
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          pointerEvents: 'none',
          padding: isScrolled ? '12px 1.5rem' : '18px 2rem',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        id="main-header-wrapper"
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          {/* ================= 1. LEFT OUTER BRAND LOGO (Unscrolled State) ================= */}
          <div
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              opacity: isScrolled ? 0 : 1,
              transform: isScrolled ? 'translateY(-12px) scale(0.92)' : 'translateY(0) scale(1)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: isScrolled ? 'none' : 'auto'
            }}
            className="outer-brand-logo"
          >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
              <img src={logo} alt="INNOWORQ Logo" style={{ height: '38px', width: 'auto', display: 'block' }} />
            </Link>
          </div>

          {/* ================= 2. CENTER LIGHT-THEMED FLOATING PILL NAVBAR ================= */}
          <motion.nav
            layout
            style={{
              pointerEvents: 'auto',
              position: 'relative',
              margin: isScrolled ? '0 auto' : '0',
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: '50px',
              padding: '6px 8px 6px 12px',
              boxShadow: isScrolled
                ? '0 16px 36px -10px rgba(9, 97, 159, 0.14), 0 4px 12px rgba(0, 0, 0, 0.04)'
                : '0 8px 24px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="floating-pill-nav-light"
          >
            {/* --- "I." LOGO BUTTON (Dedication Home Section) --- */}
            <motion.button
              type="button"
              onClick={() => {
                if (location.pathname === '/') {
                  scrollToTop();
                } else {
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                backgroundColor: location.pathname === '/' ? 'rgba(9, 97, 159, 0.08)' : '#ffffff',
                border: location.pathname === '/' ? '1px solid rgba(9, 97, 159, 0.25)' : '1px solid #e2e8f0',
                borderRadius: '30px',
                padding: '6px 12px 6px 10px',
                cursor: 'pointer',
                boxShadow: location.pathname === '/' ? '0 2px 10px rgba(9, 97, 159, 0.12)' : '0 2px 6px rgba(0,0,0,0.04)',
                flexShrink: 0,
                marginRight: '6px',
                position: 'relative'
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              title="INNOWORQ Home"
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <InnoworqIcon size={20} />
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#09619f', display: 'inline-block' }} />
              </div>
              
              {/* Active Home Pointer Dot */}
              {location.pathname === '/' && (
                <motion.span
                  layoutId="activeNavPointerDot"
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#09619f',
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>

            {/* --- Desktop Nav Links in Strict Sequential Order (Home -> About -> Services -> Solutions -> Industries -> Blogs) --- */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-pill-links">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                const isHovered = activeDropdown === item.id;

                return (
                  <div
                    key={item.id}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => item.hasDropdown ? setActiveDropdown(item.id) : null}
                    onMouseLeave={() => item.hasDropdown ? setActiveDropdown(null) : null}
                  >
                    <button
                      type="button"
                      onClick={() => navigate(item.path)}
                      className={`pill-nav-btn-light ${isActive ? 'active' : ''}`}
                      style={{
                        position: 'relative',
                        background: isActive ? 'rgba(9, 97, 159, 0.08)' : 'transparent',
                        color: isActive ? '#09619f' : '#334155',
                        fontWeight: isActive ? 700 : 600
                      }}
                    >
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span>{item.label}</span>
                        {/* Active Page Dot Indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavPointerDot"
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              backgroundColor: '#09619f',
                              marginTop: '2px'
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </span>

                      {item.hasDropdown && (
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                            marginLeft: '4px'
                          }}
                        >
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            <AnimatePresence>
              {activeDropdown && NAV_DROPDOWNS[activeDropdown] && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveDropdown(activeDropdown)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'min(620px, 90vw)',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    boxShadow: '0 20px 50px -10px rgba(9, 97, 159, 0.15), 0 0 0 1px rgba(226, 232, 240, 0.8)',
                    zIndex: 100,
                    color: '#0f172a'
                  }}
                  className="mega-dropdown-panel-light"
                >
                  <div style={{ marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#09619f', margin: 0 }}>
                      {NAV_DROPDOWNS[activeDropdown].title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '2px 0 0 0' }}>
                      {NAV_DROPDOWNS[activeDropdown].subtitle}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                    {NAV_DROPDOWNS[activeDropdown].items.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (item.link) {
                            navigate(item.link);
                          } else {
                            navigate(`/${activeDropdown}#${item.id}`);
                          }
                        }}
                        style={{
                          padding: '10px 12px',
                          borderRadius: '12px',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #f1f5f9',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(9, 97, 159, 0.06)';
                          e.currentTarget.style.borderColor = 'rgba(9, 97, 159, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8fafc';
                          e.currentTarget.style.borderColor = '#f1f5f9';
                        }}
                      >
                        <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#1e293b' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', lineHeight: 1.35 }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1rem', paddingTop: '0.65rem', borderTop: '1px solid #f1f5f9', textAlign: 'right' }}>
                    <Link
                      to={NAV_DROPDOWNS[activeDropdown].ctaLink}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#09619f',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {NAV_DROPDOWNS[activeDropdown].ctaText}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          {/* ================= 3. RIGHT OUTER ACTION BUTTONS (Professional Bell Icon) ================= */}
          <div
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              opacity: isScrolled ? 0 : 1,
              transform: isScrolled ? 'translateY(-12px) scale(0.92)' : 'translateY(0) scale(1)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: isScrolled ? 'none' : 'auto'
            }}
            className="outer-right-actions"
          >
            {/* Professional Vector Notification Bell Button */}
            <button
              type="button"
              onClick={() => setIsAnnouncementOpen(true)}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                backdropFilter: 'blur(12px)',
                border: '1px solid #e2e8f0',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.borderColor = 'rgba(9, 97, 159, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
              title="Regional Announcements & Regional Updates"
            >
              {/* Professional Clean Vector Bell Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>

              {/* Unread Indicator Pulse Dot */}
              {hasUnreadAnnouncements && (
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#09619f',
                    border: '2px solid #ffffff',
                    boxShadow: '0 0 8px #09619f'
                  }}
                />
              )}
            </button>
          </div>

          {/* ================= 4. MOBILE HAMBURGER BUTTON ================= */}
          <div style={{ pointerEvents: 'auto', display: 'none' }} className="mobile-hamburger-wrap">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* ================= 5. MOBILE DRAWER MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '16px',
              right: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '1.5rem',
              zIndex: 999,
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid #e2e8f0',
              color: '#0f172a'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link to="/" style={{ color: '#09619f', textDecoration: 'none', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px' }} onClick={() => setIsMobileMenuOpen(false)}>
                <InnoworqIcon size={18} />
                <span>Home</span>
              </Link>
              <Link to="/about" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/services" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/solutions" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
              <Link to="/industries" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <Link to="/blogs" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 6. ANNOUNCEMENT CENTER MODAL ================= */}
      <AnnouncementCenter
        isOpen={isAnnouncementOpen}
        onClose={() => setIsAnnouncementOpen(false)}
        onAllViewed={() => setHasUnreadAnnouncements(false)}
      />

      {/* Component Styles */}
      <style>{`
        .pill-nav-btn-light {
          background: transparent;
          border: none;
          color: #334155;
          font-family: var(--font-heading, sans-serif);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 20px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }
        .pill-nav-btn-light:hover {
          color: #09619f;
          background-color: rgba(9, 97, 159, 0.06);
        }
        .pill-nav-btn-light.active {
          color: #09619f !important;
          background-color: rgba(9, 97, 159, 0.08) !important;
        }
        @media (max-width: 900px) {
          .outer-brand-logo, .outer-right-actions, .desktop-pill-links {
            display: none !important;
          }
          .mobile-hamburger-wrap {
            display: block !important;
          }
          .floating-pill-nav-light {
            margin: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

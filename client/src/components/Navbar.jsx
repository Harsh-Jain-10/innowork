import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import InnoworqIcon from './InnoworqIcon';
import AnnouncementCenter from './AnnouncementCenter';
import configData from '../data/companyConfig.json';

const NAV_DROPDOWNS = {
  services: {
    title: 'Enterprise IT Services',
    subtitle: 'End-to-end SLA-bound IT management and operations',
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
  },
  company: {
    title: 'About INNOWORQ',
    subtitle: 'Leading IT infrastructure partner across India & MEA',
    items: [
      { id: 'about-us', name: 'About Our Company', desc: 'Our journey, mission & 20-25% YoY enterprise growth', link: '/about' },
      { id: 'leadership', name: 'Leadership Team', desc: 'Meet our tech innovators & executive leaders', link: '/about#leadership' },
      { id: 'global-presence', name: 'Global Presence & Dubai Hub', desc: 'Pan-India network & UAE regional office in Dubai', link: '/about#global-presence-section' },
      { id: 'certifications', name: 'ISO Certifications & Compliance', desc: 'ISO 9001, 27001, 20000-1 & 45001 standards', link: '/about#certifications' }
    ],
    ctaText: 'Learn About INNOWORQ →',
    ctaLink: '/about'
  },
  blogs: {
    title: 'Insights & Technology Blog',
    subtitle: 'Latest whitepapers, industry trends & engineering articles',
    items: [
      { id: 'latest-insights', name: 'Latest Tech Articles', desc: 'Best practices for hybrid cloud & cybersecurity', link: '/blogs' },
      { id: 'case-studies', name: 'Enterprise Case Studies', desc: 'Real-world digital transformation stories', link: '/blogs' },
      { id: 'whitepapers', name: 'Industry Whitepapers', desc: 'Strategic guides on cloud migration & DevOps', link: '/blogs' }
    ],
    ctaText: 'Visit Tech Blog →',
    ctaLink: '/blogs'
  }
};

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

  const openQuoteModal = () => {
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

          {/* ================= 2. CENTER FLOATING PILL NAVBAR ================= */}
          <motion.nav
            layout
            style={{
              pointerEvents: 'auto',
              position: 'relative',
              margin: isScrolled ? '0 auto' : '0',
              backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.92)' : 'rgba(15, 23, 42, 0.82)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '50px',
              padding: '6px 8px 6px 14px',
              boxShadow: isScrolled
                ? '0 20px 40px -10px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(9, 97, 159, 0.25)'
                : '0 10px 30px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="floating-pill-nav"
          >
            {/* --- "I." LOGO BUTTON (Animates in when scrolled - just like "B." in brights.io) --- */}
            <AnimatePresence>
              {isScrolled && (
                <motion.button
                  type="button"
                  onClick={scrollToTop}
                  initial={{ width: 0, opacity: 0, scale: 0.6, marginRight: 0 }}
                  animate={{ width: 'auto', opacity: 1, scale: 1, marginRight: 8 }}
                  exit={{ width: 0, opacity: 0, scale: 0.6, marginRight: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '30px',
                    padding: '4px 10px 4px 8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(9, 97, 159, 0.25)',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  title="INNOWORQ - Scroll to top"
                >
                  <InnoworqIcon size={20} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#09619f', lineHeight: 1, marginTop: '-2px' }}>.</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* --- Desktop Nav Links --- */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-pill-links">
              
              {/* Services Item */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => navigate('/services')}
                  className={`pill-nav-btn ${activeDropdown === 'services' || location.pathname === '/services' ? 'active' : ''}`}
                >
                  <span>Services</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Solutions Item */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => navigate('/solutions')}
                  className={`pill-nav-btn ${activeDropdown === 'solutions' || location.pathname === '/solutions' ? 'active' : ''}`}
                >
                  <span>Solutions</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Industries Item */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => navigate('/industries')}
                  className={`pill-nav-btn ${activeDropdown === 'industries' || location.pathname === '/industries' ? 'active' : ''}`}
                >
                  <span>Industries</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Company / About Item */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className={`pill-nav-btn ${activeDropdown === 'company' || location.pathname === '/about' ? 'active' : ''}`}
                >
                  <span>Company</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'company' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Blogs Item */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('blogs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => navigate('/blogs')}
                  className={`pill-nav-btn ${activeDropdown === 'blogs' || location.pathname === '/blogs' ? 'active' : ''}`}
                >
                  <span>Blog</span>
                </button>
              </div>

            </div>

            {/* --- Right CTA Button Inside Pill --- */}
            <motion.button
              type="button"
              onClick={openQuoteModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                borderRadius: '30px',
                padding: '8px 18px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #09619f 0%, #0284c7 100%)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(9, 97, 159, 0.35)',
                marginLeft: '6px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              className="pill-cta-btn"
            >
              <span>Request a quote</span>
            </motion.button>

            {/* --- MEGA DROPDOWN CONTAINER PANEL --- */}
            <AnimatePresence>
              {activeDropdown && NAV_DROPDOWNS[activeDropdown] && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveDropdown(activeDropdown)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'min(640px, 90vw)',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '1.75rem',
                    boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.08)',
                    zIndex: 100,
                    color: '#0f172a'
                  }}
                  className="mega-dropdown-panel"
                >
                  <div style={{ marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', pb: '0.85rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#09619f', margin: 0 }}>
                      {NAV_DROPDOWNS[activeDropdown].title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '3px 0 0 0' }}>
                      {NAV_DROPDOWNS[activeDropdown].subtitle}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
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
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px', lineHeight: 1.35 }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.25rem', pt: '0.75rem', borderTop: '1px solid #f1f5f9', textAlign: 'right' }}>
                    <Link
                      to={NAV_DROPDOWNS[activeDropdown].ctaLink}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        fontSize: '0.84rem',
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

          {/* ================= 3. RIGHT OUTER ACTION BUTTONS (Unscrolled State) ================= */}
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
            {/* Announcement Bell Trigger Pill */}
            <button
              type="button"
              onClick={() => setIsAnnouncementOpen(true)}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Regional Announcements & Updates"
            >
              <InnoworqIcon size={20} />
              {hasUnreadAnnouncements && (
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    border: '2px solid #0f172a',
                    boxShadow: '0 0 8px #38bdf8'
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
                backgroundColor: '#0f172a',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
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
              backgroundColor: '#0f172a',
              borderRadius: '24px',
              padding: '1.5rem',
              zIndex: 999,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/services" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/solutions" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
              <Link to="/industries" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <Link to="/blogs" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openQuoteModal();
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: '#09619f',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  marginTop: '0.5rem'
                }}
              >
                Request a quote
              </button>
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
        .pill-nav-btn {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-heading, sans-serif);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 20px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .pill-nav-btn:hover, .pill-nav-btn.active {
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.12);
        }
        @media (max-width: 900px) {
          .outer-brand-logo, .outer-right-actions, .desktop-pill-links {
            display: none !important;
          }
          .mobile-hamburger-wrap {
            display: block !important;
          }
          .floating-pill-nav {
            margin: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

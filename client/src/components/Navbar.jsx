import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [hasUnreadAnnouncements, setHasUnreadAnnouncements] = useState(true);
  
  const location = useLocation();
  const navigate = useNavigate();

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


  return (
    <>
      {/* Dark Theme Header matching Brights.io header exact layout */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '80px',
          backgroundColor: '#000000',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          zIndex: 1000
        }}
        id="main-header-wrapper"
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2.5rem',
            position: 'relative'
          }}
        >
          {/* ================= 1. BRAND LOGO ================= */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              to="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                padding: '6px 16px',
                borderRadius: '9999px',
                boxShadow: '0 2px 10px rgba(255, 255, 255, 0.15)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.15)';
              }}
            >
              <img 
                src={logo} 
                alt="INNOWORQ Logo" 
                style={{ 
                  height: '26px', 
                  width: 'auto', 
                  display: 'block'
                }} 
              />
            </Link>
          </div>

          {/* ================= 2. CENTERED DARK PILL CONTAINER ================= */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#18191c',
              border: '1px solid #28292e',
              borderRadius: '9999px',
              padding: '4px 6px 4px 24px',
              gap: '1.75rem'
            }}
            className="desktop-fullwidth-links"
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem'
              }}
            >
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
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '6px 4px',
                        fontSize: '0.92rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive || isHovered ? '#ffffff' : '#a1a1aa',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <motion.svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          animate={{ rotate: isHovered ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: 'inline-block', flexShrink: 0 }}
                        >
                          <path d="M1 1.5L5 4.5L9 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Desktop Navigation Links */}
          </div>

          {/* Mega Dropdown Popup Menu (Dark Theme) */}
          <AnimatePresence>
            {activeDropdown && NAV_DROPDOWNS[activeDropdown] && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{
                  position: 'absolute',
                  top: '75px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 'min(640px, 92vw)',
                  backgroundColor: '#141518',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px #28292e',
                  zIndex: 1001,
                  color: '#ffffff'
                }}
              >
                <div style={{ marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #28292e' }}>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#1a68ff', margin: 0 }}>
                    {NAV_DROPDOWNS[activeDropdown].title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '2px 0 0 0' }}>
                    {NAV_DROPDOWNS[activeDropdown].subtitle}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  {NAV_DROPDOWNS[activeDropdown].items.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={`${NAV_DROPDOWNS[activeDropdown].ctaLink}#${subItem.id}`}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        color: '#ffffff',
                        backgroundColor: '#1a1c21',
                        border: '1px solid #28292e',
                        transition: 'all 0.2s ease',
                        display: 'block'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#242730';
                        e.currentTarget.style.borderColor = '#1a68ff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1c21';
                        e.currentTarget.style.borderColor = '#28292e';
                      }}
                    >
                      <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff', display: 'block' }}>
                        {subItem.name}
                      </span>
                      <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block', marginTop: '2px' }}>
                        {subItem.desc}
                      </span>
                    </Link>
                  ))}
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #28292e', textAlign: 'right' }}>
                  <Link
                    to={NAV_DROPDOWNS[activeDropdown].ctaLink}
                    onClick={() => setActiveDropdown(null)}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#1a68ff',
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

          {/* ================= 3. RIGHT UTILITIES (BELL ICON) ================= */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="outer-right-actions">

            {/* Regional Announcements Notification Bell */}
            <button
              type="button"
              onClick={() => setIsAnnouncementOpen(true)}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#18191c',
                border: '1px solid #28292e',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#1a68ff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#28292e';
              }}
              title="Regional Announcements & Updates"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>

              {hasUnreadAnnouncements && (
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#1a68ff',
                    border: '2px solid #18191c'
                  }}
                />
              )}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div style={{ display: 'none' }} className="mobile-hamburger-wrap">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#18191c',
                color: '#ffffff',
                border: '1px solid #28292e',
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              right: 0,
              backgroundColor: '#141518',
              borderBottom: '1px solid #28292e',
              zIndex: 999,
              padding: '1.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regional Announcement Modal */}
      <AnnouncementCenter
        isOpen={isAnnouncementOpen}
        onClose={() => setIsAnnouncementOpen(false)}
        onAllViewed={() => setHasUnreadAnnouncements(false)}
      />
    </>
  );
}


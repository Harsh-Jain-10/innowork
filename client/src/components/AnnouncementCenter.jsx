import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import dubaiAnnouncementImg from '../assets/images/dubai-announcement.png';

const ANNOUNCEMENTS = [
  {
    id: 'dubai-hub',
    image: dubaiAnnouncementImg,
    alt: 'INNOWORQ Dubai Regional Hub Announcement',
    link: '/about#global-presence-section'
  }
];

export default function AnnouncementCenter({ isOpen, onClose, onAllViewed }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Lock both body and root html scrolling when modal is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const currentAnnouncement = ANNOUNCEMENTS[currentIndex];
  const nextAnnouncement = ANNOUNCEMENTS[currentIndex + 1];

  const handleCardClick = (link) => {
    handleCloseCurrent();
    if (link) {
      navigate(link);
    }
  };

  const handleCloseCurrent = (e) => {
    if (e) e.stopPropagation();
    
    if (currentIndex < ANNOUNCEMENTS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      sessionStorage.setItem('announcementsViewed', 'true');
      if (onAllViewed) onAllViewed();
      onClose();
      setTimeout(() => setCurrentIndex(0), 300);
    }
  };

  const overlayJSX = (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999999, touchAction: 'none' }}>
          
          {/* 1. Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.55)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              zIndex: 1
            }}
          />

          {/* 2. Announcement Center Container */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              pointerEvents: 'none',
              zIndex: 2
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '60vw',
                maxWidth: '900px',
                minWidth: '320px',
                pointerEvents: 'auto'
              }}
              className="announcement-card-viewport"
            >
              
              {/* Stacked Next Card (Visual Depth) */}
              {nextAnnouncement && (
                <motion.div
                  initial={{ scale: 0.9, y: 20, opacity: 0.5 }}
                  animate={{ scale: 0.94, y: 16, opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backgroundColor: '#0f172a',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                >
                  <img
                    src={nextAnnouncement.image}
                    alt={nextAnnouncement.alt}
                    style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.6 }}
                  />
                </motion.div>
              )}

              {/* Active Current Announcement Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAnnouncement.id}
                  initial={{ scale: 0.2, opacity: 0, x: 220, y: -220 }}
                  animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, x: 100, y: -100 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleCardClick(currentAnnouncement.link)}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    boxShadow: 
                      '0 35px 80px -15px rgba(15, 23, 42, 0.55), 0 10px 30px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15) inset',
                    cursor: 'pointer',
                    zIndex: 10,
                    lineHeight: 0
                  }}
                  className="announcement-active-card"
                  whileHover={{ scale: 1.008 }}
                >
                  {/* Floating Close Button - Positioned outside top-right so it NEVER overlaps the brand logo */}
                  <button
                    type="button"
                    onClick={handleCloseCurrent}
                    className="announcement-close-btn"
                    aria-label="Close announcement"
                    title="Close announcement"
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                  {/* Connected High-Resolution Announcement Image */}
                  <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
                    <img
                      src={currentAnnouncement.image}
                      alt={currentAnnouncement.alt}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                        borderRadius: '24px'
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          <style>{`
            .announcement-close-btn {
              position: absolute !important;
              top: -16px !important;
              right: -16px !important;
              width: 38px !important;
              height: 38px !important;
              border-radius: 50% !important;
              background: #0f172a !important;
              color: #ffffff !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              cursor: pointer !important;
              z-index: 99 !important;
              transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
              padding: 0 !important;
              border: 2px solid #ffffff !important;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(9, 97, 159, 0.3) !important;
            }
            .announcement-close-btn:hover {
              background: var(--brand-blue) !important;
              color: #ffffff !important;
              transform: scale(1.12) rotate(90deg) !important;
              border-color: #ffffff !important;
              box-shadow: 0 10px 25px rgba(9, 97, 159, 0.5) !important;
            }
            @media (max-width: 768px) {
              .announcement-card-viewport {
                width: 92vw !important;
                max-width: 100% !important;
              }
              .announcement-close-btn {
                top: -12px !important;
                right: -12px !important;
                width: 34px !important;
                height: 34px !important;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(overlayJSX, document.body);
}

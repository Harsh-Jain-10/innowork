import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import dubaiAnnouncementImg from '../assets/images/dubai-announcement.webp';

export default function DubaiFloatingAnnouncement() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user previously dismissed the announcement in this session
    const dismissed = sessionStorage.getItem('announcementDismissed') === 'true';
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Delay 1s after load before triggering entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Only render on Home page ("/")
  if (!mounted || location.pathname !== '/' || isDismissed) {
    return null;
  }

  const handleClose = (e) => {
    e.stopPropagation();
    setIsClosing(true);
    // Store dismissal in sessionStorage
    sessionStorage.setItem('announcementDismissed', 'true');
    // Hide component after exit transition (250ms)
    setTimeout(() => {
      setIsDismissed(true);
    }, 250);
  };

  const handleCardClick = () => {
    navigate('/about#global-presence-section');
  };

  const widgetJSX = (
    <div
      onClick={handleCardClick}
      className={`dubai-floating-widget ${isVisible ? 'is-visible' : ''} ${isClosing ? 'is-closing' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="New Dubai Regional Hub Announcement - Click to explore global presence"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Top-Right Circular Close Button */}
      <button
        type="button"
        onClick={handleClose}
        className="dubai-widget-close-btn"
        aria-label="Close announcement"
        title="Dismiss announcement"
      >
        <svg 
          width="14" 
          height="14" 
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

      {/* Existing Artwork Image */}
      <div className="dubai-widget-img-wrapper">
        <img
          src={dubaiAnnouncementImg}
          alt="Dubai Regional Hub Announcement"
          className="dubai-widget-img"
          loading="eager"
        />
      </div>

      <style>{`
        .dubai-floating-widget {
          position: fixed !important;
          right: 32px !important;
          bottom: 32px !important;
          width: 380px !important;
          max-width: calc(100vw - 32px) !important;
          height: auto !important;
          z-index: 999999 !important;
          border-radius: 24px !important;
          overflow: hidden !important;
          background: rgba(15, 23, 42, 0.92) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 
            0 20px 45px -10px rgba(15, 23, 42, 0.4),
            0 8px 24px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.15) inset !important;
          cursor: pointer !important;
          opacity: 0;
          transform: translateX(40px) scale(0.95);
          transition: 
            opacity 700ms ease-out,
            transform 700ms ease-out,
            box-shadow 300ms ease !important;
          will-change: transform, opacity;
        }

        .dubai-floating-widget.is-visible {
          opacity: 1 !important;
          transform: translateX(0) scale(1) !important;
        }

        .dubai-floating-widget.is-visible:hover {
          transform: translateY(-6px) scale(1.01) !important;
          box-shadow: 
            0 28px 60px -12px rgba(15, 23, 42, 0.5),
            0 12px 28px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.3) inset !important;
        }

        .dubai-floating-widget.is-closing {
          opacity: 0 !important;
          transform: scale(0.95) !important;
          transition: opacity 250ms ease, transform 250ms ease !important;
        }

        .dubai-widget-img-wrapper {
          width: 100%;
          display: block;
          line-height: 0;
          background: #0f172a;
        }

        .dubai-widget-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 24px;
        }

        .dubai-widget-close-btn {
          position: absolute !important;
          top: 12px !important;
          right: 12px !important;
          width: 32px !important;
          height: 32px !important;
          border-radius: 50% !important;
          background: rgba(15, 23, 42, 0.75) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          z-index: 1000000 !important;
          transition: all 0.2s ease !important;
          padding: 0 !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
        }

        .dubai-widget-close-btn:hover {
          background: rgba(15, 23, 42, 0.95) !important;
          color: #38bdf8 !important;
          transform: scale(1.1) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Mobile Bottom Sheet conversion */
        @media (max-width: 768px) {
          .dubai-floating-widget {
            right: auto !important;
            left: 50% !important;
            bottom: 16px !important;
            width: 92% !important;
            max-width: 380px !important;
            transform: translateX(-50%) translateY(40px) scale(0.95) !important;
          }

          .dubai-floating-widget.is-visible {
            transform: translateX(-50%) translateY(0) scale(1) !important;
          }

          .dubai-floating-widget.is-visible:hover {
            transform: translateX(-50%) translateY(-3px) scale(1.005) !important;
          }
        }
      `}</style>
    </div>
  );

  return createPortal(widgetJSX, document.body);
}

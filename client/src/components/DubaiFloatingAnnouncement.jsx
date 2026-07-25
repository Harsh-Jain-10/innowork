import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dubaiAnnouncementImg from '../assets/images/dubai-announcement.webp';

export default function DubaiFloatingAnnouncement() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed the announcement
    const dismissed = localStorage.getItem('dismissDubaiAnnouncement') === 'true';
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Delay 1.2s after mount/load before triggering entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) {
    return null;
  }

  const handleClose = (e) => {
    e.stopPropagation();
    setIsClosing(true);
    // Store dismissal in localStorage
    localStorage.setItem('dismissDubaiAnnouncement', 'true');
    // Hide component after exit transition (250ms)
    setTimeout(() => {
      setIsDismissed(true);
    }, 250);
  };

  const handleCardClick = () => {
    navigate('/about#global-presence-section');
  };

  return (
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
          position: fixed;
          right: 32px;
          bottom: 32px;
          width: 380px;
          height: auto;
          z-index: 9999;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 
            0 20px 45px -10px rgba(15, 23, 42, 0.35),
            0 8px 20px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.12) inset;
          cursor: pointer;
          opacity: 0;
          transform: translateX(40px) scale(0.95);
          transition: 
            opacity 700ms ease-out,
            transform 700ms ease-out,
            box-shadow 300ms ease;
          will-change: transform, opacity;
        }

        .dubai-floating-widget.is-visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .dubai-floating-widget.is-visible:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 
            0 28px 60px -12px rgba(15, 23, 42, 0.45),
            0 12px 28px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.25) inset;
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
        }

        .dubai-widget-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 24px;
        }

        .dubai-widget-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .dubai-widget-close-btn:hover {
          background: rgba(15, 23, 42, 0.95);
          color: #38bdf8;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Mobile Bottom Sheet conversion */
        @media (max-width: 768px) {
          .dubai-floating-widget {
            right: auto !important;
            left: 50% !important;
            bottom: 16px !important;
            width: 92% !important;
            max-width: 380px !important;
            transform: translateX(-50%) translateY(40px) scale(0.95);
          }

          .dubai-floating-widget.is-visible {
            transform: translateX(-50%) translateY(0) scale(1);
          }

          .dubai-floating-widget.is-visible:hover {
            transform: translateX(-50%) translateY(-3px) scale(1.005);
          }
        }
      `}</style>
    </div>
  );
}

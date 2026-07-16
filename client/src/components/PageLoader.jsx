import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

/**
 * PageLoader — branded splash screen that shows while the site loads.
 * Displays for a minimum duration then fades out with a smooth transition.
 */
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mark global state as loading
    window.isSiteLoaded = false;
    document.documentElement.classList.add('site-loading');

    // Minimum display time for branding impact
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.isSiteLoaded = true;
      document.documentElement.classList.remove('site-loading');
      window.dispatchEvent(new CustomEvent('site-loaded'));
    }, 2200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem'
          }}
          id="page-loader-overlay"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <img 
              src={logo} 
              alt="INNOWORQ" 
              style={{ height: '48px', display: 'block' }} 
            />
          </motion.div>

          {/* Animated tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: '#64748b',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            Enterprise IT Services
          </motion.p>

          {/* Animated progress bar */}
          <div style={{
            width: '180px',
            height: '3px',
            backgroundColor: '#e2e8f0',
            borderRadius: '3px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                backgroundColor: 'var(--brand-blue)',
                borderRadius: '3px'
              }}
            />
          </div>

          {/* Subtle pulse dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '6px',
              marginTop: '0.5rem'
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-blue)'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const presets = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-left': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-right': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  'scale': {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 }
  },
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

/**
 * ScrollReveal — wraps children in a framer-motion div that
 * animates into view when scrolled into the viewport.
 *
 * @param {string}  variant    - Animation preset name (default: 'fade-up')
 * @param {number}  delay      - Delay in seconds before animation starts
 * @param {number}  duration   - Animation duration in seconds
 * @param {number}  threshold  - Viewport intersection ratio (0–1)
 * @param {boolean} once       - If true, only animates once
 * @param {string}  className  - Optional className pass-through
 * @param {object}  style      - Optional style pass-through
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  className = '',
  style = {},
  ...rest
}) {
  const isMobile = useIsMobile();
  const activeVariant = isMobile ? 'fade' : variant;
  const preset = presets[activeVariant] || presets['fade-up'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: isMobile ? 0.05 : threshold }}
      variants={{
        hidden: preset.hidden,
        visible: {
          ...preset.visible,
          transition: {
            duration: isMobile ? 0.4 : duration,
            delay: isMobile ? 0 : delay,
            ease: [0.25, 0.8, 0.25, 1]
          }
        }
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer — a container that staggers the reveal of its children.
 * Each direct child should be wrapped in ScrollRevealItem or motion.div with variants.
 */
export function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
  style = {},
  ...rest
}) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: isMobile ? 0.05 : threshold }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: isMobile ? 0 : delay,
            staggerChildren: isMobile ? 0.04 : stagger
          }
        }
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem — a child element inside StaggerContainer.
 */
export function StaggerItem({
  children,
  variant = 'fade-up',
  duration = 0.6,
  className = '',
  style = {},
  ...rest
}) {
  const isMobile = useIsMobile();
  const activeVariant = isMobile ? 'fade' : variant;
  const preset = presets[activeVariant] || presets['fade-up'];

  return (
    <motion.div
      variants={{
        hidden: preset.hidden,
        visible: {
          ...preset.visible,
          transition: { duration: isMobile ? 0.4 : duration, ease: [0.25, 0.8, 0.25, 1] }
        }
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * CountUp — animates a number from 0 to target value when scrolled into view.
 * Handles formats like "300+", "50K+", "4", "20+"
 * @param {string|number} target   - The target value string, e.g. "300+", "50K+"
 * @param {string}        suffix   - Optional extra suffix appended after the animated number
 * @param {string}        prefix   - Optional prefix before the number
 * @param {number}        duration - Count-up duration in seconds
 * @param {number}        delay    - Delay in seconds before starting (for stagger sync)
 */
export function CountUp({ target, suffix = '', prefix = '', duration = 1.8, delay = 0, style = {} }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  // Trigger count as soon as 5% of the element enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const targetStr = target.toString();
  const hasK = /k/i.test(targetStr);
  const numericPart = parseInt(targetStr.replace(/[^0-9]/g, ''), 10) || 0;
  const autoSuffix = suffix || (hasK
    ? 'K' + targetStr.replace(/[0-9k]/gi, '')
    : targetStr.replace(/[0-9]/g, ''));

  useEffect(() => {
    let timeoutId;

    const startTimer = () => {
      timeoutId = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
    };

    if (isInView) {
      if (window.isSiteLoaded !== false) {
        startTimer();
      } else {
        const handleSiteLoaded = () => {
          startTimer();
          window.removeEventListener('site-loaded', handleSiteLoaded);
        };
        window.addEventListener('site-loaded', handleSiteLoaded);
        return () => {
          window.removeEventListener('site-loaded', handleSiteLoaded);
          if (timeoutId) clearTimeout(timeoutId);
        };
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      setCount(Math.floor(easeProgress * numericPart));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [started, numericPart, duration]);

  return (
    <span ref={ref} style={style}>
      {prefix}{count}{autoSuffix}
    </span>
  );
}


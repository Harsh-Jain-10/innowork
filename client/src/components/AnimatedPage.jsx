import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedPage — wraps route content with a smooth page-enter animation.
 * Provides a fade + subtle slide-up on initial mount.
 */
export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

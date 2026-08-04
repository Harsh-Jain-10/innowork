import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import AnimatedPage from './components/AnimatedPage';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import Blogs from './pages/Blogs';

// Scroll restoration helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollToTop />
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh', 
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)' 
        }}
        id="app-root-container"
      >
        {/* Navigation bar */}
        <Navbar />
        
        {/* Route views */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/industries" element={<AnimatedPage><Industries /></AnimatedPage>} />
            <Route path="/solutions" element={<AnimatedPage><Solutions /></AnimatedPage>} />
            <Route path="/blogs" element={<AnimatedPage><Blogs /></AnimatedPage>} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

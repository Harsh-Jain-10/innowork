import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { blogArticles } from '../data/blogData';

// Helper to calculate reading time based on word count
const calculateReadingTime = (text) => {
  if (!text) return null;
  const wordsPerMinute = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const CATEGORIES = [
  'All',
  'Enterprise IT',
  'Cybersecurity',
  'Cloud',
  'Hybrid Infrastructure',
  'DevOps'
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const modalContentRef = useRef(null);

  // Monitor scroll progress in the reading modal
  const handleModalScroll = () => {
    if (modalContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((scrollTop / totalScroll) * 100);
      }
    }
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedArticle) {
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
  }, [selectedArticle]);

  // Featured Article is always the first one in the dataset
  const featuredArticle = blogArticles[0];
  const otherArticles = blogArticles.slice(1);

  // Filter articles based on active category
  const filteredArticles = otherArticles.filter((article) => {
    if (activeCategory === 'All') return true;
    return article.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
           activeCategory.toLowerCase().includes(article.category.toLowerCase());
  });

  // Check if featured article matches category filter
  const showFeatured = activeCategory === 'All' || 
    featuredArticle.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
    activeCategory.toLowerCase().includes(featuredArticle.category.toLowerCase());

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '7rem' }} id="blogs-page-view">
      
      {/* 1. ENTERPRISE PUBLICATION HERO HEADER */}
      <section style={{
        backgroundColor: '#0b1329',
        backgroundImage: 'linear-gradient(180deg, #091e3a 0%, #0b1329 100%)',
        padding: '8.5rem 0 6rem 0',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #1e293b'
      }}>
        {/* Subtle architectural background grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <div style={{ maxWidth: '820px' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem',
                fontSize: '0.78rem', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                color: '#38bdf8', 
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                INNOWORQ Enterprise Insights
              </div>

              <h1 style={{ 
                fontSize: 'clamp(2.4rem, 5.5vw, 4.1rem)', 
                fontWeight: 800, 
                marginTop: 0, 
                marginBottom: '1.35rem', 
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)'
              }}>
                Technology Research &amp; Architectural Briefings
              </h1>

              <p style={{ 
                color: '#94a3b8', 
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
                lineHeight: '1.8', 
                fontWeight: 400,
                maxWidth: '680px',
                marginTop: 0
              }}>
                Strategic insights, technical analysis, and operational frameworks for enterprise IT leaders, cloud architects, and security officers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CATEGORY FILTER NAVIGATION BAR */}
      <section style={{ 
        padding: '1.25rem 0', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e2e8f0', 
        position: 'sticky', 
        top: 70, 
        zIndex: 50,
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <div className="category-bar-flex" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: isActive ? '#0f172a' : '#cbd5e1',
                    backgroundColor: isActive ? '#0f172a' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="cat-btn"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '4rem' }}>
        
        {/* 3. FEATURED ARTICLE EDITORIAL HERO */}
        {showFeatured && (
          <ScrollReveal variant="fade-up">
            <section style={{ marginBottom: '5rem' }}>
              <div 
                className="featured-editorial-card"
                onClick={() => setSelectedArticle(featuredArticle)}
              >
                <div className="featured-image-container">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                
                <div className="featured-content-container">
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <span className="badge-tag">{featuredArticle.category}</span>
                    <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>{featuredArticle.date}</span>
                    <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>•</span>
                    <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>
                      {calculateReadingTime(featuredArticle.content)} min read
                    </span>
                  </div>
                  
                  <h2 className="featured-editorial-title">
                    {featuredArticle.title}
                  </h2>
                  
                  <p style={{ 
                    fontSize: '1.08rem', 
                    color: '#475569', 
                    lineHeight: '1.8', 
                    marginBottom: '2.25rem',
                    fontWeight: 400
                  }}>
                    {featuredArticle.summary}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>
                      INNOWORQ Editorial Team
                    </span>
                    <span className="editorial-link">
                      Read Article <span style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* 4. OTHER ARTICLES EDITORIAL GRID */}
        {filteredArticles.length > 0 ? (
          <section style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.85rem' }}>
              <h3 style={{ 
                fontSize: '1.45rem', 
                fontWeight: 700, 
                color: '#0f172a', 
                margin: 0,
                letterSpacing: '-0.3px',
                fontFamily: 'var(--font-heading)'
              }}>
                Latest Industry Insights
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                Showing {filteredArticles.length} briefing{filteredArticles.length > 1 ? 's' : ''}
              </span>
            </div>
            
            <StaggerContainer key={activeCategory} stagger={0.1} className="blog-posts-grid">
              {filteredArticles.map((post) => (
                <StaggerItem key={post.id} variant="fade-up">
                  <article 
                    onClick={() => setSelectedArticle(post)}
                    className="editorial-card"
                  >
                    <div className="card-image-wrapper">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                    
                    <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="badge-tag">{post.category}</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>{post.date}</span>
                        <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>•</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                          {calculateReadingTime(post.content)} min read
                        </span>
                      </div>
                      
                      <h4 className="card-headline">
                        {post.title}
                      </h4>
                      
                      <p style={{ fontSize: '0.975rem', color: '#475569', lineHeight: '1.72', marginBottom: '1.75rem', flexGrow: 1, fontWeight: 400 }}>
                        {post.summary}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '0.9rem', marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#94a3b8' }}>INNOWORQ Editorial</span>
                        <span className="card-cta">Read more →</span>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        ) : (
          !showFeatured && (
            <div style={{ textAlign: 'center', padding: '6rem 0', color: '#64748b', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              No research briefings found for this category.
            </div>
          )
        )}

      </div>

      {/* 5. DETAILED ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedArticle(null)}
          >
            {/* Reading progress bar */}
            <div 
              style={{ 
                position: 'fixed', top: 0, left: 0, 
                width: `${scrollProgress}%`, height: '4px', 
                backgroundColor: '#2563eb', zIndex: 101,
                transition: 'width 0.1s ease-out'
              }} 
            />

            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header bar */}
              <div className="modal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge-tag">{selectedArticle.category}</span>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500 }}>
                    {selectedArticle.date}
                  </span>
                </div>
                
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="modal-close-btn"
                  aria-label="Close reader"
                >
                  ✕ Close
                </button>
              </div>

              {/* Scrollable article reader body */}
              <div 
                className="modal-scroll-body"
                ref={modalContentRef}
                onScroll={handleModalScroll}
              >
                <div style={{ maxWidth: '720px', margin: '0 auto', padding: '1rem 0' }}>
                  
                  {/* Article Title */}
                  <h1 style={{ 
                    fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', 
                    fontWeight: 800, 
                    color: '#0d1117', 
                    marginBottom: '1rem', 
                    lineHeight: '1.2',
                    letterSpacing: '-0.75px',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {selectedArticle.title}
                  </h1>

                  {/* Editorial Attribution */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.25rem', borderBottom: '1px solid #e8edf2', paddingBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600, letterSpacing: '0.1px' }}>By INNOWORQ Editorial Team</span>
                    <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>•</span>
                    <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 400 }}>
                      {calculateReadingTime(selectedArticle.content)} min read
                    </span>
                  </div>

                  {/* Hero Photography Banner */}
                  <div style={{ width: '100%', height: '360px', borderRadius: '10px', overflow: 'hidden', marginBottom: '2.5rem', border: '1px solid #e2e8f0' }}>
                    <img 
                      src={selectedArticle.image} 
                      alt={selectedArticle.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  </div>

                  {/* Article Body */}
                  <div 
                    className="article-text-content"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedArticle.content
                        .trim()
                        .split('\n\n')
                        .map(p => {
                          const block = p.trim();
                          const formatBold = (str) => str.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #0f172a; font-weight: 700;">$1</strong>').replace(/\*\*/g, '');

                          if (block.startsWith('## ')) {
                            return `<h2 style="font-size: 1.75rem; font-weight: 700; color: #0d1117; margin-top: 2.75rem; margin-bottom: 1rem; letter-spacing: -0.4px; line-height: 1.25; font-family: var(--font-heading); border-bottom: 1px solid #f1f5f9; padding-bottom: 0.6rem;">${formatBold(block.replace(/^## /, ''))}</h2>`;
                          }
                          if (block.startsWith('### ')) {
                            return `<h3 style="font-size: 1.35rem; font-weight: 700; color: #0d1117; margin-top: 2rem; margin-bottom: 0.6rem; letter-spacing: -0.2px; line-height: 1.3; font-family: var(--font-heading);">${formatBold(block.replace(/^### /, ''))}</h3>`;
                          }
                          if (block.startsWith('- ')) {
                            const items = block.split('\n').map(item => {
                              const cleanItem = formatBold(item.replace(/^- /, '').trim());
                              return `<li style="margin-bottom: 0.65rem; color: #334155; font-size: 1.1rem; line-height: 1.75;">${cleanItem}</li>`;
                            }).join('');
                            return `<ul style="color: #334155; line-height: 1.75; margin: 0 0 1.75rem 0; padding-left: 1.65rem; list-style-type: disc;">${items}</ul>`;
                          }
                          if (block.startsWith('> ')) {
                            return `<blockquote style="border-left: 4px solid #2563eb; background-color: #f0f6ff; padding: 1.4rem 1.75rem; margin: 2.25rem 0; border-radius: 0 8px 8px 0; font-size: 1.18rem; font-weight: 600; color: #1e293b; line-height: 1.65; font-style: italic;">${formatBold(block.replace(/^> /, ''))}</blockquote>`;
                          }
                          return `<p style="font-size: 1.15rem; color: #374151; line-height: 1.9; margin-bottom: 1.65rem; font-family: var(--font-body); font-weight: 400;">${formatBold(block)}</p>`;
                        })
                        .join('') 
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* 1. FEATURED EDITORIAL CARD */
        .featured-editorial-card {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .featured-editorial-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }
        .featured-editorial-card:hover .editorial-link span {
          transform: translateX(4px);
        }
        .featured-image-container {
          width: 100%;
          height: 420px;
          overflow: hidden;
          background-color: #0b1329;
        }
        .featured-content-container {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .featured-editorial-title {
          font-size: clamp(1.65rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0d1117;
          margin-bottom: 1.1rem;
          line-height: 1.22;
          letter-spacing: -0.5px;
          font-family: var(--font-heading);
          transition: color 0.2s ease;
        }
        .featured-editorial-card:hover .featured-editorial-title {
          color: #2563eb;
        }
        .editorial-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: #2563eb;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          letter-spacing: 0.1px;
        }

        /* 2. CARD GRID STYLING */
        .blog-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .editorial-card {
          background-color: #ffffff;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .editorial-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 12px 28px rgba(0,0,0,0.06);
        }
        .editorial-card:hover .card-headline {
          color: #2563eb;
        }
        .card-image-wrapper {
          width: 100%;
          height: 210px;
          background-color: #0b1329;
          overflow: hidden;
        }
        .card-headline {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0d1117;
          margin-bottom: 0.8rem;
          line-height: 1.42;
          letter-spacing: -0.15px;
          font-family: var(--font-heading);
          transition: color 0.2s ease;
        }
        .card-cta {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2563eb;
          letter-spacing: 0.1px;
        }

        /* 3. MODAL READER STYLING */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 2rem;
          overscroll-behavior: contain;
        }
        .modal-container {
          background-color: #ffffff;
          width: 100%;
          max-width: 860px;
          height: 100%;
          max-height: 88vh;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
        }
        .modal-header {
          padding: 1.15rem 2rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          z-index: 10;
        }
        .modal-close-btn {
          border: none;
          background: #f1f5f9;
          color: #334155;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.35rem 0.85rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-close-btn:hover {
          background-color: #e2e8f0;
          color: #0f172a;
        }
        .modal-scroll-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 2.5rem 3.5rem;
          background-color: #ffffff;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        /* UTILITY BADGE */
        .badge-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #1e293b;
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 0.2rem 0.65rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .blog-posts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .featured-editorial-card {
            grid-template-columns: 1fr;
          }
          .featured-image-container {
            height: 320px;
          }
          .featured-content-container {
            padding: 2rem;
          }
        }
        @media (max-width: 768px) {
          .category-bar-flex {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 0.25rem;
            scrollbar-width: none;
          }
          .category-bar-flex::-webkit-scrollbar {
            display: none;
          }
          .blog-posts-grid {
            grid-template-columns: 1fr;
          }
          .modal-overlay {
            padding: 0;
          }
          .modal-container {
            max-height: 100vh;
            border-radius: 0;
          }
          .modal-scroll-body {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>

    </div>
  );
}


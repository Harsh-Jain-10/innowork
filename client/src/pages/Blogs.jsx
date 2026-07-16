import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { blogArticles } from '../data/blogData';
import { DatacenterIllustration, SecurityIllustration } from '../components/BlogIllustrations';

// Helper to calculate reading time based on word count
const calculateReadingTime = (text) => {
  if (!text) return null;
  const wordsPerMinute = 225; // average adult reading speed
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// Map category to illustration or official image
const renderBlogImage = (article, style) => {
  if (article.image) {
    return (
      <img 
        src={article.image} 
        alt={article.title} 
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }} 
      />
    );
  }
  const id = article.id;
  if (id === 'datacenter-transformation') {
    return <DatacenterIllustration style={style} />;
  }
  if (id === 'securing-multicloud-frameworks') {
    return <SecurityIllustration style={style} />;
  }
  return <DatacenterIllustration style={style} />;
};

const CATEGORIES = [
  'All',
  'Datacenter',
  'Cloud',
  'Cybersecurity',
  'Hybrid Infrastructure',
  'DevOps',
  'Enterprise IT'
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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
    <div style={{ backgroundColor: '#fafbfd', color: '#0f172a', minHeight: '100vh', paddingBottom: '7rem' }} id="blogs-page-view">
      
      {/* 1. HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #091e3a 0%, #051026 100%)',
        padding: '9rem 0 7rem 0',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Animated Background Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.12,
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '30px 30px', pointerEvents: 'none'
        }} />
        {/* Soft atmospheric gradient lighting */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '30%',
          width: '500px', height: '300px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <div style={{ maxWidth: '750px' }}>
              <span style={{ 
                color: '#38bdf8', 
                fontWeight: 700, 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2.5px',
                display: 'inline-block',
                marginBottom: '1rem',
                borderBottom: '2px solid #38bdf8',
                paddingBottom: '0.25rem'
              }}>
                ENGINEERING JOURNAL &amp; INSIGHTS
              </span>
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: 800, 
                marginTop: '0.5rem', 
                marginBottom: '1.25rem', 
                letterSpacing: '-1.5px',
                lineHeight: 1.15,
                fontFamily: 'var(--font-heading)'
              }}>
                INNOWORQ Technology Publication
              </h1>
              <p style={{ 
                color: 'rgba(255,255,255,0.75)', 
                fontSize: '1.15rem', 
                lineHeight: '1.7', 
                fontWeight: 400 
              }}>
                Deep-dive systems engineering, hybrid-cloud security frameworks, and datacenter operations 
                briefings authored by our senior architects and technology leadership.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION BAR */}
      <section style={{ 
        padding: '1.5rem 0', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e2e8f0', 
        position: 'sticky', 
        top: 70, 
        zIndex: 50,
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '30px',
                    border: 'none',
                    backgroundColor: isActive ? '#0f172a' : 'transparent',
                    color: isActive ? '#ffffff' : '#475569',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
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

      <div className="container" style={{ marginTop: '5rem' }}>
        
        {/* 3. FEATURED ARTICLE SECTION */}
        {showFeatured && (
          <ScrollReveal variant="fade-up">
            <section style={{ marginBottom: '6rem' }}>
              <div className="featured-grid">
                <div className="featured-illustration-wrapper">
                  {renderBlogImage(featuredArticle, { height: '100%', objectFit: 'cover' })}
                </div>
                
                <div className="featured-content">
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className="badge-tag">{featuredArticle.category}</span>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>{featuredArticle.date}</span>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>•</span>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                      {calculateReadingTime(featuredArticle.content)} min read
                    </span>
                  </div>
                  
                  <h2 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 800, 
                    color: '#0f172a', 
                    marginBottom: '1rem',
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {featuredArticle.title}
                  </h2>
                  
                  <p style={{ 
                    fontSize: '1.05rem', 
                    color: '#475569', 
                    lineHeight: '1.7', 
                    marginBottom: '2rem' 
                  }}>
                    {featuredArticle.summary}
                  </p>

                  <div className="author-meta-row" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                    <div style={{ 
                      width: '38px', height: '38px', 
                      borderRadius: '50%', backgroundColor: '#09619f', 
                      color: '#ffffff', display: 'flex', 
                      alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.9rem'
                    }}>
                      {featuredArticle.author.split(' ')[0][0]}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>{featuredArticle.author}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500 }}>Technical Leadership</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="btn btn-primary"
                    style={{ padding: '0.85rem 2rem', width: 'fit-content' }}
                  >
                    Read Featured Insight →
                  </button>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* 4. OTHER ARTICLES GRID */}
        {filteredArticles.length > 0 ? (
          <section style={{ marginBottom: '6rem' }}>
            <h3 style={{ 
              fontSize: '1.65rem', 
              fontWeight: 800, 
              color: '#0f172a', 
              marginBottom: '2.5rem',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Latest Technical Briefings
            </h3>
            
            <StaggerContainer stagger={0.12} className="blog-posts-grid">
              {filteredArticles.map((post) => (
                <StaggerItem key={post.id} variant="fade-up">
                  <article 
                    onClick={() => setSelectedArticle(post)}
                    className="editorial-card"
                  >
                    <div className="card-illustration-wrapper">
                      {renderBlogImage(post, { height: '100%', objectFit: 'cover' })}
                    </div>
                    
                    <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="badge-tag">{post.category}</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{post.date}</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>•</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                          {calculateReadingTime(post.content)} min read
                        </span>
                      </div>
                      
                      <h4 className="card-headline">
                        {post.title}
                      </h4>
                      
                      <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.65', marginBottom: '1.75rem', flexGrow: 1 }}>
                        {post.summary}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{post.author}</span>
                        <span className="card-cta">Read Article →</span>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        ) : (
          !showFeatured && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: '#64748b' }}>
              No published articles found in this category.
            </div>
          )
        )}



      </div>

      {/* 6. DETAILED ARTICLE READER MODAL */}
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
                backgroundColor: 'var(--brand-blue)', zIndex: 101,
                transition: 'width 0.1s ease-out'
              }} 
            />

            <motion.div 
              initial={{ y: 50, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close bar */}
              <div className="modal-header">
                <span className="badge-tag">{selectedArticle.category}</span>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="modal-close-btn"
                  aria-label="Close reader"
                >
                  ✕ Close
                </button>
              </div>

              {/* Scrollable content container */}
              <div 
                className="modal-scroll-body"
                ref={modalContentRef}
                onScroll={handleModalScroll}
              >
                <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1rem 0' }}>
                  {/* Article Title */}
                  <h1 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 800, 
                    color: '#0f172a', 
                    marginBottom: '1.25rem', 
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {selectedArticle.title}
                  </h1>

                  {/* Article Meta */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Published on {selectedArticle.date}</span>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>•</span>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>By {selectedArticle.author}</span>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>•</span>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                      {calculateReadingTime(selectedArticle.content)} min read
                    </span>
                  </div>

                  {/* Editorial Illustration Inside Article */}
                  <div style={{ width: '100%', height: '300px', backgroundColor: '#0f172a', borderRadius: '8px', overflow: 'hidden', marginBottom: '2.5rem' }}>
                    {renderIllustration(selectedArticle.id, { height: '100%' })}
                  </div>

                  {/* Article body */}
                  <div 
                    className="article-text-content"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedArticle.content
                        .trim()
                        .split('\n\n')
                        .map(p => {
                          if (p.trim().startsWith('###')) {
                            return `<h3 style="font-size: 1.45rem; font-weight: 700; color: #0f172a; margin-top: 2rem; margin-bottom: 1rem; font-family: var(--font-heading);">${p.replace('###', '').trim()}</h3>`;
                          }
                          return `<p style="font-size: 1.05rem; color: #334155; line-height: 1.75; margin-bottom: 1.5rem; font-family: var(--font-body);">${p.trim()}</p>`;
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
        /* 1. FEATURED ARTICLE STYLING */
        .featured-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 40px -12px rgba(0,0,0,0.03);
        }
        .featured-illustration-wrapper {
          width: 100%;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #0b1329;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .featured-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* 2. CARD GRID STYLING */
        .blog-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .editorial-card {
          background-color: #ffffff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.01);
        }
        .editorial-card:hover {
          transform: translateY(-6px);
          border-color: #cbd5e1;
          box-shadow: 0 16px 40px -12px rgba(9,97,159,0.1);
        }
        .editorial-card:hover .card-headline {
          color: var(--brand-blue);
        }
        .editorial-card:hover .card-cta {
          color: var(--brand-blue-hover);
          transform: translateX(4px);
        }
        .card-illustration-wrapper {
          width: 100%;
          height: 200px;
          background-color: #0b1329;
          overflow: hidden;
        }
        .card-headline {
          font-size: 1.28rem;
          fontWeight: 800;
          color: #0f172a;
          margin-bottom: 0.75rem;
          line-height: 1.35;
          font-family: var(--font-heading);
          transition: color 0.3s ease;
        }
        .card-cta {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.3s ease;
        }



        /* 4. MODAL READER STYLING */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 2rem;
        }
        .modal-container {
          background-color: #ffffff;
          width: 100%;
          max-width: 800px;
          height: 100%;
          max-height: 85vh;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .modal-header {
          padding: 1.25rem 2rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          z-index: 10;
        }
        .modal-close-btn {
          border: none;
          background: transparent;
          color: #475569;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .modal-close-btn:hover {
          color: #0f172a;
        }
        .modal-scroll-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 2rem 3rem;
          background-color: #ffffff;
        }

        /* UTILITY BADGE */
        .badge-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--brand-blue);
          background-color: rgba(9, 97, 159, 0.07);
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .blog-posts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
          }
          .featured-illustration-wrapper {
            height: 300px;
          }
        }
        @media (max-width: 768px) {
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
            padding: 1.5rem 1.5rem;
          }
        }
      `}</style>

    </div>
  );
}

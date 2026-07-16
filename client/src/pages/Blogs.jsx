import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

const TAG_COLORS = ['#e0f2fe', '#dcfce7', '#fef3c7', '#f3e8ff'];
const TAG_TEXT_COLORS = ['#0369a1', '#15803d', '#a16207', '#7c3aed'];

const TOPICS = ['Datacenter', 'Cloud Security', 'Hybrid Cloud', 'IT Infrastructure'];

export default function Blogs() {
  const blogs = configData.blogs;

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)' }} id="blogs-page-view">

      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(140deg, #f0f7ff 0%, #f8fafc 60%, #eef6fd 100%)',
        padding: '7rem 0 5rem 0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #09619f 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal variant="fade-down">
            <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Insights &amp; Publications
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1.25rem', letterSpacing: '-1px' }}>
              INNOWORQ Tech Blog
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', maxWidth: '620px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Systems architecture, cloud integration strategies, and cybersecurity insights published
              by our technology and operations leadership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Topics Filter Bar */}
      <section style={{ padding: '2.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <ScrollReveal variant="fade-up" duration={0.5}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)', fontWeight: 600, alignSelf: 'center', marginRight: '0.5rem' }}>
                Topics:
              </span>
              {TOPICS.map((topic, i) => (
                <motion.span
                  key={topic}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    backgroundColor: TAG_COLORS[i % TAG_COLORS.length],
                    color: TAG_TEXT_COLORS[i % TAG_TEXT_COLORS.length],
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'default'
                  }}
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <StaggerContainer stagger={0.18} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {blogs.map((post, i) => (
              <StaggerItem key={post.id} variant="fade-up">
                <motion.article
                  whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.07)', borderColor: 'rgba(9,97,159,0.3)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}
                  className="blog-card"
                >
                  {/* Color accent sidebar */}
                  <div style={{
                    width: '6px',
                    background: i % 2 === 0
                      ? 'linear-gradient(180deg, var(--brand-blue) 0%, #3b9ad9 100%)'
                      : 'linear-gradient(180deg, #0ea5e9 0%, #6366f1 100%)',
                    flexShrink: 0
                  }} />

                  <div style={{ padding: '2.5rem', flex: 1 }}>
                    {/* Meta row */}
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: TAG_TEXT_COLORS[i % TAG_TEXT_COLORS.length],
                        backgroundColor: TAG_COLORS[i % TAG_COLORS.length],
                        padding: '0.2rem 0.6rem',
                        borderRadius: '20px'
                      }}>
                        {TOPICS[i % TOPICS.length]}
                      </span>
                      <span style={{ color: 'var(--text-light-secondary)', fontSize: '0.82rem' }}>📅 {post.date}</span>
                      <span style={{ color: 'var(--text-light-secondary)', fontSize: '0.82rem' }}>✍️ {post.author}</span>
                    </div>

                    <h3 style={{ color: 'var(--text-light-primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.3' }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                      {post.summary}
                    </p>

                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        color: 'var(--brand-blue)', fontSize: '0.88rem', fontWeight: 700, cursor: 'default'
                      }}
                    >
                      Full Briefing Coming Soon →
                    </motion.span>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Coming soon info */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <div style={{
              marginTop: '3rem',
              padding: '2.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px dashed #cbd5e1',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📝</div>
              <h4 style={{ color: 'var(--text-light-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                More Articles Coming Soon
              </h4>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.9rem', margin: 0 }}>
                Our technical authors are preparing new briefings on SAP HANA management, hybrid cloud security, and edge computing strategies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .blog-card { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}

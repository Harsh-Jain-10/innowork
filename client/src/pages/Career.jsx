import React, { useState, useRef, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem, CountUp } from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

/* ─── Official Job Listings (from innoworq.com/job-openings/) ─── */
const JOB_OPENINGS = [
  {
    id: 'technical-project-manager',
    title: 'Technical Project Manager',
    category: 'Technical Project Manager',
    type: 'Full Time',
    location: 'Noida',
    desc: 'Lead end-to-end IT project delivery, manage cross-functional teams, and ensure timely execution of enterprise technology initiatives aligned with client goals.',
    requirements: [
      'PMP or equivalent project management certification.',
      '5+ years managing IT infrastructure or software projects.',
      'Strong stakeholder communication and risk management skills.',
    ],
  },
  {
    id: 'corporate-it-trainer',
    title: 'Corporate IT Trainer',
    category: 'Corporate IT Trainer',
    type: 'Full Time',
    location: 'Noida',
    desc: 'Design and deliver enterprise IT training curricula covering cloud, virtualization, security, and infrastructure technologies to corporate clients and internal teams.',
    requirements: [
      'Relevant technology certifications (AWS / Azure / RHCE / ITIL etc.).',
      '3+ years of corporate training or technical instruction experience.',
      'Excellent presentation and curriculum design skills.',
    ],
  },
  {
    id: 'windows-server-admin',
    title: 'Windows Server Admin',
    category: 'Windows Server Admin',
    type: 'Full Time',
    location: 'Bangalore',
    desc: 'Responsible for installation, configuration, maintenance and support of Windows Server environments ensuring security, availability, and performance while managing Active Directory, PowerShell scripting, and virtualization platforms.',
    requirements: [
      'Microsoft Certified: Windows Server certification preferred.',
      '2+ years of Active Directory and PowerShell scripting experience.',
      'Hands-on with VMware, Hyper-V or comparable virtualization stacks.',
    ],
  },
  {
    id: 'service-desk-engineer',
    title: 'Service Desk Engineer',
    category: 'Service Desk Engineer',
    type: 'Full Time',
    location: 'Bangalore',
    desc: 'Provide L1/L2 IT support to enterprise clients, manage incident tickets through ITSM platforms, and ensure prompt resolution within defined SLAs across hardware and software environments.',
    requirements: [
      'ITIL Foundation certification preferred.',
      '1–3 years in a service desk or helpdesk role.',
      'Windows OS, Office 365, and network troubleshooting expertise.',
    ],
  },
  {
    id: 'sales-executives',
    title: 'Sales Executives',
    category: 'Sales executives',
    type: 'Full Time',
    location: 'Bangalore',
    desc: "Drive B2B technology sales for INNOWORQ's IT infrastructure, cloud, and managed services portfolio — building strategic client relationships and achieving revenue targets across enterprise accounts.",
    requirements: [
      '2+ years of B2B IT sales or technology solutions selling.',
      'Understanding of IT services, cloud, and infrastructure markets.',
      'Proven track record of pipeline generation and deal closure.',
    ],
  },
];

const WHY_WORK = [
  {
    title: 'Experience Possibilities',
    text: 'Work on large-scale enterprise projects for Fortune 500 companies and government bodies across India, APAC, Europe, and the Middle East.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    text: 'Access to INNOWORQ\'s structured training programs covering cloud, virtualization, security, and emerging technologies — led by certified domain experts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: 'Cost Efficient & Stable',
    text: 'Competitive compensation, clear growth tracks, and a stable work environment backed by an ISO-certified operations framework.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Robust Security Culture',
    text: 'ISO/IEC 27001:2022 certified operations mean your work environment and client data are handled with the highest information security standards.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const CAREER_STATS = [
  { value: '100+', num: 100,   label: 'Happy Clients',      sub: 'Professional and certified professionals' },
  { value: '300+', num: 300,   label: 'Head Count',         sub: 'Fortune clients' },
  { value: '50K+', num: 50,    label: 'Devices Supported',  sub: 'Unix, Windows Servers and DC assets' },
  { value: '20+',  num: 20,    label: 'Strategic Alliances',sub: 'Partner ecosystem' },
];

const LOCATIONS  = ['All Job Location', 'Noida', 'Bangalore'];
const TYPES      = ['All Job Type', 'Full Time'];
const CATEGORIES = [
  'All Job Category',
  'Technical Project Manager',
  'Corporate IT Trainer',
  'Windows Server Admin',
  'Service Desk Engineer',
  'Sales executives',
];

/* ─── Animated count-up for stats band ─── */
function BandCount({ num, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let s = null;
    const dur = 1800;
    const tick = (ts) => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / dur, 1);
      const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
      setCount(Math.floor(e * num));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(num);
    };
    requestAnimationFrame(tick);
  }, [started, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Apply Modal ─── */
function ApplyModal({ job, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(15,23,42,0.5)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(6px)',
      }}
    >
      <motion.div
        initial={{ scale: 0.93, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.93, y: 24, opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.25, 0.8, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 30px 80px rgba(0,0,0,0.18)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Modal header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Apply for Position
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.3rem', fontFamily: 'var(--font-heading)' }}>
              {job.title}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-light-secondary)', marginTop: '0.2rem' }}>
              {job.location} · {job.type}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#f1f5f9', border: 'none', borderRadius: '8px',
              width: '34px', height: '34px', cursor: 'pointer',
              fontSize: '0.9rem', color: '#64748b',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, fontWeight: 700,
            }}
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: 'center', padding: '2rem 1rem',
              backgroundColor: 'rgba(9,97,159,0.04)',
              borderRadius: '10px', border: '1px solid rgba(9,97,159,0.12)',
            }}
          >
            <div style={{
              width: '54px', height: '54px', borderRadius: '50%',
              background: 'rgba(9,97,159,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '0.6rem' }}>
              Application Submitted
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
              Thank you{name ? `, ${name}` : ''}. Your application for <strong>{job.title}</strong> has been received. Our HR team will be in touch.
            </p>
            <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Close
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <label>Full Name *</label>
              <input type="text" required placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label>Email *</label>
                <input type="email" required placeholder="email@example.com" />
              </div>
              <div>
                <label>Phone *</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div>
              <label>Upload CV / Resume *</label>
              <input type="file" accept=".pdf,.doc,.docx" required style={{ padding: '0.45rem' }} />
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.25rem', display: 'block' }}>
                Allowed: .pdf, .doc, .docx
              </span>
            </div>
            <div>
              <label>Cover Note / Bio</label>
              <textarea rows={3} placeholder="Brief introduction and relevant experience…" style={{ resize: 'vertical' }} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(9,97,159,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              Submit Application
            </motion.button>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center', lineHeight: 1.5 }}>
              By submitting you agree to the storage and handling of your data by INNOWORQ Infotech Pvt. Ltd.
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── Job Row (accordion) ─── */
function JobRow({ job, index, onApply }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        border: open ? '1.5px solid var(--brand-blue)' : '1px solid #e2e8f0',
        boxShadow: open ? '0 8px 28px rgba(9,97,159,0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Header row */}
      <motion.div
        whileHover={{ backgroundColor: '#f8fafc' }}
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1.35rem 1.75rem',
          cursor: 'pointer',
          gap: '1.25rem',
          transition: 'background-color 0.2s ease',
          borderBottom: open ? '1px solid #e2e8f0' : 'none',
        }}
      >
        {/* Left: left-border accent */}
        <div style={{
          width: '3px', height: '44px', borderRadius: '2px', flexShrink: 0,
          backgroundColor: 'var(--brand-blue)',
          opacity: open ? 1 : 0.35,
          transition: 'opacity 0.25s ease',
        }} />

        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: open ? 'var(--brand-blue)' : 'var(--text-light-primary)',
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.3rem',
            transition: 'color 0.25s ease',
          }}>
            {job.title}
          </h4>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.79rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {job.location}
            </span>
            <span style={{ fontSize: '0.79rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              {job.type}
            </span>
          </div>
        </div>

        {/* Right: category badge + chevron */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
          <span style={{
            fontSize: '0.73rem',
            fontWeight: 600,
            color: 'var(--brand-blue)',
            backgroundColor: 'rgba(9,97,159,0.07)',
            padding: '0.22rem 0.65rem',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            display: 'none',
          }} className="job-cat-badge">
            {job.category}
          </span>
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.8, 0.25, 1] }}
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="var(--brand-blue)" strokeWidth="2.5" strokeLinecap="round"
          >
            <polyline points="6 9 12 15 18 9"/>
          </motion.svg>
        </div>
      </motion.div>

      {/* Expanded body */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '1.75rem 1.75rem 2rem 1.75rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                {job.desc}
              </p>

              <h5 style={{
                fontSize: '0.75rem', fontWeight: 700,
                color: 'var(--text-light-primary)',
                textTransform: 'uppercase', letterSpacing: '1px',
                marginBottom: '0.75rem',
              }}>
                Requirements
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem' }}>
                {job.requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}
                  >
                    <span style={{
                      marginTop: '4px', flexShrink: 0, width: '16px', height: '16px',
                      borderRadius: '50%', backgroundColor: 'rgba(9,97,159,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {req}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(9,97,159,0.28)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onApply(job)}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.75rem', fontSize: '0.9rem' }}
              >
                Apply for this Position →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN CAREER PAGE
══════════════════════════════════════════════════════════ */
export default function Career() {
  const [categoryFilter, setCategoryFilter] = useState('All Job Category');
  const [typeFilter,     setTypeFilter]     = useState('All Job Type');
  const [locationFilter, setLocationFilter] = useState('All Job Location');
  const [applyJob,       setApplyJob]       = useState(null);
  const jobsRef = useRef(null);

  const filtered = JOB_OPENINGS.filter(job => {
    const catOk = categoryFilter === 'All Job Category' || job.category === categoryFilter;
    const typeOk = typeFilter     === 'All Job Type'     || job.type     === typeFilter;
    const locOk  = locationFilter === 'All Job Location' || job.location  === locationFilter;
    return catOk && typeOk && locOk;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)', overflow: 'hidden' }} id="career-page-view">

      {/* ══ 1. HERO — light theme, dot-grid (matches Home / Solutions) ══ */}
      <section style={{
        position: 'relative',
        padding: '8rem 0 6rem',
        background: 'linear-gradient(140deg, #f0f7ff 0%, #f8fafc 50%, #eef6fd 100%)',
        borderBottom: '1px solid #e2e8f0',
        overflow: 'hidden',
      }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, #09619f 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />

        {/* Floating blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '6%', right: '8%',
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,97,159,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.07, 1], x: [0, -16, 0], y: [0, 12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', bottom: '4%', left: '5%',
            width: 280, height: 280, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,97,159,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'rgba(9,97,159,0.08)',
              color: 'var(--brand-blue)',
              padding: '0.4rem 1.1rem',
              borderRadius: '50px',
              fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '1.2px', textTransform: 'uppercase',
              marginBottom: '1.75rem',
              border: '1px solid rgba(9,97,159,0.18)',
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--brand-blue)', display: 'inline-block' }}
            />
            Join Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.8, 0.25, 1] }}
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--text-light-primary)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-1.5px',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
            }}
          >
            Careers at&nbsp;
            <span style={{ color: 'var(--brand-blue)' }}>INNOWORQ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{
              fontSize: '1.1rem', color: 'var(--text-light-secondary)',
              lineHeight: '1.7', marginBottom: '2.5rem',
              maxWidth: '640px', margin: '0 auto 2.5rem',
            }}
          >
            Build a future with limitless possibilities. Innovation and opportunity
            are not mere words — it's a part of our DNA at INNOWORQ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => jobsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
            >
              View Job Postings
            </button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3.5rem', flexWrap: 'wrap' }}
          >
            {[
              '🛡️ ISO 9001:2015 Certified',
              '🔐 ISO/IEC 27001:2022',
              '🌐 Pan-India Operations',
              '⚡ 300+ Tech Professionals',
            ].map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72 + i * 0.08 }}
                style={{ fontSize: '0.81rem', fontWeight: 600, color: 'var(--text-light-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 2. CULTURE — two-column split (matches Home "Why INNOWORQ" layout) ══ */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="career-split">

            {/* Left: culture copy */}
            <ScrollReveal variant="fade-left" duration={0.8}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Why Work With Us
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1.25rem', lineHeight: 1.2, letterSpacing: '-0.5px', fontFamily: 'var(--font-heading)' }}>
                Build a Future with<br />Limitless Possibilities
              </h2>

              {[
                'Innovation and opportunity are not mere words — it\'s a part of our DNA at INNOWORQ. Our philosophy – Experience Possibilities – not just allows our clients to explore endless possibilities, but also helps you build a better and thriving future by exploring your passions and new possibilities.',
                'Digital transformation through technology is shaping business models, industries, and outcomes rapidly and rampantly. Our culture of innovation, collaboration, and engagement leads to building key enablers that catalyses growth and brings about a substantial business impact.',
                'Jumpstart your career or take it to the next level by joining our team and contribute to creating a future with limitless possibilities.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  style={{ lineHeight: '1.75', color: 'var(--text-light-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Quote callout */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ borderLeft: '3px solid var(--brand-blue)', paddingLeft: '1.5rem', margin: '1.75rem 0' }}
              >
                <p style={{ fontStyle: 'italic', color: 'var(--text-light-primary)', fontSize: '1rem', lineHeight: '1.65', fontWeight: 500 }}>
                  "At INNOWORQ, learn to innovate with leading-edge technologies on some of the best projects and collaborate to source, nurture, and garner ideas."
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Right: Why Work Here cards (matches Home compliance-check layout) */}
            <ScrollReveal variant="fade-right" delay={0.2} duration={0.8}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.5rem',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '2rem' }}>
                  Why Choose INNOWORQ?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {WHY_WORK.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                    >
                      <span style={{
                        width: '40px', height: '40px', minWidth: '40px',
                        backgroundColor: 'rgba(9,97,159,0.07)',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--brand-blue)',
                      }}>
                        {item.icon}
                      </span>
                      <div>
                        <h5 style={{ color: 'var(--text-light-primary)', fontWeight: 700, fontSize: '0.94rem', marginBottom: '0.25rem' }}>
                          {item.title}
                        </h5>
                        <p style={{ fontSize: '0.83rem', color: 'var(--text-light-secondary)', lineHeight: '1.55', margin: 0 }}>
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 3. STATS BAND — solid brand-blue (identical to Home stats band) ══ */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--brand-blue)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                By The Numbers
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Our Growth, Your Trust — Numbers That Matter
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.1} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }} className="career-stats-grid">
            {CAREER_STATS.map((stat, i) => (
              <StaggerItem key={i} variant="scale">
                <motion.div
                  whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.12)' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: '2.25rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '0.5rem' }}>
                    <BandCount num={stat.num} suffix={stat.value.replace(/\d+/g, '')} />
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: '0.3rem' }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.4 }}>
                    {stat.sub}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 4. JOB OPENINGS ══ */}
      <section ref={jobsRef} id="job-openings" style={{ padding: '7rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">

          {/* Section header */}
          <ScrollReveal variant="fade-up">
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Opportunities
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '0.75rem', letterSpacing: '-0.5px', fontFamily: 'var(--font-heading)' }}>
                Current Job Openings
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', maxWidth: '560px', lineHeight: '1.65', fontSize: '0.95rem' }}>
                {JOB_OPENINGS.length} active positions across Noida and Bangalore. Click any role to read the full description and apply.
              </p>
            </div>
          </ScrollReveal>

          {/* Filters — clean inline row */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { value: categoryFilter, setter: setCategoryFilter, options: CATEGORIES, id: 'cat-filter' },
                { value: typeFilter,     setter: setTypeFilter,     options: TYPES,       id: 'type-filter' },
                { value: locationFilter, setter: setLocationFilter, options: LOCATIONS,   id: 'loc-filter' },
              ].map(({ value, setter, options, id }) => (
                <select
                  key={id}
                  id={id}
                  value={value}
                  onChange={e => setter(e.target.value)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    background: '#ffffff',
                    color: 'var(--text-light-primary)',
                    fontSize: '0.87rem',
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer',
                    minWidth: '180px',
                    width: 'auto',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                  }}
                >
                  {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ))}

              {/* Reset */}
              {(categoryFilter !== 'All Job Category' || typeFilter !== 'All Job Type' || locationFilter !== 'All Job Location') && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => { setCategoryFilter('All Job Category'); setTypeFilter('All Job Type'); setLocationFilter('All Job Location'); }}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    background: '#ffffff',
                    color: 'var(--text-light-secondary)',
                    fontSize: '0.83rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Clear filters ✕
                </motion.button>
              )}
            </div>
          </ScrollReveal>

          {/* Job list */}
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: 'center', padding: '4rem 2rem',
                  background: '#ffffff',
                  borderRadius: '10px', border: '1px dashed #e2e8f0',
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" style={{ margin: '0 auto 1rem', display: 'block' }}>
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem' }}>
                  No openings match your filter criteria. Try adjusting the filters.
                </p>
              </motion.div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {filtered.map((job, i) => (
                  <JobRow key={job.id} job={job} index={i} onApply={setApplyJob} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══ 5. GENERAL APPLICATION CTA — matches Home CTA band style ══ */}
      <section style={{ padding: '7rem 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="career-cta-split">

            <ScrollReveal variant="fade-left">
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Open Application
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: 1.2, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
                Don't see a suitable role?
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                We're always looking for talented technology professionals. Submit your profile and our HR team will reach out when the right opportunity opens up.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(9,97,159,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setApplyJob({
                    title: 'General Technical Application',
                    category: 'General Application',
                    type: 'Full Time',
                    location: 'Noida / Bangalore',
                  })}
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 2rem' }}
                >
                  Submit General Application
                </motion.button>

              </div>
            </ScrollReveal>

            {/* Right: visual checklist (matches Home's info panel) */}
            <ScrollReveal variant="fade-right" delay={0.2}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.5rem',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '1.5rem' }}>
                  What to Include in Your Profile
                </h4>
                {[
                  { label: 'Updated CV / Resume', note: '.pdf or .docx format preferred' },
                  { label: 'Relevant Certifications', note: 'AWS, Azure, ITIL, RHCE, PMP, etc.' },
                  { label: 'Years of Experience', note: 'Total and relevant domain experience' },
                  { label: 'Technology Specialization', note: 'Cloud, Networks, SAP, DevOps, etc.' },
                  { label: 'Location Preference', note: 'Noida, Bangalore, or open to relocation' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                      paddingBottom: i < 4 ? '1.1rem' : 0,
                      borderBottom: i < 4 ? '1px solid #f1f5f9' : 'none',
                      marginBottom: i < 4 ? '1.1rem' : 0,
                    }}
                  >
                    <span style={{
                      width: '26px', height: '26px', borderRadius: '6px', flexShrink: 0, marginTop: '2px',
                      backgroundColor: 'rgba(9,97,159,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-light-primary)' }}>{item.label}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light-secondary)', marginTop: '0.1rem' }}>{item.note}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
      </AnimatePresence>

      {/* Responsive */}
      <style>{`
        @media (min-width: 900px) {
          .job-cat-badge { display: inline-block !important; }
        }
        @media (max-width: 900px) {
          .career-cta-split {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .apply-modal-content {
            padding: 1.5rem !important;
            max-height: 90vh !important;
          }
        }
        @media (max-width: 480px) {
          .apply-modal-content {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}

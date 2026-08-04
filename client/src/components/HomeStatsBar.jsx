import React from 'react';
import ScrollReveal, { CountUp } from './ScrollReveal';
import configData from '../data/companyConfig.json';

export default function HomeStatsBar() {
  const stats = configData.stats || {
    years: '5+',
    projects: '100+',
    professionals: '350+',
    alliances: '100+',
    devices: '50K+'
  };

  const STATS_LIST = [
    { number: stats.years, label: 'Years of Excellence', desc: 'Proven track record of IT leadership' },
    { number: stats.projects, label: 'Enterprise Projects', desc: 'Deployed across global locations' },
    { number: stats.professionals, label: 'Technology Experts', desc: 'Certified L2 & L3 sysadmins' },
    { number: stats.alliances, label: 'OEM Partnerships', desc: 'Hardware & software alliances' },
    { number: stats.devices, label: 'Devices Managed', desc: 'SLA-backed asset coverage' }
  ];

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '3.5rem 0'
      }}
      id="home-stats-bar"
    >
      <div className="container">
        <ScrollReveal variant="fade-up">
          <div className="stats-bar-grid">
            {STATS_LIST.map((stat, idx) => (
              <div key={idx} className="stat-item-box">
                <div className="stat-number-text">
                  <CountUp target={stat.number} />
                </div>
                <div className="stat-label-text">{stat.label}</div>
                <div className="stat-desc-text">{stat.desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .stats-bar-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          text-align: center;
        }

        .stat-item-box {
          background-color: var(--bg-accent-subtle);
          border: 1px solid rgba(9, 97, 159, 0.12);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1rem;
          transition: var(--transition-smooth);
        }

        .stat-item-box:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--border-brand);
        }

        .stat-number-text {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3vw, 2.75rem);
          font-weight: 800;
          color: var(--primary);
          line-height: 1.1;
          margin-bottom: 0.35rem;
        }

        .stat-label-text {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-desc-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        @media (max-width: 900px) {
          .stats-bar-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 600px) {
          .stats-bar-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}

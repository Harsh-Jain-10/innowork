import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

export default function SupportDesk() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactNumber: '',
    companyName: '',
    systemModel: '',
    serialNumber: '',
    problemDesc: '',
    operatingSystem: '',
    usersAffected: '1',
    businessImpact: 'Low',
    siteAddress: '',
    locationCity: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    errors: [],
    ticketId: '',
    priority: '',
    responseSLA: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, errors: [], ticketId: '', priority: '', responseSLA: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/support-desk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          usersAffected: parseInt(formData.usersAffected) || 1
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          errors: [],
          ticketId: data.ticketId,
          priority: data.priority,
          responseSLA: data.responseSLA,
          message: data.message
        });
        setFormData({
          contactName: '',
          contactEmail: '',
          contactNumber: '',
          companyName: '',
          systemModel: '',
          serialNumber: '',
          problemDesc: '',
          operatingSystem: '',
          usersAffected: '1',
          businessImpact: 'Low',
          siteAddress: '',
          locationCity: ''
        });
      } else {
        const errorList = data.errors ? data.errors.map(err => err.msg) : [data.message || 'Unable to log ticket.'];
        setStatus({
          loading: false,
          success: false,
          errors: errorList,
          ticketId: '',
          priority: '',
          responseSLA: '',
          message: ''
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        errors: ['Unable to communicate with the server. Please try again later.'],
        ticketId: '',
        priority: '',
        responseSLA: '',
        message: ''
      });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)', padding: '5rem 0' }} id="support-desk-page">
      <div className="container" style={{ maxWidth: '850px' }}>
        
        {/* Header */}
        <ScrollReveal variant="fade-down" duration={0.6}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Technical Desk
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              IT Asset Support Center
            </h1>
            <p style={{ color: 'var(--text-light-secondary)' }}>
              Log a hardware or configuration fault. Complete system serial numbers and OS designations for prompt routing.
            </p>
          </div>
        </ScrollReveal>

        {/* Validation Errors */}
        {status.errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ 
              backgroundColor: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#c2410c',
              padding: '1.25rem',
              borderRadius: '6px',
              marginBottom: '2rem'
            }}
          >
            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: 700 }}>Validation Errors:</h5>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.88rem' }}>
              {status.errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
          </motion.div>
        )}

        {/* Ticket Success Banner */}
        {status.success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ 
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              color: '#065f46',
              padding: '2.5rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              textAlign: 'center'
            }}
            id="ticket-success-banner"
          >
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🎫</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-light-primary)' }}>Ticket Logged Successfully</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)', marginBottom: '1.5rem' }}>{status.message}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Ticket ID</span>
                <strong style={{ color: 'var(--text-light-primary)' }}>{status.ticketId}</strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Priority Level</span>
                <strong style={{ color: 'var(--brand-blue)' }}>{status.priority}</strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>SLA Commitment</span>
                <strong style={{ color: 'var(--brand-blue)' }}>{status.responseSLA}</strong>
              </div>
            </div>
          </motion.div>
        )}

        {/* Support Ticket Form */}
        <ScrollReveal variant="fade-up" delay={0.15} duration={0.7}>
          <form 
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
            }}
          >
            {/* Section 1: Contact details */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                1. Contact Information
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Contact Name *</label>
                  <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Company Name / Project *</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }} className="form-grid">
                <div>
                  <label>Business Email *</label>
                  <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Contact Mobile Number *</label>
                  <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>
            </div>

            {/* Section 2: Asset details */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                2. System &amp; Asset Profile
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }} className="form-grid-3">
                <div>
                  <label>System Model / Make *</label>
                  <input type="text" name="systemModel" placeholder="e.g. Dell PowerEdge R740" value={formData.systemModel} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Serial Number (Service Tag) *</label>
                  <input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Operating System *</label>
                  <input type="text" name="operatingSystem" placeholder="e.g. RedHat Linux 8.4" value={formData.operatingSystem} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }} className="form-grid">
                <div>
                  <label>End Users Affected *</label>
                  <input type="number" name="usersAffected" min="1" value={formData.usersAffected} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Business Impact *</label>
                  <select name="businessImpact" value={formData.businessImpact} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="Low">Low - Standard Support (8h SLA)</option>
                    <option value="Medium">Medium - Urgent Support (4h SLA)</option>
                    <option value="High">High - Critical Outage (2h SLA)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Location details */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                3. Dispatch Facility Location
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Location City *</label>
                  <input type="text" name="locationCity" value={formData.locationCity} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Full Site Postal Address *</label>
                  <input type="text" name="siteAddress" value={formData.siteAddress} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>
            </div>

            {/* Section 4: Fault description */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                4. Issue Summary
              </h3>

              <div>
                <label>Describe Fault or Logs *</label>
                <textarea 
                  name="problemDesc" 
                  value={formData.problemDesc} 
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Include error codes, system LED status, and events leading to fault..."
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', resize: 'vertical' }}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status.loading}
              style={{ width: '100%', padding: '1rem', fontWeight: 700 }}
            >
              {status.loading ? 'Establishing Remote Session...' : 'Log Technical Support Ticket'}
            </button>
          </form>
        </ScrollReveal>

      </div>

      <style>{`
        @media (max-width: 768px) {
          form {
            padding: 1.5rem !important;
          }
          .form-grid, .form-grid-3 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';

export default function PartnerRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    legalName: '',
    tradingName: '',
    companyPhone: '',
    companyEmail: '',
    websiteUrl: '',
    establishmentDate: '',
    legalStructure: 'Pvt Ltd',
    totalEmployees: '15-50',
    grossAnnualSales: '',
    businessLicence: '',
    panNumber: '',
    gstNumber: '',

    // Contact Person
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    designation: '',
    department: 'IT',
    role: 'Decision Maker',

    // Legal Address
    country: 'India',
    state: '',
    city: '',
    zipCode: '',
    address: '',
    latitude: '',
    longitude: '',

    // Physical Address
    physicalCountry: 'India',
    physicalState: '',
    physicalCity: '',
    physicalAddress: '',
    physicalZip: '',
    physicalPhone: '',

    // Capabilities
    provideFMS: 'Yes',
    bmsServices: 'Yes',
    fmsOneTime: 'Yes',
    l1Employees: '0-5',
    l2Employees: '0-5',
    l3Employees: '0-5',

    // SLAs & Helpdesk
    geoDirect: '',
    geoPartner: '',
    slaList: ['8 Hours'],
    hasHelpDesk: 'Yes',
    is24x7: 'Yes',

    // OEM Support
    enterpriseSupport: 'Yes',
    oemCoverage: 'Yes',
    supportType: 'Both',
    enduserSupport: 'Yes',
    enduserItems: '',
    enduserSupportType: 'Both',

    // Bank Account
    bankName: '',
    bankBranch: '',
    accountNumber: '',
    ifscCode: '',

    // Escalation Matrix
    esc1Name: '', esc1Email: '', esc1Phone: '',
    esc2Name: '', esc2Email: '', esc2Phone: '',
    esc3Name: '', esc3Email: '', esc3Phone: '',

    // Signatory
    signatoryName: '',
    signatoryDesignation: '',
    authorityConfirmation: 'Yes'
  });

  const [status, setStatus] = useState({ loading: false, success: false, errors: [], partnerCode: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, listName, value) => {
    const list = [...formData[listName]];
    if (e.target.checked) {
      list.push(value);
    } else {
      const idx = list.indexOf(value);
      if (idx > -1) list.splice(idx, 1);
    }
    setFormData({ ...formData, [listName]: list });
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockPartnerCode = 'INW-PTR-' + Math.floor(1000 + Math.random() * 9000);
    setStatus({
      loading: false,
      success: true,
      errors: [],
      partnerCode: mockPartnerCode,
      message: 'Your partner registration details have been received in static presentation mode.'
    });
    setStep(5);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-light-primary)', padding: '5rem 0' }} id="partner-reg-page">
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Page Header */}
        <ScrollReveal variant="fade-down" duration={0.6}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Channel Operations
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--text-light-primary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Partner Onboarding Desk
            </h1>
            <p style={{ color: 'var(--text-light-secondary)' }}>
              Complete all onboarding sections to register your technical capabilities, SLA availability, and escalation matrices.
            </p>
          </div>
        </ScrollReveal>

        {/* Stepper Progress Indicator */}
        {step <= 4 && (
          <>
            <div className="stepper-container" style={{ display: 'flex', justifySelf: 'center', width: '100%', maxWidth: '600px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
              {[1, 2, 3, 4].map(s => (
                <motion.div 
                  key={s} 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  animate={{ scale: step === s ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    animate={{ 
                      backgroundColor: step === s ? 'var(--brand-blue)' : step > s ? 'rgba(9, 97, 159, 0.2)' : '#e2e8f0',
                      color: step === s ? '#ffffff' : step > s ? 'var(--brand-blue)' : '#64748b',
                      scale: step === s ? 1.15 : 1
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.88rem'
                    }}
                  >
                    {step > s ? '✓' : s}
                  </motion.span>
                  <span className="step-label" style={{ fontSize: '0.8rem', color: step === s ? 'var(--text-light-primary)' : '#64748b', fontWeight: step === s ? 700 : 500 }}>
                    {s === 1 ? 'Profile' : s === 2 ? 'Address' : s === 3 ? 'SLA' : 'Details'}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mobile-step-description" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-blue)' }}>
              Step {step} of 4: {step === 1 ? 'Company Profile' : step === 2 ? 'Facility Addresses' : step === 3 ? 'Capabilities & SLA' : 'Financials & Matrix'}
            </div>
          </>
        )}

        {/* Validation Errors */}
        {status.errors.length > 0 && (
          <div 
            style={{ 
              backgroundColor: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#c2410c',
              padding: '1.25rem',
              borderRadius: '6px',
              marginBottom: '2rem'
            }}
          >
            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: 700 }}>Submission Errors:</h5>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.88rem' }}>
              {status.errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
          </div>
        )}

        {/* Stepper Wizard Form */}
        <form 
          onSubmit={handleSubmit} 
          style={{ 
            backgroundColor: '#ffffff', 
            border: '1px solid #e2e8f0', 
            borderRadius: '12px', 
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}
        >
          
          {/* STEP 1: Company Profile & Contact details */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                1. Company &amp; Contact Profile
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Company Name *</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Legal Name of Company *</label>
                  <input type="text" name="legalName" value={formData.legalName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Trading Name *</label>
                  <input type="text" name="tradingName" value={formData.tradingName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Website URL *</label>
                  <input type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Company Phone *</label>
                  <input type="text" name="companyPhone" value={formData.companyPhone} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Company Email *</label>
                  <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', marginTop: '1rem' }}>Contact Person Details</h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-grid-3">
                <div>
                  <label>Contact Person Name *</label>
                  <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Contact Phone *</label>
                  <input type="text" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Contact Email *</label>
                  <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-grid-3">
                <div>
                  <label>Designation *</label>
                  <input type="text" name="designation" value={formData.designation} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Department *</label>
                  <select name="department" value={formData.department} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="IT">IT Infrastructure</option>
                    <option value="HR">Human Resources</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Billing">Billing &amp; Finance</option>
                  </select>
                </div>
                <div>
                  <label>Decision Role *</label>
                  <select name="role" value={formData.role} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="Decision Maker">Decision Maker</option>
                    <option value="Facilitator">Facilitator</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={nextStep} className="btn btn-primary" style={{ padding: '0.65rem 2rem' }}>
                  Next Section
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Addresses & Legal details */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                2. Legal &amp; Physical Addresses
              </h3>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Registered Office Address</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1rem' }} className="form-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                  <input type="text" name="state" placeholder="State *" value={formData.state} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                  <input type="text" name="zipCode" placeholder="ZIP/Postal Code *" value={formData.zipCode} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <textarea name="address" placeholder="Complete Street Address *" value={formData.address} onChange={handleChange} required rows={5} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', resize: 'none' }} />
              </div>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Physical Delivery Address</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1rem' }} className="form-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="text" name="physicalCity" placeholder="City *" value={formData.physicalCity} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                  <input type="text" name="physicalState" placeholder="State *" value={formData.physicalState} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                  <input type="text" name="physicalZip" placeholder="ZIP Code *" value={formData.physicalZip} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <textarea name="physicalAddress" placeholder="Complete Street Address *" value={formData.physicalAddress} onChange={handleChange} required rows={5} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', resize: 'none' }} />
              </div>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Company Financial Details</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-grid-3">
                <div>
                  <label>Establishment Date *</label>
                  <input type="date" name="establishmentDate" value={formData.establishmentDate} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Legal Structure *</label>
                  <select name="legalStructure" value={formData.legalStructure} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="Pvt Ltd">Pvt Ltd</option>
                    <option value="Pvt">Pvt</option>
                    <option value="Proprietor">Proprietor</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label>Total Employees *</label>
                  <select name="totalEmployees" value={formData.totalEmployees} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="0-15">0-15</option>
                    <option value="15-50">15-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-150">100-150</option>
                    <option value="150-200">150-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-grid-3">
                <div>
                  <label>Gross Annual Sales *</label>
                  <input type="text" name="grossAnnualSales" value={formData.grossAnnualSales} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>PAN Number *</label>
                  <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>GST Number *</label>
                  <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyBetween: 'space-between', marginTop: '1rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-secondary" style={{ padding: '0.65rem 2rem' }}>
                  Back
                </button>
                <button type="button" onClick={nextStep} className="btn btn-primary" style={{ padding: '0.65rem 2rem' }}>
                  Next Section
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Capabilities, SLAs & Support */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                3. SLAs, Helpdesk &amp; Technical Capabilities
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Direct Coverage Cities *</label>
                  <input type="text" name="geoDirect" placeholder="e.g. Noida, Delhi, Mumbai" value={formData.geoDirect} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Partner Coverage Cities *</label>
                  <input type="text" name="geoPartner" placeholder="e.g. Chennai, Bangalore" value={formData.geoPartner} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div>
                <label>Select Supported SLAs *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                  {['4 Hours', '6 Hours', '8 Hours', '12 Hours', '24 Hours', 'Next Business Day'].map(sla => (
                    <label key={sla} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                      <input 
                        type="checkbox" 
                        checked={formData.slaList.includes(sla)}
                        onChange={(e) => handleCheckboxChange(e, 'slaList', sla)}
                      />
                      {sla}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Do you operate your own Helpdesk? *</label>
                  <select name="hasHelpDesk" value={formData.hasHelpDesk} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label>Is your Helpdesk 24x7x365? *</label>
                  <select name="is24x7" value={formData.is24x7} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Onsite / Remote Technical Personnel</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-grid-3">
                <div>
                  <label>L1 Technicians *</label>
                  <select name="l1Employees" value={formData.l1Employees} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="0-5">0-5</option>
                    <option value="5-15">5-15</option>
                    <option value="15-50">15-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div>
                  <label>L2 Engineers *</label>
                  <select name="l2Employees" value={formData.l2Employees} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="0-5">0-5</option>
                    <option value="5-15">5-15</option>
                    <option value="15-50">15-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div>
                  <label>L3 Architects *</label>
                  <select name="l3Employees" value={formData.l3Employees} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }}>
                    <option value="0-5">0-5</option>
                    <option value="5-15">5-15</option>
                    <option value="15-50">15-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyBetween: 'space-between', marginTop: '1rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-secondary" style={{ padding: '0.65rem 2rem' }}>
                  Back
                </button>
                <button type="button" onClick={nextStep} className="btn btn-primary" style={{ padding: '0.65rem 2rem' }}>
                  Next Section
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Banking, Escalation & Signatures */}
          {step === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-light-primary)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                4. Banking, Escalation &amp; Signatures
              </h3>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Company Bank Account Details</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Bank Name *</label>
                  <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Account Number *</label>
                  <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Branch Address *</label>
                  <input type="text" name="bankBranch" value={formData.bankBranch} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>IFSC Code / Swift Code *</label>
                  <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Level-1 Support Escalation Details</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-grid-3">
                <input type="text" name="esc1Name" placeholder="Escalation Manager Name *" value={formData.esc1Name} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                <input type="email" name="esc1Email" placeholder="Email Address *" value={formData.esc1Email} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                <input type="text" name="esc1Phone" placeholder="Mobile Number *" value={formData.esc1Phone} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
              </div>

              <h4 style={{ color: 'var(--text-light-primary)', fontSize: '1rem', margin: 0 }}>Authorized Signatory Profile</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label>Authorized Signatory Name *</label>
                  <input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
                <div>
                  <label>Authorized Designation *</label>
                  <input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} required style={{ width: '100%', padding: '0.65rem', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyBetween: 'space-between', marginTop: '1rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-secondary" style={{ padding: '0.65rem 2rem' }}>
                  Back
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={status.loading}
                  style={{ padding: '0.65rem 2rem', fontWeight: 700 }}
                >
                  {status.loading ? 'Submitting File...' : 'Complete Registration'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Success screen */}
          {step === 5 && (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1.5rem' }}>🤝</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-light-primary)', fontWeight: 800, marginBottom: '1rem' }}>Application Under Review</h3>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {status.message}
              </p>
              
              <div style={{ display: 'inline-block', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '1rem 2rem', borderRadius: '6px' }}>
                <span style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Partner Registration ID</span>
                <strong style={{ fontSize: '1.5rem', color: 'var(--brand-blue)' }}>{status.partnerCode}</strong>
              </div>
            </div>
          )}

        </form>
      </div>

      <style>{`
        .mobile-step-description {
          display: none;
        }
        @media (max-width: 768px) {
          form {
            padding: 1.75rem 1.25rem !important;
          }
          .form-grid, .form-grid-3 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .stepper-container {
            max-width: 280px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 1.5rem !important;
          }
          .step-label {
            display: none !important;
          }
          .mobile-step-description {
            display: block !important;
          }
        }
        @media (max-width: 480px) {
          form {
            padding: 1.25rem 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
}

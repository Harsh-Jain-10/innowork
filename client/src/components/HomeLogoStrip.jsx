import React from 'react';
import ScrollReveal from './ScrollReveal';
import configData from '../data/companyConfig.json';

// Import OEM partner logos
import hpeLogo from '../assets/logos/hpe.svg';
import dellLogo from '../assets/logos/dell.svg';
import hpLogo from '../assets/logos/hp.png';
import lenovoLogo from '../assets/logos/lenovo.png';
import ciscoLogo from '../assets/logos/cisco.svg';
import arubaLogo from '../assets/logos/aruba.svg';
import fortinetLogo from '../assets/logos/fortinet.svg';
import paloaltoLogo from '../assets/logos/paloalto.svg';
import ibmLogo from '../assets/logos/ibm.svg';
import oracleLogo from '../assets/logos/oracle.svg';
import netappLogo from '../assets/logos/netapp.svg';
import nutanixLogo from '../assets/logos/nutanix.png';
import vmwareLogo from '../assets/logos/vmware.png';
import microsoftLogo from '../assets/logos/microsoft.svg';
import redhatLogo from '../assets/logos/redhat.svg';
import suseLogo from '../assets/logos/suse.svg';
import veeamLogo from '../assets/logos/veeam.png';
import veritasLogo from '../assets/logos/veritas.svg';
import rubrikLogo from '../assets/logos/rubrik.svg';
import commvaultLogo from '../assets/logos/commvault.svg';
import acronisLogo from '../assets/logos/acronis.svg';
import zscalerLogo from '../assets/logos/zscaler.svg';
import checkpointLogo from '../assets/logos/checkpoint.svg';
import kasperskyLogo from '../assets/logos/kaspersky.svg';
import trendmicroLogo from '../assets/logos/trendmicro.svg';
import sophosLogo from '../assets/logos/sophos.svg';
import symantecLogo from '../assets/logos/symantec.svg';
import sonicwallLogo from '../assets/logos/sonicwall.svg';
import citrixLogo from '../assets/logos/citrix.svg';
import adobeLogo from '../assets/logos/adobe.svg';
import sapLogo from '../assets/logos/sap.svg';

const logoMapping = {
  HPE: hpeLogo,
  Dell: dellLogo,
  HP: hpLogo,
  Lenovo: lenovoLogo,
  Cisco: ciscoLogo,
  Aruba: arubaLogo,
  Fortinet: fortinetLogo,
  PaloAlto: paloaltoLogo,
  IBM: ibmLogo,
  Oracle: oracleLogo,
  NetApp: netappLogo,
  Nutanix: nutanixLogo,
  VMware: vmwareLogo,
  Microsoft: microsoftLogo,
  RedHat: redhatLogo,
  SUSE: suseLogo,
  Veeam: veeamLogo,
  Veritas: veritasLogo,
  Rubrik: rubrikLogo,
  Commvault: commvaultLogo,
  Acronis: acronisLogo,
  Zscaler: zscalerLogo,
  Checkpoint: checkpointLogo,
  Kaspersky: kasperskyLogo,
  TrendMicro: trendmicroLogo,
  Sophos: sophosLogo,
  Symantec: symantecLogo,
  SonicWall: sonicwallLogo,
  Citrix: citrixLogo,
  Adobe: adobeLogo,
  SAP: sapLogo
};

const logoScaleOverrides = {};


export default function HomeLogoStrip() {
  const oemList = configData.oemPartners || Object.keys(logoMapping);

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '3rem 0',
        overflow: 'hidden',
        position: 'relative'
      }}
      id="home-oem-logo-strip"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ScrollReveal variant="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
            <span className="badge badge-primary" style={{ textTransform: 'uppercase', marginBottom: '0.5rem', display: 'inline-block' }}>
              OEM COVERAGE &amp; ALLIANCES
            </span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600, margin: 0 }}>
              Supporting enterprise hardware &amp; software ecosystems from leading global technology vendors
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Dual Marquee Rows — full-width, outside container so it can scroll edge-to-edge */}
      <div className="logo-marquee-container" style={{ position: 'relative', zIndex: 1, marginTop: '0.5rem' }}>
          
        {/* Row 1: Moving Left */}
        <div className="logo-marquee-track track-left">
          {[...oemList.slice(0, 16), ...oemList.slice(0, 16)].map((oem, idx) => (
            <div key={`r1-${oem}-${idx}`} className="logo-card">
              <img 
                src={logoMapping[oem]} 
                alt={`${oem} OEM Partner Logo`} 
                className="logo-img" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moving Right */}
        <div className="logo-marquee-track track-right" style={{ marginTop: '1rem' }}>
          {[...oemList.slice(16, 32), ...oemList.slice(16, 32)].map((oem, idx) => (
            <div key={`r2-${oem}-${idx}`} className="logo-card">
              <img 
                src={logoMapping[oem]} 
                alt={`${oem} OEM Partner Logo`} 
                className="logo-img" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .logo-marquee-container {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        .logo-marquee-track {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          width: max-content;
        }

        .track-left {
          animation: marqueeLeft 30s linear infinite;
        }

        .track-right {
          animation: marqueeRight 32s linear infinite;
        }

        .logo-marquee-container:hover .logo-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .logo-card {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 64px;
          width: 150px;
          padding: 0.75rem 1rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xs);
          transition: var(--transition-smooth);
          overflow: hidden;
          box-sizing: border-box;
        }

        .logo-card:hover {
          border-color: var(--border-brand);
          box-shadow: var(--shadow-sm);
          transform: translateY(-2px);
          background-color: var(--bg-accent-subtle);
        }

        .logo-img {
          width: 100%;
          height: 100%;
          max-width: 110px;
          max-height: 32px;
          object-fit: contain;
          object-position: center;
          transition: transform 0.2s ease;
          display: block;
        }

        .logo-card:hover .logo-img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          #home-oem-logo-strip {
            padding: 2.5rem 0 !important;
          }
          .logo-marquee-container {
            margin-top: 0.5rem;
          }
          .logo-card {
            width: 112px;
            height: 52px;
            padding: 0.5rem 0.6rem;
          }
          .logo-img {
            max-width: 80px;
            max-height: 24px;
          }
        }

        @media (max-width: 480px) {
          .logo-card {
            width: 100px;
            height: 46px;
            padding: 0.4rem 0.5rem;
          }
          .logo-img {
            max-width: 70px;
            max-height: 20px;
          }
          .logo-marquee-track {
            gap: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
}

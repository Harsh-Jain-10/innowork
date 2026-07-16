import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import {
  CloudHybridIllustration,
  ITInfrastructureIllustration,
  CybersecurityIllustration,
  AutomationModernizationIllustration,
  ERPMangementIllustration,
  DeploymentRolloutIllustration,
  SupportDeskIllustration,
  SmartCityICCCIllustration,
  SAPBasisIllustration,
  StaffAugmentationIllustration,
  NOCServicesIllustration,
  DCOperationsIllustration,
  DataBackupIllustration
} from '../components/SolutionIllustrations';

/* ─────────────────────────────────────────────────────────────
   Animated Count-Up Component for Hero Stats
────────────────────────────────────────────────────────────── */
function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setCount(end);
      return;
    }
    let start = 0;
    const endNum = parseInt(end, 10);
    if (isNaN(endNum)) {
      setCount(end);
      return;
    }
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endNum), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endNum) {
        clearInterval(timer);
        setCount(endNum);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, reduced]);

  return <span>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────────────────────────
   Verified solutions data configurations
────────────────────────────────────────────────────────────── */
const SOLUTIONS_DATA = [
  {
    id: 'cloud-hybrid',
    name: 'Cloud & Hybrid IT Solutions',
    code: 'SOL-01',
    Illustration: CloudHybridIllustration,
    intro: 'INNOWORQ designs and implements scalable hybrid IT architectures that bridge on-premises resources with secure multi-cloud environments. We help enterprises optimize workload placements and manage infrastructure scaling.',
    techOverview: 'Our hybrid architectures leverage secure VPN links, VPC segmentations, dynamic route tables, and API gateway configurations to connect private datacenter compute pools with public hosting regions.',
    architecture: 'We construct secure networks using encrypted local loops and redundant routers. Traffic is distributed across virtual machine pools and isolated subnets to ensure high availability and prevent load saturation.',
    scope: 'Multi-cloud workload migration planning, virtual network design, resource scale monitoring, and secure gateway management.',
    businessValue: 'Deploying our hybrid IT solutions reduces resource provisioning delays, optimizes cloud utilization, and supports workload portability across server configurations.',
    deployment: 'Workload profiling and migration mapping, secure VPC/VPN path setup, virtual server staging, and active routing checkouts.',
    industries: 'Logistics, Retail, Healthcare, Tech Corporates.',
    platforms: ['AWS services', 'Azure environments', 'Hypervisor platforms'],
    benefits: ['Optimized hybrid workload placement', 'Eliminated single-point-of-failure routing', 'Flexible infrastructure capacity scaling'],
    usecases: ['Legacy workload migration to cloud', 'Hybrid virtual machine load routing', 'On-demand scaling configurations'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Network Topology Map', 'Workload Migration Schedule', 'Secure Gateway Configuration documentation'],
    services: ['Cloud Migration planning', 'VPC & VPN setups', 'Resource usage monitoring'],
    models: ['Hybrid / Private Cloud deployments'],
    coverage: 'Continuous L3 engineer support coverage'
  },
  {
    id: 'infra-mgmt',
    name: 'IT Infrastructure Management & Operations',
    code: 'SOL-02',
    Illustration: ITInfrastructureIllustration,
    intro: 'We provide comprehensive IT infrastructure management and operations support, maintaining host servers, enterprise storage systems, blade chassis networks, and virtualization layers.',
    techOverview: 'Our teams manage host hypervisors, server configurations, SAN storage allocation pools, fibre channel fabrics, blade server bays, and core system logs.',
    architecture: 'We implement centralized administration workflows. Physical hardware blades are grouped into virtual clusters to allow automated resource sharing and prevent server overloads.',
    scope: 'Host server patch management, storage volume provisioning, hypervisor configurations, and system health status tracking.',
    businessValue: 'Ensures high availability of central databases, improves resource utilization across compute assets, and limits the risk of server downtime.',
    deployment: 'Infrastructure health audit, host patch updates, storage path validation, and centralized administration setup.',
    industries: 'BFSI, Telecom, Manufacturing, Education.',
    platforms: ['Virtualization Hypervisors', 'Fibre Channel SAN arrays', 'Blade server enclosures'],
    benefits: ['Maximized server compute density', 'Consolidated physical server footprint', 'Stable database storage pathways'],
    usecases: ['Hypervisor cluster deployments', 'SAN storage allocation setup', 'Blade chassis configurations'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Hardware Status Reports', 'Storage Path Mapping diagrams', 'Hypervisor Configuration documents'],
    services: ['Hypervisor tuning', 'Storage volume allocations', 'Patch administration support'],
    models: ['On-Premises / Colocation management'],
    coverage: '24/7 engineering incident support'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Secure Perimeter Hardening',
    code: 'SOL-03',
    Illustration: CybersecurityIllustration,
    intro: 'INNOWORQ designs and deploys perimeter defense networks, configures next-generation firewalls, and implements secure VLAN segments to protect corporate network assets.',
    techOverview: 'We configure firewall access rules, web application filters (WAF), secure routing switches, access-control lists, and encrypted VPN gateways.',
    architecture: 'Our security layouts segment networks into isolated security zones (DMZ). We configure access lists at network interfaces to block unauthorized traffic and protect internal databases.',
    scope: 'Firewall policy configurations, VLAN segment setups, security scans, VPN client management, and access control audit logs.',
    businessValue: 'Reduces vulnerability exposure, protects sensitive business databases against external attacks, and supports compliance with industry security guidelines.',
    deployment: 'Security threat audit, firewall rules engineering, network VLAN zoning, and penetration simulation checks.',
    industries: 'BFSI, Healthcare, Telecom, Government Sectors.',
    platforms: ['Next-Gen Firewalls', 'Secure Routing Switches', 'Web Application Firewalls (WAF)'],
    benefits: ['Hardened perimeter network defense', 'Segmented secure internal database paths', 'Encrypted branch office communication links'],
    usecases: ['Firewall access rules configuration', 'Network VLAN segmentations', 'Secure remote user access setups'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Network Security Map', 'Firewall Rules Documentation', 'Access Control logs'],
    services: ['Firewall Configuration', 'VLAN Zoning setups', 'WAF Filter Tuning'],
    models: ['Secure Enterprise Perimeter / Zero-Trust design'],
    coverage: '24/7/365 security incident response support'
  },
  {
    id: 'automation-devops',
    name: 'Automation, DevOps & Modernization',
    code: 'SOL-04',
    Illustration: AutomationModernizationIllustration,
    intro: 'We deploy Infrastructure as Code (IaC) configurations, automate server provisioning steps, and build declarative deployment pipelines to reduce manual IT tasks.',
    techOverview: 'Our setups utilize automation engines, centralized configuration scripts, deployment playbooks, and GitOps workflows to manage server fleets.',
    architecture: 'We connect configuration control servers with system managers. Automation scripts are stored in version control systems to ensure all changes are tracked and approved.',
    scope: 'Automated bare-metal setups, server configuration scripts, patch updates, and automated monitoring alert actions.',
    businessValue: 'Minimizes configuration mistakes caused by manual work, reduces server deployment delays, and establishes consistent setup environments across fleets.',
    deployment: 'Task workflow mapping, automation script development, sandbox validation dry-runs, and pipeline rollout.',
    industries: 'Logistics, Manufacturing, Tech Corporates, Retail.',
    platforms: ['Infrastructure as Code tools', 'Configuration Management engines', 'Container Platforms'],
    benefits: ['Reduced manual IT administrative task overhead', 'Consistent configuration across server fleets', 'Fast workload deployment capabilities'],
    usecases: ['Automated server deployment setups', 'Automated patch rollout loops', 'System config monitoring triggers'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Automation Code Library', 'Pipeline Configuration maps', 'Drift Monitoring dashboard setups'],
    services: ['IaC scripting', 'Deployment pipeline setups', 'Configuration audits'],
    models: ['Declarative GitOps setups'],
    coverage: 'Automation engine operational support'
  },
  {
    id: 'erp-mgmt',
    name: 'ERP & Enterprise Management Solutions',
    code: 'SOL-05',
    Illustration: ERPMangementIllustration,
    intro: 'INNOWORQ supports core ERP environments, configures ITSM ticketing platforms, and establishes unified dashboard observability to monitor enterprise database performance.',
    techOverview: 'We configure server database monitoring probes, alert triggers, service desk integration parameters, and core database tuning rules.',
    architecture: 'Observability tools collect metrics from ERP databases and servers. Critical metrics are aggregated on central dashboards, triggering service tickets when issues are detected.',
    scope: 'ITSM system setups, monitoring dashboard integrations, ERP host configurations, and database administration support.',
    businessValue: 'Improves visibility across IT systems, helps resolve database issues faster, and keeps core ERP systems running smoothly.',
    deployment: 'Monitoring probe integration, alert threshold definition, service desk link validation, and dashboard layout setup.',
    industries: 'Logistics, BFSI, Manufacturing, Retail.',
    platforms: ['Enterprise ERP Databases', 'ITSM Systems', 'Infrastructure Observability dashboards'],
    benefits: ['Unified system observability controls', 'Streamlined IT ticket routing workflows', 'Optimized ERP database stability'],
    usecases: ['Enterprise database monitoring', 'ITSM ticketing automation', 'ERP database tuning support'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['ITSM Workflow charts', 'Database Metric matrices', 'Observability Dashboard layouts'],
    services: ['Database health tuning', 'ITSM setup configurations', 'ERP system administration support'],
    models: ['Centralized Console configurations'],
    coverage: 'ERP Database admin support coverage'
  },
  {
    id: 'deployment-rollouts',
    name: 'Deployment & Rollout Services',
    code: 'SOL-06',
    Illustration: DeploymentRolloutIllustration,
    intro: 'We provide multi-site IT deployment and rollout services, managing server staging, client OS migrations, data transfers, and hardware configurations.',
    techOverview: 'Our engineers handle server rack setups, structured cabling verification, client device provisioning, and network path alignments.',
    architecture: 'Rollout projects follow a structured staging-to-production design. New systems are built in staging zones, verified against baseline setups, and then moved to active production networks.',
    scope: 'Multi-site server rollouts, client hardware setups, data migration support, and network configuration updates.',
    businessValue: 'Minimizes business disruption during system upgrades, keeps deployments on schedule, and ensures consistent setups across branches.',
    deployment: 'Deployment project scoping, staging validation runs, site installations, and post-installation checklists.',
    industries: 'Retail Chains, Logistics, BFSI, Government Sites.',
    platforms: ['Enterprise Servers', 'Client OS platforms', 'Local Loop Network configurations'],
    benefits: ['Consistent hardware configurations across sites', 'Minimized downtime during system rollouts', 'Structured client migration path'],
    usecases: ['Multi-site branch server rollouts', 'Corporate OS upgrade rollouts', 'Office relocation IT setups'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Rollout Project Plan document', 'Staging Validation checklists', 'Post-Deployment Sign-Off logs'],
    services: ['Server Staging configurations', 'Data Migration support', 'Site IT installations'],
    models: ['Project-Based Managed Rollouts'],
    coverage: 'Post-Deployment transition support'
  },
  {
    id: 'support-desk',
    name: '24/7 Support Desk Services',
    code: 'SOL-07',
    Illustration: SupportDeskIllustration,
    intro: 'We deliver SLA-driven L1, L2, and L3 support desk services, providing incident management, ticket routing, and technical troubleshooting for global enterprises.',
    techOverview: 'We configure incident tickets, priority levels, response notifications, troubleshooting guidelines, and technical escalation maps.',
    architecture: 'Our support desk utilizes a Tiered incident management model. Simple issues are resolved by L1, while complex system alerts are escalated to L2 and L3 engineers.',
    scope: 'Support desk operations, ticket routing configuration, incident debugging, and technical escalation paths.',
    businessValue: 'Reduces time to resolve technical issues, provides clear ticket visibility, and ensures L3 engineering expertise is dispatched for complex failures.',
    deployment: 'Service desk onboarding, ticket workflow setup, priority mapping, and support portal validation.',
    industries: 'Retail, Logistics, BFSI, Telecom, Healthcare.',
    platforms: ['ITSM ticket tools', 'Incident management databases', 'Troubleshooting dashboards'],
    benefits: ['Structured IT support dispatch workflows', 'Clear ticket priority visibility', 'Fast technical incident resolutions'],
    usecases: ['Enterprise Helpdesk configurations', 'Technical Incident troubleshooting', 'Critical SLA Escalation setups'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Support Protocol Manual', 'Escalation Flow Map', 'Service Level Agreement documentation'],
    services: ['Support desk setups', 'Incident debugging support', 'Incident dispatch planning'],
    models: ['Managed Support Desk / Integrated Operations'],
    coverage: 'Guaranteed SLA-bound L3 escalation dispatch'
  },
  {
    id: 'smart-city',
    name: 'Smart City & ICCC Solutions',
    code: 'SOL-08',
    Illustration: SmartCityICCCIllustration,
    intro: 'INNOWORQ designs and integrates scalable Smart City architectures that unify municipal services, civic administration, and real-time public safety. We specialize in building Tier-III Integrated Command & Control Centers (ICCC).',
    techOverview: 'Our smart city solutions rely on high-capacity fiber rings and edge compute gateways. These systems ingest data from utility meters, traffic sensors, and municipal networks.',
    architecture: 'Our designs separate local sensor networks, core communication lines, and central operations displays. Next-generation firewalls protect edge gateways, while redundant datacenters host databases.',
    scope: 'Municipal IoT designs, video wall integrations, fiber loop configurations, utility sensor systems, and command center setups.',
    businessValue: 'Improves response coordination for municipal services, reduces utility operational overhead, and helps manage civic compliance parameters.',
    deployment: 'Topographical path planning, central control center setup, edge gateway integration, and system verification.',
    industries: 'Municipalities, Public Transit, Water & Power Utilities, Smart Grids.',
    platforms: ['IoT Gateways', 'Central command walls', 'Redundant storage arrays'],
    benefits: ['Coordinated civic response workflows', 'High-availability command center uptime', 'Protected edge sensor pathways'],
    usecases: ['Municipal ICCC Systems', 'Intelligent Traffic Management setups', 'Utility Sensor Grid integrations'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['ICCC Layout Blueprint', 'Gateway Configuration documentation', 'Observability Dashboard design'],
    services: ['ICCC Integration', 'Edge gateway setups', 'Central database configurations'],
    models: ['Municipal Private Cloud / Colocation Hybrid'],
    coverage: '24/7 engineering monitoring support'
  },
  {
    id: 'sap-basis',
    name: 'SAP Basis & Consulting',
    code: 'SOL-09',
    Illustration: SAPBasisIllustration,
    intro: 'We offer SAP Basis administration support, database tuning, NetWeaver configurations, and performance optimization services to maintain enterprise SAP environments.',
    techOverview: 'Our engineers manage SAP Basis logs, transport paths, database updates, background jobs, kernel patches, and monitoring settings.',
    architecture: 'We support multi-tier SAP landscapes. The presentation layer connects to application servers, which communicate with backend databases configured for high availability.',
    scope: 'SAP Basis patch application, transport configuration checks, database health monitors, and system resource allocation tuning.',
    businessValue: 'Protects critical SAP transactions against downtime, ensures database response times remain stable, and assists in SAP system updates.',
    deployment: 'SAP system audit, database pathway check, patch deployment planning, and monitoring configuration.',
    industries: 'BFSI, Manufacturing, Logistics, Telecom.',
    platforms: ['SAP NetWeaver', 'SAP Databases', 'System Administration consoles'],
    benefits: ['Stable SAP database performance', 'Managed patch and transport rollouts', 'Proactive database alert monitors'],
    usecases: ['SAP transport configuration setups', 'SAP Basis system tuning', 'HANA database administration support'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['SAP Basis Assessment Report', 'Database Tuning configuration logs', 'System Monitoring profiles'],
    services: ['SAP Basis monitoring', 'Database health tuning', 'SAP patch administration'],
    models: ['Central Enterprise Management'],
    coverage: '24/7 database and application support'
  },
  {
    id: 'staff-aug',
    name: 'Staff Augmentation',
    code: 'SOL-10',
    Illustration: StaffAugmentationIllustration,
    intro: 'INNOWORQ provides certified systems administrators, network operators, and support engineers (L1, L2, L3) to augment client operations teams.',
    techOverview: 'We dispatch engineers certified in cloud platforms, virtualization software, network routing protocols, and database systems to manage custom client workflows.',
    architecture: 'Augmented engineers integrate directly into client project teams, following the client\'s established operating workflows and security policies.',
    scope: 'L1/L2/L3 engineering resource dispatch, technical skill gap audits, and remote operational support.',
    businessValue: 'Helps enterprises handle temporary project spikes without hiring delays, bridges internal technical skill gaps, and lowers operational overhead.',
    deployment: 'Skill requirements assessment, engineer selection and onboarding, and project integration checks.',
    industries: 'BFSI, Healthcare, Telecom, Logistics, Education.',
    platforms: ['Enterprise Cloud engines', 'Hypervisor setups', 'Database Administration systems'],
    benefits: ['On-demand technical team scaling', 'Access to certified L3 engineering skills', 'Reduced hiring timeline delays'],
    usecases: ['Temporary systems administration support', 'Infrastructure rollout project staffing', 'Dedicated technical helpdesk dispatch'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Engineer Capability Matrix', 'Project Task allocation plan', 'Daily SLA Activity logs'],
    services: ['L1 Helpdesk support', 'L2 Systems operations', 'L3 Architecture consulting'],
    models: ['Onsite / Remote Staff Augmentation'],
    coverage: 'SLA-backed engineering placements'
  },
  {
    id: 'noc-services',
    name: 'NOC Services',
    code: 'SOL-11',
    Illustration: NOCServicesIllustration,
    intro: 'We design and operate active network monitoring setups, providing alarm triage, incident management, and real-time performance optimization.',
    techOverview: 'We configure syslog collection servers, SNMP alerts, ping check loops, network bandwidth trackers, and incident notifications.',
    architecture: 'Our systems use localized monitoring tools to collect status alerts from networks and routers, reporting back to centralized operator interfaces.',
    scope: 'Remote network monitoring, alarm validation, packet drop monitoring, and vendor notification paths.',
    businessValue: 'Proactively identifies network failures before they impact users, helping maintain high network availability.',
    deployment: 'Network device configuration, alert limits mapping, ticket routing setup, and operator verification runs.',
    industries: 'Logistics, Telecom, BFSI, Retail, Government.',
    platforms: ['SNMP monitoring tools', 'Network interface checkers', 'Syslog collectors'],
    benefits: ['Proactive detection of network failures', 'Immediate incident dispatch alerts', 'Unified status logs across switches'],
    usecases: ['Corporate WAN monitoring setups', 'Edge routing check networks', 'Automated network alarm generation'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['NOC Monitoring Setup Plan', 'Escalation Path Flow Chart', 'System Alert Definition Table'],
    services: ['NOC device integrations', 'Alert threshold tuning', 'Network status logging'],
    models: ['Co-Managed / Fully Managed NOC'],
    coverage: '24/7 remote monitoring coverage'
  },
  {
    id: 'dc-operations',
    name: 'Datacenter Operations & Non-IT DC Facility Management',
    code: 'SOL-12',
    Illustration: DCOperationsIllustration,
    intro: 'We manage physical datacenter facility environments, including precision cooling units, uninterruptible power systems (UPS), and facility access controls.',
    techOverview: 'We configure environmental monitors, UPS battery banks, hot/cold containment paths, backup generator controllers, and fire suppression systems.',
    architecture: 'Facility systems use N+1 configurations to prevent power drops. Racks connect to dual power loops, and cooling paths keep server temperatures within target limits.',
    scope: 'Precision cooling tuning, UPS system checks, generator configurations, fire suppression systems, and physical security tracking.',
    businessValue: 'Protects enterprise server hardware from overheating and utility drops, helping prevent hardware failures.',
    deployment: 'Heat load calculation, air duct layouts, UPS installation, generator connections, and sensor integration.',
    industries: 'Datacenters, BFSI Co-locations, Government Sites.',
    platforms: ['Precision cooling units', 'UPS battery cabinets', 'Environmental control sensors'],
    benefits: ['Stable server temperatures and airflow', 'Uninterrupted power delivery during utility failures', 'Compliance with physical datacenter facility regulations'],
    usecases: ['Hot/Cold aisle containment setups', 'Redundant UPS power layouts', 'Environmental sensor grid integrations'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Airflow Path Diagrams', 'Power Distribution Schematics', 'Environmental Alarm Matrices'],
    services: ['Facility cooling tuning', 'UPS maintenance configs', 'Environmental sensor alignments'],
    models: ['Physical Facility Operations Support'],
    coverage: 'On-site facility engineer support coverage'
  },
  {
    id: 'backup-recovery',
    name: 'Data Backup & Recovery (Backup Ecosystem Coverage)',
    code: 'SOL-13',
    Illustration: DataBackupIllustration,
    intro: 'We design secure data backup systems, immutable storage vaults, and bare-metal recovery plans to protect enterprise data assets against hardware failures and security threats.',
    techOverview: 'We configure scheduled backups, secure snapshot vaults, data encryption policies, and recovery automation pipelines across our supported backup ecosystem.',
    architecture: 'Our configurations use the 3-2-1 backup layout (3 data copies, 2 media types, 1 offsite copy). Vault settings prevent file changes to protect against ransomware threats.',
    scope: 'Backup scheduling, vault configurations, dataset recovery tests, and backup ecosystem verification.',
    businessValue: 'Secures critical data assets against ransomware deletions, supports recovery times, and assists with audit requirements.',
    deployment: 'Data audit and retention design, backup storage setup, encryption key setup, and restore verification tests.',
    industries: 'Healthcare, BFSI, Logistics, Retail, Government.',
    platforms: ['Immutable storage vaults', 'Cloud backup repositories', 'Local backup engines'],
    benefits: ['Protected storage vaults against unauthorized deletion', 'Verified restore times for host systems', 'Regulatory data retention compliance support'],
    usecases: ['Immutable backup vault configurations', 'Automated database snapshot setups', 'Host server recovery configurations'],
    timeline: 'Standard project-phased deployment plan',
    deliverables: ['Backup and Retention Policy Table', 'Encryption and Vault setup guidelines', 'Restore Verification test logs'],
    services: ['Backup strategy audits', 'Vault security tuning', 'Ecosystem compatibility checks'],
    models: ['Hybrid Backup Vault / Backup as a Service (BaaS)'],
    coverage: 'Supported Backup Ecosystem: Veritas, Veeam, Commvault, Druva, Vinchin, Acronis, Dell NetWorker'
  }
];

/* ─────────────────────────────────────────────────────────────
   Individual Solution Showcase Section Component
────────────────────────────────────────────────────────────── */
function SolutionSection({ sol, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={sol.id}
      className="solution-showcase-section"
      style={{
        padding: '8rem 0',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: isEven ? '#ffffff' : '#f8fafc',
        borderBottom: '1px solid rgba(9,97,159,0.06)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative blueprint grids */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.01, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(9,97,159,0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating connector line between sections */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(9,97,159,0.08), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="solutions-grid-layout" style={{
          display: 'grid',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* TEXT SIDE */}
          <div className="solutions-text-col" style={{
            gridRow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            order: isEven ? 1 : 2
          }}>
            <ScrollReveal variant={isEven ? 'fade-left' : 'fade-right'}>
              {/* Code badge */}
              <span style={{
                display: 'inline-block',
                background: 'rgba(9,97,159,0.08)',
                border: '1px solid rgba(9,97,159,0.2)',
                borderRadius: '100px',
                padding: '0.25rem 0.85rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'rgba(9,97,159,0.95)',
                letterSpacing: '1.5px',
                fontFamily: 'monospace',
                width: 'fit-content'
              }}>
                {sol.code}
              </span>

              {/* Title */}
              <h2 style={{
                fontSize: '2.4rem',
                fontWeight: 800,
                color: 'rgba(12,20,35,0.92)',
                letterSpacing: '-1px',
                lineHeight: 1.1,
                margin: '0.25rem 0'
              }}>
                {sol.name}
              </h2>

              {/* Editorial Content Blocks - Rich Hierarchy */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(9,97,159,0.9)', fontWeight: 700, margin: '0 0 0.4rem 0' }}>Introduction</h4>
                  <p style={{ fontSize: '1.02rem', color: 'rgba(30,40,60,0.85)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {sol.intro}
                  </p>
                </div>

                <div className="solutions-details-subgrid" style={{ display: 'grid', gap: '1.5rem', marginTop: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(30,40,60,0.5)', fontWeight: 700, margin: '0 0 0.3rem 0' }}>Technical Overview</h4>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.6, margin: 0 }}>
                      {sol.techOverview}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(30,40,60,0.5)', fontWeight: 700, margin: '0 0 0.3rem 0' }}>Architecture & Engineering</h4>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.6, margin: 0 }}>
                      {sol.architecture}
                    </p>
                  </div>
                </div>

                <div className="solutions-details-subgrid" style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(30,40,60,0.5)', fontWeight: 700, margin: '0 0 0.3rem 0' }}>Operational Scope</h4>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.6, margin: 0 }}>
                      {sol.scope}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(30,40,60,0.5)', fontWeight: 700, margin: '0 0 0.3rem 0' }}>Business Benefits</h4>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.6, margin: 0 }}>
                      {sol.businessValue}
                    </p>
                  </div>
                </div>

                {/* Why Choose This Solution Callout Box */}
                <div style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '8px',
                  background: 'rgba(9,97,159,0.03)',
                  borderLeft: '4px solid rgba(9,97,159,0.7)',
                  marginTop: '0.5rem'
                }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'rgba(9,97,159,0.95)', fontWeight: 700, margin: '0 0 0.3rem 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Why Choose This Solution
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.86rem', color: 'rgba(30,40,60,0.75)', lineHeight: 1.5 }}>
                    {sol.benefits.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Core Specs Tab Grid */}
                <div className="solutions-specs-grid" style={{
                  display: 'grid',
                  gap: '1rem',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid rgba(9,97,159,0.12)',
                  boxShadow: '0 4px 12px rgba(9,97,159,0.03)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Deployment Models</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(30,40,60,0.75)' }}>{sol.models.join(' · ')}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Technology Coverage</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(30,40,60,0.75)' }}>{sol.platforms.join(', ')}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Implementation Process</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(30,40,60,0.75)' }}>{sol.timeline}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Support Coverage</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(9,97,159,0.95)', fontWeight: 600 }}>{sol.coverage}</span>
                  </div>
                </div>

                {/* Primary Services and Industries tags */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(30,40,60,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary Services:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem' }}>
                      {sol.services.map((srv, idx) => (
                        <span key={idx} style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(9,97,159,0.05)', color: 'rgba(9,97,159,0.85)', fontSize: '0.74rem', fontWeight: 600 }}>
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(30,40,60,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Target Industries:</span>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(30,40,60,0.7)', marginLeft: '0.5rem' }}>{sol.industries}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Correct Routes */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link
                  to={`/support-desk?solution=${sol.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.6rem',
                    background: 'rgba(9,97,159,1)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(9,97,159,0.2)'
                  }}
                >
                  Discuss this Solution
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M6 2.5L9.5 6L6 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  to="/support-desk"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.6rem',
                    background: '#ffffff',
                    color: 'rgba(9,97,159,0.85)',
                    border: '1px solid rgba(9,97,159,0.2)',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Technical Specs
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* VISUAL SIDE */}
          <div className="solutions-visual-col" style={{
            gridRow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            order: isEven ? 2 : 1
          }}>
            <ScrollReveal variant={isEven ? 'fade-right' : 'fade-left'} style={{ width: '100%' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(9,97,159,0.04), 0 2px 10px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  width: '100%',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f6faff 100%)',
                  border: '1px solid rgba(9,97,159,0.12)',
                  padding: '2rem'
                }}
                className="solutions-image-container"
              >
                {/* Custom-built abstract technical SVG illustration */}
                <sol.Illustration />
                
                {/* Visual Blueprint Grid Overlay */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none',
                  backgroundImage: `
                    linear-gradient(rgba(9,97,159,0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(9,97,159,0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Solutions Page Component
────────────────────────────────────────────────────────────── */
export default function Solutions() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: 'var(--text-light-primary)' }} id="solutions-page-view">
      
      {/* ─── HERO HEADER ─── */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fafc 55%, #eef6fd 100%)',
        padding: '8rem 0 5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(9,97,159,0.1)'
      }}>
        {/* Blueprint grid backdrop */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9,97,159,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,97,159,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal variant="fade-down">
            <span style={{
              display: 'inline-block',
              background: 'rgba(9,97,159,0.08)',
              border: '1px solid rgba(9,97,159,0.2)',
              borderRadius: '100px',
              padding: '0.3rem 1.2rem',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: 'rgba(9,97,159,0.95)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              marginBottom: '1.25rem'
            }}>
              Enterprise Technology Architecture
            </span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'rgba(12,20,35,0.92)',
              marginTop: '0.5rem',
              marginBottom: '1.25rem',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}>
              Architecting Global Infrastructure
            </h1>
            <p style={{
              color: 'rgba(30,40,60,0.65)',
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.08rem',
              lineHeight: '1.75'
            }}>
              Explore INNOWORQ's enterprise solutions configurations.
              We design Tier-III compliant server environments, network security boundaries,
              and fully automated cloud deployments for global workloads.
            </p>

            {/* Quick stats strip */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}>
              {[
                { value: 13, suffix: '', label: 'Solutions Engineered' },
                { value: 9, suffix: '', label: 'Industry Sectors' },
                { value: 20, suffix: '+', label: 'OEM Tech Coverage' },
                { value: 2, suffix: '', label: 'ISO Certifications' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(9,97,159,0.12)',
                    borderRadius: '12px',
                    padding: '1.25rem 2rem',
                    textAlign: 'center',
                    minWidth: '150px',
                    boxShadow: '0 6px 15px rgba(9,97,159,0.04)'
                  }}
                >
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(9,97,159,1)', lineHeight: 1 }}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'rgba(30,40,60,0.5)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginTop: '0.4rem',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SOLUTIONS ALTERNATING SHOWCASE ─── */}
      <div style={{ position: 'relative' }}>
        {SOLUTIONS_DATA.map((sol, index) => (
          <SolutionSection key={sol.id} sol={sol} index={index} />
        ))}
      </div>

      {/* ─── FINAL CTA BLUEPRINT SECTION ─── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(9,97,159,0.07) 0%, rgba(9,97,159,0.02) 100%)',
        borderTop: '1px solid rgba(9,97,159,0.1)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Architectural blueprint grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(9,97,159,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,97,159,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'rgba(12,20,35,0.9)',
              letterSpacing: '-1px',
              marginBottom: '1rem'
            }}>
              Let's Build Your Next Enterprise Infrastructure.
            </h2>
            <p style={{
              color: 'rgba(30,40,60,0.6)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              fontSize: '1rem',
              lineHeight: 1.7
            }}>
              Our systems architects design SLA-driven workloads, consolidation roadmaps,
              and security perimeters aligned with global industry regulations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/support-desk"
                className="btn"
                style={{
                  padding: '0.85rem 2rem',
                  background: 'rgba(9,97,159,1)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(9,97,159,0.2)'
                }}
              >
                Schedule Technical Consultation
              </Link>
              <Link
                to="/support-desk"
                className="btn"
                style={{
                  padding: '0.85rem 2rem',
                  background: '#ffffff',
                  color: 'rgba(9,97,159,0.85)',
                  border: '1px solid rgba(9,97,159,0.25)',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                Contact Solutions Team
              </Link>
              <Link
                to="/partner-registration"
                className="btn"
                style={{
                  padding: '0.85rem 2rem',
                  background: 'transparent',
                  color: 'rgba(9,97,159,0.9)',
                  border: '1px solid rgba(9,97,159,0.4)',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                Become a Partner
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Responsive Styles Injection */}
      <style>{`
        .solutions-grid-layout {
          grid-template-columns: repeat(12, 1fr);
        }
        .solutions-text-col {
          grid-column: span 7;
        }
        .solutions-visual-col {
          grid-column: span 5;
        }
        .solutions-image-container {
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .solutions-details-subgrid {
          grid-template-columns: 1fr 1fr;
        }
        .solutions-specs-grid {
          grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 1024px) {
          .solutions-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .solutions-text-col {
            grid-column: span 12 !important;
            order: 2 !important;
          }
          .solutions-visual-col {
            grid-column: span 12 !important;
            order: 1 !important;
          }
          .solutions-image-container {
            height: 280px !important;
          }
          .solutions-details-subgrid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .solutions-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>

    </div>
  );
}

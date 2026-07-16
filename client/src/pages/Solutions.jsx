import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import configData from '../data/companyConfig.json';
import {
  SmartCityIllustration,
  NOCIllustration,
  TrainingIllustration,
  AutomationIllustration,
  BusinessContinuityIllustration,
  CloudIllustration,
  DCInfrastructureIllustration,
  DCNonITIllustration,
  BackupIllustration,
  DCTransformationIllustration,
  DigitalInfrastructureIllustration,
  EnterpriseManagementIllustration,
  NetworkSecurityIllustration,
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
   Expanded Solutions Content Configurations (13 Solutions)
────────────────────────────────────────────────────────────── */
const SOLUTIONS_DETAIL = [
  {
    id: 'smart-city',
    name: 'Smart City Solution',
    code: 'SOL-01',
    Illustration: SmartCityIllustration,
    intro: 'Redefining urban infrastructure through cutting-edge Smart City solutions, seamlessly integrating AI-driven automation, secure IT frameworks, and scalable cloud environments. We design, deploy, and maintain Integrated Command & Control Centers (ICCC).',
    capability: 'Our architectures ingest telemetry from millions of edge sensors, municipal grids, and environmental monitors. We configure reliable fiber-optic loops, redundant microwave links, and high-capacity storage arrays to support continuous citywide operations.',
    value: 'Improves civic response times by up to 40%, enhances public safety through proactive surveillance telemetry, and optimizes municipal utility operations by leveraging real-time data feeds.',
    infraScope: 'Unified management of urban IoT gateways, edge networking appliances, core compute nodes, municipal fiber rings, and public surveillance video walls.',
    deployment: 'High-availability active-active disaster recovery deployment utilizing localized command node clusters connected to centralized municipal datacenters.',
    useCases: [
      'Municipal Integrated Command and Control Centers (ICCC)',
      'Intelligent Traffic Management Systems (ITMS)',
      'Environmental Telemetry and Smart Lighting Systems'
    ],
    technologies: ['Cisco IoT Gateway', 'Dell PowerScale Storage', 'Fortinet FortiGate Firewall', 'IBM Watson IoT Platform'],
    benefits: ['40% Reduction in Civic Response Overhead', '99.99% Command Center Operational SLA', 'Proactive Threat Triage at Edge Gateways'],
    services: ['ICCC Integration', 'Surveillance Infrastructure Maintenance', 'Edge Security Operations'],
    models: ['Hybrid Cloud / Municipal On-Premises'],
    oems: ['Cisco', 'Dell', 'Fortinet', 'IBM'],
    industries: ['Government', 'Public Utilities', 'Urban Planning'],
    coverage: '24/7/365 L3 Engineer Dispatch & SLA Monitoring'
  },
  {
    id: 'noc',
    name: 'NOC Solution',
    code: 'SOL-02',
    Illustration: NOCIllustration,
    intro: 'Enterprise NOC setup providing 24x7 network monitoring, proactive alarm handling, incident management, and capacity planning for mission-critical IT infrastructure.',
    capability: 'Our Network Operations Centers integrate advanced observability platforms, dynamic threshold telemetry, and automated alert incident routing. We maintain continuous checks across routing tables, WAN bandwidth saturation, and active firewall logs.',
    value: 'Minimizes unplanned network downtime by up to 90%, reduces mean time to resolution (MTTR) with L3 engineer availability, and ensures stable application delivery across multi-site configurations.',
    infraScope: 'Global wide-area networks, SD-WAN fabrics, core routing switches, server virtualization hypervisors, and perimeter access-control lists.',
    deployment: 'Distributed virtual monitoring cluster nodes backed by active redundant physical NOC control rooms operating in multiple regions.',
    useCases: [
      '24/7/365 Active Enterprise Network Monitoring',
      'Real-time SLA tracking for distributed retail/branch sites',
      'Automated Incident Management and Vendor Dispatch Escalations'
    ],
    technologies: ['Microsoft System Center (SCOM)', 'Cisco Catalyst Center', 'F5 BIG-IP LTM', 'Juniper Junos Space'],
    benefits: ['90% Reduction in MTTR', 'Proactive Incident Prevention Ticketing', 'Seamless Multi-Vendor Support Coverage'],
    services: ['24/7 Network Monitoring', 'Alarm Triage & Response', 'Bandwidth Capacity Analysis'],
    models: ['Managed NOC', 'Co-Managed Hybrid Operations'],
    oems: ['Cisco', 'Juniper', 'F5', 'Microsoft'],
    industries: ['Telecom', 'BFSI', 'Logistics', 'Retail'],
    coverage: 'Guaranteed 15-Minute Critical Incident Response SLA'
  },
  {
    id: 'training',
    name: 'Training and Learning',
    code: 'SOL-03',
    Illustration: TrainingIllustration,
    intro: 'Hands-on workshops, custom curriculum design, and expert-led certification training programs in cloud, virtualization, storage, and database management.',
    capability: 'We provide structured corporate enablement programs across enterprise virtualization layers, hyperconverged stacks, hybrid cloud pipelines, and automated configuration environments.',
    value: 'Bridges critical team skill gaps, accelerates the adoption of modern hybrid architectures, and improves internal resolution capabilities for complex infrastructure challenges.',
    infraScope: 'Virtual lab environments, remote hypervisor compute pools, sandbox cloud accounts, and interactive learning management portal instances.',
    deployment: 'Cloud-hosted sandboxes and on-premises simulation labs tailored to mimic exact production topologies of enterprise clients.',
    useCases: [
      'Enterprise DevOps and Infrastructure Automation workshops',
      'Hyperconverged Infrastructure (HCI) configuration bootcamps',
      'Certified Database Administration and Storage management courses'
    ],
    technologies: ['VMware vSphere Labs', 'Red Hat OpenShift Platform', 'Ansible Playbooks', 'Nutanix HCI Sandboxes'],
    benefits: ['Accelerated DevOps Adoption Timelines', 'Increased First-Touch Resolution Metrics', 'Customized Client Environment Labs'],
    services: ['Interactive Technical Workshops', 'Custom Lab Scaffolding', 'ITIL Certification Bootcamps'],
    models: ['Remote Instructor-Led', 'On-Site Corporate Labs'],
    oems: ['VMware', 'Red Hat', 'Nutanix'],
    industries: ['Enterprise IT Teams', 'SI Corporates', 'Government Sectors'],
    coverage: 'Post-Training Support Portal Access'
  },
  {
    id: 'automation-ai',
    name: 'Automation & AI',
    code: 'SOL-04',
    Illustration: AutomationIllustration,
    intro: 'Streamlining workflows using AI-driven observability, self-healing systems, automated configurations, and script-based cloud management.',
    capability: 'We engineer automated operational pipelines using Infrastructure as Code (IaC), centralized configuration playbooks, and predictive anomaly triggers. We eliminate repetitive manual maintenance workflows across hybrid nodes.',
    value: 'Reduces operational overhead by up to 60%, eliminates manual configuration drift across server fleets, and speeds up workload delivery times from days to seconds.',
    infraScope: 'Virtual machine orchestration systems, server configurations, container platforms, cloud resource provisioning, and deployment pipelines.',
    deployment: 'Declarative GitOps engine deployment integrated with active monitoring platforms for real-time drift detection and recovery.',
    useCases: [
      'Automated Virtual Machine and Bare-Metal provisioning',
      'Zero-Touch configuration patching across distributed server fleets',
      'Self-healing system responses based on threshold monitoring alerts'
    ],
    technologies: ['Red Hat Ansible Engine', 'HashiCorp Terraform', 'Kubernetes clusters', 'Microsoft SCOM Automation'],
    benefits: ['60% Lower Configuration Overhead', 'Complete Elimination of Configuration Drift', 'Workload Deployment Accelerated by 95%'],
    services: ['Infrastructure as Code Audits', 'Automation Playbook Engineering', 'AI Observability Tuning'],
    models: ['Private GitOps Pipelines', 'Managed Hybrid Automation'],
    oems: ['Red Hat', 'Microsoft', 'Cisco'],
    industries: ['Logistics', 'BFSI', 'Manufacturing', 'Tech Sectors'],
    coverage: 'SLA-backed Automation Engine Support'
  },
  {
    id: 'business-continuity',
    name: 'Business Continuity',
    code: 'SOL-05',
    Illustration: BusinessContinuityIllustration,
    intro: 'Comprehensive disaster recovery planning, cloud-based replication setups, automated failover structures, and IT resilience audits.',
    capability: 'We architect sub-second data replication loops, automated DNS failovers, and active-active datacenter recovery clusters. We ensure zero data loss configurations for enterprise application stacks.',
    value: 'Ensures business continuity with minimal RPO and RTO parameters, guarantees compliance with regulatory uptime mandates, and builds trust with end customers during critical failures.',
    infraScope: 'Primary and secondary datacenter site nodes, SAN replication channels, virtual network configurations, and public cloud DR targets.',
    deployment: 'Multi-site active-active or active-passive topologies backed by physical replication links and automated recovery engines.',
    useCases: [
      'Sub-second Database Replication and Failover workflows',
      'Automated Virtual Machine recovery to public cloud regions',
      'IT Resilience assessments and live Disaster Recovery simulations'
    ],
    technologies: ['Veeam Availability Suite', 'Zerto Replication Platform', 'VMware Site Recovery Manager', 'Checkpoint Security Gateway'],
    benefits: ['Near-Zero Recovery Point Objectives (RPO)', 'Automated Failover for Core Workloads', 'Regulatory DR Compliance Guarantee'],
    services: ['Disaster Recovery Engineering', 'IT Resilience Audits', 'Active Replication Administration'],
    models: ['Multi-Site Active-Active', 'Disaster Recovery as a Service (DRaaS)'],
    oems: ['Veeam', 'Zerto', 'VMware', 'Checkpoint'],
    industries: ['BFSI', 'Healthcare', 'Telecom', 'Government'],
    coverage: '24/7/365 Immediate Recovery Support & Escalation'
  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    code: 'SOL-06',
    Illustration: CloudIllustration,
    intro: 'Hybrid, private, and public cloud designs, workloads migrations, Kubernetes container orchestration, and continuous cost optimization profiles.',
    capability: 'We build enterprise hybrid clouds, deploy microservice clusters, and optimize cloud resource allocations. We configure secured API gateways and reliable site-to-site VPN networks.',
    value: 'Reduces public cloud spend by up to 30% through optimization, improves product launch agility, and ensures secure workload portability across hybrid nodes.',
    infraScope: 'Multi-cloud resource nodes, virtual private clouds (VPCs), Kubernetes control planes, container registry hubs, and cloud billing systems.',
    deployment: 'Highly scalable multi-region cloud configurations connected to private datacenter infrastructure.',
    useCases: [
      'Legacy Application migration to Public Cloud providers',
      'Scalable Container Orchestration with Kubernetes clusters',
      'Continuous Cloud Cost Audits and Automated Resource Sizing'
    ],
    technologies: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Red Hat OpenShift Platform', 'VMware Cloud Director'],
    benefits: ['30% Average Cloud Resource Cost Savings', 'Workload Portability across Hybrid clouds', 'Enterprise-grade Microservices Hosting'],
    services: ['Multi-Cloud Migration', 'Kubernetes Setup & Orchestration', 'Cloud Architecture Audits'],
    models: ['Hybrid Cloud', 'Multi-Cloud', 'Private SDDC'],
    oems: ['AWS', 'Microsoft', 'Red Hat', 'VMware'],
    industries: ['Logistics', 'Retail', 'Education', 'Tech Corporates'],
    coverage: '24/7 Cloud NOC & Resource Monitoring'
  },
  {
    id: 'dc-infra',
    name: 'DC Infrastructure',
    code: 'SOL-07',
    Illustration: DCInfrastructureIllustration,
    intro: 'High-performance server, blade chassis, SAN/NAS storage, hypervisor networks, and system consolidation designs.',
    capability: 'We engineer high-density datacenter fabrics, deploy high-speed SAN/NAS arrays, configure virtual switches, and optimize blade chassis configurations to support demanding enterprise workloads.',
    value: 'Maximizes hardware compute density, lowers datacenter footprint and energy costs, and ensures high availability of central databases.',
    infraScope: 'High-performance blade enclosures, SAN/NAS arrays, hypervisor fabrics, virtual networks, and redundant power controllers.',
    deployment: 'Tier-III and Tier-IV compliant high-density server configurations with active-active redundant power tracks.',
    useCases: [
      'High-Density Blade Server deployment and Consolidation',
      'Fibre Channel SAN deployment for high-transaction databases',
      'Software-defined storage scaling with high-capacity NAS units'
    ],
    technologies: ['Dell PowerEdge Systems', 'NetApp ONTAP Storage', 'IBM Power Systems', 'VMware vSphere Hypervisor'],
    benefits: ['Increased Compute Density per Rack', 'Sub-millisecond Storage I/O Latency', 'Consolidated Server Footprint Management'],
    services: ['Blade Chassis Deployment', 'SAN Storage Architecture', 'Hypervisor Virtualization Tuning'],
    models: ['On-Premises Enterprise DC', 'Colocation Deployments'],
    oems: ['Dell', 'NetApp', 'IBM', 'VMware'],
    industries: ['BFSI', 'Telecom', 'Logistics', 'Government'],
    coverage: 'SLA-backed hardware support and L3 dispatch'
  },
  {
    id: 'dc-non-it',
    name: 'DC Non-IT',
    code: 'SOL-08',
    Illustration: DCNonITIllustration,
    intro: 'End-to-end facility management including power distribution systems, precision cooling, HVAC, fire suppression, CCTV, and physical access control.',
    capability: 'We design and maintain physical datacenter infrastructure environments, including precision cooling units, uninterruptible power systems (UPS), and automated fire suppression systems.',
    value: 'Guarantees physical safety and cooling stability for critical server nodes, prevents hardware degradation due to heat, and meets environmental safety regulations.',
    infraScope: 'Precision cooling (HVAC) systems, central UPS batteries, backup diesel generators, fire suppression zones, and biometric access networks.',
    deployment: 'N+1 or 2N redundant physical datacenter facility architectures designed to prevent single-point utility failures.',
    useCases: [
      'Precision Hot/Cold Aisle containment cooling layouts',
      'Dual-Path Utility feeds backed by redundant UPS batteries',
      'Biometric access tracking and environmental monitoring'
    ],
    technologies: ['Schneider APC Cooling', 'Emerson UPS Systems', 'FM-200 Fire Suppression', 'Cisco Physical Security'],
    benefits: ['Stable Environmental Temperature Controls', 'Continuous Power Delivery during Outages', 'Compliance with Physical Datacenter Standards'],
    services: ['Facility Design Consulting', 'UPS & Generator Maintenance', 'Environmental Monitoring Tuning'],
    models: ['Physical Facility Maintenance'],
    oems: ['Schneider', 'Emerson', 'Cisco'],
    industries: ['Datacenter Operators', 'BFSI Co-locations', 'Government Nodes'],
    coverage: '24/7 On-Site Facility Engineer Coverage'
  },
  {
    id: 'backup-recovery',
    name: 'Data Backup & Recovery',
    code: 'SOL-09',
    Illustration: BackupIllustration,
    intro: 'Automated data protection, backup schedules, retention compliance, catalog recoveries, and bare-metal restores.',
    capability: 'We configure daily automated snapshots, immutable backup vaults, and bare-metal recovery plans. We ensure all backups are encrypted and compliant with regulatory standards.',
    value: 'Secures enterprise data assets against ransomware attacks, guarantees rapid recovery during software corruption, and satisfies compliance audits.',
    infraScope: 'Immutable storage vaults, cloud backup repositories, local backup appliances, and recovery automation software.',
    deployment: '3-2-1 backup topology deployment (3 copies of data, 2 different media types, 1 offsite location).',
    useCases: [
      'Immutable Ransomware-protected backup storage vaults',
      'Daily Automated Database and Hypervisor snapshots',
      'Bare-Metal recovery tests for mission-critical servers'
    ],
    technologies: ['Veeam Backup & Replication', 'Veritas NetBackup', 'Vinchin Backup Platform', 'Dell PowerProtect DD'],
    benefits: ['Total Protection Against Ransomware Deletions', 'Reliable Bare-Metal Restore Timelines', 'Compliance with Data Retention Regulations'],
    services: ['Backup Strategy Auditing', 'Vault Encryption Configuration', 'Managed Recovery Runs'],
    models: ['Hybrid Backup Vault', 'Backup as a Service (BaaS)'],
    oems: ['Veeam', 'Veritas', 'Vinchin', 'Dell'],
    industries: ['Healthcare', 'BFSI', 'Logistics', 'Retail'],
    coverage: '24/7/365 Backup Recovery Helpdesk Support'
  },
  {
    id: 'dc-transformation',
    name: 'Datacentre Solutions & Transformation',
    code: 'SOL-10',
    Illustration: DCTransformationIllustration,
    intro: 'Transforming legacy environments into highly virtualized, cloud-integrated, software-defined datacenter ecosystems.',
    capability: 'We migrate legacy physical hardware environments into software-defined datacenter (SDDC) architectures. We consolidate server footprints and deploy hyperconverged clusters.',
    value: 'Reduces datacenter operating costs by up to 50%, improves resource utilization across server clusters, and simplifies central management workflows.',
    infraScope: 'Legacy server racks, hyperconverged infrastructure (HCI) nodes, virtual storage fabrics, and centralized management software.',
    deployment: 'Phased hot-migration approach designed to transition production workloads without service interruption.',
    useCases: [
      'Physical-to-Virtual (P2V) infrastructure consolidation',
      'Hyperconverged Infrastructure (HCI) cluster deployments',
      'Legacy Datacenter decommissioning and Cloud migration'
    ],
    technologies: ['Nutanix Cloud Platform', 'VMware vCloud Suite', 'Red Hat OpenShift Platform', 'Dell VxRail HCI'],
    benefits: ['50% Lower Physical Footprint & Energy Costs', 'Unified Resource Dashboard Control', 'Zero-Downtime Workload Migrations'],
    services: ['Consolidation Consulting', 'HCI Cluster Engineering', 'Datacenter Migration Runs'],
    models: ['Software-Defined Datacenter (SDDC)'],
    oems: ['Nutanix', 'VMware', 'Red Hat', 'Dell'],
    industries: ['BFSI', 'Manufacturing', 'Telecom', 'Education'],
    coverage: 'Post-Migration Optimization & Support SLA'
  },
  {
    id: 'digital-infra',
    name: 'Digital Infrastructure',
    code: 'SOL-11',
    Illustration: DigitalInfrastructureIllustration,
    intro: 'Modern digital networking, high-speed fiber routing, structured cabling, routing table alignments, and WAN optimizations.',
    capability: 'We install high-capacity fiber loops, configure core network switches, optimize WAN routing paths, and deploy high-availability routing tables to support enterprise communications.',
    value: 'Minimizes network latency across office branches, increases bandwidth capacities, and ensures stable voice and data communications.',
    infraScope: 'Core switches, fiber patch panels, structured copper cabling tracks, WAN routers, and edge gateway appliances.',
    deployment: 'High-availability structured ring networks configured to prevent communication failures during hardware outages.',
    useCases: [
      'High-Speed Core Network Fiber Loop installation',
      'Multi-site WAN Optimization and Routing Table alignment',
      'Structured Copper and Fiber cabling for office sites'
    ],
    technologies: ['Cisco Catalyst Switches', 'Juniper MX Routers', 'D-Link Managed Switches', 'Fortinet WAN Optimization'],
    benefits: ['Near-Zero Latency Branch Connections', 'High-Bandwidth Capacity Backbone', 'Minimized Single-Point Cable Failures'],
    services: ['Structured Cabling Deployments', 'Routing Table Optimization', 'WAN Ring Engineering'],
    models: ['Structured Local Loop Network'],
    oems: ['Cisco', 'Juniper', 'D-Link', 'Fortinet'],
    industries: ['Telecom', 'Manufacturing', 'Logistics', 'Retail'],
    coverage: 'On-site Fiber Diagnostic Dispatch SLA'
  },
  {
    id: 'enterprise-management',
    name: 'Enterprise Management Solution',
    code: 'SOL-12',
    Illustration: EnterpriseManagementIllustration,
    intro: 'Consolidated IT infrastructure dashboarding, service desk systems, network observability, and ERP support configurations.',
    capability: 'We integrate unified monitoring dashboards, configure automated service ticketing rules, and provide support configurations for core enterprise database networks.',
    value: 'Improves visibility across all IT assets, reduces time spent on incident troubleshooting, and ensures stable ERP database operations.',
    infraScope: 'Central management databases, ITSM platforms, infrastructure monitoring systems, and application servers.',
    deployment: 'Unified cloud-connected dashboard node integrated with local server monitoring agents.',
    useCases: [
      'Unified IT Infrastructure Dashboard integration',
      'ITSM Service Desk and Ticket routing automation',
      'SAP Basis HANA Database performance optimization'
    ],
    technologies: ['Microsoft System Center (SCOM)', 'Oracle Database Management', 'SAP Basis SAP NetWeaver', 'IBM Systems Director'],
    benefits: ['Unified Infrastructure Visual Controls', 'Streamlined IT Ticket Management workflows', 'Optimized SAP ERP Core performance'],
    services: ['ITSM Flow Customization', 'Database Health Tuning', 'SAP Basis Administration support'],
    models: ['Central SaaS / On-Prem Management Console'],
    oems: ['Microsoft', 'Oracle', 'IBM'],
    industries: ['Logistics', 'BFSI', 'Manufacturing', 'Retail'],
    coverage: '24/7/365 Database Admin & ITSM Support SLA'
  },
  {
    id: 'network-security',
    name: 'Network Infrastructure & Security',
    code: 'SOL-13',
    Illustration: NetworkSecurityIllustration,
    intro: 'Perimeter defense systems, firewall configurations, VLAN setups, access controller deployments, and Cisco/Juniper routing table maintenance.',
    capability: 'We deploy enterprise next-generation firewalls (NGFW), configure perimeter access-control lists, establish secure VLAN boundaries, and configure secure SD-WAN connections.',
    value: 'Protects enterprise networks from cyber threats, secures sensitive communications, and guarantees compliance with industry security standards.',
    infraScope: 'Perimeter next-generation firewalls, secure SD-WAN routers, network switches, and wireless access controllers.',
    deployment: 'Multi-layered security zones (DMZ) with active packet inspection at all ingress points.',
    useCases: [
      'Next-Generation Firewall deployment and Rules tuning',
      'Secure SD-WAN setup for distributed office locations',
      'Network Segmentation using secure VLAN boundaries'
    ],
    technologies: ['Checkpoint Quantum Firewalls', 'Fortinet FortiGate Secure SD-WAN', 'F5 Advanced WAF', 'Cisco Catalyst Security'],
    benefits: ['Total Perimeter Defense against Network Threats', 'Secure WAN Traffic encryption loops', 'Granular Access-Control at Network boundaries'],
    services: ['Firewall Policies configuration', 'Secure SD-WAN Engineering', 'WAF Protection tuning'],
    models: ['Zero-Trust Secure Perimeter'],
    oems: ['Checkpoint', 'Fortinet', 'F5', 'Cisco'],
    industries: ['BFSI', 'Healthcare', 'Government', 'Telecom'],
    coverage: '24/7/365 Security Incident Response SLA'
  }
];

/* ─────────────────────────────────────────────────────────────
   Individual Solution Showcase Section Component
────────────────────────────────────────────────────────────── */
function SolutionSection({ sol, index }) {
  const [activeTab, setActiveTab] = useState('overview');
  const isEven = index % 2 === 0;

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const visualVariants = {
    hidden: { opacity: 0, x: isEven ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id={sol.id}
      style={{
        padding: '6rem 0',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: isEven ? '#ffffff' : '#f8fafc',
        borderBottom: '1px solid rgba(9,97,159,0.06)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative blueprint accents */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(9,97,159,0.5) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* TEXT SIDE (Cols: 1-6 if even, 7-12 if odd) */}
          <div style={{
            gridColumn: isEven ? '1 / 7' : '7 / 13',
            gridRow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
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
                letterSpacing: '1px',
                fontFamily: 'monospace',
                width: 'fit-content'
              }}>
                {sol.code}
              </span>

              {/* Title */}
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'rgba(12,20,35,0.9)',
                letterSpacing: '-1px',
                lineHeight: 1.15,
                margin: '0.5rem 0'
              }}>
                {sol.name}
              </h2>

              {/* Editorial Content Blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ fontSize: '1.02rem', fontWeight: 600, color: 'rgba(9,97,159,0.85)', lineHeight: 1.6, margin: 0 }}>
                  {sol.intro}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: 'rgba(12,20,35,0.8)' }}>Enterprise Capability:</strong> {sol.capability}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'rgba(30,40,60,0.7)', lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: 'rgba(12,20,35,0.8)' }}>Business Value:</strong> {sol.value}
                </p>
              </div>

              {/* Custom Editorial Info Tabs */}
              <div style={{
                marginTop: '1.25rem',
                border: '1px solid rgba(9,97,159,0.15)',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}>
                {/* Tab headers */}
                <div style={{
                  display: 'flex',
                  background: 'rgba(9,97,159,0.03)',
                  borderBottom: '1px solid rgba(9,97,159,0.1)'
                }}>
                  {[
                    { id: 'overview', label: 'Tech Scope' },
                    { id: 'deployment', label: 'Use Cases' },
                    { id: 'benefits', label: 'Specs' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        flex: 1,
                        padding: '0.65rem 1rem',
                        border: 'none',
                        background: activeTab === tab.id ? '#ffffff' : 'transparent',
                        borderRight: '1px solid rgba(9,97,159,0.08)',
                        color: activeTab === tab.id ? 'rgba(9,97,159,0.9)' : 'rgba(30,40,60,0.5)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        outline: 'none'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab body */}
                <div style={{ padding: '1rem', minHeight: '120px' }}>
                  {activeTab === 'overview' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
                      <div>
                        <strong style={{ color: 'rgba(12,20,35,0.8)' }}>Infrastructure Scope:</strong>
                        <span style={{ color: 'rgba(30,40,60,0.7)', marginLeft: '0.4rem' }}>{sol.infraScope}</span>
                      </div>
                      <div>
                        <strong style={{ color: 'rgba(12,20,35,0.8)' }}>Supported Technologies:</strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
                          {sol.technologies.map((t, idx) => (
                            <span key={idx} style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(9,97,159,0.05)', color: 'rgba(9,97,159,0.85)', fontSize: '0.72rem', fontWeight: 600 }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'deployment' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                      <strong style={{ color: 'rgba(12,20,35,0.8)' }}>Typical Enterprise Deployments:</strong>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'rgba(30,40,60,0.7)', lineHeight: 1.5 }}>
                        {sol.useCases.map((uc, idx) => (
                          <li key={idx} style={{ marginBottom: '0.25rem' }}>{uc}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'benefits' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
                      <div>
                        <strong style={{ color: 'rgba(12,20,35,0.8)' }}>Operational Metrics:</strong>
                        <ul style={{ paddingLeft: '1.2rem', margin: '0.3rem 0 0', color: 'rgba(30,40,60,0.7)', lineHeight: 1.5 }}>
                          {sol.benefits.map((b, idx) => (
                            <li key={idx} style={{ marginBottom: '0.2rem' }}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '0.5rem', marginTop: '0.3rem' }}>
                        <strong style={{ color: 'rgba(12,20,35,0.8)' }}>SLA Coverage:</strong>
                        <span style={{ color: 'rgba(9,97,159,0.95)', fontWeight: 600, marginLeft: '0.4rem', fontFamily: 'monospace' }}>{sol.coverage}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Technical Info Details Panel */}
              <div style={{
                marginTop: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(9,97,159,0.03) 0%, rgba(9,97,159,0) 100%)',
                border: '1px solid rgba(9,97,159,0.08)'
              }}>
                <div style={{ fontSize: '0.78rem' }}>
                  <div style={{ fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', fontSize: '0.68rem', letterSpacing: '0.5px' }}>Primary Services</div>
                  <div style={{ color: 'rgba(30,40,60,0.7)', marginTop: '0.15rem' }}>{sol.services.join(' · ')}</div>
                </div>
                <div style={{ fontSize: '0.78rem' }}>
                  <div style={{ fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', fontSize: '0.68rem', letterSpacing: '0.5px' }}>Deployment Model</div>
                  <div style={{ color: 'rgba(30,40,60,0.7)', marginTop: '0.15rem' }}>{sol.models.join(' · ')}</div>
                </div>
                <div style={{ fontSize: '0.78rem' }}>
                  <div style={{ fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', fontSize: '0.68rem', letterSpacing: '0.5px' }}>Supported OEMs</div>
                  <div style={{ color: 'rgba(30,40,60,0.7)', marginTop: '0.15rem' }}>{sol.oems.join(', ')}</div>
                </div>
                <div style={{ fontSize: '0.78rem' }}>
                  <div style={{ fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', fontSize: '0.68rem', letterSpacing: '0.5px' }}>Target Industries</div>
                  <div style={{ color: 'rgba(30,40,60,0.7)', marginTop: '0.15rem' }}>{sol.industries.join(', ')}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.35rem',
                    background: 'rgba(9,97,159,1)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(9,97,159,0.2)'
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
                    padding: '0.65rem 1.35rem',
                    background: '#ffffff',
                    color: 'rgba(9,97,159,0.85)',
                    border: '1px solid rgba(9,97,159,0.2)',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Technical Specs
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* VISUAL SIDE (Cols: 7-12 if even, 1-6 if odd) */}
          <div style={{
            gridColumn: isEven ? '7 / 13' : '1 / 7',
            gridRow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <ScrollReveal variant={isEven ? 'fade-right' : 'fade-left'} style={{ width: '100%', maxWidth: '440px' }}>
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #ffffff 0%, #f1f8fe 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(9,97,159,0.12)',
                boxShadow: '0 20px 40px rgba(9,97,159,0.06), 0 2px 10px rgba(0,0,0,0.02)',
                padding: '1.5rem',
                overflow: 'hidden'
              }}>
                {/* Decorative blueprint grids */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none',
                  backgroundImage: `
                    linear-gradient(rgba(9,97,159,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(9,97,159,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
                
                {/* Embedded SVG Illustration */}
                <sol.Illustration isHovered={true} />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Solutions Page Layout Redesign
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
        {/* Animated blueprint grid backdrop */}
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
              Enterprise Solutions Portfolio
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
              Discover INNOWORQ's 13 official enterprise solutions configurations.
              We design Tier-III compliant server environments, network security boundaries,
              and fully automated cloud deployments.
            </p>

            {/* Quick stats strip with anim count */}
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
                { value: 20, suffix: '+', label: 'OEM Tech Partners' },
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
        {SOLUTIONS_DETAIL.map((sol, index) => (
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
                to="/contact"
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
    </div>
  );
}

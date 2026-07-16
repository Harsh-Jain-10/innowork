import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

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
   13 Enterprise Solutions Data Configurations
────────────────────────────────────────────────────────────── */
const SOLUTIONS_DATA = [
  {
    id: 'smart-city',
    name: 'Smart City Solution',
    code: 'SOL-01',
    img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80',
    intro: 'INNOWORQ designs and integrates scalable Smart City architectures that unify municipal services, civic administration, and real-time public safety. We specialize in building Tier-III Integrated Command & Control Centers (ICCC) that serve as the centralized intelligence hub for metropolitan environments.',
    techOverview: 'The backbone of our Smart City topology relies on high-throughput fiber loops and distributed edge computing nodes. By deploying IoT gateways at municipal intersections, civic buildings, and utility hubs, we facilitate the ingestion of environmental, traffic, and security telemetry with sub-millisecond transmission latency.',
    architecture: 'Our architecture separates edge sensor networks, core transmission paths, and centralized visualization planes. Edge gateways are hardened utilizing Next-Generation Firewalls (NGFW) to prevent lateral security breaches. Central datacenters use redundant SAN storage stacks and clustered compute grids to maintain an active-active high-availability environment.',
    scope: 'Unified management of urban IoT networks, public video surveillance matrices, civic network backbones, municipal wireless distribution, and public command center facilities.',
    businessValue: 'By unifying civic telemetry, municipal authorities experience up to a 40% reduction in response time during emergency dispatches. Centralized management minimizes administrative overhead, lowers utility distribution costs, and enhances municipal compliance parameters.',
    deployment: 'Phase-1: Topological assessment and municipal fiber loop planning. Phase-2: Local command center setup, compute node deployment, and backup power integration. Phase-3: Edge sensor configuration, gateway secure alignments, and centralized dashboard tuning.',
    industries: 'Government, Civic Administration, Public Utilities, Municipal Transit.',
    oems: ['Cisco (IoT Gateways)', 'Dell (Storage Clusters)', 'Fortinet (Perimeter NGFW)', 'IBM (Cognitive Telemetry)'],
    benefits: ['40% Improvement in Civic Response Uptime', '99.99% Central ICCC Operational Availability', 'Hardened Edge Security Perimeter'],
    usecases: ['Municipal ICCC Deployments', 'Intelligent Traffic Management (ITMS)', 'Utility Sensor Grid Integration'],
    timeline: '12 - 16 Weeks Deployment Cycle',
    deliverables: ['Custom ICCC Architectural Layout', 'Edge Gateway Security Configuration Map', 'Centralized Civic Observability Dashboard'],
    services: ['ICCC Integration', 'Edge Network Hardening', 'Telemetry Ingestion Tuning'],
    models: ['Municipal Private Cloud / Colocation Hybrid'],
    coverage: '24/7/365 L3 Engineer Dispatch & Real-Time Monitoring'
  },
  {
    id: 'noc',
    name: 'NOC Solution',
    code: 'SOL-02',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    intro: 'Our Network Operations Center (NOC) designs establish robust monitoring perimeters that continuously evaluate network health, server utilization, and database availability. We build secure, high-performance monitoring centers that protect your core workflows.',
    techOverview: 'We deploy proactive telemetry probes, dynamic alarm routing engines, and centralized observability consoles. Our architectures monitor WAN interface saturation, core routing tables, system memory allocations, and firewall access-control lists.',
    architecture: 'Operating on a distributed model, our monitoring nodes feed health metadata to centralized databases. Redundant physical NOC environments operate in multiple geographical zones, ensuring continuous monitoring availability even during localized utility outages.',
    scope: 'Active remote monitoring of WAN/LAN routers, SD-WAN infrastructure, server virtualization clusters, hypervisors, and security perimeters.',
    businessValue: 'Transitioning to active NOC oversight minimizes unplanned network downtime by up to 90%. Proactive incident detection reduces the Mean Time to Resolution (MTTR) from hours to minutes, preserving service availability for end-users.',
    deployment: 'Phase-1: Integration of telemetry probes into active routers and switches. Phase-2: Threshold configuration, alarm classification, and escalation routing. Phase-3: Live simulation testing and continuous dashboard calibration.',
    industries: 'Telecom, BFSI, Logistics, Retail, Healthcare.',
    oems: ['Cisco (Catalyst Center)', 'Juniper (Junos Space)', 'F5 (BIG-IP telemetry)', 'Microsoft (SCOM System)'],
    benefits: ['90% Reduction in Critical Downtime Events', '15-Minute Critical Incident Dispatch SLA', 'Unified Multi-Vendor Telemetry View'],
    usecases: ['Global WAN Observability Networks', 'Retail Branch WAN Monitoring', 'Automated Incident Ticket Routing Systems'],
    timeline: '4 - 6 Weeks Configuration Cycle',
    deliverables: ['Unified Monitoring Console Layout', 'Escalation Protocol Roadmap', 'Active Probing Configuration Scripts'],
    services: ['NOC System Integration', 'Threshold Tuning', 'Alarm Routing Engineering'],
    models: ['Dedicated Managed NOC / Co-Managed Integration'],
    coverage: 'Guaranteed 15-Minute Critical Incident Triage SLA'
  },
  {
    id: 'training',
    name: 'Training and Learning',
    code: 'SOL-03',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    intro: 'INNOWORQ designs and delivers comprehensive IT training curriculum programs led by certified engineers. We build custom sandbox labs that allow client operations teams to simulate production topologies in a controlled, risk-free environment.',
    techOverview: 'Our training platform utilizes remote hypervisor pools to host custom lab topologies. Students access sandboxes configured with enterprise routing rules, virtualization clusters, database configurations, and automation engines.',
    architecture: 'We construct virtual lab nodes separated from production segments. Our platform dynamically provisions server instances per student, allowing hands-on execution of virtualization console actions, network setups, and configuration scripting.',
    scope: 'Custom IT training workshops, vendor-certified curriculum design, secure laboratory hosting, and student capability certification pipelines.',
    businessValue: 'By building specialized engineering capabilities internally, enterprises reduce their dependence on external contractors, lower incident recurrence through better triage, and accelerate the adoption of DevOps technologies.',
    deployment: 'Phase-1: Capabilities assessment and custom syllabus design. Phase-2: Virtual sandbox lab setup mirroring production topography. Phase-3: Guided instructor execution and final verification testing.',
    industries: 'Enterprise IT Departments, Government Entities, Telecom Networks, SI Corporates.',
    oems: ['VMware (Virtualization Labs)', 'Red Hat (OpenShift Sandbox)', 'Nutanix (HCI Clusters)'],
    benefits: ['Accelerated Automation Adoption', 'Lower Incident Recurrence Rates', 'Risk-Free Infrastructure Sandbox Labs'],
    usecases: ['Internal IT Skills Workshops', 'HCI Operations Onboarding', 'DevOps & GitOps Transformation Camps'],
    timeline: '2 - 4 Weeks Custom Scaffolding',
    deliverables: ['Custom Interactive Syllabus', 'Dedicated Remote Lab Sandboxes', 'Student Performance Analytics Reports'],
    services: ['Curriculum Engineering', 'Lab Scaffolding', 'Technical Workshop Delivery'],
    models: ['Instructor-Led Virtual / On-Site Physical Labs'],
    coverage: 'Post-Training Laboratory Support SLA'
  },
  {
    id: 'automation-ai',
    name: 'Automation & AI',
    code: 'SOL-04',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    intro: 'We eliminate manual IT operations by developing automation pipelines, self-healing system configurations, and automated resource orchestration triggers. We transition infrastructure fleets to declarative GitOps models.',
    techOverview: 'Our automation setups leverage Infrastructure as Code (IaC) templates, central configuration playbooks, and automated monitoring triggers. We implement centralized pipelines that audit config drift and apply corrective configurations.',
    architecture: 'Our architecture integrates configuration control engines with local system managers. Playbook triggers are managed through secure version control systems, ensuring all infrastructure modifications are logged, approved, and auditable.',
    scope: 'Automated bare-metal provision setups, network switch configurations, OS patch deployments, and automated failover actions.',
    businessValue: 'Automating operational tasks reduces manual configuration mistakes by 99% and lowers overall support overhead by up to 60%. Infrastructure scaling changes are completed in seconds rather than days.',
    deployment: 'Phase-1: Assessment of manual workflow pipelines and drift patterns. Phase-2: Infrastructure as Code script design and sandbox dry-runs. Phase-3: Production pipeline integration and auto-healing setup.',
    industries: 'Logistics, BFSI, Manufacturing, Technology Sectors.',
    oems: ['Red Hat (Ansible Automation)', 'HashiCorp (Terraform Engine)', 'Microsoft (System Center Automation)'],
    benefits: ['60% Reduction in Manual Task Overhead', 'Zero Configuration Drift across Server Fleets', 'Deployment Workflows Accelerated by 95%'],
    usecases: ['Automated Server Provisioning Pipelines', 'Automated Patch Deployment Systems', 'Predictive Self-Healing Storage Workloads'],
    timeline: '6 - 10 Weeks Implementation Cycle',
    deliverables: ['Approved Terraform/Ansible Code Library', 'Configuration Drift Observability Dashboard', 'Automated Triage Incident Maps'],
    services: ['IaC Architecture Design', 'Workflow Automation Engineering', 'GitOps Engine Integration'],
    models: ['Private GitOps Pipelines / Multi-Cloud Orchestration'],
    coverage: 'SLA-backed Automation Engine Support'
  },
  {
    id: 'business-continuity',
    name: 'Business Continuity',
    code: 'SOL-05',
    img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=80',
    intro: 'INNOWORQ designs and implements high-availability disaster recovery architectures that protect your business against data loss and utility interruptions. We deliver zero-data-loss topologies for critical database stacks.',
    techOverview: 'We configure active replication links, redundant storage systems, automated failover controls, and secure virtualization environments. Our setups monitor heartbeat signals across datacenters and execute failover scripts.',
    architecture: 'Our disaster recovery setups connect primary datacenters to secondary locations using secure replication links. Real-time storage block replication ensures data remains identical, while automated DNS controls redirect user traffic during primary site failures.',
    scope: 'Disaster recovery planning, sub-second storage replication, automated workload failover, and regulatory compliance audits.',
    businessValue: 'Guarantees business survival during hardware failures, utility outages, or cyber attacks. Minimizes financial losses from downtime and ensures compliance with strict regulatory uptime mandates.',
    deployment: 'Phase-1: Analysis of Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO). Phase-2: Setup of data replication links and backup secondary nodes. Phase-3: Automated failover testing and compliance certification.',
    industries: 'BFSI, Healthcare, Telecom, Government Sector.',
    oems: ['Veeam (Availability Suite)', 'Zerto (Real-Time Replication)', 'VMware (Site Recovery Manager)', 'Checkpoint (Security Perimeter)'],
    benefits: ['Near-Zero Recovery Point Objectives (RPO)', 'Automated Failover for Core Databases', 'Regulatory DR Compliance Guarantee'],
    usecases: ['Sub-Second Database DR Synchronizations', 'Automated VM Cloud Failovers', 'Active-Active Datacenter Disaster Recovery'],
    timeline: '8 - 12 Weeks Implementation Cycle',
    deliverables: ['Disaster Recovery Plan (DRP) Manual', 'Replication Link Bandwidth Map', 'Automated Failover Test Logs'],
    services: ['Disaster Recovery Engineering', 'IT Resilience Audits', 'Active Replication Administration'],
    models: ['Active-Active Datacenter / Hybrid DRaaS'],
    coverage: '24/7/365 Immediate Recovery Support & Escalation'
  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    code: 'SOL-06',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    intro: 'We design and build secure multi-cloud architectures, implement container orchestration systems, and optimize public cloud workloads. We ensure secure connections between private datacenters and cloud platforms.',
    techOverview: 'We configure secure VPC networks, container clusters, API gateways, database replication engines, and cloud optimization rules. Our setups trace database response times and adjust cloud resources automatically.',
    architecture: 'Our multi-cloud setups utilize secure network connections to bridge on-premises databases with public cloud platforms (AWS/Azure). Container platforms ensure workloads remain portable across different clouds, while global load balancing distributes incoming traffic.',
    scope: 'Cloud migration planning, Kubernetes cluster management, container pipeline setup, and cost optimization auditing.',
    businessValue: 'Reduces public cloud spend by up to 30% through resource optimization. Accelerates product development speeds and provides secure scalability during peak traffic windows.',
    deployment: 'Phase-1: Analysis of current server workloads and cloud compatibility. Phase-2: VPC architecture design, database migration, and cluster setup. Phase-3: Load balancing configuration, security audits, and billing configuration.',
    industries: 'Logistics, Retail, Education, Enterprise Tech Corporates.',
    oems: ['AWS (Public Cloud Infrastructure)', 'Microsoft (Azure Cloud)', 'Red Hat (OpenShift Containers)', 'VMware (Cloud Director)'],
    benefits: ['30% Average Cloud Resource Cost Savings', 'Workload Portability across Hybrid Clouds', 'Scalable Containerized Web Applications'],
    usecases: ['Legacy Application Cloud Migrations', 'Enterprise Kubernetes Platform setups', 'Workload Cost Optimization Audits'],
    timeline: '10 - 14 Weeks Deployment Cycle',
    deliverables: ['Cloud Architecture Topology Map', 'Cost Optimization Recommendation Plan', 'Security Audit and Encryption Keys'],
    services: ['Multi-Cloud Migration', 'Kubernetes Setup & Orchestration', 'Cloud Architecture Audits'],
    models: ['Hybrid Cloud / Multi-Cloud / Private SDDC'],
    coverage: '24/7 Cloud NOC & Resource Monitoring'
  },
  {
    id: 'dc-infra',
    name: 'DC Infrastructure',
    code: 'SOL-07',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    intro: 'INNOWORQ designs and deploys high-performance server, blade chassis, SAN/NAS storage, hypervisor networks, and system consolidation configurations.',
    techOverview: 'We configure high-density blade chassis, SAN switches, fibre channel cards, and hypervisor clusters. Our installations optimize data flow between storage nodes and processing clusters.',
    architecture: 'Our designs integrate modular blade servers with high-speed SAN/NAS arrays. Redundant hypervisors host virtual machines, while dual fibre channel loops prevent path failures between storage units and compute clusters.',
    scope: 'Server deployments, SAN design, hypervisor installation, storage consolidation, and hardware support.',
    businessValue: 'Lowers energy bills and space requirements by consolidating hardware. High-speed storage loops ensure databases operate with minimal latency.',
    deployment: 'Phase-1: Performance analysis and chassis space allocation. Phase-2: Blade configuration, storage SAN setup, and hypervisor installation. Phase-3: VM migrations and performance validation.',
    industries: 'BFSI, Telecom, Logistics, Government.',
    oems: ['Dell (PowerEdge Blade Servers)', 'NetApp (ONTAP Storage)', 'IBM (Power Systems)', 'VMware (vSphere Hypervisor)'],
    benefits: ['Increased Compute Density per Rack Space', 'Sub-millisecond Storage I/O Latency', 'Consolidated Server Footprint Management'],
    usecases: ['High-Density Server Consolidations', 'Fibre Channel SAN Implementations', 'VMware Enterprise Virtualization setups'],
    timeline: '6 - 8 Weeks Implementation Cycle',
    deliverables: ['Server Rack Integration Diagram', 'SAN Path Configuration Layout', 'Hypervisor Consolidation Report'],
    services: ['Blade Chassis Deployment', 'SAN Storage Architecture', 'Hypervisor Virtualization Tuning'],
    models: ['On-Premises Enterprise DC / Colocation Deployments'],
    coverage: 'SLA-backed hardware support and L3 dispatch'
  },
  {
    id: 'dc-non-it',
    name: 'DC Non-IT',
    code: 'SOL-08',
    img: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=900&q=80',
    intro: 'We design and maintain physical datacenter infrastructure environments, including precision cooling units, uninterruptible power systems (UPS), and automated fire suppression systems.',
    techOverview: 'We configure HVAC cooling units, hot/cold aisle containments, central UPS battery grids, emergency generators, and FM-200 fire suppression controls.',
    architecture: 'Our physical designs use N+1 or 2N redundancy pathways. Multiple power feeds connect server racks to separate UPS batteries, while containment layouts channel hot air away from hardware to prevent hotspots.',
    scope: 'Precision cooling tuning, UPS management, generator setups, fire suppression configurations, and security tracking.',
    businessValue: 'Protects expensive hardware investments from temperature spikes and utility failures. Prevents downtime caused by local power grid drops.',
    deployment: 'Phase-1: Heat load calculation and air flow design. Phase-2: Installation of cooling ducts, UPS arrays, and generators. Phase-3: Integration of monitoring systems and emergency tests.',
    industries: 'Datacenter Operators, BFSI Co-locations, Government Sites.',
    oems: ['Schneider (APC Cooling)', 'Emerson (UPS Systems)', 'Cisco (Physical Security)'],
    benefits: ['Stable Environmental Temperature Controls', 'Continuous Power Delivery during Outages', 'Compliance with Physical Datacenter Standards'],
    usecases: ['Hot/Cold Aisle Containment Coolings', 'Dual-Path Utility Power feeds', 'Biometric physical security monitoring'],
    timeline: '10 - 14 Weeks Construction Cycle',
    deliverables: ['Airflow Dynamics Layout Map', 'Power Distribution Schematic', 'Environmental Alarm Integration Matrix'],
    services: ['Facility Design Consulting', 'UPS & Generator Maintenance', 'Environmental Monitoring Tuning'],
    models: ['Physical Facility Maintenance'],
    coverage: '24/7 On-Site Facility Engineer Coverage'
  },
  {
    id: 'backup-recovery',
    name: 'Data Backup & Recovery',
    code: 'SOL-09',
    img: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=900&q=80',
    intro: 'We engineer automated data backup configurations, secure snapshot vaults, and bare-metal recovery plans. We protect corporate data assets against hardware failures and security threats.',
    techOverview: 'We configure backup replication jobs, immutable storage systems, backup vault access controls, and restore automation pipelines.',
    architecture: 'Our designs use the 3-2-1 backup model (3 data copies, 2 media types, 1 offsite copy). Immutable vaults ensure data cannot be modified or deleted, protecting against ransomware threats.',
    scope: 'Immutable snapshot vault configuration, backup scheduling, encryption, database backups, and restore operations.',
    businessValue: 'Secures enterprise data assets against ransomware attacks, guarantees rapid recovery during software corruption, and satisfies compliance audits.',
    deployment: 'Phase-1: Data audit and retention rules design. Phase-2: Setup of backup appliances and encryption vaults. Phase-3: Automated backup test runs and verify restore times.',
    industries: 'Healthcare, BFSI, Logistics, Retail.',
    oems: ['Veeam (Backup & Replication)', 'Veritas (NetBackup)', 'Vinchin (Backup Platform)', 'Dell (PowerProtect DD)'],
    benefits: ['Ransomware-Proof Backup Storage Vaults', 'Reliable Bare-Metal Restore Timelines', 'Data Retention Compliance Guarantee'],
    usecases: ['Immutable Storage Backup Vaults', 'Daily Automated Database Snapshots', 'Bare-Metal server recovery configurations'],
    timeline: '4 - 6 Weeks Deployment Cycle',
    deliverables: ['Backup and Retention Policy Map', 'Vault Encryption Keys & Logins', 'Bare-Metal Recovery Test Report'],
    services: ['Backup Strategy Auditing', 'Vault Encryption Configuration', 'Managed Recovery Runs'],
    models: ['Hybrid Backup Vault / Backup as a Service (BaaS)'],
    coverage: '24/7/365 Backup Recovery Helpdesk Support'
  },
  {
    id: 'dc-transformation',
    name: 'Datacentre Solutions & Transformation',
    code: 'SOL-10',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80',
    intro: 'INNOWORQ consolidates and transforms legacy server environments into highly virtualized, cloud-integrated, software-defined datacenter ecosystems.',
    techOverview: 'We configure virtualization hosts, storage networks, software-defined networks, and centralized management portals. We deploy hyperconverged clusters that unify processing and storage.',
    architecture: 'We transition separate server and storage components into hyperconverged clusters. Workloads run inside virtual machines that can be migrated between servers without downtime.',
    scope: 'Infrastructure consolidation, hyperconverged cluster setup, virtual network design, and legacy migrations.',
    businessValue: 'Reduces datacenter operating costs by up to 50%, improves resource utilization across server clusters, and simplifies central management workflows.',
    deployment: 'Phase-1: Workload analysis and migration scheduling. Phase-2: HCI cluster setup and network configurations. Phase-3: Hot VM migrations and server retirements.',
    industries: 'BFSI, Manufacturing, Telecom, Education.',
    oems: ['Nutanix (Cloud Platform)', 'VMware (vCloud Suite)', 'Red Hat (OpenShift Platform)', 'Dell (VxRail HCI)'],
    benefits: ['50% Lower Hardware and Energy Costs', 'Unified Resource Management Dashboard', 'Zero-Downtime Application Migrations'],
    usecases: ['Server Consolidation Projects', 'Hyperconverged (HCI) Infrastructure setups', 'Legacy Datacenter Modernization runs'],
    timeline: '12 - 16 Weeks Transformation Cycle',
    deliverables: ['Virtualization Consolidation Design', 'HCI Cluster Network Configuration Map', 'Workload Migration Sign-Off logs'],
    services: ['Consolidation Consulting', 'HCI Cluster Engineering', 'Datacenter Migration Runs'],
    models: ['Software-Defined Datacenter (SDDC)'],
    coverage: 'Post-Migration Optimization & Support SLA'
  },
  {
    id: 'digital-infra',
    name: 'Digital Infrastructure',
    code: 'SOL-11',
    img: 'https://images.unsplash.com/photo-1596207891396-2270f2f351ef?auto=format&fit=crop&w=900&q=80',
    intro: 'We install high-capacity fiber loops, configure core network switches, optimize WAN routing paths, and deploy high-availability routing tables to support enterprise communications.',
    techOverview: 'We configure core routing protocols (OSPF/BGP), managed switches, fiber patch panels, structured cabling tracks, and WAN optimization settings.',
    architecture: 'Our network designs use redundant pathways. Multiple WAN connections link branch offices to centralized datacenters, while core switches are configured in high-availability modes.',
    scope: 'Core switch configurations, WAN setup, structured fiber cabling, routing table updates, and bandwidth management.',
    businessValue: 'Minimizes network latency across office branches, increases bandwidth capacities, and ensures stable voice and data communications.',
    deployment: 'Phase-1: Network mapping and cable layout design. Phase-2: Core switch installations and fiber cabling. Phase-3: Routing configuration, security rules, and performance checks.',
    industries: 'Telecom, Manufacturing, Logistics, Retail.',
    oems: ['Cisco (Catalyst Switches)', 'Juniper (MX Routers)', 'D-Link (Managed Switches)', 'Fortinet (WAN Optimization)'],
    benefits: ['Low-Latency Branch Office Network Connections', 'High-Bandwidth Capacity Fiber Backbone', 'Minimized Single-Point Cable Failures'],
    usecases: ['High-Speed Core Network Fiber Loop installation', 'Multi-site WAN Optimization and Routing Table alignment', 'Structured Copper and Fiber cabling for office sites'],
    timeline: '8 - 12 Weeks Construction Cycle',
    deliverables: ['Network Cabling Schematic', 'Routing Tables Configuration Map', 'Bandwidth Test Reports'],
    services: ['Structured Cabling Deployments', 'Routing Table Optimization', 'WAN Ring Engineering'],
    models: ['Structured Local Loop Network'],
    coverage: 'On-site Fiber Diagnostic Dispatch SLA'
  },
  {
    id: 'enterprise-management',
    name: 'Enterprise Management Solution',
    code: 'SOL-12',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    intro: 'We integrate unified monitoring dashboards, configure automated service ticketing rules, and provide support configurations for core enterprise database networks.',
    techOverview: 'We configure server agents, database monitoring, alert triggers, ticketing integration, and system dashboards.',
    architecture: 'We integrate monitoring agents on all servers and databases. These agents report health metrics to a centralized dashboard, which triggers service desk tickets automatically during issues.',
    scope: 'Dashboard integrations, service desk rules, database monitoring, and system administration support.',
    businessValue: 'Improves visibility across all IT assets, reduces time spent on incident troubleshooting, and ensures stable ERP database operations.',
    deployment: 'Phase-1: Monitoring agent setups and alert definitions. Phase-2: Service desk integration and ticket routing. Phase-3: Dashboard customization and metric verification.',
    industries: 'Logistics, BFSI, Manufacturing, Retail.',
    oems: ['Microsoft (SCOM Systems)', 'Oracle (Database Management)', 'SAP Basis (SAP NetWeaver)', 'IBM (Systems Director)'],
    benefits: ['Unified Infrastructure Visual Controls', 'Streamlined IT Ticket Management workflows', 'Optimized SAP ERP Core performance'],
    usecases: ['Unified Monitoring Dashboard integrations', 'ITSM Service Desk and Ticket routing automation', 'SAP Basis HANA Database performance optimization'],
    timeline: '6 - 8 Weeks Implementation Cycle',
    deliverables: ['ITSM Integration Protocol Map', 'Database Alert Threshold Matrix', 'Observability Dashboard Layout'],
    services: ['ITSM Flow Customization', 'Database Health Tuning', 'SAP Basis Administration support'],
    models: ['Central SaaS / On-Prem Management Console'],
    coverage: '24/7/365 Database Admin & ITSM Support SLA'
  },
  {
    id: 'network-security',
    name: 'Network Infrastructure & Security',
    code: 'SOL-13',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    intro: 'INNOWORQ deploys enterprise next-generation firewalls (NGFW), configures perimeter access-control lists, establishes secure VLAN boundaries, and configures secure SD-WAN connections.',
    techOverview: 'We configure firewall policies, web application firewalls (WAF), secure routing switches, access-control lists, and VPN gateways.',
    architecture: 'Our security architecture uses a zero-trust model. We segment local networks into secure zones, inspect all traffic at network boundaries, and encrypt communication lines between offices.',
    scope: 'Firewall configurations, VLAN setups, access controllers, secure SD-WAN, and security assessments.',
    businessValue: 'Protects enterprise networks from cyber threats, secures sensitive communications, and guarantees compliance with industry security standards.',
    deployment: 'Phase-1: Security audit and firewall design. Phase-2: Firewall rules setup and VLAN segmentations. Phase-3: Performance testing and intrusion check dry-runs.',
    industries: 'BFSI, Healthcare, Government, Telecom.',
    oems: ['Checkpoint (Quantum Firewalls)', 'Fortinet (FortiGate NGFW)', 'F5 (Advanced WAF)', 'Cisco (Catalyst Security)'],
    benefits: ['Total Perimeter Defense against Network Threats', 'Secure WAN Traffic encryption loops', 'Granular Access-Control at Network boundaries'],
    usecases: ['Next-Generation Firewall rules configurations', 'Secure SD-WAN setups for distributed sites', 'Network segmentation via secure VLAN boundaries'],
    timeline: '6 - 10 Weeks Implementation Cycle',
    deliverables: ['Perimeter Security Configuration Map', 'Firewall Rules and Access Logins', 'Penetration Testing Audit Report'],
    services: ['Firewall Policies configuration', 'Secure SD-WAN Engineering', 'WAF Protection tuning'],
    models: ['Zero-Trust Secure Perimeter'],
    coverage: '24/7/365 Security Incident Response SLA'
  }
];

/* ─────────────────────────────────────────────────────────────
   Solution Section Component
────────────────────────────────────────────────────────────── */
function SolutionSection({ sol, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={sol.id}
      style={{
        padding: '8rem 0',
        minHeight: '100vh',
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
        position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(9,97,159,0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating connection visual connector lines between sections */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(9,97,159,0.15), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* TEXT SIDE (Cols: 1-7 if even, 6-12 if odd) */}
          <div style={{
            gridColumn: isEven ? '1 / 8' : '6 / 13',
            gridRow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
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
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(12,20,35,0.92)',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                margin: '0.25rem 0'
              }}>
                {sol.name}
              </h2>

              {/* Editorial Content Blocks - Rich Hierarchy */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(9,97,159,0.9)', fontWeight: 700, margin: '0 0 0.4rem 0' }}>Introduction</h4>
                  <p style={{ fontSize: '1.05rem', color: 'rgba(30,40,60,0.85)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {sol.intro}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '0.5rem' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
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
                  background: 'rgba(9,97,159,0.04)',
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
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
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
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Supported OEMs</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(30,40,60,0.75)' }}>{sol.oems.join(', ')}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(9,97,159,0.08)', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(9,97,159,0.85)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Implementation Timeline</span>
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

          {/* VISUAL SIDE (Cols: 8-12 if even, 1-5 if odd) */}
          <div style={{
            gridColumn: isEven ? '9 / 13' : '1 / 5',
            gridRow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <ScrollReveal variant={isEven ? 'fade-right' : 'fade-left'} style={{ width: '100%' }}>
              <motion.div
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(9,97,159,0.08), 0 2px 10px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  border: '1px solid rgba(9,97,159,0.1)'
                }}
              >
                {/* Foreground Image */}
                <img
                  src={sol.img}
                  alt={`${sol.name} Enterprise Visual`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                />
                
                {/* Visual Blueprint Grid Overlay */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none',
                  backgroundImage: `
                    linear-gradient(rgba(9,97,159,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(9,97,159,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px'
                }} />
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Solutions Page REDESIGN
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
              Explore INNOWORQ's 13 official enterprise solutions configurations.
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
    </div>
  );
}

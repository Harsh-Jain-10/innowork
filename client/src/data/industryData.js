// Official INNOWORQ Industries Data
// Challenges, Technologies, Services derived from official company service offerings.

export const industriesData = [
  {
    id: "smart-city",
    name: "Smart City",
    desc: "Integrated Command and Control Centers (ICCC), smart governance enablement, IoT gateways, and video surveillance wall operations.",
    challenges: [
      "Real-time processing of distributed IoT sensor streams",
      "Securing edge gateways against lateral network threats",
      "High-availability command center uptime across civic operations"
    ],
    technologies: ["Cisco IoT", "Dell EMC Storage", "Fortinet FortiGate", "IBM Systems"],
    services: ["ICCC Integration", "NOC Operations", "Edge Gateway Security", "Video Surveillance Management"]
  },
  {
    id: "telecom",
    name: "Telecom",
    desc: "Supporting edge routing configurations, high-availability switching matrices, base station connectivity, and active networking infrastructure.",
    challenges: [
      "Packet throughput bottlenecks at high-density edge nodes",
      "Maintaining base station network continuity at scale",
      "Multi-vendor routing table optimization across distributed POPs"
    ],
    technologies: ["Juniper MX Series", "Cisco Core Switches", "F5 BIG-IP", "NetApp Storage"],
    services: ["Edge Routing Configuration", "High-Availability Switching", "NOC Operations", "Third-Party Maintenance"]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    desc: "Ensuring continuous IT infrastructure uptime, server resilience, and secure datacenter hosting for clinical systems.",
    challenges: [
      "Zero-downtime availability for mission-critical clinical applications",
      "Strict patient data privacy and regulatory compliance",
      "Active-active disaster recovery synchronization"
    ],
    technologies: ["VMware vSphere", "Dell PowerEdge", "Veeam Availability", "Checkpoint Security"],
    services: ["SLA Datacenter Operations", "Disaster Recovery Administration", "Compliance Audit Support", "Infrastructure Resilience"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    desc: "OT-IT convergence consulting, automation pipelines, systems monitoring, and shop-floor computing support.",
    challenges: [
      "Legacy OT systems integration with modern IT networks",
      "Real-time shop-floor telemetry processing at scale",
      "Zero-downtime assembly line continuity requirements"
    ],
    technologies: ["Red Hat Ansible", "Nutanix HCI", "Cisco Industrial", "Microsoft SCOM"],
    services: ["OT-IT Convergence Consulting", "Automation Pipeline Build", "Infrastructure Monitoring", "Staff Augmentation"]
  },
  {
    id: "bfsi",
    name: "BFSI",
    desc: "Highly secure datacenter architectures, network firewalls, active-active disaster recovery replication, and regulatory compliance.",
    challenges: [
      "Hardening transaction endpoints against advanced persistent threats",
      "Active-active DR replication with sub-second failover",
      "Stringent RBI and SEBI regulatory compliance requirements"
    ],
    technologies: ["Checkpoint Quantum", "F5 Advanced WAF", "Oracle Database", "Fortinet Secure SD-WAN"],
    services: ["Secure Datacenter Architecture", "DR Sync Administration", "Compliance Audit Preparation", "Penetration Testing Support"]
  },
  {
    id: "logistics",
    name: "Logistics",
    desc: "Deploying scalable datacenter solutions, transport management system servers, and remote site networking support.",
    challenges: [
      "Database latency in global transport management tracking systems",
      "Continuous network uptime across distributed warehouse sites",
      "Peak load scaling for high-traffic inventory operations"
    ],
    technologies: ["VMware vCenter", "Microsoft Windows Server", "Cisco WAN", "Veeam Backup"],
    services: ["TMS Server Deployment", "Remote Site Network Support", "Scale-Out Virtualization", "Third-Party Maintenance"]
  },
  {
    id: "education",
    name: "Education",
    desc: "School and university campus digitization, virtualization, virtual lab hosting, and capability building trainings.",
    challenges: [
      "Scalable virtual lab compute pools for large student bodies",
      "Heterogeneous campus-wide network integration and management",
      "Identity access control for thousands of dynamic user nodes"
    ],
    technologies: ["Microsoft Active Directory", "Nutanix HCI", "Red Hat OpenShift", "VMware Horizon"],
    services: ["Virtual Lab Infrastructure Hosting", "IT Skills Training Workshops", "Identity & Access Management", "Campus Network Digitization"]
  },
  {
    id: "government",
    name: "Government",
    desc: "Enterprise hosting solutions, high-grade security patches, compliance audits, and public command center operations.",
    challenges: [
      "Securing public-facing portals against coordinated cyber threats",
      "High-availability public crisis command center operations",
      "Comprehensive auditing without disrupting live citizen services"
    ],
    technologies: ["Red Hat RHEL", "Checkpoint NGFW", "IBM Power Systems", "Dell Infrastructure"],
    services: ["Security Patch Management", "24/7 Command Center Support", "Compliance Auditing", "Enterprise Hosting Solutions"]
  },
  {
    id: "media-entertainment",
    name: "Media/Entertainment",
    desc: "Supporting media storage clusters, fast network distributions, and high-performance CDN architectures.",
    challenges: [
      "Bandwidth saturation during high-bitrate live streaming events",
      "I/O bottlenecks in petabyte-scale media storage clusters",
      "Peak traffic management during live broadcast windows"
    ],
    technologies: ["F5 BIG-IP LTM", "NetApp ONTAP", "Cisco Catalyst", "Akamai CDN Integration"],
    services: ["CDN Architecture Tuning", "Media Storage Cluster Support", "Multi-Vendor Network Maintenance", "SLA Network Monitoring"]
  }
];

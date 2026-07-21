// Official INNOWORQ Industries Data
// Challenges, Technologies, Services derived from official company service offerings.

export const industriesData = [
  {
    id: "smart-city",
    name: "Smart Cities & Public Safety",
    desc: "Architecting resilient civic IT systems, Integrated Command and Control Centers (ICCC), edge IoT gateways, and high-availability public safety operations.",
    challenges: [
      "Processing and analyzing massive telemetry data from millions of distributed IoT edge sensors",
      "Hardening distributed edge gateways against lateral and external network threats",
      "Ensuring zero-downtime availability for critical civic monitoring and emergency command centers"
    ],
    technologies: ["Cisco Industrial IoT", "Dell EMC PowerScale", "Fortinet Security Fabric", "IBM Power Systems"],
    services: ["Command Center Integration", "24/7 NOC & SOC Operations", "Edge Gateway Cybersecurity", "Public Safety System Management"]
  },
  {
    id: "telecom",
    name: "Telecommunications",
    desc: "Optimizing high-throughput carrier networks, configuring edge routing fabrics, securing base stations, and deploying active network infrastructure with maximum availability.",
    challenges: [
      "Mitigating latency and packet throughput bottlenecks at high-density edge exchange nodes",
      "Ensuring carrier-grade network continuity across thousands of remote cell towers and base stations",
      "Aligning routing protocols and optimizing performance across complex, multi-vendor carrier environments"
    ],
    technologies: ["Juniper MX Series Routers", "Cisco Catalyst Core Switches", "F5 BIG-IP Carrier-Grade NAT", "NetApp FAS Storage"],
    services: ["Core Routing & Switching Setup", "High-Availability Fabric Engineering", "Carrier-Class NOC Operations", "Multi-Vendor Third-Party Support"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinical Systems",
    desc: "Architecting compliant, high-availability datacenter infrastructure and cloud services that keep mission-critical clinical applications and EHR systems online 24/7.",
    challenges: [
      "Ensuring continuous operation for life-critical clinical applications during hardware or network failures",
      "Securing sensitive electronic health records (EHR) to maintain strict HIPAA compliance and data integrity",
      "Synchronizing primary and secondary clinical datacenters with zero data loss (RPO/RTO) targets"
    ],
    technologies: ["VMware Cloud Foundation", "Dell PowerEdge Server Clusters", "Veeam Availability Suite", "Check Point Quantum Security"],
    services: ["SLA-Driven Datacenter Management", "Active-Active Disaster Recovery", "Compliance & Security Auditing", "Resilient Clinical Compute Hosting"]
  },
  {
    id: "manufacturing",
    name: "Industrial & Manufacturing",
    desc: "Bridging Operational Technology (OT) and Information Technology (IT) to secure shop-floor compute systems, automate telemetry pipelines, and monitor industrial control systems.",
    challenges: [
      "Safely bridging legacy industrial equipment and OT systems with modern IT networks without introducing security gaps",
      "Ingesting and processing high-frequency sensor telemetry feeds from automated assembly lines in real-time",
      "Minimizing compute-related downtime to avoid costly manufacturing line stoppages and inventory losses"
    ],
    technologies: ["Red Hat Ansible Automation", "Nutanix Cloud Platform", "Cisco Industrial Ethernet Switches", "Microsoft System Center"],
    services: ["OT-IT Convergence Advisory", "Industrial Automation Pipeline Engineering", "ICS/SCADA Network Monitoring", "Dedicated On-Site Engineering"]
  },
  {
    id: "bfsi",
    name: "Banking & Financial Services (BFSI)",
    desc: "Engineering secure datacenter architectures, multi-region disaster recovery, and high-performance transactional environments with stringent compliance controls.",
    challenges: [
      "Protecting financial core networks and transactional databases against sophisticated, state-sponsored cyber threats",
      "Maintaining real-time transaction consistency and sub-second failover across geographical locations during outages",
      "Adhering to complex regulatory requirements such as RBI, SEBI, and PCI-DSS audit frameworks"
    ],
    technologies: ["Check Point Quantum Security", "F5 Advanced Web Application Firewall", "Oracle Real Application Clusters (RAC)", "Fortinet Secure SD-WAN"],
    services: ["High-Security Datacenter Architecture", "Multi-Region DR Synchronization", "Regulatory Audit Readiness Assessments", "Vulnerability Assessment & Pen Testing"]
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    desc: "Designing robust, distributed networks and scalable datacenter architectures that keep global supply chains and transport management systems running without interruption.",
    challenges: [
      "Optimizing database response times and reducing latency for real-time tracking across international transport routes",
      "Ensuring stable WAN/SD-WAN connectivity across remote fulfillment centers and freight yards",
      "Handling massive transactional spikes during peak e-commerce and seasonal distribution periods"
    ],
    technologies: ["VMware vSphere Suite", "Microsoft Windows Server Clusters", "Cisco SD-WAN Technologies", "Veeam Backup & Replication"],
    services: ["Enterprise Server Infrastructure Architecture", "Remote Fulfillment Site Networking", "Scale-Out Virtualization Platforms", "Proactive Infrastructure Maintenance"]
  },
  {
    id: "education",
    name: "Education & Academic Research",
    desc: "Transforming academic institutions with campus-wide network digitization, secure hybrid clouds, and high-performance computing labs for advanced research.",
    challenges: [
      "Providing on-demand compute resources for thousands of concurrent students in virtual lab environments",
      "Managing complex campus-wide wired and wireless networks with diverse student and faculty requirements",
      "Implementing secure identity and access management (IAM) for highly fluid student and staff user directories"
    ],
    technologies: ["Microsoft Entra ID / Active Directory", "Nutanix Enterprise Cloud", "Red Hat OpenShift Platform", "VMware Horizon VDI Solutions"],
    services: ["Virtual Lab Infrastructure Hosting", "Institutional IT Training & Capability Building", "Identity & Access Management Integration", "Campus Network Digitization & Security"]
  },
  {
    id: "government",
    name: "Government & Public Sector",
    desc: "Providing secure hosting environments, prompt security patching, compliance support, and robust systems maintenance for civic agencies and public portals.",
    challenges: [
      "Defending public services and critical infrastructure against coordinated DDoS and state-level cyber threats",
      "Providing continuous operational support and high availability for crisis response and emergency operations systems",
      "Conducting rigorous compliance and security audits without disrupting live citizen services"
    ],
    technologies: ["Red Hat Enterprise Linux (RHEL)", "Check Point Next-Gen Firewalls", "IBM Power Systems Platforms", "Dell Enterprise Storage Arrays"],
    services: ["Critical Patch Management & Security Operations", "24/7 Command Center Support Services", "Compliance & Vulnerability Auditing", "High-Security Enterprise Hosting Solutions"]
  },
  {
    id: "media-entertainment",
    name: "Media, Entertainment & CDN",
    desc: "Architecting scale-out storage matrices, high-throughput delivery systems, and low-latency network pipelines for global broadcasting and streaming services.",
    challenges: [
      "Handling immense data throughput and traffic spikes during real-time, global live streaming events",
      "Eliminating data access delays and I/O bottlenecks in media editing, transcoding, and playout storage clusters",
      "Dynamic traffic load balancing to ensure uninterrupted, high-definition broadcast streams during peak windows"
    ],
    technologies: ["F5 BIG-IP Application Delivery Controllers", "NetApp Enterprise Storage Systems", "Cisco Catalyst Backbone Switches", "Global Content Delivery Network Integrations"],
    services: ["CDN Architecture & Performance Tuning", "Petabyte-Scale Storage Support Services", "Multi-Vendor Core Network Integration", "SLA-Driven Stream Performance Monitoring"]
  }
];

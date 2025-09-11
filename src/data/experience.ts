export const EXPERIENCE = [
  {
    company: 'Mayo Clinic — Enterprise Imaging Systems',
    role: 'IT Analyst Programmer / Full‑Stack Developer',
    period: 'Jan 2024 — Present',
    bullets: [
      'Strengthened Enterprise Security: Integrated the Image Move (iMove) system with Azure SSO (OAuth2) and Microsoft Graph API, enhancing authentication and authorization.',

      'Hardened security posture by mitigating CWE-73 vulnerabilities and implementing standardized, secure logging pipelines into Splunk.',

      'Built resilient CI/CD pipelines for multi-VM deployments, ensuring repeatable and scalable releases across environments.',

      'Integrated with enterprise monitoring and observability (AppDynamics + Splunk), enabling proactive performance tracking and faster root cause analysis.',

      'Led and Engineered API management platform migration strategies, such as moving clinical viewer services to ApigeeX platfrom with a backward-compatible resolution layer, ensuring zero downtime cutovers and improved credential reliability.',

      'Centralized Knowledge Management: Designed and developed an internal knowledge base website (HTML, JavaScript, CSS, Nginx), reducing incident resolution time by 40%.',

      'Boosted Operational Efficiency: Built Bash shell scripts in Linux environments to automate workflows and data corrections, streamlining processes and saving developer time.',

      'Collaborated in Agile/Scrum teams to deliver features, resolve production issues through ServiceNow, and drive continuous improvement across enterprise-scale solutions.'
    ]
  },
  {
    company: 'Georgia Institute of Technology — (Machine Learning & Artificial Intelligence)',
    role: 'Graduate Student ',
    period: 'Aug 2024 — Present',
    bullets: [
      'Built production‑grade test suites, CI, and ML prototypes.',
      'Delivered research-style reports, visualizations, and reproducible pipelines.'
    ]
  },

  { company: 'FedEx — Enterprise Document Management',
    role: 'Software Engineer / Full-Stack Developer',
    period: 'Jan 2022 – Jan 2024',
    bullets: [
      'Enabled Cloud Cost Savings: Engineered Java Spring Boot REST APIs for Google Cloud Storage, driving enterprise backend migration to GCP and achieving $2M/year in savings.',
      'Secured Enterprise Systems: Implemented Okta token-based authentication to harden backend services and ensure compliance with enterprise security standards.',
      'Boosted System Performance: Built high-performance, highly available distributed systems, optimizing Cassandra NoSQL queries to significantly improve response times.',
      'Delivered AI-Powered Imaging Solutions: Designed and deployed image processing APIs with Google Cloud Vision for automated detection and blurring of sensitive content — powering the launch of Picture Proof of Delivery project.',
      'Led Agile Modernization: Served as Scrum Master, driving legacy system modernization while mentoring contract developers to deliver scalable, high-quality solutions.',
      'Ensured Operational Reliability: Monitored production and test systems proactively, ensuring uptime and rapid resolution of critical issues.'
    ]
  },

  { company: 'FedEx — Customer Technologies',
    role: 'Customer Technology Consultant',
    period: 'Nov 2019 – Dec 2021',
    bullets: [
      'Drove Revenue Growth: Delivered ERP, WMS, and API integrations using VBA and SQL across hundreds of customer platforms, generating significant revenue impact.',
      'Enabled Seamless Integrations: Provided white-glove support to developers and third parties adopting FedEx Web Services, guiding them from development through production launch.',
      'Accelerated API Adoption: Acted as technical liaison between business stakeholders and engineering teams, boosting REST API adoption and reducing integration timelines.',
      'Consulted on Enterprise Automation: Managed a geographic customer territory, advising clients on automation platforms and enterprise integration strategies to optimize logistics operations.'
    ]
  }
] as const;

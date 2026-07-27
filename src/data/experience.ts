export const EXPERIENCE = [
  {
    company: 'Mayo Clinic - Clinical Imaging Systems',
    role: 'Software Engineer',
    period: 'Oct 2025 - Present',
    bullets: [
      'Develop and maintain the clinical image viewer system, enabling fast, secure, and reliable access to diagnostic imaging across Mayo Clinic.',
      'Build and optimize back-end services with Java Spring Boot, ensuring resiliency, scalability, and uptime in a Linux-based environment.',
      'Design and enhance React-based front-end components for an intuitive and performant user experience.',
      'Implement and manage CI/CD pipelines in Azure DevOps, driving continuous integration, automated testing, and streamlined deployments.',
      'Collaborate with Product Owners, Architects, and cross-functional teams to translate clinical and operational requirements into robust technical solutions.',
      "Contribute to product discovery sessions and technical strategy, ensuring alignment with Mayo Clinic's long-term innovation goals."
    ]
  },
  {
    company: 'Mayo Clinic - Enterprise Imaging Systems',
    role: 'IT Analyst Programmer / Full-Stack Developer',
    period: 'Jan 2024 - Sep 2025',
    bullets: [
      'Strengthened enterprise security by integrating the Image Move (iMove) system with Azure SSO (OAuth2) and Microsoft Graph API, enhancing authentication and authorization.',
      'Developed the PathSafe utility to validate file inputs, enforce allow-lists, normalize paths, and ensure directory containment - fully mitigating <a href="https://cwe.mitre.org/data/definitions/73.html" target="_blank" rel="noopener noreferrer">CWE-73 external path control vulnerabilities</a> and reducing flaw count from 562 to 0.',
      'Engineered robust CI/CD pipelines for multi-VM deployments, ensuring scalable, repeatable releases across environments.',
      'Integrated AppDynamics and Splunk to improve observability, performance monitoring, and root-cause analysis.',
      'Led migration of clinical viewer services to the <a href="https://cloud.google.com/apigee?hl=en" target="_blank" rel="noopener noreferrer">Apigee API Management platform</a>, implementing backward-compatible routing for zero-downtime cutovers and enhanced credential reliability.',
      'Designed and deployed an internal knowledge-base website (HTML, JavaScript, CSS, Nginx), reducing incident resolution time by 40%.',
      'Automated workflows and data corrections using Bash scripting in Linux, streamlining operations and saving developer hours.',
      'Collaborated within Agile/Scrum teams to deliver new features, resolve production issues via ServiceNow, and drive continuous improvement across enterprise systems.'
    ]
  },
  {
    company: 'Georgia Institute of Technology - Machine Learning & Artificial Intelligence',
    role: 'Graduate Student',
    period: 'Aug 2024 - Present',
    bullets: [
      'Developed production-grade test suites and CI pipelines to ensure reliability and scalability of ML systems.',
      'Built and evaluated machine learning prototypes, applying supervised and unsupervised methods, time-series models, and clustering techniques.',
      'Authored research-style reports and technical visualizations, translating complex results into actionable insights.',
      'Delivered reproducible ML workflows using Python, NumPy, pandas, and scikit-learn to support experimentation and validation.'
    ]
  },
  {
    company: 'FedEx - Enterprise Document Management',
    role: 'Software Engineer / Full-Stack Developer',
    period: 'Jan 2022 - Jan 2024',
    bullets: [
      'Enabled cloud cost savings by engineering Java Spring Boot REST APIs for Google Cloud Storage, driving enterprise backend migration to GCP and achieving $2M/year in savings.',
      'Secured enterprise systems by implementing <a href="https://developer.okta.com/docs/guides/customize-tokens-groups-claim/main/" target="_blank" rel="noopener noreferrer">Okta</a> token-based authentication to harden backend services and support enterprise security standards.',
      'Boosted system performance by building highly available distributed systems and optimizing Cassandra NoSQL queries.',
      'Delivered AI-powered imaging solutions using <a href="https://cloud.google.com/vision/docs/detecting-safe-search" target="_blank" rel="noopener noreferrer">Google Cloud Vision</a> for automated detection and blurring of sensitive content, powering the <a href="https://www.fedex.com/en-us/tracking/picture-proof-delivery.html" target="_blank" rel="noopener noreferrer">Picture Proof of Delivery project</a>.',
      'Led Agile modernization efforts as Scrum Master, driving legacy system improvements while mentoring contract developers.',
      'Ensured operational reliability by monitoring production and test systems proactively and resolving critical issues quickly.'
    ]
  },
  {
    company: 'FedEx - Customer Technologies',
    role: 'Customer Technology Consultant',
    period: 'Nov 2019 - Dec 2021',
    bullets: [
      'Drove revenue growth by delivering ERP, WMS, and API integrations using VBA and SQL across hundreds of customer platforms.',
      'Enabled seamless integrations by supporting developers and third parties adopting FedEx Web Services from development through production launch.',
      'Accelerated API adoption by acting as a technical liaison between business stakeholders and engineering teams.',
      'Consulted on enterprise automation platforms and integration strategies to optimize logistics operations.'
    ]
  }
] as const

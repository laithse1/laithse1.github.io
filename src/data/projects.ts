export const PROJECTS = [
  {
    title: 'DICOM Converter + OHIF Viewer',
    desc: 'A full-stack healthcare imaging platform that ingests DICOM datasets from MIME bundles, validates and anonymizes them, logs pre/post headers for audit, and exposes DICOMweb endpoints for OHIF. Built with Python/FastAPI, PostgreSQL (relational + JSONB), and Next.js + Chakra UI, fully containerized with Docker for reproducible dev, test, and prod deployments.',
    impact: 'Demonstrated end-to-end engineering of a production-grade medical imaging pipeline — including DICOMweb compliance, OHIF integration, audit-ready anonymization, and DevOps best practices. Delivered a scalable, secure, and portable solution that bridges backend services, database design, and modern UI, highlighting expertise in cloud-native architectures, healthcare interoperability, and full-stack development.',
    tags: ['Python-FastAPI','pydicom','React/Next.js','Docker','PostgreSQL'],
    link: 'https://github.com/laithse1/DICOM-converter-API'
  },
  {
    title: 'The Pokemon Tournament App',
    desc: "The Pokemon Tournament App is a Java Spring Boot application designed to simulate Pokemon tournaments with customizable configurations. It includes both frontend and backend components, with a PostgreSQL database for data persistence. This project is containerized using Docker, allowing easy setup and execution.",
    impact: "Demonstrated full-stack engineering by integrating Spring Boot, React, and PostgreSQL; applied software engineering best practices in containerization, configuration management, and simulation design.",
    tags: ['Spring Boot','SQL Server','OAuth2/JWT','Docker','PostgreSQL','React'],
    link: 'https://github.com/laithse1/infinityview'
  },
  {
    title: 'Peritoneal Dialysis Management',
    desc: "Full-stack healthcare app enabling patients to log dialysis metrics, track trends with analytics, and alert providers through a secure dashboard with risk flags and notifications.",
    impact: "Delivered actionable insights for high-risk patients, improving adherence tracking and enabling providers to make timely, data-driven treatment decisions.",
    tags:['FastAPI','React/Next.js','Postgres','Docker','OAuth2/JWT Auth'],
    link: 'https://github.com/laithse1/PeritonealDialysisApplication'
  }
] as const;

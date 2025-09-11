export const PROJECTS = [
  {
    title: 'DICOM Converter + OHIF Viewer',
    desc: 'FastAPI backend with DICOMWeb (QIDO/WADO-RS) and React UI. Thumbnails, metadata, and Docker deploy.',
    impact: 'Improved first render ~35%; added audit logging.',
    tags: ['Python-FastAPI','pydicom','React','Docker','PostgreSQL'],
    link: 'https://github.com/laithse1/dicom-converter'
  },
  {
    title: 'InfinityView Platform (Mayo Clinic)',
    desc: 'Java Spring Boot imaging services, secure logging, multi-site deployments.',
    impact: 'Reduced incidents ~20%; standardized observability.',
    tags: ['Spring Boot','SQL Server','OAuth2/JWT','Splunk','AppDynamics','CI/CD'],
    link: 'https://github.com/laithse1/infinityview'
  },
  {
    title: 'Peritoneal Dialysis Management',
    desc: 'Full-stack app with risk flags, provider dashboard, and analytics.',
    impact: 'Improved adherence insights for high-risk patients.',
    tags: ['FastAPI','React','Postgres','Docker','Auth'],
    link: 'https://github.com/laithse1/pd-app'
  }
] as const;

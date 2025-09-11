'use client'
import { SITE } from '../data/site.config'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
      <div className="grid md:grid-cols-12 items-center gap-10">
        <div className="md:col-span-7">
          {/*<div className="inline-flex items-center gap-2 text-brand text-xs font-semibold border border-brand/30 rounded-full px-3 py-1 mb-4">
            <span>Software Engineer • FullStack</span>
          </div>*/}
          <h1 className="text-4xl/tight md:text-5xl/tight font-bold">
            Engineering Scalable Solutions that Shape the Future of Digital Experiences
          </h1>
          {/*<p className="mt-4 text-slate-600 dark:text-slate-300">
            I design and develop software that solve real-world problems.
            From responsive frontends to scalable backends, I bring your digital vision to life —
            with deep experience in healthcare imaging, DICOM/DICOMWeb, and OHIF.
          </p>*/}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl bg-brand text-white hover:bg-brand/90">View Projects</a>
            <a href="#beyond" className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700">Beyond Code</a>
            {/*<a href={`mailto:${SITE.email}`} className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700">Email Me</a>*/}
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand/40 to-purple-500/40 blur"></div>
            <div className="relative rounded-3xl p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <img src="/images/Photo.jpg" alt="Laith Alkhalil"
                   className="w-full aspect-[4/5] object-cover rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800" />
              <ul className="mt-4 space-y-2 text-sm">
                <li className="space-y-2">
  <div className="font-semibold">
    Full-Stack Software Engineer · Scalable, user-focused solutions
  </div>
  <p className="text-sm text-slate-600 dark:text-slate-300">
 I engineer full-stack software solutions that create measurable business value. From sleek,
  responsive frontends to resilient, scalable backends, 
  I deliver applications that elevate user experience and streamline operations.
   My expertise spans cloud-native architectures, API-driven platforms, 
   and interoperability standards —
  complemented by specialized knowledge in healthcare imaging, including DICOM/DICOMWeb.
  </p>
  <p className="text-sm text-slate-600 dark:text-slate-300">
    Previously at <span className="font-medium">FedEx</span>,
    the world’s 
    largest logistics and cargo airline, 
    I was part of an agile development team 
    supporting and modernizing an enterprise document management system, 
    ensuring reliability and scalability 
    for mission-critical global operations.
  </p>
</li>
                {/*<li>🔒 Security-minded: CWE-73 mitigations, OAuth2/JWT, TLS</li>
                <li>🖼 DICOMWeb (QIDO/WADO-RS), OHIF integration</li>
                <li>⚙️ CI/CD on Azure DevOps & GitHub Actions</li>
                <li>🐳 Dockerized microservices across multi-VM fleets</li>
                <li>📈 Monitoring: Splunk, AppDynamics</li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script' // ← add

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Laith Alkhalil-AlHamed — Software Engineer',
  description:
    'Crafting digital experiences with modern technology. From responsive frontends to scalable backends.',
  openGraph: {
    title: 'Laith Alkhalil-AlHamed — Software Engineer',
    description:
      'Crafting digital experiences with modern technology. From responsive frontends to scalable backends.',
    type: 'website',
    url: 'https://laithse1.github.io/'
  },
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Default to dark on first paint; suppress hydration warning since we toggle class before React mounts
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}>
        {/* Ensure theme reflects saved preference before hydration (otherwise default = dark) */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var saved = localStorage.getItem('theme');
              // If user has a saved choice, respect it; else keep default dark.
              if (saved) {
                document.documentElement.classList.toggle('dark', saved === 'dark');
              }
            } catch (e) {}
          `}
        </Script>

        {/* Radial glows */}
        <div className="pointer-events-none fixed inset-0 -z-20
            bg-[radial-gradient(60rem_60rem_at_top_right,rgba(37,99,235,0.15),transparent_60%),radial-gradient(40rem_40rem_at_bottom_left,rgba(168,85,247,0.12),transparent_60%)]" />
        {/* Engineering grid */}
        <div className="pointer-events-none fixed inset-0 -z-10
            bg-[linear-gradient(to_right,rgba(100,116,139,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,.08)_1px,transparent_1px)]
            [background-size:24px_24px]" />
        {children}
      </body>
    </html>
  )
}

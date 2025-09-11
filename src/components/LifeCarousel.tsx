'use client'
import { useEffect, useRef, useState } from 'react'

type Img = { src: string; alt?: string }

export default function LifeCarousel({ images, title = 'Life Beyond Code' }: { images: Img[]; title?: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)

  const visibleIndex = () => {
    const el = trackRef.current
    if (!el) return 0
    const i = Math.round(el.scrollLeft / el.clientWidth)
    return Math.max(0, Math.min(images.length - 1, i))
  }

  const scrollTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => setIdx(visibleIndex())
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="text-xs text-slate-500">Swipe / drag • Click arrows</div>
      </div>

      <div className="relative">
        {/* Track */}
        <div
          ref={trackRef}
          className="scrollbar-hide snap-x snap-mandatory overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex w-full">
            {images.map((g, i) => (
              <div key={i} className="snap-start shrink-0 w-full">
                <div className="relative aspect-[16/9] md:aspect-[21/9] bg-slate-100 dark:bg-slate-900">
                  <img
                    src={g.src}
                    alt={g.alt || 'gallery image'}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                {g.alt && (
                  <div className="px-4 py-2 text-xs text-slate-500 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
                    {g.alt}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={() => scrollTo(Math.max(0, idx - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-slate-900/80 border
                     border-slate-200 dark:border-slate-700 p-2 shadow hover:bg-white dark:hover:bg-slate-900 hidden sm:flex"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollTo(Math.min(images.length - 1, idx + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-slate-900/80 border
                     border-slate-200 dark:border-slate-700 p-2 shadow hover:bg-white dark:hover:bg-slate-900 hidden sm:flex"
        >
          ›
        </button>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx ? 'bg-brand' : 'bg-slate-300 dark:bg-slate-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

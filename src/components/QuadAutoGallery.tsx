'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

type Img = { src: string; alt?: string }

export default function QuadAutoGallery({
  columns,                   // array of 4 arrays (each card's images)
  title = 'Garage & Builds',
  intervalMs = 5000,         // 5s per slide
}: {
  columns: Img[][]
  title?: string
  intervalMs?: number
}) {
  // indexes for each of the 4 cards
  const [idx, setIdx] = useState<number[]>(
    () => columns.map(() => 0)
  )
  const [paused, setPaused] = useState<boolean[]>(
    () => columns.map(() => false)
  )

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(prev =>
        prev.map((v, i) =>
          paused[i] || (columns[i]?.length ?? 1) < 2
            ? v
            : (v + 1) % columns[i].length
        )
      )
    }, intervalMs)
    return () => clearInterval(t)
  }, [columns, intervalMs, paused])

  const onEnter = (i: number) => setPaused(p => Object.assign([...p], { [i]: true }))
  const onLeave = (i: number) => setPaused(p => Object.assign([...p], { [i]: false }))

  // safety: always render exactly 4 boxes (pad with empties if less)
  const cols = useMemo(() => {
    const c = [...columns]
    while (c.length < 4) c.push([])
    return c.slice(0, 4)
  }, [columns])

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cols.map((list, i) => (
          <div
            key={i}
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={() => onLeave(i)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800"
          >
            <div className="relative aspect-[4/3]">
              {list.length === 0 ? (
                <div className="absolute inset-0 grid place-items-center text-xs text-slate-500">
                  Add images to this slot
                </div>
              ) : (
                list.map((img, j) => (
                  <img
                    key={img.src + j}
                    src={img.src}
                    alt={img.alt || 'gallery image'}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      j === idx[i] ? 'opacity-100' : 'opacity-0'
                    }`}
                    draggable={false}
                  />
                ))
              )}
            </div>

            {/* Optional caption for current slide */}
            {list[idx[i]]?.alt && (
              <div className="px-3 py-1 text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
                {list[idx[i]].alt}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 text-[11px] text-slate-500">
        (Hover to pause a tile)
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export type FaqItem = {
  q: string
  a: string
}

type FaqSectionProps = {
  title: string
  items: FaqItem[]
  defaultOpenIndex?: number | null
  accentLeftBorder?: boolean
}

export function FaqSection({
  title,
  items,
  defaultOpenIndex = 0,
  accentLeftBorder = true,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold mb-10 text-center text-purple-700">{title}</h2>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.q}
                className={
                  'overflow-hidden rounded-xl border border-purple-200 bg-white shadow-sm' +
                  (accentLeftBorder ? ' border-l-8 border-purple-500' : '')
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-purple-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-gray-700">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

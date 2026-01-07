import Link from 'next/link'

export function BookNowCTA() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl flex justify-center">
        <Link
          href="/book-now"
          className="inline-flex items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 transition"
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  )
}

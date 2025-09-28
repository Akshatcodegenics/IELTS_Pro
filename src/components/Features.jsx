import React from 'react'

const features = [
  {
    title: 'Speaking Practice',
    desc: 'Live sessions and AI prompts to improve fluency, pronunciation, and coherence.',
    icon: (
      <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3a3 3 0 00-3 3v6a3 3 0 106 0V6a3 3 0 00-3-3z" />
        <path d="M5 11a7 7 0 0014 0h-2a5 5 0 11-10 0H5z" />
        <path d="M12 19a7 7 0 007-7h2a9 9 0 11-18 0h2a7 7 0 007 7z" />
      </svg>
    ),
  },
  {
    title: 'Mock Tests',
    desc: 'Timed, module-wise practice tests that mirror the official exam format.',
    icon: (
      <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 5a2 2 0 012-2h4l2 2h6a2 2 0 012 2v4H4V5z" />
        <path d="M4 11h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
      </svg>
    ),
  },
  {
    title: 'AI Band Score',
    desc: 'Instant analytics and band predictions with detailed feedback for improvement.',
    icon: (
      <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h2a4 4 0 018 0h2a6 6 0 10-12 0z" />
        <path d="M5 15h14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    desc: 'Ask questions anytime—our mentors and AI assistant are here to help.',
    icon: (
      <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 10a6 6 0 10-12 0v4H4a2 2 0 000 4h3v-2H6v-2h2v4h8v-4h2v2h-1v2h3a2 2 0 000-4h-2v-4z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-800 to-amber-500 bg-clip-text text-transparent">Everything you need to excel</h2>
          <p className="mt-3 text-slate-600">From fundamentals to advanced strategies—practice smarter with tools designed for IELTS success.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
<div key={f.title} className="card bg-gradient-to-b from-white to-sky-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-inset ring-brand-200">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

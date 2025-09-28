import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-brand-700 text-sm font-medium ring-1 ring-inset ring-brand-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0L7.382 6.354 3.2 6.764a1 1 0 00-.555 1.747l3.09 2.7-.92 4.045a1 1 0 001.48 1.095L10 14.347l3.705 1.999a1 1 0 001.48-1.095l-.92-4.045 3.09-2.7a1 1 0 00-.555-1.747l-4.182-.41-1.724-3.8z"/></svg>
              Trusted by 10,000+ students
            </span>
<h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-800 to-amber-500 bg-clip-text text-transparent">
              Achieve your target IELTS band with confidence
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Personalized coaching, realistic mock tests, and AI-powered feedback to help you ace Listening, Reading, Writing, and Speaking.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary text-base">Get Started</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition">
                View Features
              </a>
            </div>
          </div>

          <div className="relative">
<div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-sky-200 blur-3xl opacity-30"></div>
            <div className="relative aspect-[4/3] md:aspect-[5/4] w-full">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-2xl border border-slate-200 shadow-xl"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
                alt="Students studying for IELTS"
                loading="eager"
              />
              {/* Decorative gradient ring overlay */}
              <div className="absolute -inset-1 rounded-2xl ring-1 ring-sky-200/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

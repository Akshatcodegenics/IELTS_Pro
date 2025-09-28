
import React, { useEffect, useState } from 'react'

const fallback = [
  { name: 'Aisha Khan', text: 'I scored an overall band 8.0! The mock tests and feedback were spot on.', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Daniel Chen', text: 'Speaking sessions boosted my confidence. The tips were practical and effective.', avatar: 'https://i.pravatar.cc/100?img=32' },
  { name: 'Sofia Garcia', text: 'AI Band Score helped me track progress every week. Highly recommended!', avatar: 'https://i.pravatar.cc/100?img=45' },
]

export default function Testimonials() {
  const [items, setItems] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/testimonials').then(async (res) => {
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setItems(data)
    }).catch(() => setItems(fallback)).finally(() => setLoading(false))
  }, [])

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-800 to-amber-500 bg-clip-text text-transparent">Student success stories</h2>
          <p className="mt-3 text-slate-600">Real results from learners who trusted us with their IELTS preparation.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="card">
              <div className="flex items-center gap-3">
                <img className="h-12 w-12 rounded-full ring-2 ring-white shadow" src={t.avatar} alt={t.name} />
                <figcaption className="font-semibold text-slate-900">{t.name}</figcaption>
              </div>
              <blockquote className="mt-3 text-slate-700 leading-relaxed">“{t.text}”</blockquote>
            </figure>
          ))}
        </div>

        {loading && <div className="mt-6 text-center text-sm text-slate-500">Loading testimonials…</div>}
      </div>
    </section>
  )
}

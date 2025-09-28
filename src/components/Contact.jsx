import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to submit')
      }
      setStatus({ loading: false, error: '', success: 'Thanks! We will reach out soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Something went wrong', success: '' })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-brand-800 to-brand-500 bg-clip-text text-transparent">Get in touch</h2>
          <p className="mt-3 text-slate-600">Have questions or want a free assessment? Send us a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl card bg-gradient-to-b from-white to-brand-50">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-brand-500 focus:ring-brand-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-brand-500 focus:ring-brand-500" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-brand-500 focus:ring-brand-500" placeholder="Tell us your target band and timeline..." />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button type="submit" disabled={status.loading} className="btn-primary">
              {status.loading ? 'Sending…' : 'Send Message'}
            </button>
            <div className="text-sm">
              {status.error && <span className="text-red-600">{status.error}</span>}
              {status.success && <span className="text-green-600">{status.success}</span>}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

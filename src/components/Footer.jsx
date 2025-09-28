import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="mt-12 border-t border-slate-200 bg-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-600 text-white font-bold">I</span>
              <span className="text-lg font-semibold text-slate-900">IELTS Pro</span>
            </div>
            <p className="mt-3 text-slate-600">Expert-led IELTS preparation to help you reach your dream band score.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Contact</h4>
            <ul className="mt-3 space-y-1 text-slate-600">
              <li>Email: support@ieltspro.example</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Learning Ave, Education City</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#features" className="text-slate-600 hover:text-slate-900">Courses</a></li>
              <li><a href="#features" className="text-slate-600 hover:text-slate-900">Features</a></li>
              <li><a href="#testimonials" className="text-slate-600 hover:text-slate-900">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} IELTS Pro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

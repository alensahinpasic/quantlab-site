'use client';

import { useState, FormEvent } from 'react';

const inquiryTypes = [
  'General Inquiry',
  'Partnership',
  'Student Membership',
  'Media / Articles',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'General Inquiry',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-slate-200 bg-slate-50 p-10 text-center">
        <div className="w-10 h-10 bg-navy-900 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy-900 font-semibold text-lg mb-2">Message Received</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We will review your message and get back to you
          as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-700 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-700 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organization" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={form.organization}
            onChange={handleChange}
            placeholder="Company, university, or institution"
            className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-700 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Inquiry Type <span className="text-red-400">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={form.inquiryType}
            onChange={handleChange}
            className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-navy-700 transition-colors appearance-none"
          >
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe your inquiry in detail."
          className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-700 transition-colors resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center px-8 py-3 bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors duration-150"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

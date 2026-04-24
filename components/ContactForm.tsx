'use client';

import { useState, FormEvent } from 'react';

const inquiryTypes = [
  'General Inquiry',
  'Partnership',
  'Student Membership',
  'Events',
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
      <div className="ql-contact-form ql-contact-form--success">
        <div className="ql-contact-form__check">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="ql-contact-form__success-title">Message received</h3>
        <p className="ql-contact-form__success-copy">
          Thank you for reaching out. We will review your message and get back to you
          as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ql-contact-form">
      <div className="ql-contact-form__grid">
        <div>
          <label htmlFor="name" className="ql-form-label">
            Full Name <span className="ql-form-required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="ql-form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="ql-form-label">
            Email Address <span className="ql-form-required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="ql-form-input"
          />
        </div>
      </div>

      <div className="ql-contact-form__grid">
        <div>
          <label htmlFor="organization" className="ql-form-label">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={form.organization}
            onChange={handleChange}
            placeholder="Company, university, or institution"
            className="ql-form-input"
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className="ql-form-label">
            Inquiry Type <span className="ql-form-required">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={form.inquiryType}
            onChange={handleChange}
            className="ql-form-input"
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
        <label htmlFor="message" className="ql-form-label">
          Message <span className="ql-form-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe your inquiry in detail."
          className="ql-form-input ql-form-textarea"
        />
      </div>

      <div style={{ paddingTop: 8 }}>
        <button type="submit" className="ql-btn ql-btn--primary">
          Send Message
        </button>
      </div>
    </form>
  );
}

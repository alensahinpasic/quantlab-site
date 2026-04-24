import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with CEU Quant Lab. Contact us for general inquiries, partnership opportunities, student membership, or media and article requests.',
};

const contactChannels = [
  {
    title: 'General Inquiries',
    description:
      'Questions about Quant Lab, our activities, or how to get involved as a student.',
    email: 'quantlab@ceu.edu',
  },
  {
    title: 'Partnerships',
    description:
      'Industry firms and organizations interested in events, research collaboration, or recruitment access.',
    email: 'quantlab.partnerships@ceu.edu',
  },
  {
    title: 'Student Membership',
    description:
      'CEU students interested in joining Quant Lab and participating in research and events.',
    email: 'quantlab.membership@ceu.edu',
  },
  {
    title: 'Media and Articles',
    description:
      'Inquiries related to our publications, research output, or press and media engagement.',
    email: 'quantlab.media@ceu.edu',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Reach Out
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Contact
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Whether you are a student, industry professional, academic, or media representative,
            we welcome your inquiry.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Contact Channels
            </p>
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              Find the right contact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactChannels.map((c) => (
              <div key={c.title} className="border border-slate-200 p-5 hover:border-navy-700 transition-colors duration-200">
                <h3 className="text-navy-900 font-semibold text-sm mb-2">{c.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{c.description}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="text-navy-700 text-xs font-semibold hover:text-navy-900 transition-colors break-all"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Send a Message
              </p>
              <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-4">
                Get in touch
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Use this form to reach us directly. We aim to respond within two business days.
                For time-sensitive matters, please indicate the nature of your inquiry.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:quantlab@ceu.edu"
                    className="text-navy-700 text-sm hover:text-navy-900 transition-colors"
                  >
                    quantlab@ceu.edu
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/company/ceu-quant-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-700 text-sm hover:text-navy-900 transition-colors"
                  >
                    linkedin.com/company/ceu-quant-lab
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-slate-600 text-sm">
                    Central European University<br />
                    Vienna, Austria
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

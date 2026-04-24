import type { Metadata } from 'next';
import Link from 'next/link';
import { articles, getCategoryStyle } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'CEU Quant Lab',
  description:
    'Applied finance, data science, and market research at Central European University. CEU Quant Lab bridges academic learning and real-world finance through research, events, and industry engagement.',
};

const metrics = [
  { value: '300+', label: 'Event Participants' },
  { value: 'Active', label: 'CEU Career Services Collaboration' },
  { value: 'Active', label: 'CEU Department of Economics Collaboration' },
  { value: 'Ongoing', label: 'Industry-Facing Events' },
  { value: 'Multiple', label: 'Applied Research Projects' },
];

const activities = [
  {
    title: 'Market Insights',
    description:
      'Regular analysis of equity markets, macro trends, and sector dynamics, produced by members and reviewed to professional standards.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Quantitative Research',
    description:
      'Applied projects in statistical modeling, financial econometrics, and data-driven analysis of market phenomena.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V8a2 2 0 00-2-2h-5L11 4H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI in Finance',
    description:
      'Exploring how machine learning, natural language processing, and AI tools are transforming financial analysis, risk assessment, and trading.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Career Development',
    description:
      'Structured preparation for finance careers through workshops, technical skill development, and mentorship from senior members.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Industry Events',
    description:
      'Speaker sessions, firm presentations, panel discussions, and networking events connecting members with finance professionals.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const featuredArticles = articles.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              Student-Led Research Initiative &nbsp;&bull;&nbsp; Central European University
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              CEU Quant Lab
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-snug mb-6">
              Applied finance, data science, and market research at Central European University.
            </p>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-10">
              Quant Lab bridges the gap between academic learning and the practical demands of
              the finance industry. Through structured research, professional events, and direct
              engagement with CEU faculty and industry partners, we prepare students for careers
              at the intersection of finance and data.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center px-6 py-3 bg-white text-navy-900 text-sm font-semibold hover:bg-slate-100 transition-colors duration-150"
              >
                Read Articles
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 text-sm font-semibold hover:border-slate-400 hover:text-white transition-colors duration-150"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-bold text-navy-900 mb-1">{m.value}</p>
                <p className="text-slate-500 text-xs leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight max-w-xl">
              Research, events, and career development under one platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-white border border-slate-200 p-6 hover:border-navy-700 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-9 h-9 bg-slate-100 flex items-center justify-center mb-4 text-navy-700 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-200">
                  {activity.icon}
                </div>
                <h3 className="text-navy-900 font-semibold text-base mb-2">{activity.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Latest Research
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                Featured Articles
              </h2>
            </div>
            <Link
              href="/articles"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="border border-slate-200 p-6 hover:border-navy-700 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 mb-4 self-start ${getCategoryStyle(
                    article.category
                  )}`}
                >
                  {article.category}
                </span>
                <h3 className="text-navy-900 font-semibold text-base leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-400 text-xs">{article.date}</span>
                  <Link
                    href="/articles"
                    className="text-navy-700 text-xs font-semibold hover:text-navy-900 transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Collaborators */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Academic Roots
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Grounded in the CEU academic community
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Quant Lab operates in close connection with CEU academic infrastructure,
              supporting members through access to institutional resources and professional guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              {
                name: 'CEU Career Services',
                description:
                  'Collaborating on career development programming, recruiting preparation, and professional skills training for members.',
              },
              {
                name: 'CEU Department of Economics',
                description:
                  'Engaging with academic faculty on research methodology, quantitative approaches, and applied economic analysis.',
              },
            ].map((c) => (
              <div key={c.name} className="border border-navy-700 p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{c.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-white border border-slate-600 px-6 py-3 text-sm font-semibold hover:border-slate-400 transition-colors duration-150"
          >
            View partnership opportunities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Get Involved
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4 max-w-2xl mx-auto">
            Connect with CEU Quant Lab
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Whether you are a student looking to get involved, an industry professional interested
            in collaboration, or an academic partner, we welcome the conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors duration-150"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 text-sm font-semibold hover:border-slate-400 hover:text-slate-900 transition-colors duration-150"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

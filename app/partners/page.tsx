import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Partner with CEU Quant Lab. Explore opportunities for events, research collaboration, recruitment access, workshops, and sponsorship with our applied finance and data research initiative.',
};

const opportunities = [
  {
    number: '01',
    title: 'Events and Speaker Sessions',
    description:
      'Connect your professionals with our engaged membership through panel discussions, firm presentations, and industry talks. We organize structured events that create genuine dialogue between students and practitioners.',
  },
  {
    number: '02',
    title: 'Research Collaboration',
    description:
      'Co-develop applied research projects that combine our analytical capabilities with your firm\'s domain expertise. Collaborative output can take the form of white papers, data analysis, or sector reports.',
  },
  {
    number: '03',
    title: 'Recruitment Access',
    description:
      'Identify and engage analytically strong students through targeted recruitment events, case study sessions, and early talent pipelines. Our members are actively seeking careers in finance and related fields.',
  },
  {
    number: '04',
    title: 'Workshops and Case Studies',
    description:
      'Deliver hands-on learning experiences that expose students to real-world analytical problems and professional methodologies. Workshops can be tailored to your firm\'s technical focus areas.',
  },
  {
    number: '05',
    title: 'Sponsorship and Visibility',
    description:
      'Build institutional presence at CEU through sustained sponsorship of research initiatives, publications, and events. Sponsorship packages can be structured to align with your firm\'s engagement objectives.',
  },
];

const reasons = [
  {
    title: 'Analytically Prepared Members',
    description:
      'Our members come from economics, data science, and business programs, with a focus on quantitative methods and market analysis.',
  },
  {
    title: 'Institutional Setting',
    description:
      'CEU is an internationally accredited research university with a strong economics faculty. Engagement through Quant Lab carries academic context.',
  },
  {
    title: 'Direct Industry Access',
    description:
      'We facilitate direct access to student talent without the friction of large-scale campus recruiting events.',
  },
  {
    title: 'Flexible Engagement',
    description:
      'Partnerships can range from a single speaker session to multi-year research collaboration, structured around your objectives.',
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Industry and Academic Engagement
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Partners
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            We work with financial firms, academic institutions, and professional organizations
            to connect students with the industry and advance applied research.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Why Partner With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-6">
                A direct channel to analytically focused students
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-4">
                CEU Quant Lab is a focused, professionally oriented research initiative.
                Our members are not passive recipients of career content: they produce
                research, analyze markets, and actively prepare for roles in finance and
                data-driven fields.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                Partnering with Quant Lab gives your organization access to this community
                in a setting that rewards genuine engagement over generic outreach.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="border border-slate-200 p-5 hover:border-navy-700 transition-colors duration-200">
                  <h3 className="text-navy-900 font-semibold text-sm mb-2">{r.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              How We Engage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight max-w-xl">
              Partnership opportunities
            </h2>
          </div>
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <div
                key={opp.number}
                className="bg-white border border-slate-200 p-6 hover:border-navy-700 hover:shadow-sm transition-all duration-200 flex gap-6 items-start"
              >
                <span className="text-navy-700 font-bold text-lg tabular-nums shrink-0 w-8">
                  {opp.number}
                </span>
                <div>
                  <h3 className="text-navy-900 font-semibold text-base mb-2">{opp.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{opp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Collaborators */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Institutional Collaborators
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Current partnerships
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-slate-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-3">
                Academic Partner
              </p>
              <h3 className="text-navy-900 font-bold text-lg mb-3">CEU Career Services</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Quant Lab collaborates with CEU Career Services on career development
                programming, professional skills workshops, and member preparation for
                finance industry recruiting processes. This partnership ensures our
                activities are aligned with institutional career support resources.
              </p>
            </div>
            <div className="border border-slate-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-3">
                Academic Partner
              </p>
              <h3 className="text-navy-900 font-bold text-lg mb-3">
                CEU Department of Economics
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We engage with the Department of Economics on research methodology,
                quantitative approaches, and applied economic analysis. This academic
                connection supports the rigor and credibility of our research output
                and connects members with faculty expertise.
              </p>
            </div>
          </div>

          {/* CFA Resources Note */}
          <div className="border border-slate-200 bg-slate-50 p-6 max-w-3xl">
            <p className="text-navy-900 text-xs font-semibold uppercase tracking-[0.15em] mb-3">
              Educational Resources
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              CEU Quant Lab has access to selected CFA Institute educational resources
              for student learning and events, subject to CFA Institute trademark and
              usage guidelines. CFA Institute is a registered trademark of CFA Institute.
              CEU Quant Lab is not affiliated with, endorsed by, or sponsored by CFA Institute.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Start a Conversation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Interested in partnering with CEU Quant Lab?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We work with firms across investment banking, asset management, consulting,
              and financial technology. Reach out to discuss how a partnership can be
              structured around your objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-navy-900 text-sm font-semibold hover:bg-slate-100 transition-colors duration-150"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

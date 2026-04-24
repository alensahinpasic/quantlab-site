import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about CEU Quant Lab, its mission, research philosophy, and approach to talent development at Central European University.',
};

const pillars = [
  {
    title: 'Applied Research',
    description:
      'Members collaborate on market analysis, equity research, and quantitative projects, producing output held to professional standards.',
  },
  {
    title: 'Events and Speakers',
    description:
      'We organize talks, panel discussions, and workshops with finance professionals, creating access to practitioners across the industry.',
  },
  {
    title: 'Career Development',
    description:
      'We support members with knowledge, networks, and targeted preparation for finance and data careers.',
  },
  {
    title: 'Academic Collaboration',
    description:
      'We work with CEU faculty and academic departments to connect classroom learning with industry practice.',
  },
];

const divisions = [
  {
    name: 'Management',
    members: [
      { name: 'Alen Sahinpasic', role: 'President and Founder' },
      { name: 'Uros Jez', role: 'Vice President' },
    ],
  },
  {
    name: 'Equity Research and Global Markets',
    members: [
      { name: 'Christoph Kurzbauer', role: 'Head of Equity Research and Global Markets' },
    ],
  },
  {
    name: 'Event Organisation',
    members: [
      { name: 'Mariia Avdokhina', role: 'Head of Organisation Team' },
    ],
  },
  {
    name: 'Business Law',
    members: [
      { name: 'Uros Jez', role: 'Head of Business Law Team' },
    ],
  },
  {
    name: 'AI and Tech',
    members: [],
    comingSoon: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Who We Are
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            About Us
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            A student-led applied finance and data research initiative at Central European
            University, connecting students, faculty, and industry through practical output
            and professional engagement.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Background
              </p>
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight mb-6">
                Who we are
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                CEU Quant Lab is a student-led applied finance and data research initiative
                at Central European University. We bring together students from economics,
                data science, and business programs who share an interest in finance,
                quantitative methods, and market analysis.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Quant Lab was created to give students a structured platform to develop
                finance, data, and research skills through practical output, professional
                events, and collaboration with academic and industry stakeholders. We
                operate as a serious, professionally oriented initiative within the
                CEU community.
              </p>
            </div>
            <div>
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Mission
              </p>
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight mb-6">
                Our mission
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Our mission is to provide a serious, structured platform for students to
                develop finance and data competencies through applied research, collaborative
                projects, and real-world industry engagement.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We aim to produce graduates who are analytically rigorous, professionally
                credible, and prepared to contribute to quantitative and analytical roles
                in finance and adjacent fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              How We Operate
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight max-w-xl mb-4">
              Our model
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
              Quant Lab operates across four interconnected areas. Each reinforces the others:
              research builds knowledge, events build networks, career development builds
              readiness, and academic collaboration ensures rigor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-white border border-slate-200 p-6 hover:border-navy-700 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-navy-700 font-bold text-sm tabular-nums w-6 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-navy-900 font-semibold text-base mb-2">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Intellectual Approach
              </p>
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight mb-6">
                Research and learning philosophy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                We believe that learning finance is best done by doing. Our research output,
                whether market commentary, equity analysis, or quantitative models, is produced
                by students, reviewed by peers, and developed with professional standards in mind.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We prioritize intellectual rigor over volume. Quality analysis that holds up
                to scrutiny matters more than frequent publication. This approach reflects
                the standards expected in professional finance roles.
              </p>
            </div>
            <div>
              <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Career Preparation
              </p>
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight mb-6">
                Talent development
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Quant Lab is built around the idea that structured, practical experience
                is the most effective preparation for a career in finance. Members develop
                skills in financial modeling, data analysis, market research, and professional
                communication through hands-on projects and mentorship.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We actively support members in navigating recruiting processes, building
                technical skills, and understanding the landscape of careers in finance,
                consulting, and data-driven roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-navy-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Meet the Team
            </h2>
          </div>
          <div className="space-y-10">
            {divisions.map((division) => (
              <div key={division.name}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4 pb-3 border-b border-slate-200">
                  {division.name}
                </p>
                {division.comingSoon ? (
                  <div className="bg-white border border-dashed border-slate-200 p-6 max-w-xs">
                    <p className="text-slate-400 text-sm">Coming soon</p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {division.members.map((member) => (
                      <div
                        key={member.name + member.role}
                        className="bg-white border border-slate-200 p-5 hover:border-navy-700 transition-colors duration-200 min-w-[200px]"
                      >
                        <div className="w-10 h-10 bg-navy-900 flex items-center justify-center mb-3">
                          <span className="text-white text-xs font-bold">
                            {member.name.split(' ').map((n) => n[0]).join('')}
                          </span>
                        </div>
                        <p className="text-navy-900 font-semibold text-sm">{member.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{member.role}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Interested in joining or partnering?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                Reach out through our contact page to learn more about membership, collaboration,
                or industry engagement opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-navy-900 text-sm font-semibold hover:bg-slate-100 transition-colors duration-150 shrink-0"
              >
                Contact Us
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 text-sm font-semibold hover:border-slate-400 hover:text-white transition-colors duration-150 shrink-0"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about CEU Quant Lab — its mission, research philosophy, team, and approach to applied finance and data science at Central European University.',
};

/* ── Geometric SVG decorations ── */
function HeroGeometry() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hc"><rect width="400" height="500" /></clipPath>
      </defs>
      <g clipPath="url(#hc)">
        <polygon points="400,0 400,280 140,500 60,500" fill="#2C7A8A" opacity="0.9" />
        <polygon points="400,60 400,220 260,500 210,500" fill="#4AA3B0" opacity="0.55" />
        <polygon points="0,500 0,360 180,500" fill="#000000" opacity="0.12" />
        <line x1="0" y1="0" x2="400" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </g>
    </svg>
  );
}

function CtaGeometry() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="1440,0 1440,420 980,600 820,600" fill="#2C7A8A" opacity="0.55" />
      <polygon points="1440,120 1440,300 1180,600 1080,600" fill="#4AA3B0" opacity="0.35" />
      <polygon points="0,600 0,520 180,600" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"
      style={{ transition: 'transform 180ms ease' }}>
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* ── Section components ── */
function AboutHero() {
  return (
    <section className="ql-about-hero">
      <div className="ql-wrap">
        <div className="ql-about-hero__grid">
          <div>
            <div className="ql-about-hero__meta">
              <span className="ql-about-hero__meta-dot" />
              <span>About the Lab</span>
              <span className="ql-about-hero__meta-sep" />
              <span>Est. 2022</span>
              <span className="ql-about-hero__meta-sep" />
              <span>Budapest &middot; Vienna</span>
            </div>
            <h1 className="ql-h1">
              About <em className="ql-accent-underline">CEU Quant Lab.</em>
            </h1>
            <p className="ql-about-hero__sub">
              Applied finance, data science, and strategy at Central European University
              — a research community that trains the next generation of analysts, consultants,
              and builders to the standard of industry practice.
            </p>
          </div>

          <aside className="ql-about-hero__card">
            <HeroGeometry />
            <div className="ql-about-hero__card-top">
              <div className="ql-about-hero__card-label">Charter &middot; 2026</div>
            </div>
            <div className="ql-about-hero__card-bottom">
              <div className="ql-about-hero__card-body">
                "Rigor over rhetoric. Evidence over opinion. Decisions, not decks."
              </div>
              <div className="ql-about-hero__card-meta">The Lab's operating principle</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="ql-mission">
      <div className="ql-wrap">
        <div className="ql-mission__inner">
          <div>
            <div className="ql-eyebrow-row">
              <span className="ql-eyebrow-row__line" />
              <span className="ql-eyebrow-row__num">01 — Mission</span>
            </div>
            <div className="ql-mission__label">Our purpose</div>
          </div>
          <p className="ql-mission__quote">
            Closing the gap between{' '}
            <span className="ql-emph">academic theory</span> and real-world
            decision-making across finance, strategy, and data.
          </p>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    n: '01',
    title: 'Analytical Rigor',
    desc: 'Every conclusion is traceable to data, assumptions, and a reproducible model. We treat research like an auditor would.',
    bullets: ['Peer review', 'Reproducible models', 'Clear assumptions'],
  },
  {
    n: '02',
    title: 'Applied Learning',
    desc: 'Members work on live problems — market notes, commissioned cases, partner briefs — not abstract classroom exercises.',
    bullets: ['Live case work', 'Industry briefs', 'Shipped outputs'],
  },
  {
    n: '03',
    title: 'Strategic Thinking',
    desc: 'Analysis is only useful when it drives a decision. We frame questions the way practitioners do: what to do, and why it matters.',
    bullets: ['Decision framing', 'Structured reasoning', 'Executive-level communication'],
  },
];

function HowWeWork() {
  return (
    <section className="ql-section--tight" style={{ background: 'var(--paper)' }}>
      <div className="ql-wrap">
        <div className="ql-section__head">
          <div>
            <div className="ql-eyebrow-row">
              <span className="ql-eyebrow-row__line" />
              <span className="ql-eyebrow-row__num">02 — How we work</span>
            </div>
            <h2 className="ql-h2">
              Three principles that run through everything we publish.
            </h2>
          </div>
          <p>
            The Lab is built on three operating principles — applied consistently
            from desk notes to working papers to industry roundtables.
          </p>
        </div>
        <div className="ql-pillars">
          {pillars.map((p) => (
            <div className="ql-pillar" key={p.n}>
              <div className="ql-pillar__num">{p.n}</div>
              <h3 className="ql-pillar__title">{p.title}</h3>
              <p className="ql-pillar__desc">{p.desc}</p>
              <ul className="ql-pillar__bullets">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>
      <div className="ql-wrap" style={{ paddingTop: 96, paddingBottom: 24 }}>
        <div className="ql-section__head" style={{ marginBottom: 40 }}>
          <div>
            <div className="ql-eyebrow-row">
              <span className="ql-eyebrow-row__line" />
              <span className="ql-eyebrow-row__num">03 — The Community</span>
            </div>
            <h2 className="ql-h2">A cross-disciplinary research community.</h2>
          </div>
          <p>
            Quant Lab brings together students across economics, finance, business,
            data science and computer science — working alongside faculty and industry
            to produce analysis that practitioners actually use.
          </p>
        </div>
      </div>
      <div className="ql-community">
        <div className="ql-community__text">
          <h2
            className="ql-h2"
            style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', marginBottom: 24 }}
          >
            Built by students who want to work at the standard of industry.
          </h2>
          <p>
            Members come from across CEU's graduate programmes — many with prior
            experience at banks, consultancies and technology firms — and share an
            interest in using quantitative methods to answer real business questions.
          </p>
          <p>
            We work in small desks, publish under our own names, and hold each other
            to a standard closer to a research firm than a student society.
          </p>
          <div className="ql-community__tags">
            {['Finance', 'Consulting', 'Business', 'Technology', 'Data science'].map((t) => (
              <span className="ql-chip" key={t}>
                <span className="ql-chip__dot" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="ql-community__visual">
          <HeroGeometry />
          <div className="ql-community__visual-content">
            <div className="ql-community__visual-kicker">By the numbers</div>
            <div className="ql-community__visual-headline">
              Four desks. One standard. A shared room in Budapest.
            </div>
            <div className="ql-community__stats">
              {[
                { num: '300', unit: '+', lbl: 'Participants across cohorts and live events' },
                { num: '4', unit: '',   lbl: 'Research desks — Equity · Macro · Strategy · Data' },
                { num: '12', unit: '',  lbl: 'Research notes published this year' },
                { num: '2', unit: '',   lbl: 'CEU partners — Career Services and Economics' },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="ql-community__stat-num">
                    {s.num}
                    {s.unit && <span className="ql-community__stat-unit">{s.unit}</span>}
                  </div>
                  <div className="ql-community__stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const gains = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,15 6,11 10,13 14,7 18,4" />
        <line x1="2" y1="18" x2="18" y2="18" />
      </svg>
    ),
    title: 'Market and Financial Analysis',
    desc: 'Valuation frameworks, market modelling, and equity/FX/rates analysis published under your own byline.',
    tags: 'Equities · FX · Rates',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7" />
        <path d="M10 3 L10 17 M3 10 L17 10" />
      </svg>
    ),
    title: 'Strategic Problem Solving',
    desc: 'Case-based reasoning, structured problem decomposition, and executive-level communication.',
    tags: 'Frameworks · Hypotheses · Briefs',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="10" cy="5" rx="7" ry="2.5" />
        <path d="M3 5v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
        <path d="M3 10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
      </svg>
    ),
    title: 'Data and Quantitative Skills',
    desc: 'Python, SQL, statistical inference and machine-learning techniques applied to real datasets.',
    tags: 'Python · SQL · ML',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="14" height="10" />
        <path d="M7 6V4a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    title: 'Industry Exposure',
    desc: 'Closed-door roundtables, mentor conversations, and direct introductions to partner firms.',
    tags: 'Roundtables · Mentors · Intros',
  },
];

function Gains() {
  return (
    <section className="ql-section--tight" style={{ background: 'var(--paper)' }}>
      <div className="ql-wrap">
        <div className="ql-section__head">
          <div>
            <div className="ql-eyebrow-row">
              <span className="ql-eyebrow-row__line" />
              <span className="ql-eyebrow-row__num">04 — What you gain</span>
            </div>
            <h2 className="ql-h2">Skills that compound across careers.</h2>
          </div>
          <p>
            Members leave the Lab with portfolios of published work, a working command
            of the technical toolkit used in industry, and a network across finance,
            consulting and technology.
          </p>
        </div>
        <div className="ql-gains">
          {gains.map((g) => (
            <div className="ql-gain" key={g.title}>
              <div className="ql-gain__icon">{g.icon}</div>
              <h3 className="ql-gain__title">{g.title}</h3>
              <p className="ql-gain__desc">{g.desc}</p>
              <div className="ql-gain__tags">{g.tags}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="ql-section--tight" style={{ background: 'var(--paper-2)' }}>
      <div className="ql-wrap">
        <div className="ql-section__head">
          <div>
            <div className="ql-eyebrow-row">
              <span className="ql-eyebrow-row__line" />
              <span className="ql-eyebrow-row__num">05 — Timeline</span>
            </div>
            <h2 className="ql-h2">From first note to institutional partnership.</h2>
          </div>
          <p>
            A short history, the current state of the Lab, and the work ahead —
            kept intentionally brief.
          </p>
        </div>
        <div className="ql-timeline">
          <div className="ql-tcol">
            <div className="ql-tcol__year">
              2022
              <span className="ql-tcol__year-sub">Founded</span>
            </div>
            <h3 className="ql-tcol__title">A reading group becomes a research lab.</h3>
            <p className="ql-tcol__desc">
              Founded by CEU graduate students in economics and business to bring
              practitioner-grade analysis into the university.
            </p>
            <ul className="ql-tcol__list">
              <li>First desk note published</li>
              <li>Charter and editorial standards</li>
              <li>Initial cohort of 22 members</li>
            </ul>
          </div>
          <div className="ql-tcol">
            <div className="ql-tcol__year">
              2026
              <span className="ql-tcol__year-sub">Today</span>
            </div>
            <h3 className="ql-tcol__title">Four desks, institutional partnerships.</h3>
            <p className="ql-tcol__desc">
              Equity, Macro, Strategy and Data desks publishing regularly, working with
              CEU Career Services and Economics, and hosting industry roundtables.
            </p>
            <ul className="ql-tcol__list">
              <li>300+ participants across cohorts</li>
              <li>Research notes published this year</li>
              <li>Commissioned strategy case work</li>
            </ul>
          </div>
          <div className="ql-tcol">
            <div className="ql-tcol__year">
              Next
              <span className="ql-tcol__year-sub">Future</span>
            </div>
            <h3 className="ql-tcol__title">Alumni network and an annual review.</h3>
            <p className="ql-tcol__desc">
              Expanding into a formal alumni network across finance and consulting, and
              publishing an annual CEE research review alongside partner institutions.
            </p>
            <ul className="ql-tcol__list">
              <li>Alumni mentoring programme</li>
              <li>Annual CEE review</li>
              <li>Applied-AI research track</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Meet the Team ── */
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

function MeetTheTeam() {
  return (
    <section className="ql-team-section">
      <div className="ql-wrap">
        <div className="ql-section__head" style={{ marginBottom: 48 }}>
          <div>
            <div className="ql-eyebrow-row">
              <span className="ql-eyebrow-row__line" />
              <span className="ql-eyebrow-row__num">06 — People</span>
            </div>
            <h2 className="ql-h2">Meet the team.</h2>
          </div>
          <p>
            The Lab is run by a small leadership team across research, events,
            legal, and technology. Desk leads set the standard for their divisions.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {divisions.map((div) => (
            <div className="ql-team-division" key={div.name}>
              <div className="ql-team-division-label">{div.name}</div>
              {div.comingSoon ? (
                <div
                  style={{
                    border: '1px dashed var(--rule)',
                    padding: '20px 24px',
                    maxWidth: 220,
                    background: 'var(--paper)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-3)',
                    }}
                  >
                    Coming soon
                  </span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {div.members.map((m) => (
                    <div className="ql-member-card" key={m.name + m.role}>
                      <div className="ql-member-card__avatar">
                        <span className="ql-member-card__initials">
                          {m.name.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ql-member-card__name">{m.name}</div>
                      <div className="ql-member-card__role">{m.role}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="ql-about-cta" id="join">
      <CtaGeometry />
      <div className="ql-wrap">
        <div className="ql-about-cta__grid">
          <div>
            <div className="ql-about-cta__kicker">Join the Lab — Spring 2026 intake</div>
            <h2>
              Develop skills for careers in{' '}
              <em>finance, consulting, business, and technology.</em>
            </h2>
          </div>
          <div className="ql-about-cta__aside">
            <p>
              Members work on published research, commissioned industry cases and
              applied-AI projects — graduating with a portfolio of work under their
              own name.
            </p>
            <div className="ql-about-cta__ctas">
              <Link href="/contact" className="ql-btn ql-btn--on-dark">
                Apply to join <Arrow />
              </Link>
              <Link href="/partners" className="ql-btn ql-btn--on-dark-ghost">
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <HowWeWork />
      <Community />
      <Gains />
      <Timeline />
      <MeetTheTeam />
      <AboutCTA />
    </>
  );
}

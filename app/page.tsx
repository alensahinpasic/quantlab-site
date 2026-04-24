import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialGeometry, EditorialHero, SectionHeading } from '@/components/Editorial';
import PublicationVisual from '@/components/PublicationVisual';
import { articles } from '@/lib/articles';
import { credibilityStats, events, projects } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'CEU Quant Lab',
  description:
    'Projects, articles, and events focused on applied analysis across data, finance, and business.',
};

const platformCards = [
  {
    title: 'Projects',
    description:
      'Projects focus on applied analysis across data, finance, and business, with outputs structured to reflect industry standards.',
    href: '/projects',
  },
  {
    title: 'Events',
    description:
      'Panels, discussions, and industry-facing events supporting work across projects and articles.',
    href: '/events',
  },
  {
    title: 'Articles',
    description:
      'Articles and analysis that make current topics in data, finance, and business easier to follow.',
    href: '/articles',
  },
];

const tickerItems = ['SPX', 'STOXX', 'EUR/USD', 'DAX', 'BUX', 'BTP', 'NASDAQ', 'EUR/HUF'];

export default function HomePage() {
  return (
    <>
      <EditorialHero
        eyebrow="Central European University · Applied Platform"
        title={
          <>
            Turning Research into <em className="ql-accent-underline">Market Insight.</em>
          </>
        }
        subtitle="CEU Quant Lab focuses on applied analysis through projects, articles, and events across data, finance, and business."
        panelLabel="Overview · spring 2026"
        panelQuote="Projects, articles, and events structured around clear analysis and real market relevance."
        panelMeta="Vienna · CEU Quant Lab"
        ctas={[
          { href: '/projects', label: 'Explore projects' },
          { href: '/articles', label: 'View articles', variant: 'ghost' },
        ]}
      />

      <section className="ql-ticker" aria-label="Market ticker">
        <div className="ql-ticker__track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="ql-ticker__item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="ql-cred">
        <div className="ql-wrap">
          <div className="ql-cred__grid">
            {credibilityStats.map((item) => (
              <div key={item.label} className="ql-cred__item">
                <div className="ql-cred__val">{item.value}</div>
                <div className="ql-cred__lbl">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="01 — Platform"
            title="Built Around Projects, Articles, and Events"
            copy="Projects, articles, and events sit at the centre of the platform, with an emphasis on applied work, clear communication, and continuity across outputs."
          />
          <div className="ql-feature-grid">
            {platformCards.map((card) => (
              <Link key={card.title} href={card.href} className="ql-feature-card">
                <div className="ql-feature-card__eyebrow">Programme</div>
                <h3 className="ql-feature-card__title">{card.title}</h3>
                <p className="ql-feature-card__copy">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section--tight" style={{ background: 'var(--paper)' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="02 — Projects"
            title="Selected Projects"
            copy="Projects are selected to reflect applied work across data, finance, business, and strategy."
          />
          <div className="ql-notes-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.title} className="ql-note-card">
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">{project.tag}</span>
                  <span className="ql-note-card__date">Project</span>
                </div>
                <div className="ql-note-card__body">
                  <h3 className="ql-note-card__title">{project.title}</h3>
                  <p className="ql-note-card__description">{project.summary}</p>
                </div>
                <div className="ql-note-card__foot">
                  <span>CEU Quant Lab</span>
                  <span>{project.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section--tight" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="03 — Articles"
            title="Selected Articles"
            copy="Articles combine concise writing, category framing, and analytical visuals across data, finance, and business."
          />
          <div className="ql-notes-grid">
            {articles.slice(0, 3).map((article) => (
              <article key={article.id} className="ql-note-card">
                <PublicationVisual category={article.category} />
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">Article</span>
                  <span className="ql-note-card__date">{article.date}</span>
                </div>
                <div className="ql-note-card__body">
                  <div className="ql-note-card__row">
                    <span className="ql-filter-chip">{article.category}</span>
                  </div>
                  <h3 className="ql-note-card__title">{article.title}</h3>
                  <p className="ql-note-card__description">{article.description}</p>
                </div>
                <div className="ql-note-card__foot">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section--tight" style={{ background: 'var(--paper)' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="04 — Events"
            title="Selected Events"
            copy="Panels, discussions, and industry-facing events supporting work across projects and articles."
          />
          <div className="ql-notes-grid">
            {events.slice(0, 3).map((event) => (
              <article key={event.title} className="ql-note-card">
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">{event.format}</span>
                  <span className="ql-note-card__date">{event.date}</span>
                </div>
                <div className="ql-note-card__body">
                  <h3 className="ql-note-card__title">{event.title}</h3>
                  <p className="ql-note-card__description">{event.summary}</p>
                </div>
                <div className="ql-note-card__foot">
                  <span>Event</span>
                  <span>{event.format}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-about-cta">
        <EditorialGeometry />
        <div className="ql-wrap">
          <div className="ql-about-cta__grid">
            <div>
              <div className="ql-about-cta__kicker">Final Call to Action</div>
              <h2>
                Explore CEU Quant Lab through <em>projects, articles, and events.</em>
              </h2>
            </div>
            <div className="ql-about-cta__aside">
              <p>
                CEU Quant Lab is built around projects, articles, and events, with
                a continuing focus on applied work across data, finance, and business.
              </p>
              <div className="ql-about-cta__ctas">
                <Link href="/projects" className="ql-btn ql-btn--on-dark">
                  View projects
                </Link>
                <Link href="/contact" className="ql-btn ql-btn--on-dark-ghost">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

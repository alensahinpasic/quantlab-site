import type { Metadata } from 'next';
import { EditorialHero, SectionHeading } from '@/components/Editorial';
import { events } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Panels, discussions, and industry-facing events supporting work across projects and articles.',
};

export default function EventsPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Events · calendar"
        title={
          <>
            Events and <em className="ql-accent-underline">Discussions.</em>
          </>
        }
        subtitle="Panels, discussions, and industry-facing events supporting work across projects and articles."
        panelLabel="Events overview"
        panelQuote="Events complement projects and articles with discussion, context, and external perspectives."
        panelMeta="Panels · Discussions · Speaker Events"
      />

      <section className="ql-section" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="01 — Events"
            title="Panels, discussions, and events"
            copy="Events support the broader body of work by adding context, external perspective, and discussion around projects and articles."
          />
          <div className="ql-notes-grid">
            {events.map((event) => (
              <article key={event.title} className="ql-note-card">
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">{event.format}</span>
                  <span className="ql-note-card__date">{event.date}</span>
                </div>
                <div className="ql-note-card__body">
                  <h2 className="ql-note-card__title">{event.title}</h2>
                  <p className="ql-note-card__description">{event.summary}</p>
                </div>
                <div className="ql-note-card__foot">
                  <span>Live format</span>
                  <span>{event.format}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { EditorialHero, SectionHeading } from '@/components/Editorial';
import { projects } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects from CEU Quant Lab spanning data, finance, business, and strategy.',
};

export default function ProjectsPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Applied work · ongoing projects"
        title={
          <>
            Selected <em className="ql-accent-underline">Projects.</em>
          </>
        }
        subtitle="Projects focus on applied analysis across data, finance, and business, with outputs structured to reflect industry standards."
        panelLabel="Projects desk"
        panelQuote="Projects are structured around practical analysis, defined outputs, and clear scope."
        panelMeta="Research · Modelling · Delivery"
      />

      <section className="ql-section" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="01 — Current slate"
            title="Selected Projects"
            copy="Projects focus on applied analysis across data, finance, and business, with outputs structured to reflect industry standards."
          />
          <div className="ql-notes-grid">
            {projects.map((project) => (
              <article key={project.title} className="ql-note-card">
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">{project.tag}</span>
                  <span className="ql-note-card__date">Active</span>
                </div>
                <div className="ql-note-card__body">
                  <h2 className="ql-note-card__title">{project.title}</h2>
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
    </>
  );
}

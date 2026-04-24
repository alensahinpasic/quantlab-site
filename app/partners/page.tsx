import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { EditorialHero, SectionHeading } from '@/components/Editorial';
import { collaborators } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Work with CEU Quant Lab through university collaboration, speaker engagement, and educational resources.',
};

const reasons = [
  'Collaboration with CEU stakeholders supports projects, articles, and events.',
  'Speaker engagement adds context to current work across the platform.',
  'Educational resources add useful context for members interested in finance and investment topics.',
];

const opportunities = [
  'University collaboration',
  'Industry and speaker engagement',
  'Educational resources and learning opportunities',
  'Contact and ongoing coordination',
];

export default function PartnersPage() {
  return (
    <>
      <EditorialHero
        eyebrow="External engagement · partnerships"
        title={
          <>
            University and External <em className="ql-accent-underline">Engagement.</em>
          </>
        }
        subtitle="CEU Quant Lab works with university stakeholders, speakers, and external contributors in ways that support applied work across data, finance, and business."
        panelLabel="Partner note"
        panelQuote="Projects, articles, and events are strengthened by thoughtful collaboration and relevant educational resources."
        panelMeta="University · Speakers · Educational Resources"
        ctas={[
          { href: '/contact', label: 'Start a conversation' },
          { href: '/events', label: 'View events', variant: 'ghost' },
        ]}
      />

      <section className="ql-section" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="01 — Why partner"
            title="University collaboration"
            copy="CEU Quant Lab works within the CEU environment and benefits from collaboration that supports applied work, relevant discussion, and coordinated activity."
          />
          <div className="ql-feature-grid">
            {reasons.map((reason) => (
              <article key={reason} className="ql-feature-card">
                <div className="ql-feature-card__eyebrow">Focus</div>
                <p className="ql-feature-card__copy">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section--tight" style={{ background: 'var(--paper)' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="02 — Opportunities"
            title="Industry and speaker engagement"
            copy="External engagement is most useful when it is clear, relevant, and connected to projects, articles, and applied work."
          />
          <div className="ql-notes-grid">
            {opportunities.map((item, index) => (
              <article key={item} className="ql-note-card">
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">Opportunity {index + 1}</span>
                  <span className="ql-note-card__date">Open</span>
                </div>
                <div className="ql-note-card__body">
                  <h2 className="ql-note-card__title">{item}</h2>
                  <p className="ql-note-card__description">
                    Structured to support applied work and discussion across data,
                    finance, business, and strategy.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section--tight" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="03 — Resources"
            title="CFA Institute Educational Resources"
            copy="CEU Quant Lab also makes use of educational resources and learning opportunities relevant to members interested in investment and finance."
          />
          <div className="ql-cfa-note">
            <Image
              src="/cfa-institute-logo-student-clubs.jpg"
              alt="CFA Institute logo"
              width={640}
              height={160}
              className="ql-cfa-note__logo"
            />
            <div className="ql-cfa-note__eyebrow">CFA Institute Educational Resources</div>
            <p>
              CEU Quant Lab provides content and learning opportunities for students offered
              by CFA Institute, the global leading association of investment professionals -
              setting the standard for professional excellence.
            </p>
            <p className="ql-cfa-note__fineprint">
              CFA Institute and its logo are trademarks owned by CFA Institute. Use of CFA
              Institute intellectual property is subject to CFA Institute trademark and
              usage guidelines.
            </p>
          </div>
        </div>
      </section>

      <section className="ql-section--tight" style={{ background: 'var(--paper)' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="04 — Contact"
            title="Contact"
            copy="If you would like to discuss collaboration, speaking opportunities, or related activity, please get in touch."
          />
          <div className="ql-feature-grid">
            {collaborators.map((collaborator) => (
              <article key={collaborator.name} className="ql-feature-card">
                <div className="ql-feature-card__eyebrow">{collaborator.type}</div>
                <h3 className="ql-feature-card__title">{collaborator.name}</h3>
                <p className="ql-feature-card__copy">{collaborator.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="ql-btn ql-btn--ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { EditorialHero, SectionHeading } from '@/components/Editorial';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CEU Quant Lab for general inquiries, partnerships, events, articles, and related opportunities.',
};

const contactChannels = [
  {
    title: 'General Inquiries',
    description: 'Questions about CEU Quant Lab, its work, and general inquiries.',
    email: 'quantlab@ceu.edu',
  },
  {
    title: 'Partnerships',
    description: 'For firms and institutions exploring collaboration, workshops, or sponsorship.',
    email: 'quantlab.partnerships@ceu.edu',
  },
  {
    title: 'Events',
    description: 'Panels, speaker events, and event coordination.',
    email: 'quantlab.events@ceu.edu',
  },
  {
    title: 'Articles',
    description: 'Article ideas, analysis questions, and media requests.',
    email: 'quantlab.media@ceu.edu',
  },
];

export default function ContactPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Contact · quant lab"
        title={
          <>
            Contact <em className="ql-accent-underline">Us.</em>
          </>
        }
        subtitle="Reach out about projects, events, articles, partnerships, or general enquiries."
        panelLabel="Response standard"
        panelQuote="Clear questions lead to better opportunities, stronger conversations, and faster follow-up."
        panelMeta="Usually within two business days"
      />

      <section className="ql-section--tight" style={{ background: '#fff' }}>
        <div className="ql-wrap">
          <SectionHeading
            number="01 — Channels"
            title="Choose the right category"
            copy="A small set of contact categories keeps inbound communication specific and easier to route across partnerships, events, and article-related work."
          />
          <div className="ql-feature-grid">
            {contactChannels.map((channel) => (
              <article key={channel.title} className="ql-feature-card">
                <div className="ql-feature-card__eyebrow">{channel.title}</div>
                <p className="ql-feature-card__copy">{channel.description}</p>
                <a href={`mailto:${channel.email}`} className="ql-feature-card__link">
                  {channel.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ql-section" style={{ background: 'var(--paper)' }}>
        <div className="ql-wrap">
          <div className="ql-contact-layout">
            <div>
              <SectionHeading
                number="02 — Form"
                title="Send a direct message"
                copy="The form is intentionally minimal and aligned with the site-wide design system: off-white paper, light rules, and stronger type hierarchy."
              />
              <div className="ql-contact-details">
                <div>
                  <div className="ql-contact-details__label">Email</div>
                  <a href="mailto:quantlab@ceu.edu">quantlab@ceu.edu</a>
                </div>
                <div>
                  <div className="ql-contact-details__label">LinkedIn</div>
                  <a href="https://www.linkedin.com/company/quant-lab-ceu/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/company/quant-lab-ceu
                  </a>
                </div>
                <div>
                  <div className="ql-contact-details__label">Base</div>
                  <p>Central European University, Vienna</p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

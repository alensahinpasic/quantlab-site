import type { ReactNode } from 'react';
import Link from 'next/link';

export function EditorialGeometry() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="400,0 400,280 140,500 60,500" fill="#2C7A8A" opacity="0.9" />
      <polygon points="400,60 400,220 260,500 210,500" fill="#4AA3B0" opacity="0.55" />
      <polygon points="0,500 0,360 180,500" fill="#000000" opacity="0.12" />
      <line x1="0" y1="0" x2="400" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    </svg>
  );
}

export function EditorialHero({
  eyebrow,
  title,
  subtitle,
  panelLabel,
  panelQuote,
  panelMeta,
  ctas,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  panelLabel: string;
  panelQuote: string;
  panelMeta: string;
  ctas?: Array<{ href: string; label: string; variant?: 'primary' | 'ghost' }>;
}) {
  return (
    <section className="ql-hero">
      <div className="ql-wrap">
        <div className="ql-hero__grid">
          <div>
            <div className="ql-hero__eyebrow">
              <span className="ql-hero__eyebrow-dot" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="ql-h1">{title}</h1>
            <p className="ql-hero__sub">{subtitle}</p>
            {ctas && ctas.length > 0 ? (
              <div className="ql-hero__ctas">
                {ctas.map((cta) => (
                  <Link
                    key={cta.href + cta.label}
                    href={cta.href}
                    className={`ql-btn ${cta.variant === 'ghost' ? 'ql-btn--ghost' : 'ql-btn--primary'}`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <aside className="ql-hero__card">
            <EditorialGeometry />
            <div className="ql-hero__card-label">{panelLabel}</div>
            <div>
              <div className="ql-hero__card-quote">{panelQuote}</div>
              <div className="ql-hero__card-ceu">{panelMeta}</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="ql-section__head">
      <div>
        <div className="ql-eyebrow-row">
          <span className="ql-eyebrow-row__line" />
          <span className="ql-eyebrow-row__num">{number}</span>
        </div>
        <h2 className="ql-h2">{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}

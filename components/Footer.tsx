import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/site-content';

export default function Footer() {
  return (
    <footer className="ql-footer">
      <div className="ql-wrap">
        <div className="ql-footer__grid">
          <div>
            <div className="ql-nav-brand" style={{ marginBottom: 20 }}>
              <Image
                src="/logo%20quantlab.png"
                alt="CEU Quant Lab logo"
                width={160}
                height={160}
                className="ql-footer-logo"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              CEU Quant Lab is a structured analytical platform for projects, articles,
              and events across data, finance, and business.
            </p>
            <p className="ql-footer__copy" style={{ marginTop: 16 }}>Vienna, Austria</p>
          </div>

          <div>
            <div className="ql-footer__col-label">Navigation</div>
            <ul className="ql-footer__nav">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="ql-footer__col-label">Programmes</div>
            <ul className="ql-footer__nav">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/events">Events</Link></li>
            </ul>
          </div>

          <div>
            <div className="ql-footer__col-label">Connect</div>
            <p className="text-sm mb-2">quantlab@ceu.edu</p>
            <p className="ql-footer__copy" style={{ marginBottom: 20 }}>Central European University</p>
            <a
              href="https://www.linkedin.com/company/quant-lab-ceu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-150 hover:text-white"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <hr className="ql-footer__rule" />
        <div className="ql-footer__bottom">
          <p className="ql-footer__copy">&copy; 2026 CEU Quant Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

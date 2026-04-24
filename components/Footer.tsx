import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-navy-700 flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-tight">QL</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">
                CEU Quant Lab
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Student-led applied finance and data research initiative at Central European University.
            </p>
            <p className="text-slate-600 text-xs mt-4">Vienna, Austria</p>
          </div>

          <div>
            <p className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Connect
            </p>
            <p className="text-slate-500 text-sm mb-2">quantlab@ceu.edu</p>
            <p className="text-slate-600 text-xs mb-5">Central European University</p>
            <a
              href="https://linkedin.com/company/ceu-quant-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-150"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; 2025 CEU Quant Lab. Central European University. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            CFA Institute is a registered trademark of CFA Institute.
          </p>
        </div>
      </div>
    </footer>
  );
}

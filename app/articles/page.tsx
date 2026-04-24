import type { Metadata } from 'next';
import { articles } from '@/lib/articles';
import ArticleSection from '@/components/ArticleSection';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Research, market analysis, and career insights from the CEU Quant Lab research team. Covering market insights, quantitative research, AI in finance, macroeconomics, geopolitical risk, and career development.',
};

export default function ArticlesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Research and Analysis
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Articles
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Market insights, quantitative analysis, and career guidance produced by the
            CEU Quant Lab research team.
          </p>
        </div>
      </section>

      {/* Articles with filtering */}
      <ArticleSection articles={articles} />
    </>
  );
}

import type { Metadata } from 'next';
import { EditorialHero } from '@/components/Editorial';
import ArticleSection from '@/components/ArticleSection';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles and analysis from CEU Quant Lab across data, finance, and business.',
};

export default function ArticlesPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Articles · analysis"
        title={
          <>
            Articles and <em className="ql-accent-underline">Analysis.</em>
          </>
        }
        subtitle="Articles present structured analysis and market commentary across data, finance, and business."
        panelLabel="Coverage"
        panelQuote="Articles focus on clear analysis and real market relevance."
        panelMeta="Data · Finance · Business"
      />
      <ArticleSection articles={articles} />
    </>
  );
}

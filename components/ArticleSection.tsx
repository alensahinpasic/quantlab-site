'use client';

import { useState } from 'react';
import PublicationVisual from '@/components/PublicationVisual';
import { type Article, type Category, CATEGORIES, getCategoryStyle } from '@/lib/articles';

interface Props {
  articles: Article[];
}

export default function ArticleSection({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <div className="ql-article-filters">
        <div className="ql-wrap">
          <div className="ql-article-filters__inner">
            <button
              onClick={() => setActiveCategory('All')}
              className={`ql-filter-chip ${activeCategory === 'All' ? 'ql-filter-chip--active' : ''}`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`ql-filter-chip ${activeCategory === cat ? 'ql-filter-chip--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="ql-wrap" style={{ paddingTop: 40, paddingBottom: 112 }}>
        {filtered.length === 0 ? (
          <div className="ql-empty-state">
            <p>No articles in this category yet.</p>
          </div>
        ) : (
          <div className="ql-notes-grid">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="ql-note-card"
              >
                <PublicationVisual category={article.category} />
                <div className="ql-note-card__top">
                  <span className="ql-note-card__kicker">Article</span>
                  <span className="ql-note-card__date">{article.date}</span>
                </div>
                <div className="ql-note-card__body">
                  <div className="ql-note-card__row">
                    <span
                      className={getCategoryStyle(article.category)}
                    >
                      {article.category}
                    </span>
                  </div>
                  <h2 className="ql-note-card__title">{article.title}</h2>
                  <p className="ql-note-card__description">{article.description}</p>
                </div>
                <div className="ql-note-card__foot">
                  <span>{article.author}</span>
                  <span>{article.slug.replaceAll('-', ' / ')}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

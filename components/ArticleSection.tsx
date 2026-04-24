'use client';

import { useState } from 'react';
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
      {/* Filters */}
      <div className="border-b border-slate-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('All')}
              className={`whitespace-nowrap px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                activeCategory === 'All'
                  ? 'bg-navy-900 text-white'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-sm">No articles in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="border border-slate-200 bg-white hover:border-navy-700 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 ${getCategoryStyle(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-xs">{article.date}</span>
                  </div>
                  <h2 className="text-navy-900 font-semibold text-base leading-snug mb-3">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                    {article.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-slate-400 text-xs">{article.author}</span>
                    <button className="text-navy-700 text-xs font-semibold hover:text-navy-900 transition-colors cursor-default">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

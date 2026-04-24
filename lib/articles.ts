export type Category =
  | 'Market Insights'
  | 'Equity Research'
  | 'AI in Finance'
  | 'Macroeconomics'
  | 'Geopolitical Risk'
  | 'Career Insights';

export interface Article {
  id: string;
  title: string;
  category: Category;
  date: string;
  description: string;
  author: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'AI and the Future of Financial Markets',
    category: 'AI in Finance',
    date: 'March 15, 2024',
    description:
      'An examination of how machine learning and large language models are reshaping trading strategies, risk modeling, and financial analysis across asset classes.',
    author: 'Quant Lab Research Team',
    slug: 'ai-future-financial-markets',
  },
  {
    id: '2',
    title: 'How Macroeconomic Shocks Move Sectors',
    category: 'Macroeconomics',
    date: 'February 28, 2024',
    description:
      'A data-driven analysis of how inflation surprises, central bank policy shifts, and supply disruptions transmit across equity sectors and fixed income markets.',
    author: 'Quant Lab Research Team',
    slug: 'macroeconomic-shocks-sectors',
  },
  {
    id: '3',
    title: 'Semiconductor Volatility and Market Regimes',
    category: 'Market Insights',
    date: 'January 20, 2024',
    description:
      'Examining the outsized volatility of semiconductor equities and their role as a leading indicator for broader technology sector risk and market regime transitions.',
    author: 'Quant Lab Research Team',
    slug: 'semiconductor-volatility-market-regimes',
  },
  {
    id: '4',
    title: 'Geopolitical Risk and Investor Sentiment',
    category: 'Geopolitical Risk',
    date: 'December 12, 2023',
    description:
      'How geopolitical events are increasingly priced into equity markets, and what methodologies can help investors quantify and manage exposure to political uncertainty.',
    author: 'Quant Lab Research Team',
    slug: 'geopolitical-risk-investor-sentiment',
  },
  {
    id: '5',
    title: 'What Students Should Know About Sales and Trading',
    category: 'Career Insights',
    date: 'November 8, 2023',
    description:
      'A practical overview of the sales and trading division at investment banks, covering desk structures, recruiting timelines, technical expectations, and skill development.',
    author: 'Quant Lab Research Team',
    slug: 'sales-trading-career-guide',
  },
  {
    id: '6',
    title: 'Building a Career in Quantitative Finance',
    category: 'Career Insights',
    date: 'October 5, 2023',
    description:
      'From mathematics to markets: a structured guide to the skills, certifications, and pathways for students pursuing quantitative roles in finance.',
    author: 'Quant Lab Research Team',
    slug: 'career-quantitative-finance',
  },
];

export const CATEGORIES: Category[] = [
  'Market Insights',
  'Equity Research',
  'AI in Finance',
  'Macroeconomics',
  'Geopolitical Risk',
  'Career Insights',
];

export function getCategoryStyle(category: Category): string {
  const styles: Record<Category, string> = {
    'Market Insights': 'bg-slate-100 text-slate-700',
    'Equity Research': 'bg-indigo-50 text-indigo-700',
    'AI in Finance': 'bg-purple-50 text-purple-700',
    Macroeconomics: 'bg-teal-50 text-teal-700',
    'Geopolitical Risk': 'bg-amber-50 text-amber-700',
    'Career Insights': 'bg-emerald-50 text-emerald-700',
  };
  return styles[category];
}

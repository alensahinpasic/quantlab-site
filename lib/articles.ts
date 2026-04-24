export type Category =
  | 'Market Analysis'
  | 'Equity Research'
  | 'AI in Finance'
  | 'Macroeconomics'
  | 'Strategy'
  | 'Geopolitical Risk'
  | 'Career Analysis';

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
    author: 'CEU Quant Lab Research Team',
    slug: 'ai-future-financial-markets',
  },
  {
    id: '2',
    title: 'How Macroeconomic Shocks Move Sectors',
    category: 'Macroeconomics',
    date: 'February 28, 2024',
    description:
      'A data-driven analysis of how inflation surprises, central bank policy shifts, and supply disruptions transmit across equity sectors and fixed income markets.',
    author: 'CEU Quant Lab Research Team',
    slug: 'macroeconomic-shocks-sectors',
  },
  {
    id: '3',
    title: 'Semiconductor Volatility and Market Regimes',
    category: 'Market Analysis',
    date: 'January 20, 2024',
    description:
      'Examining the outsized volatility of semiconductor equities and their role as a leading indicator for broader technology sector risk and market regime transitions.',
    author: 'CEU Quant Lab Research Team',
    slug: 'semiconductor-volatility-market-regimes',
  },
  {
    id: '4',
    title: 'Operating Strategy in Fragmented Supply Chains',
    category: 'Strategy',
    date: 'December 12, 2023',
    description:
      'A note on how firms in capital-intensive sectors are redesigning procurement, inventory, and pricing strategy under persistent uncertainty.',
    author: 'CEU Quant Lab Research Team',
    slug: 'operating-strategy-fragmented-supply-chains',
  },
  {
    id: '5',
    title: 'Geopolitical Risk and Investor Sentiment',
    category: 'Geopolitical Risk',
    date: 'November 28, 2023',
    description:
      'How geopolitical events are increasingly priced into equity markets, and what methodologies can help investors quantify and manage exposure to political uncertainty.',
    author: 'CEU Quant Lab Research Team',
    slug: 'geopolitical-risk-investor-sentiment',
  },
  {
    id: '6',
    title: 'What Students Should Know About Sales and Trading',
    category: 'Career Analysis',
    date: 'November 8, 2023',
    description:
      'A practical overview of the sales and trading division at investment banks, covering desk structures, recruiting timelines, and technical expectations.',
    author: 'CEU Quant Lab Research Team',
    slug: 'sales-trading-career-guide',
  },
  {
    id: '7',
    title: 'Building a Career in Quantitative Finance',
    category: 'Career Analysis',
    date: 'October 5, 2023',
    description:
      'From mathematics to markets: a structured guide to certifications and pathways for quantitative roles in finance.',
    author: 'CEU Quant Lab Research Team',
    slug: 'career-quantitative-finance',
  },
];

export const CATEGORIES: Category[] = [
  'Market Analysis',
  'Equity Research',
  'AI in Finance',
  'Macroeconomics',
  'Strategy',
  'Geopolitical Risk',
  'Career Analysis',
];

export function getCategoryStyle(category: Category): string {
  const styles: Record<Category, string> = {
    'Market Analysis': 'ql-filter-chip',
    'Equity Research': 'ql-filter-chip',
    'AI in Finance': 'ql-filter-chip',
    Macroeconomics: 'ql-filter-chip',
    Strategy: 'ql-filter-chip',
    'Geopolitical Risk': 'ql-filter-chip',
    'Career Analysis': 'ql-filter-chip',
  };
  return styles[category];
}

import type { Category } from '@/lib/articles';

const visualMap: Record<Category, { bg: string; accent: string; bars: number[] }> = {
  'Market Analysis': { bg: 'linear-gradient(135deg, #123f46 0%, #0f6a73 100%)', accent: '#d7e7eb', bars: [42, 68, 54, 80] },
  'Equity Research': { bg: 'linear-gradient(135deg, #16343a 0%, #157d90 100%)', accent: '#e8f1f3', bars: [64, 52, 78, 60] },
  'AI in Finance': { bg: 'linear-gradient(135deg, #0f6a73 0%, #2d8ea3 100%)', accent: '#eef5f6', bars: [36, 72, 58, 84] },
  Macroeconomics: { bg: 'linear-gradient(135deg, #17353a 0%, #275d68 100%)', accent: '#edf4f5', bars: [70, 48, 66, 76] },
  Strategy: { bg: 'linear-gradient(135deg, #20484f 0%, #367b88 100%)', accent: '#f1f5f5', bars: [52, 61, 73, 58] },
  'Geopolitical Risk': { bg: 'linear-gradient(135deg, #1b4046 0%, #245764 100%)', accent: '#eff4f5', bars: [60, 46, 82, 64] },
  'Career Analysis': { bg: 'linear-gradient(135deg, #23474e 0%, #3d8390 100%)', accent: '#f3f7f7', bars: [50, 70, 56, 74] },
};

export default function PublicationVisual({ category }: { category: Category }) {
  const visual = visualMap[category];

  return (
    <div className="ql-publication-visual" style={{ background: visual.bg }} aria-hidden="true">
      <div className="ql-publication-visual__grid" />
      <div className="ql-publication-visual__label">{category}</div>
      <div className="ql-publication-visual__bars">
        {visual.bars.map((bar, index) => (
          <span
            key={`${category}-${index}`}
            className="ql-publication-visual__bar"
            style={{ height: `${bar}%`, background: visual.accent }}
          />
        ))}
      </div>
      <svg className="ql-publication-visual__line" viewBox="0 0 240 120" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke={visual.accent}
          strokeWidth="3"
          points="0,92 34,80 74,86 112,58 156,64 194,28 240,36"
        />
      </svg>
    </div>
  );
}

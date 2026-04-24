export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/articles', label: 'Articles' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
] as const;

export const credibilityStats = [
  { value: '300+', label: 'Participants across events, speakers, and public activity' },
  { value: '4', label: 'Core focus areas across data, finance, business, and strategy' },
  { value: '12', label: 'Articles and project outputs across the last cycle' },
  { value: '2', label: 'CEU collaborators' },
  { value: 'CEE', label: 'Regional focus with global market perspective' },
];

export const projects = [
  {
    title: 'CEE Banks Coverage Primer',
    tag: 'Equity Research',
    summary:
      'A desk-level initiation note on listed Central European banks, combining valuation, capital ratios, and macro sensitivity.',
    meta: 'Valuation · Risk · Markets',
  },
  {
    title: 'FX Stress Dashboard',
    tag: 'Market Infrastructure',
    summary:
      'A live framework for monitoring EUR, USD, and regional FX dislocations through rates, vol, and positioning signals.',
    meta: 'FX · Rates · Data Science',
  },
  {
    title: 'AI for Earnings Call Analysis',
    tag: 'AI in Finance',
    summary:
      'A natural-language workflow for turning transcripts into structured themes, management tone signals, and follow-up questions.',
    meta: 'NLP · Strategy · Equity',
  },
  {
    title: 'Sovereign Risk Monitor',
    tag: 'Macroeconomics',
    summary:
      'A macro project focused on debt sustainability, spreads, refinancing pressure, and policy credibility across Europe.',
    meta: 'BTP · Bunds · Policy',
  },
  {
    title: 'Student Talent Market Map',
    tag: 'Career Intelligence',
    summary:
      'A structured view of hiring pathways across banking, asset management, consulting, and analytics roles.',
    meta: 'Careers · Strategy · Network',
  },
  {
    title: 'Geopolitical Risk Scenario Book',
    tag: 'Special Situations',
    summary:
      'Scenario-based market breakdowns linking political developments to sectors, flows, commodities, and investor sentiment.',
    meta: 'Risk · Macro · Positioning',
  },
];

export const events = [
  {
    title: 'Markets Panel: Rates, Equities, and Europe',
    format: 'Panels',
    summary:
      'A moderated discussion with practitioners on how macro shifts are moving cross-asset positioning and European capital markets.',
    date: 'May 2026',
  },
  {
    title: 'Analyst Networking Evening',
    format: 'Networking',
    summary:
      'Small-room conversations with alumni and industry professionals across banking, investing, and corporate strategy.',
    date: 'June 2026',
  },
  {
    title: 'Workshop: Building Research Notes',
    format: 'Workshops',
    summary:
      'A practical session on structure, chart use, readability, and decision-oriented writing for market-facing audiences.',
    date: 'September 2026',
  },
  {
    title: 'Speaker Session: AI in Financial Workflows',
    format: 'Speaker Events',
    summary:
      'An operator-led look at how automation and language models are changing analysis, operations, and investment teams.',
    date: 'October 2026',
  },
  {
    title: 'Macro Roundtable: Inflation and Policy Pathways',
    format: 'Panels',
    summary:
      'A focused roundtable on inflation persistence, central bank communication, and the second-order effects for assets.',
    date: 'November 2026',
  },
  {
    title: 'Case Workshop: Strategy Under Uncertainty',
    format: 'Workshops',
    summary:
      'A structured exercise in problem framing, hypothesis design, and executive recommendation under incomplete information.',
    date: 'December 2026',
  },
];

export const collaborators = [
  {
    name: 'CEU Career Services',
    type: 'Institutional collaborator',
    description:
      'Supporting coordination connected to CEU Quant Lab’s projects, events, and articles.',
  },
  {
    name: 'CEU Department of Economics',
    type: 'Academic collaborator',
    description:
      'Providing economic context, faculty connection, and a strong foundation for practical market and macro discussion.',
  },
];

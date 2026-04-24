# CEU Quant Lab Website

The official website for CEU Quant Lab, a student-led applied finance and data research initiative at Central European University.

Built with Next.js, TypeScript, and Tailwind CSS. Exported as a fully static site for free deployment on Vercel.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Output**: Static export (`output: 'export'`)

---

## Local Development

### Prerequisites

- Node.js 18 or later
- npm

### Setup

```bash
# Navigate to the project directory
cd quantlab-site

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

```bash
# Generate the static site in the /out directory
npm run build
```

The output will be in the `out/` directory. You can preview it locally with any static file server:

```bash
npx serve out
```

---

## Deployment on Vercel

### Option 1: Connect via GitHub (Recommended)

1. Push the `quantlab-site` directory to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **New Project**.
3. Import your repository.
4. Vercel auto-detects Next.js. No additional configuration is required.
5. Click **Deploy**.

The site will be live on a `.vercel.app` URL. You can add a custom domain in project settings.

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project directory
vercel
```

Follow the prompts to link to your Vercel account and project.

---

## Project Structure

```
quantlab-site/
├── app/
│   ├── layout.tsx          # Root layout: Navbar, Footer, global metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind theme tokens
│   ├── articles/
│   │   └── page.tsx        # Articles page
│   ├── partners/
│   │   └── page.tsx        # Partners page
│   ├── about/
│   │   └── page.tsx        # About Us page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── ArticleSection.tsx  # Client component: article grid with category filters
│   └── ContactForm.tsx     # Client component: contact form UI
├── lib/
│   └── articles.ts         # Article data and types
├── next.config.ts          # Next.js configuration (static export)
└── public/                 # Static assets
```

---

## Customization

### Adding Articles

Edit `lib/articles.ts` and add entries to the `articles` array:

```ts
{
  id: string;
  title: string;
  category: Category;    // one of the predefined Category values
  date: string;
  description: string;
  author: string;
  slug: string;
}
```

### Updating Leadership

Edit the `leadership` array in `app/about/page.tsx`.

### Updating Partner Information

Edit `app/partners/page.tsx` to add partner names, descriptions, or logos.

### Brand Colors

Colors are defined in `app/globals.css` under the `@theme` block and are available as Tailwind utility classes (e.g., `bg-navy-900`, `text-navy-700`):

```css
@theme {
  --color-navy-900: #0a1628;
  --color-navy-700: #162d58;
}
```

---

## Notes

- The contact form is UI-only and does not submit data. To enable form submission, integrate a service such as Formspree or Web3Forms.
- LinkedIn URLs are placeholder links and should be updated.
- Email addresses in the contact page are placeholders.

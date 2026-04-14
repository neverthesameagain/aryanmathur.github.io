Aryan Mathur — Portfolio (Next.js App Router)

## Tech

- Next.js (App Router) + TypeScript
- Tailwind CSS (v4)
- Framer Motion
- Deploy: Vercel

## Local dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content updates

- Edit content in `src/lib/site.ts`
- Main route in `src/app/page.tsx`
- Global styles in `src/app/globals.css`
- Resume PDF served from `public/resume.pdf`

## SEO / canonical URL

Set `NEXT_PUBLIC_SITE_URL` (recommended) so metadata, sitemap, and robots resolve correctly:

```bash
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

## Deploy on Vercel

- Import the repo in Vercel
- Set `NEXT_PUBLIC_SITE_URL`
- Build command: `npm run build`
- Output: Next.js default (`next build`)

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

## Deploy on GitHub Pages

GitHub Pages is static hosting, so this repo is configured to export a static site (`next.config.ts` uses `output: "export"`).

1) Push to `main`
2) In GitHub: Settings → Pages → set **Source** to **GitHub Actions**
3) The workflow `/.github/workflows/deploy.yml` builds and deploys `out/`

**User site vs project site**

- If the repo is named `<user>.github.io`, you don't need a base path.
- If it's a project repo, set a repo base path:
  - GitHub → Settings → Secrets and variables → Actions → Variables
  - Add `NEXT_PUBLIC_BASE_PATH` with value `/<repo-name>`

Optional: set `NEXT_PUBLIC_SITE_URL` (same place) for correct canonical URLs.

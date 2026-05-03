# ABC Summit 2026 — Next.js Landing Page

A production-ready Next.js 14 landing page for the ABC Summit 2026, built with **shadcn/ui**, **Tailwind CSS**, and **TypeScript**.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | React framework (App Router) |
| Tailwind CSS | 3.4 | Utility-first styling |
| shadcn/ui | Latest | Radix UI component primitives |
| TypeScript | 5 | Type safety |
| Lucide React | 0.400 | Icons |
| class-variance-authority | 0.7 | Component variants |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind base + custom keyframes
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page (imports all sections)
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── accordion.tsx    # FAQ accordion (Radix UI)
│   │   ├── badge.tsx        # Brand/speaker/pillar badges
│   │   ├── button.tsx       # Primary/outline/gold/white variants
│   │   └── card.tsx         # Base card component
│   └── sections/            # Page sections
│       ├── Navbar.tsx        # Fixed nav with mobile drawer
│       ├── Hero.tsx          # Hero with live countdown timer
│       ├── Ticker.tsx        # Scrolling info banner
│       ├── StatsBar.tsx      # Key numbers (dark bg)
│       ├── PatternDivider.tsx# Triangle pattern between sections
│       ├── SectionHeader.tsx # Reusable eyebrow + title + desc
│       ├── Performance.tsx   # ABC community performance stats
│       ├── AboutABC.tsx      # Community info + mini stats
│       ├── Theme.tsx         # Arth · Neeti · Dharma pillars
│       ├── Speakers.tsx      # Dr. RK Pillai & Atul Satya Koushik
│       ├── WhyAttend.tsx     # 6 reason cards
│       ├── EventDetails.tsx  # Date/venue + agenda timeline
│       ├── Sponsorship.tsx   # Tier slots + full entitlements table
│       ├── Registration.tsx  # Application form (client component)
│       ├── FAQ.tsx           # Accordion FAQ
│       ├── FinalCTA.tsx      # Blue CTA banner
│       ├── Footer.tsx        # Footer with links + social
│       └── StickyApply.tsx   # Scroll-triggered sticky CTA
└── lib/
    └── utils.ts             # cn() helper (clsx + tailwind-merge)
```

---

## Setup & Installation

### 1. Install dependencies

```bash
cd abc-summit-2026
npm install
```

> If you see a peer dependency warning for `tailwindcss-animate`, install it:
> ```bash
> npm install tailwindcss-animate
> ```

### 2. Add your assets to `/public`

Place these files in the `/public` folder:

| File | Description |
|------|-------------|
| `logo.png` | ABC Summit 2026 logo (the PNG you have) |
| `pattern-divider.png` | Triangle/dot pattern banner (the screenshot image) |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Brand Blue | `#053DCA` | Primary buttons, headings, accents |
| Blue 2 | `#1a50d6` | Button hover |
| Gold | `#E88F04` | Accents, eyebrows, badges |
| Dark Navy | `#0d1240` | Stats bar, footer, headings |
| Blue Pale | `#f0f4fd` | Card backgrounds |
| Blue Ultra | `#f7f9fe` | Section backgrounds |
| Gold Pale | `#fdf4e3` | Gold badge backgrounds |

---

## Customisation Guide

### Update contact details
Edit `src/components/sections/Sponsorship.tsx` and `src/components/sections/Footer.tsx`.

### Update sponsor logos
In `src/components/sections/Sponsorship.tsx`, replace the placeholder `<div>` slot elements with `<Image>` components.

### Add speaker photos
In `src/components/sections/Speakers.tsx`, replace the initials placeholder with:
```tsx
<Image src="/speaker-rkp.jpg" alt="Dr. Radha Krishnan Pillai" fill className="object-cover" />
```

### Add real gallery photos
In `src/components/sections/AboutABC.tsx` or a new `Highlights.tsx`, add `<Image>` components to the highlight grid items.

### Connect form to backend
In `src/components/sections/Registration.tsx`, replace the `setSubmitted(true)` handler with a `fetch()` call to your API or form service (e.g. Formspree, EmailJS, or your own endpoint).

---

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Static export (optional)
Add to `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
};
```
Then run `npm run build` — output goes to `/out`.

---

## shadcn/ui Components Used

All components are manually included (no CLI needed). Located in `src/components/ui/`:

- **Button** — `primary | outline | gold | white | ghost | nav` variants
- **Badge** — `blue | gold | outline | speaker | arth | neeti | dharma` variants  
- **Accordion** — Radix UI powered, used for FAQ section
- **Card** — Base card with `CardContent` and `CardHeader`

To add more shadcn components, visit [ui.shadcn.com](https://ui.shadcn.com) and copy the component source into `src/components/ui/`.
# abc

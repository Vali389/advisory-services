# SR Advisory Services & Navasri Tax — Website

SEO-friendly React website for **SR Advisory Services** and **Navasri Tax Consultants** — Your Growth Partner. Orange theme, multiple pages, WhatsApp integration, and animations.

## Features

- **Pages:** Home, About, Services, Why Choose Us, Contact
- **SEO:** React Helmet Async for meta titles, descriptions, canonical URLs
- **WhatsApp:** Floating button and contact links using +91 9063946065
- **Theme:** Orange color scheme, Plus Jakarta Sans font
- **Animations:** Framer Motion for scroll and hover effects
- **Responsive:** Mobile-first layout

## Logo & founder image

Place your images in the `public` folder so they are available at the site root:

- **Logo (header & home):** `public/logo-navasri.png` — Navasri Tax / SR Advisory Services logo.
- **Founder (home & about):** `public/founder.png` — Photo of G Subramanya Sarma.

If you use a subfolder, e.g. `public/assets/`, then use `/assets/logo-navasri.png` and `/assets/founder.png` in the code (or move the files to `public/` root).

If the logo is missing, the header shows a text fallback: **NS** / **SR Advisory Services**. Founder images hide gracefully if the file is missing.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Contact (from site)

- **Phone / WhatsApp:** +91 9063946065
- **Email:** venkatarohini68@gmail.com
- **Address:** Suite No. 502a & b, 5th Floor, Capital Park, Madhapur, Hyderabad – 500081

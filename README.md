# Logoflow Logopedie – Website

Modern, responsive website for [Logoflow Logopedie](https://logoflow.be/) – speech therapy practice of Sara Heiremans in Haaltert, Belgium.

Built as a static HTML/CSS/JS site — no build step, no monthly hosting fees.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, welcome, services overview, about Sara, testimonials |
| Aanbod | `aanbod.html` | All speech therapy services in detail |
| Trajecten | `trajecten.html` | Individual and group treatment tracks |
| Over mij | `over-mij.html` | About Sara, approach, experience stats |
| Praktisch | `praktisch.html` | Location, process, rates, FAQ (with FAQ rich results) |
| Contact | `contact.html` | Contact form, details, map, online booking via [Rosa](https://www.rosa.be) |
| Privacybeleid | `privacybeleid.html` | Privacy policy (noindex) |
| Algemene voorwaarden | `algemene-voorwaarden.html` | Terms & conditions (noindex) |

## Design

Based on the provided mockups:

- **Colors:** Coral `#F06A6A`, Navy `#2F3B63`, Lavender `#CFCBF3`, Cream `#FAF8F6`
- **Fonts:** Playfair Display (headings), Poppins (body) — loaded via Google Fonts
- **Fully responsive** with mobile navigation

## Preview locally

Open `index.html` in your browser, or run a simple local server:

```powershell
cd Logoflow
python -m http.server 8080
```

Then visit http://localhost:8080

## Deploy

The site is **live** at [logoflow.be](https://logoflow.be/), hosted on **GitHub Pages** with a custom domain (see `CNAME`). DNS for `logoflow.be` is managed via Wix, pointed to GitHub Pages.

Any push to the `main` branch is automatically published — no build step required.

## Connect logoflow.be domain

At your domain registrar, update DNS:

```
Type: CNAME
Name: www
Value: disae.github.io  (or your hosting provider)

Type: A (for apex/root domain)
Value: 185.199.108.153  (GitHub Pages IP)
```

## SEO

- `robots.txt` allows all crawlers and points to `sitemap.xml`; the two legal pages are disallowed.
- `sitemap.xml` lists all indexable pages with `lastmod`/`priority`, submitted to Google Search Console (domain property `logoflow.be`, verified via DNS TXT record).
- Every page has a `<link rel="canonical">`, full Open Graph + Twitter Card tags (with absolute image URLs), and `og:locale`/`og:site_name`.
- Structured data (JSON-LD): `MedicalBusiness` on the homepage (address, geo, sameAs, employee), `FAQPage` on `praktisch.html`, and `BreadcrumbList` on every subpage.
- Google Fonts are loaded via `<link rel="preconnect">` + `<link rel="stylesheet">` (not a render-blocking CSS `@import`) for faster First Contentful Paint.

## Before going live — checklist

- [x] Replace placeholder photos in `images/` with real photos of Sara and the practice
- [x] Add the official Logoflow logo
- [x] Update Facebook/Instagram page URL
- [x] Add Privacy Policy and Terms pages (footer links)
- [x] Verify address: Ekentstraat 12, 9450 Haaltert
- [x] Update copyright year
- [x] Submit sitemap to Google Search Console
- [ ] Set up contact form backend (see below)

## Contact form

The form currently opens the user's email client (`mailto:`). For a proper form that sends emails without exposing an address, use one of these free services:

- [Formspree](https://formspree.io) — add `action="https://formspree.io/f/YOUR_ID"` to the form
- [Web3Forms](https://web3forms.com) — free, no backend needed
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — if hosting on Netlify

## Cost comparison

| Current (Wix/similar) | This site |
|----------------------|-----------|
| ~€15–30/month | **€0/month** (GitHub Pages / Cloudflare) |
| Domain only | ~€10/year for logoflow.be |

## File structure

```
Logoflow/
├── index.html
├── aanbod.html
├── trajecten.html
├── over-mij.html
├── praktisch.html
├── contact.html
├── privacybeleid.html
├── algemene-voorwaarden.html
├── robots.txt
├── sitemap.xml
├── CNAME
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

## License

Private — © Logoflow Logopedie

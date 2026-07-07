# Logoflow Logopedie – Website

Modern, responsive website for [Logoflow Logopedie](https://logoflow.be/) – speech therapy practice of Sara Heiremans in Haaltert, Belgium.

Built as a static HTML/CSS/JS site — no build step, no monthly hosting fees.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, welcome, services overview, about Sara, testimonials |
| Aanbod | `aanbod.html` | All speech therapy services in detail |
| Over mij | `over-mij.html` | About Sara, approach, experience stats |
| Praktisch | `praktisch.html` | Location, process, rates, FAQ |
| Contact | `contact.html` | Contact form, details, map |

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

## Deploy (free options)

### Option 1: GitHub Pages (recommended)

1. Push this repo to GitHub (`DiSae/Logoflow`)
2. Go to **Settings → Pages → Source**: deploy from `main` branch, root folder
3. Site will be live at `https://disae.github.io/Logoflow/`
4. Point `logoflow.be` DNS to GitHub Pages (add CNAME file with `logoflow.be`)

### Option 2: Cloudflare Pages

1. Connect the GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com)
2. No build command needed — deploy static files directly
3. Free SSL + CDN included

### Option 3: Netlify

Drag and drop the `Logoflow` folder at [app.netlify.com/drop](https://app.netlify.com/drop)

## Connect logoflow.be domain

At your domain registrar, update DNS:

```
Type: CNAME
Name: www
Value: disae.github.io  (or your hosting provider)

Type: A (for apex/root domain)
Value: 185.199.108.153  (GitHub Pages IP)
```

## Before going live — checklist

- [ ] Replace placeholder photos in `images/` with real photos of Sara and the practice
- [ ] Add the official Logoflow logo (replace `images/logo.svg`)
- [ ] Update Facebook page URL (currently placeholder)
- [ ] Add Privacy Policy and Terms pages (footer links)
- [ ] Set up contact form backend (see below)
- [ ] Verify address: Ekentstraat 12, 9450 Haaltert
- [ ] Update copyright year

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
├── over-mij.html
├── praktisch.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── logo.svg
```

## License

Private — © Logoflow Logopedie

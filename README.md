# Red Welds website

A one-page static site for Red Welds (welding & metal fabrication). No build step: just HTML, CSS and images.

## Files
- `index.html`: page content (services, recent work, the shop, quote texter, hours)
- `styles.css`: all styling
- `script.js`: the "Text us the job" message builder, scroll reveals, mobile call bar
- `images/`: job photos (each at 800px and 1400px), shop photo, logo (`logo-mark.svg`, `logo-full.svg`), favicons

## Preview
Open `index.html` in a browser.

## Things to confirm / edit in `index.html`
- **Shop hours**: Mon–Fri 9–5:30 confirmed; Sat "by appointment" and Sun "closed" still to confirm
- **Services list**: adjust to what the shop actually offers
- **Service area / address**: not listed yet
- **Photo captions** in the Recent work section
- More job photos can be dropped into `images/` and added to the Recent work grid

## Publish for free with GitHub Pages
Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.

## Logo files
`brand/` holds the Red Welds logo for print and signs: full logo (on dark, on light, on black, one-colour black and white), the RW mark on its own, and a square icon. SVGs scale to any size; PNGs are included for quick use.

# NORVA STUDIO — Open Creative Lab

A lightweight, static first release of the NORVA STUDIO website. The experience is intentionally simple: **Explore → Discover → Create Together**.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `norva-studio` under the `XKsan` account.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. The included workflow deploys the site automatically after the first push. The public address will be:
   `https://xksan.github.io/norva-studio/`

## Local preview

Open `index.html` in a browser. No build step or package installation is required.

## Before public launch

- Replace `hello@norvastudio.com` in `index.html` with the preferred contact address.
- Replace the conceptual archive visuals with selected original photography and film stills.
- Add the published video URL and project details for **A Little Ant Matter** when ready.
- Add the final NORVA logo artwork when its export is available.

## Structure

- `index.html` — content and page structure
- `styles.css` — visual system, responsive layout and motion
- `main.js` — lightweight particle field, pointer response and mobile navigation
- `.github/workflows/pages.yml` — GitHub Pages deployment

## Content model

The first release uses a single page to keep the visitor journey short. The five content areas (PLAY, MAKE, WORKS, IP, FIELD) are sections of one experience, not separate navigation levels. They can later be moved into data-driven project pages without changing the overall brand structure.

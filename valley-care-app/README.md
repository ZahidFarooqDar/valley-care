# Valley Care Centre (Angular)

Single-page Angular 18 website for Valley Care Centre, Karan Nagar, Srinagar.

## Run
```bash
npm install
npm start          # http://localhost:4200
```

## Project layout
```
src/
  index.html, main.ts, styles.css      global page + all styles
  assets/valley-care/                  put the clinic images here (see README.txt inside)
  app/
    data/clinic.data.ts                ALL content: treatments, hours, reels, gallery, practitioner, links
    services/                          image loader, booking (Instagram DM), toast, lightbox
    directives/reveal.directive.ts     fade-in on scroll
    components/                        header, hero, highlights, treatments, why-us, team,
                                       hours, videos, gallery, visit, book-cta, footer, dock, toast, lightbox
```

## Common edits
- Text, treatments, hours, reels, phone numbers: `src/app/data/clinic.data.ts` (and the contact details in `visit` / `footer` / `dock` templates).
- Images: copy them into `src/assets/valley-care/` using the names listed in that folder's README.txt.

## Deploy on Render (static site)
| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist/valley-care/browser` |
| Environment variable | `NODE_VERSION` = `20.18.0` |

The build also writes a `404.html` copy of the app, so the site still loads if a rewrite rule is missing.

# Conference Reading Lists — Sustainability Lab, IIT Gandhinagar

Curated, searchable reading lists of conference papers, each mapped to the lab's projects.
Static site — no build step, deployed to GitHub Pages.

**Live:** see the repo's GitHub Pages URL (Settings → Pages).

## Structure

```
conference-reading-lists/
├── index.html            # landing page — links to every conference
├── venues.js             # manifest of conferences (edit to list a new one)
├── assets/
│   ├── style.css         # shared styling (light/dark)
│   └── app.js            # shared renderer + search/filter
├── cvpr-2026/
│   ├── index.html        # thin wrapper, loads the shared renderer
│   ├── data.js           # the reading-list content (clusters, papers, mapping)
│   └── abstracts.js      # auto-scraped abstracts (url → text)
├── aaai-2026/
│   └── … same three files
└── .github/workflows/pages.yml   # auto-deploy on push to main
```

Each conference is its **own subfolder** with its **own rendering**. The landing page
just links to them.

## Add a new conference

1. Copy an existing folder: `cp -r cvpr-2026 neurips-2026`
2. Edit `neurips-2026/data.js` — set `venue`, `dates`, `clusters`, etc. (schema below).
3. (Optional) Regenerate abstracts — see below.
4. Add one line to `venues.js`.
5. Commit & push — GitHub Actions redeploys automatically.

## `data.js` schema

```js
window.READING_LIST = {
  venue, dates, location, source, updated, intro,
  labPaper: { title, authors, url, track, why },   // optional: the lab's own paper, shown as a spotlight
  labWorks: { "Project": "one-line description", ... }, // glossary
  workshops: [ { title, when, url, tier:"must"|"adjacent", why } ],
  clusters: [
    { id, name, desc, labMap:["Project", ...],
      papers: [
        { tier:"must"|"adjacent", title, url,
          maps:["Project", ...],   // lab projects this connects to
          student:"Yield",          // optional tag for student-led areas
          why:"one line on the connection" }
      ]
    }
  ]
};
```

Tiers: `must` = ★ must-read, `adjacent` = ○ skim. Search filters across title, reason,
mapped projects and student tags.

## Regenerate abstracts

`abstracts.js` is auto-scraped from the publisher (CVF Open Access for CVPR, AAAI OJS for AAAI).
Re-run the small scraper inside each folder after editing the paper URLs in `data.js`
(it reads the `url:` fields, fetches each page, extracts the abstract, and writes `abstracts.js`).
If a publisher has no public abstract page, omit `abstracts.js` — the UI just shows the paper link.

## Notes

- Relevance is judged primarily from **titles** during curation; verify the abstract before assigning a paper.
- Maintained by the Sustainability Lab. Contributions: edit `data.js` and open a PR.

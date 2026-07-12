# Sunesta Awning — Presentation & Training App

## What this is

An Ingage-style interactive sales presentation for Sunesta Awning, with a built-in
Training Mode that shows reps the word-for-word script alongside each slide. Runs
in any browser now; the plan is to wrap it in Capacitor later for offline iPad use.

## Project structure

```
index.html          — shell page, loads css/js in order
css/styles.css       — all styling, one file
js/images-map.js     — maps semantic image names → files in /images (edit this to swap any photo)
js/data.js           — ALL content: slide text, scripts, hotspot copy, tab order (edit this to change content)
js/app.js            — render engine + interactions (only touch this to add new slide *types*, not content)
images/              — real image files (currently placeholders from a screen recording)
```

This split matters: **content changes (js/data.js, js/images-map.js) never require
touching app.js.** That's the whole point — Jack or Matt (or a future non-coding
Edit Mode UI) should be able to update a script, swap a photo, or reorder slides
without touching the render engine at all.

## How to run it locally

Any static file server works, e.g. from this folder:
```
python3 -m http.server 8000
```
then open `http://localhost:8000`. It's plain HTML/CSS/JS — no build step, no
dependencies, nothing to install.

## What's built (14 of ~30 slides)

**WHY SUNESTA:** intro video placeholder, dealer bio, factory training,
National Dealer of the Year award, Fall In Love photo grid (expandable)
**STORY OF SUNESTA:** brand difference, credibility badges + Google reviews,
Triangle of Strength (interactive)
**AWNINGS:** Reasons for Shade (pill hotspots), perfect-day transition, drag-slider
demo, the money slide (models + options gallery + comparison chart)
**SMART TECHNOLOGY:** intro, sensors

Every slide type built so far (static, hotspot, pill-hotspot, drag-slider, split-photo,
split-text, hero-split, photo-grid, triangle-diagram, credibility-rows,
difference-rows, models-with-popups) is reusable — new slides mostly mean adding a
data entry in `js/data.js`, not new code.

## What's left

1. **Finish the remaining ~16 slides** — Drop Screen, 10 Reasons, Fabrics, MyLink,
   The Sunboot, LED Lights expanded, the rest of Smart Technology, plus the Eclipse
   Screens and pergola content whenever those are ready to start.
2. **Real photography** — everything currently in `/images` is a placeholder pulled
   from a screen recording or your uploads. Swap files in `/images` with the same
   filenames and every slide updates automatically — no code changes.
3. **Edit Mode** — a real in-app UI (GitHub-backed, same pattern as the Training
   Library) so you and Matt can edit `js/data.js` content without opening a code editor.
4. **Capacitor wrap** — for true offline iPad installation once the content is stable.
   No point wrapping this before the slide set and content are further along.

## Recommended next step

Move this into **Claude Code** pointed at this folder. The back-and-forth we've
been doing in chat (patch → rebuild → screenshot → verify) is exactly what Claude
Code's file access + dev server removes — real hot reload, no multi-MB file
round-trips, faster iteration on the remaining slides and on Edit Mode.

## Known constraints / notes for whoever picks this up

- Any slide type using `clip-path`, `transform`, `opacity<1`, or `filter` on a
  container that has clickable children needs a **z-index audit** — those CSS
  properties create a new stacking context that can silently trap child z-index
  values below the invisible tap-to-advance nav zones. Hit this twice already
  (models slide, photo-grid slide, reasons-for-shade slide). Test every new
  interactive slide type by clicking every clickable element AND clicking empty
  space to confirm navigation still works.
- Slide numbers (`#N — Title`) are computed live from slide order in `js/data.js`
  — don't hardcode numbers anywhere, they'll drift.
- Two slides currently share the title "Experience the Sunesta Difference" (#6
  and #7) — worth giving #7 ("Trust & Credibility" or similar) its own name.

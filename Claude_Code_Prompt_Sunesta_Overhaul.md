# Prompt for Claude Code — Sunesta Presentation Overhaul (run with Fable 5, Extra/UltraCode effort)

I've attached `Matt_Notes_-_Sunesta_Awning_Script.docx` — this is Matt's working
script notes for the ATH Sunesta demo. It's the authoritative source for this
overhaul. Treat it as more complete and more current than whatever script text
is already sitting in `js/data.js`.

Read `README.md` first for full project context, then do this in two phases.
**Do not start Phase 2 until I've reviewed your Phase 1 report.**

---

## PHASE 1 — Gap analysis (report back, don't build yet)

Cross-reference Matt's script against the current 19-slide deck in `js/data.js`
and produce a report covering:

1. **Slide-by-slide content diff** — for every existing slide, does Matt's script
   say something materially different, more specific, or more complete than
   what's currently in `js/data.js`? List each one.

2. **Net-new slides Matt's script calls for that don't exist yet:**
   - Our Products overview (Gutter Helmet, motorized screens, louvered roofs) —
     cross-sell context near the dealer-bio slide
   - Our People page (longevity, own crews vs. subcontractors, qualifications)
   - Our Proven Process page(s) — 5-step post-sale protocol, verbatim steps are
     in the script
   - Reference Map / Referrals page
   - 1-Year Free Service Package page
   - Discovery/Recap script content (the "how long have you been in the home"
     table-recap section) — this may be pure Training Mode content rather than
     a customer-facing slide; flag your read on that

3. **A flagged, unresolved scope question — don't decide this yourself:**
   Matt's script includes a full pricing/close sequence (Transition to Pricing,
   Price Presentation Frame with Option 1/Option 2, Rebuild Excitement, one-year
   price lock-in language, Micro-Close, Close Transition with the 90%/10%
   Sunesta-vs-Sunstyle close stat, and Objection Setup referencing "Money Fork"
   and "Thermometer Close" from the Profectus framework). **None of this exists
   in the app today.** Before building anything here, report back on:
   - Should this become real customer-facing slides, or is it spoken content
     over the estimate/quote tool (which lives outside this app)?
   - "Money Fork" and "Thermometer Close" are named techniques with no content
     behind them in the script — flag that you need the actual Profectus
     material for these before writing objection-handling copy, rather than
     inventing your own version of a named sales technique that already exists
     elsewhere in Jack's training system.

4. **Unverified claims — list every one, do not resolve them yourself:**
   Matt flagged several facts as "NEED TO FACT CHECK" directly in his notes:
   - Arm cycle testing (80,000 open/close cycles claim)
   - Fabric manufactured in North Carolina, arms/frame in Florida
   - Wind sensor: is it actually a motion sensor requiring 5–7 seconds of
     sustained wind before triggering?
   - Lifetime arm warranty vs. 12-year arm warranty (these conflict elsewhere
     in existing content — flag the discrepancy)
   Report these as a list. **Do not put any of them into customer-facing slide
   copy.** They can go into Training Mode script text only if clearly marked
   unverified (see Phase 2 rules below).

5. **Graphic/design audit** — go through all 19 current slides and flag any
   that still feel visually inconsistent with the established pattern (chevron
   dividers, native SVG over screenshots, ATH footer banner, pill hotspots,
   consistent slide-number badges) or where content density looks cramped or
   sparse. Screenshot anything you flag so I can see what you mean.

Give me this as a written report. I'll tell you what to build and in what order.

---

## PHASE 2 — Build (after I confirm the plan)

### Content rules
- Matt's script is the source of truth for *what to say*, but keep the existing
  slide-type patterns for *how it's shown* — don't invent new visual layouts
  unless a specific new page genuinely can't fit an existing type (same
  justification bar as the `reasonsgrid` decision last session: only add a new
  type if every existing one demonstrably fails).
- Preserve Matt's voice and structure in Training Mode scripts — the 👉
  directional cues, "(Get a laugh)" stage directions, and the tone/mood notes
  are coaching value, not filler. Don't smooth them into generic corporate copy.
- The rep's personal-intro moment (Slide 2, "INSERT PERSONAL TOUCH") is
  written as Matt's own bio in the notes. Since both Jack and Matt present,
  build this as an editable placeholder field, not hardcoded to either person.
- Never place an unverified/fact-check-flagged claim in customer-facing slide
  text. If it's useful for Training Mode context, prefix it clearly, e.g.:
  `⚠️ UNVERIFIED — confirm before repeating to a customer:`

### Training Mode overhaul specifically
This is the other half of what "awesome" means here — right now Training Mode
is just a script readout per slide. Matt's notes have real training
infrastructure that isn't surfaced anywhere:
- A **"What NOT to do" / "What TO do"** reference (don't read slides, don't info
  dump, don't skip tying back to goals / always relate to their situation, slow
  down at the money slide, emotion → logic → close) — this reads as persistent
  guidance, not single-slide content. Give it a real home in Training Mode
  (e.g., a pinned reference panel or its own reference view), not buried in one
  slide's coach note.
- **Financing FAQ script** and **Subcontractor FAQ script** — these are
  verbatim, ready-to-use responses to common questions that can come up on
  *any* slide, not tied to one moment in the deck. Build a lightweight
  objection/FAQ reference inside Training Mode a rep could pull up regardless
  of which slide is on screen — this is the start of the "Objection Handling
  Master Map" concept from the original project scope, worth building it in a
  way that can grow.
- Keep the per-slide script/talking-points/coach pattern for everything else —
  it's working well, this is additive, not a redesign of that mechanism.

### Testing discipline (non-negotiable, per README)
- Any new slide type using `clip-path`, `transform`, `opacity<1`, or `filter`
  on a container with clickable children gets an explicit z-index check:
  click every interactive element, then click empty space to confirm
  tap-to-advance still fires. This exact bug has recurred three times.
- Walk every slide in both modes after changes, confirm zero console errors,
  confirm no broken images, before reporting back.
- Screenshot anything genuinely new (new slide types, the Training Mode FAQ
  reference) so I can review visually, not just read a text summary.

Report back when Phase 1 is done — don't proceed into Phase 2 until I've responded.

// ─────────────────────────────────────────────────────────────────────────────
// ECLIPSE® E-ZIP MOTORIZED SCREENS — deck + training content (Round 2 build)
//
// Source of truth: "E-Zip Script (1).docx" — ATH Master Eclipse E-Zip Screen
// Demo Script (blessed by Jack 2026-07-15, same standing as Sunesta Rev 2).
// Script/coach fields quote it verbatim; slide copy carries VERIFIED facts only
// (Eclipse Product Reference Guide v3.24 + Phifer SunTex spec sheets).
//
// Hard content rules applied here (see project memory: eclipse-ezip-sources):
// - Wind: ONLY "Class 6 wind resistance tested to 80 mph", scoped to 4"/5"
//   systems. The 130-mph and Miami-Dade claims have no documentation — dropped.
// - Warranty (per Jack 2026-07-15): PPP is included on every quote — customer
//   copy may say "Platinum Protection Plus included". Warranty SLIDE is Round 3.
// - Sensors are ADD-ONS for E-Zip (opposite of the Sunesta wind-sensor ruling).
// - Subcontractor ruling: "work for us — and only us"; never "not subcontractors".
// - Rep-only $ (motor $400, 10% same-day) lives in script/coach fields only.
// ─────────────────────────────────────────────────────────────────────────────

const ECLIPSE_DECK = {

"WHY ECLIPSE": [
  {
    id:"ez-intro", type:"herosplit",
    title:"Eclipse® E-Zip Motorized Screens",
    subtext:"Control the sun. Beat the wind. Love your outdoor space.<br><br>Every screen is custom made for your opening — nothing off the shelf here.",
    image: IMAGES.ezHeroDusk,
    script:"\"So what I'd like to do is take about 10 to 15 minutes and walk you through how these screen systems work, what makes them different from anything else out there, and how we'd design this specifically for your space. Then we'll look at some options together and figure out what actually makes the most sense for you. Sound good?\"\n\n\"Before we jump in — when you're out here trying to enjoy this space, what's the thing that pushes you back inside most often?\"\n\n(Let them answer. Listen for sun angle, wind, heat, or privacy.)\n\n\"And what time of day is it usually the worst?\"\n\n\"So really the goal here is to make this space actually usable — on your terms, when you want to be out here — without fighting the elements every time. That's exactly what we're going to walk through.\"",
    talkingPoints:[
      "You are the guide, not a presenter — set the 10–15 minute frame before you sit down",
      "Get them to verbalize the frustration: sun, wind, heat, bugs, or privacy",
      "West-facing: afternoon · South: midday · East: morning · North: usually wind or privacy",
      "Introduce the two-option approach now, so pricing later feels expected"
    ],
    coach:"Do not rush this. Two to three minutes here anchors everything that follows. The clearer the pain, the easier the close."
  },
  {
    id:"ez-lineup", type:"productcards",
    title:"Your Home Solutions Experts",
    paragraph:"We're not just a screen company — we handle the full outdoor living spectrum, so whatever you do today works with whatever you might want to add later.",
    rows:[
      {photo: IMAGES.prodScreenPhoto, logo: IMAGES.ezLogoEclipse, label:"Eclipse® E-Zip Screens", sublabel:"Today's focus — motorized zipper-track screens",
       detail:"Motorized exterior screens with zipper retention — sun, wind, bug, and privacy control for patios, decks, and porches. Custom made to your exact opening."},
      {photo: IMAGES.triSunestaAwning, logo: IMAGES.sunestaLogo, label:"Sunesta® Retractable Awnings", sublabel:"Overhead shade on demand",
       detail:"Custom retractable awnings — shade over the whole space when you want it, sun when you don't. Pairs beautifully with E-Zip screens."},
      {photo: IMAGES.prodLouverPhoto, logo: IMAGES.ezLogoEclipse, label:"Eclipse® Latitude™ Louvered Roofs", sublabel:"A true outdoor room",
       detail:"Motorized louvered roof systems — overhead coverage that opens and closes. Many customers pair a louvered roof with E-Zip screens on the sides."},
      {photo: IMAGES.prodGutterPhoto, logo: IMAGES.logoGutterhelmet, label:"Gutter Helmet®", sublabel:"Never clean your gutters again",
       detail:"Gutter protection and seamless gutters — the other side of what we do around the house."}
    ],
    script:"\"Real quick before we get into the screens — I want to show you what we do as a company, because a lot of homeowners don't realize the full picture.\n\nWe're not just a screen company. We handle the full outdoor living spectrum — motorized screens, retractable awnings, louvered roof systems, and gutter protection.\n\nThe reason that matters for you is we can look at your whole outdoor space as one picture. A lot of companies can only sell you one thing. We can help you think through all of it — and make sure whatever you do today works with whatever you might want to add later.\n\nToday we're focused on the screens — but if anything else comes up as we walk through this, just say the word.\"",
    talkingPoints:[
      "Breadth = long-term partner, not a one-product vendor",
      "Mention all products briefly — don't sell everything on this slide",
      "Opens the cross-sell door (louvered roof + screens = outdoor room) without forcing it"
    ],
    coach:"Keep this slide moving. It builds credibility without derailing the screen conversation."
  },
  {
    id:"ez-dealer", type:"splittext",
    title:"Your Eclipse Dealer — Local & Family-Owned",
    bullets:[
      "Founded in 2004 — over 20 years, family-owned, based in Monument",
      "Thousands of installations across Southern Colorado",
      "You call us, you get us — not a call center, not someone three states away",
      "Same trained install team as our awning division",
      "Eclipse: a nationally recognized screen brand, backed by a local company that stands behind every install"
    ],
    image: IMAGES.dealerFamily,
    script:"\"Quick background on who we are — because who installs this matters just as much as the product itself.\n\nWe were founded in 2004. We're local, family owned, based right up in Monument. Over 20 years and thousands of installations across the Front Range. This isn't something we picked up overnight.\n\nYou call us, you get us. Not a call center, not someone three states away. We're right here and we're accountable.\n\nEclipse is one of the most respected names in motorized exterior screens — residential and commercial applications across the country. When you work with ATH, you get the backing of a nationally recognized product with a local company that stands behind every install.\"",
    talkingPoints:[
      "Not a national chain, not a big Denver corporation",
      "Real accountability — when you call, you get us",
      "National brand + local company = both halves of trust"
    ],
    coach:"Slide copy says \"Southern Colorado\" (matches the rest of the deck); the script says \"Front Range\" — Jack to pick one, correct on sight."
  },
  {
    id:"ez-install", type:"splitphoto",
    title:"Installed In-House — Level, Parallel, To the Inch",
    subtext:"The tracks have to be perfectly level and parallel or the screen won't run right — it's not like hanging a curtain. We surface-mount or recess into the structure — pergola posts, stucco, wood framing, brick, or soffit. Most installs are a standard 110-volt plug-in, done in a day.",
    image: IMAGES.ezRecessedStone,
    script:"\"This is something worth knowing about before we get into the product.\n\nAll of our installers work for us — and only for us. Same team that does our awnings. They know these systems, and they know how to install them correctly.\n\nThat matters more than people realize with a screen system. The tracks have to be perfectly level and parallel — if they're off, the screen won't operate right. It's not like hanging a curtain. There's real precision involved.\n\nWe prefer a surface mount when the structure allows for it — it's clean, accessible, and easy to service. But we can fit this to virtually any structure — pergola posts, stucco, wood framing, brick, soffit mounting. Whatever your space calls for, we've done it.\n\nAnd electrically — most installs are as simple as a standard 110-volt plug-in. Nothing complicated. Most jobs are done in a day.\"",
    talkingPoints:[
      "Install quality is a close factor — 'who installs this matters just as much as the product'",
      "Surface mount preferred: clean, accessible, serviceable — recessed available too",
      "110V plug-in in most cases; no panel upgrades, no complicated wiring"
    ],
    coach:"Per the standing ruling: we say our installers \"work for us — and only us\" — never \"they're not subcontractors.\""
  },
  {
    id:"ez-credibility", type:"credibility",
    title:"Why Eclipse",
    paragraph:"Eclipse Shading Systems has manufactured the E-Zip in Middletown, New York since 2013 — residential and commercial applications across the country. A proven, refined product line — not something pieced together from multiple sources.",
    rows:[
      {icon: IMAGES.ezLogoEclipse, label:"Building the E-Zip since 2013", sublabel:"Manufactured in Middletown, New York",
       detail:"Eclipse has manufactured the E-Zip side-retention system since 2013, and the largest 7-inch line since 2019. One consistent product family, custom made to the inch for every opening."},
      {icon: IMAGES.ezLogoSomfy, label:"Powered by Somfy", sublabel:"The industry's gold-standard motors",
       detail:"Somfy motors come standard — the same brand used in premium motorized systems around the world. Handheld remote, wireless wall switch, or app control, with home-automation integration available."},
      {label:"Phifer SunTex® fabrics", sublabel:"GREENGUARD Gold certified",
       detail:"Phifer is one of the most respected shading-fabric manufacturers in the world. SunTex is GREENGUARD Gold certified and built specifically for exterior applications — and it carries its own 10-year exterior fabric warranty from Phifer."},
      {label:"Class 6 wind resistance", sublabel:"Tested to 80 mph — 4\" & 5\" systems",
       detail:"The zipper retention locks the fabric edge into the side track, so the screen stays flat and taut instead of billowing and flapping like a generic roll-down screen."}
    ],
    script:"\"A few things worth knowing about Eclipse as a brand.\n\nThey've been manufacturing the E-Zip system since 2013 — residential and commercial applications across the country. It's a proven, refined product.\n\n⚠️ UNVERIFIED (not on the slide — attribute if asked): \"99.2% of Eclipse customers say they would recommend it to a friend or neighbor. Product rating of 4.9, dealer rating of 4.8 — independent verified reviews.\" These are Eclipse-published feefo figures; say 'per Eclipse's published customer reviews' if you use them.\n\n\"The fabric is Phifer — one of the most respected fabric manufacturers in the shading industry. GreenGuard certified, built for long-term outdoor performance.\"",
    talkingPoints:[
      "Since 2013 · Middletown, NY — both straight off Eclipse's own reference guide",
      "Somfy = a name customers can Google and recognize",
      "Wind rating stays scoped: Class 6 / 80 mph applies to the 4\" and 5\" systems"
    ],
    coach:"Stack credibility fast, then move. The review stats live in your script only until they're verified — the slide carries what we can prove."
  }
],

"THE E-ZIP": [
  {
    id:"ez-reasons", type:"reasonsphoto",
    title:"What's Pushing You Back Inside?",
    image: IMAGES.ezGarciaInside,
    hotspots:[
      {x:0.30, y:0.20, label:"Harsh sun & glare", photo: IMAGES.ezSunroom,
       content:"Block the harsh afternoon or morning sun without losing the feel of being outside — and cut the heat and glare reaching the rooms behind the space."},
      {x:0.66, y:0.32, label:"Wind", photo: IMAGES.ezThreePorch,
       content:"The fabric edge is zipped into the side tracks, so the screen stays flat and taut instead of flapping — the space is actually comfortable to sit in."},
      {x:0.42, y:0.62, label:"Privacy", photo: IMAGES.ezMonDown,
       content:"A dark fabric reads almost like a mirror from outside during the day — neighbors can't see in, you can still see out."},
      {x:0.74, y:0.76, label:"Bugs & no-see-ums", photo: IMAGES.ezWaterlander,
       content:"The tight SunTex weave and the hem bar's brush seal keep no-see-ums, mosquitoes, and other small insects out — evenings become enjoyable again."}
    ],
    script:"\"Most of the homeowners we work with on screen projects are dealing with a couple of specific things — usually it comes down to sun control, wind, and wanting to actually use the space they already have.\n\nFor you, it sounds like the main things are…\"\n\n👉 (List their specific Accomplish List items in their words)\n\n\"Does that feel right? Did I miss anything?\"\n\n👉 Wait for confirmation. Do not skip this step.\n\n\"Perfect. Everything I'm about to show you is designed around those goals specifically.\"",
    talkingPoints:[
      "THE most important transition in the deck — the product is the answer to this list, nothing more",
      "Recap their goals in their exact words, not product language",
      "Do not proceed until the list is confirmed and owned by the customer"
    ],
    coach:"That photo is a real install — Pikes Peak, seen straight through the fabric. Let it make the 'keep the view' point for you."
  },
  {
    id:"ez-how", type:"splittext",
    title:"How the E-Zip Works",
    bullets:[
      "The screen stores inside a protective aluminum cassette — rain, UV, and debris never sit on the fabric",
      "Press a button: the fabric edges zip into the side tracks, locked flat and taut — no flapping in the wind",
      "The hem bar's brush seal meets the floor — a real seal, no gaps along the bottom",
      "Stop it at any height — partial shade, partial wind block, or full enclosure"
    ],
    image: IMAGES.ezHowItWorks,
    script:"\"Here's how to think about how this system works — without getting into the weeds.\n\nThe screen rolls up and stores inside a cassette housing at the top — that's a protective aluminum box that keeps your fabric safe when it's not in use. Rain, UV, debris — none of it sits on the fabric.\n\nWhen you want shade or wind protection, you press a button. The screen drops down and the edges zip into side tracks — that's the key difference between this and a generic roll-down screen. The zipper retention locks the fabric edge into the track so it stays flat, stays taut, and doesn't flap around in the wind. That's the whole system in a nutshell.\n\nAnd at the bottom, the hem bar has a brush seal that makes contact with the floor — so when it's all the way down, you've got a real seal. No gaps along the bottom.\n\nOne thing people always appreciate — it doesn't have to be all the way down. You can stop it wherever you want. Partial shade, partial wind block, full enclosure — you're in control.\"",
    talkingPoints:[
      "Use the zipper retention explanation EVERY time — it is your clearest competitive differentiator",
      "Numbers on the diagram match the bullets: cassette → zipper track → hem bar → control",
      "\"Up, it disappears. Down, the space is protected. Simple.\""
    ],
    coach:"Make it simple, visual, and memorable. If you have the track sample in the truck, this is the slide to hand it over."
  },
  {
    id:"ez-systems", type:"models", cardGraphic:"screen",
    title:"Cassette Sizes & System Options",
    sub:"Three cassette sizes — we size the system to your exact opening. Every unit is custom made to the inch, in two-piece powder-coated extruded aluminum.",
    models:[
      {name:"4-inch", tag:"Standard duty · smaller openings", c1:"#3a6ea5", c2:"#5a8fc0", chipHero:false,
       heroChip:"STANDARD DUTY",
       chips:["To 14' wide","To 12' drop","70mm roller"],
       warrantyTiles:[{num:"Lifetime",label:"Frame"},{num:"Lifetime",label:"Fabric",hero:true},{num:"Lifetime",label:"Motor"},{num:"Lifetime",label:"Electronics"}],
       specs:[
         ["Max width","14 feet — custom-built to the inch"],
         ["Max drop","12 feet (fabric-dependent)"],
         ["Roller tube","70 mm — largest for the size, so fabric hangs flat"],
         ["Duty level","Standard duty only"],
         ["Wind","Class 6 wind resistance — tested to 80 mph"],
         ["Operation","Motorized Somfy — manual crank optional"],
         ["Mounting","Surface, recessed, or between-post"],
         ["Cassette","Two-piece powder-coated extruded aluminum"]
       ],
       bestFor:"Smaller openings — porches, single windows, and tighter spans up to about 14 feet."},
      {name:"5-inch", tag:"Our most common — Standard or Super Duty", c1:"#1b5e3f", c2:"#2e7d4f", chipHero:true,
       heroChip:"STANDARD or SUPER DUTY",
       chips:["To 24' wide","To 16'+ drop","78mm roller"],
       warrantyTiles:[{num:"Lifetime",label:"Frame"},{num:"Lifetime",label:"Fabric",hero:true},{num:"Lifetime",label:"Motor"},{num:"Lifetime",label:"Electronics"}],
       specs:[
         ["Max width","24 feet — custom-built to the inch"],
         ["Max drop","16 feet (20 ft with select fabrics)"],
         ["Roller tube","78 mm — larger tube, sag-resistant across the span"],
         ["Duty level","Standard or Super Duty"],
         ["Wind","Class 6 wind resistance — tested to 80 mph"],
         ["Operation","Motorized Somfy — manual crank optional"],
         ["Mounting","Surface, recessed, or between-post"],
         ["Cassette","Two-piece powder-coated extruded aluminum"]
       ],
       bestFor:"The vast majority of residential openings — and the only size offered in both Standard and Super Duty, so it fits almost any situation."},
      {name:"7-inch", tag:"Super Duty · the largest openings", c1:"#5a5f66", c2:"#7c828a", chipHero:false,
       heroChip:"SUPER DUTY",
       chips:["To 26' wide","To 20' drop","Largest roller"],
       warrantyTiles:[{num:"Lifetime",label:"Frame"},{num:"Lifetime",label:"Fabric",hero:true},{num:"Lifetime",label:"Motor"},{num:"Lifetime",label:"Electronics"}],
       specs:[
         ["Max width","26 feet — custom-built to the inch"],
         ["Max drop","20 feet (fabric-dependent)"],
         ["Roller tube","Largest available (up to 140 mm)"],
         ["Duty level","Super Duty only"],
         ["Wind","Engineered for the widest spans and highest exposure"],
         ["Operation","Motorized Somfy only"],
         ["Mounting","Surface mount only"],
         ["Cassette","Two-piece powder-coated extruded aluminum"]
       ],
       bestFor:"The largest openings and full enclosures — Super Duty engineering, motorized and surface-mounted."}
    ],
    modelCompare:{
      title:"4-inch · 5-inch · 7-inch",
      columns:[
        {name:"4-inch", sub:"Standard duty"},
        {name:"5-inch", sub:"Most common"},
        {name:"7-inch", sub:"Super Duty"}
      ],
      cats:[
        {key:"size", label:"Sizing & Reach", rows:[
          {label:"Max width", cells:[["check","14'"],["check","24'"],["check","26'"]]},
          {label:"Max drop", cells:[["check","12'"],["check","16–20'"],["check","20'"]]},
          {label:"Roller tube", cells:[["check","70 mm"],["check","78 mm"],["check","Up to 140 mm"]]}
        ]},
        {key:"duty", label:"Duty & Operation", rows:[
          {label:"Duty level", cells:[["warn","Standard only"],["check","Standard or Super"],["warn","Super only"]]},
          {label:"Operation", cells:[["check","Motor or crank"],["check","Motor or crank"],["warn","Motorized only"]]},
          {label:"Mounting", cells:[["check","Surface · recess · post"],["check","Surface · recess · post"],["warn","Surface only"]]}
        ]},
        {key:"eng", label:"Engineering", rows:[
          {label:"Wind rating", cells:[["check","Class 6 · 80 mph"],["check","Class 6 · 80 mph"],["check","Largest-span build"]]},
          {label:"Cassette", cells:[["check","2-pc extruded alum."],["check","2-pc extruded alum."],["check","2-pc extruded alum."]]},
          {label:"In production since", cells:[["check","2013"],["check","2013"],["check","2019"]]}
        ]}
      ]
    },
    gallery:[
      {img:IMAGES.ezRecessedStone, label:"Recessed cassette — clean, built-in look"},
      {img:IMAGES.ezHowItWorks, label:"Cassette · zipper track · hem bar"},
      {img:IMAGES.ezThreePorch, label:"Side tracks across a full porch enclosure"},
      {img:IMAGES.ezMonUp, label:"Cassette up — barely there"}
    ],
    comparison:{
      columns:[
        {name:"Eclipse E-Zip", sub:"Installed by ATH", badge:"★ OUR PICK"},
        {name:"Generic Roll-Down", sub:"No zipper track"},
        {name:"Glass Sunroom", sub:"Permanent structure"}
      ],
      rows:[
        {label:"Holds fabric in wind", cells:[{s:"check",t:"Zipper-locked, stays taut"},{s:"x",t:"Flaps & billows"},{s:"check",t:"Solid — but sealed in"}]},
        {label:"Keeps the outdoor feel", cells:[{s:"check",t:"Air moves through"},{s:"check",t:"It's a screen"},{s:"x",t:"Traps heat"}]},
        {label:"Bug & no-see-um seal", cells:[{s:"check",t:"Tight SunTex + brush seal"},{s:"warn",t:"Depends on fit"},{s:"check",t:"Sealed"}]},
        {label:"Retracts out of sight", cells:[{s:"check",t:"Into the cassette"},{s:"warn",t:"Basic housing"},{s:"x",t:"Permanent"}]},
        {label:"Warranty", cells:[{s:"check",t:"Lifetime via PPP"},{s:"x",t:"Limited / by component"},{s:"warn",t:"Varies by builder"}]},
        {label:"Investment", cells:[{s:"check",t:"A fraction of a glass room"},{s:"check",t:"Low — but short-lived"},{s:"x",t:"$50,000+"}]}
      ],
      footer:"Glass sunrooms commonly run $50,000 and up and trap heat by design. Generic roll-downs without a zipper track flap in the wind and fail. Always ask what's actually behind the price."
    },
    script:"\"Eclipse makes three cassette sizes — a 4-inch, a 5-inch, and a 7-inch — and we size the system to your specific opening. Every unit is custom made to your exact dimensions.\n\nFor most of the residential projects we do, the 5-inch is our most common. It handles openings up to 24 feet wide and drops up to 20 feet, which covers the vast majority of what we see.\n\nThe cassette itself is two-piece powder-coated extruded aluminum. That matters because a lot of cheaper systems use thin roll-form housing — essentially painted sheet metal. This is structurally different. And inside is the largest roller tube possible for that cassette size — a bigger, sag-resistant tube means your fabric hangs flat and operates smoothly for years.\n\nThe side tracks are what make this system stand out. The fabric edge zips into the track with a PVC insert — and on our Super Duty version, the track has stainless steel spring clips every 12 to 16 inches. That's what gives you a wrinkle-free, taut fabric even on wider openings.\"\n\n🔹 STANDARD vs SUPER DUTY — present as a natural choice:\n\"For most projects, the Standard E-Zip is the right call. It's Class 6 wind resistance, tested to 80 miles per hour, and it handles Colorado wind extremely well. For openings under about 18 feet, this is what we typically recommend.\n\nThe Super Duty is an upgrade we recommend in a few specific situations — a particularly high-wind location, an opening wider than 18 feet, or if you simply want the most robust system available. It uses the stainless steel spring clips, a heavier hem bar with an internal steel channel, and superior side tension. We'll show you both in the pricing so you can see what that upgrade looks like.\"",
    talkingPoints:[
      "THE money slide — slow down, build the value here",
      "Three cassette sizes; we size to the opening — every unit custom to the inch",
      "Two-piece powder-coated EXTRUDED aluminum — not thin roll-form sheet metal",
      "Largest roller tube for the size = flat, sag-free fabric",
      "The real choice is Standard vs Super Duty: Super Duty = stainless spring clips + heavier steel-channel hem bar, for wide/high-wind openings",
      "Tap a size → full specs · ⇄ compares all three · 'vs. the competition' for the roll-down & sunroom contrast"
    ],
    coach:"THIS IS YOUR MONEY SLIDE. Slow down. Cassette size is set by the opening — the customer's real decision is Standard vs Super Duty, and it's an upgrade conversation, not the opening offer. Rep-only guardrail: 80 mph / Class 6 applies to the 4\" and 5\" only — never quote a wind number for the 7\", and never a '130 mph' figure for Super Duty; none is documented."
  },
  {
    id:"ez-fabric", type:"splittext",
    title:"The Fabric — SunTex® by Phifer",
    bullets:[
      "Every fabric is Phifer SunTex® — GREENGUARD Gold certified, made for the outdoors",
      "All colors cost the same — the only real decision is openness",
      "Openness factor = how much UV it blocks versus how much you see through",
      "SunTex 95 is the most popular by far — blocks about 95% of the UV, stays roughly 5% open",
      "From inside you keep your view; from outside a dark fabric reads like a mirror by day — privacy without losing the light",
      "Prefer full blackout? A solid fabric gives total shade and privacy for an extreme exposure",
      "Colors from near-black to white — 6 shades on SunTex 80/90, 10 on SunTex 95/97"
    ],
    image: IMAGES.ezMonOutside,
    script:"\"For fabric, we work exclusively with Phifer — one of the most respected shading fabric manufacturers in the world. GreenGuard certified, built specifically for exterior applications.\n\nThe good news — all fabrics are the same price. So the only decision you're making is what works best for your space.\n\nThe main thing to understand is openness factor — essentially how much UV the fabric blocks versus how much you can see through it.\n\n(Hand them the SunTex 95 sample)\n\nThis is what most of our customers go with — it blocks about 95% of the UV, but you can still see through it from the inside. And from the outside — from a neighbor's yard or the street — it creates almost a mirror effect during the day. They can't see in. You can see out.\n\nIf total blackout is what you're after — complete privacy, or an extreme west-facing exposure — we can go to a solid fabric. But most people find the 95% gives them everything they need. Take a look at the colors and let's figure out what fits your home.\"",
    talkingPoints:[
      "All fabrics cost the same — the only decision is openness, not price",
      "SunTex 95 ≈ 95% UV blocked / ~5% open — the popular pick; hand them the sample to look through",
      "Mirror effect from outside by day = privacy without losing your view",
      "Solid fabric available for full blackout / extreme exposure",
      "6 colors on 80/90, 10 on 95/97 — full spec sheets are in the Docs library"
    ],
    coach:"Do NOT say \"95% openness\" — that's backwards. SunTex 95 BLOCKS ~95% of UV and is only ~5% OPEN; the number in the name is UV blockage, not openness. Bring the physical sample — letting them look through the 95 is what sells this slide."
  },
  {
    id:"ez-smart", type:"splittext",
    title:"Smart Control — One Button, Total Command",
    bullets:[
      "Motorized is standard — not an upgrade. Touch a button; stop it at any height",
      "Somfy drive — the industry's gold standard, covered for life under Platinum Protection Plus",
      "Control by handheld remote, wireless wall switch, or the app on your phone",
      "Integrates with home automation — works right alongside the rest of your smart home",
      "Sun and wind sensors available as add-ons — automate it to the weather",
      "Standard 110-volt plug-in in most homes — no panel upgrades, no complicated wiring"
    ],
    image: IMAGES.ezPartWayUp,
    script:"\"The system comes motorized as standard — that's not an upgrade, it's just how it works. Touch of a button, the screen goes up or down, and you can stop it wherever you want.\n\nThe motor is Somfy — the same brand used in premium motorized systems around the world, and it's covered for life. Standard operation is a handheld remote or a wireless wall switch. You can also control it through an app, and it integrates with home automation systems if you want to go that direction.\n\nWe also offer sun and wind sensors as add-ons — so the screen can react to the weather on its own.\n\nElectrically, most installs are as simple as a standard 110-volt plug-in. No panel upgrades, no complicated wiring in most cases — we handle it as part of the install.\"\n\n💵 REP-ONLY (never on the slide): the motorized package runs about $400 over a manual crank, and it carries a lifetime warranty — one of the best values in the whole system. Make it a specific talking point; it always lands.",
    talkingPoints:[
      "Present motorized as STANDARD — never make it sound like an option",
      "Somfy = a name they can Google; covered for life under PPP",
      "Remote / wireless wall switch / app / home automation — their choice",
      "Sun + wind sensors are ADD-ONS on the E-Zip (unlike the Sunesta wind sensor, which is standard)",
      "Rep-only: motor ≈ $400 over a manual crank — a specific value line; keep the number off the slide"
    ],
    coach:"Present motorized as the default, not an upsell. The $400 motor value line always lands — say it out loud, don't put it on a slide. Sensors are add-ons here; do NOT carry over the Sunesta standard-wind-sensor ruling."
  },
  {
    id:"ez-gallery", type:"photogrid",
    title:"Real Projects — Right Here in Southern Colorado",
    photos:[ IMAGES.ezMonUp, IMAGES.ezMonDown, IMAGES.ezThreePorch, IMAGES.ezNight, IMAGES.ezSunroom, IMAGES.ezWithAwning ],
    script:"\"Here are some projects we've done right here in the area.\n\nThis one is very similar to what you've got — (reference their situation: west-facing, covered patio, pergola enclosure). Same exposure, same challenge with the afternoon sun and wind.\n\nHere's what it looks like with the screens up — you barely notice they're there. Clean, low profile, looks like it belongs. And here's what it looks like when they're down — the space is completely transformed.\n\nThat homeowner told us they went from basically not using this space during the afternoon to being out there every day. That's the whole point.\"",
    talkingPoints:[
      "First two photos are the SAME 18-foot opening in Monument — up, then down. Use them as the before/after pair",
      "Tie a photo to THEIR situation — proof their problem has already been solved for someone just like them",
      "Last photo: screens paired with a Sunesta awning — the cross-sell picture"
    ],
    coach:"Move at the pace they set — slow down the moment they engage with a photo."
  }
],

"WRAP-UP": [
  {
    id:"ez-warranty", type:"warrantyrecap",
    title:"The Warranty — Recapped",
    subtext:"Platinum Protection Plus — included on every ATH quote. Lifetime coverage on the frame, fabric, motor, and electronics.<br><span style=\"font-size:.82em;opacity:.72\">Most SunTex fabrics; optional clear windows excluded. Backed and serviced locally by ATH.</span>",
    tiles:[
      {num:"Lifetime", label:"Frame", sub:"extruded aluminum & powder coat"},
      {num:"Lifetime", label:"Fabric", sub:"most SunTex fabrics", hero:true},
      {num:"Lifetime", label:"Motor", sub:"Somfy drive"},
      {num:"Lifetime", label:"Electronics", sub:"remotes & controls"},
      {num:"Included", label:"Platinum Protection Plus", sub:"standard on every ATH quote"}
    ],
    nodes:[
      {id:"ath", kind:"logo-ath", title:"Around The House", detail:"Your local team — design, install, and warranty service all handled right here in Monument. When you need service, you call us, not a national 800 number.", photo:IMAGES.dealerFamily},
      {id:"eclipse", kind:"logo", logo:IMAGES.ezLogoEclipse, title:"Eclipse", detail:"The manufacturer — Eclipse Shading Systems has built the E-Zip since 2013. Platinum Protection Plus is the coverage that takes the frame, fabric, motor, and electronics to lifetime.", photo:null},
      {id:"phifer", kind:"text", title:"Phifer", detail:"The fabric maker. Phifer's SunTex carries its own 10-year exterior fabric warranty and GREENGUARD Gold certification — the foundation under the PPP fabric coverage.", photo:null}
    ],
    serviceBadge: IMAGES.ezServiceBadge,
    service:{title:"Serviced locally — for the life of the system", items:["You call us — never an 800 number","Same team that installed it","PPP registered at install"], foot:"Included with every ATH installation"},
    triLabel:"One system, backed three ways — tap a logo",
    script:"\"One more thing worth knowing before we get to pricing — and this is genuinely one of the best warranties in the industry.\n\nEclipse covers the frame, the fabric, the motor, and the electronics — all of it. Lifetime coverage across the board with the Platinum Protection Plus package, and that's included on your quote. Most competitors cover components separately, with shorter terms, and often with exclusions.\n\nOut here in Colorado — with the UV at elevation, the wind, the hail — that kind of coverage isn't just a nice-to-have. It's real protection on a real investment.\n\nAnd when you need warranty service, you're calling us — not a national 800 number. We're local, we're accountable, and we come out and take care of it.\n\nOne detail worth knowing: every manufacturer requires correct installation for the warranty to be valid at all — another reason who installs this matters as much as the product.\"\n\nTransition: \"Any questions about the warranty before we look at options?\"",
    talkingPoints:[
      "Lifetime on frame, fabric, motor & electronics — via Platinum Protection Plus, included on every quote",
      "The most comprehensive coverage in the exterior-screen industry",
      "Competitors cover components separately — shorter terms, more exclusions",
      "Serviced locally by ATH — you call us, not an 800 number",
      "Tap a logo (ATH · Eclipse · Phifer) for the three-way backing",
      "End on: 'Any questions about the warranty before we look at options?'"
    ],
    coach:"⏱ Keep it tight — 1.5–2 minutes. PPP is included on every ATH quote (Jack's ruling), so \"lifetime\" is fair to state WITH the PPP framing and the caveat (most fabrics; clear windows excluded). The base factory warranty WITHOUT PPP is 10-yr frame/fabric and 5-yr motor/electronics — that lives here in coach only. The opt-out exists for the rare customer who asks, but a rep never proactively raises it."
  },
  {
    id:"ez-process", type:"processsteps",
    title:"Our Proven Process",
    subtext:"From first measurement to final walk-through — one accountable local team.",
    steps:[
      {icon: IMAGES.procSite,        title:"Site Visit & Measure",  text:"Exact opening dimensions — every screen is custom made to the inch."},
      {icon: IMAGES.procManager,     title:"Project Manager",       text:"One point of contact keeps your project moving and you informed."},
      {icon: IMAGES.procInstall,     title:"Installation Day",      text:"Our trained crew sets the tracks level and parallel — most jobs done in a day."},
      {icon: IMAGES.procWalkthrough, title:"Final Walk-Through",    text:"We run every screen with you and don't leave until you're happy."},
      {icon: IMAGES.procWarranty,    title:"Warranty Activated",    text:"We register your coverage and service it locally — you call us, not an 800 number."}
    ],
    trust:"Serving Southern Colorado since 2004",
    script:"\"From here, the process is simple. We take exact measurements of every opening, and everything is custom made to your dimensions. You get a project manager as your single point of contact. Install day, our crew sets the tracks perfectly level and parallel — most jobs are done in a day. We do a final walk-through together, run every screen, and make sure you're happy. Then we activate your warranty coverage — and if you ever need service, you call us, right here.\"",
    talkingPoints:[
      "A clean, respectful, professional construction site — every time",
      "Warranty serviced locally by ATH — no national 800 number"
    ],
    coach:"⚠️ UNCONFIRMED: the free 12-month 'Shade Service' cleaning visit is NOT on this slide and stays out of customer copy until Jack confirms it's current policy."
  },
  {
    id:"ez-viewstays", type:"herosplit",
    title:"Up, It Disappears. Down, It's Protected.",
    subtext:"It's more like a wall you can make disappear whenever you want. The view stays — the sun, the wind, and the bugs don't.",
    image: IMAGES.ezHalfDeployed,
    script:"\"It really doesn't feel like an enclosure — and that's an important distinction. Unlike a glass sunroom, this is a screen. Air moves through it. You still feel like you're outside — just without the sun beating on you and without the wind pushing you back in.\n\nAnd because it's motorized, you control it completely. All the way down, partially down, or fully up in seconds. It's not a permanent enclosure. It's more like a wall you can make disappear whenever you want.\"",
    talkingPoints:[
      "The emotional recap — the last beat before you transition to the proposal",
      "Never use the word 'cage' unless the customer brings it up first"
    ],
    coach:"Build emotion → then logic → then close. This slide is the emotion. From here, recap their Accomplish List and move to the proposal — the close scripts (micro-close, preference close, and the 10% same-day incentive) live in the Training Coach under Pricing & Close."
  }
]

};

// ── Training reference (rep-only) ────────────────────────────────────────────
const ECLIPSE_TRAINING = {

  doDont: {
    // E-Zip-specific additions — appended to TRAINING_SHARED.doDont (js/registry.js).
    dont: [
      "Do not lead with cassette size or specs before confirming the customer's goals",
      "Do not skip the fabric sample — let them look through it and feel it",
      "Do not present the Super Duty as the default — it is an upgrade conversation",
      "Do not use the word \"cage\" unless the customer brings it up first",
      "Do not compare to glass sunrooms unless the customer raises it",
      "Do not offer the 10% same-day incentive before the price has landed and been absorbed"
    ],
    do: [
      "Bring fabric samples to every appointment — let them look through the 95% sample",
      "Use the direction the space faces to anchor the sun-angle conversation",
      "Use the zipper retention explanation every time — it is your clearest competitive differentiator",
      "Present motorized as standard — never an option",
      "Always confirm: standard duty, or does the situation call for Super Duty?",
      "Present two options at pricing — always"
    ]
  },

  faqs: [
    {tag:"FAQ", q:"Will I still be able to see my view through the fabric?",
     a:"Great question — and it's one of the most common things people ask.\n\nThe 95% fabric — which is what about 95% of our customers go with — lets you see through it from the inside. You get your view. The sun and wind are blocked, but you're not staring at a wall.\n\nHere's the bonus: from the outside, looking in at the screen, it creates almost a mirror effect during the day. Neighbors can't see in. You can see out. A lot of customers actually love that as much as the sun control.\n\nLet me show you the sample so you can actually look through it."},
    {tag:"FAQ", q:"Will it hold up in Colorado wind?",
     a:"That's actually one of the strongest selling points of this system.\n\nThe E-Zip is Class 6 wind resistance tested — rated to 80 miles per hour on the 4\" and 5\" systems. The zipper retention is what makes the difference. The fabric edge is physically locked into the side track — so instead of billowing and flapping like a generic roll-down screen, this system stays flat and taut even in high wind.\n\nIf you're in a particularly exposed location, that's when we'd talk about the Super Duty — it adds stainless steel spring clips in the tracks for even more side tension.\n\n⚠️ Do NOT quote \"performs well above 80 in practice\" or any 130-mph figure — no documentation exists for either."},
    {tag:"FAQ", q:"Will it keep no-see-ums out?",
     a:"Yes — and that's actually one of the things the Phifer fabric is specifically designed for. The weave is tight enough to stop no-see-ums, mosquitoes, and other small insects. When it's down and sealed at the bottom, you've got a real barrier. A lot of our customers tell us this alone changed how much they use their patio in the evenings."},
    {tag:"FAQ", q:"How do I get in and out?",
     a:"Simple — you run it up with the remote. Comes up in seconds.\n\nOne thing to note — this system doesn't have a built-in door panel. The way you enter and exit is by raising the screen. Most homeowners find they don't even think about it after the first week."},
    {tag:"FAQ", q:"Do you all offer any financing?",
     a:"Yes, absolutely. We have some great options available. Unlike credit cards with yearly fees and interest rates as high as 29%, we work with home-improvement lenders. There's no prepayment penalty, and everything extra you pay goes directly toward the principal. We have low monthly budget plans with rates as low as 10.99%, or a 12-month no-interest / same-as-cash option. These are popular either way you go because there's no money down, and the first payment isn't due until after the installation is complete.\n\nWe can look into getting you pre-approved with no impact on your credit score. Is that something you'd be interested in?"},
    {tag:"FAQ", q:"Will you all be doing this work or do you use subcontractors?",
     a:"Yes! We work with subcontractor partners. We train with them, critique, and perform final inspections. They work for us and only us. All of our partners install to the specifications required by the manufacturers and are trained directly as well. Around the House manages and warranties the work, and will perform a final walk-through to ensure quality and satisfaction."},
    {tag:"Objection", q:"\"Is it going to feel like a cage or a sunroom?\"",
     a:"It really doesn't — and that's an important distinction.\n\nUnlike a glass sunroom, this is a screen. Air moves through it. It doesn't trap heat the way an enclosed glass room does. You still feel like you're outside — just without the sun beating on you and without the wind pushing you back in.\n\nAnd because it's motorized, you control it completely. You can have it all the way down, partially down, or fully up in seconds. It's not a permanent enclosure. It's more like a wall you can make disappear whenever you want."},
    {tag:"Objection", q:"\"We got a quote from someone else for a lot less.\"",
     a:"That's worth understanding — because not all screen systems are the same, and the price difference usually comes down to a few specific things.\n\nThe biggest one is whether it uses a true zipper retention system. A generic roll-down screen with no zipper track will flap in the wind and eventually fail. The zipper is what keeps this system taut and functional in Colorado conditions.\n\nSecond is the warranty. Most cheaper systems have a limited warranty on components, shorter terms, and often require you to deal with a manufacturer directly rather than a local dealer.\n\nThird is the fabric — Phifer is a specific manufacturer with a documented track record.\n\nWe'd rather show you exactly what the difference is than just ask you to take our word for it."},
    {tag:"Rep Ref", q:"E-Zip vs. Sunesta — the quick rep contrast",
     a:"When both are on the table, or you're switching gears mid-appointment:\n\nPrimary benefit — Sunesta: overhead shade & sun projection. E-Zip: full opening control — sun, wind, and privacy.\n\nCustomer pain — Sunesta: can't use the space during the day. E-Zip: the elements push them off the patio entirely.\n\nWind story — Sunesta: arms tested to 98 mph. E-Zip: Class 6, tested to 80 mph, zipper retention keeps it taut.\n\nKey differentiator — Sunesta: Smart Case, strong arms, cable system. E-Zip: the zipper-retention track — no flapping, no gaps.\n\nFabric decision — Sunesta: color & pattern. E-Zip: openness factor — SunTex 95 is almost always right.\n\nThe two options — Sunesta: Sunesta vs Sunstyle. E-Zip: Standard vs Super Duty.\n\nCommon objection — Sunesta: will it block our view? E-Zip: will I still be able to see through it?\n\nCompetitor contrast — Sunesta: Frankenstein awnings. E-Zip: generic roll-downs and glass sunrooms.\n\nCross-sell — Sunesta: drop screen, LED lights. E-Zip: additional screens, louvered-roof pairing.\n\nInstall — Sunesta: one day typically. E-Zip: one day, sometimes two on larger enclosures."}
  ],

  close: {
    note:"Urgency mechanic (Jack's call, 2026-07-15): the 10% SAME-DAY incentive — introduced calmly, once, AFTER the price lands and is absorbed. Never lead with it, never repeat it as a pressure tactic. Rep-only; it never appears on a customer slide.",
    sections:[
      {title:"Transition to pricing — outcome first, price second",
       body:"Always revisit the Accomplish List before showing a number. This is not \"here's the price\" — it's \"here's the solution to what you asked for.\"\n\n\"So based on everything we talked through — and your goals of…\" (repeat their list, in their words) \"…this is what I put together for you. Each screen is custom made to your exact opening — nothing off the shelf.\""},
      {title:"Micro-close — before the real close",
       body:"\"Does this all make sense so far?\"\n\nStop talking. Wait. Do not fill the silence.\n\nIf they say yes and seem engaged — move to close. If they hesitate — something is unresolved. Find it before you ask for the decision."},
      {title:"The close is a preference question",
       body:"\"Between the two options we walked through — which one feels like the right fit for what you're trying to accomplish?\"\n\nNOT \"What do you think?\" and NOT \"Any questions?\" — give them a direction to move in, not a yes/no.\n\nMost customers: \"Let's go with the Standard — the warranty and wind rating are exactly what we need.\" If they ask what the Super Duty actually does for them — that's a buying question. Walk it again and let them decide."},
      {title:"Two options, always",
       body:"Option 1 is the ideal, full recommendation — presented first, never the lesser option. Option 2 is the alternative: the Super Duty upgrade or a scope adjustment. Each screen is priced per opening, custom to their exact dimensions.\n\nIf price pushback is about scope, adjust scope — never discount without adjusting scope first."},
      {title:"The same-day incentive — once, after the price lands",
       body:"After the first number has landed and been absorbed:\n\n\"And one more thing — we do offer a same-day incentive. If you decide to move forward today, we can take 10% off the total. No pressure on that — I just want to make sure you have the full picture.\"\n\nIntroduce it calmly, ONCE, after the price — never lead with it, never repeat it as pressure. It's one of the Four Sales (\"do it now\"): the incentive plus the 3–5 week install window are what support moving today."}
    ]
  },

  preDemo: {
    intro:"Pre-frame at the table — set expectations and take control of the room before Slide 1.",
    body:"\"So what I'd like to do is take about 10 to 15 minutes and walk you through how these screen systems work, what makes them different from anything else out there, and how we'd design this specifically for your space. Then we'll look at some options together and figure out what actually makes the most sense for you. Every screen we do is custom made for the opening — so there's nothing off the shelf here. Sound good?\"\n\nMASTER E-ZIP ACCOMPLISH LIST — fill in during discovery, confirm before the demo begins (their words, not product names):\n\n☐ Use the outdoor space more — during peak sun hours, not just morning and evening\n☐ Block harsh sun from the west, south, or wherever it hits hardest\n☐ Cut the wind so the space is actually comfortable to sit in\n☐ Keep the view — see out without being blasted by sun or wind\n☐ Reduce heat and glare coming into the interior rooms behind the space\n☐ Add privacy from neighbors, the street, or adjacent properties\n☐ Keep no-see-ums and insects out so evenings are enjoyable\n☐ Extend usability into more months of the year — spring through fall\n☐ Have something easy and convenient to control with a button\n☐ Make the space feel finished and intentional — not temporary or pieced together\n☐ Enclose the full porch or pergola and create a true outdoor room\n☐ Have something that holds up in Colorado wind and weather long-term\n\nSun-angle cheat: West-facing = afternoon · South = midday · East = morning · North = usually wind or privacy."
  },

  // The 10-step visit structure is ATH-wide, not product-specific — reuse the
  // Sunesta master copy (js/data-sunesta.js must load first; index.html enforces it).
  tenSteps: TRAINING_REFERENCE.tenSteps
};

// ── Product registration ─────────────────────────────────────────────────────
PRODUCT_DATA.eclipse = {
  deck: ECLIPSE_DECK,
  training: ECLIPSE_TRAINING,
  logo: IMAGES.ezLogoEclipse,
  brandHTML: 'Around The House · <b>Eclipse® E-Zip Screens</b>',
  photoCats: ["screens"],
  docs: [
    {name:"SunTex 80 / 90 — Fabric Samples & Specs (Phifer)", file:"docs/suntex-80-90-samples.pdf", kind:"pdf"},
    {name:"SunTex 95 / 97 — Fabric Samples & Specs (Phifer)", file:"docs/suntex-95-97-samples.pdf", kind:"pdf"}
  ],
  docsCard: {name:"Fabric Specs & Samples", sub:"Phifer SunTex spec sheets — all four collections"}
};

const DECK = {
  "WHY SUNESTA": [
    {
      id:"introvideo", type:"videoloop",
      title:"Opening Video Loop",
      script:"(Video loop plays here — no talking yet.) Let this run for a few seconds while they settle in. It's doing the warm-up work for you.",
      talkingPoints:["This slot is for a short branded video loop — not built yet, placeholder for now","Logo stays visible bottom-right the whole time"],
      coach:"Once the real video is in, keep this under 8–10 seconds — it's a mood-setter, not content."
    },
    {
      id:"dealer", type:"splittext", image: IMAGES.dealerFamily,
      title:"Your Exclusive Sunesta Dealer",
      bullets:["Family-owned & operated — founded 2004, based in Monument","20+ years · thousands of projects across southern Colorado","Exclusive Sunesta dealer for Southern Colorado","You call us, you get us — local design, install & service"],
      script:"A quick background on us —\n\nWe are Around the House Home Solutions. We're a local, family-owned company based right up in Monument. We've been in business since 2004 — a little over 20 years — and in that time we've completed thousands of projects throughout southern Colorado, so this isn't something we just picked up last year.\n\nOur focus is the exterior of the house — high-quality shade solutions so homeowners can enjoy their outdoor living space, and living in Colorado, to the fullest.\n\nSomething our clients really appreciate — we're not some big corporation out of Denver… you call us, you get us. As a company we care deeply about our customers, our employees, and the local communities we serve.\n\n👉 INSERT PERSONAL TOUCH — why YOU work here (see the editable block below; swap it for your own story)\n\nTransition: \"Outside of family, your home is typically your largest investment — so we only install quality products, to the highest standards, with great warranties to back them up.\"",
      personalTouch:"Myself, I've actually been in the home remodeling industry since I graduated from college in 2014. I've worked with organizations ranging from large national remodeling companies to small owner-operated contractors, helping design and deliver projects from full home additions to interior remodels and outdoor improvements like decks and concrete patios. Over the years I realized I have to be happy and love where I work — so when I met Jack and his brother Maxx, I couldn't pass up the opportunity to work with good people who have integrity and communicate well. I'm really happy to have found my home here at Around the House.",
      talkingPoints:["Founded 2004 · family-owned · based in Monument","Thousands of projects — 20+ years, not picked up last year","Not a Denver corporation: you call us, you get us","Founded by Kirt & Vicki, now led with sons Maxx & Jack","End on the largest-investment transition — it sets up Our Products"],
      coach:"Keep this warm and personal — don't sound like a commercial. The Personal Touch block below is Matt's version: each rep should replace it with their own story (edit personalTouch in js/data.js)."
    },
    {
      id:"products", type:"productcards",
      title:"Our Products",
      paragraph:"Outside of family, your home is typically your largest investment — so we only install quality products, to the highest standards, with great warranties to back them up.",
      rows:[
        {icon:IMAGES.prodGutter, photo:IMAGES.prodGutterPhoto, logo:IMAGES.logoGutterHelmet, label:"Gutter Helmet & Helmet Heat", sublabel:"4,000+ customers in Southern Colorado", detail:"We've been the exclusive Gutter Helmet and heat-cable dealer in Southern Colorado, with over 4,000 Gutter Helmet customers. Leaf and debris protection for gutters and roofline — designed to be maintenance-free and help prolong the life of the exterior of your home."},
        {icon:IMAGES.prodScreen, photo:IMAGES.prodScreenPhoto, logo:IMAGES.logoEclipse, label:"Motorized Screens & Track Systems", sublabel:"UV, heat & wind resistance", detail:"An extremely popular investment here — high UV and heat blocking plus real wind resistance, with the screen held firm in side tracks."},
        {icon:IMAGES.prodLouver, photo:IMAGES.prodLouverPhoto, logo:IMAGES.logoEclipse, label:"Motorized Louvered Roofs", sublabel:"Attached & freestanding", detail:"Commercial-grade louvered roof systems built to handle the wind and harsh weather we deal with in Colorado. Often paired with our motorized screens to combat wind and sun and create a true three-season outdoor living experience."}
      ],
      script:"We've been the exclusive dealer for Gutter Helmet and heat cable systems in Southern Colorado, with over 4,000 Gutter Helmet customers — that's a leaf-and-debris protection system for your gutters and roofline, designed to be maintenance-free and help prolong the life of the exterior of your home.\n\nWe also install motorized screen and track systems — those have become an extremely popular investment because of the UV, heat, and wind resistance they provide.\n\nAnd motorized louvered roof systems — attached or freestanding — which are commercial grade to handle the wind and weather we deal with here in Colorado. Often we pair those with the screens to create a real three-season outdoor living experience.\n\n👉 Anchor service + accountability — this is cross-sell context, not a pitch. Plant seeds and move on.",
      talkingPoints:["Exclusive Gutter Helmet dealer — 4,000+ local customers","Motorized screens: UV + heat + wind resistance","Louvered roofs: commercial grade, pairs with screens for 3-season living","Plant seeds — don't pitch. Tap a card for detail."],
      coach:"One breath per product. If they perk up on one, note it for later — don't derail the awning demo."
    },
    {
      id:"training", type:"splittext", image: IMAGES.trainingPhoto, cert: IMAGES.trainingCert,
      title:"Sunesta Factory Training",
      bullets:["Trained by ATH and directly by Sunesta — Jacksonville, FL","Licensed & insured — permits pulled, everyone protected","Our crews & longstanding partners work for us, and only us","ATH final inspection on every project"],
      script:"Something that is really important — all of our installers are trained directly by us and through Sunesta down in Jacksonville, Florida.\n\nSo when we mount your awning, we're not guessing… we're making sure it's structurally correct for wind, load, and long-term performance.\n\nA lot of companies… it's kind of a 'chuck in a truck' situation — often they only install a few of these a year, so they just slap it up and hope for the best. There's no real consistency from one install to the next, which can lead to homeowners paying for the project multiple times. You can pick a great product, but if it's not installed correctly and to manufacturer standards, you won't have a real warranty.\n\n👉 Slight smile — let that land.\n\nWe're also a licensed and insured contractor — we hold a license for projects that require a permit, and if something were to happen on the job, you're protected and we're protected as well.\n\nWe go beyond what the manufacturer requires on mounting points, and when we're done, the wiring is run properly and the conduit is painted to match your home.\n\nTransition: \"We're a get-it-right-the-first-time company that stands behind our work — if your new awning ever has any issues, just give us a call and we'll schedule a time to come take a look. This is what we do, day in and day out.\"",
      talkingPoints:["Trained by ATH + Sunesta (Jacksonville) — we're not guessing","'Chuck in a truck' competitors → inconsistent installs → voided warranties","Licensed & insured — permits handled, both sides protected","Beyond-spec mounting points · conduit painted to match","If asked about subcontractors: partners who work for us and only us — see the Subcontractor FAQ"],
      coach:"Slight pause after the competitor comment. Let it land, then move with confidence. Photo and certificate are placeholders — real resolution coming."
    },
    {
      id:"people", type:"splittext", image: IMAGES.dealerFamily,
      title:"Our People",
      bullets:["In business 20+ years — thousands of projects managed","Our own crews + a fully staffed operations department","Longstanding subcontractor partners — trained, critiqued, inspected","Trained to manufacturer specs and our own higher standards"],
      script:"Of course, you can build a great company and a great process — but if you don't have the right people on a project, it's unlikely to go well. When it comes to people, the questions are simple:\n\nHow long has the contractor been in business? We've been around over twenty years and installed thousands of projects. That requires a whole lot of people management.\n\nWho will be responsible to perform the work? We have our own crews, a fully staffed operations department, and longstanding subcontractor partners — they work for us, and only us.\n\nAre they qualified? Our teams are trained to install to manufacturer specifications as well as our own standards. The reason we do this is simple — we want your project to look great and last as long as possible.",
      talkingPoints:["Three questions: how long, who does the work, are they qualified","Own crews + staffed ops + longstanding partners (ours only)","Manufacturer specs AND our own standards","This slide answers the subcontractor question before it's asked"],
      coach:"Deliver the three questions as questions — pause after each. Photo is the family placeholder — swap for a real crew photo when available."
    },
    {
      id:"award", type:"herosplit", image: IMAGES.award,
      title:"Sunesta National Dealer of the Year — 2025",
      subtext:"Recognized for #1 Sunesta Awning Dealer in the Western United States in 2025",
      script:"One more thing before I show you the product itself — we were just named Sunesta's National Dealer of the Year for 2025.\n\nThat's not a local award, that's across every Sunesta dealer in the country. It matters here for a simple reason — it's not us saying we're good at this, it's the manufacturer saying it, based on installs, service, and how we take care of customers after the sale.\n\nSo everything I'm about to walk you through isn't just a good product — it's a good product installed by the team the manufacturer itself recognizes as the best at it.\n\n👉 Optional color — the mission story (use when they're engaged):\n\"Retractable awnings have largely been adopted by the eastern half of the country — European influence, manufacturing locations, climate. Visit France, Germany, Italy and they're on every corner. The western U.S. has been slower — and we've been on a mission to change that. We live in one of the most beautiful climates in the country, but so many homeowners still struggle to actually enjoy their views and outdoor spaces. Quality retractable shade has been underserved in Southern Colorado, and it's been our mission to change that — with products engineered for our climate and a team that can deliver. In 2025, Sunesta honored us as National Dealer of the Year — recognized as the #1 awning and shade dealer in the western United States.\"",
      talkingPoints:["National award — not local/regional","Third-party validation from the manufacturer, not self-proclaimed","Ties directly to install quality + after-sale service, not just sales volume","Optional: the western-US mission story — underserved market, we're changing it"],
      coach:"Say this with quiet confidence, not a brag. Let the fact do the work. The mission story is optional color — read the room."
    },
    {
      id:"local", type:"photogrid",
      title:"Fall In Love With Your Home Again",
      photos:[IMAGES.fallLoveQ1, IMAGES.fallLoveQ2, IMAGES.fallLoveQ3, IMAGES.fallLoveQ4],
      script:"Here are some projects we've done right here in the area.\n\n(Insert local area — Falcon, Black Forest, Briargate, Peyton, etc.) Very similar exposure to what you've got here — large unit, direct sun, same afternoon challenge.\n\nAnd here's a look from the inside looking out. You'll notice it still gives you your view — there's color, there's openness. It provides privacy and sun control, but you don't feel boxed in.\n\nTap any photo to expand it full-screen if they want a closer look.",
      talkingPoints:["Always tie the photo to their specific situation","Reference their wind exposure or sun direction","This is proof, not a gallery","Tap a photo to expand — good for showing detail up close"],
      coach:"If their deck faces west, point that out. If they mentioned wind, reference it. Photos are placeholders — real resolution coming."
    }
  ],
  "STORY OF SUNESTA": [
    {
      id:"difference", type:"difference",
      title:"Experience the Sunesta Difference",
      paragraph:"Over 40 years ago, the founders of Sunesta Shade Systems had an idea that transformed the American awning industry.",
      rows:[
        {style:"plain", icon:IMAGES.badge45years, label:"45 Years in Business"},
        {style:"banner", icon:IMAGES.iconRuler, label:"Professional Installation"},
        {style:"plain", icon:IMAGES.americanBuilt, label:"American Made", sublabel:"MADE IN AMERICA"}
      ],
      script:"We've been around since 2004 — but Sunesta has been around since 1981. They were actually one of the first awning manufacturers in the country, and they've stayed at the top in engineering and quality.\n\nThat matters because the product has been tried and tested for over 40 years, in every climate and region. We get some pretty extreme weather here in southern Colorado — sometimes all four seasons in a single day — so knowing your new awning is built to last is great peace of mind.\n\nEverything is made right here in the United States — the arms, the fabric, the frame components — except for the motor, which is hand assembled in Spain. That motor is Somfy — the most trusted motor brand in the world for this type of system.\n\nTransition: \"It's important for us to use products made in the USA, so we keep as many of our components as local as possible.\"\n\n⚠️ UNVERIFIED — confirm before repeating to a customer: fabric manufactured in North Carolina; arms and frame made in Florida.",
      talkingPoints:["Sunesta since 1981 — one of the first awning manufacturers in the country","Four seasons in a single day — built for Colorado extremes","American made, except the Somfy motor (hand-assembled in Spain)","Multi-channel remote controls awning + LED lights"],
      coach:"Icons are placeholder crops for now — title, paragraph, and all three row labels are fully editable text."
    },
    {
      id:"badges", type:"credibility",
      title:"Trust & Credibility",
      paragraph:"Reputation matters to us. In an industry known for complaints, we've stacked up the proof — third-party certifications, national awards, and hundreds of five-star reviews from local homeowners.",
      rows:[
        {icon:IMAGES.badgeMiamiDade, label:"Miami-Dade County Approved", sublabel:"Tested to 98 mph before arm failure — hurricane-zone rated", detail:"Sunesta is the first retractable awning manufacturer to exceed Miami-Dade's strict standards (NOA #24-0401.03). Arms tested to 98 mph before failure."},
        {icon:IMAGES.badgeBBB, label:"Better Business Bureau", sublabel:"A+ rated — accredited & locally accountable", detail:"A+ rated with the Better Business Bureau — accredited, verified, and locally accountable."},
        {icon:IMAGES.badgeSkinCancer, label:"Skin Cancer Foundation", sublabel:"Fabric endorsed for blocking harmful UV rays", detail:"Our awning fabric is endorsed by The Skin Cancer Foundation for its efficacy in blocking harmful UV rays — a real difference at Colorado elevation, where UV exposure runs higher than people expect."},
        {icon:IMAGES.award, label:"Award-Winning Team", sublabel:"National Dealer of the Year 2025 · 4x Customer Satisfaction", detail:"Sunesta's National Dealer of the Year for 2025 — recognized as the #1 awning/shade dealer in the western United States — plus a 4x Customer Satisfaction award winner with Gutter Helmet, two years in a row."},
        {icon:null, label:"Around The House Home Solutions", sublabel:"4.9 ★★★★★ · 200+ local reviews", link:"https://share.google/00IDfj15biWj76ERJ"}
      ],
      script:"Our awning systems are Miami-Dade County approved — they've been tested in hurricane conditions, and the arms held up to about 98 mph winds before failure.\n\n👉 Use THEIR home as the example: \"Your home is in Falcon — one of the most wind-prone areas in the Springs\" or \"You mentioned the wind can rip through the back porch.\"\n\nWhile we don't deal with hurricanes in southern Colorado, we certainly get hit with some major winds. The good news is we install a wind sensor on our motorized awnings as a standard feature — your awning closes automatically if the wind picks up. I'll cover that again in a bit.\n\nHere locally, we've got over 200 five-star reviews. Our reputation is important to us — we've worked hard to communicate well and create happy customers.\n\n👉 Awards, delivered so they smile: \"In an industry that's pretty notorious for complaints, it's pretty cool that we're winning awards.\" We're a 4x Customer Satisfaction award winner — two years in a row with Gutter Helmet.\n\nWe've also partnered with the Skin Cancer Foundation — because out here, you either need sunscreen… or shade. The Colorado sun can be absolutely brutal and relentless, and at our elevation the UV exposure is significantly higher than people expect. Super important to stay protected.\n\nTransition: \"In 2025 we were actually the Sunesta Dealer of the Year for the whole country — we're really proud of the relationship we've built with Sunesta.\"",
      talkingPoints:["Miami-Dade tested — 98 mph before arm failure","Localize the wind: use THEIR neighborhood or their own words","Wind sensor comes STANDARD on motorized units — tease it here","200+ five-star local reviews · A+ BBB","Awards line — deliver it so they smile","Skin Cancer Foundation + Colorado elevation UV","Tap any badge for detail — Google row opens real reviews"],
      coach:"Stack credibility fast and keep moving. Each badge shows the proof line right on the slide — tap any badge for the fuller detail; the Google reviews row links out to the real ATH review page."
    },
    {
      id:"triangle", type:"triangle",
      title:"Sunesta Triangle of Strength",
      subtext:"National brand. Local service. One warranty that travels with your home.",
      script:"👉 Kill competitors cleanly\n\n\"Sunesta is a national brand — so yes, we're your local company… but you also have a national warranty backing you.\"\n\n\"A lot of other companies piece together parts from a bunch of different manufacturers — we call those Frankenstein awnings (Get a laugh). When that company goes out of business, your warranty typically goes with them so it's nice knowing a national brand has you covered.\"\n\nYour new awning comes with a unique QR Code which contains all the important data about your awning including product type, measurements, fabric information, which makes the warranty process simple and efficient.\n\nThe warranty is fully transferable as well to the next homeowner so adds some good value to the project and home.\n\nTransition/Engagement question: Any questions about the warranties?\n\n👉 Light humor → builds contrast",
      talkingPoints:["National brand = local install/service + national warranty backing","Avoid \u2018Frankenstein awnings\u2019 — get a laugh, then let it land","Unique QR code has full product/warranty data on file","Warranty is fully transferable to next homeowner — adds resale value","Transition question: \u201cAny questions about the warranties?\u201d"],
      coach:"Get the laugh on 'Frankenstein awnings,' then go serious for the QR code and transferability. Tap any node in the triangle for more detail.",
      nodes:[
        {id:"ath", kind:"logo-ath", title:"Around The House", detail:"Your local team — design, installation, and service all handled by us, right here. Family-owned in Monument: founded by Kirt & Vicki, now run with their sons Maxx & Jack. National brand backing, local accountability.", photo:IMAGES.triAthFamily},
        {id:"sunesta", kind:"logo", title:"Sunesta", detail:"The manufacturer itself — designed, engineered, and warrantied by one company. Not an assembly of parts from five different suppliers.", photo:IMAGES.triSunestaAwning},
        {id:"gibraltar", kind:"text", title:"Gibraltar", detail:"Sunesta's parent financial backing — Gibraltar Industries — is what makes the nation's-best warranty coverage possible and dependable over the long run.", photo:null}
      ]
    },
    {
      id:"tenreasons", type:"reasonsgrid",
      title:"10 Reasons to Choose Sunesta",
      reasons:[
        {title:"40+ Years Proven", text:"Building awnings since 1981 — tested in every U.S. climate. Not a startup."},
        {title:"American Made", text:"Arms, fabric, and frame built in the USA."},
        {title:"Somfy Motor", text:"The world's most trusted motor, hand-assembled in Spain. Dimmable, multi-channel remote."},
        {title:"Rust-Proof Arms", text:"Four PVC-coated steel cables inside each arm — no rusting bicycle chains."},
        {title:"SmartCase Protection", text:"Fully encloses the fabric when retracted — rain, snow, UV, hail, pine needles."},
        {title:"98 MPH Tested", text:"Miami-Dade approved; arms held to 98 mph. 30 mph continuous wind rating."},
        {title:"Lifetime Warranty", text:"Lifetime arms & hardware, 10-yr fabric & motor — and it's transferable."},
        {title:"Built to the Inch", text:"Custom sizing up to 40' wide and 14'8\" projection — made for your home."},
        {title:"Local Install & Service", text:"Sunesta-trained ATH installers and free lifetime pitch adjustments."},
        {title:"One Warranty, One Call", text:"National brand, local team — no Frankenstein parts, no runaround."}
      ],
      script:"This is the quick version of everything we've walked through — ten reasons Sunesta stands apart. I won't read every one to you, but the ones that matter most for your situation are… (pick the two or three that map to their Accomplish List).\n\nThe theme through all ten is the same: it's engineered to last in Colorado weather, it's backed by one national warranty, and it's installed and serviced by us, locally.",
      talkingPoints:["Use this as a recap — don't read all ten","Pick the 2–3 reasons that map to THEIR Accomplish List","Every reason ties back to: built to last, one warranty, local service"],
      coach:"This is a scanning slide, not a reading slide. Let them look while you highlight the two or three that matter to them."
    }
  ],
  "AWNINGS": [
    {
      id:"reasons", type:"reasonsphoto", image: IMAGES.reasonsPhoto,
      title:"Reasons for Shade",
      script:"👉 Re-anchor THEIR why\n\n\"Most people we work with are trying to solve 2–3 things: Heat, glare, and actually being able to use the space.\"\n\n*Click the temperature gauge.* \"Under these awnings, they typically keep the area at least 20 degrees cooler — so it can turn a 90 degree day into a cool 70.\"\n\n\"Adds some protection for your flooring and furniture, helping prevent them from fading.\"\n\n👉 Tie directly:\n\n\"For you guys, it sounded like the biggest ones were…\"\n\n👉 (List their exact Accomplish List items)\n\n\"These awnings can make a really big difference — allowing you to create a perfect day in the space most days of the week.\"\n\n*Perhaps add:* \"Our awning products can also be used when it rains — so whether it's during the day or you just want to enjoy your space in the evening while it's raining, it'll give you coverage. Comes in handy if you want to BBQ outside while it's raining too. In Colorado, though, you want to be careful with rain because it's often followed by hail — so not something we recommend leaving retracted while you're away, but a great feature, especially with a lighting package in the evening to set some ambience or do some reading. I'll show you a bit more about the lights here in a bit.\"",
      talkingPoints:["Tap each bubble to reveal the reason","Re-anchor with THEIR exact Accomplish List items — say them back","Rain/evening/hail caution + lighting teaser is optional color, not required"],
      coach:"Click the temperature gauge live during this line for effect. Tie straight back to what they told you earlier — use their words, not generic ones.",
      hotspots:[
        {x:0.70,y:0.13,label:"Rain Coverage",photo:IMAGES.reasonRain,content:"Usable even while it rains — great for BBQing or relaxing outside. Not recommended to leave retracted unattended in Colorado, since rain often brings hail."},
        {x:0.48,y:0.34,label:"Temperature Control",photo:IMAGES.reasonThermometer,content:"Keeps the area at least 20 degrees cooler — turns a 90 degree day into a cool 70."},
        {x:0.48,y:0.70,label:"Protects What's Inside",photo:IMAGES.reasonUvWood,content:"Adds protection for your flooring and furniture, helping prevent fading from the sun's UV rays."},
        {x:0.80,y:0.60,label:"Skin Health",photo:IMAGES.badgeSkinCancer,content:"Recommended by the Skin Cancer Foundation as effective UVA/UVB protection."}
      ]
    },
    {
      id:"scrub", type:"videoscrub",
      frameBase:"images/awning-frames/frame-", frameCount:32, framePad:2, frameExt:".jpg",
      hint:"Drag to project the awning in & out",
      title:"See it in action",
      script:"We like to explain how it works like the human body —\n\nShoulders = the mounting structure, anchored into your home. Elbows = the arm pivots that carry everything out. Wrists = what keeps the fabric taut as it extends.\n\nThat's what lets it extend out strong and hold the fabric tight.\n\nGo ahead and drag the slider — you can run the awning all the way out and back in, and watch exactly how it projects over the space.",
      talkingPoints:["Drag the slider to project the awning in & out — real footage of this exact unit","Human body: shoulders = mount, elbows = pivots, wrists = tension","Hand them the iPad and let them drive it themselves — it lands better than any diagram"],
      coach:"This is real video of a Sunesta extending, scrubbed by the slider. Let the customer drag it. Keep it accessible — no engineering talk. Crossarms explainer is still coming from Matt; don't improvise engineering answers until it lands."
    },
    {
      id:"models", type:"models",
      title:"Custom Made For You — THE MONEY SLIDE",
      script:"So we've got three models — Sunlight, Sunstyle, and Sunesta.\n\nThe Sunlight is more of an industry standard — comparable to a lot of our competitors — and something we rarely install. Out here it's typically choosing between our flagship, the Sunesta, and the Sunstyle. 90% of our projects are the Sunesta — unless the site is better suited for the Sunstyle, it's what we recommend. Here's why.\n\n(Hand them the arm sample) Go ahead and feel that — solid extruded aluminum, engineered to hold. Inside each arm are four PVC-coated steel cables — they will not rust. A lot of competitors run a bicycle-chain system inside their arms; out here with the elements, those corrode over time and you end up with an awning that doesn't function. Not something you'll deal with here.\n\nIt handles 30 mph winds day-to-day and it's been tested to 98 mph before failure. And it takes a strong arm to project out to nearly 15 feet.\n\nWarranty — straight from the official Sunesta warranty: lifetime on the frame and on the Sunesta's arms. Fabric and motor are ten years, and in practice the fabric lasts 15–20+ years. The Sunstyle is a solid product too — its arms carry a 15-year warranty instead of lifetime. And the whole warranty transfers to the next homeowner.\n\nTHE SMART CASE — something we include as standard that a lot of competitors skip. A lot of awnings are installed with little to no protection, so the fabric sits exposed year-round and gets torn up after a few years — we call it the 'string cheese' effect. You've maybe seen it around town, or off the side of RVs. The Smart Case fully encloses the fabric when it's retracted — rain, snow, UV, hail, pine needles — none of it sits on your fabric. That's why we see fabrics lasting 15 to 20-plus years.\n\n👉 Educate — care: \"If it gets wet, let it dry before you retract it — moisture closed up in the case for a long stretch can grow mildew. Fortunately in Colorado it dries out fast. Cleaning is easy too: hose it down, let it dry, roll it in.\"\n\nPITCH ADJUSTMENT — the arms adjust in pitch, and we offer free lifetime adjustments. After install, if you want more head clearance or more coverage, we come back out and dial it in — no charge. Rule of thumb: about an inch of drop per foot of projection, and keep at least a foot and a half of clearance over your tallest family member.\n\n⚠️ UNVERIFIED — confirm before repeating to a customer: the spec sheet rates the arm CABLES at 80,000 movements of working life (that's roughly 10 open/closes a day for 20 years). Jack is confirming the right attribution with Sunesta — keep it out of customer conversations until then.",
      talkingPoints:["Lead with the flagship — 90% choose the Sunesta","Arm sample + cable story: PVC-coated steel, no bicycle chains","Warranty per the 2026 doc: lifetime frame & Sunesta arms · Sunstyle arms 15-yr · fabric & motor 10-yr · transferable","Smart Case = standard; tell the 'string cheese' story","Care: let it dry before retracting · hose-down cleaning","Free lifetime pitch adjustments — inch of drop per foot of projection"],
      coach:"THIS IS YOUR MONEY SLIDE. Slow down. Build the value. ⚠️ Careful with the spring-loaded arm sample — it can fly open and whack someone in the face. Control it, then hand it over.",
      models:[
        {name:"Sunesta",spec:"Recommended · 90% of sales",projection:"Projection up to 14'8\"",width:"Widths up to 40' — made to the inch"},
        {name:"Sunstyle",spec:"Comparison only",projection:"Projection up to 11'6\"",width:"Widths up to 40' — made to the inch"},
        {name:"Sunlight",spec:"Rarely recommended",projection:"Projection up to 10'",width:"Widths up to 24' — made to the inch"}
      ],
      gallery:[
        {img:IMAGES.optFabric,label:"Fabric on the extruded arm"},
        {img:IMAGES.optArm,label:"Full arm mechanism"},
        {img:IMAGES.optMountWide,label:"Mounting hardware"},
        {img:IMAGES.optMountClose,label:"Mounting hardware — close"},
        {img:IMAGES.optDropScreen,label:"Drop screen installed"},
        {native:"warranty",label:"Nation's best warranty coverage"}
      ],
      comparison:{
        columns:[
          {name:"Sunesta",sub:"Installed by ATH",badge:"★ OUR PICK"},
          {name:"Liberty Home Products",sub:"Denver, CO Installer"},
          {name:"SunSetter",sub:"National Retail / DIY"}
        ],
        rows:[
          {label:"Frame Warranty",cells:[{s:"check",t:"Lifetime"},{s:"warn",t:"Lifetime*"},{s:"x",t:"Limited / 1–3 Yr"}]},
          {label:"Arm Warranty",cells:[{s:"check",t:"Lifetime"},{s:"warn",t:"10 Years"},{s:"x",t:"3–5 Years"}]},
          {label:"Transferable to New Owner?",cells:[{s:"check",t:"Yes — adds resale value"},{s:"x",t:"No"},{s:"x",t:"No"}]},
          {label:"Wind Rating",cells:[{s:"check",t:"Defined & tested"},{s:"x",t:"Not defined"},{s:"x",t:"Not defined"}]},
          {label:"Sizing",cells:[{s:"check",t:"Custom — built to your home"},{s:"warn",t:"Limited options"},{s:"x",t:"Pre-built / stock sizes"}]},
          {label:"Service Calls",cells:[{s:"check",t:"Free — local ATH team"},{s:"x",t:"Paid — drive from Denver"},{s:"x",t:"800 number only"}]},
          {label:"1-Year Service Visit",cells:[{s:"check",t:"Included"},{s:"x",t:"Not offered"},{s:"x",t:"Not offered"}]}
        ],
        footer:"Liberty's lifetime frame warranty is non-prorated and non-transferable. Wind ratings not defined. Always request the full written warranty before comparing."
      }
    },
    {
      id:"dropscreen", type:"splittext", image: IMAGES.optDropScreen,
      title:"Drop Screen — Block the Low Sun",
      bullets:["A vertical panel drops from the front bar — down when you want it, gone when you don't","Blocks the low-angle morning and evening sun the awning can't reach","Adds privacy and cuts wind along the open front edge","Manual or motorized — operates independently of the awning","Available on the Sunesta & Sunstyle (not the Sunlight)","Add it now or later — the system is designed for both","Choose a lighter mesh to keep your view, or solid for full shade"],
      script:"The drop screen — Sunesta calls it the SmartDrop — is a panel that hangs from the front of the awning when you want it, and rolls away when you don't. It's great for that low-angle sun the awning itself doesn't block, for extra wind reduction, or for a little privacy along the open front.\n\nA question we get a lot: if both the awning and the drop screen are motorized, do they work together? They operate independently — you choose when each one goes up or down. The one habit to build is rolling the drop screen up before you retract the awning, so it doesn't drag on the deck.\n\nYou can add this now or come back and add it later — the system is designed for it either way. We'll show you both in the pricing.\n\n👉 Rep guidance — pricing (value first, never lead with this): the drop-screen motor adds a little over $1,000, so most folks choose the manual — the screen is much lighter than the awning itself. It can be added later, but a retrofit costs a bit more since we swap parts and add the motor. It's available on both models you'll be pricing (not the Sunlight).\n\n👉 If low sun or privacy is on their Accomplish List, build the value here — for them it's essential, not an accessory.",
      talkingPoints:["Blocks low-angle sun, adds privacy, cuts wind at the front edge","Manual or motorized — operates independently of the awning","Roll the screen UP before retracting the awning","Motor ≈ $1,000+ — most choose manual; retrofit costs more (rep guidance, not a slide line)","Available on Sunesta & Sunstyle — not the Sunlight","Lighter mesh keeps the view; solid gives full shade"],
      coach:"If they mentioned evening/morning glare or privacy, tie straight back to it. Matt still owes full selling points/warranty details for the screen — flagged, don't improvise them. Photo is a placeholder — real drop-screen export coming."
    },
    {
      id:"fabrics", type:"splittext", image: IMAGES.fabricSwatches,
      title:"Fabrics & Frame Colors",
      bullets:["100+ colorfast fabrics — solids and stripes","100% solution-dyed acrylic — the color runs through the fiber, not printed on","Antimicrobial & water-resistant — resists fading, mold and mildew","Endorsed by The Skin Cancer Foundation for blocking UV","Sewn with PTFE GORE TENARA thread — won't rot or break down in the sun","Armorcoated frames in white, beige, clay, black & brown"],
      script:"This is where it gets fun — you've got over a hundred fabric choices, solids and stripes, so we can match or complement your home.\n\nThe fabric is a 100% solution-dyed acrylic — that means the color runs all the way through the fiber instead of being printed on top, so it holds its color for the long haul. Compare that to vinyl: acrylic is more fibrous, it breathes, it's water-resistant, and it's antimicrobial — it resists fading, mold, and mildew.\n\nIt's also endorsed by the Skin Cancer Foundation for blocking harmful UV — which matters a lot at our elevation. With the Smart Case protecting it, we see these fabrics lasting 20-plus years. Even the thread is special — it's Tenara, which won't break down in the sun the way standard thread does.\n\nAnd the frame itself comes in five colors — white, beige, clay, black, and brown — so the whole system looks like it belongs on your home.",
      talkingPoints:["100+ fabrics — hand them the swatch book here","Solution-dyed acrylic vs. vinyl: color through the fiber, breathable, antimicrobial","Resists fading, mold & mildew · water-resistant","Skin Cancer Foundation endorsed — elevation UV angle","20+ year fabric life with the Smart Case","Frame in 5 colors: white, beige, clay, black, brown"],
      coach:"Hand them the fabric samples and tie color choice to their home's exterior. The swatch graphic is illustrative — the real fabric book is the prop that sells this slide."
    }
  ],
  "SMART TECHNOLOGY": [
    {
      id:"smarttitle", type:"herosplit", image: IMAGES.smartTechIllus,
      title:"Smart Technology",
      subtext:"Somfy-powered control — remote, wall switch, app, or full home automation. And wind protection comes standard on every motorized unit.",
      script:"A few optional upgrades — totally based on preference. The system runs on a Somfy motor. Standard operation is a handheld remote or a wireless wall switch. If you want to go further, you can control it through an app or integrate it into a home automation system.\n\nOne thing that's not optional with us: every motorized awning we install includes a wind sensor as a standard feature. I'll show you that in a second.",
      talkingPoints:["Upgrades are optional and addable later — don't oversell","Wind sensor is STANDARD on every motorized unit, not an add-on","Don't feel like you have to decide on all of it right now"],
      coach:"Rebuilt as a native layout — the old slide was a screenshot with its title baked in."
    },
    {
      id:"mylink", type:"splittext", image: IMAGES.mylinkApp,
      title:"myLink — Your Awning on Your Phone",
      bullets:["Connects your Somfy motor to Wi-Fi with the myLink hub","Open, close, and dim your lights from the Somfy app — from anywhere","Set schedules and scenes — auto-extend on hot afternoons","Works with Amazon Alexa and Google Assistant","One hub controls the awning, drop screen, and LED lights together","Optional and addable anytime — no rewiring"],
      script:"If you want to go a step beyond the remote, this is where it gets modern. The myLink hub connects your awning to your home Wi-Fi, and now you can run everything from the Somfy app on your phone — from anywhere.\n\nYou can put it on a schedule so it extends on its own on those hot afternoons, or tie it into Alexa or Google if that's how your home already works. One hub can run the awning, the drop screen, and the LED lights together.\n\nThis is completely optional and you can add it anytime — I just want you to know the ceiling on what this system can do.",
      talkingPoints:["myLink hub = control from your phone, anywhere","Schedules & scenes (auto-extend on hot afternoons)","Works with Alexa & Google","One hub runs awning + drop screen + lights","Optional, addable anytime — don't oversell"],
      coach:"Keep this light and preference-based. It's a 'nice to know the ceiling' slide, not a push. App screen is an illustration placeholder."
    },
    {
      id:"sensors", type:"reasonsphoto", image: IMAGES.sensorsIllus,
      title:"Automatic Sensors — Wind, Rain, Sun",
      script:"Here's the peace-of-mind slide — and it starts with something that's standard with us, not an add-on.\n\nEvery motorized awning we install comes with a wind sensor as a standard feature. If you step out, forget the awning's extended, and one of our Colorado afternoon storms blows through — it retracts automatically. You don't have to be home. You don't have to babysit it. We've had customers tell us it paid for itself the first summer.\n\nThe rain and sun sensors are optional add-ons. The rain sensor retracts the fabric when a sudden downpour moves in, and the sun sensor can extend the awning on its own when direct sun hits — so the space is already shaded before you even walk outside.\n\n⚠️ UNVERIFIED — confirm before repeating to a customer: the wind sensor may actually be a motion sensor that needs ~5–7 seconds of sustained movement to trigger (so a single gust doesn't cycle it). Jack is confirming with Sunesta.",
      talkingPoints:["Wind sensor: STANDARD on every motorized unit — lead with it","Rain & sun sensors: optional add-ons","Colorado afternoon storms + travel = the emotional hook","'You don't have to babysit it'","Tap each pill to reveal the sensor"],
      coach:"Risk-removal close — tie the wind sensor to their travel or busy schedule. Rebuilt as a native layout; the old slide was a screenshot with leftover LED-lights text baked in.",
      hotspots:[
        {x:0.52,y:0.178,label:"Wind — Standard",content:"Included as a standard feature on every motorized awning we install. Retracts the awning automatically when wind picks up — whether you're home or not."},
        {x:0.52,y:0.50,label:"Rain",content:"Optional — retracts the fabric automatically when a sudden downpour moves in, so it isn't left out wet."},
        {x:0.52,y:0.822,label:"Sun",content:"Optional — extends the awning automatically once direct sun is detected. The space is shaded before you step outside."}
      ]
    },
    {
      id:"led", type:"herosplit", image: IMAGES.ledNight,
      title:"LED Lighting — Enjoy the Space After Dark",
      subtext:"Our most popular add-on. Dimmable, one remote with the awning — under-arm task lighting or top-mounted underglow, the crowd favorite.",
      script:"This is actually our most popular add-on — LED lighting.\n\nIt completely changes the space at night — soft ambiance for dinner on the patio, or full brightness for an evening gathering. It's all dimmable, and it's the same remote that's already in your hand for the awning.\n\nWe can place the lights under the arms for functional task lighting, or on top of the arms for an underglow effect — that's our more popular option. It's integrated into the awning, not a clip-on afterthought. They can be added later too, but it typically costs a little more because it requires a return trip.\n\nThe number of customers who add this and then tell us 'I can't imagine not having it' — it's most of them. Just something to consider.\n\nAnd one more thing — with all of our awnings, we include a free one-year service. Let me show you what that covers.\n\n[Transition] \"Well, thanks for your time on that. Any questions about anything? Our company, products, me — anything at all?\"",
      talkingPoints:["Most popular add-on — lifestyle close","Under-arm = task light · top-of-arm = underglow (most popular)","Dimmable, one remote with the awning","Add-later possible but costs more (return trip) — rep guidance","Segue: free one-year service → next slide","End with the open question — company, products, me, anything"],
      coach:"Paint the evening picture — dinner, a glass of wine, the game. Night scene is an illustration placeholder, swap for a real lit-awning shot."
    },
    {
      id:"service", type:"splittext", image: IMAGES.serviceBadge,
      title:"Your First Year of Service — On Us",
      bullets:["Included free with every awning we install","Cleaning + full inspection at the one-year mark","Remote battery replacement","Pitch & tension adjustments as needed","Additional service packages available beyond year one"],
      script:"With every awning we install, your first year of service is on us.\n\nAround the one-year mark we come back out, clean the unit, replace the remote battery, check the pitch and tension against how you're actually using the space, and make any adjustments — no charge. It's on our comparison chart for a reason: nobody else in our market offers it.\n\nAnd if you want to keep that going, we have additional service packages available beyond the first year too.",
      talkingPoints:["Free year-one service visit — unique to ATH in our market","Cleaning · battery · pitch & tension adjustments","Callback to the comparison chart row they already saw","Additional packages beyond year one"],
      coach:"DRAFT — built from Matt's outline (cleaning, battery, adjustments). Confirm exact inclusions with Matt before leaning on specifics with a customer."
    },
    {
      id:"process", type:"reasonsgrid", columns:1,
      title:"Our Proven Process",
      reasons:[
        {title:"Your Project Manager", text:"Once the details are finalized, we assign you a project manager who reaches out to identify and manage your needs."},
        {title:"A Clean, Respectful Site", text:"We maintain a clean, respectful, and professional construction site from start to finish."},
        {title:"Half-Day Installation", text:"Install typically takes about half a day. If weather or a complex install pushes past one day, we're typically back the next day to finish as soon as possible."},
        {title:"Final Walk-Through", text:"A quality-assurance walk-through of the project — we check pitch and head clearance against your space to make sure the setup works best for you."},
        {title:"Warranty Activated", text:"We activate and send out your warranty packet — and leave you with a home you're happy with and a relationship with the Around the House team you can count on."}
      ],
      script:"As you move forward with us, here is our proven process that you can rely on.\n\nOnce the details are finalized, we'll assign you a project manager who will reach out to identify and manage your needs.\n\nWe'll maintain a clean, respectful, and professional construction site from start to finish.\n\nInstallation typically takes about half a day. If it happens to take more than one day — weather, or a more complex install — we'll typically come back the following day to ensure your project is completed as soon as possible.\n\nWe'll perform a final walk-through for quality assurance and craftsmanship — we check the pitch and head clearance against your space to make sure the setup works best for you.\n\nAnd at the end of it all, we activate and send out your warranty packet — and leave you with a home you can be happy with, and a relationship with the Around the House team you can count on.",
      talkingPoints:["Read the anchor line, then let the five steps do the talking","Half-day install — sets expectations honestly","Walk-through = pitch + head clearance dialed to THEIR space","Ends on the relationship — this is the last slide of the deck"],
      coach:"Post-sale confidence builder. If they had a bad contractor experience before, this is where you address it — the industry is notorious for communication complaints; we're the opposite."
    }
  ]
};

// ── Training Mode reference library ─────────────────────────────────────────
// Rep-facing only. Rendered in the Training Mode side panel (never on slides).
// Edit freely — same rule as the deck: content lives here, engine in app.js.
const TRAINING_REFERENCE = {

  doDont: {
    dont: [
      "Don't read slides — know the slides",
      "Don't info dump",
      "Don't skip tying back to their goals"
    ],
    do: [
      "Always relate back to THEIR situation",
      "Slow down at the money slide (Models) — that's the whole game",
      "Build emotion → then logic → then close"
    ],
    fourSales: {
      intro: "Per the ATH / Profectus framework — the customer needs to be sold on all four before they commit:",
      items: [
        "Do the project — they believe the problem is worth solving",
        "Do it right — they believe the quality justifies the investment",
        "Do it with ATH — they trust you and the company",
        "Do it now — they have a reason to move forward today"
      ],
      footer: "If you lose the sale, trace it back to which of these four was not fully closed. That is your gap."
    }
  },

  faqs: [
    {tag:"FAQ", q:"Do you all offer any financing?",
     a:"Yes, absolutely. We have some great options available. Unlike credit cards with yearly fees and interest rates as high as 29%, we work with home-improvement lenders. There's no prepayment penalty, and everything extra you pay goes directly toward the principal. We have low monthly budget plans with rates as low as 10.99%, or a 12-month no-interest / same-as-cash option. These are popular either way you go because there's no money down, and the first payment isn't due until after the installation is complete.\n\nWe can look into getting you pre-approved with no impact on your credit score. Is that something you'd be interested in?"},
    {tag:"FAQ", q:"Will you all be doing this work or do you use subcontractors?",
     a:"Yes! We work with subcontractor partners. We train with them, critique, and perform final inspections. They work for us and only us. All of our partners install to the specifications required by the manufacturers and are trained directly as well. Around the House manages and warranties the work, and will perform a final walk-through to ensure quality and satisfaction."},
    {tag:"Objection", q:"\"We want to think about it.\"",
     a:"What it usually means: something is unresolved — price, value, trust, or a missing decision-maker.\n\n\"Totally fair — help me understand where you're at. On a scale of 1 to 10, how close does this feel to being the right move?\"\n\n(If 7 or above — find what's holding them back and address it directly.)\n(If below 7 — something bigger is unresolved. Deeper escalation scripts are pending the official Profectus material.)"},
    {tag:"Objection", q:"\"We want to get another quote.\"",
     a:"\"Completely reasonable — I'd do the same thing. When you're comparing, a few things worth checking: What cassette system are they using? What is the warranty — is it one warranty or multiple? And do they use a steel cable or a chain system inside the arms? Those three things tell you a lot about what you're actually buying.\""},
    {tag:"Objection", q:"\"It's more than we expected to spend.\"",
     a:"\"I hear you — let's look at this together. Of everything we've walked through, what feels most important to keep and what could we potentially revisit? We can always right-size this so it fits where you're at.\"\n\n👉 Remove items the homeowner chooses to remove — do not discount blindly."},
    {tag:"Objection", q:"\"We need to talk to our spouse / partner.\"",
     a:"\"Of course. Is there anything you feel like we haven't covered that would help them understand the value when you talk it through? And is there any chance we could get them on a quick call so I can answer any questions directly?\""},
    {tag:"Objection", q:"\"We're thinking about doing a pergola instead.\"",
     a:"\"That makes sense — and honestly, the two work really well together. A lot of our customers end up doing an awning first and adding a pergola later, or vice versa. We actually do both. If you want, I can show you how that could look combined.\""},
    {tag:"Objection", q:"\"I'm worried about the wind.\"",
     a:"\"Great question — and it's one of the most common things we hear in Colorado. The arms are tested to 98 miles per hour before they break. The system is 30 mph wind rated for continuous operation. And the wind sensor — which comes standard on every motorized unit we install — retracts it automatically before conditions get serious. Wind is actually one of the reasons we recommend the Sunesta over the lighter models.\""},
    {tag:"Objection", q:"\"Will it block our view?\"",
     a:"\"It actually won't — and that's one of the things people are always pleasantly surprised by. The awning shades the space from above without blocking your sightline outward. And if you add a drop screen, you can choose a lighter mesh that blocks the sun glare while still letting you see through it.\""},
    {tag:"Objection", q:"\"What if it hails or storms?\"",
     a:"\"Really windy — retract it. Rain — it's designed for it, just let it dry before storing for extended periods. Hail — if a significant storm is coming, retract it. The Smart Case protects the fabric when it's retracted, and the valance is inexpensive to replace if it ever takes a hit. For catastrophic weather events, that's typically a homeowners-insurance conversation.\""},
    {tag:"Objection", q:"\"We might wait until next season.\"",
     a:"\"Totally your call — and I want to be straight with you. We're typically three to five weeks out right now. As we get into the busy season, that stretches to eight to ten weeks and pricing often adjusts. If you're going to do this, sooner is usually better just from a logistics standpoint. But I'll never pressure you — whenever it's right for you is the right time.\""}
  ],

  close: {
    note: "Rep-facing only — this is spoken over the live estimate. Per Jack: no customer-facing pricing slides.",
    sections: [
      {title:"🔥 Laying Off Pricing (Confident & Excited)",
       body:"\"Are you all excited?\" (Get the homeowner to laugh or smile — you can even ask for a drum roll if the rapport is there.)\n\n\"So based on everything we talked about — and your goals of…\"\n👉 (repeat their Accomplish List — their words)\n\"…this is what I put together for you.\"\n\nBuild value as you present: \"These numbers include installing your new ______ with a ______ warranty.\" (If applicable) \"We will pull all necessary permits.\" \"We're ____ to ____ weeks out for installation, and your project is typically completed in about half a day. Most importantly — you'll get to enjoy your outdoor space year-round with all the features we covered.\"\n\n(Review Estimate)\n\nRebuild value and any real urgency during the estimate recap, then:\n\"Which option works best for you all?\""},
      {title:"💰 Price Presentation Frame (Profectus)",
       body:"Tie to the list FIRST: \"This option is designed to give you everything you said you wanted…\"\n\nThen show options:\n• Option 1 = Ideal — the full solution\n• Option 2 = Rightsized — never presented first, and built by removing what THEY choose to remove, not by discounting"},
      {title:"🔥 Rebuild Excitement + The One-Year Price",
       body:"\"And the good news is — you actually caught us at a great time…\"\n👉 Insert promo naturally — never lead with it.\n\nIndifference is key — avoid the homeowner sensing 'commission breath,' like you're only there to sell them.\n\nSelling the one-year price:\n\"This price is good for the next year, which is great. You can call me tomorrow, six months from now, 364 days from now — this price is locked in for you. It's very competitive with what you'll find in our industry.\""},
      {title:"🧠 Micro-Close",
       body:"\"Does this all make sense so far?\"\n\n👉 Stop talking. Wait. Do not fill the silence.\n\n\"Any questions about the one-year prices?\"\n\nIf yes and engaged — move to close. If they hesitate — something is unresolved. Find it before you ask for the decision."},
      {title:"🟢 Close Transition",
       body:"\"So between the two options we've narrowed down together, which stands out as an initial preference?\"\n\n*90% of customers: \"For the difference in cost between the Sunesta and Sunstyle, we'd rather have the stronger awning.\"\n*10% of customers: \"Whatever is cheapest is good for us — we don't plan to be out there when it's windy.\"\n\n👉 NOT: \"What do you think?\" · \"Any questions?\"\nThe close is a preference question, not a yes/no."}
    ]
  },

  preDemo: {
    intro: "Before the deck — recap at the table and confirm understanding of the offer (the awning vs. their outdoor space and logistics).",
    body: "\"Before I show you the product — how long have you guys been in the home?\" (Or: \"You said you've been in the home X years, is that right?\")\n\n\"And this space here… is this where you spend most of your time outside?\"\n\n\"Is this something you've been thinking about for a while?\"\n\n👉 Tie back to the Accomplish List (subtle reminder): \"Perfect — so really making this usable, cooler, and protected is the goal.\"\n\nMEASUREMENT RECAP: \"To recap what we looked at outside — I measured X feet in width to cover the desired space, with an X projection away from the home. When we factor in some pitch, that places the end of your new awning near the end of the deck. During installation our technicians will work with you to dial in pitch versus head clearance.\"\n\nCABLE MANAGEMENT: \"These awnings require 110v power, so we'll plan to plug into this outlet here. The cords are outdoor-rated and typically stay plugged in year-round. They come in X and X colors, but we can also paint them to match your siding or stucco if you have paint available. We typically run the wiring as discreetly as possible down your window or door trim.\"\n\n\"Do you have a preference on painting the cord versus the cord color options?\"\n\nSUN ORIENTATION: \"Based on your orientation versus the sun (reference Lumos photos if possible), this will provide great coverage from X to X hours and make this space much more usable and cooler throughout the year.\"\n\nDROP SCREEN (if it's essential for them): explain why and build value here. You can add it later with both models you'll be priced on (not available on the Sunlight).\n\n\"Based on what I went over, do you feel this is the right option for you and your home?\"\n\n👉 GET A YES!!!!!! If it's a no, a maybe, or anything short of a yes — ask more questions, uncover the objection, and handle it during the presentation."
  }
};


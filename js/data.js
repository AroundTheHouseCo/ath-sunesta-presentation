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
      bullets:["Founded by Kirt & Vicki, now led with sons Maxx & Jack","Midwest values: honesty, craftsmanship, follow-through","Exclusive Sunesta dealer for Southern Colorado","In-home design, installation, and service — all local"],
      script:"So just a little bit on who we are before we get into the product — because who you buy from matters just as much as what you buy.\n\nWe were founded by Kirt and Vicki, and today the business is run together with their sons, Maxx and Jack. We're built on Midwest values — honesty, craftsmanship, and follow-through.\n\nWe're the exclusive Sunesta dealer for Southern Colorado, and everything — design, installation, service — is handled locally, by us. Real homes. Real installs. Long-term support. You call us, you get us.",
      talkingPoints:["Founded by Kirt & Vicki, now led with sons Maxx & Jack","Midwest values: honesty, craftsmanship, follow-through","Exclusive Sunesta dealer for Southern Colorado","In-home design, installation, and service — all local"],
      coach:"Keep this warm and personal. Don't sound like a commercial. Bullet text on this slide is fully editable — update anytime."
    },
    {
      id:"training", type:"splittext", image: IMAGES.trainingPhoto, cert: IMAGES.trainingCert,
      title:"Sunesta Factory Training",
      bullets:["Manufacturer-Trained Installers","Insured & Exclusive","Product Knowledge Experts"],
      script:"This is something that actually matters a lot more than most people realize.\n\nAll of our installers work for us, and only for us. They're not subcontractors. They're trained not only by our team, but directly by Sunesta down in Jacksonville, Florida.\n\nThat's really important — a lot of our competitors treat awnings as a secondary product. They don't install many per year, so they're out at your home kind of guessing. With us, we're a 'do it right the first time' company. We go beyond what the manufacturer requires on mounting points, and when we're done, the wiring is run properly and the conduit is painted to match your home.",
      talkingPoints:["Manufacturer-trained installers, not subcontractors","Beyond-code mounting points","Clean finish — conduit painted to match"],
      coach:"Slight pause after the competitor comment. Let it land. Photo and certificate are placeholders — real resolution coming."
    },
    {
      id:"award", type:"herosplit", image: IMAGES.award,
      title:"Sunesta National Dealer of the Year — 2025",
      subtext:"Recognized for #1 Sunesta Awning Dealer in the Western United States in 2025",
      script:"One more thing before I show you the product itself — we were just named Sunesta's National Dealer of the Year for 2025.\n\nThat's not a local award, that's across every Sunesta dealer in the country. It matters here for a simple reason — it's not us saying we're good at this, it's the manufacturer saying it, based on installs, service, and how we take care of customers after the sale.\n\nSo everything I'm about to walk you through isn't just a good product — it's a good product installed by the team the manufacturer itself recognizes as the best at it.",
      talkingPoints:["National award — not local/regional","Third-party validation from the manufacturer, not self-proclaimed","Ties directly to install quality + after-sale service, not just sales volume"],
      coach:"Say this with quiet confidence, not a brag. Let the fact do the work."
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
        {style:"plain", icon:IMAGES.iconFlag, label:"American Made", sublabel:"MADE IN AMERICA"}
      ],
      script:"Sunesta has been around for over 40 years. This isn't a new product or a startup — it's tried and tested in all different climates and regions across the country.\n\nEverything is made right here in the United States — the arms, the fabric, the frame components — except for the motor, which is hand assembled in Spain. That motor is Somfy — the most trusted motor brand in the world for this type of system.",
      talkingPoints:["40+ years in business","American made, except the Somfy motor (Spain)","Multi-channel remote controls awning + LED lights"],
      coach:"Icons are placeholder crops for now — title, paragraph, and all three row labels are fully editable text."
    },
    {
      id:"badges", type:"credibility",
      title:"Experience the Sunesta Difference",
      paragraph:"To this day, industry-leading customization can still be found within every Sunesta awning.",
      rows:[
        {icon:IMAGES.badgeMiamiDade, label:"Miami Dade (NOA #24-0401.03)", detail:"Sunesta is the first retractable awning manufacturer to exceed Miami-Dade's strict standards."},
        {icon:IMAGES.badgeBBB, label:"Better Business Bureau", detail:"A+ rated with the Better Business Bureau — accredited, verified, and locally accountable."},
        {icon:IMAGES.badgeSkinCancer, label:"Skin Cancer Foundation", detail:"Our awning fabric is endorsed by The Skin Cancer Foundation for its efficacy in blocking harmful UV rays."},
        {icon:null, label:"Around The House Home Solutions", sublabel:"4.9 ★★★★★ Google reviews", link:"https://share.google/00IDfj15biWj76ERJ"}
      ],
      script:"The product is actually tested in Miami-Dade County — that's a certified hurricane zone. We bring that up because we deal with some serious wind here in Colorado as well.\n\nWe're A-plus rated with the Better Business Bureau, and we have over 200 Google reviews at 4.9 stars — local, real Colorado homeowners. We're also partnered with the Skin Cancer Foundation. At elevation here in Colorado, UV exposure is significantly higher than people expect.",
      talkingPoints:["Miami-Dade tested — 98 mph before arm failure","A+ BBB rating, 4.9★ local Google reviews","Skin Cancer Foundation partnership","Tap any badge for detail — tap the Google reviews row to open real reviews"],
      coach:"Icons are placeholder crops for now. The Google reviews row links out to the real ATH review page."
    },
    {
      id:"triangle", type:"triangle",
      title:"Sunesta Triangle of Strength",
      subtext:"National brand. Local service. One warranty that travels with your home.",
      script:"👉 Kill competitors cleanly\n\n\"Sunesta is a national brand — so yes, we're your local company… but you also have a national warranty backing you.\"\n\n\"A lot of other companies piece together parts from a bunch of different manufacturers — we call those Frankenstein awnings (Get a laugh). When that company goes out of business, your warranty typically goes with them so it's nice knowing a national brand has you covered.\"\n\nYour new awning comes with a unique QR Code which contains all the important data about your awning including product type, measurements, fabric information, which makes the warranty process simple and efficient.\n\nThe warranty is fully transferable as well to the next homeowner so adds some good value to the project and home.\n\nTransition/Engagement question: Any questions about the warranties?\n\n👉 Light humor → builds contrast",
      talkingPoints:["National brand = local install/service + national warranty backing","Avoid \u2018Frankenstein awnings\u2019 — get a laugh, then let it land","Unique QR code has full product/warranty data on file","Warranty is fully transferable to next homeowner — adds resale value","Transition question: \u201cAny questions about the warranties?\u201d"],
      coach:"Get the laugh on 'Frankenstein awnings,' then go serious for the QR code and transferability. Tap any node in the triangle for more detail.",
      nodes:[
        {id:"ath", kind:"logo-ath", title:"Around The House", detail:"Your local team — design, installation, and service all handled by us, right here. National brand backing, local accountability.", photo:null},
        {id:"sunesta", kind:"logo", title:"Sunesta", detail:"The manufacturer itself — designed, engineered, and warrantied by one company. Not an assembly of parts from five different suppliers.", photo:null},
        {id:"gibraltar", kind:"text", title:"Gibraltar", detail:"Sunesta's parent financial backing — Gibraltar Industries — is what makes the nation's-best warranty coverage possible and dependable over the long run.", photo:null}
      ]
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
        {x:0.50,y:0.40,label:"Temperature Control",content:"Keeps the area at least 20 degrees cooler — turns a 90 degree day into a cool 70."},
        {x:0.50,y:0.70,label:"Protects What's Inside",content:"Adds protection for your flooring and furniture, helping prevent fading."},
        {x:0.78,y:0.16,label:"Rain Coverage",content:"Usable even while it rains — great for BBQing or relaxing outside. Not recommended to leave retracted unattended in Colorado, since rain often brings hail."},
        {x:0.22,y:0.88,label:"Skin Health",content:"Recommended by the Skin Cancer Foundation as effective UVA/UVB protection."}
      ]
    },
    {
      id:"perfectday", type:"static", image: IMAGES.slide9,
      title:"Sunesta allows you to create the perfect day",
      script:"For you, it sounds like the main things are... (reference their specific Accomplish List items in their own words)\n\nDoes that feel right? Did I miss anything?\n\nPerfect. So everything I'm about to show you is designed specifically around those goals.",
      talkingPoints:["The most important transition in the whole presentation","Wait for confirmation before moving on — do not skip this"]
    },
    {
      id:"slider", type:"slider", before: IMAGES.beachBefore, after: IMAGES.beachAfter,
      title:"See it in action",
      script:"Think of it like the human body — shoulders, elbows, wrists — designed to extend strong, stay flat, and hold in wind.\n\n(pause, light smile) Unfortunately, it doesn't come with the beach. But your view is probably better anyway.",
      talkingPoints:["Drag the handle to reveal the awning extending","Humor line breaks tension before pricing — use it"],
      coach:"Per Jack: the human-body anatomy diagram is dropped from the script for now, but the slot stays editable if it's added back later."
    },
    {
      id:"models", type:"models", image: IMAGES.models,
      title:"Custom Made For You — THE MONEY SLIDE",
      script:"There are three models — Sunlight, Sunstyle, and Sunesta. The Sunlight — we almost never do, it's just not engineered for our area. For most customers here in Colorado, it comes down to Sunesta versus Sunstyle, and 90% of our projects are the Sunesta.\n\n(Hand them the arm sample) Go ahead and feel that — solid extruded aluminum, engineered to hold, 30 mph wind rated, tested to 98 mph before failure. Lifetime warranty on arms and hardware, 10-year on fabric and motor.\n\nSomething we include as standard that competitors skip — the Smart Case. It fully encloses the fabric when retracted. Rain, snow, UV, hail — none of it sits on your fabric.",
      talkingPoints:["Lead with Sunesta — 90% of customers choose it","Let them feel the arm sample","Sunstyle is comparison only, never the lead"],
      coach:"THIS IS YOUR MONEY SLIDE. Slow down. Build the value.",
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
    }
  ],
  "SMART TECHNOLOGY": [
    {
      id:"smarttitle", type:"static", image: IMAGES.smartTechTitle,
      title:"Smart Technology",
      script:"A few optional upgrades — totally based on preference. The system runs on a Somfy motor. Standard operation is a handheld remote or a wireless wall switch. If you want to go further, you can control it through an app or integrate it into a home automation system.",
      talkingPoints:["All optional and addable later","Don't feel like you have to decide on all of it right now"]
    },
    {
      id:"sensors", type:"hotspot", image: IMAGES.sensors,
      title:"Sensors — Wind, Rain, Sun",
      script:"This is one of our most popular add-ons — the wind sensor. If you step out and a storm blows through, it retracts automatically — you don't have to be home.\n\nThe rain sensor works the same way for sudden downpours, and the sun sensor can extend the awning automatically when direct sun hits, so it's working for you even when you're not thinking about it.",
      talkingPoints:["Wind: retracts automatically at a set threshold","Rain: protects fabric from sudden downpours","Sun: can auto-extend when direct sun hits"],
      hotspots:[
        {x:0.635,y:0.178,label:"Wind",content:"Automatically retracts the awning when wind hits a set threshold — peace of mind when you're not home."},
        {x:0.635,y:0.495,label:"Rain",content:"Protects the fabric automatically when sudden rain moves in."},
        {x:0.635,y:0.817,label:"Sun",content:"Can extend the awning automatically once direct sun is detected."}
      ]
    }
  ]
};


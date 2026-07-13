const tabs = Object.keys(DECK);
const FLAT_SLIDES = tabs.flatMap(t => DECK[t]);
function globalSlideNumber(){
  return FLAT_SLIDES.indexOf(currentSlide()) + 1;
}
let activeTab = tabs[0];
let activeIndex = 0;
let mode = "present";
let trainingView = "slide"; // persists across slides so a rep can keep FAQs open while advancing
let activeModel = 0;
let galleryOpen = false, galleryIndex = 0;
let compareOpen = false;
let openHotspot = null;
let lightboxIndex = null;
let triNodeOpen = null;

function currentSlide(){ return DECK[activeTab][activeIndex]; }

function renderTabs(){
  const bar = document.getElementById("tabbar");
  bar.innerHTML = "";
  tabs.forEach(t=>{
    const b = document.createElement("button");
    b.textContent = t;
    if(t===activeTab) b.className="active";
    b.onclick = ()=>{ activeTab=t; activeIndex=0; resetSlideState(); renderAll(); };
    bar.appendChild(b);
  });
}

function resetSlideState(){
  activeModel = 0; galleryOpen=false; compareOpen=false; openHotspot=null; lightboxIndex=null; triNodeOpen=null;
}

function renderDots(){
  const dots = document.getElementById("dots");
  dots.innerHTML="";
  DECK[activeTab].forEach((s,i)=>{
    const d = document.createElement("span");
    if(i===activeIndex) d.className="active";
    dots.appendChild(d);
  });
  document.getElementById("count").textContent = (activeIndex+1)+" / "+DECK[activeTab].length;
}

function goNext(){
  const idx = tabs.indexOf(activeTab);
  if(activeIndex < DECK[activeTab].length-1){
    activeIndex++;
  } else if(idx < tabs.length-1){
    activeTab = tabs[idx+1];
    activeIndex = 0;
  } else {
    activeTab = tabs[0];
    activeIndex = 0;
  }
  resetSlideState(); renderAll();
}
function goPrev(){
  const idx = tabs.indexOf(activeTab);
  if(activeIndex > 0){
    activeIndex--;
  } else if(idx > 0){
    activeTab = tabs[idx-1];
    activeIndex = DECK[activeTab].length-1;
  } else {
    activeTab = tabs[tabs.length-1];
    activeIndex = DECK[activeTab].length-1;
  }
  resetSlideState(); renderAll();
}

function addNavZones(area){
  const left = document.createElement("div");
  left.className="navzone left";
  left.onclick=(e)=>{ e.stopPropagation(); goPrev(); };
  area.appendChild(left);
  const right = document.createElement("div");
  right.className="navzone right";
  right.onclick=(e)=>{ e.stopPropagation(); goNext(); };
  area.appendChild(right);
}

function awningSVG(){
  let stripes = "";
  const stripeW = 18;
  for(let i=0;i<9;i++){
    const x = 20 + i*stripeW;
    const color = i%2===0 ? "#1b5e3f" : "#2e7d4f";
    stripes += `<polygon points="${x},95 ${x+stripeW},95 ${x+stripeW-40},20 ${x-40},20" fill="${color}"/>`;
  }
  let scallops = "";
  for(let i=0;i<9;i++){
    const cx = 20 + i*stripeW + stripeW/2 - 40*0.5;
    scallops += `<path d="M ${cx-9} 95 Q ${cx} 108 ${cx+9} 95 Z" fill="${i%2===0?'#1b5e3f':'#2e7d4f'}"/>`;
  }
  return `
  <svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
    <rect x="180" y="8" width="50" height="15" rx="2" fill="#9a9a9a"/>
    <rect x="205" y="20" width="8" height="14" fill="#b5b5b5"/>
    ${stripes}
    ${scallops}
    <line x1="20" y1="95" x2="230" y2="23" stroke="#fff" stroke-width="1" opacity=".25"/>
  </svg>`;
}

function footerBannerHTML(title, centered){
  return `<div class="footer-banner${centered?' footer-centered':''}"><img src="${IMAGES.athLogo}"><div class="footer-title">${title}</div></div>`;
}

function renderSlide(){
  const area = document.getElementById("slideArea");
  area.innerHTML = "";
  const s = currentSlide();

  if(s.type==="videoloop"){
    const panel = document.createElement("div");
    panel.className="videoloop-panel";
    panel.innerHTML = `
      <div class="videoloop-label">Video loop — placeholder</div>
      <div class="videoloop-play"></div>
      <img class="videoloop-logo" src="${IMAGES.sunestaLogo}">
    `;
    area.appendChild(panel);
    addNavZones(area);
  }

  if(s.type==="photogrid"){
    const panel = document.createElement("div");
    panel.className="photogrid-panel";
    const grid = document.createElement("div");
    grid.className="photogrid-grid";
    s.photos.forEach((p,i)=>{
      const cell = document.createElement("div");
      cell.className="photogrid-cell";
      cell.innerHTML = `<img src="${p}"><div class="expand-ring"></div>`;
      cell.onclick=(e)=>{ e.stopPropagation(); lightboxIndex=i; renderSlide(); };
      grid.appendChild(cell);
    });
    panel.appendChild(grid);
    panel.insertAdjacentHTML("beforeend", footerBannerHTML(s.title));
    area.appendChild(panel);
    if(lightboxIndex!==null){
      const lb = document.createElement("div");
      lb.className="lightbox";
      lb.innerHTML = `<button class="lightbox-close">✕</button><img src="${s.photos[lightboxIndex]}">`;
      lb.onclick=(e)=>{ e.stopPropagation(); if(e.target===lb){ lightboxIndex=null; renderSlide(); } };
      lb.querySelector(".lightbox-close").onclick=(e)=>{ e.stopPropagation(); lightboxIndex=null; renderSlide(); };
      area.appendChild(lb);
    }
  }

  if(s.type==="reasonsphoto"){
    const panel = document.createElement("div");
    panel.className="reasons-panel";
    panel.innerHTML = `
      <div class="reasons-left"><h2>${s.title}</h2></div>
      <svg class="reasons-chevron" viewBox="0 0 100 500" preserveAspectRatio="none">
        <polygon points="0,0 55,0 100,250 55,500 0,500 38,250" fill="#2e7d4f"/>
      </svg>
      <div class="reasons-photo"><img src="${s.image}"></div>
    `;
    area.appendChild(panel);
    const photoBox = panel.querySelector(".reasons-photo");
    if(s.hotspots){
      s.hotspots.forEach((h,i)=>{
        const dot = document.createElement("div");
        dot.className="hotspot-pill";
        dot.textContent = h.label;
        dot.style.left=(h.x*100)+"%"; dot.style.top=(h.y*100)+"%";
        dot.onclick=(e)=>{ e.stopPropagation(); openHotspot=i; renderSlide(); };
        photoBox.appendChild(dot);
      });
      if(openHotspot!==null){
        const h = s.hotspots[openHotspot];
        const pop = document.createElement("div");
        pop.className="popover";
        pop.style.zIndex=20;
        pop.innerHTML = `<div class="popover-card"><button class="popover-close">✕</button>${h.photo?`<img class="reason-pop-img" src="${h.photo}">`:""}<h3>${h.label}</h3><p>${h.content}</p></div>`;
        pop.onclick=(e)=>{ e.stopPropagation(); if(e.target===pop){ openHotspot=null; renderSlide(); } };
        pop.querySelector(".popover-close").onclick=(e)=>{ e.stopPropagation(); openHotspot=null; renderSlide(); };
        area.appendChild(pop);
      }
    }
    addNavZones(area);
  }

  if(s.type==="difference"){
    const panel = document.createElement("div");
    panel.className="difference-panel";
    const rowsHTML = s.rows.map(r=>{
      if(r.style==="banner"){
        return `<div class="diff-row banner"><div class="diff-banner"><img src="${r.icon}"><div class="diff-label">${r.label}</div></div></div>`;
      }
      return `<div class="diff-row plain"><div class="diff-logo"><img src="${r.icon}"></div><div><div class="diff-label">${r.label}</div>${r.sublabel?`<div class="diff-sublabel">${r.sublabel}</div>`:""}</div></div>`;
    }).join("");
    panel.innerHTML = `
      <div class="diff-left">${rowsHTML}</div>
      <svg class="diff-chevron" viewBox="0 0 100 500" preserveAspectRatio="none">
        <polygon points="0,0 55,0 100,250 55,500 0,500 38,250" fill="#2e7d4f"/>
      </svg>
      <div class="diff-right">
        <h2>${s.title}</h2>
        <p>${s.paragraph}</p>
      </div>
    `;
    area.appendChild(panel);
    addNavZones(area);
  }

  const GOOGLE_ICON_SVG = `<svg viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>`;

  if(s.type==="credibility"){
    const panel = document.createElement("div");
    panel.className="credibility-panel";
    const rowsHTML = s.rows.map((r,i)=>`
      <div class="cred-row" data-i="${i}">
        <div class="cred-icon-box">${r.icon?`<img src="${r.icon}">`:(r.link?GOOGLE_ICON_SVG:"")}</div>
        <div>
          <div class="cred-label">${r.label}</div>
          ${r.sublabel?`<div class="cred-sublabel">${r.sublabel.replace(/(★+)/,'<span class="stars">$1</span>')}</div>`:""}
        </div>
        <div class="hotspot cred-hotspot"></div>
      </div>`).join("");
    panel.innerHTML = `
      <div class="cred-left">
        <h2>${s.title}</h2>
        <p>${s.paragraph}</p>
      </div>
      <svg class="cred-chevron" viewBox="0 0 100 500" preserveAspectRatio="none">
        <polygon points="0,0 55,0 100,250 55,500 0,500 38,250" fill="#2e7d4f"/>
      </svg>
      <div class="cred-right">${rowsHTML}</div>
    `;
    area.appendChild(panel);
    panel.querySelectorAll(".cred-row").forEach(el=>{
      el.onclick=(e)=>{
        e.stopPropagation();
        const i = parseInt(el.dataset.i);
        const row = s.rows[i];
        if(row.link){ window.open(row.link, "_blank"); return; }
        openHotspot = i; renderSlide();
      };
    });
    if(openHotspot!==null && s.rows[openHotspot] && !s.rows[openHotspot].link){
      const r = s.rows[openHotspot];
      const pop = document.createElement("div");
      pop.className="popover";
      pop.style.zIndex=20;
      pop.innerHTML = `<div class="popover-card"><button class="popover-close">✕</button><h3>${r.label}</h3><p>${r.detail}</p></div>`;
      pop.onclick=(e)=>{ e.stopPropagation(); if(e.target===pop){ openHotspot=null; renderSlide(); } };
      pop.querySelector(".popover-close").onclick=(e)=>{ e.stopPropagation(); openHotspot=null; renderSlide(); };
      area.appendChild(pop);
    }
    addNavZones(area);
  }

  if(s.type==="productcards"){
    const panel = document.createElement("div");
    panel.className="products-panel";
    const cardsHTML = s.rows.map((r,i)=>`
      <div class="pcard" data-i="${i}">
        <div class="pcard-photo">
          <img src="${r.photo}" alt="">
          ${r.icon?`<div class="pcard-icon"><img src="${r.icon}"></div>`:""}
        </div>
        <div class="pcard-body">
          <div class="pcard-name">${r.label}</div>
          ${r.sublabel?`<div class="pcard-sub">${r.sublabel}</div>`:""}
          <div class="pcard-foot">
            ${r.logo?`<img class="pcard-logo" src="${r.logo}" alt="">`:`<span></span>`}
            <span class="pcard-more">Tap for detail ›</span>
          </div>
        </div>
      </div>`).join("");
    panel.innerHTML = `
      <div class="products-head">
        <div class="products-eyebrow">Around The House · Home Solutions</div>
        <h2>${s.title}</h2>
        ${s.paragraph?`<p>${s.paragraph}</p>`:""}
      </div>
      <div class="products-cards">${cardsHTML}</div>
    `;
    area.appendChild(panel);
    panel.querySelectorAll(".pcard").forEach(el=>{
      el.onclick=(e)=>{ e.stopPropagation(); openHotspot=parseInt(el.dataset.i); renderSlide(); };
    });
    if(openHotspot!==null && s.rows[openHotspot]){
      const r = s.rows[openHotspot];
      const pop = document.createElement("div");
      pop.className="popover";
      pop.style.zIndex=20;
      pop.innerHTML = `<div class="popover-card"><button class="popover-close">✕</button>
        ${r.logo?`<img class="popover-logo" src="${r.logo}">`:""}
        <h3>${r.label}</h3><p>${r.detail}</p></div>`;
      pop.onclick=(e)=>{ e.stopPropagation(); if(e.target===pop){ openHotspot=null; renderSlide(); } };
      pop.querySelector(".popover-close").onclick=(e)=>{ e.stopPropagation(); openHotspot=null; renderSlide(); };
      area.appendChild(pop);
    }
    addNavZones(area);
  }

  if(s.type==="triangle"){
    const panel = document.createElement("div");
    panel.className="triangle-panel";
    let bgLines = "";
    for(let i=0;i<14;i++){
      const x = -100 + i*45;
      bgLines += `<line x1="${x}" y1="0" x2="${x+260}" y2="340" stroke="#2e7d4f" stroke-width="${i%3===0?3:1.5}" opacity="${i%3===0?0.10:0.06}"/>`;
    }
    // Equilateral: with preserveAspectRatio="none" the ~590x560 container maps
    // % straight to px, so these give three equal ~354px sides, vertically centered.
    const positions = [
      {top:22.6, left:50},
      {top:77.4, left:20},
      {top:77.4, left:80}
    ];
    panel.innerHTML = `
      <div class="triangle-left"><h2>${s.title}</h2>${s.subtext?`<div class="tri-subtext">${s.subtext}</div>`:""}</div>
      <svg class="tri-page-chevron" viewBox="0 0 100 500" preserveAspectRatio="none">
        <polygon points="0,0 55,0 100,250 55,500 0,500 38,250" fill="#2e7d4f"/>
      </svg>
      <div class="triangle-right">
        <svg class="tri-bg-lines" viewBox="0 0 420 340" preserveAspectRatio="none">${bgLines}</svg>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;z-index:1;">
          <polygon points="50,36.5 31.4,70.5 68.6,70.5" fill="#2e7d4f"/>
          <polygon points="50,38.7 33.3,69.3 66.7,69.3" fill="#245e3f"/>
        </svg>
        <svg class="tri-connect-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="${positions[0].left}" y1="${positions[0].top}" x2="${positions[1].left}" y2="${positions[1].top}" stroke="#2e7d4f" stroke-width="0.6" stroke-dasharray="2,2"/>
          <line x1="${positions[0].left}" y1="${positions[0].top}" x2="${positions[2].left}" y2="${positions[2].top}" stroke="#2e7d4f" stroke-width="0.6" stroke-dasharray="2,2"/>
          <line x1="${positions[1].left}" y1="${positions[1].top}" x2="${positions[2].left}" y2="${positions[2].top}" stroke="#2e7d4f" stroke-width="0.6" stroke-dasharray="2,2"/>
        </svg>
      </div>
    `;
    area.appendChild(panel);
    const right = panel.querySelector(".triangle-right");
    right.style.position="relative";
    s.nodes.forEach((n,i)=>{
      const box = document.createElement("div");
      box.className="tri-node";
      box.style.top=positions[i].top+"%"; box.style.left=positions[i].left+"%"; box.style.transform="translate(-50%,-50%)";
      if(n.kind==="logo"){
        box.innerHTML = `<img src="${IMAGES.sunestaLogo}">`;
      } else if(n.kind==="logo-ath"){
        box.innerHTML = `<img src="${IMAGES.athLogo}">`;
      } else {
        box.classList.add("text-only");
        box.innerHTML = `<div class="gibraltar-logotype">${n.title}</div>`;
      }
      box.onclick=(e)=>{ e.stopPropagation(); triNodeOpen=i; renderSlide(); };
      right.appendChild(box);
    });
    if(triNodeOpen!==null){
      const n = s.nodes[triNodeOpen];
      const pop = document.createElement("div");
      pop.className="popover";
      pop.style.zIndex=20;
      pop.innerHTML = `<div class="popover-card tri-detail-card"><button class="popover-close">✕</button>
        ${n.photo?`<img src="${n.photo}">`:""}
        <h3>${n.title}</h3><p>${n.detail}</p></div>`;
      pop.onclick=(e)=>{ e.stopPropagation(); if(e.target===pop){ triNodeOpen=null; renderSlide(); } };
      pop.querySelector(".popover-close").onclick=(e)=>{ e.stopPropagation(); triNodeOpen=null; renderSlide(); };
      area.appendChild(pop);
    }
    addNavZones(area);
  }

  if(s.type==="splitphoto" || s.type==="splittext"){
    const panel = document.createElement("div");
    panel.className="split-panel";
    const textHTML = s.type==="splitphoto"
      ? `<h2>${s.title}</h2>${s.subtext?`<div class="split-subtext">${s.subtext}</div>`:""}`
      : `<h2>${s.title}</h2><ul class="split-bullets">${s.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>${s.cert?`<img class="split-cert" src="${s.cert}">`:""}`;
    panel.innerHTML = `
      <div class="split-content">
        <div class="split-photo-box"><img src="${s.image}"></div>
        <div class="split-text">${textHTML}</div>
      </div>
      ${footerBannerHTML(s.title, true)}
    `;
    area.appendChild(panel);
    addNavZones(area);
  }

  if(s.type==="herosplit"){
    const panel = document.createElement("div");
    panel.className="hero-panel";
    panel.innerHTML = `
      <div class="hero-content">
        <div class="hero-photo"><img src="${s.image}"><div class="hero-fade"></div></div>
        <div class="hero-text">
          <h2>${s.title}</h2>
          ${s.subtext?`<div class="hero-subtext">${s.subtext}</div>`:""}
        </div>
      </div>
      ${footerBannerHTML(s.title)}
    `;
    area.appendChild(panel);
    addNavZones(area);
  }

  if(s.type==="static" || s.type==="hotspot"){
    const img = document.createElement("img");
    img.className="slide-img"; img.src = s.image;
    area.appendChild(img);
    const cap = document.createElement("div");
    cap.className="slide-caption"; cap.textContent = s.title;
    area.appendChild(cap);
    if(s.hotspots){
      s.hotspots.forEach((h,i)=>{
        const dot = document.createElement("div");
        dot.className="hotspot";
        dot.style.left=(h.x*100)+"%"; dot.style.top=(h.y*100)+"%";
        dot.style.zIndex=10;
        dot.onclick=(e)=>{ e.stopPropagation(); openHotspot=i; renderSlide(); };
        area.appendChild(dot);
      });
      if(openHotspot!==null){
        const h = s.hotspots[openHotspot];
        const pop = document.createElement("div");
        pop.className="popover";
        pop.style.zIndex=20;
        pop.innerHTML = `<div class="popover-card"><button class="popover-close">✕</button>${h.photo?`<img class="reason-pop-img" src="${h.photo}">`:""}<h3>${h.label}</h3><p>${h.content}</p></div>`;
        pop.onclick=(e)=>{ e.stopPropagation(); if(e.target===pop){ openHotspot=null; renderSlide(); } };
        pop.querySelector(".popover-close").onclick=(e)=>{ e.stopPropagation(); openHotspot=null; renderSlide(); };
        area.appendChild(pop);
      }
    }
    addNavZones(area);
  }

  if(s.type==="slider"){
    const wrap = document.createElement("div");
    wrap.className="slider-wrap";
    wrap.innerHTML = `
      <img class="slider-after" src="${s.after}">
      <div class="slider-before" id="sliderBefore" style="width:50%">
        <img src="${s.before}">
      </div>
      <div class="slider-handle" id="sliderHandle" style="left:50%"></div>
      <div class="slider-hint">Drag to extend the awning</div>
    `;
    area.appendChild(wrap);
    let dragging=false;
    const before = wrap.querySelector("#sliderBefore");
    const handle = wrap.querySelector("#sliderHandle");
    function setPos(clientX){
      const rect = wrap.getBoundingClientRect();
      let pct = ((clientX-rect.left)/rect.width)*100;
      pct = Math.max(0,Math.min(100,pct));
      before.style.width = pct+"%";
      handle.style.left = pct+"%";
      before.querySelector("img").style.width = rect.width+"px";
    }
    wrap.addEventListener("mousedown",e=>{e.stopPropagation(); dragging=true; setPos(e.clientX);});
    window.addEventListener("mousemove",e=>{if(dragging) setPos(e.clientX);});
    window.addEventListener("mouseup",()=>dragging=false);
    wrap.addEventListener("touchstart",e=>{e.stopPropagation(); dragging=true; setPos(e.touches[0].clientX);});
    wrap.addEventListener("touchmove",e=>{if(dragging) setPos(e.touches[0].clientX);});
    wrap.addEventListener("touchend",()=>dragging=false);
    wrap.addEventListener("click",e=>{e.stopPropagation();});
    setTimeout(()=>{ const rect=wrap.getBoundingClientRect(); before.querySelector("img").style.width = rect.width+"px"; },0);
  }

  if(s.type==="models"){
    const panel = document.createElement("div");
    panel.className="models-panel";
    const m = s.models[activeModel];
    panel.innerHTML = `
      <div class="models-list">
        ${s.models.map((mo,i)=>`
          <div class="model-card ${i===activeModel?'active':''}" data-i="${i}">
            ${awningSVG()}
            <div class="name">${mo.name}</div>
            <div class="spec">${mo.spec}</div>
          </div>`).join("")}
      </div>
      <div class="models-detail">
        <h2>${m.name}</h2>
        <p>${m.projection}<br>${m.width}</p>
        <div class="models-actions">
          <button id="btnGallery">View options</button>
          <button class="secondary" id="btnCompare">Comparison chart</button>
        </div>
      </div>
    `;
    area.appendChild(panel);
    panel.onclick=(e)=>{ e.stopPropagation(); };
    panel.querySelectorAll(".model-card").forEach(el=>{
      el.onclick=(e)=>{ e.stopPropagation(); activeModel=parseInt(el.dataset.i); renderSlide(); };
    });
    panel.querySelector("#btnGallery").onclick=(e)=>{ e.stopPropagation(); galleryOpen=true; galleryIndex=0; renderSlide(); };
    panel.querySelector("#btnCompare").onclick=(e)=>{ e.stopPropagation(); compareOpen=true; renderSlide(); };

    const cap = document.createElement("div");
    cap.className="slide-caption"; cap.textContent = s.title;
    cap.style.background="none";
    cap.style.color="var(--charcoal)"; // models panel is light — white caption text was illegible
    area.appendChild(cap);

    if(galleryOpen){
      const g = s.gallery[galleryIndex];
      const bodyContent = g.native==="warranty"
        ? `<div class="warranty-badge"><div class="hex"><div class="stars">★★★</div><div class="nations">The Nation's Best</div><div class="warranty-word">WARRANTY</div><div class="coverage">COVERAGE</div><div class="stars">★★★</div></div></div>`
        : `<img src="${g.img}">`;
      const modal = document.createElement("div");
      modal.className="gallery-modal";
      modal.style.zIndex=30;
      modal.innerHTML=`
        <div class="gallery-card">
          <div class="gallery-head">Options <button id="gClose">✕</button></div>
          <div class="gallery-body">
            <button class="gallery-nav prev">‹</button>
            ${bodyContent}
            <button class="gallery-nav next">›</button>
          </div>
          <div class="gallery-dots">${s.gallery.map((_,i)=>`<span class="${i===galleryIndex?'active':''}"></span>`).join("")}</div>
        </div>`;
      modal.onclick=(e)=>{ e.stopPropagation(); if(e.target===modal){galleryOpen=false; renderSlide();} };
      modal.querySelector("#gClose").onclick=(e)=>{ e.stopPropagation(); galleryOpen=false; renderSlide();};
      modal.querySelector(".prev").onclick=(e)=>{ e.stopPropagation(); galleryIndex=(galleryIndex-1+s.gallery.length)%s.gallery.length; renderSlide();};
      modal.querySelector(".next").onclick=(e)=>{ e.stopPropagation(); galleryIndex=(galleryIndex+1)%s.gallery.length; renderSlide();};
      area.appendChild(modal);
    }

    if(compareOpen){
      const cmp = s.comparison;
      const iconFor = st => st==="check" ? '<span class="ct-icon ct-check">✓</span>' : st==="warn" ? '<span class="ct-icon ct-warn">!</span>' : '<span class="ct-icon ct-x">✕</span>';
      const modal = document.createElement("div");
      modal.className="gallery-modal";
      modal.style.zIndex=30;
      modal.innerHTML=`
        <div class="gallery-card compare-card">
          <div class="gallery-head">Not All Awnings Are Created Equal <button id="cClose">✕</button></div>
          <div class="compare-scroll">
            <table class="compare-table3">
              <tr>
                <th class="ct-label"></th>
                ${cmp.columns.map(c=>`
                  <th class="${c.badge?'ct-hero':''}">
                    ${c.badge?`<div class="ct-badge">${c.badge}</div>`:""}
                    <div class="ct-colname">${c.name}</div>
                    <div class="ct-colsub">${c.sub}</div>
                  </th>`).join("")}
              </tr>
              ${cmp.rows.map(row=>`
                <tr>
                  <td class="ct-label">${row.label}</td>
                  ${row.cells.map(c=>`<td class="${c.s==='check'?'ct-hero-cell':''}">${iconFor(c.s)}<span class="ct-text">${c.t}</span></td>`).join("")}
                </tr>`).join("")}
            </table>
          </div>
          ${cmp.footer?`<div class="compare-footer">${cmp.footer}</div>`:""}
        </div>`;
      modal.onclick=(e)=>{ e.stopPropagation(); if(e.target===modal){compareOpen=false; renderSlide();} };
      modal.querySelector("#cClose").onclick=(e)=>{ e.stopPropagation(); compareOpen=false; renderSlide();};
      area.appendChild(modal);
    }
  }

  if(s.type==="reasonsgrid"){
    const panel = document.createElement("div");
    panel.className="reasonsgrid-panel";
    panel.innerHTML = `
      <h2>${s.title}</h2>
      <div class="reasonsgrid-grid">
        ${s.reasons.map((r,i)=>`
          <div class="reason-card">
            <div class="reason-num">${i+1}</div>
            <div class="reason-body"><h3>${r.title}</h3><p>${r.text}</p></div>
          </div>`).join("")}
      </div>`;
    if(s.columns===1){ panel.querySelector(".reasonsgrid-grid").style.gridTemplateColumns = "1fr"; }
    area.appendChild(panel);
    addNavZones(area);
  }

  const badge = document.createElement("div");
  badge.className = "slide-num-badge";
  badge.textContent = `#${globalSlideNumber()} — ${s.title || s.id}`;
  area.appendChild(badge);
}

function renderRehearsal(){
  const panel = document.getElementById("rehearsalPanel");
  const s = currentSlide();
  const views = [["slide","This Slide"],["dodont","Do & Don't"],["faq","FAQs"],["close","Close"],["recap","Pre-Demo"]];
  const tabsHTML = `<div class="training-tabs">${views.map(([k,l])=>`<button class="${k===trainingView?'active':''}" data-view="${k}">${l}</button>`).join("")}</div>`;
  let body = "";

  if(trainingView==="slide"){
    body = `
      <div class="eyebrow">Training mode — Slide #${globalSlideNumber()}</div>
      <h2>${s.title}</h2>
      ${s.script.trim()==="" ? '<span class="visual-only-tag">Visual only — no script yet</span>' : `<div class="script-block">${s.script}</div>`}
      ${s.personalTouch ? `<div class="personal-touch"><div class="pt-label">✎ Personal touch — editable per rep (js/data.js → personalTouch)</div><div class="pt-body">${s.personalTouch}</div></div>` : ""}
      ${s.talkingPoints ? `<ul class="talking-points">${s.talkingPoints.map(t=>`<li>${t}</li>`).join("")}</ul>` : ""}
      ${s.coach ? `<div class="coach-note">👉 ${s.coach}</div>` : ""}
    `;
  } else if(trainingView==="dodont"){
    const d = TRAINING_REFERENCE.doDont;
    body = `
      <div class="eyebrow">Reference — every call</div>
      <h2>Do & Don't</h2>
      <div class="tref-section"><h3 class="tref-h3 bad">❌ What NOT to do</h3><ul class="talking-points">${d.dont.map(t=>`<li>${t}</li>`).join("")}</ul></div>
      <div class="tref-section"><h3 class="tref-h3 good">✅ What TO do</h3><ul class="talking-points">${d.do.map(t=>`<li>${t}</li>`).join("")}</ul></div>
      <div class="tref-section"><h3 class="tref-h3">🎯 The Four Sales</h3><div class="script-block">${d.fourSales.intro}</div><ul class="talking-points">${d.fourSales.items.map(t=>`<li>${t}</li>`).join("")}</ul><div class="coach-note">👉 ${d.fourSales.footer}</div></div>
    `;
  } else if(trainingView==="faq"){
    body = `
      <div class="eyebrow">Reference — any slide, any time</div>
      <h2>FAQs & Objections</h2>
      ${TRAINING_REFERENCE.faqs.map(f=>`
        <div class="faq-item">
          <div class="faq-q"><span class="faq-tag${f.tag==='Objection'?' obj':''}">${f.tag}</span>${f.q}</div>
          <div class="script-block faq-a">${f.a}</div>
        </div>`).join("")}
    `;
  } else if(trainingView==="close"){
    const c = TRAINING_REFERENCE.close;
    body = `
      <div class="eyebrow">Reference — the pricing moment</div>
      <h2>Pricing & Close</h2>
      <div class="coach-note tref-gap">👉 ${c.note}</div>
      ${c.sections.map(sec=>`<div class="tref-section"><h3 class="tref-h3">${sec.title}</h3><div class="script-block">${sec.body}</div></div>`).join("")}
    `;
  } else if(trainingView==="recap"){
    const p = TRAINING_REFERENCE.preDemo;
    body = `
      <div class="eyebrow">Reference — before slide 1</div>
      <h2>Pre-Demo Recap at the Table</h2>
      <div class="coach-note tref-gap">👉 ${p.intro}</div>
      <div class="script-block">${p.body}</div>
    `;
  }

  panel.innerHTML = tabsHTML + body;
  panel.querySelectorAll(".training-tabs button").forEach(b=>{
    b.onclick = ()=>{ trainingView = b.dataset.view; renderRehearsal(); };
  });
}

function renderAll(){
  renderTabs();
  renderDots();
  renderSlide();
  document.getElementById("stage").className = "stage"+(mode==="rehearse"?" rehearsal":"");
  document.getElementById("rehearsalPanel").style.display = mode==="rehearse" ? "block":"none";
  if(mode==="rehearse") renderRehearsal();
}

document.getElementById("btn-present").onclick=()=>{
  mode="present";
  document.getElementById("btn-present").classList.add("active");
  document.getElementById("btn-rehearse").classList.remove("active");
  renderAll();
};
document.getElementById("btn-rehearse").onclick=()=>{
  mode="rehearse";
  document.getElementById("btn-rehearse").classList.add("active");
  document.getElementById("btn-present").classList.remove("active");
  renderAll();
};
document.getElementById("prevBtn").onclick=goPrev;
document.getElementById("nextBtn").onclick=goNext;

renderAll();

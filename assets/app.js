/* Shared renderer for the Sustainability Lab conference reading lists. */
(function () {
  "use strict";

  // ---------- theme ----------
  function initTheme() {
    var saved = localStorage.getItem("crl-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-theme-toggle]");
      if (!b) return;
      var cur = document.documentElement.getAttribute("data-theme");
      if (!cur) cur = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("crl-theme", next);
    });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function slug(s) { return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

  // ---------- venue page ----------
  function renderVenue() {
    var D = window.READING_LIST;
    var ABS = window.ABSTRACTS || {};
    if (!D) return;
    document.title = D.venue + " — Lab Reading List";

    var root = document.getElementById("app");

    // counts
    var allPapers = D.clusters.reduce(function (a, c) { return a + c.papers.length; }, 0);
    var mustCount = D.clusters.reduce(function (a, c) {
      return a + c.papers.filter(function (p) { return p.tier === "must"; }).length;
    }, 0);

    // hero
    var hero = el("section", "hero");
    hero.appendChild(el("h1", null, D.venue + " — what to read"));
    var meta = el("div", "meta");
    meta.innerHTML = "<b>" + D.dates + "</b> · " + D.location + " · " + D.source;
    hero.appendChild(meta);
    hero.appendChild(el("p", "intro", D.intro));
    var stats = el("div", "stats");
    [["Curated papers", allPapers], ["★ Must-read", mustCount],
     ["Clusters", D.clusters.length], ["Workshops", (D.workshops || []).length]]
      .forEach(function (s) {
        var c = el("span", "stat"); c.innerHTML = "<b>" + s[1] + "</b> " + s[0]; stats.appendChild(c);
      });
    hero.appendChild(stats);
    root.appendChild(wrap(hero));

    // lab's own paper at this venue
    if (D.labPaper) {
      var sp = el("section", "spotlight");
      sp.appendChild(el("div", "sp-tag", "★ Our paper at " + D.venue));
      var sh = el("h2");
      var sa = el("a", null, D.labPaper.title);
      sa.href = D.labPaper.url; sa.target = "_blank"; sa.rel = "noopener";
      sh.appendChild(sa); sp.appendChild(sh);
      if (D.labPaper.authors) sp.appendChild(el("div", "sp-auth", D.labPaper.authors));
      if (D.labPaper.why) sp.appendChild(el("p", null, D.labPaper.why));
      if (D.labPaper.track) sp.appendChild(el("div", "sp-track", D.labPaper.track));
      var spAbs = ABS[D.labPaper.url];
      if (spAbs) {
        var spBtn = el("button", "sp-absbtn", "Show abstract ▾");
        var spBox = el("div", "abstract", spAbs);
        spBtn.addEventListener("click", function () {
          var o = spBox.classList.toggle("open");
          spBtn.textContent = o ? "Hide abstract ▴" : "Show abstract ▾";
        });
        sp.appendChild(spBtn); sp.appendChild(spBox);
      }
      root.appendChild(wrap(sp));
    }

    // controls
    var controls = el("div", "controls");
    var cw = el("div", "wrap");
    var row = el("div", "row");
    var search = el("input"); search.id = "search";
    search.placeholder = "Search title, topic, lab project, student area…";
    var seg = el("div", "seg");
    ["All", "★ Must-read"].forEach(function (label, i) {
      var b = el("button", i === 0 ? "active" : null, label);
      b.dataset.tier = i === 0 ? "all" : "must";
      seg.appendChild(b);
    });
    row.appendChild(search); row.appendChild(seg);
    cw.appendChild(row);

    // section nav
    var nav = el("div", "secnav");
    if (D.workshops && D.workshops.length) {
      var wl = el("a", null, "Workshops"); wl.href = "#workshops"; nav.appendChild(wl);
    }
    D.clusters.forEach(function (c) {
      var a = el("a", null, c.name); a.href = "#" + c.id; nav.appendChild(a);
    });
    cw.appendChild(nav);
    var note = el("p", "count-note"); note.id = "countNote";
    cw.appendChild(note);
    controls.appendChild(cw);
    root.appendChild(controls);

    var main = el("div", "wrap");

    // workshops
    if (D.workshops && D.workshops.length) {
      var ws = el("section", "workshops"); ws.id = "workshops";
      ws.appendChild(el("h2", null, "Workshops worth attending"));
      ws.appendChild(el("p", "sub", "Where the lab's topics get a dedicated room. ★ = top pick."));
      var grid = el("div", "ws-grid");
      D.workshops.forEach(function (w) {
        var card = el("div", "ws");
        var h = el("h3");
        var a = el("a", null, (w.tier === "must" ? "★ " : "") + w.title);
        a.href = w.url; a.target = "_blank"; a.rel = "noopener";
        h.appendChild(a); card.appendChild(h);
        if (w.when) card.appendChild(el("div", "when", w.when));
        if (w.why) card.appendChild(el("p", null, w.why));
        grid.appendChild(card);
      });
      ws.appendChild(grid);

      // most-relevant papers/talks pulled from specific workshops
      var withPapers = D.workshops.filter(function (w) { return w.papers && w.papers.length; });
      if (withPapers.length) {
        var sec2 = el("div", "wp-section");
        sec2.appendChild(el("h3", null, "Most relevant papers & talks from these workshops"));
        if (D.workshopPapersNote) sec2.appendChild(el("p", "sub", D.workshopPapersNote));
        withPapers.forEach(function (w) {
          var blk = el("div", "wp-block");
          var hh = el("h4");
          var aa = el("a", null, w.title.split(":")[0].split("(")[0].trim());
          aa.href = w.url; aa.target = "_blank"; aa.rel = "noopener";
          hh.appendChild(aa);
          blk.appendChild(hh);
          var ul = el("ul", "ws-papers");
          w.papers.forEach(function (pp) {
            var li = el("li");
            li.appendChild(el("span", "wp-title", (pp.kind === "talk" ? "🎤 " : "") + pp.title));
            if (pp.why) {
              li.appendChild(document.createTextNode(" — "));
              li.appendChild(el("span", "wp-why", pp.why));
            }
            ul.appendChild(li);
          });
          blk.appendChild(ul);
          sec2.appendChild(blk);
        });
        ws.appendChild(sec2);
      }

      main.appendChild(ws);
    }

    // clusters
    D.clusters.forEach(function (c) {
      var sec = el("section", "cluster"); sec.id = c.id; sec.dataset.cluster = c.id;
      sec.appendChild(el("h2", null, c.name));
      if (c.desc) sec.appendChild(el("p", "cdesc", c.desc));
      if (c.labMap && c.labMap.length) {
        var lm = el("p", "lab-map"); lm.appendChild(document.createTextNode("Maps to lab work:"));
        c.labMap.forEach(function (m) { var ch = el("span", "chip map", m); lm.appendChild(ch); });
        sec.appendChild(lm);
      }
      c.papers.forEach(function (p) {
        sec.appendChild(paperCard(p, ABS));
      });
      main.appendChild(sec);
    });

    // glossary
    if (D.labWorks) {
      var g = el("section", "glossary"); g.id = "glossary";
      g.appendChild(el("h2", null, "Lab projects referenced"));
      var dl = el("dl");
      Object.keys(D.labWorks).forEach(function (k) {
        dl.appendChild(el("dt", null, k));
        dl.appendChild(el("dd", null, D.labWorks[k]));
      });
      g.appendChild(dl);
      main.appendChild(g);
    }

    var foot = el("footer", "site");
    foot.innerHTML = "Sustainability Lab, IIT Gandhinagar · list updated " + (D.updated || "") +
      " · relevance judged from titles, verify abstracts before assigning · " +
      "<a href='../index.html'>← all conferences</a>";
    main.appendChild(foot);

    root.appendChild(main);

    // ---- filtering ----
    var tier = "all";
    function apply() {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      D.clusters.forEach(function (c) {
        var sec = document.getElementById(c.id);
        var anyVisible = false;
        c.papers.forEach(function (p, i) {
          var card = sec.querySelectorAll(".paper")[i];
          var hay = [p.title, p.why, (p.maps || []).join(" "), p.student || "", c.name]
            .join(" ").toLowerCase();
          var ok = (tier === "all" || p.tier === "must") && (!q || hay.indexOf(q) !== -1);
          card.classList.toggle("hidden", !ok);
          if (ok) { anyVisible = true; shown++; }
        });
        sec.classList.toggle("hidden", !anyVisible);
      });
      note.textContent = "Showing " + shown + " of " + allPapers + " papers" +
        (q ? " matching “" + search.value.trim() + "”" : "") +
        (tier === "must" ? " · must-read only" : "");
    }
    search.addEventListener("input", apply);
    seg.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      tier = b.dataset.tier;
      seg.querySelectorAll("button").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      apply();
    });
    apply();
  }

  function paperCard(p, ABS) {
    var card = el("div", "paper" + (p.tier === "must" ? " is-must" : ""));
    var top = el("div", "ptop");
    var t = el("span", "tier " + p.tier, p.tier === "must" ? "★ must" : "○ adjacent");
    var h = el("h3", null, p.title);
    top.appendChild(t); top.appendChild(h);
    card.appendChild(top);
    if (p.why) card.appendChild(el("p", "why", p.why));

    var tags = el("div", "tags");
    (p.maps || []).forEach(function (m) { tags.appendChild(el("span", "chip map", m)); });
    if (p.student) tags.appendChild(el("span", "chip student", "student: " + p.student));
    if (tags.children.length) card.appendChild(tags);

    var actions = el("div", "actions");
    var link = el("a", null, "Open paper ↗"); link.href = p.url; link.target = "_blank"; link.rel = "noopener";
    actions.appendChild(link);
    var abs = ABS[p.url];
    if (abs) {
      var btn = el("button", null, "Show abstract ▾");
      var box = el("div", "abstract", abs);
      btn.addEventListener("click", function () {
        var open = box.classList.toggle("open");
        btn.textContent = open ? "Hide abstract ▴" : "Show abstract ▾";
      });
      actions.appendChild(btn);
      card.appendChild(actions);
      card.appendChild(box);
    } else {
      card.appendChild(actions);
    }
    return card;
  }

  function wrap(child) { var w = el("div", "wrap"); w.appendChild(child); return w; }

  // ---------- landing page ----------
  function renderLanding() {
    var V = window.VENUES || [];
    var root = document.getElementById("venues");
    if (!root) return;
    var grid = el("div", "venue-grid");
    V.forEach(function (v) {
      var card;
      if (v.soon) { card = el("div", "venue-card soon"); }
      else { card = el("a", "venue-card"); card.href = v.href; }
      card.appendChild(el("h2", null, v.name));
      card.appendChild(el("div", "vmeta", v.meta));
      var c = el("div", "vcount", v.soon ? "coming soon" : (v.count || "View list →"));
      card.appendChild(c);
      grid.appendChild(card);
    });
    root.appendChild(grid);
  }

  window.CRL = { renderVenue: renderVenue, renderLanding: renderLanding };
  initTheme();
})();

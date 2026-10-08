/* ORCHID BUILDERS — interactions */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.gsap) { document.documentElement.classList.remove("js"); return; }
    gsap.registerPlugin(ScrollTrigger);

    /* ---------- Lenis smooth scroll ---------- */
    var lenis = null;
    if (window.Lenis) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
    var scrollToEl = function (el) {
      if (lenis) { lenis.scrollTo(el, { offset: -90 }); }
      else { el.scrollIntoView({ behavior: "smooth" }); }
    };
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) { var el = $(id); if (el) { e.preventDefault(); scrollToEl(el); } }
      });
    });

    /* ---------- header / progress ---------- */
    var header = $("#site-header"), bar = $("#scroll-progress-bar"), toTop = $("#to-top");
    var onScroll = function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle("scrolled", y > 60);
      if (toTop) toTop.classList.toggle("show", y > 700);
      if (bar) {
        var h = document.documentElement;
        var p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
        bar.style.transform = "scaleX(" + p + ")";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener("click", function () { scrollToEl(document.body); });

    /* ---------- mobile menu ---------- */
    var mt = $("#menu-toggle"), mm = $("#mobile-menu");
    if (mt && mm) {
      mt.addEventListener("click", function () {
        var open = document.body.classList.toggle("menu-open");
        mt.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) {
          if (lenis) lenis.stop();
          gsap.fromTo(".mm-link, .mm-acc", { y: 36, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.7, ease: "power3.out", delay: 0.2 });
        } else if (lenis) lenis.start();
      });
      $$(".mm-acc-btn").forEach(function (b) {
        b.addEventListener("click", function () { b.closest(".mm-acc").classList.toggle("open"); });
      });
      $$("#mobile-menu a[href$='.html']").forEach(function (a) {
        a.addEventListener("click", function () { document.body.classList.remove("menu-open"); if (lenis) lenis.start(); });
      });
    }

    /* ---------- hero intro ---------- */
    var heroIntro = function (fast) {
      if (!$(".hero-media")) return;
      var tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-slide.is-active img", { scale: 1.22 }, { scale: 1, duration: fast ? 1.3 : 2.1, ease: "power2.out" }, 0)
        .fromTo(".hero-shade", { opacity: 0 }, { opacity: 1, duration: 1.1 }, 0)
        .to(".rl-in", { y: 0, duration: 1.15, stagger: 0.13 }, 0.15)
        .fromTo(".hero-fade", { y: 26, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.09, duration: 0.9 }, 0.65);
    };

    /* ---------- hero carousel ---------- */
    var heroCarousel = function () {
      var slides = $$(".hero-slide"), dots = $$(".hero-dot"), prev = $("#hero-prev"), next = $("#hero-next");
      if (slides.length < 2) return;
      var current = 0, timer;
      var show = function (index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (slide, i) { slide.classList.toggle("is-active", i === current); });
        dots.forEach(function (dot, i) { dot.classList.toggle("is-active", i === current); dot.setAttribute("aria-selected", i === current ? "true" : "false"); });
      };
      var restart = function () { clearInterval(timer); timer = setInterval(function () { show(current + 1); }, 6500); };
      var move = function (step) { show(current + step); restart(); };
      if (prev) prev.addEventListener("click", function () { move(-1); });
      if (next) next.addEventListener("click", function () { move(1); });
      dots.forEach(function (dot, i) { dot.addEventListener("click", function () { show(i); restart(); }); });
      var hero = $(".hero");
      if (hero) { hero.addEventListener("mouseenter", function () { clearInterval(timer); }); hero.addEventListener("mouseleave", restart); }
      restart();
    };

    /* ---------- preloader + wipe ---------- */
    var pre = $("#preloader"), wipe = $("#wipe");
    var seen = sessionStorage.getItem("ob_seen");
    if (pre && !seen) {
      sessionStorage.setItem("ob_seen", "1");
      var num = $("#pl-num"), line = $("#pl-line"), cnt = { v: 0 };
      var ptl = gsap.timeline();
      ptl.fromTo("#pl-logo", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to(cnt, {
          v: 100, duration: 1.5, ease: "power2.inOut",
          onUpdate: function () { var v = Math.round(cnt.v); if (num) num.textContent = v; if (line) line.style.transform = "scaleX(" + v / 100 + ")"; }
        }, 0.15)
        .to("#pl-inner", { opacity: 0, duration: 0.4, ease: "power2.in" }, "+=0.15")
        .to(".pre-top", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "<")
        .to(".pre-bot", { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, "<")
        .add(function () { heroIntro(false); }, "-=0.5")
        .set(pre, { display: "none" });
    } else {
      if (pre) pre.remove();
      if (wipe) {
        wipe.classList.add("cover");
        setTimeout(function () {
          wipe.classList.remove("cover");
          wipe.classList.add("out");
          setTimeout(function () { wipe.classList.remove("out"); }, 900);
        }, 60);
      }
      heroIntro(true);
    }
    heroCarousel();

    /* internal page transitions */
    if (wipe) {
      $$('a[href$=".html"], a[href*=".html#"]').forEach(function (a) {
        a.addEventListener("click", function (e) {
          if (a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
          var href = a.getAttribute("href");
          var cur = location.pathname.split("/").pop() || "index.html";
          if (href.split("#")[0] === cur) return;
          e.preventDefault();
          wipe.classList.remove("out");
          wipe.classList.add("in");
          setTimeout(function () { window.location.href = href; }, 780);
        });
      });
    }

    /* ---------- reveals ---------- */
    $$("[data-reveal]").forEach(function (el) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1.05, ease: "power3.out",
        delay: parseFloat(el.getAttribute("data-delay") || 0),
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });
    $$(".clip-reveal").forEach(function (w) {
      var img = w.querySelector("img");
      var tl = gsap.timeline({ scrollTrigger: { trigger: w, start: "top 86%" } });
      tl.to(w, { clipPath: "inset(0% 0 0% 0)", duration: 1.35, ease: "expo.out" });
      if (img) tl.to(img, { scale: 1, duration: 1.7, ease: "power2.out" }, 0);
    });
    $$("[data-parallax]").forEach(function (el) {
      gsap.fromTo(el, { yPercent: -8 }, {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: el.closest(".hero, .page-hero") || el.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    /* ---------- counters ---------- */
    $$("[data-count]").forEach(function (el) {
      var end = parseFloat(el.getAttribute("data-count"));
      var suf = el.getAttribute("data-suffix") || "";
      var o = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: "top 90%", once: true,
        onEnter: function () {
          gsap.to(o, { v: end, duration: 2.2, ease: "power2.out", onUpdate: function () { el.textContent = Math.round(o.v) + suf; } });
        }
      });
    });

    /* ---------- process line ---------- */
    var plf = $(".process-line-fill");
    if (plf) {
      gsap.fromTo(plf, { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ".process-list", start: "top 72%", end: "bottom 55%", scrub: true }
      });
    }

    /* ---------- testimonials ---------- */
    var slides = $$(".tst-slide");
    if (slides.length) {
      var ti = 0, timer = null;
      var show = function (n) {
        ti = (n + slides.length) % slides.length;
        slides.forEach(function (s, k) { s.classList.toggle("active", k === ti); });
      };
      var reset = function () { clearInterval(timer); timer = setInterval(function () { show(ti + 1); }, 7000); };
      var pn = $("#tst-next"), pp = $("#tst-prev");
      if (pn) pn.addEventListener("click", function () { show(ti + 1); reset(); });
      if (pp) pp.addEventListener("click", function () { show(ti - 1); reset(); });
      show(0); reset();
    }

    /* ---------- filters ---------- */
    $$("[data-filter-group]").forEach(function (group) {
      var btns = $$("[data-filter]", group);
      var items = $$("[data-cat]", group);
      btns.forEach(function (b) {
        b.addEventListener("click", function () {
          btns.forEach(function (x) { x.classList.remove("active"); });
          b.classList.add("active");
          var f = b.getAttribute("data-filter");
          items.forEach(function (it) {
            var showIt = f === "all" || (it.getAttribute("data-cat") || "").split(" ").indexOf(f) !== -1;
            it.style.display = showIt ? "" : "none";
          });
          var vis = items.filter(function (it) { return it.style.display !== "none"; });
          gsap.fromTo(vis, { opacity: 0, y: 26 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power3.out", overwrite: true });
          ScrollTrigger.refresh();
        });
      });
    });

    /* ---------- lightbox ---------- */
    var lb = $("#lightbox");
    if (lb) {
      var limg = $("#lb-img"), lcap = $("#lb-cap"), llist = [], lcur = 0;
      var render = function () {
        var it = llist[lcur]; if (!it) return;
        var im = it.querySelector("img");
        limg.setAttribute("src", it.getAttribute("data-full") || (im ? im.getAttribute("src") : ""));
        limg.classList.remove("zoomed");
        if (lcap) lcap.textContent = it.getAttribute("data-title") || "";
      };
      var open = function (items, idx) {
        llist = items; lcur = idx; render();
        lb.classList.add("open");
        if (lenis) lenis.stop();
        document.body.style.overflow = "hidden";
      };
      var close = function () {
        lb.classList.remove("open");
        if (lenis) lenis.start();
        document.body.style.overflow = "";
      };
      $$(".g-item").forEach(function (g) {
        g.addEventListener("click", function () {
          var vis = $$(".g-item").filter(function (x) { return x.style.display !== "none"; });
          open(vis, vis.indexOf(g));
        });
      });
      var nc = $("#lb-next"), pc = $("#lb-prev"), cc = $("#lb-close");
      if (nc) nc.addEventListener("click", function (e) { e.stopPropagation(); lcur = (lcur + 1) % llist.length; render(); });
      if (pc) pc.addEventListener("click", function (e) { e.stopPropagation(); lcur = (lcur - 1 + llist.length) % llist.length; render(); });
      if (cc) cc.addEventListener("click", close);
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      limg.addEventListener("click", function () { limg.classList.toggle("zoomed"); });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") { lcur = (lcur + 1) % llist.length; render(); }
        if (e.key === "ArrowLeft") { lcur = (lcur - 1 + llist.length) % llist.length; render(); }
      });
    }

    /* ---------- faq ---------- */
    $$(".faq-q").forEach(function (q) {
      q.addEventListener("click", function () {
        var item = q.closest(".faq-item");
        var wasOpen = item.classList.contains("open");
        $$(".faq-item.open").forEach(function (o) { o.classList.remove("open"); });
        if (!wasOpen) item.classList.add("open");
        setTimeout(function () { ScrollTrigger.refresh(); }, 600);
      });
    });

    /* ---------- spotlight cards ---------- */
    $$(".spot").forEach(function (c) {
      c.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty("--mx", (e.clientX - r.left) + "px");
        c.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });

    /* ---------- forms (demo submit) ---------- */
    $$("form.js-form").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var t = $("#toast"), tm = $("#toast-msg");
        if (tm) tm.textContent = f.getAttribute("data-success") || "Thank you. Our team will reach out within 24 hours.";
        if (t) {
          t.classList.add("show");
          setTimeout(function () { t.classList.remove("show"); }, 5000);
        }
        f.reset();
      });
    });

    /* ---------- misc ---------- */
    var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
    if (location.hash) {
      var t = $(location.hash);
      if (t) setTimeout(function () { scrollToEl(t); }, 1200);
    }
    window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  });
})();

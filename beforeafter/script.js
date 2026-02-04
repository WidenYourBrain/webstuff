const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function showToast(message) {
  const toast = $("[data-toast]");
  const text = $("[data-toast-text]");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => toast.classList.remove("is-visible"), 1400);
}

function setYear() {
  const el = $("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupMobileNav() {
  const header = $("[data-header]");
  const toggle = $("[data-nav-toggle]");
  const nav = $("[data-nav]");
  if (!header || !toggle || !nav) return;

  const close = () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on link click (mobile).
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    close();
  });

  // Close on Escape.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Close if resizing up to desktop.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) close();
  });
}

function setupSmoothScroll() {
  if (prefersReducedMotion()) return;
  const links = $$('a[href^="#"]');
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  });
}

function animateCount(el) {
  const raw = el.getAttribute("data-count-to");
  if (!raw) return;

  const suffix = el.getAttribute("data-suffix") ?? "";
  const decimals = Number(el.getAttribute("data-decimals") ?? "0");
  const to = Number(raw);
  if (!Number.isFinite(to)) return;

  const duration = prefersReducedMotion() ? 0 : 900;
  const start = performance.now();

  const from = 0;
  const tick = (t) => {
    const p = duration === 0 ? 1 : clamp((t - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = from + (to - from) * eased;
    el.textContent = `${v.toFixed(decimals)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function setupCounters() {
  const els = $$("[data-count-to]");
  if (els.length === 0) return;

  if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
    els.forEach(animateCount);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.35 }
  );

  els.forEach((el) => io.observe(el));
}

async function setupCopyEmail() {
  const btn = $("[data-copy-email]");
  if (!btn) return;

  const email = "hello@widebrain.tech";
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copied.");
    } catch {
      // Fallback: select via temporary input.
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      showToast("Email copied.");
    }
  });
}

function setupNewsletterForm() {
  const form = $(".newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Subscribed (demo).");
    form.reset();
  });
}

setYear();
setupMobileNav();
setupSmoothScroll();
setupCounters();
setupCopyEmail();
setupNewsletterForm();


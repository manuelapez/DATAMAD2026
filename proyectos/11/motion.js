/* Copyright (c) 2026 Manuela Ibáñez. MIT applies to original CRABI software; see LICENSE_SCOPE.md. */
(() => {
  "use strict";

  const root = document.documentElement;
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealSelector = ".hero, .tabpanel .card, .tabpanel .table-wrap, .tabpanel .graph, .tabpanel .insight, .tabpanel .status-box, .tabpanel .warning, .crabi-audience-note";
  const valueSelector = "#pop, #invited, #tests, #followResult, #inviteValue, #rateValue, #followValue, #lowValue, #highValue, #territorialPopulation, #territorialInvited, #territorialTests, #territorialInterpretation, #territorialRuleStatus, #cfSummary, #cfInterpretation, #cfMethodologyText, #aiModelStatus, #aiTransferStatus, #aiContext, #aiDomainWarning, #aiCurrentSummary, #aiCurrentInterpretation, #sensitivity, #limitResult, #madrid, #gaps";
  const tableBodies = new Set(["table", "cfRows", "aiSuggestions"]);
  let revealObserver = null;
  let mutationObserver = null;
  let motionEnabled = !reduceQuery.matches;
  const timers = new WeakMap();

  const requestFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));

  function asElement(node) {
    if (!node) return null;
    return node.nodeType === 1 ? node : node.parentElement || null;
  }

  function revealNodes(node) {
    if (!revealObserver || !node) return;
    const element = asElement(node);
    if (!element) return;
    const candidates = [];
    if (element.matches(revealSelector)) candidates.push(element);
    candidates.push(...element.querySelectorAll(revealSelector));
    candidates.forEach((candidate) => {
      if (candidate.dataset.crabiReveal === "1") return;
      candidate.dataset.crabiReveal = "1";
      revealObserver.observe(candidate);
    });
  }

  function startReveal() {
    if (!motionEnabled || !("IntersectionObserver" in window)) return;
    try {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("crabi-revealed");
          revealObserver.unobserve(entry.target);
        });
      }, { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
      revealNodes(document.body);
      root.classList.add("crabi-motion-ready");
    } catch (error) {
      if (revealObserver) revealObserver.disconnect();
      revealObserver = null;
      root.classList.remove("crabi-motion-ready");
      document.querySelectorAll("[data-crabi-reveal]").forEach((element) => element.classList.add("crabi-revealed"));
      console.warn("CRABI: animación de entrada desactivada; el contenido permanece visible.", error);
    }
  }

  function stopReveal() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = null;
    root.classList.remove("crabi-motion-ready");
    document.querySelectorAll("[data-crabi-reveal]").forEach((element) => element.classList.add("crabi-revealed"));
  }

  function pulse(element, className, duration = 520) {
    if (!motionEnabled || !element || !element.classList) return;
    const previousTimer = timers.get(element);
    if (previousTimer) window.clearTimeout(previousTimer);
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
    timers.set(element, window.setTimeout(() => {
      element.classList.remove(className);
      timers.delete(element);
    }, duration));
  }

  function animateBars(container) {
    if (!motionEnabled || !container) return;
    container.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.add("crabi-bar-transition");
      bar.style.transform = "scaleX(0)";
      void bar.offsetWidth;
      requestFrame(() => { bar.style.transform = "scaleX(1)"; });
      window.setTimeout(() => {
        bar.style.removeProperty("transform");
        bar.classList.remove("crabi-bar-transition");
      }, 460);
    });
  }

  function animateLines(svg) {
    if (!motionEnabled || !svg) return;
    svg.querySelectorAll("polyline, path").forEach((line) => {
      try {
        const length = line.getTotalLength();
        if (!Number.isFinite(length) || length <= 0) return;
        line.style.strokeDasharray = `${length} ${length}`;
        line.style.strokeDashoffset = String(length);
        line.classList.add("crabi-line-draw");
        void line.getBoundingClientRect();
        requestFrame(() => { line.style.strokeDashoffset = "0"; });
      } catch {
        // SVG implementations without getTotalLength keep the fully rendered chart.
      }
    });
  }

  function animateTable(body) {
    if (!motionEnabled || !body) return;
    const table = body.closest("table");
    const graph = body.closest(".graph, .table-wrap, #aiFactors, #aiCurrentResults");
    pulse(graph || table, "crabi-chart-updated", 420);
    body.querySelectorAll("tr").forEach((row) => pulse(row, "crabi-row-updated", 500));
    animateBars(body);
  }

  function animateChangedContent(node) {
    const element = asElement(node);
    if (!element) return;
    const value = element.closest(valueSelector);
    if (value) {
      pulse(value, "crabi-value-updated", 480);
      return;
    }
    const body = element.closest("tbody");
    if (body && tableBodies.has(body.id)) {
      animateTable(body);
      return;
    }
    const svg = element.closest("svg#cfPlot");
    if (svg) {
      pulse(svg, "crabi-chart-updated", 420);
      animateLines(svg);
      return;
    }
    const chart = element.closest(".graph, .table-wrap, #aiFactors, #aiCurrentResults");
    if (chart) {
      pulse(chart, "crabi-chart-updated", 420);
      animateBars(chart);
      return;
    }
    const copy = element.closest(".insight, .status-box, .warning, #demographicInterpretation, #territorialInterpretation");
    if (copy) pulse(copy, "crabi-copy-updated", 420);
  }

  function onMutations(records) {
    const changed = new Set();
    records.forEach((record) => {
      if (record.type === "attributes" && record.attributeName === "hidden") {
        const panel = record.target;
        if (panel.matches(".tabpanel") && !panel.hidden) {
          pulse(panel, "crabi-panel-enter", 360);
          revealNodes(panel);
        }
      }
      if (record.type === "childList") {
        record.addedNodes.forEach((node) => revealNodes(node));
      }
      if (record.type === "childList" || record.type === "characterData") changed.add(record.target);
    });
    changed.forEach(animateChangedContent);
  }

  function setupMutationObserver() {
    if (!("MutationObserver" in window)) return;
    mutationObserver = new MutationObserver(onMutations);
    mutationObserver.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["hidden"],
    });
  }

  reduceQuery.addEventListener?.("change", (event) => {
    motionEnabled = !event.matches;
    if (motionEnabled) startReveal();
    else stopReveal();
  });

  startReveal();
  setupMutationObserver();
})();

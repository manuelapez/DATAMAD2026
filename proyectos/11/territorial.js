/* Copyright (c) 2026 Manuela Ibáñez. MIT applies to original CRABI software; see LICENSE_SCOPE.md. */
"use strict";

(() => {
  const select = document.getElementById("region");
  // The main simulator populates the selector before this script runs.
  if (!select?.value) return;
  const data = CRABI_DATA;
  const host = document.getElementById("territorialHost") || document.querySelector(".main");
  const fmt = (n) => new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 }).format(n);
  const panel = document.createElement("section");
  panel.className = "card";
  panel.id = "territorialScenario";
  panel.innerHTML = `
    <div class="rowhead"><div><h2>Escenario territorial basado en reglas publicadas</h2>
    <p class="sub">Suma residentes por edad simple únicamente dentro del rango vigente respaldado para el territorio. Corte de fuentes: 22/11/2026.</p></div>
    <span class="pill">EVIDENCIA OFICIAL, REGLAS FECHADAS</span></div>
    <div class="tiles">
      <div class="tile"><strong id="territorialPopulation">—</strong><span>Residentes en el rango de referencia</span></div>
      <div class="tile"><strong id="territorialInvited">—</strong><span>Invitaciones hipotéticas bajo el supuesto editable</span></div>
      <div class="tile"><strong id="territorialTests">—</strong><span>Mamografías hipotéticas bajo supuestos</span></div>
    </div>
    <div class="control"><label for="territorialInvitation">Fracción invitada supuesta <output id="territorialInvitationValue">100 %</output></label><input id="territorialInvitation" type="range" min="0" max="100" step="5" value="100"></div>
    <div class="control"><label for="territorialParticipation">Participación supuesta <output id="territorialParticipationValue">60 %</output></label><input id="territorialParticipation" type="range" min="0" max="100" step="1" value="60"></div>
    <div class="mini-alert" id="territorialRuleStatus" role="status" aria-live="polite"></div><h3>Cómo interpretar la evidencia territorial</h3><p id="territorialInterpretation" aria-live="polite"></p><details><summary>¿Qué significa este rango?</summary><p>Es una referencia documental del programa territorial en la fecha de consulta, no confirmación de elegibilidad individual ni de implantación simultánea en todas las cohortes. Un rango anunciado no se trata como vigente. Si la evidencia no permite confirmar el rango actual, el escenario permanece bloqueado.</p></details><details><summary>¿Qué no se puede concluir?</summary><p>Las diferencias de población entre rangos describen tamaños demográficos, no desempeño, acceso, calidad ni resultados sanitarios. No permiten construir rankings territoriales ni atribuir causas.</p></details>
    <p class="notice">El rango de edad es una regla publicada, no la elegibilidad efectiva. No se descuentan exclusiones, cribado oportunista, derechos sanitarios, cohortes ya invitadas ni antecedentes de riesgo. Los valores de invitación y participación son supuestos; el resultado no es demanda, capacidad ni predicción. Las ampliaciones graduales pueden hacer que el rango completo no esté implantado simultáneamente en todas las cohortes.</p>
    <div class="source"><span id="territorialSource"></span><span id="territorialPeriodicitySource"></span><span id="territorialCohortSource"></span>, <a href="FUENTES_Y_LIMITACIONES.md">Auditoría de vigencia y calidad</a></div>`;
  host.appendChild(panel);

  function draw() {
    const territory = data.territories.find((item) => item.code === select.value);
    const rule = territory.screeningRule;
    const publishedMin = rule.edad_min_general === "" ? Number.NaN : Number(rule.edad_min_general);
    const publishedMax = rule.edad_max_general === "" ? Number.NaN : Number(rule.edad_max_general);
    const min = rule.edad_min_escenario === "" ? Number.NaN : Number(rule.edad_min_escenario);
    const max = rule.edad_max_escenario === "" ? Number.NaN : Number(rule.edad_max_escenario);
    const validRule = rule.uso_escenario === "si" && Number.isInteger(min) && Number.isInteger(max) && max >= min;
    const population = CRABI2.territorialPopulation(territory.ageCounts, rule);
    const invitation = Number(document.getElementById("territorialInvitation").value);
    const participation = Number(document.getElementById("territorialParticipation").value);
    document.getElementById("territorialPopulation").textContent = population === null ? "Pendiente" : fmt(population);
    document.getElementById("territorialInvited").textContent = population === null ? "Pendiente" : fmt(population * invitation / 100);
    document.getElementById("territorialTests").textContent = population === null ? "Pendiente" : fmt(population * invitation / 100 * participation / 100);
    document.getElementById("territorialInvitationValue").textContent = `${invitation} %`;
    document.getElementById("territorialParticipationValue").textContent = `${participation} %`;
    const publishedRange = Number.isInteger(publishedMin) && Number.isInteger(publishedMax)
      ? `Último rango publicado: ${publishedMin}–${publishedMax}. `
      : "Rango vigente no verificado. ";
    const validRange = validRule
      ? `Rango usado solo como referencia demográfica: ${min}–${max}. `
      : "No se calcula porque no hay rango vigente suficientemente confirmado. ";
    const sourceDate = rule.fecha_publicacion_fuente || "fecha de publicación no visible";
    const validity = [rule.vigencia_desde, rule.vigencia_hasta].filter(Boolean).join(" a ") || "vigencia sin fechas explícitas";
    const periodicity = rule.intervalo_meses
      ? `Periodicidad documentada: cada ${rule.intervalo_meses} meses. `
      : "Periodicidad no verificada. ";
    document.getElementById("territorialInterpretation").textContent = CRABI_INTERPRET.territorial({name:territory.name,min,max,population,valid:validRule&&population!==null});
    document.getElementById("territorialRuleStatus").textContent =
      `${territory.name}. ${publishedRange}${validRange}Evidencia: ${rule.nivel_evidencia}. ` +
      `Fuente publicada: ${sourceDate}; vigencia: ${validity}. ${periodicity}${rule.estado_vigencia} ` +
      `Cohortes confirmadas: ${rule.cohortes_confirmadas || "no especificadas"}. ` +
      `Ampliación anunciada: ${rule.ampliacion_anunciada || "no localizada"}. ` +
      `Restricciones/excepciones: ${rule.grupo_excepcional || "no detalladas en la fuente"} ` +
      `Observación: ${rule.notas}`;
    const links = [
      ["territorialSource", "Fuente del rango", rule.fuente_oficial],
      ["territorialPeriodicitySource", "Periodicidad", rule.fuente_periodicidad],
      ["territorialCohortSource", "Cohortes", rule.fuente_cohortes],
    ];
    for (const [id, label, href] of links) {
      const slot = document.getElementById(id);
      slot.replaceChildren();
      if (href) {
        if (id !== "territorialSource") slot.append(document.createTextNode(", "));
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.target = "_blank";
        anchor.rel = "noopener";
        anchor.textContent = id === "territorialSource" ? "Fuente del rango" : `Fuente de ${label.toLowerCase()}`;
        slot.append(anchor);
      } else if (id === "territorialSource") {
        slot.textContent = "Fuente del rango pendiente";
      }
    }
  }
  select.addEventListener("change", draw);
  document.getElementById("territorialInvitation").addEventListener("input", draw);
  document.getElementById("territorialParticipation").addEventListener("input", draw);
  draw();
  document.getElementById("startupNotice").hidden = true;
})();

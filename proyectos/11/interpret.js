/* Copyright (c) 2026 Manuela Ibáñez. MIT applies to original CRABI software; see LICENSE_SCOPE.md. */
"use strict";
const CRABI_INTERPRET = (() => {
  const fmt = (n) => new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 }).format(n);
  const pct = (n) => `${fmt(n)} %`;
  function demographic(x) {
    const added = x.addLow + x.addHigh;
    const ageComparison = x.expanded
      ? x.basePopulation
        ? `El rango ampliado añade ${fmt(added)} residentes de 45–49 y 70–74 años (${pct(added / x.basePopulation * 100)} respecto a 50–69).`
        : `El rango ampliado añade ${fmt(added)} residentes; no se calcula porcentaje porque la población base es cero.`
      : `El rango 50–69 deja fuera ${fmt(added)} residentes de 45–49 y 70–74 frente a 45–74.`;
    return `En ${x.territory}, el rango seleccionado contiene ${fmt(x.population)} mujeres residentes de ${x.expanded ? "45–74" : "50–69"} años a fecha ${x.referenceDate}; no equivale a elegibilidad. ${ageComparison} La fracción incluida de ${pct(x.invitation * 100)} genera ${fmt(x.result.A.invited)} invitaciones hipotéticas; aplicar participación supuesta de ${pct(x.participation * 100)} produce ${fmt(x.result.A.total)} mamografías hipotéticas. El seguimiento supuesto de ${pct(x.followup * 100)} representa ${fmt(x.result.A.followup)} seguimientos equivalentes. Los planes redistribuyen ese mismo total; picos por periodo ${fmt(x.result.A.peak)} (A) y ${fmt(x.result.B.peak)} (B). No son observaciones, demanda ni resultados clínicos.`;
  }
  function territorial({ name, min, max, population, valid }) {
    return valid
      ? `${name}: el rango de escenario documentado es ${min}–${max} años. En ese intervalo hay ${fmt(population)} residentes como referencia demográfica, no elegibilidad. Un anuncio no equivale a implantación vigente. Esto no mide calidad sanitaria ni permite rankings.`
      : `${name}: hay datos demográficos, pero no rango vigente confirmado. El escenario queda pendiente; no significa población cero ni peor desempeño.`;
  }
  return { demographic, territorial };
})();
if (typeof module !== "undefined" && module.exports) module.exports = CRABI_INTERPRET;
if (typeof globalThis !== "undefined") globalThis.CRABI_INTERPRET = CRABI_INTERPRET;

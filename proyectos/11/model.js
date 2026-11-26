/* Copyright (c) 2026 Manuela Ibáñez. MIT applies to original CRABI software; see LICENSE_SCOPE.md. */
"use strict";

const CRABI2 = (() => {
  // Illustrative shares only; these are not official round calendars.
  const plans = Object.freeze({
    A: Object.freeze([0.25, 0.35, 0.40]),
    B: Object.freeze([0.50, 0.35, 0.15]),
  });

  function calculate(population, invitation, participation, followup, capacity) {
    if (!Number.isSafeInteger(population) || population < 0) {
      throw new RangeError("La población debe ser un entero seguro no negativo");
    }
    if (!Number.isSafeInteger(capacity) || capacity < 0) {
      throw new RangeError("El límite por periodo debe ser un entero seguro no negativo");
    }
    for (const [name, value] of [
      ["invitación", invitation],
      ["participación", participation],
      ["valoración", followup],
    ]) {
      if (!Number.isFinite(value) || value < 0 || value > 1) {
        throw new RangeError("Valor no válido: " + name);
      }
    }

    const invited = population * invitation;
    const result = {};
    for (const [plan, weights] of Object.entries(plans)) {
      const periods = weights.map((weight) => ({
        invitations: invited * weight,
        tests: invited * weight * participation,
        followup: invited * weight * participation * followup,
      }));
      result[plan] = {
        periods,
        invited,
        total: invited * participation,
        followup: invited * participation * followup,
        peak: Math.max(...periods.map((period) => period.tests)),
        above: periods.filter((period) => period.tests > capacity).length,
      };
    }
    return result;
  }

  function sensitivity(population, invitation, low, high, followup, capacity) {
    if (low > high) throw new RangeError("El valor mínimo no puede superar al máximo");
    return {
      low: calculate(population, invitation, low, followup, capacity),
      high: calculate(population, invitation, high, followup, capacity),
    };
  }

  function territorialPopulation(ageCounts, rule) {
    if (!rule || rule.uso_escenario !== "si") return null;
    if (!ageCounts || typeof ageCounts !== "object" || Array.isArray(ageCounts)) {
      throw new TypeError("Los conteos demográficos deben ser un objeto por edad simple");
    }
    const min = Number(rule.edad_min_escenario);
    const max = Number(rule.edad_max_escenario);
    if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
      throw new RangeError("El rango territorial no es válido");
    }
    let total = 0;
    for (let age = min; age <= max; age += 1) {
      const count = ageCounts[String(age)];
      if (!Number.isSafeInteger(count) || count < 0) {
        throw new RangeError("Falta un conteo demográfico válido para la edad " + age);
      }
      total += count;
      if (!Number.isSafeInteger(total)) throw new RangeError("La población territorial excede el rango seguro");
    }
    return total;
  }

  return { calculate, sensitivity, territorialPopulation, plans };
})();

if (typeof module !== "undefined" && module.exports) module.exports = CRABI2;

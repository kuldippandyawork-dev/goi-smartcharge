// ======================================
// lib/simulation.ts
// ======================================

import { ChargingStation } from "@/types";

/**
 * The data returned by the simulation engine.
 * In Week 1 this is intentionally simple.
 */
export interface SimulationResult {
  occupiedChargers: number;
  estimatedWaitMinutes: number;
}

/**
 * Simulates the current state of a charging station.
 *
 * Week 1:
 * We simply return the values already stored
 * in our hardcoded test data.
 *
 * Later this function will calculate these
 * values using:
 *
 * - Time of day
 * - Station demand
 * - Holidays
 * - Random variation
 * - Scenario controls
 */
export function simulateStationState(
  station: ChargingStation
): SimulationResult {
  return {
    occupiedChargers: station.occupiedChargers,
    estimatedWaitMinutes: station.estimatedWaitMinutes,
  };
}
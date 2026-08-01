// lib/feasibility.ts

/**
 * Input required to calculate whether a charging
 * station can be reached.
 */
export interface FeasibilityInput {
  batteryCapacityKWh: number;
  currentBatteryPercent: number;
  consumptionKWhPer100Km: number;
  distanceToStationKm: number;
}

/**
 * Result returned by the feasibility engine.
 */
export interface FeasibilityResult {
  usableBatteryKWh: number;
  estimatedRangeKm: number;
  safetyReserveKm: number;
  usableRangeKm: number;
  stationReachable: boolean;
}

/**
 * Safety reserve percentage.
 * We always keep 10% of the estimated range
 * as a buffer so the driver is not left with
 * an empty battery.
 */
const SAFETY_RESERVE_PERCENT = 0.10;

/**
 * Calculates whether a charging station
 * can be reached with the current battery.
 */
export function calculateFeasibility(
  input: FeasibilityInput
): FeasibilityResult {

  // Battery energy currently available
  const usableBatteryKWh =
    input.batteryCapacityKWh *
    (input.currentBatteryPercent / 100);

  // Estimated distance that can be travelled
  const estimatedRangeKm =
    usableBatteryKWh /
    (input.consumptionKWhPer100Km / 100);

  // Keep 10% as a safety buffer
  const safetyReserveKm =
    estimatedRangeKm * SAFETY_RESERVE_PERCENT;

  // Distance that can safely be travelled
  const usableRangeKm =
    estimatedRangeKm - safetyReserveKm;

  // Can the vehicle reach this station?
  const stationReachable =
    input.distanceToStationKm <= usableRangeKm;

  return {
    usableBatteryKWh,
    estimatedRangeKm,
    safetyReserveKm,
    usableRangeKm,
    stationReachable,
  };
}
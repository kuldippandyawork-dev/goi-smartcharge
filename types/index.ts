// ==============================
// Trip Information
// ==============================

export interface Trip {
  origin: string;
  destination: string;
  distanceKm: number;
}

// ==============================
// Vehicle Information
// ==============================

export interface Vehicle {
  rangeKm: number;
  batteryCapacityKWh: number;
  consumptionKWhPer100Km: number;
  currentBatteryPercent: number;
}

// ==============================
// Charging Station
// ==============================

export interface ChargingStation {
  id: string;
  name: string;

  distanceFromOriginKm: number;

  totalChargers: number;
  occupiedChargers: number;

  estimatedWaitMinutes: number;

  detourKm: number;
  chargingTimeMinutes: number;
  estimatedCost: number;
}

// ==============================
// Complete Test Data
// ==============================

export interface TestData {
  trip: Trip;
  vehicle: Vehicle;
  stations: ChargingStation[];
}
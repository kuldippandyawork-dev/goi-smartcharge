import { TestData } from "@/types";

export const testData: TestData = {
  trip: {
    origin: "Ahmedabad",
    destination: "Mumbai",
    distanceKm: 530,
  },

  vehicle: {
    rangeKm: 400,
    batteryCapacityKWh: 50,
    consumptionKWhPer100Km: 15,
    currentBatteryPercent: 80,
  },

  stations: [
    {
      id: "A",
      name: "Station A",

      distanceFromOriginKm: 180,

      totalChargers: 8,
      occupiedChargers: 6,

      estimatedWaitMinutes: 15,

      detourKm: 4,
      chargingTimeMinutes: 25,
      estimatedCost: 420,
    },

    {
      id: "B",
      name: "Station B",

      distanceFromOriginKm: 210,

      totalChargers: 2,
      occupiedChargers: 2,

      estimatedWaitMinutes: 45,

      detourKm: 1,
      chargingTimeMinutes: 30,
      estimatedCost: 410,
    },

    {
      id: "C",
      name: "Station C",

      distanceFromOriginKm: 260,

      totalChargers: 6,
      occupiedChargers: 2,

      estimatedWaitMinutes: 20,

      detourKm: 8,
      chargingTimeMinutes: 22,
      estimatedCost: 430,
    },
  ],
};
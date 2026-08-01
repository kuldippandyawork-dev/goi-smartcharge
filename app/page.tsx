import { testData } from "@/lib/testData";
import { calculateFeasibility } from "@/lib/feasibility";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          GOI SmartCharge - Day 2
        </h1>

        {testData.stations.map((station) => {
          const result = calculateFeasibility({
            batteryCapacityKWh: testData.vehicle.batteryCapacityKWh,
            currentBatteryPercent: testData.vehicle.currentBatteryPercent,
            consumptionKWhPer100Km:
              testData.vehicle.consumptionKWhPer100Km,
            distanceToStationKm: station.distanceFromOriginKm,
          });

          return (
            <div
              key={station.id}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                {station.name}
              </h2>

              <p>
                <strong>Distance:</strong>{" "}
                {station.distanceFromOriginKm} km
              </p>

              <p>
                <strong>Usable Battery:</strong>{" "}
                {result.usableBatteryKWh.toFixed(2)} kWh
              </p>

              <p>
                <strong>Estimated Range:</strong>{" "}
                {result.estimatedRangeKm.toFixed(2)} km
              </p>

              <p>
                <strong>Safety Reserve:</strong>{" "}
                {result.safetyReserveKm.toFixed(2)} km
              </p>

              <p>
                <strong>Usable Range:</strong>{" "}
                {result.usableRangeKm.toFixed(2)} km
              </p>

              <p className="font-semibold">
                Reachable:{" "}
                {result.stationReachable ? "✅ YES" : "❌ NO"}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
import { testData } from "@/lib/testData";
import { calculateFeasibility } from "@/lib/feasibility";
import { simulateStationState } from "@/lib/simulation";

export default function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>GOI SmartCharge - Week 1</h1>

      {testData.stations.map((station) => {
        const feasibility = calculateFeasibility({
          batteryCapacityKWh: testData.vehicle.batteryCapacityKWh,
          currentBatteryPercent: testData.vehicle.currentBatteryPercent,
          consumptionKWhPer100Km:
            testData.vehicle.consumptionKWhPer100Km,
          distanceToStationKm: station.distanceFromOriginKm,
        });

        const simulation = simulateStationState(station);

        return (
          <div
            key={station.id}
            style={{
              marginBottom: "30px",
              padding: "20px",
              border: "1px solid gray",
              borderRadius: "8px",
            }}
          >
            <h2>{station.name}</h2>

            <p>
              <strong>Distance:</strong>{" "}
              {station.distanceFromOriginKm} km
            </p>

            <p>
              <strong>Occupied Chargers:</strong>{" "}
              {simulation.occupiedChargers} / {station.totalChargers}
            </p>

            <p>
              <strong>Estimated Wait:</strong>{" "}
              {simulation.estimatedWaitMinutes} minutes
            </p>

            <hr style={{ margin: "15px 0" }} />

            <p>
              <strong>Usable Battery:</strong>{" "}
              {feasibility.usableBatteryKWh.toFixed(2)} kWh
            </p>

            <p>
              <strong>Estimated Range:</strong>{" "}
              {feasibility.estimatedRangeKm.toFixed(2)} km
            </p>

            <p>
              <strong>Safety Reserve:</strong>{" "}
              {feasibility.safetyReserveKm.toFixed(2)} km
            </p>

            <p>
              <strong>Usable Range:</strong>{" "}
              {feasibility.usableRangeKm.toFixed(2)} km
            </p>

            <p>
              <strong>Reachable:</strong>{" "}
              {feasibility.stationReachable ? "✅ YES" : "❌ NO"}
            </p>
          </div>
        );
      })}
    </main>
  );
}
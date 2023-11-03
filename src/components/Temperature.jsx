import React from "react";

export default function Temperature({ temperature }) {
  // Convert Kelvin to Fahrenheit
  const temperatureInFahrenheit = Math.round(
    ((temperature - 273.15) * 9) / 5 + 32
  );
  return (
    <div className="temperature fs-1 fw-bold">{temperatureInFahrenheit}° F</div>
  );
}

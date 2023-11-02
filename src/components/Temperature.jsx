import React from "react";
import "../styles/Temperature.css";

export default function Temperature({ temperature }) {
  // Convert Kelvin to Fahrenheit
  const temperatureInFahrenheit = Math.round(
    ((temperature - 273.15) * 9) / 5 + 32
  );
  return <div className="temperature">{temperatureInFahrenheit}° F</div>;
}

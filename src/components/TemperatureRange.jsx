import React from "react";

export default function TemperatureRange({ high, low }) {
  return (
    <div className="temperatureRange">
      <p className="fs-6 fw-bold">
        H {high}°<span className="mx-3" >|</span>L {low}°
      </p>
    </div>
  );
}

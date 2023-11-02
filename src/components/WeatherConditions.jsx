import React from "react";

export default function WeatherConditions({ weatherData }) {
  // Make sure weather data is not undefined
  const description =
    weatherData && weatherData.weather && weatherData.weather.length > 0
      ? weatherData.weather[0].description
      : "Loading Weather Conditions";

  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

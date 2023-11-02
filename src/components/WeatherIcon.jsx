import React from "react";
import Lottie from "lottie-react";
// ### Animation Imports  ###
import thunderstormAnimationData from "../animations/thunderstorm.json";
import sunnyAnimationData from "../animations/sunny.json";
import rainAnimationData from "../animations/rain.json";
import cloudyAnimationData from "../animations/cloudy.json";
import snowAnimationData from "../animations/snow.json";

import "../styles/WeatherIcon.css";

export default function WeatherIcon({ weatherCondition }) {
  const lowerCaseConditions = weatherCondition.toLowerCase();

  // Weather Conditions to select from
  const weatherAnimationData = {
    thunderstorm: thunderstormAnimationData,
    rain: rainAnimationData,
    snow: snowAnimationData,
    clouds: cloudyAnimationData,
    sunny: sunnyAnimationData,
    clear: sunnyAnimationData,
  };

  const animationData = weatherAnimationData[lowerCaseConditions];

  return (
    <div className="weather-icon">
      <Lottie animationData={animationData} />
    </div>
  );
}

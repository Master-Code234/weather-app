import React from "react";
import "../styles/Location.css";

export default function Location({ location }) {
  // Convert all text to the same case
  const sameCaseLocation =
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
  return (
    <div className="location">
      <h1 className="location-data">{sameCaseLocation}</h1>
    </div>
  );
}

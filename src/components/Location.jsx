import React from "react";
import "../styles/Location.css";

export default function Location({ location }) {
  return (
    <div className="location">
      <h1 className="location-data">{location}</h1>
    </div>
  );
}

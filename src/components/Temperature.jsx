import React from "react";

export default function Temperature({ temperature }) {
  return <div className="temperature fs-1 fw-bold">{temperature}° F</div>;
}

import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="current-temp">
        {Math.round(props.celsius)}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="current-temp">
        {Math.round(farenheit)}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  }
}

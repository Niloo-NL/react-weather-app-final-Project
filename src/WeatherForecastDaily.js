import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily(props) {
  function maxTemp() {
    return Math.round(props.data.temp.max);
  }
  function minTemp() {
    return Math.round(props.data.temp.min);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="container-forecast">
      <div className="weatherForecast-days">{day()}</div>
      <span className="daily-icons">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </span>

      <div className="weatherForecast-temp">
        <span className="weatherForecast-max">{maxTemp()}°</span>
        <span className="weatherForecast-min">{minTemp()}°</span>
      </div>
    </div>
  );
}

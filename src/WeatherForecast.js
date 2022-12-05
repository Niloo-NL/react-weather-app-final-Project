import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-days">Tus</div>
          <WeatherIcon code="11n" size={36} />

          <div className="weatherForecast-temp">
            <span className="weatherForecast-max">19</span>
            <span className="weatherForecast-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

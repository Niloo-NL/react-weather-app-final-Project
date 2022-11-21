import React from "react";
import "./weather.css";
import Dates from "./Dates";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Dates date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>{" "}
      </ul>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              {" "}
              <img src={props.data.iconUrl} width="100" alt="cloudy" />
            </div>
            <div className="col-6">
              <span className="current-temp">
                {props.data.temperature}
                <span className="unit">°C</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>Precipitaton: 2%</li>
            <li> Humidity: {props.data.humidity}</li>
            <li> Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./weather.css";
import Dates from "./Dates";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Dates date={props.data.date} />
        </li>
        <li className="text-capitalize description">
          {" "}
          {props.data.description}
        </li>{" "}
      </ul>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-1 icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-6">
              <WeatherTemp celsius={props.data.temperature} />
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

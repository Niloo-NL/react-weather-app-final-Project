import React from "react";
import "./weather.css";
import Dates from "./Dates";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col current-info">
          <WeatherTemp celsius={props.data.temperature} />
          {""}
          <span className=" icon">
            <WeatherIcon code={props.data.icon} size={70} />
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-7 ">
          <ul className="day-info">
            <li>
              <Dates date={props.data.date} />
            </li>
            <li className="text-capitalize description">
              {" "}
              {props.data.description}
            </li>{" "}
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li className="info"> Humidity: {props.data.humidity}</li>
            <li className="info"> Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

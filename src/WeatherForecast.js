import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5c245842fe70a2efee1bd472c25f25b9";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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

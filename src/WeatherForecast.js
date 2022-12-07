import React, { useState } from "react";
import WeatherForecastDaily from "./WeatherForecastDaily";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDaily data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5c245842fe70a2efee1bd472c25f25b9";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

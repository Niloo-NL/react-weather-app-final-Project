import axios from "axios";
import React, { useState } from "react";
import "./weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-4">
              <input
                type="search"
                placeholder="Type a City.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Berlin</h1>
        <ul>
          <li> {weatherData.date} </li>
          <li className="text-capitalize"> {weatherData.description}</li>{" "}
        </ul>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-3">
                {" "}
                <img src={weatherData.iconUrl} width="100" alt="cloudy" />
              </div>
              <div className="col-6">
                <span className="current-temp">
                  {weatherData.temperature}
                  <span className="unit">°C</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <ul>
              <li>Precipitaton: 2%</li>
              <li> Humidity: {weatherData.humidity}</li>
              <li> Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5c245842fe70a2efee1bd472c25f25b9";
    let apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

import React from "react";
import "./weather.css";

export default function Weather() {
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
        <li> Wednesday 07:00 </li>
        <li> Mostly Cloudy</li>{" "}
      </ul>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="100"
                alt="cloudy"
              />
            </div>
            <div className="col-6">
              <span className="current-temp">
                29<span className="unit">°C</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>Precipitaton: 2%</li>
            <li> Humidity: 50%</li>
            <li> Wind: 2km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

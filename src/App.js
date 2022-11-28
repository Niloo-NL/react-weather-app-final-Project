import React from "react";
import "./App.css";
import Weather from "./weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="berlin" />
        <footer>
          This project was coded by{" "}
          <a href="/" target="_blank">
            Niloofar Navaiee
          </a>{" "}
          and is an open-source on{" "}
          <a href="/" target="_blank">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

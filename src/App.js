import React from "react";
import Weather from "./weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">║ Weather App ║ </h1>
      <div className="container">
        <Weather defaultCity="berlin" />
      </div>

      <footer>
        This project was coded by{" "}
        <a
          href="https://niloofar-navaiee.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Niloofar Navaiee.L
        </a>{" "}
        and is an open-source on{" "}
        <a
          href="https://github.com/Niloo-NL/react-weather-app-final-Project"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

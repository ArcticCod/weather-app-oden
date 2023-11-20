import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Forecast from "./Forecast";
import Details from "./Details";
import weathercodes from "./WeatherCodes";

export default function WeatherApp({ degreeIsCelsius, weatherData }) {
  const [currentDayIcon, setCurrentDayIcon] = useState({});

  const today = weatherData && weatherData.current;
  const detailsData = {
    wind: weatherData && weatherData.current.wind_mph,
    uv: weatherData && weatherData.current.uv,
    humidity: weatherData && weatherData.current.humidity,
    vis_miles: weatherData && weatherData.current.vis_miles,
    cloud: weatherData && weatherData.current.cloud,
    precip: weatherData && weatherData.current.precip_in,
  };

  useEffect(() => {
    if (weatherData) {
      const dayIcon = weathercodes.find((currentIcon) => {
        if (currentIcon.code === weatherData.current.condition.code) {
          return true;
        }
      });
      setCurrentDayIcon(dayIcon || {});
    }
  }, [weatherData]);

  // {`https:${weatherData.current.condition.icon}`}

  return (
    <div className="main-container">
      <h2 className="title">
        {weatherData && weatherData.location.name},&nbsp;
        {weatherData && weatherData.location.region}
      </h2>

      <div className="current-data">
        <div className="logo-temp">
          <div className="icon">
            {weatherData ? (
              <img
                src={`/weather/64x64/day/${currentDayIcon.icon}.png`}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          {degreeIsCelsius ? (
            <h2>{today && today.temp_c}°&nbsp;C</h2>
          ) : (
            <h2>{today && today.temp_f}°&nbsp;F</h2>
          )}
        </div>
        <p>{today && today.condition.text}</p>
        {degreeIsCelsius ? (
          <p>
            Feels Like: <span>{today && today.feelslike_c}°&nbsp;C</span>
          </p>
        ) : (
          <p>
            Feels Like: <span>{today && today.feelslike_f}°&nbsp;F</span>
          </p>
        )}
      </div>
      <Details detailsData={detailsData} />
      {weatherData && (
        <Forecast
          degreeIsCelsius={degreeIsCelsius}
          city={weatherData.location.name}
        />
      )}
    </div>
  );
}

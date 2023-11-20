import { useEffect, useState } from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast({ degreeIsCelsius, city }) {
  const [forecast, setForecast] = useState();

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=2718ec76742c4379ab135841231711&q=${city}&days=5`,
      )
        .then((res) => res.json())

        .then((res) => {
          console.log(res);
          setForecast(res.forecast);
        });
    }
  }, [city]);
  // console.log(new Date(forecast.location.localtime_epoch * 1000))}

  return (
    <div className="daily-container">
      <div className="forecast-title">Five Day Forecast</div>
      <div className="days">
        {forecast &&
          forecast.forecastday.map((forecastDay) => {
            return (
              <ForecastDay
                key={forecastDay.date}
                degreeIsCelsius={degreeIsCelsius}
                forecastObject={forecastDay}
              />
            );
          })}
      </div>
    </div>
  );
}

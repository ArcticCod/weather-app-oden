import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import WeatherApp from "./Weather";
import Layout from "./Layout";
import defaultObj from "./DefaultObj";

function App() {
  const [weatherData, setWeatherData] = useState(defaultObj);
  const [degreeIsCelsius, setDegreeIsCelsius] = useState(true);
  const [city, setCity] = useState("Dallas");
  const [search, setSearch] = useState("");

  const pngCode = {};

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=2718ec76742c4379ab135841231711&q=${city}`,
    )
      .then((res) => res.json())

      .then((res) => {
        console.log(res);
        setWeatherData(res);
        pngCode.code = res.current.condition.code;
        console.log(res);
      })
      .catch((error) => {
        window.alert("Please Select a City");
        setWeatherData(weatherData);
      });
  }, [city]);

  return (
    <>
      <Layout
        search={search}
        setSearch={setSearch}
        setCity={setCity}
        degreeIsCelsius={degreeIsCelsius}
        setDegreeIsCelsius={setDegreeIsCelsius}
      >
        <WeatherApp
          degreeIsCelsius={degreeIsCelsius}
          weatherData={weatherData}
        />
      </Layout>
    </>
  );
}

export default App;

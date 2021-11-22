import React, { useState, useEffect } from "react";

const WeatherDetails = ({ weather, country }) => {
  useEffect(() => {
    console.log({ weather });
  }, []);

  return (
    <div>
      <h3>Weather in {country.capital[0]}</h3>
      <p>
        <strong>Temperature: </strong>
        {weather.current !== null && weather.current !== undefined
          ? weather.current.temperature
          : ""}{" "}
        Celcius
      </p>
      <img
        src={
          weather.current !== null && weather.current !== undefined
            ? weather.current.weather_icons[0]
            : ""
        }
        alt="weather icon"
      />
      <p>
        <strong>Wind: </strong>{" "}
        {weather.current !== null && weather.current !== undefined
          ? weather.current.wind_speed
          : ""}{" "}
        mph direction{" "}
        {weather.current !== null && weather.current !== undefined
          ? weather.current.wind_dir
          : ""}
      </p>
    </div>
  );
};

WeatherDetails.defaultProps = {
  weather: {
    current: {
      temperature: 404,
      weather_icons: ["404"],
      wind_speed: 404,
      wind_dir: "WSW",
    },
  },
};

export default WeatherDetails;

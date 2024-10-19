import React, { useEffect } from "react";
import { useWeatherRequest } from "../../hooks/weather-request";
import { CITIES } from "../../constants/cities";

export const WeatherWidget = () => {
  const { weatherInfo, getWeather, isLoading, error } = useWeatherRequest();

  useEffect(() => {
    getWeather(CITIES[0]);
  }, []);

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>Error</p>
  }

  if (weatherInfo) {
    return (
      <div>
        <h3>{weatherInfo.name}</h3>
        <h4>{weatherInfo.clouds.all}</h4>
      </div>
    );
  }

  return null;
};

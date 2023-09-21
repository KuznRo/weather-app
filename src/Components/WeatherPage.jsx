import React from "react";
import SearchWeather from "./SearchWeather";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import weather from "../assets/weather3.jpg";
import axios from "axios";
import { useState } from "react";

const API_KEY = "cf67e02053msh2f70e10ab6f30dbp1cbcaajsnfccc7972192d";
const BASE_URL = "weatherapi-com.p.rapidapi.com";

const WeatherPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${weather})`,
    backgroundSize: "cover",
  };

  const [weatherData, setWeatherData] = useState(null);

  const formatTime = (timeString) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return new Date(timeString).toLocaleTimeString(undefined, options);
  };

  const formatDate = (dateString) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchWeatherData = async (city) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: city,
        days: 6,
      },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": `${BASE_URL}`,
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      // Format the weather data here as needed
      if (data) {
        data.location.localtime = formatTime(data.location.localtime);
        data.forecast.forecastday.forEach((dayData) => {
          dayData.date = formatDate(dayData.date);
        });
      }
      console.log("Forecast Weather Data:", data ? data.forecast : "No data available");
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="relative mx-auto max-w-screen-lg mt-4 py-5 px-32 h-fit shadow-2xl shadow-gray-800"
      style={backgroundImageStyle}
    >
      <SearchWeather fetchWeatherData={fetchWeatherData} weatherData={weatherData} />
      <CurrentWeather weatherData={weatherData} />
      <Forecast weatherData={weatherData} />
    </div>
  );
};

export default WeatherPage;

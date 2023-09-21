import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchWeather = ({ fetchWeatherData, weatherData }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            placeholder="Search city or zip code..."
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <FaSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={() => fetchWeatherData(city)}
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{weatherData ? weatherData.location.localtime : '...'} </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium"> {weatherData ? weatherData.location.name : '...'}</p>
      </div>
    </>
  );
};

export default SearchWeather;

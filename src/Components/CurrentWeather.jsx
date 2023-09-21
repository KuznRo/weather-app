import React from 'react'

const CurrentWeather = ({weatherData}) => {

  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-gray-100'>
  <p>{weatherData ? weatherData.current.condition.text : '...'}</p>
</div>
<div className='flex flex-row items-center justify-between text-white py-3'>
  <div>
    <p className='text-xl'>
      feels like: {weatherData ? `${Math.round(weatherData.current.feelslike_f)}°` : '...'}
    </p>
    <p className='text-xl'>humidity: {weatherData ? `${weatherData.current.humidity} %` : '...'}</p>
    <p className='text-xl'>
      wind: {weatherData ? `${Math.round(weatherData.current.wind_mph)} mph` : '...'}
    </p>
    <p className='text-xl'>uv index: {weatherData ? `${weatherData.current.uv}` : '...'}</p>
  </div>
  <p className='text-gray-100 text-6xl font-semibold my-2'>
    {weatherData ? `${Math.round(weatherData.current.temp_f)}°` : '...'}
  </p>
  <div>
    <p className='text-xl'>
      max temp: {weatherData ? `${Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f)}°` : '...'}
    </p>
    <p className='text-xl'>
      min temp: {weatherData ? `${Math.round(weatherData.forecast.forecastday[0].day.mintemp_f)}°` : '...'}
    </p>
    <p className='text-xl'>
      sunrise: {weatherData ? weatherData.forecast.forecastday[0].astro.sunrise : '...'}
    </p>
    <p className='text-xl'>
      sunset: {weatherData ? weatherData.forecast.forecastday[0].astro.sunset : '...'}
    </p>
  </div>
</div>

            
    </div>
  )
}

export default CurrentWeather
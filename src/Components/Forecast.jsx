import React from 'react';

const Forecast = ({ weatherData }) => {
  const daysToRender = weatherData ? weatherData.forecast.forecastday.slice(1, 3) : [];

  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>Daily Forecast</p>
      </div>
      <hr className='my-2'></hr>
      <div className='flex flex-row items-center justify-between text-white'>
        {daysToRender.map((dayData, index) => (
          <div key={index} className='flex flex-col items-center justify-center my-4'>
            <p className='font-light text-lg'> {dayData.date}</p>
            <p className='font-medium'> {Math.round(dayData.day.avgtemp_f)}&deg;F</p>
            <p className='font-medium'>{dayData.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

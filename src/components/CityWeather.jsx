import { useEffect, useState } from 'react';

const key = '439b27d456e30f87ad15fc5e859be8ee';

const CityWeather = ({ city }) => {  
 
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        const data = await response.json();
        
        //se la città non viene trovata
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        
        setWeather(data); // Aggiorna stato 
      } catch (error) {
        setError(error.message); 
      }
    };

    fetchWeather();
  }, [city]); 
  
  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  return (
    <div className="container my-5 bg-white opacity-75 rounded shadow ">
      <h1 className="text-center mb-4">Today Weather</h1>
      {weather ? (
        <div className="row">
          
          <div className="col-6">
            <h2>{weather.name}</h2> 
            <p className="display-4">{weather.main.temp.toFixed(0)}°C</p> 
            <img 
              className="img-fluid my-3" 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
              alt={weather.weather[0].description} 
            /> 
            <p>{weather.weather[0].description}</p> 
          </div>

          <div className="col-6">
            <h3>Additional Details</h3>
            <p><strong>Humidity:</strong> {weather.main.humidity}%</p> 
            <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p> 
            <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p> 
          </div>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default CityWeather;

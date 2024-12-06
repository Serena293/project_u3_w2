import { useEffect, useState } from 'react';

const key = '439b27d456e30f87ad15fc5e859be8ee';

const CityWeather = () => {
  // Stato per memorizzare i dati del meteo
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Afragola&appid=${key}&units=metric`);
        const data = await response.json();
        
        //se la città non viene trovata
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        
        setWeather(data); // Aggiorna stato con 
      } catch (error) {
        setError(error.message); 
      }
    };

    fetchWeather();
  }, []); // array vuoto per non far ripartire tutto
  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Weather Information</h1>
      {weather ? (
        <div className="row">
          
          <div className="col-6">
            <h2>{weather.name}</h2> 
            <p className="display-4">{weather.main.temp}°C</p> 
            <img 
              className="img-fluid my-3" 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
              alt={weather.weather[0].description} 
            /> 
            <p>{weather.weather[0].description}</p> 
          </div>

          {/* Seconda colonna: informazioni aggiuntive */}
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
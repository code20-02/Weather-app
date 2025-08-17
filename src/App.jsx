import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Search from './Search.jsx'
import Weather from './weather.jsx'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_OWM_API_KEY;

  useEffect(() => {
    if (city && API_KEY) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => setWeatherData(response.data))
        .catch(error => console.error('Error fetching weather:', error));
    }
  }, [city]);

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div className="App">
      <h1 className="wave-text">WEATHER APP</h1>
      <Search onSearch={handleSearch} />
      <Weather data={weatherData} />
    </div>
  )
};

  
export default App

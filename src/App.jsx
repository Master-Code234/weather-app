import "../src/styles/App.css";
import SearchBar from "./components/SearchBar";
import Location from "./components/Location";
import Temperature from "./components/Temperature";
import WeatherIcon from "./components/WeatherIcon";
import WeatherConditions from "./components/WeatherConditions";
import TemperatureRange from "./components/TemperatureRange";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "./services/weather-api";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("texas"); // Default location
  const [error, setError] = useState(null);

  const handleSearch = (newLocation) => {
    setLocation(newLocation);
  };

  useEffect(() => {
    // Make an API request
    fetchWeatherData(location)
      .then((data) => setWeatherData(data))
      .catch((error) => {
        setError(error.message);
      });
  }, [location]);

  // Determine weather condition based on weatherData
  const weatherCondition = weatherData ? weatherData.weather[0].main : "";

  // Convert Kelvin to Fahrenheit
  const kelvinToFahrenheit = (temp) => {
    return Math.round((temp - 273.15) * 1.8 + 32);
  };

  return (
    <div className="app container mt-5">
      <header className="d-flex align-items-start bg-dark bg-gradient p-2">
        <SearchBar onSearch={handleSearch} />
      </header>

      <main className=" main d-flex flex-column align-items-center justify-content-center shadow-sm bg-light bg-gradient rounded-bottom custom-height">
        <Location location={location} />
        <WeatherIcon weatherCondition={weatherCondition} />
        {weatherData ? (
          <>
            <Temperature
              temperature={kelvinToFahrenheit(weatherData.main.temp)}
            />
            <WeatherConditions weatherData={weatherData} />

            <TemperatureRange
              high={kelvinToFahrenheit(weatherData.main.temp_max)}
              low={kelvinToFahrenheit(weatherData.main.temp_min)}
            />
          </>
        ) : (
          <div>Loading Weather...</div>
        )}
      </main>
    </div>
  );
}

export default App;

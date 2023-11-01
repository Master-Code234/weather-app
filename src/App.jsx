import "../src/styles/App.css";
import SearchBar from "./components/SearchBar";
import Location from "./components/Location";
import Temperature from "./components/Temperature";
import WeatherIcon from "./components/WeatherIcon";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "./services/weather-api";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("texas");

  const handleSearch = (newLocation) => {
    setLocation(newLocation);
  };

  useEffect(() => {
    // Make an API request
    fetchWeatherData(location)
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, [location]);

  return (
    <div className="app">
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main>
        <Location location={location} />
        <WeatherIcon />
        {weatherData ? (
          <Temperature temperature={weatherData.main.temp} />
        ) : (
          <div>Loading Weather...</div>
        )}
      </main>
    </div>
  );
}

export default App;

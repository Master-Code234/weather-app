import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherData(location) {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${location}&appid=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error fetching weather data.");
    }
  } catch (error) {
    throw error;
  }
}

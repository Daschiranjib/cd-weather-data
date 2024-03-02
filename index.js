import axios from 'axios';
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const getWeatherData = async (city) => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=432a9cc52fe374a8bf0f61066485bc10`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    const temperatureCelsius = kelvinToCelsius(weatherData.main.temp);
    // Return the weather details
    return {
      city,
      temperature: `${temperatureCelsius.toFixed(2)}°C`,
      weatherCondition: weatherData.weather[0].description,
      humidity: `${weatherData.main.humidity}%`,
    };
  } catch (error) {
    // If an error occurs, throw it or handle it accordingly
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};

export { getWeatherData };
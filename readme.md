# CD Weather Data

Welcome to CD Weather Data, a Node.js module for retrieving weather information using the OpenWeatherMap API.

## Installation

To use this weather module in your Node.js project, you need to install it via npm:

```bash
npm i cd-weather-data
```
## How to use
import { getWeatherData } from 'cd-weather-data';

const city = 'Delhi'; // Replace with the city you want to get the weather for

// Call the weather module function
getWeatherData(city)
  .then(weatherDetails => {
    console.log('Weather Details:', weatherDetails);
  })
  .catch(error => {
    console.error(error.message);
  });
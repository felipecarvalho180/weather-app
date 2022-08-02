import axios from 'axios';
import { Weather, WeatherInterface } from '../../models/weather/weather.model';

interface GetWeatherProps {
  latitude: number;
  longitude: number;
}

const { REACT_APP_OPEN_WEATHER_KEY } = process.env;

export async function getWeather({ latitude, longitude }: GetWeatherProps) {
  const response = await axios.get<WeatherInterface>(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=metric&exclude=hourly,minutely`,
  );

  const { current, daily } = response.data;

  return Weather({
    current,
    daily,
  });
}

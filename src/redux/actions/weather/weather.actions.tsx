import { WeatherResponse } from '../../../models/weather/weather.model';

const standardAction = 'WEATHER::';

export const UPDATE_WEATHER = `${standardAction}UPDATE_USER_GEOCODE`;

export const updateWeather = (weather: WeatherResponse) => ({
  type: UPDATE_WEATHER,
  payload: {
    weather,
  },
});

import { WeatherResponse } from '../../../models/weather/weather.model';
import { UPDATE_WEATHER } from '../../actions/weather/weather.actions';

interface WeatherReducerProps {
  type: string;
  payload: {
    weather?: WeatherResponse;
  };
}

const initialState = {};

export const weatherReducer = (
  state = initialState,
  { type, payload }: WeatherReducerProps,
) => {
  switch (type) {
    case UPDATE_WEATHER:
      return payload.weather;
    default:
      return state;
  }
};

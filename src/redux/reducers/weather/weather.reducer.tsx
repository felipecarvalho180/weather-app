import {
  CurrentResponse,
  DailyResponse,
} from '../../../models/weather/weather.model';
import { UPDATE_WEATHER } from '../../actions/weather/weather.actions';

export interface WeatherReducer {
  current: CurrentResponse;
  daily: DailyResponse[];
}
interface WeatherReducerProps {
  type: string;
  payload: {
    weather?: WeatherReducer;
  };
}

const initialState = {};

export const weatherReducer = (
  state = initialState,
  { type, payload }: WeatherReducerProps,
) => {
  switch (type) {
    case UPDATE_WEATHER:
      return {
        ...payload.weather,
      };
    default:
      return state;
  }
};

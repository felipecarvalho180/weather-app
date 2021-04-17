import { combineReducers } from 'redux';
import { ErrorReducer, errorReducer } from './error/error.reducer';
import { LoadingReducer, loadingReducer } from './loading/loading.reducer';
import { UserReducer, userReducer } from './user/user.reducer';
import { WeatherReducer, weatherReducer } from './weather/weather.reducer';

export interface RootState {
  user: UserReducer;
  loading: LoadingReducer;
  weather: WeatherReducer;
  error: ErrorReducer;
}

export const Reducers = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  weather: weatherReducer,
  error: errorReducer,
});

import { combineReducers } from 'redux';
import { errorReducer } from './error/error.reducer';
import { loadingReducer } from './loading/loading.reducer';
import { userReducer } from './user/user.reducer';
import { weatherReducer } from './weather/weather.reducer';

export const Reducers = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  weather: weatherReducer,
  error: errorReducer,
});

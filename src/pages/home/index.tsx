import React from 'react';
import { useSelector } from 'react-redux';
import { ContentWrapper, DailyWrapper, Wrapper } from './style';
import { DailyResponse } from '../../models/weather/weather.model';
import Location from '../../components/location';
import CurrentWeather from '../../components/current-weather';
import CheckWeatherButton from '../../components/check-weather-button';
import DailyWeather from '../../components/daily-weather';
import { RootState } from '../../redux/reducers';

const App: React.FC = () => {
  const { current, daily, geocode, loading } = useSelector(
    (state: RootState) => ({
      current: state.weather.current,
      daily: state.weather.daily,
      geocode: state.user.geocode,
      loading: state.loading,
    }),
  );

  return (
    <Wrapper>
      {(!current || !daily || !geocode) && <CheckWeatherButton />}
      {current && daily && geocode && !loading && (
        <ContentWrapper>
          <Location {...geocode} />
          <CurrentWeather {...current} />
          <DailyWrapper>
            {daily
              .map((day: DailyResponse) => (
                <DailyWeather key={day.dataTime} {...day} />
              ))
              .slice(1)}
          </DailyWrapper>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default App;

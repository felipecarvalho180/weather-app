import React from 'react';
import CurrentWeather from '../../components/current-weather';
import { Sidebar } from '../../components/sidebar';
// import { useSelector } from 'react-redux';
import { ContentWrapper, Title, Wrapper } from './style';
// import { DailyResponse } from '../../models/weather/weather.model';
// import Location from '../../components/location';
// import CurrentWeather from '../../components/current-weather';
// import CheckWeatherButton from '../../components/check-weather-button';
// import DailyWeather from '../../components/daily-weather';
// import { RootState } from '../../redux/reducers';

const App: React.FC = () => (
  // const { current, daily, geocode, loading } = useSelector(
  //   (state: RootState) => ({
  //     current: state.weather.current,
  //     daily: state.weather.daily,
  //     geocode: state.user.geocode,
  //     loading: state.loading,
  //   }),
  // );

  <Wrapper>
    <ContentWrapper>
      <Title>Weather App</Title>

      {/* {current && <CurrentWeather {...current} />} */}
    </ContentWrapper>
    <Sidebar />
    {/* {(!current || !daily || !geocode) && <CheckWeatherButton />} */}
    {/* {current && daily && geocode && !loading && (
        <ContentWrapper>
          <Location {...geocode} />
          <DailyWrapper>
            {daily
              .map((day: DailyResponse) => (
                <DailyWeather key={day.dataTime} {...day} />
              ))
              .slice(1)}
          </DailyWrapper>
        </ContentWrapper>
      )} */}
  </Wrapper>
);
export default App;

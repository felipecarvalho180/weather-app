import React, { useEffect, useState } from 'react';
import { getGeocode } from '../../services/geocode/geocode.service';
import { getWeather } from '../../services/weather/weather.service';
import { ContentWrapper, Wrapper } from './style';
import {
  DailyResponse,
  WeatherResponse,
} from '../../models/weather/weather.model';
import { GeocodeResponse } from '../../models/geocode/geocode.model';
import Location from '../../components/location';
import CurrentWeather from '../../components/current-weather';
import PermissionError from '../../components/permission-error';
import CheckWeatherButton from '../../components/check-weather-button';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import DailyWeather from '../../components/daily-weather';

const App: React.FC = () => (
  <Wrapper>
    {/* {!weather && !geocode && ( */}
    <ColumnWrapper>
      <CheckWeatherButton />
      {/* <PermissionError active={geolocationPositionError} /> */}
    </ColumnWrapper>
    {/* )} */}
    {/* {weather && geocode && (
      <ContentWrapper>
        <Location {...geocode} />
        <CurrentWeather {...weather.current} />
        <InlineWrapper>
          {weather.daily
            .map((day: DailyResponse) => (
              <DailyWeather key={day.dataTime} {...day} />
            ))
            .slice(1)}
        </InlineWrapper>
      </ContentWrapper>
    )} */}
  </Wrapper>
);

export default App;

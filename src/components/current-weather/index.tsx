import React from 'react';

import { GeocodeResponse } from '../../models/geocode/geocode.model';
import { CurrentResponse } from '../../models/weather/weather.model';
import { ColumnWrapper } from '../../style/components';
import { TextLabel, TitleLabel } from '../../style/labels';
import { TempLabel, WeatherIcon, Wrapper } from './style';

const CurrentWeather: React.FC<CurrentResponse & GeocodeResponse> = ({
  temp,
  weatherIcon,
  city,
}: CurrentResponse & GeocodeResponse) => (
  <Wrapper>
    <TempLabel>{Math.round(temp)}º</TempLabel>
    <ColumnWrapper>
      <TitleLabel>{city}</TitleLabel>
      <TextLabel>{new Date().toDateString()}</TextLabel>
    </ColumnWrapper>
    <WeatherIcon
      src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt="Icone temperatura"
    />
  </Wrapper>
);

export default CurrentWeather;

import React from 'react';
import { format } from 'date-fns';

import { GeocodeResponse } from '../../models/geocode/geocode.model';
import { CurrentResponse } from '../../models/weather/weather.model';
import { ColumnWrapper } from '../../style/components';
import { TextLabel, TitleLabel } from '../../style/labels';
import { TempLabel, WeatherIcon, Wrapper } from './styles';

const CurrentWeather: React.FC<CurrentResponse & GeocodeResponse> = ({
  temp,
  weatherIcon,
  city,
}: CurrentResponse & GeocodeResponse) => (
  <Wrapper>
    <TempLabel>{Math.round(temp)}º</TempLabel>
    <ColumnWrapper>
      <TitleLabel>{city}</TitleLabel>
      <TextLabel>{format(new Date(), "EEEE', 'MMM d', 'yyyy")}</TextLabel>
    </ColumnWrapper>
    <WeatherIcon
      src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt="Icone temperatura"
    />
  </Wrapper>
);

export default CurrentWeather;

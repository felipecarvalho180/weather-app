import React from 'react';
import { CurrentResponse } from '../../models/weather/weather.model';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { Label } from '../../style/labels';
import {
  Subtitles,
  SubtitlesWrapper,
  TempLabel,
  WeatherIcon,
  Wrapper,
} from './style';

const CurrentWeather: React.FC<CurrentResponse> = ({
  temp,
  dataTime,
  feelsLike,
  humidity,
  weatherIcon,
}: CurrentResponse) => (
  <Wrapper>
    <InlineWrapper>
      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="Icone temperatura"
      />
      <TempLabel>{Math.round(temp)}ºC</TempLabel>
    </InlineWrapper>
    <ColumnWrapper>
      <InlineWrapper>
        <Subtitles>Feels like {Math.round(feelsLike)}ºC</Subtitles>
        <Subtitles>Humidity {humidity}%</Subtitles>
      </InlineWrapper>
      <Label>Updated {new Date(dataTime * 1000).toLocaleTimeString()}</Label>
    </ColumnWrapper>
  </Wrapper>
);

export default CurrentWeather;

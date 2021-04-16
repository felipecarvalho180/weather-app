import React from 'react';
import { CurrentResponse } from '../../models/weather/weather.model';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { Label } from '../../style/labels';
import { Subtitles, SubtitleWrapper, TempLabel, WeatherIcon } from './style';

const CurrentWeather: React.FC<CurrentResponse> = ({
  temp,
  dataTime,
  feelsLike,
  humidity,
  weatherIcon,
}: CurrentResponse) => (
  <ColumnWrapper>
    <InlineWrapper>
      <ColumnWrapper>
        <TempLabel>{Math.round(temp)}ºC</TempLabel>
        <Label>Updated {new Date(dataTime * 1000).toLocaleTimeString()}</Label>
      </ColumnWrapper>
      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="Icone temperatura"
      />
    </InlineWrapper>
    <SubtitleWrapper>
      <Subtitles>Feels like {Math.round(feelsLike)}</Subtitles>
      <Subtitles>Humidity {humidity}%</Subtitles>
    </SubtitleWrapper>
  </ColumnWrapper>
);

export default CurrentWeather;

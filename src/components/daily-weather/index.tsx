import React from 'react';
import { DailyResponse } from '../../models/weather/weather.model';
import { InlineWrapper } from '../../style/components';
import { ContentWrapper, PrimaryLabel, SecondaryLabel, Wrapper } from './style';

const DailyWeather: React.FC<DailyResponse> = ({
  dataTime,
  tempMax,
  tempMin,
  weatherIcon,
}: DailyResponse) => (
  <Wrapper>
    <ContentWrapper>
      <PrimaryLabel>
        {new Date(dataTime * 1000).toDateString().substr(0, 3)}
      </PrimaryLabel>
      <InlineWrapper>
        <PrimaryLabel>{Math.round(tempMax)}º/</PrimaryLabel>
        <SecondaryLabel>{Math.round(tempMin)}º</SecondaryLabel>
      </InlineWrapper>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="Icone temperatura"
      />
    </ContentWrapper>
  </Wrapper>
);

export default DailyWeather;

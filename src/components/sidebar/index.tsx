import React from 'react';

import { useWeather } from '../../hooks/useWeather';
import { DailyResponse } from '../../models/weather/weather.model';
import DailyWeather from '../DayCard';
import { Content, Wrapper } from './styles';

export function Sidebar() {
  const { weather } = useWeather();

  return (
    <Wrapper>
      <Content>
        {weather &&
          weather.daily
            .map((day: DailyResponse) => (
              <DailyWeather key={day.dataTime} {...day} />
            ))
            .slice(1)}
      </Content>
    </Wrapper>
  );
}

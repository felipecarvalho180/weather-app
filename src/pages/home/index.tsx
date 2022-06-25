import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from 'styled-components';

import CurrentWeather from '../../components/current-weather';
import { Sidebar } from '../../components/sidebar';
import { useGeocode } from '../../hooks/useGeocode';
import { useWeather } from '../../hooks/useWeather';
import { InlineWrapper } from '../../style/components';
import { TitleLabel } from '../../style/labels';
import { ContentWrapper, Loading, Title, Wrapper } from './style';

const App: React.FC = () => {
  const theme = useTheme();
  const { weather, loading } = useWeather();
  const { geocode } = useGeocode();

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Weather App</Title>

        {loading && (
          <Loading>
            <TitleLabel>Loading</TitleLabel>
            <PulseLoader color={theme.colors.white} loading size={8} />
          </Loading>
        )}

        {weather && geocode && weather.current && !loading && (
          <CurrentWeather {...weather.current} {...geocode} />
        )}
      </ContentWrapper>
      <Sidebar />
      {/* {current && daily && geocode && !loading && (
      <ContentWrapper>
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
};
export default App;

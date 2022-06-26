import { Warning } from 'phosphor-react';
import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from 'styled-components';

import CurrentWeather from '../../components/CurrentWeather';
import { Sidebar } from '../../components/Sidebar';
import { useGeocode } from '../../hooks/useGeocode';
import { useWeather } from '../../hooks/useWeather';
import { ColumnWrapper } from '../../style/components';
import { DescriptionLabel, TitleLabel } from '../../style/labels';
import { ContentWrapper, Loading, Title, Wrapper } from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const { weather, loading, getUserLocation, geocodeNotAllowed } = useWeather();
  const { geocode } = useGeocode();

  return (
    <Wrapper weatherCode={weather?.current?.weatherIcon}>
      <ContentWrapper>
        <Title>Weather App</Title>

        {geocodeNotAllowed && (
          <ColumnWrapper>
            <Warning size={32} color={theme.colors.white} />
            <DescriptionLabel>Your location blocked</DescriptionLabel>
          </ColumnWrapper>
        )}

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
    </Wrapper>
  );
};
export default Home;

import { Warning } from 'phosphor-react';
import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

import CurrentWeather from '../../components/CurrentWeather';
import { Sidebar } from '../../components/Sidebar';
import { useGeocode } from '../../hooks/useGeocode';
import { useWeather } from '../../hooks/useWeather';
import { DescriptionLabel, TitleLabel } from '../../style/labels';
import {
  ContentWrapper,
  GeocodeNotAllowedWrapper,
  Loading,
  Title,
  Wrapper,
} from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const { weather, loading, getUserLocation, geocodeNotAllowed } = useWeather();
  const { geocode } = useGeocode();

  return (
    <Wrapper weatherCode={weather?.current?.weatherIcon}>
      <ContentWrapper>
        <Title>Weather App</Title>

        {geocodeNotAllowed && !loading && (
          <GeocodeNotAllowedWrapper>
            <Warning size={40} color={theme.colors.white} />
            <DescriptionLabel>
              It was not possible to get your location, to proceed enter your
              browser's privacy and security settings and allow access to your
              location.
            </DescriptionLabel>
            <Button title="Try again" onClick={getUserLocation} />
          </GeocodeNotAllowedWrapper>
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

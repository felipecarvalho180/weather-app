import { observer } from 'mobx-react';
import { Warning } from 'phosphor-react';
import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

import CurrentWeather from '../../components/CurrentWeather';
import { Sidebar } from '../../components/Sidebar';
import { useWeather } from '../../hooks/useWeather';
import { DescriptionLabel, TitleLabel } from '../../style/labels';
import { useStores } from '../../utils/hooks/useStores';
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
  const { geocode } = useStores();

  return (
    <Wrapper
      weatherCode={
        weather?.current?.weatherIcon !== '01n'
          ? weather?.current?.weatherDescription
          : 'clear night'
      }
    >
      <ContentWrapper>
        <Title>Weather App</Title>

        <button
          type="button"
          onClick={() =>
            geocode.changeGeocode({
              coords: {
                latitude: -23.047144,
                longitude: -44.4958137,
              },
            })
          }
        >
          Teste
        </button>

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
          <CurrentWeather {...weather.current} {...geocode.geocodeData} />
        )}
      </ContentWrapper>
      <Sidebar />
    </Wrapper>
  );
};
export default observer(Home);

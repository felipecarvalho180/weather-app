import React, { useEffect, useState } from 'react';
import { getGeocode } from '../../services/geocode/geocode.service';
import { getWeather } from '../../services/weather/weather.service';
import { Wrapper } from './style';

interface GeoCode {
  city: string;
  state: string;
}

const App: React.FC = () => {
  const [userGeolocation, setUserGeolication] = useState<GeolocationPosition>();
  const [
    geolocationPositionError,
    setGeolocationPositionError,
  ] = useState<boolean>();
  const [geocode, setGeocode] = useState<GeoCode>();

  async function getUserGeolocation() {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position: GeolocationPosition) => setUserGeolication(position),
      () => setGeolocationPositionError(true),
    );
  }

  async function handleGetWeather() {
    if (!userGeolocation) return;
    const { latitude, longitude } = userGeolocation.coords;
    await getWeather({ latitude, longitude });
  }

  async function handleGet() {
    if (!userGeolocation) return;
    const { latitude, longitude } = userGeolocation.coords;
    const response = await getGeocode({ latitude, longitude });
    setGeocode(response);
  }

  useEffect(() => {
    if (!userGeolocation) return;

    handleGetWeather();
    handleGet();
  }, [userGeolocation]);

  return (
    <Wrapper>
      {geolocationPositionError && (
        <p>
          Não foi possivel pegar sua localização, para prosseguir entre nas
          configurações de privacidade e segurança do seu navegador e libere o
          acesso a sua localização.
        </p>
      )}
      {userGeolocation && (
        <div>
          <p>
            <strong>Latitude</strong> {userGeolocation.coords.latitude}
          </p>
          <p>
            <strong>Longitude</strong> {userGeolocation.coords.longitude}
          </p>
        </div>
      )}
      {geocode && (
        <p>
          {geocode.city}, {geocode.state}
        </p>
      )}
      <button type="button" onClick={getUserGeolocation}>
        Pegar localização
      </button>
    </Wrapper>
  );
};

export default App;

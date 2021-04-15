import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BasicTitle = styled.h1`
  color: blue;
`;

const App: React.FC = () => {
  const { REACT_APP_OPEN_WEATHER_KEY, REACT_APP_OPEN_CAGE_KEY } = process.env;

  const [userGeolocation, setUserGeolication] = useState<GeolocationPosition>();
  const [
    geolocationPositionError,
    setGeolocationPositionError,
  ] = useState<boolean>();

  async function getUserGeolocation() {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position: GeolocationPosition) => setUserGeolication(position),
      () => setGeolocationPositionError(true),
    );
  }

  async function getWeather() {
    if (!userGeolocation) return;

    const { latitude, longitude } = userGeolocation.coords;

    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=metric&exclude=hourly,minutely`,
    );

    await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${REACT_APP_OPEN_CAGE_KEY}`,
    );
  }

  useEffect(() => {
    if (!userGeolocation) return;
    getWeather();
  }, [userGeolocation]);

  return (
    <div>
      <BasicTitle>Basic React App</BasicTitle>
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
      <button type="button" onClick={getUserGeolocation}>
        Pegar localização
      </button>
    </div>
  );
};

export default App;

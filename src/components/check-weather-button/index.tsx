import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateErrorStatus } from '../../redux/actions/error/error.actions';
import { updateUserGeocode } from '../../redux/actions/user/user.actions';
import { updateWeather } from '../../redux/actions/weather/weather.actions';
import { getGeocode } from '../../services/geocode/geocode.service';
import { getWeather } from '../../services/weather/weather.service';
import Button from '../button';
import Logo from '../logo';
import { Wrapper } from './style';

const CheckWeatherButton: React.FC = () => {
  const dispatch = useDispatch();

  const [userGeolocation, setUserGeolication] = useState<GeolocationPosition>();

  async function handleGetUserGeolocation() {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setUserGeolication(position);
        dispatch(updateErrorStatus(false));
      },
      () => dispatch(updateErrorStatus(true)),
    );
  }

  async function handleGetGeocode() {
    if (!userGeolocation) return;
    const { latitude, longitude } = userGeolocation.coords;
    const response = await getGeocode({ latitude, longitude });
    dispatch(updateUserGeocode(response));
  }

  async function handleGetWeather() {
    if (!userGeolocation) return;
    const { latitude, longitude } = userGeolocation.coords;
    const response = await getWeather({ latitude, longitude });
    dispatch(updateWeather(response));
    handleGetGeocode();
  }

  useEffect(() => {
    if (!userGeolocation) return;
    handleGetWeather();
  }, [userGeolocation]);

  return (
    <Wrapper>
      <Logo />
      <Button
        type="button"
        onClick={handleGetUserGeolocation}
        text="Check Weather Forecast"
      />
    </Wrapper>
  );
};

export default CheckWeatherButton;

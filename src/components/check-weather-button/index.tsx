import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateErrorStatus } from '../../redux/actions/error/error.actions';
import { updateLoading } from '../../redux/actions/loading/loading.actions';
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
        dispatch(
          updateErrorStatus({
            errorStatus: false,
          }),
        );
      },
      () =>
        dispatch(
          updateErrorStatus({
            errorStatus: true,
            errorMessage: `It was not possible to get your location, to proceed enter your
        browser's privacy and security settings and allow access to your
        location.`,
          }),
        ),
    );
  }

  async function handleGetGeocode() {
    if (!userGeolocation) return;

    const { latitude, longitude } = userGeolocation.coords;

    let response;
    try {
      response = await getGeocode({ latitude, longitude });
    } catch (error) {
      dispatch(
        updateErrorStatus({
          errorStatus: true,
          errorMessage: 'Error accessing your location.',
        }),
      );
      return;
    } finally {
      dispatch(updateLoading(false));
    }

    dispatch(updateUserGeocode(response));
  }

  async function handleGetWeather() {
    if (!userGeolocation) return;

    dispatch(updateLoading(true));

    const { latitude, longitude } = userGeolocation.coords;

    let response;
    try {
      response = await getWeather({ latitude, longitude });
    } catch (error) {
      dispatch(
        updateErrorStatus({
          errorStatus: true,
          errorMessage: 'Error accessing weather forecast.',
        }),
      );
      dispatch(updateLoading(false));
      return;
    }

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

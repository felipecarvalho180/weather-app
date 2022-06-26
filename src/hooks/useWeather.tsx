/* eslint-disable no-debugger */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from '../components/Toast';

import {
  CurrentResponse,
  DailyResponse,
} from '../models/weather/weather.model';
import { getWeather } from '../services/weather/weather.service';
import { useGeocode } from './useGeocode';

interface Weather {
  current: CurrentResponse;
  daily: DailyResponse[];
}

interface WeatherContextData {
  weather: Weather | undefined;
  geocodeNotAllowed: boolean;
  loading: boolean;
  getUserLocation: () => void;
}

interface WeatherProviderProps {
  children: ReactNode;
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData,
);

function WeatherProvider({ children }: WeatherProviderProps) {
  const { handleGetGeocode } = useGeocode();

  const [weather, setWeather] = useState<Weather>();
  const [geocodeNotAllowed, setGeocodeNotAllowed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  async function handleGetWeather(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;

    try {
      const response = await getWeather({ latitude, longitude });
      setWeather(response);

      await handleGetGeocode(position);
    } catch (error) {
      toast({ message: 'Error accessing weather forecast' });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const getUserLocation = useCallback(() => {
    setLoading(true);
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        handleGetWeather(position);
        setGeocodeNotAllowed(false);
      },
      () => {
        setGeocodeNotAllowed(true);
        setLoading(false);
      },
    );
  }, []);

  useEffect(() => {
    if (weather) return;

    getUserLocation();
  }, []);

  return (
    <WeatherContext.Provider
      value={{ weather, geocodeNotAllowed, loading, getUserLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather(): WeatherContextData {
  const context = useContext(WeatherContext);

  return context;
}

export { WeatherProvider, useWeather };

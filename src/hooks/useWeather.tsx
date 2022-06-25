/* eslint-disable no-debugger */
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from '../components/toast';

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

  useEffect(() => {
    if (weather) return;
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        handleGetWeather(position);
      },
      () => {
        setGeocodeNotAllowed(true);
        setLoading(false);
      },
    );
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, geocodeNotAllowed, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather(): WeatherContextData {
  const context = useContext(WeatherContext);

  return context;
}

export { WeatherProvider, useWeather };

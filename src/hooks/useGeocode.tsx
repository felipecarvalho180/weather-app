import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import toast from '../components/Toast';
import { getGeocode } from '../services/geocode/geocode.service';

interface Geocode {
  city: string;
  state: string;
}

interface GeocodeContextData {
  geocode: Geocode;
  handleGetGeocode: (position: GeolocationPosition) => void;
}

interface GeocodeProviderProps {
  children: ReactNode;
}

const GeocodeContext = createContext<GeocodeContextData>(
  {} as GeocodeContextData,
);

function GeocodeProvider({ children }: GeocodeProviderProps) {
  const [geocode, setGeocode] = useState<Geocode>({} as Geocode);

  const handleGetGeocode = useCallback(
    async ({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;

      try {
        const response = await getGeocode({ latitude, longitude });

        setGeocode(response);
      } catch (error) {
        toast({ message: 'Error accessing your location' });
      }
    },
    [],
  );

  return (
    <GeocodeContext.Provider value={{ geocode, handleGetGeocode }}>
      {children}
    </GeocodeContext.Provider>
  );
}

function useGeocode(): GeocodeContextData {
  const context = useContext(GeocodeContext);

  return context;
}

export { GeocodeProvider, useGeocode };

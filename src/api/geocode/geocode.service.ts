import axios from 'axios';
import { Geocode, GeocodeInterface } from '../../models/geocode/geocode.model';

interface GetGeocodeProps {
  latitude: number;
  longitude: number;
}

const { REACT_APP_OPEN_CAGE_KEY } = process.env;

export async function getGeocode({ latitude, longitude }: GetGeocodeProps) {
  const response = await axios.get<GeocodeInterface>(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${REACT_APP_OPEN_CAGE_KEY}`,
  );

  const { components } = response.data.results[0];

  return Geocode({ ...components });
}

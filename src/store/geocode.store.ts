/* eslint-disable no-debugger */
import { action, makeObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { GeocodeApi } from '../api';

export default class GeocodeStore {
  @persist('object')
  @observable
  geocodeData: Geocode = {
    city: '',
    state: '',
  };

  constructor() {
    makeObservable(this);
  }

  @action
  getGeocode = async ({ coords }: GeolocationPosition) => {
    const { latitude, longitude } = coords;
    debugger;
    const response = await GeocodeApi.getGeocode({ latitude, longitude });

    this.geocodeData = { city: response.city, state: response.state };
  };

  @action
  changeGeocode = async ({
    coords,
  }: {
    coords: {
      latitude: number;
      longitude: number;
    };
  }) => {
    const { latitude, longitude } = coords;

    const response = await GeocodeApi.getGeocode({ latitude, longitude });

    this.geocodeData = { city: response.city, state: response.state };
  };
}

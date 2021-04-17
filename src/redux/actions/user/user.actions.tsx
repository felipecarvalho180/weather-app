import { GeocodeResponse } from '../../../models/geocode/geocode.model';

const standardAction = 'USER::';

export const UPDATE_USER_GEOCODE = `${standardAction}UPDATE_USER_GEOCODE`;

export const updateUserGeocode = (geocode: GeocodeResponse) => ({
  type: UPDATE_USER_GEOCODE,
  payload: {
    geocode,
  },
});

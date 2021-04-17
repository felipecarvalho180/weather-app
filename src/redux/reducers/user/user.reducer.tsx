import { GeocodeResponse } from '../../../models/geocode/geocode.model';
import { UPDATE_USER_GEOCODE } from '../../actions/user/user.actions';

export interface UserReducer {
  geocode?: GeocodeResponse;
}

interface UserReducerProps {
  type: string;
  payload: UserReducer;
}

const initialState = {};

export const userReducer = (
  state = initialState,
  { type, payload }: UserReducerProps,
) => {
  switch (type) {
    case UPDATE_USER_GEOCODE: {
      return {
        ...state,
        geocode: {
          ...payload.geocode,
        },
      };
    }
    default:
      return state;
  }
};

import { GeocodeResponse } from '../../../models/geocode/geocode.model';
import { UPDATE_USER_GEOCODE } from '../../actions/user/user.actions';

interface UserReducerProps {
  type: string;
  payload: {
    geocode?: GeocodeResponse;
  };
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
        ...payload,
      };
    }
    default:
      return state;
  }
};

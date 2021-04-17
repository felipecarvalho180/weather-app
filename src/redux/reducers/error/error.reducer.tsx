import { UPDATE_ERROR_STATUS } from '../../actions/error/error.actions';

interface ErrorReducerProps {
  type: string;
  payload: {
    errorStatus?: boolean;
  };
}

const initialState = false;

export const errorReducer = (
  state = initialState,
  { type, payload }: ErrorReducerProps,
) => {
  switch (type) {
    case UPDATE_ERROR_STATUS:
      return payload.errorStatus;
    default:
      return state;
  }
};

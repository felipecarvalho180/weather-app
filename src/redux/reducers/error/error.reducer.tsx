import { UPDATE_ERROR_STATUS } from '../../actions/error/error.actions';

export interface ErrorReducer {
  errorStatus: boolean;
  errorMessage?: string;
}
interface ErrorReducerProps {
  type: string;
  payload: ErrorReducer;
}

const initialState = {
  errorStatus: false,
  errorMessage: '',
};

export const errorReducer = (
  state = initialState,
  { type, payload }: ErrorReducerProps,
) => {
  switch (type) {
    case UPDATE_ERROR_STATUS:
      return { ...payload };
    default:
      return state;
  }
};

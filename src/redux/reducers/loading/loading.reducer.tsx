import { UPDATE_LOADING } from '../../actions/loading/loading.actions';

interface LoadingReducerProps {
  type: string;
  payload: {
    loading?: boolean;
  };
}

const initialState = false;

export const loadingReducer = (
  state = initialState,
  { type, payload }: LoadingReducerProps,
) => {
  switch (type) {
    case UPDATE_LOADING:
      return payload.loading;
    default:
      return state;
  }
};

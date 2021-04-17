import { UPDATE_LOADING } from '../../actions/loading/loading.actions';

export interface LoadingReducer {
  loading?: boolean;
}

interface LoadingReducerProps {
  type: string;
  payload: LoadingReducer;
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

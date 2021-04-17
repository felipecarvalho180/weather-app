const standardAction = 'LOADING::';

export const UPDATE_LOADING = `${standardAction}UPDATE_LOADING`;

export const updateLoading = (loading: boolean) => ({
  type: UPDATE_LOADING,
  payload: {
    loading,
  },
});

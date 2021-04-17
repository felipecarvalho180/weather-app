const standardAction = 'ERROR::';

export const UPDATE_ERROR_STATUS = `${standardAction}UPDATE_ERROR_STATUS`;

export const updateErrorStatus = (errorStatus: boolean) => ({
  type: UPDATE_ERROR_STATUS,
  payload: {
    errorStatus,
  },
});

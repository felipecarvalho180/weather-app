const standardAction = 'ERROR::';

export const UPDATE_ERROR_STATUS = `${standardAction}UPDATE_ERROR_STATUS`;

interface UpdateErrorStatusProps {
  errorStatus: boolean;
  errorMessage?: string;
}

export const updateErrorStatus = ({
  errorStatus,
  errorMessage,
}: UpdateErrorStatusProps) => ({
  type: UPDATE_ERROR_STATUS,
  payload: {
    errorStatus,
    errorMessage,
  },
});

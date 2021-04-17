import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateErrorStatus } from '../../redux/actions/error/error.actions';
import { RootState } from '../../redux/reducers';

const PermissionError: React.FC = () => {
  const dispatch = useDispatch();
  const { errorMessage, errorStatus } = useSelector((state: RootState) => ({
    errorMessage: state.error.errorMessage,
    errorStatus: state.error.errorStatus,
  }));

  useEffect(() => {
    if (errorStatus)
      toast.error(`❕ ${errorMessage}`, {
        position: 'top-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () =>
          dispatch(
            updateErrorStatus({
              errorStatus: false,
            }),
          ),
      });
  }, [errorStatus]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default PermissionError;

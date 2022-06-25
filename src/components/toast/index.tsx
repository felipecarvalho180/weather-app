import React from 'react';
import { toast as toastify, ToastOptions } from 'react-toastify';
import ToastifyComponent from './ToastifyComponent';

interface ToastProps {
  message: string;
  params?: ToastOptions;
}

const DEFAULT_TOAST_PARAMS: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default function toast({ message, params }: ToastProps): void {
  toastify.error(
    <ToastifyComponent message={message} />,
    params ? { ...DEFAULT_TOAST_PARAMS, ...params } : DEFAULT_TOAST_PARAMS,
  );
}
